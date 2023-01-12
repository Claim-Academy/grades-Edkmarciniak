export const getAllNamesFromList = (list) => list.map((people) => people.name);

export const getStudentById = (list, id) =>
  list.find((employee) => employee.id === id);

export const getStudentGradeById = (list, idGrade) =>
  list.find((employee) => employee.id === idGrade);
