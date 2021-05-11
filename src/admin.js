import axios from 'axios'
let res;

export function findAdmin() {
  axios.get("http://localhost:3000/login/find/admin").then(response => manageresponse(response));
  return res;
}

function manageresponse(response) {
  res = response.data.response;
}
