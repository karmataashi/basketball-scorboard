// this is for the main section 
let rightscore = document.getElementById('score-right')
let leftscore = document.getElementById('score-left')


//variable count for the left scoreboard 
let leftscoreboard = 0


// variable count for the right scoreboard
let rightscoreboard = 0


//the below function is for left scoreboard 
function plusoneleft() {
    leftscoreboard += 1
    leftscore.textContent = leftscoreboard
}
function plustwoleft() {
    leftscoreboard += 2
    leftscore.textContent = leftscoreboard
}
function plusthreeleft() {
    leftscoreboard += 3
    leftscore.textContent = leftscoreboard
}


//the below function is for right scoreboard 
function plusoneright() {
    rightscoreboard += 1
    rightscore.textContent = rightscoreboard
}
function plustworight() {
    rightscoreboard += 2
    rightscore.textContent = rightscoreboard
}
function plusthreeright() {
    rightscoreboard += 3
    rightscore.textContent = rightscoreboard
}


//for the foul count
let totalfoulhome = document.getElementById('ttl-foul-home')
let totalfoulaway = document.getElementById('ttl-foul-away')
let foulcounthome = 0
let foulcountaway = 0


//foul count function home
function foulhome() {
    foulcounthome += 1
    totalfoulhome.textContent = foulcounthome

}

//foul count function away
function foulaway() {
    foulcountaway += 1
    totalfoulaway.textContent = foulcountaway

}

//for the timeouts
let timeOutHome = document.getElementById('timeouts-home')
let timeOutAway = document.getElementById('timeouts-away')

let timeoutcounthome = 3
let timeoutcountaway = 3



function timeouthome(){
    timeoutcounthome -= 1
    timeOutHome.textContent = timeoutcounthome
}

function timeoutaway() {
    timeoutcountaway -= 1
    timeOutAway.textContent = timeoutcountaway
}

function reset() {
    // Reset scoreboard counters
    leftscoreboard = 0;
    rightscoreboard = 0;
    leftscore.textContent = leftscoreboard;
    rightscore.textContent = rightscoreboard;
  
    // Reset foul counters
    foulcounthome = 0;
    foulcountaway = 0;
    totalfoulhome.textContent = foulcounthome;
    totalfoulaway.textContent = foulcountaway;
  
    // Reset timeout counters
    timeoutcounthome = 3;
    timeoutcountaway = 3;
    timeOutHome.textContent = timeoutcounthome;
    timeOutAway.textContent = timeoutcountaway;
  }