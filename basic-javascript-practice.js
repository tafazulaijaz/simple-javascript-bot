const username = prompt("Enter your username") || "tafazul";
const userAge = prompt("Enter your age") || 17;
console.log(username);
console.log(userAge);
if (userAge >= 5 && userAge <= 17) {
  console.log(`${username} is a School Student`);
  console.log("He is learning HTML CSS JavaScript");
} else if (userAge >= 18 && userAge <= 24) {
  console.log(`${username} is a College Student`);
  console.log("He is learning computer science");
} else if (userAge >= 25 && userAge <= 45) {
  console.log(`${username} is a working professional`);
  console.log("He is working as web developer");
} else if (userAge >= 46 && userAge <= 120) {
  console.log(`${username} is retired`);
  console.log("He is working at home");
} else {
  console.log("Please enter a valid age");
}
