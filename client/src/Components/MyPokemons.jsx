import { useSelector, useDispatch } from "react-redux";
import { RemoveFav } from "../actions/actions";

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
};

const styleButton = {
  borderRadius: "999px",
  backgroundColor: "rgba(192, 192, 192, .2)",
  margin: "20px",
  outline: "none",
  fontFamily: "fantasy",
  
};

export function MyPokes() {
  const Pokemons = useSelector((state) => state.MyPokemons);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "grid",
        boxShadow: "8px 8px 0 6px #9984",
        gridTemplateColumns: "repeat(3, 1fr)",
      }}
    >
      {Pokemons &&
        Pokemons.map((data, id) => (
          <div key={id}>
            <div style={{ backgroundColor:" rgba(192, 192, 192, .1)",marginTop:'30px', width:'150px', position:'relative', left:'135px'}}><img src={data.url ? data.url : 'data:image/jpeg;base64,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'}/></div>
            <h1 style={styleTag}>{data.name.toUpperCase()}</h1>
            <h1 style={styleTag}>{data.tipo.toUpperCase()}</h1>
            <button
              onClick={(e) => {
                e.preventDefault();
                dispatch(RemoveFav(data.uuid));
              }}
              style={styleButton}
            >
              Remove
            </button>
          </div>
        ))}
    </div>
  );
}



           