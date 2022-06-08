function Person(){
    this._name = name
    this._age = age;
}

Person.getInfomations = function(instance) {
    return {
        name: instance._name,
        age: instance._age
    };
}

// Person.prototype.getName = function(){
//     return this._name;
// }
// Person.prototype.getAge = function(){
//     return this._age;
// }

let gomu = new Person('고무',30)

// console.log(gomu.getName());  // 이름
// console.log(gomu.getAge());   // 나이

console.log(Person.getInfomations(gomu)) // person의 객체로 나옴
