import axios from 'axios'
import {baseURL} from '../index'
const GET_POKEMON = 'GET_POKEMON';
const GET_ALL = 'GET_ALL';



export function GetPokemon(name) {
  return function (dispatch) {
    return fetch(`${baseURL}/pokemons?name=` + name)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: GET_POKEMON, payload: json });
      }).catch((err)=>alert('Pokemon no existe'))
  };
}


export function GetAll(all, data) {
  return function (dispatch) {
      return fetch(`${baseURL}/pokemons?all=${all}&data=${data}`)
        .then((response) => response.json())
        .then((json) => { dispatch({ type: GET_ALL, payload: json })
        }).catch((err)=>console.log(err))
      }
    }

export function GetDetails(id) {
      return function (dispatch) {
        return fetch(`${baseURL}/pokemons/` + id)
          .then((response) => response.json())
          .then((json) => {
            dispatch({ type: "GET_DETAILS", payload: json });
          }).catch((err)=>console.log(err))
      };
    }
      

export function AddFavorite(uuid) {
  return function (dispatch) {
    return fetch(`${baseURL}/pokemons/` + uuid)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        dispatch({ type: "ADD_FAVORITE", payload: json });
      }).catch((err)=>console.log(err))
  };
}


export function CrearPokemon({name, tipo,tipo2, hp, velocidad, fuerza, defensa, altura, peso}){
    return function (dispatch){
        axios.post(`${baseURL}/pokemons`, {name, tipo,tipo2, hp, velocidad, fuerza, defensa,altura,peso})
            .then(res =>
                dispatch({
                    type: 'CREAR_POKEMON',
                    payload: true
                }),
            ).catch(e => alert("Errors dates"))
    }
};

export const RemoveFav = (uuid) => {
  return {
    type: "REMOVE_FAV",
    payload: uuid,
  };
};
export const Remove1 = (uuid) => {
  return {
    type: "REMOVE",
    payload: uuid,
  };
};

export const RemovePokemons = () => {
  return {
    type: "REMOVE_POKEMONS",
  };
};
