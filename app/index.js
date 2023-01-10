export const add2Nums = (num1, num2) => num1 + num2;

import apiService from "./api.service.js";
import {
  getAllStudentNames,
  getStudentById,
  getStudentGradeById,
} from "./lib.js";

const grades = apiService.getGrades() => {};

const gradesAndNames = getAllStudentNames(
  getStudentById, getStudentGradeById(2, 3)
);


