import { useEffect } from "react";
import  {useSelector, useDispatch} from "react-redux";
import {GetDetails} from '../actions/actions'

const styleTag = {
    color: "yellow",
    webkitTextStroke: "1px blue",
    letterSpacing: "0.02em",
    position: "relative",
    fontFamily:  "sans-serif",
    fontSize:'25px',
    textShadow:" 0 0 0.15em #1da9cc",
    userSelect: "none",
    whiteSpace: "nowrap",
    filter: "blur(0.007em)",
    animation: "shake 2.5s linear forwards",
    top:'30px',
    margin:'-10px'
    }
    
const styleTag3 = {
    color: "yellow",
    webkitTextStroke: "1px blue",
    letterSpacing: "0.02em",
    position: "relative",
    fontFamily:  "sans-serif",
    fontSize:'25px',
    textShadow:" 0 0 0.15em #1da9cc",
    userSelect: "none",
    whiteSpace: "nowrap",
    filter: "blur(0.007em)",
    animation: "shake 2.5s linear forwards",
    top:'130px',
    left:'370px',
    padding:'15px'
    }

  
    
const styleTag2 = {
    color: "yellow",
    webkitTextStroke: "1px blue",
    letterSpacing: "0.02em",
    position: "relative",
    fontFamily:  "sans-serif",
    fontSize:'25px',
    textShadow:" 0 0 0.15em #1da9cc",
    userSelect: "none",
    whiteSpace: "nowrap",
    filter: "blur(0.007em)",
    animation: "shake 2.5s linear forwards",
    position:'relative',
    left:'100px',
    top:'100px'
    }


export function About({id}){

const Pokemon = useSelector(state => state.Details)

const dispatch = useDispatch();

useEffect(() => dispatch(GetDetails(id)), [dispatch])

return (
    <div>
      {
       Pokemon && (
           
           <div style={{display:'flex',flexDirection:'row', justifyContent:'center', position:'relative', top:'50px'}}>
            <div style={{ width:'250px', height:'400px',borderRadius:'50px',backgroundColor:" rgba(192, 192, 192, .4)", position:'relative', top:'70px',right:'-200px'}}><img style={{width:'200px', position:'relative', top:'75px'}} src={Pokemon.url ? Pokemon.url : 'https://i.ytimg.com/vi/3cLbFhxYPFY/maxresdefault.jpg'}/></div>
            <h1 style={styleTag3}>Tipo: {Pokemon.tipo}</h1>
            <h1 style={styleTag3}>Tipo: {Pokemon.tipo2}</h1>
            <h1 style={styleTag2}>{Pokemon.name}</h1>
               <div style={{display:'grid',gridTemplateColumns:'repeat(2, 1fr)', backgroundColor:'#00aae4',borderRadius:'50px', margin:'15px', height:'210px',width:'500px', position:'relative',top:'200px', right:'20px'}}>
               <h1 style={styleTag}>HP: {Pokemon.hp}</h1>
               <h1 style={styleTag}>Velocidad: {Pokemon.velocidad}</h1>
               <h1 style={styleTag}>Defensa: {Pokemon.defensa}</h1>
               <h1 style={styleTag}>Fuerza: {Pokemon.fuerza}</h1>
               <h1 style={styleTag}>Altura: {Pokemon.altura}</h1>
               <h1 style={styleTag}>Peso: {Pokemon.peso}</h1>
               </div>
     

           </div>
       )  
      }
    </div>
)
}
//,boxShadow: '8px 8px 0 6px #9984',border:'dotted', borderColor:'white', width:'350px',margin:'30px' ,position:'relative', left:'355px', height:'550px', width:'500px'
//backgroundImage: Pokemon.url ? `url(${Pokemon.url})` : 'url(https://media2.giphy.com/media/Gm7LdndVpiCs0/giphy.gif)' 