import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetAll} from '../actions/actions'

const InputStyle = {
        borderRadius: "20px",
        border: "0",
        width: "200px",
        height: "30px",
        padding: "7px",
        outline: "none",
        marginRight: "20px",
      };
      
const styleButton = {
        borderRadius: '999px',
        backgroundColor: "rgba(128,128,128,0.1)",
        margin:'20px',
        outline:'none',
        fontFamily:'fantasy'
      }

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
  top:'-35px'
}

export function Tipos(){
    const dispatch = useDispatch()


    const Filtrados = useSelector(state => state.Pokemons)

    const [Pag, setPag] = useState(0)
    const [Pag2, setPag2] = useState(8)
  
      function handleSubmit(e) {
        e.preventDefault();
        dispatch(GetAll('tipo', document.getElementById('tipos').value));
      }

    return (
    <div>
  <button style={styleButton} onClick={(e) => {e.preventDefault(); setPag(Pag - 8); setPag2(Pag2 - 8)}}>BACK</button>

        <select style={InputStyle} name='tipos' id='tipos'>
        <option value="">Seleccione un tipo...</option>
          <option value='fire' >Fire</option>
          <option value='water' >Water</option>
          <option value='rock' >Rock</option>
          <option value='grass' >Grass</option>
          <option value='flying' >Flying</option>
          <option value='fighting' >Fighting</option>
          <option value='normal' >Normal</option>
          <option value='poison' >Poison</option>
          <option value='ground' >Ground</option>
          <option value='bug' >Bug</option>
          <option value='ghost' >Ghost</option>
          <option value='steel' >Steel</option>
          <option value='electric' >Electric</option>
          <option value='psychic'>Psychic</option>
          <option value='ice' >Ice</option>
          <option value='dragon' >Dragon</option>
          <option value='dark' >Dark</option>
          <option value='fairy' >Fairy</option>
          <option value='unknown'>Unknown</option>
          <option value='shadow' >Shadow</option>
        </select>
                
     <button
          onClick={(e) => {
          handleSubmit(e)
          }} style={styleButton}
        >Buscar Tipos</button>

<button onClick={(e) => { dispatch(GetAll('viejos', document.getElementById('tipos').value)); e.preventDefault() }} style={styleButton}>Treaer Pokemons Pokeapi</button>

<button onClick={(e) => { dispatch(GetAll('nuevos', document.getElementById('tipos').value)); e.preventDefault() }} style={styleButton}>Treaer Pokemons nuevos</button>

<button style={styleButton} onClick={(e) => {e.preventDefault(); setPag(Pag + 8); setPag2(Pag2 + 8)}}>NEXT</button>

     <div style={{display: 'grid',gridTemplateColumns: 'repeat(4, 1fr)' }}>
        
          {
             Filtrados && Filtrados.slice(Pag,Pag2).map((el , id) => (
               <div key={id} style={{ margin:'20px',boxShadow: "8px 8px 0 6px #9986", height:'230px',backgroundColor:'black', backgroundImage: el.url ? `url(${el.url})` : `url(https://www.pinclipart.com/picdir/big/176-1762585_banner-transparent-by-frosty-pegasis-on-deviantart-pokemon.png)`, backgroundSize:'cover', border:'dotted'}}>
                 <h1 style={styleTag}>{el.name.toUpperCase()}</h1>
               </div>
             )) 
          }
  </div>

        </div>
    )
}
