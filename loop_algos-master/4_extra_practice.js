// Take your previous solutions and write them using the other kind of loop.  
// I.E.  If you wrote both of your algorithms using for loops, now write them out with while loops


// for( i = 0; i <= 20; i++){
//     if (i % 2 != 0){
//         console.log(i);
//     }
// }
// var i = 0
// while( i <= 20){
//     if( i % 2 !== 0){
//         console.log (i);
//     }
//     i++
// }
// var sum= 0;
// for(var num = 1; num <= 10; num++){
//     console.log(num);
//     console.log(sum+=num);
// }


// var sum = 0;
// var num = 1;
// while(num <=10){
//     console.log(num);
//     console.log(sum +=num);
//     num++;
// }


// for( i = 1; i <= 30; i++){
//     if(i % 3 == 0){
//         console.log('Fizz')
//     }
//     else if(i % 5 == 0){
//         console.log('Buzz');
//     }
//       else if(i % 3,5 == 0){
//         console.log('FizzBuzz');
//     }
//     else{
//        console.log(i);
//     }  
    
    
// }

var i = 1 
while( i <=30){
    if(i % 3 == 0){
        console.log('Fizz');
    }
    else if( i % 5 == 0){
        console.log('Buzz');
    }
    else if( i % 3, 5 == 0){
        console.log('FizzBuzz');
    }
    else console.log(i);

    i++;

}