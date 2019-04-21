// задание 6
function power(val , pow) {
    if (pow > 1 ) {
        return val * power(val, pow - 1);
    } else if( pow === 0 ) {
        return 1;  
    } else val;
}  