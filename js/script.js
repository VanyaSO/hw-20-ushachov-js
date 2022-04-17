'use strict'

////////////////////////////////////////////////
const arrOne = [1, 2];
console.log('Task 1');
console.log( arrOne.concat([3, 4]) );

////////////////////////////////////////////////
const arrTwo = [1, 2, 3];
console.log('Task 2');
console.log( arrTwo.reverse());

////////////////////////////////////////////////
const arrThree = [1, 2, 3];
console.log('Task 3');
console.log( arrThree.push(4,5,6));
console.log(arrThree);

////////////////////////////////////////////////
const arrFour = [1, 2, 3];
console.log('Task 4');
console.log( arrFour.unshift(4,5,6) );
console.log(arrFour);

////////////////////////////////////////////////
const arrFive = ['js', 'css', 'jq'];
console.log('Task 5 (3 варината как вывести)');
console.log( arrFive.slice(0, -2));
console.log( arrFive[0] );
console.log( arrFive.shift() );

////////////////////////////////////////////////
const arrSix = ['js', 'css', 'jq'];
console.log('Task 6 (3 варианта как вывести)');
console.log( arrSix.slice(-1));
console.log( arrSix[arrSix.length - 1]);
console.log( arrFive.pop() );

////////////////////////////////////////////////
const arrSeven = [1, 2, 3, 4, 5];
console.log('Task 7');
console.log(arrSeven.slice(0, -2));

////////////////////////////////////////////////
const arrEight = [1, 2, 3, 4, 5];
console.log('Task 8');
console.log(arrEight.slice(-2));

////////////////////////////////////////////////
const arrNine = [1, 2, 3, 4, 5];
console.log('Task 9');
arrNine.splice(1, 2)
console.log(arrNine);

////////////////////////////////////////////////
const arrTen = [1, 2, 3, 4, 5];
console.log('Task 10');
console.log(arrTen.slice(1, -1));

////////////////////////////////////////////////
const arrEleven = [1, 2, 3, 4, 5];
console.log('Task 11');
arrEleven.splice(3, 0,'a', 'b', 'c');
console.log(arrEleven);

////////////////////////////////////////////////
const arrTwelve = [1, 2, 3, 4, 5];
console.log('Task 12');
arrTwelve.splice(1, 0,'a', 'b');
arrTwelve.splice(6, 0,'c');
arrTwelve.push('e');
console.log(arrTwelve);

////////////////////////////////////////////////
const arrThirteen = [3, 4, 1, 2, 7];
console.log('Task 13');
arrThirteen.sort();
console.log(arrThirteen);

////////////////////////////////////////////////
const arrFourteen = [5, 6, 7, 8, 9];
console.log('Task 14');
const SumNumberArrFourteen = arrFourteen.reduce((num1, num2) => num1 + num2, 0);
console.log(SumNumberArrFourteen);

////////////////////////////////////////////////
const arrFifteen = [5, 6, 7, 8, 9];
console.log('Task 15');
const arrNewFifteen = [];

for(let num in arrFifteen){

    arrNewFifteen.push(Math.pow(arrFifteen[num],2));

}
console.log(arrNewFifteen);

////////////////////////////////////////////////
const arrSixteen = [1,-3, 5, 6,-7, 8, 9,-11];
console.log('Task 16');
const arrSixteenNew = [];

for(let i = 0; i < arrSixteen.length; i += 1){

    if(arrSixteen[i] < 0){
        arrSixteenNew.push(arrSixteen[i]);
    }

}
console.log(arrSixteenNew);

////////////////////////////////////////////////
const arrSeventeen = [1,-3, 5, 6,-7, 8, 9,-11];
console.log('Task 17');
const arrSeventeenNew = [];

for(let i = 0; i < arrSeventeen.length; i += 1){

    if(arrSeventeen[i] % 2 === 0 ){
        arrSeventeenNew.push(arrSeventeen[i]);
    }

}
console.log(arrSeventeenNew);

////////////////////////////////////////////////
const arrEighteen = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
console.log('Task 18');
const arrEighteenNew = [];

for(let i = 0; i < arrEighteen.length; i += 1){

    if(arrEighteen[i].length > 5 ){
        arrEighteenNew.push(arrEighteen[i]);
    }

}
console.log(arrEighteenNew);

////////////////////////////////////////////////
const arrNineteen = [1, 2, [3, 4], 5, [6, 7]];
console.log('Task 19');
arrNineteen.splice(0, 5, [3, 4],[6, 7]);
console.log(arrNineteen);

////////////////////////////////////////////////
const arrTwenty = [5,-3, 6,-5, 0,-7, 8, 9];
console.log('Task 20');
let answer = 0;

for(let i = 0; i < arrTwenty.length; i += 1){

    if(arrTwenty[i] < 0){
        answer += 1;
    }

}
console.log(answer + ' Отрицательних числа');
