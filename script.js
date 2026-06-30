function showMessage(){
    document.getElementById("surprise").classList.toggle("show");

    confetti({
        particleCount:150,
        spread:80,
        origin:{y:0.6}
    });
}
