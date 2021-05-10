const InitialState = {
  MyPokemons: [],
  Pokemons: [],
  Pokemon: [],
  Details: [],
};

function Reducer(state = InitialState, action) {
  switch (action.type) { 
    case "GET_POKEMON":
      return { ...state, Pokemon: action.payload };
      
    case "GET_ALL":
      return { ...state, Pokemons: action.payload };

    case "ADD_FAVORITE": 
      return {
      ...state,
      // MyPokemons: [...state.MyPokemons, action.payload]
      MyPokemons: state.MyPokemons.concat( action.payload),
      };

    case "REMOVE_FAV":
      return {
      MyPokemons: state.MyPokemons.filter((el) => el.uuid !== action.payload),
      };

   case "REMOVE":
        return {
        Pokemon: [],
        };
   
 
    case "GET_DETAILS":
      return {
        Details: action.payload,
      };
      
    case "CREAR_POKEMONS":
      return {
        ...state,
        Pokemons: [ action.payload]
      };
    default:
      return state;
  }
}

export default Reducer;
