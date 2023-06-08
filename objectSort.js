// The goal with this app is to build a function that takes the given array and
// returns an object. The object has an attribute for each different "value", in which those values are an array containing the objects whose value property is that value.

// Example based on below array

// {
//     '46':[{name: "Billy Joel", value: 46},],
//     '72':[{name: "Gwen Stefani", value: 72}, {name: "Brandon Flowers", value: 72}]
// }

const cards = [
    {
        name:"Billy Joel",
        value: 46
    },
    {
        name:"Gwen Stefani",
        value: 72
    },
    {
        name:"Brandon Flowers",
        value: 72
    },
    {
        name:"Adam Levine",
        value:33
    }
]

function groupItems(arr){
    let newObj ={};

    // logic to assign values

    arr.forEach((itm)=>{
        if(!newObj[itm.value]){
            newObj[itm.value]=[itm];
        } else{
            newObj[itm.value].push(itm)
        }
    })

    // .map always have to return something


    return newObj;
}

console.log(groupItems(cards));