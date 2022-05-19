import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

    
const PlayerList = (props) => {
    const { removeFromDom } = props;
    
    const deletePlayer = (playerId) => {
        axios.delete(`http://localhost:8000/api/players/${playerId}`)
            .then(res => {
                removeFromDom(playerId)
            })
            .catch(err => console.error(err));
    }


    return (
        <div>
            <div className='m-auto d-flex justify-content-center alight-items-center '>
                <table className="table table-dark table-striped-columns">
                    <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Preferred Positions</th>
                        <th>Actions available</th>
                    </tr>
                    </thead>
                    <tbody>
                {props.players.map( (person) => { 
                    
                    return(
                        
                    <tr key={person._id}>
                        <td style={{color:'purple'}}>{person.player}</td>
                        <td style={{color:'purple'}}>{person.position}</td>
                        <td><button className="btn btn-danger" onClick={(e)=>{deletePlayer(person._id)}}>Delete</button></td>
                    </tr>
                )}
        
            )}
            </tbody>
                </table>
                </div>
        </div>
    )
}
    
export default PlayerList;
