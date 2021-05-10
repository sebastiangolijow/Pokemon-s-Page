import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import {CrearPokemon, GetAll} from '../actions/actions'

const styleButton = {
    borderRadius: "999px",
    backgroundColor: "white",
    margin: "20px",
    outline: "none",
    fontFamily: "fantasy",
    height:'37px',
    width:'85px',
    fontSize:'11px'
  };

  const InputStyle = {
    borderRadius: "20px",
    border: "0",
    width: "175px",
    height: "30px",
    padding: "7px",
    outline: "none",
    marginRight: "20px",
  };


export function CreatePokemon() {
const dispatch = useDispatch()

const Todos = useSelector((state) => state.Pokemons)

const [Estado, setEstado] = useState({name: "", tipo:"" ,tipo2:"", hp:"", fuerza:"", defensa:"",velocidad:"",peso:"",altura:"",})

useEffect(()=> dispatch(GetAll('todos')), [dispatch])

function handlechange(e) {
    setEstado({ ...Estado, [e.target.name]: e.target.value });
  }

function  handlesubmit(e) {
e.preventDefault();
if(!Estado.name){
  return alert('Debes elgir un Nombre')
}


let nombres = []
for (let i = 0; i < Todos.length; i++){
  nombres.push(Todos[i].name)
}

for(let i = 0; i < nombres.length; i++){
  if(Estado.name === nombres[i]){
    console.log('aca2')
    setEstado({name: "", tipo:"" ,tipo2:"", hp:"", fuerza:"", defensa:"",velocidad:"",peso:"",altura:""})
    return alert('Pokemon existente')
  } 
}
 Estado.tipo = document.getElementById('tipos').value
 Estado.tipo2 = document.getElementById('tipos2').value

 console.log(document.getElementById('tipos').value)
 console.log(Estado)
  dispatch(CrearPokemon(Estado));
  setEstado({name: "", tipo:"" ,tipo2:"", hp:"", fuerza:"", defensa:"",velocidad:"",peso:"",altura:""})
  alert('Pokemon creado')
}

    return (
        <form>
        <div style={{margin:'20px', backgroundImage:'url(https://www.pkparaiso.com/imagenes/espada_escudo/sprites/animados-gigante/minccino.gif)', height:'1150px', backgroundSize:'cover'}}>
            <input style={InputStyle} name="name" onChange={handlechange} value={Estado.name} placeholder='name'/>
         <select style={InputStyle} name='tipos' id='tipos'>
        <option value="" disabled selected>Seleccione una tipo...</option>
          <option value='fire' id='fire'>Fire</option>
          <option value='water' id='fire'>Water</option>
          <option value='rock' id='fire'>Rock</option>
          <option value='grass' id='fire'>Grass</option>
          <option value='flying' id='fire'>Flying</option>
          <option value='fighting' id='fire'>Fighting</option>
          <option value='normal' id='fire'>Normal</option>
          <option value='poison' id='fire'>Poison</option>
          <option value='ground' id='fire'>Ground</option>
          <option value='bug' id='fire'>Bug</option>
          <option value='ghost' id='fire'>Ghost</option>
          <option value='steel' id='fire'>Steel</option>
          <option value='electric' id='fire'>Electric</option>
          <option value='psychic' id='fire'>Psychic</option>
          <option value='ice' id='fire'>Ice</option>
          <option value='dragon' id='fire'>Dragon</option>
          <option value='dark' id='fire'>Dark</option>
          <option value='fairy' id='fire'>Fairy</option>
          <option value='unknown' id='fire'>Unknown</option>
          <option value='shadow' id='fire'>Shadow</option>
        </select>
        <select style={InputStyle} name='tipos' id='tipos2'>
        <option value="" disabled selected>Seleccione una tipo...</option>
          <option value='fire' id='fire'>Fire</option>
          <option value='water' id='fire'>Water</option>
          <option value='rock' id='fire'>Rock</option>
          <option value='grass' id='fire'>Grass</option>
          <option value='flying' id='fire'>Flying</option>
          <option value='fighting' id='fire'>Fighting</option>
          <option value='normal' id='fire'>Normal</option>
          <option value='poison' id='fire'>Poison</option>
          <option value='ground' id='fire'>Ground</option>
          <option value='bug' id='fire'>Bug</option>
          <option value='ghost' id='fire'>Ghost</option>
          <option value='steel' id='fire'>Steel</option>
          <option value='electric' id='fire'>Electric</option>
          <option value='psychic' id='fire'>Psychic</option>
          <option value='ice' id='fire'>Ice</option>
          <option value='dragon' id='fire'>Dragon</option>
          <option value='dark' id='fire'>Dark</option>
          <option value='fairy' id='fire'>Fairy</option>
          <option value='unknown' id='fire'>Unknown</option>
          <option value='shadow' id='fire'>Shadow</option>
        </select>
            <input style={InputStyle} name='hp' onChange={handlechange} value={Estado.hp} placeholder='hp'/>
            <input style={InputStyle} name='fuerza' onChange={handlechange} value={Estado.fuerza} placeholder='fuerza'/>
            <input style={InputStyle} name='defensa'  onChange={handlechange} value={Estado.defensa} placeholder='defensa'/>
            <input style={InputStyle} name='velocidad' onChange={handlechange} value={Estado.velocidad} placeholder='velocidad'/>
            <input style={InputStyle} name='peso' onChange={handlechange} value={Estado.peso} placeholder='peso'/>
            <input style={InputStyle} name='altura' onChange={handlechange} value={Estado.altura} placeholder='altura'/>
            <button style={styleButton} onClick={(e) => handlesubmit(e)}>Crear Pokemon</button>
        </div>
        <img src='' style={{position:'relative', top:'-30px'}} />
        </form>
    )
}