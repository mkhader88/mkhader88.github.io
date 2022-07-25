
function sum(arr) {
    return arr.reduce(function (prevValue, elem, i, array) {
        return prevValue + elem;
    });
}

function reverse(s) {
    return s.split("").reverse().join("");
}

function filterLongWords(arr, i) {
    return arr.filter((a) => { return a.length > i });
}

console.log("Expected output of sum of [2,4,1,3,5] = " + sum([2,4,1,3,5]));

console.log("Expected output of reverse of TEST = " + reverse("TEST"));

console.log("Expected output of filterLongWords of ['TEST','new tes','WAP'] is 4 = " + filterLongWords(['TEST','new tes','WAP'], 4));