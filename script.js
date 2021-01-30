const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// Question 1
const cat = {
  complain: "Meow",
  sayMeow: function () {
    console.log("cat says " + this.complain);
  },
};
cat.sayMeow();
console.log(cat);

// Question 2
const Heading = document.querySelector("h3");
Heading.innerHTML = "Updated Heading";

// Question 3
Heading.style.fontsize = "2em";

// Question 4
const heading = document.querySelector("h3");
console.dir(heading.classname);
heading.classname = "subheading";
console.log(heading.classname);

// Question 5
const paragraph = document.querySelector("p");
paragraph.style.colour = "red";

// Question 6
const resultsContainer = document.querySelectorAll(".results");
resultsContainer.innerHTML = "<p>New parapgraph</p>";
resultsContainer.style.backgroundcolour = "yellow";

// Question 7
function printList(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
}

printList(cats);

// Question 8
function createCats(cats) {
  for (let i = 0; i < cats.length; i++) {
    console.log(list[i]);
  }
}

createCats(cats);
