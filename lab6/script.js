//this gives you the maximum number between 2 numbers

//Exercise 1
String.prototype.filter = function (find) {
    var replaceString = this;
    for (var i = 0; i < find.length; i++) {
        replaceString = replaceString.replace(find[i], "");
    }
    replaceString = replaceString.replace("  ", " ");
    return replaceString;
};
//Exercise 2
Array.prototype.bubbleSort = function() {
    var arr = this;
    var len = arr.length,
        i, j, stop;

    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    return arr;
};
console.log("this is test not good data test".filter(["test","this"]));
console.log([6,4,0, 3,-2,1].bubbleSort());

//Exercise 3
function Person(name) {
    this.name = name;

    this.teach = function (subject) {
        console.log(`${this.name} is now teaching ${subject}.`);
    };
}

const TeacherDerived = new Person('Name');

TeacherDerived.teach("WAP");

function createPerson(name) {
    let person = Object.create(TeacherDerived);
    person.name = name;
    return person;
}


const TeacherDerived2 = new createPerson('Name2');

TeacherDerived2.teach("New WAP");

//Exercise 4  --->  object prototype approach for inheritance
let person = {
    name: 'Name',
    age: 22,
    greet: function() { console.log("Greetings, my name is "+this.name+" and I am "+this.age+" years old.") }
};

let Student = {
    major: "Software",
    __proto__: person,
    greet: function() { console.log("Hey, my name is "+this.name+" and I am studying "+this.major) }
};

let Professor = {
    department: "IT",
    __proto__: person,
    greet: function() { console.log("Good day, my name is "+this.name+" and I am in the "+this.department+" department") }

};

const std = Object.create(Student);
const prof = Object.create(Professor);

console.log("object prototype approach for inheritance");
std.greet();
prof.greet();

//Exercise 4  --->  function constructor approach.

function Person2(name,age) {
    this.name = name;
    this.age = age;

    this.great = function () {
        console.log("Greetings, my name is "+this.name+" and I am "+this.age+" years old.") ;
    };
}

const Student2 = function (name,age,major) {
    this.major = major;
    Person2.call(this, name,age);
    this.great = function () {
        console.log("Hey, my name is "+this.name+" and I am studying "+this.major);
    };
}

const Professor2 = function (name,age,department) {
    this.department = department;
    Person2.call(this, name,age);
    this.great = function () {
        console.log("Good day, my name is "+this.name+" and I am in the "+this.department+" department");
    };
}

Student2.prototype = Object.create(Person2.prototype);
Professor2.prototype = Object.create(Person2.prototype);



const std2 = new Student2("Name2",22,"Software2");
const prof2 = new Professor2("Name2",22,"IT2");

console.log("function constructor approach.");
std2.great();
prof2.great();