const fs = require('fs');

/**
 * Counts the number of students in each field and lists them.
 * @param {String} filePath The path to the CSV data file.
 */
const countStudents = (filePath) => {
  if (!(fs.existsSync(filePath) && fs.statSync(filePath).isFile())) {
    throw new Error('Cannot load the database');
  }

  const lines = fs
    .readFileSync(filePath, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');

  const groups = {};
  const fields = lines[0].split(',');
  const studentNames = fields.slice(0, fields.length - 1);

  for (const line of lines.slice(1)) {
    const studentRecord = line.split(',');
    const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
    const field = studentRecord[studentRecord.length - 1];
    if (!Object.keys(groups).includes(field)) {
      groups[field] = [];
    }
    const studentEntries = studentNames
      .map((propName, idx) => [propName, studentPropValues[idx]]);
    groups[field].push(Object.fromEntries(studentEntries));
  }

  const allStudents = Object
    .values(groups)
    .reduce((pre, cur) => (pre || []).length + cur.length);
  console.log(`Number of students: ${allStudents}`);
  for (const [field, group] of Object.entries(groups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;
