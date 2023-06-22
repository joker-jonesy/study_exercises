// create a function that returns an array, in which in that array, has pairs of items from the array
// example output: [1,2,3,4] => [[1,2],[3,4]]

//next step, randomize the pairs
// example output: [1,2,3,4] => [[1,3],[2,4]] or [[4,1],[2,3]]

//if an odd number of items in the initial array, have one pair that is a trio
// example output: [1,2,3,4,5] => [[1,3],[2,5,4]]

function createPairs(arr){
    const newArray=[];
    // look up how to build your own shuffle function
    const sortedArray= arr.sort(()=>Math.random()-0.5);

    for(let i=0; i<sortedArray.length; i+=2){
        if(sortedArray[i+3]===undefined){
            newArray.push(sortedArray.slice(i, i+3))
            return newArray
        }else{
            newArray.push(sortedArray.slice(i, i+2))
        }
    }

    return newArray;
}

function createArrays(arr){
    const newArray=[];
    const arrays = Math.floor(arr.length/2);
    for(let i=0; i<arrays; i++){
        newArray.push([])
    }

    return newArray;
}



const items = [1,2,3,4,5,6,7,8];
console.log(createPairs(items))
