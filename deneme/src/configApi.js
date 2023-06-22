import axios from "axios";
export const apiVariables={
    API_URL:"https://localhost:7270/api",
}
export var authAxios = axios.create({
    baseURL: "https://localhost:44390/api/",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("JWTtoken"),
    },
  });
  
export function getAuthorized(){
    authAxios.get("InternshipTracker/GetAuthorizedUser")
  .then((response) => {
    endDate = moment(response.data.endDate),
    console.log(response.data.endDate);
    const gettoken = localStorage.getItem('JWTtoken');
    console.log(gettoken);
  }).catch(error => { console.log(error) });
}