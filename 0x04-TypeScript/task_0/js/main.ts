interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const firstStudent: Student = {
  firstName: "Sameh",
  lastName: "Wael",
  age: 30,
  location: "Alexandria, Egypt",
};

const secondStudent: Student = {
  firstName: "Zoro",
  lastName: "Wakanda",
  age: 230,
  location: "Nomali, Mars",
};

const studentsList: Array<Student> = [
  firstStudent,
  secondStudent,
];

export const renderTable = (studentsList: Array<Student>): void =>  {
  const table = document.createElement('table');
  const hRow = document.createElement('tr');

  table.insertAdjacentElement('beforeend', hRow);
  hRow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
  hRow.insertAdjacentHTML('beforeend', '<th>Location</th>');

  for (const student of studentsList) {
    const sRow = document.createElement('tr');

    sRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    sRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    table.insertAdjacentElement('beforeend', sRow);
  }

  document.body.insertAdjacentElement('beforeend', table);
}

renderTable(studentsList);
