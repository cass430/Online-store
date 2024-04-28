/*
 * Student Name: Cassidy Perry
 * Student ID: 041038298
 * Course: CST8117 - Cross-Platform Web Design
 * Semester: Winter 2024
 * Assignment: 3
 * Date Submitted: Mar.28.2024
 */

/* **************************************
(Sufiyan, How to create a simple HTML contact form)
****************************************** */

/*Test email validation 
console.log(isValidEmail("myEmail1@email.com")); // true
console.log(isValidEmail("my.Email1@e-mail.com")); // true
console.log(isValidEmail("myEmail1@email.c")); // false
console.log(isValidEmail("m@email1.com")); // false
console.log(isValidEmail(1)); // false
console.log(isValidEmail(true)); // false
console.log(isValidEmail("myEmail1@com")); // false
console.log(isValidEmail("my_Email1@e.com")); // true
console.log(isValidEmail("1m@email.com")); // false
console.log(isValidEmail("my!Email@email.com")); // false */

/* if birth year is not a number or less han 1920 or more than 2010 is invalad*/
/* function isAgeOfMajority(birthYear, birthMonth, birthDay) {
  if (typeof birthYear !== "number" || birthYear < 1920 || birthYear > 2010) {
    return false;
  }

  if (typeof birthMonth !== "number" || birthMonth < 1 || birthMonth > 12) {
    return false;
  }

  if (typeof birthDay !== "number" || birthDay < 1 || birthDay > 31) {
    return false;
  }

  const birthDate = new Date(birthYear, birthMonth - 1, birthDay); // corrected the birthDate calculation

  const TODAY = new Date();

  const difference_in_time = TODAY.getTime() - birthDate.getTime();
  const difference_in_days = Math.round(
    difference_in_time / (1000 * 60 * 60 * 24)
  );

  return difference_in_days >= 6574.5; // 6574.5 days is approximately 18 years
} 

console.log(isAgeOfMajority(2005, 2, 25)); // true – just old enough
console.log(isAgeOfMajority(1997, 2, 29)); // false – not a leap year
console.log(isAgeOfMajority(2008, 5, 1)); // false
console.log(isAgeOfMajority(2000, 1, 1)); // true
console.log(isAgeOfMajority(1980, 12, 31)); // true
console.log(isAgeOfMajority("1980", "12", 31)); // false – wrong data type in parameter
*/
/* 
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
  })
); */

//form validation

$(document).ready(function () {
  // Add custom method for validating date of birth
  $.validator.addMethod("validDOB", function (value, element) {
    var from = value.split(" "); // DD MM YYYY
    // var from = value.split("/"); // DD/MM/YYYY

    var day = from[0];
    var month = from[1];
    var year = from[2];
    var age = 18;

    var mydate = new Date();
    mydate.setFullYear(year, month - 1, day);

    var currdate = new Date();
    var setDate = new Date();

    setDate.setFullYear(mydate.getFullYear() + age, month - 1, day);

    return currdate - setDate > 0;
  });

  /* (Form validation using Jquery examples 2021) */
  // Validate form
  $("#form-validation").validate({
    rules: {
      name: {
        minlength: 2,
        required: true,
      },
      phone: {
        minlength: 10,
        required: true,
        phoneUS: true,
      },
      /* (Equalto Method | Jquery Validation plugin) */
      email2: {
        equalTo: "#email",
      },
      dob: {
        required: true,
        validDOB: true,
        date: true,
      },
    },
    messages: {
      name: {
        minlength: "Name must be at least 2 letters",
      },
      /*(Qawithexperts, Jquery - phone number validation in jQuery-javascript? 2017)*/
      phone: {
        minlength: "Phone number must be 10 digits",
        phoneUS: "Please enter a valid phone number",
      },
      email2: {
        equalTo: "Emails must match",
      },
      dob: {
        required: "Please enter your date of birth",
        validDOB: "Soryy, you must be 18 years of age",
      },
    },
    submitHandler: function (form) {
      form.submit();
      alert("Thank you for contacting Doughy Delights🍰");
    },
    errorPlacement: function (error, element) {
      error.insertAfter(element).addClass("error-message");
    },
  });

  //(Window open(n.d.))
  // Event listener for consentBox
  $("#consentBox").on("click", function () {
    window.open("terms.htm", "_blank");
  });
});
