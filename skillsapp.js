let coloursIconRotated = false;

document.querySelectorAll(".colours i").forEach(i => i.addEventListener("click", coloursIconShow));

function coloursIconShow() {
    if (coloursIconRotated == false) {
        document.querySelectorAll(".colours i").forEach(i => i.classList.add("coloursiconrotate"));
        coloursIconRotated = true;
        document.querySelectorAll(".colouricon").forEach(i => i.classList.add("coloursshow"));
        console.log("clicked");
    } else {
        document.querySelectorAll(".colours i").forEach(i => i.classList.remove("coloursiconrotate"));
        coloursIconRotated = false;
        document.querySelectorAll(".colouricon").forEach(i => i.classList.remove("coloursshow"));
        console.log("clicked");
    }
}

document.querySelectorAll(".cgreen").forEach(i => i.addEventListener("click", cgreen));
document.querySelectorAll(".cpurple").forEach(i => i.addEventListener("click", cpurple));
document.querySelectorAll(".cblue").forEach(i => i.addEventListener("click", cblue));


var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 3) {
        counter = 1;
    }
}, 10000)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('dshow');
        } else {
            entry.target.classList.remove('dshow');
        }
    })
})



const animationFrames = [
    {
        transform: "translateX(0%)"
    },
    {
        transform: "translateX(100%)"
    }
];

const animationSettings = {
    duration: 500,
    iterations: 1
};

function toggleBtg(shouldBeShown) {
    const btgmain = document.querySelector(".btgmenu");

    isNavBarLocked = shouldBeShown;

    if (shouldBeShown) {
        btgmain.style.display = "block";
        btgmain.animate([animationFrames[1], animationFrames[0]], animationSettings);
    }
    else {
        btgmain.animate(animationFrames, animationSettings).finished.then(() => {
            btgmain.style.display = "none";
        });
    }
}

function btgclick() {
    const kurwamac = document.querySelector(".btgmenu");

    toggleBtg(kurwamac.style.display == "none");
}

document.querySelector(".btg-icon").addEventListener("click", btgclick);

const nav = document.querySelector("nav");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    if (lastScrollY > window.scrollY) {
        console.log("we are going up");
        document.getElementById("menu").classList.add("navshow")
        document.getElementById("menu").classList.remove("navhid");
    }

    if (scrollPosition > 600) {
        if (lastScrollY < window.scrollY && !isNavBarLocked) {
            console.log("we are going down");
            document.getElementById("menu").classList.add("navhid");
            document.getElementById("menu").classList.remove("navshow");
        }
    }

    lastScrollY = window.scrollY;
})

let isNavBarLocked = false;
document.querySelectorAll("a").forEach(i => i.addEventListener("click", menuclick));

function menuclick() {
    console.log("a");
    const btgmain = document.querySelector(".btgmenu");
    btgmain.animate(animationFrames, animationSettings).finished.then(() => {
        btgmain.style.display = "none";
    });
};


document.querySelector(".btg-icon").addEventListener("click", chngicon);
document.querySelectorAll(".btgmenu-main a").forEach(i => i.addEventListener("click", chngicon2));

function chngicon() {
    if (isNavBarLocked) {
        document.querySelector(".fa-solid").classList.remove("fa-bars")
        document.querySelector(".fa-solid").classList.add("fa-x")
    } else {
        document.querySelector(".fa-solid").classList.remove("fa-x")
        document.querySelector(".fa-solid").classList.add("fa-bars")
    }
}
function chngicon2() {
    document.querySelector(".fa-solid").classList.remove("fa-x")
    document.querySelector(".fa-solid").classList.add("fa-bars")
}

document.querySelector(".btg-icon").addEventListener("click", chngicon);
document.querySelectorAll(".btgmenu-main a").forEach(i => i.addEventListener("click", chngicon2));

function chngicon() {
    if (isNavBarLocked) {
        document.querySelector(".btg-icon i").classList.remove("fa-bars")
        document.querySelector(".btg-icon i").classList.add("fa-x")
    } else {
        document.querySelector(".btg-icon i").classList.remove("fa-x")
        document.querySelector(".btg-icon i").classList.add("fa-bars")
    }
}
function chngicon2() {
    document.querySelector(".btg-icon i").classList.remove("fa-x")
    document.querySelector(".btg-icon i").classList.add("fa-bars")
}


function onLoad() {
    const colour = JSON.parse(localStorage.getItem("mainwbColor"));
    document.querySelector(":root").style.setProperty('--mainwb-color', colour);
}

let mainwbColor = '';


function cgreen() {
    console.log("green");
    mainwbColor = "rgba(0, 150, 0, 1)";
    const root = document.querySelector(":root");
    root.style.setProperty('--mainwb-color', mainwbColor);
    localStorage.setItem("mainwbColor", JSON.stringify(mainwbColor));
    return mainwbColor;
}

function cpurple() {
    const root = document.querySelector(":root");
    mainwbColor = 'rgba(120, 75, 255, 1)';
    localStorage.setItem("mainwbColor", JSON.stringify(mainwbColor));
    root.style.setProperty('--mainwb-color', mainwbColor);
}

function cblue() {
    const root = document.querySelector(":root");
    mainwbColor = "rgba(0, 75, 255, 1)";
    localStorage.setItem("mainwbColor", JSON.stringify(mainwbColor));
    root.style.setProperty('--mainwb-color', mainwbColor);
}



// const cardItemHeightOne = document.querySelectorAll('.card-item')[0].offsetHeight;
// const cardItemHeightTwo = document.querySelectorAll('.card-item')[1].offsetHeight;
// const cardItemHeightThree = document.querySelectorAll('.card-item')[2].offsetHeight;

// const arrHeights = [cardItemHeightOne, cardItemHeightTwo, cardItemHeightThree];
// arrHeights.sort();


// if (screen.width < 1260) {
//     console.log("aaaa");
//     var heightValue = arrHeights[2];
//     document.querySelectorAll(".card-item").forEach(i => i.style.height = heightValue + "px");

// }
if (screen.width < 1260) {
    const cardItemHeightOne = document.querySelectorAll('.card-item')[0].offsetHeight;
    const cardItemHeightTwo = document.querySelectorAll('.card-item')[1].offsetHeight;
    const cardItemHeightThree = document.querySelectorAll('.card-item')[2].offsetHeight;

    const arrHeights = [cardItemHeightOne, cardItemHeightTwo, cardItemHeightThree];
    arrHeights.sort();
    var heightValue = arrHeights[2];
    document.querySelectorAll(".card-item").forEach(i => i.style.height = heightValue + "px");

}

// setInterval(() => {
//     if (screen.width < 1260) {
//         const cardItemHeightOne = document.querySelectorAll('.card-item')[0].offsetHeight;
//         const cardItemHeightTwo = document.querySelectorAll('.card-item')[1].offsetHeight;
//         const cardItemHeightThree = document.querySelectorAll('.card-item')[2].offsetHeight;

//         const arrHeights = [cardItemHeightOne, cardItemHeightTwo, cardItemHeightThree];
//         arrHeights.sort();
//         console.log("aaaa");
//         var heightValue = arrHeights[2];
//         document.querySelectorAll(".card-item").forEach(i => i.style.height = heightValue + "px");

//     }
// }, 5000);