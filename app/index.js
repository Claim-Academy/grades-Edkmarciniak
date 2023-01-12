import apiService from "./api.service.js";

const gradesInfo = apiService.getGrades();

console.log(gradesInfo);
