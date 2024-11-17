// Button Email
//const emailBtn = document.getElementById("btn-alert");

//emailBtn.addEventListener('click', () => {
//   alert("My Email: kevmai228@gmail.com");
//})

//Email button
function emailBtn() {
    document.getElementById("btn-alert").innerHTML = "My email: kevmai228@gmail.com";
}

//display and update Year automatically
const fYear = document.getElementById("footerYear");
const d = new Date();
const year = d.getFullYear(); 
fYear.textContent = d.getFullYear();

// Greeting function
const time = new Date().getHours();
let greeting;
if (time < 12) {
    greeting = "Good Morning!";
} else if (time >= 12 && time <= 17) {
    greeting = "Good Afternoon!";
} else {
    greeting = "Good Evening!";
}
document.getElementById("hello").innerHTML = greeting;

// Hover button
const learnmoreBtn = document.getElementById('btn-alert');

learnmoreBtn.addEventListener("mouseover", () => {
    learnmoreBtn.style.backgroundColor = 'green';
    learnmoreBtn.textContent = "Learn More About Me"
});
    // Mouse Out
learnmoreBtn.addEventListener("mouseout", () => {
    learnmoreBtn.style.backgroundColor = '';
    learnmoreBtn.textContent = "Learn More"
});
    //alert Button
learnmoreBtn.addEventListener("click", () => {
    alert("I like fried chicken :)")
});