// Handle Image Upload
function uploadImage(event) {
    const image = document.getElementById('uploadedImage');
    const reader = new FileReader();

    reader.onload = function () {
        image.src = reader.result;
        image.style.display = 'block';
    };

    reader.readAsDataURL(event.target.files[0]);
}

// Display text in the correct fields
const additionalTextInput = document.getElementById('additionalText');
const studentIdInput = document.getElementById('studentId');
const lastNameInput = document.getElementById('lastName');
const firstNameInput = document.getElementById('firstName');

const displayAdditionalText = document.getElementById('displayAdditionalText');
const displayStudentId = document.getElementById('displayStudentId');
const displayLastName = document.getElementById('displayLastName');
const displayFirstName = document.getElementById('displayFirstName');

additionalTextInput.addEventListener('input', () => {
    displayAdditionalText.textContent = additionalTextInput.value;
});

studentIdInput.addEventListener('input', () => {
    displayStudentId.textContent = studentIdInput.value;
});

lastNameInput.addEventListener('input', () => {
    displayLastName.textContent = lastNameInput.value;
});

firstNameInput.addEventListener('input', () => {
    displayFirstName.textContent = firstNameInput.value;
});

// Handle PNG Download
document.getElementById('downloadButton').addEventListener('click', function () {
    const container = document.getElementById('studentCard');

    html2canvas(container, {
        useCORS: true,  // Allow cross-origin images to be used
        allowTaint: true,  // Allow tainted images to be used
        logging: true,
        width: 1000,  // Set the download width to 1000px
        height: 600,  // Set the download height to 600px
    }).then(function (canvas) {
        const link = document.createElement('a');
        link.download = 'student_id_card.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
});
