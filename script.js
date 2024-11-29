// Form and Table Elements
const userForm = document.getElementById('user-form');
const userTable = document.getElementById('user-table');

// Event Listener for Form Submission
userForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Form Values
    const userName = document.getElementById('userName').value.trim();
    const userEmail = document.getElementById('userEmail').value.trim();

    // Form Validation
    if (!userName || !userEmail) {
        alert("All fields are required!");
        return;
    }
    if (!/\S+@\S+\.\S+/.test(userEmail)) {
        alert("Please enter a valid email address!");
        return;
    }

    // Add User to Table
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>#</td>
        <td>${userName}</td>
        <td>${userEmail}</td>
        <td>
            <button class="btn btn-warning btn-sm" onclick="editUser(this)">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="deleteUser(this)">Delete</button>
        </td>
    `;
    userTable.appendChild(newRow);

    // Clear Form
    userForm.reset();
});

// Edit User Functionality
function editUser(button) {
    const row = button.parentElement.parentElement;
    const name = row.children[1].textContent;
    const email = row.children[2].textContent;

    document.getElementById('userName').value = name;
    document.getElementById('userEmail').value = email;

    // Remove Row
    row.remove();
}

// Delete User Functionality
function deleteUser(button) {
    button.parentElement.parentElement.remove();
}
