import './App.css';
import Box from './components/box';
import {useState, useEffect} from 'react';

function App() {
  useEffect(() => {
    fetchImages();
  },[])


  const [user, setUser] = useState();
  const [age, setAge] = useState();
  const [photos, setPhotos] = useState([]);
  // const [username, setUsername] = useState();
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();

  // const submitHandler = async (event) => {
  //   event.preventDefault();
  //   console.log(username,email,password);
 //}

  const array =[{name:"Harry Potter", age:"15"}, {name:"George Weasley", age:"17"}, {name:"Percy Weasley", age:"20"} ]

//  for (let i=0; i< array.length; i++) {
//   console.log(array[i])
//  }

// is IDENTICAL to

//  array.map((item,index) => {
//   console.log(index, item)
//  })

const fetchImages = async () => {
  const response = await fetch ("https://picsum.photos/v2/list");
  const data = await response.json();
  setPhotos(data);
}

  return (
    <div className="App">
      {/* {array.map((item,index) => {
        return (
          <div>
            <Box name={item.name} age={item.age} />
          </div>
        )
      })} */}
{/*  <img src="https://picsum.photos/v2/list" alt="a random photo from lorem picsum" /> */}

{/* <button onClick={(event) => fetchImages()}>Fetch the Images!</button> */}

{photos.map((item,index)=>{
  return (
    <div>
      <img src={item.download_url} width="200"/>
      <h2>{item.author}</h2>
    </div>
  )
})}








      {/* <form onSubmit ={submitHandler}>
        <label>Username:
            <input onChange ={(event) => setUsername(event.target.value)}/>
        </label>
        <br></br>
        <label>Email:
            <input type="email" onChange ={(event) => setEmail(event.target.value)}/>
        </label>
        <br></br>
        <label>Password:
            <input onChange ={(event) => setPassword(event.target.value)}/>
        </label>
        <br></br>
        <button type="submit">Click here to signup or login</button>
    </form>
      <input onChange={(event) => setUser(event.target.value)}/>
      <input onChange={(event) => setAge(event.target.value)}/>
      {user ? <div>
        <h1>Harry Potter</h1>
      <Box name="George Weasley" age="17" />
      <Box name="Hermione Grainger" age="15" />
      <Box name="Rubeus Hagrid" age="47" />
      <Box name={user} age={age} />
      </div>
      :<div>
        <h1>This is the else part of the statement</h1>
        </div>} */}

    </div>
  );
}

export default App;
