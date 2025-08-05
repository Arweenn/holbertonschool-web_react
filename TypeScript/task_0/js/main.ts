interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }

  const student1: Student = {
    firstName: 'Valentin',
    lastName: 'Ralliard',
    age: 33,
    location: 'Toulouse',
  };
  
  const student2: Student = {
    firstName: 'Jérôme',
    lastName: 'Boilard',
    age: 29,
    location: 'Lyon',
  };

  const studentsList: Student[] = [student1, student2];

  function DisplayStudentsTable (students: Array<Student>) {
    const table = document.createElement('table');
    const header = table.createTHead();
    const headerRow = header.insertRow(0);
    let headerCell1 = headerRow.insertCell(0);
    let headerCell2 = headerRow.insertCell(1);
    headerCell1.textContent = 'Prénom';
    headerCell2.textContent = 'Localisation';

    students.forEach(student => {
        const row = table.insertRow();
        const firstNameCell = row.insertCell(0);
        const locationCell = row.insertCell(1);
        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;
    });

    document.body.appendChild(table);

  }

  DisplayStudentsTable(studentsList)