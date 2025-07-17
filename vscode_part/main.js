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

//save the default employees on first load if not already in localstorage
// if (!localStorage.getItem("employees")) {
//   localStorage.setItem("employees", JSON.stringify(employees));
// }

// get the localStorage data
// function saveEmployeesToLocalStorage() {
//   localStorage.setItem("employees", JSON.stringify(employees));
// }

// Getting cards
function renderEmployees(data = employees) {
  const container = document.getElementById("employeeContainer");
  container.innerHTML = ""; // Clear previous data

  data.forEach((emp) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
  <p><strong>${emp.firstName} ${emp.lastName}</strong></p>
  <p>Email: ${emp.email}</p>
  <p>Department: ${emp.department}</p>
  <p>Role: ${emp.role}</p>
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

// filter main logics

//Search email logic
function searchByEmail() {
  const emailInput = document
    .getElementById("searchBox")
    .value.toLowerCase()
    .trim();

  const filterSearchEmailInput = employees.filter((emp) =>
    emp.email.toLowerCase().includes(emailInput)
  );

  renderEmployees(filterSearchEmailInput);
}

//Filter button logic
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
  closeFilterPopup(); // Optional: hides the popup after applying filter
}

//rest filter
function resetFilter() {
  // Clear all input fields
  // const reste =
  document.getElementById("filterFirstName").value = "";
  document.getElementById("filterDepartment").value = "";
  document.getElementById("filterRole").value = "";

  // Re-render all employees
  //   renderEmployees(reste);
  renderEmployees();
  //   closeFilterPopup(); //optional
}
