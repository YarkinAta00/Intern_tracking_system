import axios from "axios";

const API_URL = "https://localhost:7270/api/";

class InternsService {
  
  showInterns() {
    return axios.get(API_URL + `InternshipTracker/GetUsers`);
  }
  deleteIntern(id) {
   return axios.delete(this.baseURL + `InternshipTracker/DeleteUser?id=${id}`)    
}
  getAuthorized() {
    authAxios.get(API_URL + "InternshipTracker/GetAuthorizedUser")
      .then((response) => {
        endDate = moment(response.data.endDate),
          console.log(response.data.endDate);
        const gettoken = localStorage.getItem('JWTtoken');
        console.log(gettoken);
      }).catch(error => { console.log(error) });
  }
}

export default new InternsService(); 