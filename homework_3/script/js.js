//  1 Task
let userName = prompt("Как вас зовут?")

function showName() {
	let message = "Привет, "
	alert (`${message +  userName}`)
}

showName()

// 2 Task
let a = prompt("Сколько вам лет?");

switch (a) {
  case 5 :
    alert( 'Маловато' );
    break;
  case 25:
    alert( 'Хороший возраст}!' );
    break;
  case 55:
    alert( 'Уже не молодой' );
    break;
  default:
    alert( "Нет таких значений" );
}

let age = prompt("Сколько вам лет?");

if (age <= '15') {
	alert( 'Маловато' );
} else if (age >= '16' && age <= '54') {
	alert( 'Хороший возраст}!' );
} else if (age > '55') {
	alert( 'Уже не молодой' );
} else {
	alert( "Нет таких значений" );
}

// 3 Task
