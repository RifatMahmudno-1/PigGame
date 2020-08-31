//Cooding Chellange
var scores=[0,0];
var roundScore=0;
var roundScore1=0;
var activePlayer=0;
var dice;
var dice1;
var playing=true;

document.querySelector("#dice").style="display: none;";
document.querySelector("#dice1").style="display: none;";


document.querySelector('#roll-dice').addEventListener('click',function() {

    document.querySelector('#inputfinish').style.display='none';

    if(playing){
        dice=Math.floor(Math.random()*6+1);
        dice1=Math.floor(Math.random()*6+1);
        console.log(dice,dice1)
        var diceDOM = document.querySelector('#dice');
        diceDOM.style='display: block;';
        diceDOM.src='dice-'+dice+'.png';


        var dice1DOM = document.querySelector('#dice1');
        dice1DOM.style='display: block;';
        dice1DOM.src='dice-'+dice1+'.png';
    
        if(dice==6&&dice1==6){
            document.querySelector('#score' + activePlayer).textContent = (0);
            nextplayer();
        }else{
            if(dice>1&&dice1>1){
                roundScore += dice;
                roundScore1 += dice1;
                //roundScoreBoth=(roundScore+roundScore1);
                document.querySelector('#current' + activePlayer).textContent = ((roundScore+roundScore1));
            }else{
                nextplayer();
            };
        }
    }
});

document.querySelector('#add-score').addEventListener('click', function(){
   scores[activePlayer]+= (roundScore+roundScore1);

    document.querySelector('#score'+activePlayer).textContent=scores[activePlayer];

    var inputfinish=parseInt(document.querySelector("#inputfinish").value);

    if(scores[activePlayer]>=inputfinish){
        document.querySelector('#name'+ activePlayer).textContent='Winner!';
        document.querySelector('#name'+ activePlayer).style='font-weight:300; color:red';
        document.querySelector("#dice").style="display: none;";
        document.querySelector("#dice1").style="display: none;";
        playing=false;
    }else{
        nextplayer()
    };
});



function nextplayer(){
    activePlayer==0? activePlayer=1: activePlayer=0;
    roundScore=0;
    roundScore1=0;

    document.getElementById('current0').textContent='0';
    document.getElementById('current1').textContent='0';
    document.querySelector('.player-1').classList.toggle('active');
    document.querySelector('.player-2').classList.toggle('active');
    document.querySelector("#dice").style="display: none;";
   document.querySelector("#dice1").style="display: none;";
}