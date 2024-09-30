
let foryou = document.querySelector(".foryou")
let follo = document.querySelector(".follo")
let search = document.querySelector(".search")
let post = document.querySelector(".post")
let every = document.querySelector(".every")
let follo2 = document.querySelector(".follo2")
let lin = document.querySelector(".lin")
let add = document.querySelector(".add")
let sear = document.querySelector(".sear")
let bar = document.querySelector(".bar")
let Foryou=document.querySelector(".Foryou")
let Following=document.querySelector(".Following")
t = true


foryou.addEventListener("click", () => {
    foryou.classList.add("under")
    follo.classList.remove("under")
    Foryou.style.display="block"
    Following.style.display="none"
}
);
follo.addEventListener("click", () => {
    follo.classList.add("under")
    foryou.classList.remove("under")
    Following.style.display="block"
    Foryou.style.display="none"
}
)
search.addEventListener("input", () => {
    if (search.value.trim() == "") {
        post.classList.add("disable")
        lin.classList.remove("ver")
        add.classList.add("unable")
        add.classList.remove("able")

    }
    else {
        post.classList.remove("disable")
        lin.classList.add("ver")
        add.classList.remove("unable")
        add.classList.add("able")

    }
}
)
search.addEventListener("focus", () => {
    every.classList.remove("unable")
    every.classList.add("able")


    follo2.style.height = "180px"
}
)
bar.addEventListener("input", () => {
    if (bar.value.trim() != "") {
        sear.classList.add("unable")
    }
    else {
        sear.classList.remove("unable")
    }
}
)
bar.addEventListener("focus", () => {
    bar.style.border="2px solid rgb(29,154,240)"
    if (t) {
        sear.classList.add("fi")
        

    }
}

)
bar.addEventListener("blur", () => {
    sear.classList.remove("fi")
    bar.style.border="none"

}
)

