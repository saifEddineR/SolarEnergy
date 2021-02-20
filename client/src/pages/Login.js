import React, { useState, useEffect } from 'react';
import { loginUser, checkUser } from '../action/authActions';
import { useDispatch, useSelector } from 'react-redux';

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const [info, setInfo] = useState({
    name: '',
    password: '',
  });
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (auth.isAuth) {
      return history.push('/control-panel');
    }
  }, [auth.isAuth]);
  useEffect(() => {
    dispatch(checkUser());
  }, []);

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const login = (e) => {
    e.preventDefault();
    dispatch(loginUser(info));
  };

  return (
    <div>
      <form onSubmit={login}>
        <div>
          <label>name</label>
          <input type='text' name='name' value={info.name} onChange={handleChange} />
        </div>
        <div>
          <label>password</label>
          <input
            type='password'
            name='password'
            value={info.password}
            onChange={handleChange}
          />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
