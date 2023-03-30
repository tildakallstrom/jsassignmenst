function calculateAge() {
    let age = document.getElementById("inputAge").value;
    if (age <= 14) {
        document.getElementById("output4").innerHTML = "You have to take the bike.";
    } else if(age >= 14 && age <= 17) {
        document.getElementById("output4").innerHTML = "You can ride the moped.";
    } else {
        document.getElementById("output4").innerHTML = "You can take the car.";
    }
}