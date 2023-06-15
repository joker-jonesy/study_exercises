//create a function that allows me to pass in an instance of a user. It grabs all of the associated todos associated with that user. It returns the object with an added attribute that has all of the todos associated with that user
// the object should look lik3 the following

// const example = {
//     id: 1,
//     username:"joker_jonesy",
//     fname:"luke",
//     lname:"jones",
//     tasks:[
//
//     ]
// }

// create a function that calls all the users, returning the object above


const users = [
    {
        id: 1,
        username: "joker_jonesy",
        fname: "luke",
        lname: "jones",
    },
    {
        id: 2,
        username: "bandmom",
        fname: "taylor",
        lname: "lindsey",
    },
    {
        id: 3,
        username: "riversidegurl",
        fname: "peyton",
        lname: "maine",
    }
];

const todos = [
    {
        id: 1,
        userId: 1,
        name: "Take out the Trash"
    },
    {
        id: 2,
        userId: 2,
        name: "Clean the Bathroom"
    },
    {
        id: 3,
        userId: 1,
        name: "Empty the dishwasher"
    },
    {
        id: 4,
        userId: 2,
        name: "Paint walls"
    },
    {
        id: 5,
        userId: 3,
        name: "Water plants"
    },
    {
        id: 6,
        userId: 3,
        name: "Clean attic"
    },
    {
        id: 7,
        userId: 3,
        name: "Finish this JS practice"
    },
    {
        id: 8,
        userId: 2,
        name: "Take out t Trash"
    }
]

function returnAssociations(user) {
    const newUser = Object.assign({}, user);
    newUser.tasks = [];
    
    // i would know how to do this with and without the for loop
    newUser.tasks = todos.filter((itm)=>itm.userId===newUser.id)

    return newUser;
}

function returnAllAssos(users){
    const newUsers=[];

    users.forEach((itm)=>{
        newUsers.push(returnAssociations(itm))
    })

    return newUsers;
}

console.log(returnAllAssos(users)[0].tasks);