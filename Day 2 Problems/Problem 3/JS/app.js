let age = 23;

function displayAge() {
    let localAge = 25;

    console.log("Local Age:", localAge)
}

displayAge();

console.log("Global Age:", age);

console.log(localAge);

