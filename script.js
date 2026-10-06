// JavaScript Object
let student = {
    name: "",
    email: "",
    age: 0,
    course: ""
};

// Selecting HTML elements
const form = document.getElementById("studentForm");
const message = document.getElementById("message");
const studentDetails = document.getElementById("studentDetails");

// Event Handling
form.addEventListener("submit", function(event) {

    // Prevent form from refreshing the page
    event.preventDefault();

    // Get values from form
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;

    // Basic Form Validation
    if (name === "") {
        showError("Please enter your name.");
        return;
    }

    if (email === "") {
        showError("Please enter your email.");
        return;
    }

    if (!email.includes("@")) {
        showError("Please enter a valid email address.");
        return;
    }

    if (age === "" || age < 18) {
        showError("Age must be 18 or above.");
        return;
    }

    if (course === "") {
        showError("Please select a course.");
        return;
    }

    // Store values in JavaScript object
    student.name = name;
    student.email = email;
    student.age = age;
    student.course = course;

    // Display success message
    message.textContent = "Registration successful!";
    message.className = "success";

    // Display object data
    studentDetails.innerHTML = `
        <h3>Student Details</h3>
        <p><strong>Name:</strong> ${student.name}</p>
        <p><strong>Email:</strong> ${student.email}</p>
        <p><strong>Age:</strong> ${student.age}</p>
        <p><strong>Course:</strong> ${student.course}</p>
    `;
});

// Function for displaying errors
function showError(text) {
    message.textContent = text;
    message.className = "error";
    studentDetails.innerHTML = "";
}
