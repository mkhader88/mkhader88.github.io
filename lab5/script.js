//this gives you the maximum number between 2 numbers

function max(num1,num2,expected){
    let maxNumber = Math.max(num1, num2);
    if(maxNumber===expected)
        console.log("Expected output of max("+num1+","+num2+") is "+maxNumber+" Test Success");
    else
        console.log("Expected output of max("+num1+","+num2+") is "+maxNumber+" Test Failed expected "+expected+" found "+maxNumber);
}

function maxOfThree(num1,num2,num3,expected){
    let maxNumber = Math.max(num1, num2, num3);
    if(maxNumber===expected)
        console.log("Expected output of maxOfThree("+num1+","+num2+","+num3+") is "+maxNumber+" Test Success");
    else
        console.log("Expected output of maxOfThree("+num1+","+num2+","+num3+") is "+maxNumber+" Test Failed expected "+expected+" found "+maxNumber);
}

max(10,20,20);
max(10,20,10);

maxOfThree(10,220,22,22);
maxOfThree(10,220,22,220);
maxOfThree(10,12,33,33);


const isVowel = (s) =>
    ["a", "e", "i", "o", "u"].indexOf(s.toLowerCase()) !== -1;

console.log("Expected output of isVowel of a = " + isVowel("i"));

const sum = (list) => list.reduce((curr, next) => curr + next);
console.log("Expected output of sum of [2,4,1,3,5] = " + sum([2,4,1,3,5]));

const reverse = (s) => s.split('').reverse().join('');
console.log("Expected output of reverse of TEST = " + reverse("TEST"));

const findLongestWord = (list) => Math.max(...(list.map(el => el.length)));
console.log("Expected output of findLongestWord of ['TEST','new tes','WAP'] = " + findLongestWord(['TEST','new test','WAP']));

const filterLongWords = (list,l) => list.filter(e => e.length > l);
console.log("Expected output of filterLongWords of ['TEST','new tes','WAP'] is 4 = " + filterLongWords(['TEST','new tes','WAP'], 4));


const a = [1,3,5,3,3];
const b = a.map(function(elem, i, array) {
    return elem * 10;
})
console.log(b);
const c = a.filter(function(elem, i, array){
    return elem === 3;});
console.log(c);
const d = a.reduce(function(prevValue, elem, i, array){
    return prevValue + elem;
});
console.log(d);

const d2 = a.find(function(elem) {return elem > 1;}); //3
const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
console.log(d2);
console.log(d3);
