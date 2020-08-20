'use strict';

/*1. дан массив, нужно проверить, есть ли в нем элемент со значением 'c' или нет. Если есть - вывести 'есть', если нет - вывести 'нет'.*/
console.log('TASK 1');

const arr1 = ['a', 'b', 'c', 'd', 'e',];
let flag1 = false;
for (let i = 0; i < arr1.length; i++) {
	if (arr1[i] === 'c') {
		flag1 = true;
	}
}
if (flag1) {
	console.log('есть');
} else {
	console.log('нет');
}

/*2. необходимо создать функцию hasElem, которая параметром будет принимать массив и возвращать true, если 'c' есть в массиве, и false - если нет*/
/**
 *
 * @param array
 * @returns {boolean}
 */
function hasElem(array) {
	let flag = false;
	for (let i = 0; i < array.length; i++) {
		if (array[i] === 'c') {
			flag = true;
			break;
		}
	}
	return flag;
}

console.log('Task 2');
console.log(hasElem(arr1));

/*3. Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.*/

console.log('Task 3');

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let flag2 = false;
for (let i = 0; i < arr2.length; i++) {
	if (arr2[i] === 5) {
		flag2 = true;
	}
}
if (flag2) {
	console.log('да');
} else {
	console.log('нет');
}

/*4. Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'.*/

console.log('Task 4');

let flag3 = false;
for (let i = 2; i < 31; i++) {
	if (31 % i === 0) {
		flag3 = true;
	}
}
console.log(flag3);