// Task 1: Initialize the Array
let greetings = Array(7);
greetings.fill("Hello");
console.log(greetings);

// Task 2: Update the Array
greetings.fill("Hi", 2, 4);
console.log(greetings);

// Task 3: Populate the Array with a for loop
let numberList = Array(5);
for (i = 0; i < numberList.length; i++) {
    numberList[i] = i * 10;
}
console.log(numberList);