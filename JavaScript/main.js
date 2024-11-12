// Button Email
function myFunction() {
    alert("My Email: kevmai228@gmail.com");
}

//display and update Year automatically
const fYear = document.getElementById("footerYear");
const d = new Date();
const year = d.getFullYear(); 
fYear.textContent = d.getFullYear();