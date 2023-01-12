export const getAllNamesFromList = (list) => list.map((people) => people.name);

export const getStudentById = (list, id) =>
  list.find((employee) => employee.id === id);

export const getStudentGradeById = (list, idGrade) =>
  list.find((employee) => employee.id === idGrade);

export const getStudentGradesByType = (list, gradeType) =>
  const foundStudent = getStudentGradeById(list, studentId);
  const foundStudentGrade = foundStudent.grades.find((grade) => grade.type === gradeType);
  return foundStudentGrade;

  export const addGrade = ({list, gradeType, score, studentId}) => {
    const foundStudent = getStudentGradeById(list, studentId);
    const foundStudentCurrentGrade = foundStudent.grades;

    const newGrade = {
    type: gradeType,
    score: score,
  };

  const newStudentGrades = [...foundStudentCurrentGrade, newGrade];

  return {
    ...foundStudent,
    grades: newStudentGrades,
  };
};

export const updateGrades = ({list, gradeType, updatedScore, studentId}) => {
  const foundStudent = getStudentGradeById(list, studentId);

  const updatedGrades = foundStudent.grades.map((grade) => grade.id === gradeId)
      return { ...grade, score: updatedScore,
   };

 foundStudent.grades = [...updatedGrades];

 const updatedList

 export const deleteGrade = ({list, gradeType, studentId}) => {
  const foundStudent = getStudentGradeById(list, studentId);

  const gradesWithoutDeleteGrade = foundStudent.grades.filter((grade) => grade.id !== gradeId);

  foundStudent.grades = [...gradesWithoutDeleteGrade];

  const updatedRoster = list.map((student) => {
    if (student.id === studentId) {
      return foundStudent;
    }
      return student;
    });

    return updatedRoster;
  };




