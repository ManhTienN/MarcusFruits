function validateEmail() {
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('email-error');
  
  // Sử dụng biểu thức chính quy để kiểm tra địa chỉ email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailInput.value)) {
      emailError.textContent = 'Địa chỉ email không hợp lệ';
  } else {
      emailError.textContent = '';
  }
}