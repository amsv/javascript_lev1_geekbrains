/**
 * Объект, отвечающий за перемещение
 * @type {{getDirection(): (null|*|undefined), getNextPosition(*): *}}
 */
let mover = {

    // JSDOC
    /**
     * Метод для получение направления
     * @returns {direction - направление, которое может быть 2, 4...}
     */
    getDirection() {

        const availableDirections = [2, 4, 6, 8, 1, 3, 9, 7];

        while(true) {
           let direction =  parseInt(prompt('Введите число (4 ←, 7 ↖, 8 ↑, 9 ↗, 6 →, 3 ↘, 2 ↓, 1 ↙), куда вы хотите переместиться, "Отмена" для выхода.'));

           if(isNaN(direction)) {
               return null;
           }

           if(!availableDirections.includes(direction)) {
               alert('Для перемещения необходимо ввести одно из чисел 2, 4, 6 или 8.');
               continue;
           }

           return direction;
        }
    },

    /**
     *
     * @param direction - направление движения
     * @returns {{x: (number|*), y: (number|*)}} - координата
     */
    getNextPosition(direction) {
        let nextPosition = {
            x: player.x,
            y: player.y,
           /* inputNextX(x0) {
                if (x0 >= 0 && x0 <= 10) {
                    this.nextPosition.x = x0;
                } else { 
                    alert("Границы");
                }
            },
            inputNextY(y0) {
                if (y0 >= 0 && y0 <= 10) {
                    this.nextPosition.y = y0;
                } else { 
                    alert("Границы");
                }
            }*/
        };

        switch (direction) {
            case 2:
                if (nextPosition.y+1 >= config.rowCount) break; 
                nextPosition.y++;
                break;
            case 8:
                if (nextPosition.y-1 < 0 ) break;
                nextPosition.y--;
                break;
            case 4:
                if (nextPosition.x-1 < 0 ) break;
                nextPosition.x--;
                break;
            case 6:
                if (nextPosition.x+1 >= config.collCount) break;
                nextPosition.x++;
                break;
            case 1:
                if (nextPosition.x-1 < 0 ) break;
                if (nextPosition.y+1 >= config.rowCount) break; 
                nextPosition.x--;
                nextPosition.y++;
                break;
            case 3:
                if (nextPosition.x+1 >= config.collCount) break;
                if (nextPosition.y+1 >= config.rowCount) break; 
                nextPosition.x++;
                nextPosition.y++;
                break;
            case 7:
                if (nextPosition.x-1 < 0 ) break;
                if (nextPosition.y-1 < 0 ) break;
                nextPosition.x--;
                nextPosition.y--;
                break;
            case 9:
                if (nextPosition.x+1 >= config.collCount) break;
                if (nextPosition.y-1 < 0 ) break;
                nextPosition.x++;
                nextPosition.y--;
                break;
        }

        return nextPosition;
    }
};
