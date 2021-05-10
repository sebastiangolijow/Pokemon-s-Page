import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  GetAll,
  RemovePokemons,
} from "../actions/actions";
import Style from './pokemons.module.css'


const styleButton = {
  borderRadius: "999px",
  backgroundColor: "rgba(128,128,128,0.1)",
  margin: "20px",
  outline: "none",
  fontFamily: "fantasy",
  height:'20px',
  width:'70px',
  fontSize:'11px'
};

const styleButton2 = {
  backgroundColor: "rgba(128,128,128,0.1)",
  margin: "20px",
  outline: "none",
  fontFamily: "fantasy",
  height:'60px',
  width:'60px',
  fontSize:'11px',
  position:'relative',
  left:'330px'
};

const styleButton3 = {
  backgroundColor: "rgba(128,128,128,0.1)",
  margin: "20px",
  outline: "none",
  fontFamily: "fantasy",
  height:'60px',
  width:'60px',
  fontSize:'11px',
  position:'relative',
  right:'310px'
};

const InputStyle = {
  borderRadius: "20px",
  border: "0",
  width: "175px",
  height: "20px",
  padding: "2px",
  outline: "none",
  marginRight: "20px",
  marginTop:'20px',
  
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


export function Pokemonss() {
  const [Pag, setPag] = useState(0)

  const [Pag2, setPag2] = useState(4)

  const Pokemons = useSelector((state) => state.Pokemons);

  const dispatch = useDispatch();

  function disable(){
  if(Pag <= 0 || Pag2 <= 4){
   document.getElementById('button1').disabled = true;
  } else {
   document.getElementById('button1').disabled = false;
  }
  if(Pag2 >= 152){
    document.getElementById('button2').disabled = true;
  } else {
    document.getElementById('button2').disabled = false;
  }
}
 
useEffect(() => disable())

  return (
    <div style={{ height:'500px', backgroundSize:'cover', position:'relative', right:'190px', top:'520px', backgroundImage:'url(https://image.freepik.com/vector-gratis/fondo-blanco-textura-rayas_105940-672.jpg)'}}>
    <form style={{ display: "flex", justifyContent: "space-between",backgroundImage:'url(https://image.freepik.com/vector-gratis/fondo-blanco-textura-rayas_105940-672.jpg)' }}>

     <div style={{display:'grid', gridTemplateColumns: 'repeat(5, 1fr)', position:'absolute', left:'500px', width:'250px', top:'-500px',backgroundImage:'url(https://image.freepik.com/vector-gratis/fondo-blanco-textura-rayas_105940-672.jpg)'}}>
     
      <button id='button1'
          style={styleButton3}
          onClick={(e) => {
            e.preventDefault();
            setPag(Pag - 4);
            setPag2(Pag2 - 4);
          }} > <img src='https://images.emojiterra.com/openmoji/v12.2/512px/1f519.png' style={{height:'50px', width:'50px'}}/> </button>


      <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(GetAll(document.getElementById('options').value));
          }}
          style={styleButton}
        >
          Buscar 
        </button>


       <select style={InputStyle} id='options'>
         <option value=''  disabled selected>Filtrar por...</option>
         <option value='todos'>Todos</option>
         <option value='ordenalfa'>Orden Z - A</option>
         <option value='ordenalfaB'>Orden A - Z</option>
         <option value='ordenfuerza'>Orden Fuerza Menor - Mayor</option>
         <option value='ordenalfaB'>Orden Fuerza Mayor - Menor</option>
       </select>

        
        
         <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(RemovePokemons());
          }}
          style={styleButton}
        >
          Remove
        </button>

        <button id='button2'
          style={styleButton2}
          onClick={(e) => {
            e.preventDefault();
            setPag(Pag + 4);
            setPag2(Pag2 + 4);
          }} > <img src='https://images.emojiterra.com/openmoji/v12.2/512px/27a1.png' style={{height:'50px', width:'50px'}}/> </button>

        </div>
      <div className={Style.container}>
        {Pokemons &&
          Pokemons.slice(Pag, Pag2).map((data, id) => (
            <div className={Style.pokemons}
              key={id}
              style={{
                boxShadow: "8px 8px 0 6px #9986",
                border: "solid",
                borderColor: "white",
                margin: "20px",
                height: "400px",
                width:"280px",
                backgroundColor:'black',
                backgroundSize:'cover', 
                position:'relative',
                left:'575px',
                $transition: '0.6s $cubic',
                $size: '40px',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{backgroundColor:" rgba(192, 192, 192, .2)"}}> <img src={data.url ? data.url : 'https://i.ytimg.com/vi/3cLbFhxYPFY/maxresdefault.jpg'} style={{height:'250px',borderRadius: "100%",borderColor:'black', border:" 6px solid #272133"}}/></div>
              <div style={{backgroundColor:" rgba(0, 0, 0, .2)"}}><h1 style={styleTag}>Nombre: {data.name.toUpperCase()}</h1>
              <h1 style={styleTag}>Tipo: {data.tipo.toUpperCase()}</h1>
              <h1 style={styleTag}>Fuerza: {data.fuerza}</h1></div>
            </div>
          ))}
      </div>
    </form>
    </div>
  );
}
