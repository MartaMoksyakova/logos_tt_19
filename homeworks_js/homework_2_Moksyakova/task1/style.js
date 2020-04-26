let q1 = prompt('Tom _________ English\n а)is\n b)am\n c)be\n d)are');
let q2 = prompt('_________ there a restaurant near here?\n а)is\n b)have\n c)are\n d)do');
let q3 = prompt('I didnt _________ TV last night.\n а)watched\n b)watch\n c)watching\n d)not watched'); 
let q4 = prompt('Look! The bus _________ \n а)does leave\n b)is leaving\n c)leaving\n d)leave');
let q5 = prompt('Ive never _________ to England.\n а)been\n b)going\n c)go\n d)went');
let q6 = prompt('_________ to go out to an Italian restaurant tonight?\n а)Are you liking\n b)Would you like\n c)You like\n d)Do you like');
let q7 = prompt('To get to the Post Office, _________ at the end of this road.\n а)turn right\n b)go along\n c)go over\n d)go past');
let q8 = prompt('Excuse me, _________ time please?\n а)you have the\n b)what is\n c)what\n d)have you got the');
let q9 = prompt('Dubai has _________ building in the world.\n а)the tallest\n b)bigger\n c)tall\n d)the most tall ');
let q10 = prompt('I think Ive got a cold, I cant stop _________.\n а)sneeze\n b)to sneeze\n c)the sneezing\n d)sneezing');

let result = 0
if(q1 == 'a'){
    result++;
}
if(q2 == 'а'){
    result++;
}
if(q3 == 'b'){
    result++;
}
if(q4 == 'c'){
    result++;
}
if(q5 == 'a'){
    result++;
}
if(q6 == 'b'){
    result++;
}
if(q7 == 'a'){
    result++;
}
if(q8 == 'b'){
    result++;
}
if(q9 == 'a'){
    result++;
}
if(q10 == 'd'){
    result++;
}
if(result>=0 && result<=3){
    alert(`${result}Your level:Elementary`)
}
else if(result>3 && result<=5){
    alert(`${result}Your level:Upper-Intermediate`)
}
else if(result>5 && result<=7){
    alert(`${result}Your level:Intermediate`)
}
else if(result>7 && result<=10){
    alert(`${result}Your level:Proficity `)
}