/**
  * @returns a {{Number}[]} on success or {{undefined}[]} on failure
  */
export default function getListStudentIds(studentArray) {
  if (studentArray instanceof Array) {
    return studentArray.map((studentArray) => studentArray.id);
  }
  return [];
}
