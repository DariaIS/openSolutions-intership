import { Dispatch, SetStateAction } from 'react';
import { authorize } from './slice';
import { AppDispatch } from '../store';

type IfetchSignIn = (
  login: string,
  password: string,
  setError: Dispatch<SetStateAction<string>>
) => Dispatch<AppDispatch>;

export const fetchSignIn: IfetchSignIn = (login, password, setError) => {
  
  return (dispatch) => {
    fetch('http://127.0.0.1:8080/authorize', {
      headers:  {
        'Content-type': 'application/json',
        'Accept': 'application/json',
      },
      method: "POST",
      body: JSON.stringify({loginData: {login, password}})
    })
      .then((Response) => Response.json())
      .then((json) => {
        if (json.isLogin) {
          dispatch(authorize({ login, password }));
        }
        else {
          setError('Incorrent login or password');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
