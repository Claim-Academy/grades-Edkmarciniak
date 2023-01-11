import got from "got";

const BASE_URL = "http://localhost:3001/grades";

export default {
  getGrades() {
    return got(BASE_URL).json();
  },
};
