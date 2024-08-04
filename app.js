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