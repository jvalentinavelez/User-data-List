
import React, { useState, Fragment  } from 'react';
//import Card from './UI/Card';
import AddUser from './components/AddUser/AddUser';
import UserList from './components/UserList/UserList';

function App() {

  const [userArray, setUserArray] = useState([]);

  const saveHandler = (userData) => {
    //const  newUserArray= [...userArray, userData];
    // Actualizar el estado con el nuevo array que contiene el objeto añadido
   //setUserArray(newUserArray);
    setUserArray((prevUserArray)=>{
      return [...prevUserArray, userData];

    });
  }

  return (
    <Fragment>
      <AddUser onSaveUser={saveHandler}></AddUser>
      {userArray.length > 0 && <UserList onDisplayList={userArray}></UserList>}
    </ Fragment>
  );
}

export default App;
