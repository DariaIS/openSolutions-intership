export const fetchAddDivision = (id_organization: string, name: string, phone: number) => {
  fetch(`http://127.0.0.1:8080/organization/`, {
    headers:  {
      'Content-type': 'application/json',
      'Accept': 'application/json',
    },
    method: "POST",
    body: JSON.stringify({id_organization, name, phone})
  })
    .then((Response) => {
      console.log(Response);
    })
    .catch((error) => {
      console.log(error);
    });
};