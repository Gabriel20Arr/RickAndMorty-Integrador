import Form from "./views/Form.jsx";
import About from "./views/About.jsx";
import Detail from "./views/Detail.jsx";
import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Nav from "./components/nav/Nav.jsx";
import Cards from "./components/cards11/Cards.jsx";
import Favorite from "./components/Favorite/Favorite.jsx";

function App() {
  const [character, setCharacter] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = (id) => {
    const URL = "http://localhost:3001";
    // const key = "3ecf99bb3382.b75baf9da14b9a8b40d6";

    if (character.find((char) => char.id === id)) {
      return alert("Personaje repetido");
    }

    fetch(`${URL}/onsearch/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacter((oldChars) => [...oldChars, data]);
          // setCharacter([...character, data]);
        } else {
          alert("Algo salió mal");
        }
      });
  };

  const onClose = (id) => {
    setCharacter(character.filter((char) => char.id !== id));
  };

  //! credenciales fake
  const username = "gabriel@gmail.com";
  const pass = "mipass123";

  const login = ({ email, password }) => {
    if (email === username && password === pass) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  const { pathname } = useLocation();
  const locationForm = pathname === "/";

  return (
    <div className="App" style={{ padding: "25px" }}>
      {!locationForm && <Nav onSearch={onSearch} />}

      <Routes>
        <Route path="/" element={<Form login={login} />} />

        <Route
          path="/home"
          element={<Cards characters={character} onClose={onClose} />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/favorite" element={<Favorite />} />

        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
