import axios from "axios";
import React,{useState,useEffect} from 'react';
import {Link,useNavigate} from 'react-router-dom';






const PlayerStatus = (props) => {
    const [players, setPlayers] = useState([]);
    const navigate=useNavigate();
    const [flip,setFlip]=useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/players')
            .then(res=>{
                setPlayers(res.data);
                
            })
            .catch(err => console.error(err));
    },[flip]);

    const updatePlayer = (a,id) => {
        console.log(a,id);
        axios.put(`http://localhost:8000/api/players/${id}`, {
            action:a
        })
            .then(res => {
                setFlip(!flip)
                navigate('/players/status',{replace:true})
                console.log(res)
                
            })
                
                .catch(err=>{console.log(err)})
    }


    return (
        <div>
            <div>
            <h1>Player Status-Game 1</h1>
                <Link to='/players/status'>Game 1 </Link> &nbsp;&nbsp;| &nbsp;&nbsp;
                <Link to='/players/status/2'>Game 2</Link> &nbsp;&nbsp;| &nbsp;&nbsp;
                <Link to='/players/status/3'>Game 3</Link> 
            </div>
            
            <div className='m-auto d-flex justify-content-center alight-items-center '>
                <table className="table table-dark table-striped-columns">
                    <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                {players.map( (person) => { 
                        return(
                    <tr key={person._id}>
                        <td style={{color:'purple'}}>{person.player}</td>
                    <td><button  className={person.action === 2 ? "btn btn-success" : ''} onClick={()=>updatePlayer(2,person._id)} >Playing</button>&nbsp;&nbsp;
                    <button className={person.action === 1 ? "btn btn-danger" : ''}onClick={()=>updatePlayer(1,person._id)} >Not Playing</button>&nbsp;&nbsp;
                    <button className={person.action === 0 ? "btn btn-warning": ''} onClick={()=>updatePlayer(0,person._id)}>Undecided</button>
                    </td>
                    </tr>
                )}
                
            )}
            </tbody>
                </table>
                </div>
        </div>
    )
}
    
export default PlayerStatus;