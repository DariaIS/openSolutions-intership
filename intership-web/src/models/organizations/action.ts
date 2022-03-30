export const fetchOrganizations = () => {
  
    return (dispatch) => {
      fetch('http://127.0.0.1:8080/organization', {
        headers:  {
          'Content-type': 'application/json',
          'Accept': 'application/json',
        },
        method: "GET",
      })
        .then((Response) => Response.json())
        .then((json) => {
            console.log(json);
            dispatch(json);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };