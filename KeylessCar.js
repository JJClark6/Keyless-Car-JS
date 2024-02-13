var age = prompt("What is your age? ");

if (Number(age) < 18) {
    alert("Sorry you are not old enough.");
} else if (Number(age) > 18 ) {
    alert("Power on. Enjoy the ride!");
} else if (Number(age) === 18) {
    alert("Congrats on your first year. Enjoy the ride!");
}

