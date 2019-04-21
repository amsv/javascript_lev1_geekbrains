// задание 7 
function pathControl(path) {
    let flag = pathLength(path) && symbolIn(path) && symbolFirstLast(path);
    
    //pathLength=true - длина пароля между 3 и 12.
    function pathLength(path) {
        return (3 <= path.length) && (path.length <= 12) 
    }

    //symbolIn=true - хотя бы одно вхождение &, $, %, * 
    function symbolIn(path) {
        return (path.indexOf('&') !== -1) || (path.indexOf('$') !== -1) || (path.indexOf('%') !== -1) || (path.indexOf('*') !== -1);
    }
    //symbolFirstLast=true - либо первый символ q, либо последний символ z. Либо обо символа 
    function symbolFirstLast(path) {
        return (path.indexOf('q') == 0) || (path.lastIndexOf('z') == (path.length-1));
    }
             
    return flag ? alert('Корретный пароль'):alert('Некорректный пароль'); 
}        
pathControl(prompt('Введите пароль: '));