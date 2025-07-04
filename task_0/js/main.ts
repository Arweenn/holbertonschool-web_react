interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "FN1",
  lastName: "LN1",
  age: 20,
  location: "Locat1"
};

const student2: Student = {
  firstName: "FN2",
  lastName: "LN2",
  age: 22,
  location: "Locat2"
};

const studentsList: Student[] = [student1, student2];

function renderStudentsTable(): void {
  const table: HTMLTableElement = document.createElement('table');
  table.style.borderCollapse = 'collapse';
  table.style.width = '100%';

  const thead: HTMLTableSectionElement = document.createElement('thead');
  const headerRow: HTMLTableRowElement = document.createElement('tr');
  
  const firstNameHeader: HTMLTableHeaderCellElement = document.createElement('th');
  firstNameHeader.textContent = 'First Name';
  firstNameHeader.style.border = '1px solid #ddd';
  firstNameHeader.style.padding = '8px';
  firstNameHeader.style.backgroundColor = '#f2f2f2';
  
  const locationHeader: HTMLTableHeaderCellElement = document.createElement('th');
  locationHeader.textContent = 'Location';
  locationHeader.style.border = '1px solid #ddd';
  locationHeader.style.padding = '8px';
  locationHeader.style.backgroundColor = '#f2f2f2';
  
  headerRow.appendChild(firstNameHeader);
  headerRow.appendChild(locationHeader);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody: HTMLTableSectionElement = document.createElement('tbody');

  studentsList.forEach((student: Student) => {
    const row: HTMLTableRowElement = document.createElement('tr');
    
    const firstNameCell: HTMLTableCellElement = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    firstNameCell.style.border = '1px solid #ddd';
    firstNameCell.style.padding = '8px';
    
    const locationCell: HTMLTableCellElement = document.createElement('td');
    locationCell.textContent = student.location;
    locationCell.style.border = '1px solid #ddd';
    locationCell.style.padding = '8px';
    
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });
  
  table.appendChild(tbody);

  document.body.appendChild(table);
}

document.addEventListener('DOMContentLoaded', renderStudentsTable);
