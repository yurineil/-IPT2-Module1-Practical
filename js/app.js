  if (addStudentBtn && studentForm && studentTable) {
        addStudentBtn.addEventListener("click", function() {
            const idNumber = document.getElementById("idNumber").value.trim();
            const firstName = document.getElementById("firstName").value.trim();
            const middleName = document.getElementById("middleName").value.trim();
            const lastName = document.getElementById("lastName").value.trim();

            if (!idNumber || !firstName || !lastName) {
                alert("Please fill in all required fields (ID, Firstname, Lastname).");
                return;
            }

            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td>${idNumber}</td>
                <td>${firstName}</td>
                <td>${middleName}</td>
                <td>${lastName}</td>
            `;
            studentTable.appendChild(newRow);

            studentForm.reset();
        });
    }


// ================== Developer 2: Add Subject ==================
    const addSubjectBtn = document.getElementById("addSubject");
    const subjectForm = document.getElementById("subjectForm");
    const subjectTable = document.getElementById("table-content"); // same ID in subject.html

    if (addSubjectBtn && subjectForm && subjectTable) {
        addSubjectBtn.addEventListener("click", function () {
            const subjectCode = document.getElementById("subjectCode").value.trim();
            const subjectName = document.getElementById("subjectName").value.trim();
            const units = document.getElementById("units").value.trim();

            if (!subjectCode || !subjectName || !units) {
                alert("Please fill out all fields.");
                return;
            }

            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td>${subjectCode}</td>
                <td>${subjectName}</td>
                <td>${units}</td>
            `;
            subjectTable.appendChild(newRow);

            subjectForm.reset();
        });
    }