var toggleEnable = 1;
function toggle(){
    toggleEnable++;
    //annual rates
    if(toggleEnable % 2 == 0){
        document.getElementById("basicPrice").innerHTML = "&dollar;199.99";
        document.getElementById("proPrice").innerHTML = "&dollar;249.99";
        document.getElementById("masterPrice").innerHTML = "&dollar;399.99";
        console.log("Annual rates");
    } 
    //monthly rates
    else{
        document.getElementById("basicPrice").innerHTML = "&dollar;19.99";
        document.getElementById("proPrice").innerHTML = "&dollar;24.99";
        document.getElementById("masterPrice").innerHTML = "&dollar;39.99";
    }
}