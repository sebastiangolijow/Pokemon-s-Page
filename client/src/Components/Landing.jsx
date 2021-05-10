import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import {AddFavorite} from '../actions/actions'

const styleButton = {
    borderRadius:'999px',
    outline: 'none',
    backgroundColor:'black',
    color:'#ffff00',
    position: 'relative',
    right:'130px',
    bottom:'-200px',
    fontFamily:'fantasy',
    textDecoration:'none'
}

const styleButton2 = {
    borderRadius:'999px',
    outline: 'none',
    backgroundColor:'black',
    color:'#ffff00',
    position: 'relative',
    right:'10px',
    bottom:'70px',
    fontFamily:'fantasy',
    textDecoration:'none'
}

export function Landing(){

    const dispatch = useDispatch();

    return (
        <div style={{display:'grid', gridTemplateColumns: "repeat(3, 1fr)"}}>

        <div>
        <img style={{width:'450px'}} src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/54fbd6f3-057d-423a-8e69-91ecaf3b50dc/d7b5phl-2e1eb262-203a-4e1d-8bcf-e7643abc7a06.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNTRmYmQ2ZjMtMDU3ZC00MjNhLThlNjktOTFlY2FmM2I1MGRjXC9kN2I1cGhsLTJlMWViMjYyLTIwM2EtNGUxZC04YmNmLWU3NjQzYWJjN2EwNi5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.nIo0iS1_aRtrP_xmPtMYsWjFex-FvsRPI4DW8DwWKyI' alt='Pokemon Gif'/>
       <button onClick={(e) => {
                e.preventDefault();
                dispatch(AddFavorite("f456bc00-8e68-11eb-a0ef-19fc1385f4ce"));
              }} style={styleButton2}> <Link to={'/home'}>Elegir</Link></button>
        </div>

        <div>
       <img  src='https://pa1.narvii.com/7441/16243ca9d8d59019e7c8dfc3362a12d405a90ce9r1-570-460_hq.gif' alt='Pokemon Gif' style={{height:'200px', width:'200px', position:'relative', top:'177px'}}/>
       <button onClick={(e) => {
                e.preventDefault();
                dispatch(AddFavorite("f44ca9e0-8e68-11eb-a0ef-19fc1385f4ce"));
              }} style={styleButton}><Link to={'/home'}>Elegir</Link></button>
       </div>

        <div>
        <img   src='https://pa1.narvii.com/6210/2a85b48869b4e95d461e5d87035e044ef7cb23a7_hq.gif' alt='Pokemon Gif' style={{height:'200px', width:'200px', position:'relative', top:'177px'}}/>
       <button onClick={(e) => {
                e.preventDefault();
                dispatch(AddFavorite("f458b7d0-8e68-11eb-a0ef-19fc1385f4ce"));
              }} style={styleButton}> <Link to={'/home'}> Elegir </Link></button>

        </div>
        
        </div>
    )
}