//Task1

function calculateNearestFarthest() {

    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);

    const close = (a, b, c) => {
    const diffA = Math.abs(100 - a);
    const diffB = Math.abs(100 - b);
    const diffC = Math.abs(100 - c);

       
        if (diffA < diffB && diffA < diffC) {
            document.getElementById("nearest").textContent = `${a}`;
        } else if (diffB < diffA && diffB < diffC) {
            document.getElementById("nearest").textContent = `${b}`;
        } else {
            document.getElementById("nearest").textContent = `${c}`;
        }

        
        if (diffA > diffB && diffA > diffC) {
            document.getElementById("farthest").textContent = `${a}`;
        } else if (diffB > diffA && diffB > diffC) {
            document.getElementById("farthest").textContent = `${b}`;
        } else {
            document.getElementById("farthest").textContent = `${c}`;
        }
    };

    close(a, b, c);
}

//Task 2
 const alphabeticOrder = (str) => str.split('').sort((a,b)=> a>b ? 1:-1).join('')
 console.log(alphabeticOrder('“My name is Moldir'))

 const alphabeticOrde = (str) => 
    str.split(' ') 
      .map(word => word.split('').sort((a, b) => a > b ? 1 : -1).join('')) 
      .join(' '); 
  
  console.log(alphabeticOrder("My name is Alisher"));
  
  

 //Task3

 const notRepeat = (str)=> str.split('').filter((item,index,arr).arr.filter(arrItem => arrItem === item).length===1);
 
  
 //Task4

 const moveForward = (str) => str.split('').map(char => String.fromCharCode(char.charCodeAt(0)+1)).join('');

 //Task5

 function findLongestAndShortest() {
    
    const word1 = prompt("Enter the first word:");
    const word2 = prompt("Enter the second word:");
    const word3 = prompt("Enter the third word:");

    const words = [word1, word2, word3];

    let longestWord = words[0];
    let shortestWord = words[0];

    words.forEach(word => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
        if (word.length < shortestWord.length) {
            shortestWord = word;
        }
    });

    alert(`The longest word is: ${longestWord}\nThe shortest word is: ${shortestWord}`);
}

//Task6

function highlightWords() {
    const paragraph = document.querySelector("#paragraph");
    const words = paragraph.innerText.split(" ");
    
    paragraph.innerHTML = words.map(word => {
        if (word.length > 7) {
            return `<span class="highlight-blue">${word}</span>`;
        } else if (word.length < 3) {
            return `<span class="bold">${word}</span>`;
        } else {
            return word;
        }
    }).join(" ");
}

//Task 7

function replaceCharacters() {
    const paragraph = document.querySelector("#text");
    paragraph.innerHTML = paragraph.innerHTML.replace(/\?/g, "*").replace(/!/g, "@");
}

//Task8
function splitSentences() {
    const paragraph = document.querySelector("#text");
    
    const sentences = paragraph.innerText.split(/(?<=[.?!])\s+/);
    
    paragraph.innerHTML = sentences.join("<br>");
}
 
//Task9

function countWords() {
    const paragraph = document.querySelector("#text").innerText;
    
    const words = paragraph.split(" ");
    
    const wordCount = words.length;
    
    alert("The number of words in the paragraph is: " + wordCount);
}

//Task10
function highlightWords() {
    const paragraph = document.querySelector("#paragraph");
    const words = paragraph.innerText.split(" ");
    
    paragraph.innerHTML = words.map(word => {
        if (word.startsWith("a") || word.startsWith("A")) {
            return `<span class="italic">${word}</span>`;
        } else if (word.endsWith("y") || word.endsWith("Y")) {
            return `<span class="underline">${word}</span>`;
        } else {
            return word;
        }
    }).join(" ");
}

//Task11
function calculateVolume() {
    const radius = document.getElementById("radius").value;
    
    if (radius && radius > 0) {
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        document.getElementById("result11").innerText = `The volume of the sphere is: ${volume.toFixed(2)}`;
    } else {
        document.getElementById("result11").innerText = "Please enter a positive radius value.";
    }
}
//Task12
function calculateCylinderVolume() {
    const radius = document.getElementById("radius").value;
    const height = document.getElementById("height").value;

    if (radius > 0 && height > 0) {
        const volume = Math.PI * Math.pow(radius, 2) * height;
        document.getElementById("result12").innerText = `The volume of the cylinder is: ${volume.toFixed(2)}`;
    } else {
        document.getElementById("result12").innerText = "Please enter positive values for both radius and height.";
    }
}
//Task13
function calculateConeVolume() {
    const radius = document.getElementById("radius").value;
    const height = document.getElementById("height").value;

    if (radius > 0 && height > 0) {
        const volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
        document.getElementById("result13").innerText = `The volume of the cone is: ${volume.toFixed(2)}`;
    } else {
        document.getElementById("result13").innerText = "Please enter positive values for both radius and height.";
    }
}

//Task14
function calculatePrismVolume() {
    const sideA = document.getElementById("sideA").value;
    const sideB = document.getElementById("sideB").value;
    const height = document.getElementById("height").value;

    if (sideA > 0 && sideB > 0 && height > 0) {
        const baseArea = sideA * sideB;
        const volume = baseArea * height;
        document.getElementById("result14").innerText = `The volume of the prism is: ${volume.toFixed(2)}`;
    } else {
        document.getElementById("result14").innerText = "Please enter positive values for all dimensions.";
    }
}

//Task15
function calculateTriangleArea() {
    const base = document.getElementById("base").value;
    const height = document.getElementById("height").value;

    if (base > 0 && height > 0) {
        const area = 0.5 * base * height;
        document.getElementById("result").innerText = `The area of the triangle is: ${area.toFixed(2)}`;
    } else {
        document.getElementById("result").innerText = "Please enter positive values for both base and height.";
    }
}

//Task16
const toggleButton = document.getElementById("toggle-button");
const sidebar = document.getElementById("sidebar");
const mainContent = document.getElementById("main-content");

toggleButton.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    mainContent.classList.toggle("sidebar-open");
});




//Task17
const monthYearElement = document.getElementById("month-year");
const calendarElement = document.getElementById("calendar");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentDate = new Date();

function renderCalendar(date) {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    calendarElement.innerHTML = "";

    // Add empty divs for days before the start of the month
    for (let i = 0; i < startingDay; i++) {
        calendarElement.innerHTML += `<div class="date empty"></div>`;
    }

    // Add divs for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
        calendarElement.innerHTML += `<div class="date">${day}</div>`;
    }

    // Update the month and year display
    monthYearElement.textContent = date.toLocaleString('default', { month: 'long' }) + ' ' + date.getFullYear();
}

// Event listeners for navigation buttons
prevButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
});

nextButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
});

// Initial render
renderCalendar(currentDate);


//Task18
const availableItems = document.getElementById("available-items");
const selectedItems = document.getElementById("selected-items");

let draggedItem = null;

availableItems.addEventListener("dragstart", (event) => {
    draggedItem = event.target;
    event.target.classList.add("dragging");
});

availableItems.addEventListener("dragend", (event) => {
    event.target.classList.remove("dragging");
});

selectedItems.addEventListener("dragover", (event) => {
    event.preventDefault(); 
    event.target.classList.add("over");
});

selectedItems.addEventListener("dragleave", (event) => {
    event.target.classList.remove("over");
});

selectedItems.addEventListener("drop", (event) => {
    event.preventDefault();
    if (draggedItem) {
        selectedItems.appendChild(draggedItem);
        draggedItem = null;
    }
    event.target.classList.remove("over");
});


availableItems.addEventListener("dragover", (event) => {
    event.preventDefault(); 
    event.target.classList.add("over");
});

availableItems.addEventListener("dragleave", (event) => {
    event.target.classList.remove("over");
});

availableItems.addEventListener("drop", (event) => {
    event.preventDefault();
    if (draggedItem) {
        availableItems.appendChild(draggedItem);
        draggedItem = null;
    }
    event.target.classList.remove("over");
});

//19
const choices = ["rock", "paper", "scissors"];
const userChoiceDisplay = document.getElementById("user-choice").querySelector("span");
const computerChoiceDisplay = document.getElementById("computer-choice").querySelector("span");
const outcomeDisplay = document.getElementById("outcome");
const playAgainButton = document.getElementById("play-again");

document.querySelectorAll(".choices button").forEach(button => {
    button.addEventListener("click", () => {
        const userChoice = button.id;
        userChoiceDisplay.textContent = userChoice;
        playGame(userChoice);
    });
});

function playGame(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    computerChoiceDisplay.textContent = computerChoice;

    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a draw!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
    } else {
        result = "You lose!";
    }

    outcomeDisplay.textContent = result;
    playAgainButton.style.display = "block";
}

playAgainButton.addEventListener("click", () => {
    userChoiceDisplay.textContent = "";
    computerChoiceDisplay.textContent = "";
    outcomeDisplay.textContent = "";
    playAgainButton.style.display = "none";
});

//20
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const clockElement = document.getElementById('clock');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

updateClock();
setInterval(updateClock, 1000);



