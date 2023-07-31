import {useState} from 'react';

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogIn = async () => {
    let response = await fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      }),
      credentials: 'include'
    })
    return response.json();
  }

  return (
    <>
      <form id='login-form'>
        <input
            type='text'
            id='login-username'
            name='login-username'
            placeholder='Username'
            onChange={(e)=>setUsername(e.target.value)}/>
          <input
            type='password'
            id='login-password'
            name='login-password'
            placeholder='Password'
            onChange={(e)=>setPassword(e.target.value)}/>
      </form>
      <button onClick={handleLogIn}>Log in</button>
    </>
  )
}

export default LogIn;