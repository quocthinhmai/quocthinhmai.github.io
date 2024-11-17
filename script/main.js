
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
    document.getElementById("hello").style.color="green"
} else if (time >= 12 && time <= 17) {
    greeting = "Good Afternoon!";
    document.getElementById("hello").style.color="orange"
} else {
    greeting = "Good Evening!";
    document.getElementById("hello").style.color="blue"
}
document.getElementById("hello").innerHTML = greeting;

// Hover button
const learnmoreBtn = document.getElementById('btn-alert');
    //Mouse in
learnmoreBtn.addEventListener("mouseover", () => {
    learnmoreBtn.style.backgroundColor = 'green';
    learnmoreBtn.textContent = "Learn More About Me"
});
    // Mouse Out
learnmoreBtn.addEventListener("mouseout", () => {
    learnmoreBtn.style.backgroundColor = '';
    learnmoreBtn.textContent = "Learn More"
});
    // Alert message
learnmoreBtn.addEventListener("click", () => {
    alert("I like fried chicken :)")
});

//list even odd item
for (let i = 1; i <= 12; i = i + 1) {
    const listItem = document.createElement('li');

    if (i % 2 === 0) {
        listItem.textContent =("even");
    }
    else {
        listItem.textContent =("odd");
    }
    document.getElementById("numbers").appendChild(listItem);
};

// Console log current date
const currentDate = new Date();
const sday = currentDate.getDate();
const smonth = currentDate.getMonth() + 1;
const syear = currentDate.getFullYear();
console.log(`Today's date is ${sday}-${smonth}-${syear}`);