activate = "false"

function nav() {
    if (activate === "false") {
        document.querySelector('.navbar-container').style.transform = 'translateX(0)';
        document.querySelector('.navbar-container').style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.3)';
        document.querySelector('.navigation-buttons button').style.transform = 'rotate(90deg)';
        activate = "true";
    } else {
        document.querySelector('.navbar-container').style.transform = 'translateX(100%)';
        document.querySelector('.navbar-container').style.boxShadow = 'none';
        document.querySelector('.navigation-buttons button').style.transform = 'rotate(0deg)'
        activate = "false";
    };
};
