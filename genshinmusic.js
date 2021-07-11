var audio = new Array(); 
audio[0] = new Audio('./sounds/maintheme.mp3')
audio[1] = new Audio('./sounds/mondstadt.mp3');
audio[2] = new Audio("./sounds/liyueharbor.mp3");
audio[3] = new Audio("./sounds/Dawn Winery.mp3");
audio[4] = new Audio("./sounds/Dragonspine.mp3");
audio[5] = new Audio("./sounds/Stormterrors Lair.mp3");
audio[6] = new Audio("./sounds/Wangshu.mp3");
audio[0].play();

function pausesound(){
    for(i=0;i<audio.length;i++){
        audio[i].pause();
    }
}

function playsound(e){
    switch(e){
        case 0: pausesound()
                audio[0].play();
                break;
        case 1: pausesound()
                audio[1].play();
                break;
        case 2: pausesound()
                audio[2].play();
                break;
        case 3: pausesound()
                audio[3].play();
                break;
        case 4: pausesound()
                audio[4].play();
                break;
        case 5: pausesound()
                audio[5].play();
                break;
        case 6: pausesound()
                audio[6].play();
                break;
 
    }
}