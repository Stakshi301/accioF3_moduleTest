let employees = [];

const form = document.getElementById("employeeForm");
const addEmployeeBtn = document.getElementById("addEmployeeBtn");
const message = document.getElementById("message");
const employeeList = document.getElementById("employeeList");

addEmployeeBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const profession = document.getElementById("profession").value.trim();
  const age = document.getElementById("age").value.trim();

  if (!name || !profession || !age) {
    showMessage("Please make sure all the fields ae fillder before adding to eomployee!", "error");
    return;
  }

  const employee = {
    id: employees.length + 1, // ID based on current length
    name,
    profession,
    age: Number(age),
  };

  employees.push(employee);
  renderEmployees();
  showMessage("Employee added!", "success");

  form.reset();
});

function renderEmployees() {
  employeeList.innerHTML = "";

  if (employees.length === 0) {
    employeeList.innerHTML = "<p>You have 0 employees.</p>";
    return;
  }

  employees.forEach((employee, index) => {
    employee.id = index + 1; // Reassign ID dynamically based on order

    const employeeDiv = document.createElement("div");
    employeeDiv.classList.add("employee-item");

    employeeDiv.innerHTML = `
      <span>${employee.id}. ${employee.name} - ${employee.profession} - ${employee.age} years</span>
      <button class="deleteBtn" onclick="deleteEmployee(${index})">Delete</button>
    `;

    employeeList.appendChild(employeeDiv);
  });
}

function deleteEmployee(index) {
  employees.splice(index, 1); // Remove the employee by index
  renderEmployees();
  showMessage("Employee deleted!", "success");
}

function showMessage(msg, type) {
  message.textContent = msg;
  message.className = type;
}
