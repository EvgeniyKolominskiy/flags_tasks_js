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