import './App.css';
import { Route} from "react-router-dom";
import {Landing} from './Components/Landing';
import {Nav} from './Components/Nav';
import {Home} from './Components/Home';
import { MyPokes } from './Components/MyPokemons';
import { About } from './Components/About';
import { CreatePokemon } from './Components/CreatePokemon';
import { Tipos } from './Components/Tipos';
import { Pokemon1 } from './Components/Pokemon1';
import {Me } from './Components/Me';






function App() {
  return (
    <div className="App">
      <Route path='/'  component={Nav}/>
      <Route exact path='/' component={Landing}/>
      <Route path='/FilterPage' component={Tipos}/>
      <Route path='/home' component={Home}/>
      <Route path='/MyPokemons' component={MyPokes}/>
      <Route exact path='/pokemons/:id' render={({match}) => <About id={match.params.id}/>}/>
      <Route path='/CreatePokemon' component={CreatePokemon}/>
      <Route path='/Pokedex' component={Pokemon1}/>
      <Route path='/Me' component={Me}/>

    </div>
  );
}

export default App;
