// using html input, add an item to the array
// display the array to the list div shown in the html. Should be only the names, no commas
// when i click on one of the names in the list, it displays it to the item div
// CATCH, when you reference the name directly via the index value of the array to print to the dom, or creating an object where its attribute value is called "name" you must use something else to get it to display

// example: list[0] nor list[1].name cannot be used. You cannot create a different value instead of name, like list[2].cats
// you can use something that is not just a string value. Maybe something like...a function?

const list =[]

function submit(){
    const value = document.getElementById("nameInput").value;
    const newItem ={
        name:value,
        printName(){
            return this.name;
        }
    }
    list.push(newItem);
    // console.log(list)
    renderList();
//     itm.name+" "+itm.mn+"....
}

document.getElementById("submit").addEventListener("click", function(){
    submit();
})

function renderList(){
    document.getElementById("displayList").innerHTML="";
    list.forEach((itm)=>{
        const newEle = document.createElement("div");
        newEle.innerHTML=itm.printName();
        newEle.addEventListener("click", function(){
            renderName(itm.printName());
        })
        document.getElementById("displayList").appendChild(newEle);
    })
}

function renderName(nm){
    document.getElementById("item").innerHTML=nm;
}
