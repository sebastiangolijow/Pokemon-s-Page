import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetPokemon, AddFavorite, RemovePokemons, Remove1} from "../actions/actions";
import { Link } from "react-router-dom";
import Style from './pokemon1.module.css'

const InputStyle = {
  // borderRadius: "20px",
  border: "0",
  width: "175px",
  height: "20px",
  padding: "7px",
  outline: "none",
  marginRight: "20px",
};
const styleButton = {
  borderRadius: "999px",
  backgroundColor: "white",
  margin: "20px",
  outline: "none",
  fontFamily: "fantasy",
  height:'37px',
  width:'80px',
  fontSize:'11px'
};


const styleTag = {
  color: "yellow",
  webkitTextStroke: "1px blue",
  letterSpacing: "0.02em",
  position: "relative",
  fontFamily:  "sans-serif",
  fontSize:'20px',
  textShadow:" 0 0 0.15em #1da9cc",
  userSelect: "none",
  whiteSpace: "nowrap",
  filter: "blur(0.007em)",
  animation: "shake 2.5s linear forwards",
};


export function Pokemon1() {
  const [Input, setInput] = useState({ input: "" });

  const Pokemon = useSelector((state) => state.Pokemon);

  const dispatch = useDispatch();

  function handlechange(e) {
    setInput({ ...Input, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(!Input.input){
      return alert('Debes escribir un nombre..')
    }

    dispatch(GetPokemon(Input.input));

    setInput({ input: "" });
  }
  
  return (
    <div style={{ height:'500px', backgroundSize:'cover',position:'relative', left:'450px', top:'30px'}}>
    <form style={{ display: "flex", justifyContent: "space-between", }}>
      <div>
      <h1 style={{position:'relative',color:'#8a9597 ', right:'1380px', top:"-50px"}}>Pokedex</h1>
      <div style={{backgroundColor:'#8a9597', width:'2000px',height:'100px' ,position:'relative', right:'830px', top:'-50px'}}>
      <label style={{position:'relative', top:'-50px', left:'250px', color:'#8a9597'}}><strong>Ingresa Nombre</strong></label>
        <button onClick={(e) => handleSubmit(e)} style={styleButton}>
          Search
        </button>
        <input
          value={Input.input}
          name="input"
          onChange={handlechange}
          style={InputStyle}
          placeholder="Busca tu Pokemon"
        />
     </div>
        {Pokemon && (
          <div className={Style.pokemon1} >
            <div style={{backgroundColor:" rgba(192, 192, 192, .2)"}}> <img src={Pokemon.url ? Pokemon.url : 'https://i.ytimg.com/vi/3cLbFhxYPFY/maxresdefault.jpg'} style={{height:'150px',borderRadius: "100%",borderColor:'black', border:" 6px solid #272133"}}/></div>

            <Link to={`/pokemons/${Pokemon.uuid}`}>
              <h1 style={styleTag}>Nombre: {Pokemon.name}</h1>
            </Link>

            <h1 style={styleTag}>Tipo: {Pokemon.tipo}</h1>
            <div style={{display:'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
            <button
              onClick={(e) => {
                e.preventDefault();
                dispatch(AddFavorite(Pokemon.uuid));
              }}
              style={styleButton}
            >
              Add
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                dispatch(Remove1(Pokemon.uuid));
              }}
              style={styleButton}
            >
              Remove
            </button>
            </div>
          </div>
        )}
      </div>
    </form>
    </div>
  );
}