const rootDiv = document.querySelector('.root');

const formHeading = document.createElement('h1');
formHeading.textContent = "Tugas-2 Praktikum Pemrograman Web";
formHeading.classList.add('header');
rootDiv.appendChild(formHeading);

const lineBreak = document.createElement('hr');
lineBreak.classList.add('heading-line');
rootDiv.appendChild(lineBreak);

const container = document.createElement('div');
container.classList.add('container');
rootDiv.appendChild(container);

const formContainer = document.createElement('section');
formContainer.classList.add('form-container');
container.appendChild(formContainer);

const form = document.createElement('form');
form.id = 'dataForm';
formContainer.appendChild(form);

const usernameLabel = document.createElement('label');
usernameLabel.htmlFor = 'username';
usernameLabel.textContent = 'Username';
form.appendChild(usernameLabel);

const usernameInput = document.createElement('input');
usernameInput.type = 'text';
usernameInput.id = 'username';
usernameInput.placeholder = 'Damai Silalahi';
usernameInput.required = true;
form.appendChild(usernameInput);

const nimLabel = document.createElement('label');
nimLabel.htmlFor = 'nim';
nimLabel.textContent = 'NIM';
form.appendChild(nimLabel);

const nimInput = document.createElement('input');
nimInput.type = 'text';
nimInput.id = 'nim';
nimInput.placeholder = '231401126';
nimInput.required = true;
form.appendChild(nimInput);

const komLabel = document.createElement('label');
komLabel.htmlFor = 'kom';
komLabel.textContent = 'KOM';
form.appendChild(komLabel);

const komInput = document.createElement('input');
komInput.type = 'text';
komInput.id = 'kom';
komInput.placeholder = 'C';
komInput.required = true;
form.appendChild(komInput);

const photoLabel = document.createElement('label');
photoLabel.htmlFor = 'photo';
photoLabel.textContent = 'Upload Photo';
form.appendChild(photoLabel);

const photoInput = document.createElement('input');
photoInput.type = 'file';
photoInput.id = 'photo';
photoInput.required = true;
form.appendChild(photoInput);

const submitButton = document.createElement('button');
submitButton.textContent = 'Submit';
form.appendChild(submitButton);

const resultContainer = document.createElement('div');
resultContainer.classList.add('result-container');
container.appendChild(resultContainer);

const photoPreview = document.createElement('img');
resultContainer.appendChild(photoPreview);

const usernamePreview = document.createElement('p');
resultContainer.appendChild(usernamePreview);

const nimPreview = document.createElement('p');
resultContainer.appendChild(nimPreview);

const komPreview = document.createElement('p');
resultContainer.appendChild(komPreview);

alert('Selamat datang! Silakan isi form di bawah.');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Form berhasil disubmit!');
    usernamePreview.textContent = `Username: ${usernameInput.value}`;
    nimPreview.textContent = `NIM: ${nimInput.value}`;
    komPreview.textContent = `KOM: ${komInput.value}`;
    const file = photoInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            photoPreview.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
    formContainer.style.width = '38%';
    formContainer.style.padding = '5%';
    resultContainer.style.display = 'block';
    resultContainer.style.width = '35%';
});
