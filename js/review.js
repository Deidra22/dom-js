var user = {

};
var name = prompt('Enter Name');
// if (name === '' || parseInt(name) || name === ' '){
//     alert('Please Enter a name');
// }else{
//     user.name = name;
//     alert('Hello '+ name);
// }
// console.log(user);

if (name && isNaN(name)){
    user.name = name;
    var hp = prompt('Enter your HP:');
    console.log(hp);
    console.log(isNaN(hp));
    if (hp && !isNaN(parseInt(hp))){
        user.power = parseInt(hp);
    } else{
        alert('Enter valid HP');
    }
}else{
    alert('Enter a Valid Name');
}

console.log(user);
// console.log({name});
// console.log(!name);
// console.log(!isNaN(name));

//ternary
// (name === '' || name === ' ' || parseInt(name))?
//     alert('Please enter a name') :
//     user.name = name;

