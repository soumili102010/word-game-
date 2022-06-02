player1=localStorage.getItem("player1");
player2=localStorage.getItem("player2");

player1score=0;
player2score=0;

document.getElementById("player1").innerHTML=player1+" : ";
document.getElementById("player2").innerHTML=player2+" : ";

document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;

document.getElementById("playerquestion").innerHTML="Question Turn-"+player1;
document.getElementById("playeranswer").innerHTML="Answer Turn-"+player2;

function send()
{
    get_word=document.getElementById("word").value;
word=get_word.toLowerCase();
charAt1=word.charAt(1);
length2=Math.floor(word.length/2);
charAt2=word.charAt(length2);
minus3=word.length-1;
charAt3=word.charAt(minus3);

remove1=word.replace(charAt1,"_");
remove2=remove1.replace(charAt2,"_");
remove3=remove2.replace(charAt3,"_");

question_word = "<h4 id='word_display'> Q. "+remove3+"</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_word + input_box + check_button ;
document.getElementById("output").innerHTML = row;

}

question_turn="player1"
answer_turn="player2"
function check()
{
get_answer = document.getElementById("input_check_box").value;
 answer = get_answer.toLowerCase();
if(answer==word)
{
if(answer_turn=="player1")
{
    player1score=player1score+1;
    document.getElementById("player1score").innerHTML=player1score;
}
else{
    player2score=player2score+1;
    document.getElementById("player2score").innerHTML=player2score;
}
}
if(question_turn=="player1")
{
    question_turn="player2";
    document.getElementById("playerquestion").innerHTML="question turn-"+player2;

}
else{
    question_turn="player1";
    document.getElementById("playerquestion").innerHTML="question turn-"+player1;

}

if(answer_turn=="player1")
{
    answer_turn="player2";
    document.getElementById("playeranswer").innerHTML="answer turn-"+player2;

}
else{
    answer_turn="player1";
    document.getElementById("playeranswer").innerHTML="answer turn-"+player1;

}
}