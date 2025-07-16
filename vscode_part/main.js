// Array object
const employees = [
  {
    id: 1,
    firstName: "Nikita",
    lastName: "Patel",
    email: "nikita@gmail.com",
    department: "HR",
    role: "Manager",
  },
  {
    id: 2,
    firstName: "Alice",
    lastName: "Smith",
    email: "alice@example.com",
    department: "IT",
    role: "Developer",
  },
  {
    id: 3,
    firstName: "Bob",
    lastName: "Johnson",
    email: "bob@example.com",
    department: "Finance",
    role: "Analyst",
  },
];

// Getting cards
function renderEmployees(data = employees) {
  const container = document.getElementById("employeeContainer");
  container.innerHTML = ""; // Clear previous data

  data.forEach((emp) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <p id = "filterFirstName"><strong>${emp.firstName} ${emp.lastName}</strong></p>
        <p>Email: ${emp.email}</p>
        <p id = "filterDepartment">Department: ${emp.department}</p>
        <p id = "filterRole">Role: ${emp.role}</p>
        <button onclick="editEmployee(${emp.id})">Edit</button>
        <button onclick="deleteEmployee(${emp.id})">Delete</button>
      `;
    container.appendChild(card);
  });
}

renderEmployees(); //Call on page load

function editEmployee(id) {
  alert("Edit employee ID" + id);
  //Add the logic here
}

function deleteEmployee(id) {
  alert("Delete employee ID" + id);
  //Add the logic here
}

// filter popup
function openFilterPopup() {
  document.getElementById("filterPopup").style.display = "block";
}

function closeFilterPopup() {
  document.getElementById("filterPopup").style.display = "none";
}

// filter main logic

function applyFilter() {
  const firstName = document
    .getElementById("filterFirstName")
    .value.toLowerCase();
  const role = document.getElementById("filterRole").value.toLowerCase();
  const department = document
    .getElementById("filterDepartment")
    .value.toLowerCase();

  if (!firstName || !role || !department) {
    alert("Please enter at least one filter  field");
    return;
  }

  const filtered = employees.filter((emp) => {
    return (
      (department === "" ||
        emp.department.toLowerCase().includes(department)) &&
      (role === "" || emp.role.toLowerCase().includes(role)) &&
      (firstName === "" || emp.firstName.toLowerCase().includes(firstName))
    );
  });

  renderEmployees(filtered);
}
