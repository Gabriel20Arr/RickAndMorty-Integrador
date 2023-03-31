import Form from "./views/Form.jsx";
import About from "./views/About.jsx";
import Detail from "./views/Detail.jsx";
import "./App.css";
import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Nav from "./components/nav/Nav.jsx";
import Cards from "./components/cards11/Cards.jsx";
import Favorite from "./components/Favorite/Favorite.jsx";

function App() {
  const [character, setCharacter] = useState([]);

  const onSearch = (id) => {
    const URL = "https://be-a-rym.up.railway.app/api";
    const key = "3ecf99bb3382.b75baf9da14b9a8b40d6";

    if (character.find((char) => char.id === id)) {
      return alert("Personaje repetido");
    }

    fetch(`${URL}/character/${id}?key=${key}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacter((oldChars) => [...oldChars, data]);
          // setCharacters([...characters, data]);
        } else {
          alert("Algo salió mal");
        }
      });
  };

  const onClose = (id) => {
    setCharacter(character.filter((char) => char.id !== id));
  };

  const location = useLocation();
  const locationForm = location.pathname === '/';

  return (
    <div className="App" style={{ padding: "25px" }}>
      
    {!locationForm && <Nav onSearch={onSearch} />}

      <Routes>
        <Route path="/" element={<Form />} />

        <Route
          path="/home"
          element={<Cards characters={character} onClose={onClose} />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/favorite" element={ <Favorite/> } />

        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
