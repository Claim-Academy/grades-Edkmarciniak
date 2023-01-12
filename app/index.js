import apiService from "./api.service.js";

const gradesInfo = await apiService.getGradesData();

console.log(gradesInfo);
