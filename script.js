function showMessage(){

    document
        .getElementById("surprise")
        .classList.toggle("show");

    confetti({

        particleCount:180,

        spread:90,

        origin:{y:.6}

    });

}



// CREATE SPARKLES

const sparkleContainer = document.getElementById("sparkles");

for(let i=0;i<35;i++){

    let sparkle=document.createElement("div");

    sparkle.className="sparkle";

    sparkle.style.left=Math.random()*100+"vw";

    sparkle.style.top=Math.random()*100+"vh";

    sparkle.style.animationDelay=Math.random()*3+"s";

    sparkle.style.animationDuration=2+Math.random()*3+"s";

    sparkleContainer.appendChild(sparkle);

}
