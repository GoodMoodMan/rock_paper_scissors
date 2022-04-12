function play_round(player_move,pc_move) {
    if (player_move==="rock") {
        if (pc_move==="rock") {
            return ("Draw");
        }
        else if (pc_move==="paper") {
            return ("You Lose");
        }
        else if (pc_move==="scissors") {
            return ("You Win");
        }
    
    }
    if (player_move==="paper") {
        if (pc_move==="rock") {
            return ("You Win");
        }
        else if (pc_move==="paper") {
            return ("Draw");
        }
        else if (pc_move==="scissors") {
            return ("You Lose");
        }
    
    }
    if (player_move==="scissors") {
        if (pc_move==="rock") {
            return ("You Lose");
        }
        else if (pc_move==="paper") {
            return ("You Win");
        }
        else if (pc_move==="scissors") {
            return ("Draw");
        }
    
    }


}

function computer_play() {
    let move=Math.floor(Math.random()*3);
    let move_str;
    switch (move) {
        case 0:
            move_str="rock";
            break; 
        case 1:
            move_str="paper";
            break;  
        case 2:
            move_str="scissors";
            break;     
        default:
            alert("sometin wrong");

    }
    return move_str;

}
function game() {
    let human_score=0;
    let pc_score=0;
    let playerSelection;
    let computerSelection;
    let who_won;
    const rock=document.querySelector('#rock');
    const paper=document.querySelector('#paper');
    const scissors=document.querySelector('#scissors');
    const ui=document.querySelector('#ui');
    const result=document.createElement('div');
    result.classList.add('result');
    const score=document.createElement('div');
    score.classList.add('score');
    const ai=document.createElement('div');
    ai.classList.add('ai');
    ui.appendChild(ai);
    ui.appendChild(result);  
    ui.appendChild(score);

    console.log('game');

    rock.addEventListener('click', () => {
        computerSelection=computer_play();
        who_won=play_round("rock",computerSelection);
        if (who_won==="You Lose") {
            pc_score++;
        }
        if (who_won==="You Win") {
            human_score++;
        }
        console.log(who_won);
        ai.textContent="Computer played "+computerSelection;
        result.textContent= who_won;
        score.textContent="Player: "+human_score+" Computer: "+pc_score;
              
    });
    paper.addEventListener('click', () => {
        computerSelection=computer_play();
        who_won=play_round("paper",computerSelection);
        if (who_won==="You Lose") {
            pc_score++;
        }
        if (who_won==="You Win") {
            human_score++;
        }
        console.log(who_won);
        ai.textContent="Computer played "+computerSelection;
        result.textContent= who_won;
        score.textContent="Player: "+human_score+" Computer: "+pc_score;
                   
    });
    scissors.addEventListener('click', () => {
        computerSelection=computer_play();
        who_won=play_round("scissors",computerSelection);
        if (who_won==="You Lose") {
            pc_score++;
        }
        if (who_won==="You Win") {
            human_score++;
        }
        console.log(who_won);
        ai.textContent="Computer played "+computerSelection;
        result.textContent= who_won;   
        score.textContent="Player: "+human_score+" Computer: "+pc_score;
                  
    });
    
}
game();