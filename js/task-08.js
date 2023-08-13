    const form = document.querySelector(".login-form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Зупиняємо перезавантаження сторінки
  
      const email = form.elements.email.value;
      const password = form.elements.password.value;
  
      if (email === "" || password === "") {
        alert("Всі поля повинні бути заповнені!");
      } else {
        const formData = {
          email: email,
          password: password,
        };
  
        console.log(formData); // Виводимо об'єкт у консоль
        form.reset(); // Очищаємо поля форми
      }
    });

  
