// задание 4
function sum(x , y) {
   return x + y; 
}  
function sub(x , y) {
    return x - y;
}
function mult(x , y) {
    return x * y;
}    
function div(x , y) {
    if (y == 0) {
        alert('На ноль делить нельзя');
        return Infinity;
    }    
    return x / y;
}; 

// задание 5

function mathOperation( arg1, arg2, operation) {
    switch (operation) {
        case sum:
            return sum(arg1,arg2);    
        case sub:
            return sub(arg1,arg2);    
        case mult:
            return mult(arg1,arg2);    
        case div:
            return div(arg1,arg2);    
        default:
            alert("Неверный аргумент")
            break;
    }
}




   

     
    
