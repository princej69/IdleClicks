let game = {
    clicks: 0,
    clickers: {
        1: 0,
        2: 0,
        3: 0,
    }
}

function save() {
    localStorage.setItem("IdleClicksSave", JSON.stringify(game))
}
function load() {
    try {
        game = JSON.parse(localStorage.getItem("IdleClicksSave"))
    } catch {
        console.log("Error Occured")
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

load()