import apiService from "./api.service.js";
import { getAllNamesFromList } from "./lib.js";

const gradesInfo = await apiService.getGradesData();

console.log(gradesInfo);

console.log(getAllNamesFromList(gradesInfo));
