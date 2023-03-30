function gradingSysTem(){
    var num = document.getElementById('num').value;

    if(num <= 74){
        alert("Did not meet expectations");
    }else if(num < 80){
        alert("Fairly Satisfactory");
    }else if(num <= 84){
        alert("Satisfactory");
    }else if(num <= 89){
        alert("Very Satisfactory");
    }else if(num <= 100){
        alert("Outstanding");
    }else {
        alert("Such grade does not exist");}
}