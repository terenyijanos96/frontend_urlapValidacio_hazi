export default class UrlapModel {
  constructor() {
    axios.defaults.baseURL = "http://localhost:8000/api/";
  }

  async get(uri, callback) {
    try {
      const response = await axios(uri);
      callback(response);
    } catch (error) {
      console.log(error);
    }
  }

  async post(uri, data) {
    try {
      const response = await axios(uri, data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  async put(uri, id, data) {
    try {
      const response = await axios(uri + "/" + id, data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  async delete(uri, id) {
    try {
      const response = await axios(uri + "/" + id);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
}
