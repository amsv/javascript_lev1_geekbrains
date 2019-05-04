// Задание 1. 
/* Вариант 1
let intToObj = {
   hundreds: null,
   tens: null,
   units: null,
   separation (int) {
      let val = parseInt(int);
      arr = String(int);
      if(val >= 0 && val <= 999) {
         switch( arr.length ) {
            case 3: 
               this.hundreds = parseInt(arr[0]);
               this.tens = parseInt(arr[1]);
               this.units = parseInt(arr[2]);
               break;
            case 2: 
               this.tens = parseInt(arr[0]);
               this.units = parseInt(arr[1]);
               break;
            case 1:
               this.units = parseInt(arr[0]);
               break;
         }
      } else {
         return alert("Введите число от 0 до 999")
      }
   }
}
intToObj.separation();
console.log(intToObj); 

*/
 
// Задание 1.  Вариант 2.

let intObj = {
   hundreds: null,
   tens: null,
   units: null,
   separat (int) {
      if ( parseInt(int) >= 0 && parseInt(int) <= 999) { 
            let strInt = String(int);
            while (strInt.length < 3 ) {
               strInt = "0" + strInt;
            }
            let strObj = Object.assign({}, strInt)
            this.hundreds = strObj[0];
            this.tens = strObj[1];
            this.units = strObj[2];
      } else {
         alert("Введите число от 0 до 999");
      }
   }   
}

// Вводим число 
intObj.separat(951);

console.log(intObj);
