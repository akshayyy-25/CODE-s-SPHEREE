
/*function Code(id){
    document.getElementById(id).style.display = "block";
}*/

function Code(id){
    let x = document.getElementById(id);
    if(x.style.display === "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
