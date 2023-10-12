const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Зупиняємо перезавантаження сторінки при відправці форми

    const emailInput = this.elements.email;
    const passwordInput = this.elements.password;

    if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
      alert('Всі поля повинні бути заповнені');
    } else {
      const formData = {
        email: emailInput.value,
        password: passwordInput.value,
      };
      console.log(formData);
      loginForm.reset();
    }
});  