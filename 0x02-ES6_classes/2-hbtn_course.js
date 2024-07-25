/**
 * Defines the Holberton Course Class.
 */
export default class HolbertonCourse {
  /**
   * @param {String} name - Name of the course.
   * @param {Number} length - Duration of the course in months.
   * @param {String[]} students - Names of students enrolled in the course.
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  /**
   * @param {String} name
   */
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  /**
   * @param {Number} length
   */
  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  /**
   * @param {Array} students
   */
  set students(students) {
    if (!(students instanceof Array)
      || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
  }
}
