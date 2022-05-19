import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PlayerList from '../components/PlayerList';
import {Link} from 'react-router-dom'





const Main=() => {
    const [players, setPlayers] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/players')
            .then(res=>{
                setPlayers(res.data);
            })
            .catch(err => console.error(err));
    },[]);

    const removeFromDom = personId => {
        setPlayers(players.filter(person => person._id !== personId));
    }

    return (
        <div>
        <div>
            <Link to='/'>List </Link> &nbsp;&nbsp;| &nbsp;&nbsp;
                <Link to='/players'>Add Player</Link>
        </div>
            <PlayerList players={players} removeFromDom={removeFromDom}/>
        </div>
    )
}

export default Main;