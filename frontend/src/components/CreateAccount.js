import {useState} from 'react';

const CreateAccount = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = async () => {
    let response = await fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        username: username,
        password: password
      }),
      credentials: 'include'
    })
    return response.json();
  }

  return (
    <>
      <form id='create-account-form'>
        <input
          type='text'
          id='first-name'
          name='first-name'
          placeholder='First Name'
          onChange={(e)=>setFirstName(e.target.value)}/>
        <input
          type='text'
          id='last-name'
          name='last-name'
          placeholder='Last Name'
          onChange={(e)=>setLastName(e.target.value)}/>
        <input
          type='text'
          id='username'
          name='username'
          placeholder='Username'
          onChange={(e)=>setUsername(e.target.value)}/>
        <input
          type='password'
          id='password'
          name='password'
          placeholder='Password'
          onChange={(e)=>setPassword(e.target.value)}/>
      </form>
      <button onClick={handleCreateAccount}>Create Account</button>
    </>
  );
}

export default CreateAccount;