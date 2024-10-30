document.addEventListener("DOMContentLoaded", function () {
  // Xử lý đăng nhập
  const loginButton = document.querySelector(".login-container .submit");
  loginButton.addEventListener("click", function (e) {
    e.preventDefault();

    const usernameField = document.querySelector(
      ".login-container input[type='text']"
    );
    const passwordField = document.querySelector(
      ".login-container input[type='password']"
    );
    const usernameOrEmail = usernameField.value.trim();
    const password = passwordField.value.trim();

    if (usernameOrEmail === "" && password === "") {
      alert("Bạn chưa nhập thông tin đăng nhập.");
      return;
    }

    if (
      (usernameOrEmail === "" && password !== "") ||
      (usernameOrEmail !== "" && password === "")
    ) {
      alert("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    const userEmailPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    const isUserEmailValid = userEmailPattern.test(usernameOrEmail);

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    const isPasswordValid = passwordPattern.test(password);

    if (!isUserEmailValid && !isPasswordValid) {
      alert("Thông tin đăng nhập không hợp lệ.");
      return;
    } else if (!isUserEmailValid) {
      alert(
        "Tên đăng nhập phải bao gồm ít nhất 8 ký tự, gồm chữ cái in hoa, in thường, chữ số, ký tự đặc biệt."
      );
      usernameField.focus();
      return;
    } else if (!isPasswordValid) {
      alert(
        "Mật khẩu phải bao gồm ít nhất 8 ký tự, gồm chữ cái in hoa, in thường, chữ số, ký tự đặc biệt."
      );
      passwordField.focus();
      return;
    }

    alert("Đăng nhập thành công!");
  });

  // Xử lý đăng ký
  const registerButton = document.querySelector(".register-container .submit");
  registerButton.addEventListener("click", function (e) {
    e.preventDefault();

    const inputFields = document.querySelectorAll(
      ".register-container input[type='text']"
    );
    const passwordField = document.querySelector(
      ".register-container input[type='password']"
    );

    const firstName = inputFields[0].value.trim();
    const lastName = inputFields[1].value.trim();
    const email = inputFields[2].value.trim();
    const password = passwordField.value.trim();

    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      alert("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    const namePattern = /^[A-Za-z]+$/;
    const isNameValid =
      namePattern.test(firstName) && namePattern.test(lastName);

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isEmailValid = emailPattern.test(email);

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    const isPasswordValid = passwordPattern.test(password);

    if (!isNameValid || !isEmailValid || !isPasswordValid) {
      let errorMessage = "Thông tin đăng ký không hợp lệ:\n";
      if (!isNameValid) {
        errorMessage += "- Tên và họ phải chỉ chứa chữ cái.\n";
      }
      if (!isEmailValid) {
        errorMessage +=
          "- Vui lòng nhập đúng định dạng email, ví dụ: example@gmail.com.\n";
      }
      if (!isPasswordValid) {
        errorMessage +=
          "- Mật khẩu phải bao gồm ít nhất 8 ký tự, gồm chữ cái in hoa, in thường, chữ số và ký tự đặc biệt.\n";
      }
      alert(errorMessage);
      return;
    }

    alert("Đăng ký thành công!");
  });
});
