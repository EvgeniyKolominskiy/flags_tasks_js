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