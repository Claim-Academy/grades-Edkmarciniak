import apiService from "./api.service.js";

const gradesData = await apiService.getGrades();

console.log(gradesData);
