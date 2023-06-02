function init(): void {
  // Clear forms here
  (<HTMLInputElement>document.getElementById('cardholder-name')).value = '';
}
window.onload = init;

function doesContainOnlyLetters(str: string): boolean {
  return /^[A-Za-z\s]*$/.test(str);
}

function displayInputError(inputField: HTMLInputElement, errorMsg: string): void {
  inputField.classList.add('input-error');
  if (inputField.nextElementSibling?.classList.contains('error-msg') === false) {
    const errorSpan = document.createElement('p');
    errorSpan.innerText = errorMsg;
    errorSpan.classList.add('error-msg');
    inputField.after(errorSpan);
  }
}

function hideInputError(inputField: HTMLInputElement): void {
  inputField.classList.remove('input-error');
  if (inputField.nextElementSibling?.classList.contains('error-msg')) {
    inputField.nextElementSibling.remove();
  }
}

function fillName(): void {
  const name = <HTMLInputElement>document.getElementById('cardholder-name');
  const styledName = <HTMLInputElement>document.getElementById('styled-name');
  styledName.innerHTML = name?.value;
  if (doesContainOnlyLetters(<string>name?.value) === false) {
    displayInputError(name, 'Wrong format, letters only');
  } else {
    hideInputError(name);
  }
}

document.getElementById('cardholder-name')?.addEventListener('keyup', () => {
  fillName();
});
