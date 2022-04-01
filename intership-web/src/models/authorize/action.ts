import { authorize } from './slice';

export const fetchSignIn = (login, password, setError) => {
  
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
