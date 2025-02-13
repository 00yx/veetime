document.getElementById("yes-btn").addEventListener("click", function() {
    document.getElementById("poem-popup").style.display = "block";
});

document.getElementById("no-btn").addEventListener("mouseover", function() {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    this.style.left = x + "px";
    this.style.top = y + "px";
});

// Falling hearts effect
function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    document.body.appendChild(heart);

    let startPos = Math.random() * window.innerWidth;
    heart.style.left = startPos + "px";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);
