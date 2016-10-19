import {sum, sub, square, variable, MyClass} from './import';

// 25
console.log(square(sum(12,7)));

var cred = {
    name: 'Ritesh Kumar',
    enrollmentNo: 11115078
}

var x = new MyClass(cred);

//Ritesh Kumar
console.log(x.getName());