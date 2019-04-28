//interger
var num1 = 65;
var num2 = 27;

var sum = num1 + num2;
console.log(sum);

var div = num2 / num1;
console.log(div);

//string
var str1 = 'hello';
var str2 = 'goodbye';

console.log(str1 + ' ' + str2);

//boolean
var yes = true;
var no = false;

console.log(yes == no);
console.log(yes = no);
console.log(14 == '14');

//array
var birds = ['owl', 'hawk', 'sparrow'];
var dogs = ['pug', 'shepherd', 'dachshund'];

birds.unshift('eagle');
console.log(birds);

dogs.splice(0, 2, 'beagle', 'terrier');
console.log(dogs);

birds.pop();
console.log(birds);

//object
var newCustomer = {
    name: 'Peggy',
    last: 'Sue',
    email: 'Peggs25@bitmail.com'
};

var newOrder = {
    item: 'shirt',
    quantity: '6',
    delivery: '05/16/2019',
    total: '$85.23'
};

console.log(newOrder);
console.log(newCustomer.email);
console.log(newOrder.total);