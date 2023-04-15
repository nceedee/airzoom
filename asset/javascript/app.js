let getBar = document.getElementById("bar");
let getCancel = document.getElementById("cancel");
let getHeader = document.getElementById("header");
let getA = document.getElementById("mobileA");
let getReply = document.getElementById("sentReply");
let getForm = document.getElementById("form");
let mobile = document.getElementById("mobile");
const form = document.querySelector(".form");
const alertCancel = document.querySelector(".alert-cancel");
const alerting = document.querySelector(".alerting");

function myBar() {
  if (getBar) {
    getHeader.style.width = "100%";
    getBar.style.display = "none";
    getCancel.style.display = "block";
    getHeader.style.display = "block";
    getHeader.style.padding = "12px";
    getA.style.display = "block";
  }
}

function myCancel() {
  if (getCancel) {
    getHeader.style.width = "0px";
    getCancel.style.display = "none";
    getBar.style.display = "block";
    getHeader.style.padding = "0px";
    getA.style.display = "none";
  }
}

function replySent() {
  if (getReply) {
    alert("Reply sent");
    alert("We will notify you soon!!");
    getForm.style.display = "none";
  }
}

alertCancel.addEventListener("click", function () {
  alerting.style.display = "none";
});

form.addEventListener("submit", function (e) {
  const [email, fullname] = [
    document.querySelector("#email").value,
    document.querySelector("#fullname").value,
  ];

  const changeAlert = document.querySelector(".change-alert");

  alert(
    (changeAlert.innerHTML = `Hello ${fullname} , You will receice an email on the acount ${email} to procide to payment.`)
  );

  setTimeout(() => {
    alerting.style.display = "block";
  }, 2000);

  setTimeout(() => {
    alerting.style.display = "none";
  }, 15000);
});
