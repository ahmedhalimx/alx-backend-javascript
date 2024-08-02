export default function getStudentsByLocation(studentArray, city) {
  if (studentArray instanceof Array) {
    return studentArray.filter((studentArray) => studentArray.location === city);
  }
  return [];
}
