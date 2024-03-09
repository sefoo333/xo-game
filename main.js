let te = document.querySelector(".main h1");
let squs = document.querySelectorAll(".squ");
let ran = ["X", "O"]
let turn = ran[Math.floor(Math.random() * 2)];
let actives = []
let wons = document.querySelector(`.won`)
//let ww = document.querySelector(".ww")
let loses = document.querySelector(`.lose`)
let windows = document.querySelector(".start-window");
let window_winner = document.querySelector(".winner")

setTimeout(function () {
    windows.style.display = "none"
}, 2500)




function done(o, t, th) {


    let color = "#00c0ffs"
    document.getElementById("item" + o).style.backgroundColor = color;
    document.getElementById("item" + t).style.backgroundColor = color;
    document.getElementById("item" + th).style.backgroundColor = color;
    winner = document.getElementById("item" + th).innerHTML;
    document.querySelector(".winner h1").innerHTML = `${winner} is Winner 🥳`
    window_winner.style.display = "flex"
    console.log(winner)
    if (winner === "O") {
        wons.innerHTML++
        localStorage.setItem("o", wons.innerHTML);
        document.querySelector(".o").style.backgroundColor = "#318fdd";
        document.querySelector(".x").style.backgroundColor = "transparent";
    } else if (winner === "X") {
        loses.innerHTML++
        localStorage.setItem("x", loses.innerHTML);
        document.querySelector(".x").style.backgroundColor = "#E94F37";
        document.querySelector(".o").style.backgroundColor = "transparent";
    } else {
        bal()
    }

    setTimeout(function () {
        location.reload()
    }, 2000)

}

function bal() {
    // ww.innerHTML++
    //  localStorage.setItem("balance", ww.innerHTML);
    window_winner.style.display = "flex"
    document.querySelector(".winner h1").innerHTML = "No any winner 🙄"
    setTimeout(function () {
        location.reload()
    }, 2000)
}
// document.querySelector("#save").addEventListener("click", function () {
//     localStorage.setItem("o", wons.innerHTML);
//     localStorage.setItem("x", loses.innerHTML);
//     localStorage.setItem("balance", ww.innerHTML);


//     document.querySelector("#save ion-icon").name = "checkmark-done"
//     setTimeout(function () {
//         document.querySelector("#save ion-icon").name = "save"
//     }, 1000)
// })










function won() {
    for (i = 1; i < 10; i++) {
        actives[i] = document.getElementById("item" + i).innerHTML;
    }

    if (actives[1] === actives[2] && actives[2] === actives[3] && actives[1] != "") {
        done(1, 2, 3)

    } else if (actives[3] === actives[6] && actives[6] === actives[9] && actives[9] != "") {
        done(3, 6, 9)
    } else if (actives[2] === actives[5] && actives[5] === actives[8] && actives[5] != "") {
        done(2, 5, 8)
    }
    else if (actives[3] === actives[5] && actives[5] === actives[7] && actives[7] != "") {
        done(3, 5, 7)
    } else if (actives[1] === actives[5] && actives[5] === actives[9] && actives[1] != "") {
        done(1, 5, 9)
    } else if (actives[1] === actives[4] && actives[4] === actives[7] && actives[1] != "") {
        done(1, 4, 7)
    } else if (actives[4] === actives[5] && actives[5] === actives[6] && actives[5] != "") {
        done(4, 5, 6)
    } else if (actives[7] === actives[8] && actives[8] === actives[9] && actives[7] != "") {
        done(7, 8, 9)
    } else if (!actives.includes("")) {
        bal()
        document.querySelector(".o").style.backgroundColor = "transparent";
        document.querySelector(".x").style.backgroundColor = "transparent";
    }
}











function game(id) {

    ele = document.getElementById(id)
    if (turn == "X" && ele.innerHTML === "") {
        ele.innerHTML = turn
        turn = "O"
        ele.style.backgroundColor = "#E94F37"
        document.querySelector(".o").style.backgroundColor = "#318fdd";
        document.querySelector(".x").style.backgroundColor = "transparent";
    } else if (turn == "O" && ele.innerHTML === "") {
        ele.innerHTML = turn
        turn = "X"
        ele.style.backgroundColor = "#00c0ff"
        document.querySelector(".x").style.backgroundColor = "#E94F37";
        document.querySelector(".o").style.backgroundColor = "transparent";
    }

    won()

    // localStorage.setItem("o" , wins);
    // localStorage.setItem("x" , lose)
}

wons.innerHTML = localStorage.getItem("o")
loses.innerHTML = localStorage.getItem("x")
//ww.innerHTML = localStorage.getItem("balance")


// buttons

document.querySelector("#clear").addEventListener("click", function () {
    localStorage.clear()
    document.querySelector("#clear ion-icon").name = "checkmark-done"
    setTimeout(function () {
        document.querySelector("#clear ion-icon").name = "close-circle"
    }, 1000)
    location.reload()
})

document.querySelector("#reload").onclick = function () {

    // for (i = 0; i < squs.length; i++) {
    //     squs[i].textContent = ""
    //     squs[i].style.backgroundColor = "red"
    //     turn = ran[Math.floor(Math.random() * 2)];
    //     if (turn == "X") {
    //         document.querySelector(".x").style.backgroundColor = "#E94F37";
    //         document.querySelector(".o").style.backgroundColor = "transparent";
    //     } else if (turn == "O") {
    //         document.querySelector(".o").style.backgroundColor = "#318fdd";
    //         document.querySelector(".x").style.backgroundColor = "transparent";
    //     }
    // }

    location.reload()

    document.querySelector("#reload ion-icon").name = "checkmark-done"
    setTimeout(function () {
        document.querySelector("#reload ion-icon").name = "refresh"
    }, 1000)
}



let new_window = document.createElement("div")
new_window.style.cssText = `    font-size: 15px;
    position: absolute;
    top: -38px;
    right: 6px;
    background-color: #555252bd;
    color: white;
    border-radius: 10px;
    padding: 5px;
    transition:0.5s;
    display:none;
    text-wrap:nowrap;
    `
new_window.className = "win_ne"
function hover(id) {
    new_window.innerHTML = document.getElementById(id).getAttribute("data-text")
    document.getElementById(id).appendChild(new_window);
    new_window.style.display = "block"

}


function exit() {
    new_window.style.display = "none";
}

document.querySelector(".about-me").addEventListener("click", function () {
    document.querySelector(".window-2").classList.toggle("active")
})

document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".window-2").classList.remove("active")
})

// setTimeout(function () {
//     te.innerHTML = ran[Math.floor(Math.random() * 2)]
// }, 3000)
// squs.forEach(function (e) {
//     e.addEventListener("click", function () {
//         if (e.classList.contains("no")) {
//             if (te.innerHTML === "X") {
//                 e.innerHTML = "X"
//                 te.innerHTML = "O"
//                 e.classList.remove("no")
//                 e.classList.add("x")
//             } else {
//                 e.innerHTML = "O"
//                 te.innerHTML = "X"
//                 e.classList.remove("no")
//                 e.classList.add("o")
//             }
//         }
//     })
// })
