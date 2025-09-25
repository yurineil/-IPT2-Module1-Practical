// Add Subject function
function addSubject(e) {
  e.preventDefault();
  const code = document.getElementById('subject-code').value;
  const name = document.getElementById('subject-name').value;

  if (!code || !name) {
    alert("Please fill in both Subject Code and Name");
    return;
  }

  const tbody = document.getElementById('subject-table-body');
  const row = <tr><td>${code}</td><td>${name}</td></tr>;
  tbody.innerHTML += row;

  document.getElementById('subject-form').reset();
}

// Attach event listener
document.getElementById('subject-form')
  ?.addEventListener('submit', addSubject);