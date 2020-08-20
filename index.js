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