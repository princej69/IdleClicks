setInterval(()=>{
    document.getElementById("clicks").innerText = Math.floor(game.clicks);
    document.getElementById("g1c").innerText = Math.floor(game.clickers[1]);
    document.getElementById("g2c").innerText = Math.floor(game.clickers[2]);
    
    game.clicks += game.clickers[1]/8
    game.clickers[1] += game.clickers[2]/8
},125)