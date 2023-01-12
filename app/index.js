import apiService from "./api.service.js";

const gradesInfo = await apiService.getGrades();

console.log(gradesInfo);
