let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round(((pos + 60) * 100) / calcHeight);
    if (pos > 300) {
        scrollProgress.style.animation = "fade-in 0.25s forwards"
    } else {
        scrollProgress.style.animation = "fade-out 0.25s forwards"
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(rgb(242, 131, 62) ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;