
// let userText;

// function Click() {
// 	userText = document.getElementById("userText").value;
// 	Text1 = document.getElementById('Text1');
// 	Text1.textContent = userText;
// }

// document.querySelector("#submit").onclick =  function greet() {
// 	alert(myName);
// }

let myName = "Доброго времени суток, с вами Frontend-разработчик Даниил!)"

let gradus_value;
let text2;

let fall_value;
let text3;


let text4;


let text5;

function greet() {
	document.getElementById('name1').append(myName);
}

function celsiusToFahrenheit() {
	gradus_value = document.getElementById('gradus_value').value;
	text2 = document.getElementById("text2");
	text2.textContent = `Ваш градус Цельсия это ${(9/5 * gradus_value + 32).toFixed(1)} градусов по Фаренгейту`
}

function calculateFallDistance() {
	fall_value = document.getElementById("fall_value").value;
	text3 = document.getElementById("text3");
	text3.textContent = `Пройденное расстояние  ${((1 / 2) * 9.8 * fall_value ** 2).toFixed(2)}м`;
}

function calculateAverage() {
	average_value1 = document.getElementById("average_value1").value;
	average_value2 = document.getElementById('average_value2').value;
	average_value3 = document.getElementById('average_value3').value;
	text4 = document.getElementById('text4');
	if(Number(average_value1) !== 0 && Number(average_value2) !== 0 && Number(average_value3) !== 0){
    	let Result = Number(average_value1) + Number(average_value2) + Number(average_value3);
		text4.textContent = (Result / 3).toFixed(1);
	} else{
		text4.textContent = "Я работаю только с 3-мя числами и не равными 0"
	}
}

function concatStrings() {
	string_value1 = document.getElementById('string_value1').value;
	string_value2 = document.getElementById('string_value2').value;
	text5 = document.getElementById('text5');
	text5.textContent = ` первое слова "${string_value1}" съела корова второе слово "${string_value2}" забылось на веки `;
}