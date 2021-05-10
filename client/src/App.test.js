// import { render, screen } from '@testing-library/react';
// import App from './App';
import { Link } from 'react-router-dom';
var {expect } = require('chai')
import {Home } from './Components/Home'
import {Nav } from './Components/Nav'
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe(Home, () => {
  let wrapper = shallow(<Home/>)
  it('it should be a function', () => {
      expect(Home).to.be.a('function')
    });
    it('Renderiza un <form>', () => {
      expect(wrapper.find('form'))
    })
    it('Renderiza un <Pokemonss>', () => {
      expect(wrapper.find('Pokemonss'))
    })
   


  
describe(Nav, () => {
  let wrapper = shallow(<Nav/>)
  it('it should be a function', () => {
      expect(Home).to.be.a('function')
    });
    it('Deberia renderizar  <Link />', () => {
      expect(wrapper.find(Link)).to.have.length(4);
    });
    it('El primer Link debe cambiar la ruta hacia "/home".', () => {
      expect(wrapper.find(Link).at(0).prop('to')).to.equal('/home');
    });
    it('El primer Link debe cambiar la ruta hacia "/CreatePokemon".', () => {
      expect(wrapper.find(Link).at(1).prop('to')).to.equal('/CreatePokemon');
    });
    it('El primer Link debe cambiar la ruta hacia "/MyPokemons".', () => {
      expect(wrapper.find(Link).at(2).prop('to')).to.equal('/MyPokemons');
    });
    it('El primer Link debe cambiar la ruta hacia "/FilterPage".', () => {
      expect(wrapper.find(Link).at(3).prop('to')).to.equal('/FilterPage');
    });
  });


 
