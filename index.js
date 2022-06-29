function user(name,email)
{
    this.name = name;
    this.email = email;
}
const greyson = new user("Greyson", "greyson@gmail.com")
console.log(greyson.name);



// Scooter with year, color, and model properties
function Scooter(year, color, model){
    this.year = year;
    this.color = color;
    this.model = model;
}
const scooterfn = new Scooter(2019, "red", "One");
console.log(scooterfn.year);
console.log(scooterfn.color);
console.log(scooterfn.model);


// Driver with name, age, and experience properties
function Driver(name, age, experience){
    this.name = name;
    this.age = age;
    this.experience = experience;
}
const driverfn = new Driver("David", "40", "3 years");
console.log(driverfn);


// PickupLocation with address and city properties
function PickupLocation(address, city){
    this.address = address;
    this.city = city;

}
const location = new PickupLocation("NY 2nd street", "Newyork");
console.log(location);
