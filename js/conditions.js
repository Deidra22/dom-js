//if condition
var hour = prompt('what time is it?');
// if (hour > 15){
//     console.log('class has started');
// };
// if (hour < 21){
//     //continue class
//     console.log('continue class');
// };

if (hour > 18 && hour < 21){
    console.log('class hours');
} else if (hour > 0 && hour < 4){
    console.log('sleep time');
} else{
    console.log('non class hours');
}

var minute = prompt('how minutes pass the hour')
//switch condition
switch (minute){
    case 0:
        console.log('hour has just begun');
        break;
    case 30:
        console.log('i is almost next hour');
        break;
    default:
        console.log('waiting for next hour');
        break;
}