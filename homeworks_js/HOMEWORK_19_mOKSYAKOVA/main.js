const form = document.forms["form"];

$(document).ready(function(){
  $(".phone_mask").mask("+38(099)999-99-99");
});

form.signUp.addEventListener("click", function () {
  const name = /^[a-zA-Z]{1,15}$/;
  const email = /^[\w,.-]+@[\w,.-]+$/;
  const phone = /^\+38\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
  const pass = /^\w{6,12}$/;

  coincidence(form.firstName, name);
  coincidence(form.lastName, name);
  coincidence(form.email, email);
  coincidence(form.phoneNumber, phone);
  coincidence(form.password, pass);
});

function coincidence(element, regExp) {
  const label = document.querySelector(`.${element.name}`);

  if (element.value.match(regExp) == null) {
    element.style.borderColor = "red";
    label.style.display = "block";
  } else {
    element.style.borderColor = "green";
    label.style.display = "none";
  }
}