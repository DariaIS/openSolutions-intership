import { authorize } from '../example/slice';

export const fetchSignIn = (login, password) => {
  return (dispatch) => {
    fetch('http://127.0.0.1:8080/authorize', {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ login, password }),
    })
      .then((Response) => Response.json())
      .then((json) => {
        if (json.body.isLogin) dispatch(authorize({ login, password }));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
