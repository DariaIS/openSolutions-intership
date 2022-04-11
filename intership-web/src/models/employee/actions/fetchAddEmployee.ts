export const fetchAddEmployee = (divisionId: number, FIO: string, address: string, position: string) => {
    fetch(`http://127.0.0.1:8080/employee/`, {
      headers:  {
        'Content-type': 'application/json',
        'Accept': 'application/json',
      },
      method: "POST",
      body: JSON.stringify({ id_division: divisionId, FIO, address, position })
    })
      .then((Response) => {
        console.log(Response);
      })
      .catch((error) => {
        console.log(error);
      });
  };