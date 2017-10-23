function Game(){
    this.board = '';
    this.playerOne = '';
    this.playerTwo = '';
}
Game.prototype.getBoardArray = function(){
    return this.board.trim().split("\n").map(row => row.trim()).join('');
}

Game.prototype.getWinner = function (result) {
    //let boardString = this.getBoardArray();
    if(result == '---------') return 0;
    
    else if((result.charAt(2) == 'x' && result.charAt(4) == 'x' && result.charAt(6) == 'x')|| 
            (result.charAt(0) == 'x' && result.charAt(4) == 'x' && result.charAt(8) == 'x')|| 
            (result.charAt(0) == 'x' && result.charAt(1) == 'x' && result.charAt(2) == 'x')|| 
            (result.charAt(3) == 'x' && result.charAt(4) == 'x' && result.charAt(5) == 'x')|| 
            (result.charAt(6) == 'x' && result.charAt(7) == 'x' && result.charAt(8) == 'x')|| 
            (result.charAt(0) == 'x' && result.charAt(3) == 'x' && result.charAt(6) == 'x')|| 
            (result.charAt(1) == 'x' && result.charAt(4) == 'x' && result.charAt(7) == 'x')|| 
            (result.charAt(2) == 'x' && result.charAt(5) == 'x' && result.charAt(8) == 'x')) return 1; // conditions for 1
    else if((result.charAt(2) == 'o' && result.charAt(4) == 'o' && result.charAt(6) == 'o')|| 
            (result.charAt(0) == 'o' && result.charAt(4) == 'o' && result.charAt(8) == 'o')|| 
            (result.charAt(0) == 'o' && result.charAt(1) == 'o' && result.charAt(2) == 'o')|| 
            (result.charAt(3) == 'o' && result.charAt(4) == 'o' && result.charAt(5) == 'o')|| 
            (result.charAt(6) == 'o' && result.charAt(7) == 'o' && result.charAt(8) == 'o')|| 
            (result.charAt(0) == 'o' && result.charAt(3) == 'o' && result.charAt(6) == 'o')|| 
            (result.charAt(1) == 'o' && result.charAt(4) == 'o' && result.charAt(7) == 'o')|| 
            (result.charAt(2) == 'o' && result.charAt(5) == 'o' && result.charAt(8) == 'o')) return 2; // conditions for 2
    else return null;
};

for(let i = 1; i <10 ; i++){
    document.getElementById('cell' + i).addEventListener('change', () =>{      // call event listener foreach change
        document.getElementById('cell' + i);
         
        let bord = '';
        for(let j = 1; j <10 ; j++){
            bord += document.getElementById('cell' + j).value;                 //get a string value for each change
            if(/[^xo-]/g.test(bord)){                                   //accept only 'x' and 'o', otherwise clear the board
                alert("only X and O");
                for(let n = 1; n <10 ; n++){ document.getElementById('cell' + n).value = '-';} 
                break;
            }
        }
        if(Game.prototype.getWinner(bord) == 1){                                //if function returns 1 == if player 1 wins
            alert("Player 1 won");
            for(let l = 1; l <10 ; l++){ document.getElementById('cell' + l).value = '-';}
        }
        if(Game.prototype.getWinner(bord) == 2){                                //if function returns 2 == if player 2 wins
            alert("Player 2 won");
            for(let m = 1; m <10 ; m++){ document.getElementById('cell' + m).value = '-';}
        }
        if(bord.indexOf('-') == -1) for(let n = 1; n <10 ; n++){ document.getElementById('cell' + n).value = '-';} //clear if there is no winner
        
        //console.log(bord);
        //console.log(Game.prototype.getWinner(bord));
    });
}

module.exports = Game;