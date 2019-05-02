var btn = document.getElementsByClassName('button');
var btnUsingSelector = document.querySelector('.button');

btn[0].style.padding = '10px';
btn[0].style.fontSize = '22px';

//add Event Listener
// btnUsingSelector.addEventListener('click', function (){
//     console.log('Button was clicked from JS!');
// });

// btnUsingSelector.addEventListener('mouseover', function (){
//     var btnText = event.target.innerHTML;
//     alert('Mouse over on the ' + btnText + ' button.');
// });

//cancel button
var cancelBtn = document.getElementsByClassName('cancel');
var cancelbtnUsingSelector = document.querySelector('.cancel');

cancelBtn[0].style.padding = '10px';
cancelBtn[0].style.fontSize = '22px';

var cancelBtn = document.querySelector('.cancelBtn');
cancelbtnUsingSelector.addEventListener('click', function(){
    var response = confirm('confirm cancel');
    console.log(response);
    // if user confirms do something = response value true
    if (response = true){
        alert('Cancel Confirmed!');
    } else {
        alert('Did not Cancel!');
    }
    // if user cancels do something = response value false
});

// document.addEventListener('keypress', function (event){
//     console.log(event.key);
//     console.log(event.keyCode);
// });

// document.addEventListener('keydown', function (event){
//     console.log(event.key);
//     console.log(event.keyCode);
    
// });

// document.addEventListener('keyup', function (event){
//     console.log(event.key);
//     console.log(event.keyCode);
    
// });

// document.addEventListener('scroll', function(event){
//     console.log(event);
// });