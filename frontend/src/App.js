import logo from './logo.svg';
import './App.css';
import CreateAccount from './components/CreateAccount';
import LogIn from './components/LogIn';
import ItemContainer from './components/ItemContainer';
import Item from './components/Item';
import {Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <CreateAccount />
      <LogIn />
      <Routes>
        <Route path='/' element={<ItemContainer />}/>
        <Route path='/items/:itemId' element={<Item />}/>
        {/* <Route path='/users/:username' element={<ManagerContainer />}/> */}
      </Routes>
    </div>
  );
}

export default App;
