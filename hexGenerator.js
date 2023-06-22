// create two functions, one that takes a hex code and coverts to its RGB value and vis versa

//if you are able to do the above, create an additional function that allows you to take a hexcode and make it more green (not pure green)

function hexToRGB(hex){
    const r =parseInt(hex.slice(1,3),16);
    const g =parseInt(hex.slice(3,5),16);
    const b =parseInt(hex.slice(5,7),16);
    return {r,g,b};
}

function valueToHex(c){
    let hex =c.toString(16);
    if(hex==="0"){
        return hex="00"
    }else{
        return hex;
    }

}

function rgbToHex(r,g,b){
    return (valueToHex(r)+valueToHex(g)+valueToHex(b))
}

function moreGreen(hex){
    let rgb = hexToRGB(hex);
    rgb.g=rgb.g+50;
    return rgbToHex(rgb.r,rgb.g,rgb.b);

//     255
}


console.log(moreGreen("#ff00ff"))