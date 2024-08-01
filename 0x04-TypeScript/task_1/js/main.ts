interface Teacher {
  readonly  firstName: string;
  readonly  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [propName: string]: any;
}

const teacher3: Teacher = {
  firstName: 'Hiku',
  fullTimeEmployee: false,
  lastName: 'Shang',
  location: 'China',
  contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'Thomas',
  lastName: 'Shelby',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 34,
};

console.log(director1);

interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

export function PrintTeacherFunction(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}.${lastName}`;
};

interface StudentClassInterface  {
  workOnHomework(): string;
  displayName(): string;
}

interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
