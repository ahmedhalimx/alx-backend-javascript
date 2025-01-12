const fs = require('node:fs');

const FIRSTNAME_COLUMN = 0;
const FIELD_COLUMN = 3;

/**
 * Counts the number of students in each field and lists them.
 * @param {String} filePath The path to the CSV data file.
 */
const countStudents = (filePath) => {
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile) {
    throw new Error('Cannot load the database');
  }

  const studentFields = {};
  const recordList = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

  recordList.shift();
  console.log(`Number of students: ${recordList.length}`);
  for (const record of recordList) {
    const firstName = record.split(',')[FIRSTNAME_COLUMN];
    const field = record.split(',')[FIELD_COLUMN];

    if (studentFields[field] === undefined) {
      studentFields[field] = [firstName];
    } else {
      studentFields[field].push(firstName);
    }
  }

  for (const [field, firstNames] of Object.entries(studentFields)) {
    console.log(`Number of students in ${field}: ${firstNames.length}. List:`);
    for (let i = 0; i < firstNames.length; i += 1) {
      console.log(` ${firstNames[i]}`);
      if (i !== firstNames.length - 1) { console.log(','); }
    }
    console.log('\n');
  }
};

module.exports = countStudents;
