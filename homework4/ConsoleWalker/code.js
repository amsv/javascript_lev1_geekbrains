let game = {
    init() {
        renderer.render();
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter.");
    },

    run() {
        while(true) {
            let direction = mover.getDirection();

            if(direction === null) {
                console.log("Игра окончена.");
                return;
            }

            let nextPoint = mover.getNextPosition(direction);
            renderer.clear();
            player.move(nextPoint);
            renderer.render();
        }
    }
};

game.init();
game.run();
