//1. create an array of 5 person objects, the objhects should contain first name last name, age and job properties, jobb should be a boolean.
//------------------------------------------------------------------------------------------------------------------------------------------------
let people = [
  {
    firstName: "Gandalf",
    lastName: "The Grey",
    age: 55000,
    job: true,
  },
  {
    firstName: "Aragorn,",
    lastName: "son of Arathorn",
    age: 87,
    job: true,
  },
  {
    firstName: "Bilbo",
    lastName: "Baggins",
    age: 111,
    job: false,
  },
  {
    firstName: "Smeagol",
    lastName: "Gollumsen",
    age: 543,
    job: false,
  },
  {
    firstName: "Samwise",
    lastName: "Gamgee",
    age: 38,
    job: true,
  },
];

//2. print First and last name of the first person in the array. using dot notation on firstname and bracket notation last name
//------------------------------------------------------------------------------------------------------------------------------------------------
console.log(people[0].firstName);
console.log(people[0]["lastName"]);
//3. That was tiresome.. just so much typing. Lets write a method to that we never need to that again..
//create a method in every person object that returns first and last name, call it fullName. This can be done manually for each one or with a loop.
//Print fullName of the second person in the array by calling the method.
//------------------------------------------------------------------------------------------------------------------------------------------------
people.forEach((person) => {
  person.fullName = person.firstName + " " + person.lastName;
});
console.log(people);

//4. Its the third person's birthday! And their job status changed. Update their age and job status using dot notation.
//------------------------------------------------------------------------------------------------------------------------------------------------
people[2].age = 112;
people[2].job = true;
console.log(people[2]);

//5. Person three is throwing a giant party! create a function called fotballPubben(). The function should check if the person is over 18, print "party time" if they are and "too young" if they are not. It should also print the name of the person.
// use a loop to call the function for every person in the array.
function fotballPubben(person) {
  if (person.age > 18) {
    console.log(person.firstName + ": It's party time!");
  } else {
    console.log(person.firstName + ": You're too young, go home.");
  }
}
people.forEach((person) => {
  fotballPubben(person);
});
//------------------------------------------------------------------------------------------------------------------------------------------------

//6. It's time for school! Create a function called university. It should take in an person object as well as type of degree (bachelors or masters) as arguments.
// The function should update age and add two properties called "degree" and "student loan". The value of age, degree and student loan should change depending on what degree
//was passed into the function. Send one person to uni and print the result.
//------------------------------------------------------------------------------------------------------------------------------------------------

function university(person, degree) {
  if (degree === "Bachelors") {
    person.age += 3;
    person.studentLoan = 320000;
    person.degree = "Bachelors";
  } else {
    person.age += 5;
    person.studentLoan = 450000;
    person.degree = "Masters";
  }
}
university(people[4], "Masters");
// 7. API TIME!
// Read the documentation of this dog API: https://dog.ceo/dog-api/documentation/
// Fetch 4 dogs of the same breed or sub-breed and display them in the DOM
//feel free to change the ID of the images and/or add css.
//------------------------------------------------------------------------------------------------------------------------------------------------

// const dawgURL = "https://dog.ceo/api/breeds/image/random/4";
// function fetchDogs() {
// fetch("https://dog.ceo/api/breeds/image/random/4");
// then(response => response.json())
// then(data=> {
//     const imageUrl = data.message;
//     console.log(imageUrl);
// })
// .catch(error => console.error(error))
// }
const imagePromises = [];

for (let i = 0; i < 4; i++) {
  const promise = fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => data.message);

  imagePromises.push(promise);
}

Promise.all(imagePromises)
  .then((images) => {
    const container = document.getElementById("dog-container");
    images.forEach((imageUrl) => {
      const imgElement = document.createElement("img");
      imgElement.src = imageUrl;
      container.appendChild(imgElement);
    });
  })
  .catch((error) => console.error("Error:", error));

//Her har eg gjort oppgåve 1-6 sjølv, og fått litt meir hjelp med 7 av ChatGPT enn eg er komfortabel med. Eg måtte krype til korset for å rekke innleveringa, sidan eg fortsatt føler eg henger etter i JS.

//BONUS!!
//create a way for you to change the breed of the dogs displayed on your page
//------------------------------------------------------------------------------------------------------------------------------------------------
