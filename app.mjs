// jo sb kam hum for loop se kr sakty hai wo sb kam hum array.map se kr sakty hai.
// array.map kya cheez hai? 
// map array ka method hai loop chalanay ka liye mery pass array hona chaiye.
// javascript me map zada used hota hai.





// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// //       parameter, location, value
// arr.map((eachItem, index) =>// fat errow function
//  {
//     // eachItem array ka har item hai. 
//     console.log(eachItem);

//     arr[index] = eachItem * 2;
//     //console.log(arr);



//     // array.map ka use karke hum array ke har item par koi bhi operation perform kar sakty hai.
// })

let matrix1 = [
    [1, 2, 3, 4],
    [4, 5, 6, 7],
    [7, 8, 9, 10],
];

matrix1.map((eashRow, i) => {

    eachRow.map((eachValue, j) => {
        console.log(eachValue);
        
    })

    console.log(eashRow);
  

})

  console.log('result', matrix1);










