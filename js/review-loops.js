//user object
// var user = {
//     name: 'Deidra',
//     hp: 50
// };

var users = [];

// users.push(user);

var userCount = 5;

// while (users.length < userCount) {
//     var user = {};
//     user.name = prompt('Enter Name! ');
//     user.hp = prompt('Enter your HP! ');
//     console.log(user);
//     users.push(user);
// }

for ( var i = 0; i < userCount; i++ ) {
    var user = {};
     user.name = prompt('Enter Name! ');
     user.hp = prompt('Enter your HP! ');
     users.push(user);
};
console.log(users);