import Form from "./views/Form.jsx";
import About from "./views/About.jsx";
import Detail from "./views/Detail.jsx";
import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate  } from "react-router-dom";
// import { username, password } from "./views/Form";
// import axios from 'axios';

import Nav from "./components/nav/Nav.jsx";
import Cards from "./components/cards11/Cards.jsx";
import Favorite from "./components/Favorite/Favorite.jsx";
import validation from "./views/validation.js";

function App() {
  const [character, setCharacter] = useState([]);
  // const { pathname } = useLocation();
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

  const login = () => {
    if (validation ) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Credenciales incorrectas");
    }
  };


  const location = useLocation();
  const locationForm = location.pathname === "/";

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
