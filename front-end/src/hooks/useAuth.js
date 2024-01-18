import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLoginMutation, useRegisterMutation } from '../slices/usersSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';

const useAuth = (redirect, navigate) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');

  const [name, setName] = useState('');

  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const [register] = useRegisterMutation();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      console.log(res);
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match! try again!');
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate(redirect);
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    loginHandler,
    registerHandler,
    name,
    setName,
    confirmPassword,
    setConfirmPassword,
  };
};

export default useAuth;
