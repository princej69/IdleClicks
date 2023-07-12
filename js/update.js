setInterval(()=>{
    document.getElementById("clicks").innerText = Math.floor(game.clicks);
    document.getElementById("g1c").innerText = Math.floor(game.clickers[1]);
    document.getElementById("g2c").innerText = Math.floor(game.clickers[2]);
    document.getElementById("g3c").innerText = Math.floor(game.clickers[3]);
    
    if (game.clickers[2] > 0) document.getElementById("clickbutton").style.display = "none"
    
    game.clicks += game.clickers[1]/20
    game.clickers[1] += game.clickers[2]/20
    game.clickers[2] += game.clickers[3]/20
},1000/20)