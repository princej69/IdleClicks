let game = {
    clicks: 0,
    clickers: {
        1: 0,
        2: 0
    }
}

function clic() {
    game.clicks++
}
function buyClicker(c,C = 10) {
    if (game.clicks >= C) {
        game.clicks -= C
        game.clickers[c] ++
    } 
}