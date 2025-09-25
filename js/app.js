// Add Student function
function addStudent(e) {
  e.preventDefault();
  const id = document.getElementById('student-id').value;
  const name = document.getElementById('student-name').value;

  if (!id || !name) {
    alert("Please fill in both Student ID and Name");
    return;
  }

  const tbody = document.getElementById('student-table-body');
  const row = <tr><td>${id}</td><td>${name}</td></tr>;
  tbody.innerHTML += row;

  document.getElementById('student-form').reset();
}

// Attach event listener
document.getElementById('student-form')
  ?.addEventListener('submit', addStudent);