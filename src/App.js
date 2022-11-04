import './App.css';
import {useState, useEffect} from 'react';
import SignOrLog from './components/signOrLog';
import { perLogin } from './utils';
import Logout from './components/logout'


function App() {
  const [photos, setPhotos] = useState([]);
  const [user, setUser] = useState();


useEffect(() => {
  fetchImages();
},[user])
useEffect (() => {
  perLogin(setUser);
},[user])



const fetchImages = async () => {
const response = await fetch ("https://picsum.photos/v2/list");
const data = await response.json();
setPhotos(data);
}

return (
  <div className="App">
  {!user && <SignOrLog setUser={setUser}/>}
  {user && <Logout setUser={setUser}/>}
{user ? <h1>{user} is logged in</h1> : <h1>Nobody logged in</h1>}
{user && (photos.map((item,index)=>{
  return (
    <div>
      <img key={index} src={item.download_url} alt="photo from picsum" width="200"/>
      <h2>{item.author}</h2>
    </div>
  )}))}
    </div>
  );
};

export default App;