import { Link } from "react-router-dom";
import Style from "./estilo1.module.css";

export function Nav() {
  return (
    <div className={Style.Div}>
      <div className={Style.menu}>
        <img
          className={Style.Aca}
          src="https://i.pinimg.com/originals/66/89/dc/6689dc331be27e66349ce9a4d15ddff3.gif"
          alt="gif"
        />
        <ul>
          <li>
            {" "}
            <Link to="/home">
              <text className={Style.b}>Home</text>
            </Link>
          </li>
        </ul>
      </div>
      <div className={Style.menu}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
          alt="Pokemon"
          style={{ height: "50px" }}
        />
        <ul>
          <li>
            <Link to="/CreatePokemon">
              <text className={Style.c}>Crear Pokemon</text>
            </Link>
          </li>
        </ul>
      </div>
      <div className={Style.menu}>
        <img
          src="https://m.gifmania.cat/Gif-Animats-Manga-Anime/imatges-Animats-Pokemon/Animacions-Pokeball/Pokeball-17369.gif"
          style={{ height: "50px" }}
        />
      <ul>
          <Link to='/MyPokemons'>
          <text className={Style.c}>
              My Pokemons
          </text>
          </Link>
      </ul>
      </div>
      <div className={Style.menu}>
        <img
          className={Style.Aca} src="https://i.gifer.com/HipJ.gif"
          alt="gif"
        />
        <ul>
          <li>
            {" "}
            <Link to="/Pokedex">
              <text className={Style.b}>Pokedex</text>
            </Link>
          </li>
        </ul>
      </div>
      <div className={Style.menu}>
        
        <img
          src="https://thypix.com/wp-content/uploads/2020/04/white-arrow-5-700x368.png"
          style={{ height: "50px" }}
        />
        <ul>
          <li>
            <Link to="/FilterPage">
              <text className={Style.b}>Filter Page</text>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
