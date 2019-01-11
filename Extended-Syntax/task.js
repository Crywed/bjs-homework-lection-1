"use strict"

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
  let D = (b * b) - (4 * a * c);
  if (D < 0) {
    console.log("корней нету");
  } else if (D == 0) {
    console.log("имеет 1 решение");
  } else if (D > 0) {
    console.log(D);
  }
}
getResult(2, 4, -3);

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
  let now = new Date().getFullYear();
  let age = now - dateOfBirthday;
  console.log(`Возраст: ${age} лет`);
  if (age < 18) {
    console.log(`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
  } else {
    console.log(`Не желаете ли олд-фэшн, ${name}?`);
  }
}
askDrink("Петя", 2002);

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №3 писать здесь
    //return averageMark;
}  //НЕ СМОГ РЕШИТЬ ЗАДАЧУ