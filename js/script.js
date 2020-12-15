const baseyield = 50;
let ferttype = null;

rain = prompt("How many inches of rain fell ? ");
            let rainInches = rain;
            let bushelYield = null;
            let finalYield= null;
fert = prompt("Did you use fertilizer ? ");
            if(fert === "yes"){
           
ferttype = prompt("Did you use premium or regular fertilizer?");
            if (ferttype == "premium");
            else if (ferttype == "regular"); }

           
            
function repeatStringNumTimes(str, num){
    return str.repeat(rainInches);
}
console.log(repeatStringNumTimes('*', rainInches));


if (rainInches >=20){
    bushelYield = 50 * 0.9;
}
else if (rainInches < 10) {
    bushelYield = 50 * 0.8;
}
else {
    bushelYield = baseyield;
}


if (ferttype == "premium"){
    finalYield = (bushelYield * 0.15) +bushelYield;
}
else if (ferttype =="regular"){
    finalYield = (bushelYield * 0.1) + bushelYield;
}
else {finalYield = bushelYield;}
console.log ("The yield should be  " + finalYield + "  bushels per acre");