import "../styles/App.scss";
import { useState, useEffect } from "react";
import dataTasks from "../data/tasks.json";
//import callToApi from "../services/api";

function App() {
  const [data, setData] = useState(dataTasks);
  const [searchFilter, setSearchFilter] = useState("");
  const [searchSelect, setSearchSelect] = useState("");
  const [newQuote, setNewQuote] = useState({
    quote: "",
    character: "",
  });
  ////////////////////
  // Llamar a la api con useEffect

  /*useEffect(() => {
    callToApi().then((response) => {
     setData(response);
    });
  }, []);*/
  ////////////////////

  const filteredData = data
    .filter((dataItem) =>
      dataItem.quote.toLowerCase().includes(searchFilter.toLowerCase())
    )
    .filter((dataItem) =>
      dataItem.character.toLowerCase().includes(searchSelect.toLowerCase())
    );
  const handleFilter = (ev) => {
    setSearchFilter(ev.currentTarget.value);
  };
  /////////////////////////////7

  const handleSelect = (ev) => {
    setSearchSelect(ev.currentTarget.value);
  };

  /////////////////////////////////

  ///////////////////////
  const handleAddButton = (ev) => {
    ev.preventDefault();
    setData([...data, newQuote]);
  };
  //////////////////////////////
  const handleNewQuote = (ev) => {
    const inputId = ev.target.id;
    const inputValue = ev.target.value;
    setNewQuote({ ...newQuote, [inputId]: inputValue });
  };

  ////////////////////////////////

  /////////////////////////////////
  const htmlLi = filteredData.map((dataItem, id) => {
    return (
      <li key={id}>
        <h3>{dataItem.quote}</h3>
        <span>{dataItem.character}</span>
      </li>
    );
  });
  return (
    <div className="App">
      <header>
        <h1>Frases de Friends</h1>
      </header>
      <main>
        <form action="">
          filtrar por frase
          <input type="text" onChange={handleFilter} value={searchFilter} />
          filtrar por personaje
          <select onChange={handleSelect} value={searchSelect}>
            <option>Todos</option>
            <option>Ross</option>
            <option>Monica</option>
            <option>Joey</option>
            <option>Phoebe</option>
            <option>Chandler</option>
            <option>Rachel</option>
          </select>
        </form>
        <ul>{htmlLi}</ul>
        <form action="">
          <h2> Añadir nueva frase</h2>
          Frase
          <input
            type="text"
            id="quote"
            onChange={handleNewQuote}
            value={newQuote.quote}
          />
          Personaje
          <input
            type="text"
            id="character"
            onChange={handleNewQuote}
            value={newQuote.character}
          />
          <button onClick={handleAddButton}>Añadir una nueva frase</button>
        </form>
      </main>
    </div>
  );
}

export default App;
