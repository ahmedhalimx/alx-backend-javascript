/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */

export default function updateStudentGradeByCity(Students, city, newGrade) {
  return Students
    .filter((student) => student.location === city)
    .map((student) => {
      newGrade.map((studentGrade) => {
        if (student.id === studentGrade.studentId) {
          student.grade = studentGrade.grade;
        } else if (!student.hasOwnProperty('grade')) {
          student.grade = 'N/A';
        }
        return student;
      });
      return student;
    });
}
