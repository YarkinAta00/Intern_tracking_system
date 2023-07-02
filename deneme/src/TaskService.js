import axios from "axios";

const API_URL = "https://localhost:7270/api/";

class TaskService {
  getAllTasks() {
    return axios.get(API_URL + "Task/GetTasks");
  }

  getTaskById(id) {
    return axios.get(API_URL + id);
  }

  createTask(task) {
    return axios.post(API_URL + `Task/CreateTask?taskName=${this.taskName}&sender=${this.taskSender}&details=${this.taskDetails}&endDate=${this.pickedEndDate.toDateString('tr-TR')}`)
  }
}
export default new TaskService();