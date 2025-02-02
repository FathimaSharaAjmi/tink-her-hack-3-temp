const isChecked = document.querySelector('.one');
const isCheckedTwo = document.querySelector('.two');
const isCheckedThree = document.querySelector('.three');
const s1 = 'abcdefghijklmnopqrstuvwxyz'; // lowercase letters
const s2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // uppercase letters
const s3 = '0123456789'; // digits
const s4 = '!@#$%^&*()_+[]{}|;:,.<>?/~`'; // punctuation characters

let availableChars = [];

const updateAvailableChars = () => {
    availableChars = []; // Reset the array each time the checkboxes are updated

    if (isChecked.checked) {
        availableChars.push(s1, s2); // Add lowercase and uppercase letters
    }
    if (isCheckedTwo.checked) {
        availableChars.push(s3); // Add digits
    }
    if (isCheckedThree.checked) {
        availableChars.push(s4); // Add special characters
    }
};

isChecked.addEventListener('change', updateAvailableChars);
isCheckedTwo.addEventListener('change', updateAvailableChars);
isCheckedThree.addEventListener('change', updateAvailableChars);

document.querySelector('.generate-btn').addEventListener('click', function() {
    const password = generatePassword(); // Call the function to generate the password
    document.getElementById('password').value = password; // Display the password in the input field
});

function generatePassword() {
    const plen = parseInt(document.getElementById('length').value) || 12; // Default to 12 if no input

    if (availableChars.length === 0) {
        availableChars.push(s1,s2,s3,s4)
    }

    let password = ''; // Initialize password string

    for (let i = 0; i < plen; i++) {
        const randomGroup = availableChars[Math.floor(Math.random() * availableChars?.length)];
        password += randomGroup[Math.floor(Math.random() * randomGroup.length)]; // Randomly select a character from the selected groups
    }

    return password; // Return the generated password
}
