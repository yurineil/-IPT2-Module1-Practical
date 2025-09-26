document.addEventListener("DOMContentLoaded", () => {
  // Add Student function
  function addStudent(e) {
    e.preventDefault();

    const id = document.getElementById('student-id').value.trim();
    const name = document.getElementById('student-name').value.trim();

    if (!id || !name) {
      alert("Please fill in both Student ID and Name");
      return;
    }

    const tbody = document.getElementById('student-table-body');
    const row = `<tr><td>${id}</td><td>${name}</td></tr>`;
    tbody.innerHTML += row;

    document.getElementById('student-form').reset();
  }

  document.getElementById('student-form')
    ?.addEventListener('submit', addStudent);

  // Add Subject function
  function addSubject(e) {
    e.preventDefault();

    const code = document.getElementById('subject-code').value.trim();
    const name = document.getElementById('subject-name').value.trim();

    if (!code || !name) {
      alert("Please fill in both Subject Code and Name");
      return;
    }

    const tbody = document.getElementById('subject-table-body');
    const row = `<tr><td>${code}</td><td>${name}</td></tr>`;
    tbody.innerHTML += row;

    document.getElementById('subject-form').reset();
  }

  document.getElementById('subject-form')
    ?.addEventListener('submit', addSubject);
});
