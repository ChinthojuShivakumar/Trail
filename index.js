
//Filter Json according to button clicked

let jsonData = {
    "Front-End": ["HTML", "Css", "JavaScript", "React JS"],
    "Back-End": ["MySql", "MongoDb", "Nodejs", "Python"],
    "tools": ["vscode"],
    "kitel":["devops"]
}

let div = document.getElementById("div")
let arr = []

for (let key in jsonData) {
    arr.push(key)
}

console.log(arr);

let ul = document.createElement("ul")
div.appendChild(ul);

function updateDisplayedData(key) {
    // Clear the current content in the unordered list
    ul.innerHTML = "";

    // Handle click event here, for example, display the corresponding data
    let technologies = jsonData[key];

    technologies.forEach(element => {
        console.log(element);
        let li = document.createElement("li")
        li.textContent = element
        ul.appendChild(li)
    });
}

let dis = arr.map(el => {
    let button = document.createElement("button")
    button.textContent = el

    button.onclick = function () {
        updateDisplayedData(el);
    }

    div.appendChild(button)
});



// Filter search products


let Products = document.getElementById("ul")
let ProductsList = Products.getElementsByTagName("li")

let search = document.getElementById("text")

search.addEventListener("input", (e)=>{
    e.preventDefault()
    
    let value = e.target.value.toLowerCase()
    
    for(let i = 0 ; i < ProductsList.length ; i++){
       let file =  ProductsList[i].innerHTML.toLowerCase()
       console.log(file);
        if (file.includes(value)){
            ProductsList[i].style.display = "block"
        }
        else{
            ProductsList[i].style.display = "none"
        }
    }


})


// Navbar Responsive


let hamburger = document.getElementById("hamburger")
let circle = document.getElementById("circle")
let navbar = document.getElementById("navbar")
let navItem = document.getElementById("nav-item")

hamburger.addEventListener("click", ()=>{
    // navbar.style.height = "350px"
    // navbar.style.justifyContent = "center"
    // navbar.style.flexDirection = "column"
    // navItem.style.display = "block"
    // hamburger.style.display = "none"
    // circle.style.display = "block"
    // navItem.style.margin = "auto"

    hamburger.classList.add("hamburgerJavscript")
    circle.classList.add("circleJavscript")
    navbar.classList.add("navbarJavaScript")
    navItem.classList.add("nav-itemJavascript")
})

circle.addEventListener("click", ()=>{
    // navbar.style.height = "100px"
    // hamburger.style.display = "block"
    // navItem.style.display = "none"
    // circle.style.display = "none"
    // navbar.style.justifyContent = "space-between"
    // navbar.style.flexDirection = "row"
    hamburger.classList.remove("hamburgerJavscript")
    circle.classList.remove("circleJavscript")
    navbar.classList.remove("navbarJavaScript")
    navItem.classList.remove("nav-itemJavascript")
})


