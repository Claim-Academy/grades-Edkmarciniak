import apiService from "./api.service.js";

console.log(apiService);

const gradesData = await apiService.getGradesData();

console.log(gradesData);
