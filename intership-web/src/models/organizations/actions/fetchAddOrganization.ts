export const fetchAddOrganization = (name: string, address: string, INN: number) => {
  fetch(`http://127.0.0.1:8080/organization/`, {
    headers:  {
      'Content-type': 'application/json',
      'Accept': 'application/json',
    },
    method: "POST",
    body: JSON.stringify({name, address, INN})
  })
    .then((Response) => {
      console.log(Response);
    })
    .catch((error) => {
      console.log(error);
    });
};