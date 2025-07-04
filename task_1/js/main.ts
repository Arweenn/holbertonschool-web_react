interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher1: Teacher = {
  firstName: 'Teacher1',
  lastName: 'Teaching1',
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: 'Locat1'
};

const teacher2: Teacher = {
  firstName: 'Teacher2',
  lastName: 'Teaching2',
  fullTimeEmployee: false,
  location: 'Locat2',
  contract: true
};

const teacher3: Teacher = {
  firstName: 'Teacher3',
  fullTimeEmployee: false,
  lastName: 'Teaching3',
  location: 'Locat3',
  contract: false,
};

interface Directors extends Teacher {
 numberOfReports: number;
}

// Create director object
const director1: Directors = {
 firstName: 'John',
 lastName: 'Doe',
 location: 'London',
 fullTimeEmployee: true,
 numberOfReports: 17,
};

const directorsList: Directors[] = [director1];

const teachersList: Teacher[] = [teacher1, teacher2, teacher3];

function renderTeachersTable(): void {
  const table: HTMLTableElement = document.createElement('table');
  table.style.borderCollapse = 'collapse';
  table.style.width = '100%';
  table.style.marginTop = '20px';

  const thead: HTMLTableSectionElement = document.createElement('thead');
  const headerRow: HTMLTableRowElement = document.createElement('tr');
  
  const firstNameHeader: HTMLTableHeaderCellElement = document.createElement('th');
  firstNameHeader.textContent = 'First Name';
  firstNameHeader.style.border = '1px solid #ddd';
  firstNameHeader.style.padding = '8px';
  firstNameHeader.style.backgroundColor = '#f2f2f2';
  
  const lastNameHeader: HTMLTableHeaderCellElement = document.createElement('th');
  lastNameHeader.textContent = 'Last Name';
  lastNameHeader.style.border = '1px solid #ddd';
  lastNameHeader.style.padding = '8px';
  lastNameHeader.style.backgroundColor = '#f2f2f2';
  
  const locationHeader: HTMLTableHeaderCellElement = document.createElement('th');
  locationHeader.textContent = 'Location';
  locationHeader.style.border = '1px solid #ddd';
  locationHeader.style.padding = '8px';
  locationHeader.style.backgroundColor = '#f2f2f2';
  
  const fullTimeHeader: HTMLTableHeaderCellElement = document.createElement('th');
  fullTimeHeader.textContent = 'Full Time';
  fullTimeHeader.style.border = '1px solid #ddd';
  fullTimeHeader.style.padding = '8px';
  fullTimeHeader.style.backgroundColor = '#f2f2f2';
  
  headerRow.appendChild(firstNameHeader);
  headerRow.appendChild(lastNameHeader);
  headerRow.appendChild(locationHeader);
  headerRow.appendChild(fullTimeHeader);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody: HTMLTableSectionElement = document.createElement('tbody');

  teachersList.forEach((teacher: Teacher) => {
    const row: HTMLTableRowElement = document.createElement('tr');
    
    const firstNameCell: HTMLTableCellElement = document.createElement('td');
    firstNameCell.textContent = teacher.firstName;
    firstNameCell.style.border = '1px solid #ddd';
    firstNameCell.style.padding = '8px';
    
    const lastNameCell: HTMLTableCellElement = document.createElement('td');
    lastNameCell.textContent = teacher.lastName;
    lastNameCell.style.border = '1px solid #ddd';
    lastNameCell.style.padding = '8px';
    
    const locationCell: HTMLTableCellElement = document.createElement('td');
    locationCell.textContent = teacher.location;
    locationCell.style.border = '1px solid #ddd';
    locationCell.style.padding = '8px';
    
    const fullTimeCell: HTMLTableCellElement = document.createElement('td');
    fullTimeCell.textContent = teacher.fullTimeEmployee ? 'Yes' : 'No';
    fullTimeCell.style.border = '1px solid #ddd';
    fullTimeCell.style.padding = '8px';
    
    row.appendChild(firstNameCell);
    row.appendChild(lastNameCell);
    row.appendChild(locationCell);
    row.appendChild(fullTimeCell);
    tbody.appendChild(row);
  });
  
  table.appendChild(tbody);

  document.body.appendChild(table);
}

function logTeachers(): void {
  console.log('Teacher 1:', teacher1);
  console.log('Teacher 2:', teacher2);
  console.log('Teacher 3:', teacher3);
}

function logDirectors(): void {
 console.log('Director 1:', director1);
}

document.addEventListener('DOMContentLoaded', () => {
  renderTeachersTable();
  logTeachers();
});
