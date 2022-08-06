// create script for user input 
// create script for computer input
// compare user input against computer input
// write result
// loop five
const user = button 
function game(user, comp) {
    if (user == comp)
        alert('you tie')
    else if (user == 'rock' && comp == 'paper')
        alert('you lose')
    else if (user == 'rock' && comp == 'scissors')
        alert('you win')
    else if (user == 'paper' && comp == 'rock')
        alert('you win')
    else if (user == 'paper' && comp == 'scissors')
        alert('you lose')
    else if (user == 'scissors' && comp == 'rock')
        alert('you lose')
    else if (user == 'scissors' && comp == 'paper')
        alert('you win')
}

game('','paper')