function shout(string){
    return string.toUpperCase();
}
function whisper(string){
    return string.toLowerCase();
}
function logShout(string){
console.log(string.toUpperCase());
}
function logWhisper(string){
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string){
    if(string === string.toLowerCase()){
        var deaf = "I can't hear you!";
        return deaf;
    }else if (string === string.toUpperCase()){
        var hear = "YES INDEED!";
        return hear;
    }else{
        var feels = "I would love to!";
        return feels;
    }
}

