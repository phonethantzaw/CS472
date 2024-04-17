'use strict'

// Get references to the necessary DOM elements
const patientIdInput = document.getElementById('patientIdNumber');
const firstNameInput = document.getElementById('firstName');
const middleInitialsInput = document.getElementById('middleInitials');
const lastNameInput = document.getElementById('lastName');
const dateOfBirthInput = document.getElementById('dateOfBirth');
const departmentSelect = document.getElementById('ddlDepartment');
const isOutPatientRadios = document.querySelectorAll('input[name="radioIsOutPatient"]');
const registerButton = document.getElementById('btnRegisterPatient');
const tbodyPatientsList = document.getElementById('tbodyPatientsList');
const showElderlyPatientsCheckbox = document.getElementById('chkElderlyPatients');
const showOutPatientsCheckbox = document.getElementById('chkShowOutPatients');
const submitForm = document.getElementById('submitForm');

//patient Data Array
let patients = [];

// Function to add a new patient to the table
function addPatientToTable(patient) {
    const row = document.createElement('tr');

    const idCell = document.createElement('td');
    idCell.textContent = patient.patientIdNumber;
    row.appendChild(idCell);

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = patient.firstName;
    row.appendChild(firstNameCell);

    const middleInitialsCell = document.createElement('td');
    middleInitialsCell.textContent = patient.middleInitials;
    row.appendChild(middleInitialsCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = patient.lastName;
    row.appendChild(lastNameCell);

    const dateOfBirthCell = document.createElement('td');
    dateOfBirthCell.textContent = patient.dateOfBirth;
    row.appendChild(dateOfBirthCell);

    const departmentCell = document.createElement('td');
    departmentCell.textContent = patient.department;
    row.appendChild(departmentCell);

    const isOutPatientCell = document.createElement('td');
    isOutPatientCell.textContent = patient.isOutPatient;
    row.appendChild(isOutPatientCell);

    tbodyPatientsList.appendChild(row);
}

// Check validity of entire input form
function clearAndCheckValidity() {
    return submitForm.checkValidity();
}

// Function to handle form submission
function handleFormSubmit(event) {
    if (!clearAndCheckValidity()) {
        return;
    }

    event.preventDefault();

    // Get form data
    const patientIdNumber = patientIdInput.value;
    const firstName = firstNameInput.value;
    const middleInitials = middleInitialsInput.value;
    const lastName = lastNameInput.value;
    const dateOfBirth = dateOfBirthInput.value;
    const department = departmentSelect.value;
    let isOutPatient = '';
    for (const radio of isOutPatientRadios) {
        if (radio.checked) {
            isOutPatient = radio.value;
            break;
        }
    }

    // Create a new patient object
    const newPatient = {
        patientIdNumber,
        firstName,
        middleInitials,
        lastName,
        dateOfBirth,
        department,
        isOutPatient
    };

    // Add the new patient to the array
    patients.push(newPatient);

    // Add the new patient to the table
    addPatientToTable(newPatient);

    // Reset the form
    // event.target.reset();
    submitForm.reset();

}

// Function to filter the patient table based on the "Show Elderly Patients only" checkbox
function filterByElderly() {
    const rows = tbodyPatientsList.getElementsByTagName('tr');
    for (const row of rows) {
        const dateOfBirthCell = row.getElementsByTagName('td')[4];
        const dateOfBirth = new Date(dateOfBirthCell.textContent);
        const currentDate = new Date();
        const age = currentDate.getFullYear() - dateOfBirth.getFullYear();
        if (showElderlyPatientsCheckbox.checked && age < 65) {
            row.style.display = 'none';
        } else {
            row.style.display = '';
        }
    }
}

// Function to filter the patient table based on the "Show Out-Patients only" checkbox
function filterByOutPatient() {
    const rows = tbodyPatientsList.getElementsByTagName('tr');
    for (const row of rows) {
        const isOutPatientCell = row.getElementsByTagName('td')[6];
        if (showOutPatientsCheckbox.checked && isOutPatientCell.textContent === 'No') {
            row.style.display = 'none';
        } else {
            row.style.display = '';
        }
    }
}

// Add event listeners
registerButton.addEventListener('click', handleFormSubmit);
showElderlyPatientsCheckbox.addEventListener('change', filterByElderly);
showOutPatientsCheckbox.addEventListener('change', filterByOutPatient);

