export default function getStudentIdsSum(studentArray) {
  if (studentArray instanceof Array) {
    return studentArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue.id,
    );
  }
  return [];
}
