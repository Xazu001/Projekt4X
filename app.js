var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 3) {
        counter = 1;
    }
}, 5000)
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


const hiddenElements = document.querySelectorAll('.dhid');
hiddenElements.forEach((el) => observer.observe(el));

document.querySelectorAll(".joinus").forEach(i => i.addEventListener("mouseover", mouseEnter));
document.querySelectorAll(".joinus").forEach(i => i.addEventListener("mouseout", mouseout));
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
    "rgba(0, 0, 0,0.15)"
];

let isOverArea = false;
let isNavBarLocked = false;

function mouseout() {
    isOverArea = false;
    circles.forEach(function (circle, index) {
        circle.style.display = "none";
    });
}

circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;

});

function mouseEnter() {
    isOverArea = true;
    mouseshadow();
}

function mouseshadow() {
    if (!isOverArea) return;

    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
        circle.style.display = "block";
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.5;
        y += (nextCircle.y - y) * 0.5;
    });

    requestAnimationFrame(mouseshadow);
}

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


document.querySelectorAll("a").forEach(i => i.addEventListener("click", menuclick));

function menuclick(){
    console.log("a");
    const btgmain = document.querySelector(".btgmenu");
    btgmain.animate(animationFrames, animationSettings).finished.then(() => {
        btgmain.style.display = "none";
    });
};


document.querySelector(".btg-icon").addEventListener("click", chngicon);

function chngicon(){
    if(isNavBarLocked){
        document.querySelector(".fa-solid").classList.remove("fa-bars")
        document.querySelector(".fa-solid").classList.add("fa-x")
    }else{
        document.querySelector(".fa-solid").classList.remove("fa-x")
        document.querySelector(".fa-solid").classList.add("fa-bars")
    }
}
// const scrollPosition = window.scrollY;

// setInterval(if (scrollPosition <90){


// }, Infinity) 