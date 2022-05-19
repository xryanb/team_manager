import {Link,Routes,Route} from 'react-router-dom';
import './App.css';
import PlayerForm from './components/PlayerForm';
import Main from './views/Main';
import PlayerStatus from './components/PlayerStatus';
import PlayerStatus2 from './components/PlayerStatus2';
import PlayerStatus3 from './components/PlayerStatus3';

function App() {
  return (
    <div className="App">
      <h1> <Link to='/'>Manage Players</Link> | <Link to='/players/status'>Manage Player Status</Link></h1>
    

    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path="/players" element={<PlayerForm/>}/>
      <Route path='/players/status' element={<PlayerStatus/>}/>
      <Route path='/players/status/2' element={<PlayerStatus2/>}/>
      <Route path='/players/status/3' element={<PlayerStatus3/>}/>
    </Routes>



    </div>
  );
}

export default App;
