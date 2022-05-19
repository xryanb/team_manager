import React, { useState } from 'react'
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom';

const PlayerForm=() => {
    const [player, setPlayer] = useState(""); 
    const [position,setPosition]=useState('');
    const navigate=useNavigate();
    const [errors, setErrors] = useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/players', {
            player,
            position
        })
            .then(res=>{
                console.log(res)
                navigate('/',{replace:true})
            })
            .catch(err=>{
                console.log(err)
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)}
                    setErrors(errorArr);
            })
    }
    
    const abortMission=()=>{
        navigate('/',{replace:true})
    }
    return (
        <div>
            <div>
                <Link to='/'>List </Link> &nbsp;&nbsp;| &nbsp;&nbsp;
                <Link to='/players'>Add Player</Link>
            </div>
            <h1>List | ADD PLAYER</h1>
            <div>
            <h3 style={{color:'purple'}}>Add Player</h3>
        <form onSubmit={onSubmitHandler}>
        {errors.map((err, index) => <p key={index} style={{color:'red'}}>{err}</p>)}
            <p>
                <label>Player Name :</label><br/>
                <input type="text" onChange={(e)=>setPlayer(e.target.value)} value={player}/>
            </p>
            <p>
                <label>Preferred Position :</label><br/>
                <input type="text" onChange={(e)=>setPosition(e.target.value)} value={position}/>
            </p>
            <button onClick={abortMission} className='btn btn-danger'>Cancel</button> &nbsp;&nbsp;
            <input type="submit" className='btn btn-primary'/>
        </form>
        </div>
        </div>
    )
}

export default PlayerForm;