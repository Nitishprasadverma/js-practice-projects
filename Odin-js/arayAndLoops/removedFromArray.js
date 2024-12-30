// var removeArray = function(array ,...args){
// return array.filter(val => !args.includes(val) )
// }


// console.log(removeArray([2,3,4,5,6,3],3));

const removeArray = function(arr , ...args){
    const newArray = [];
   arr.forEach((element) => {
        if(!args.includes(element)){
            newArray.push(element);
        }
        // else{
        //     newArray.push(element);
        // }
    });
    return newArray;
}
// console.log(removeArray([2,3,4,5,9,34,5], 5));


// function many(arr, ...args){
//     let newa =[];
//     arr.map(e =>{
//         if(!args.includes(e)){
//             newa.push(e);
//         }
//     })
//     return newa;
// }
// console.log(many([1,2,3,4,4],3));