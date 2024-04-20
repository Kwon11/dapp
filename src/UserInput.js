import React from 'react';
import { useRootContext } from './RootContext';

const UserInput = () => {
  const { setUser } = useRootContext();

  const handleChange = (e) => {
    e.preventDefault();
    console.log('input handler', e.target.value);
    setUser(e.target.value)
  };

  return (
    <input type="text" id="userInput" onChange={handleChange} name="inputName" style={{width: "100px", height: "100px", backgroundColor: "white"}}></input>
  )
};

export default UserInput;