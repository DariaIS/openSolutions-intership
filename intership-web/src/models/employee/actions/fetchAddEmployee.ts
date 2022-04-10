export const fetchAddEmployee = (id_division: string, FIO: string, address: string, position: string) => {
    fetch(`http://127.0.0.1:8080/organization/`, {
      headers:  {
        'Content-type': 'application/json',
        'Accept': 'application/json',
      },
      method: "POST",
      body: JSON.stringify({id_division, FIO, address, position})
    })
      .then((Response) => {
        console.log(Response);
      })
      .catch((error) => {
        console.log(error);
      });
  };