const dialogue = document.querySelector("#optionsdialog")
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
    if(localStorage.getItem("IdleClicksSave") == null) save()
    try {
        game = JSON.parse(localStorage.getItem("IdleClicksSave"))
    } catch {
        save()
        console.log("Error Occured")
    }
}
function hardReset() {
    if (confirm("Are you sure you want to do this?")) {
        game = {
            clicks: 0,
            clickers: {
              1: 0,
              2: 0,
              3: 0,
            }
        }
        save()
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