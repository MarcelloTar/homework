for (let i = 0; i <= 10; i++){
    console.log(i);
}

let b = 10;
while (b >= 0) {
    console.log(b);
    b--; 
}

let a = 20;
do{
    console.log(a);
    a++;
} while (a <= 50)

for(let i = 0; i <= 100; i= i + 2){
    console.log(i);
}

let arr = [];

while(arr.length<10){
    let r = Math.floor(Math.random()*100)
    arr.push(r);
}

let sum = 0;

for(i = 0; i <arr.length; i++){
    sum += arr[i];
}

console.log(sum);

for (let i = 0; i < 10; i++){
    console.log(arr[i] +"$");
}

let SumOfEven = 0;

for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
        SumOfEven += arr[i];
    }
}

console.log(SumOfEven);

for (let i = 0; i < 10; i++){
    console.log(arr[i]);
}
for (let i = 9; i >= 0; i--){
    console.log(arr[i]);
}

for ( let i = 0; i < arr.length; i++){
    arr[i] *=2;
}

console.log(arr);
