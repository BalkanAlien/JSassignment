let gameRooms = [];


let game = document.querySelector('#game');
let gameSpace = document.createElement('div');
let gameBoard = document.querySelector('#gameBoard');
gameSpace.classList.add('container-fluid');
gameSpace.classList.add('px-4');
       gameSpace.classList.add('py-4');
        gameSpace.classList.add('gx-4');
        gameSpace.classList.add('gy-4');
for(let i=0; i<7; i++){
    let row = document.createElement('div');
    row.classList.add('row');
    for(let j=0; j<7; j++){
        let room = document.createElement('div');
        room.classList.add('col-sm');
        room.classList.add('rooms');
        room.id=`${i}-${j}`;
        row.appendChild(room);
    }
    gameSpace.appendChild(row);
}

gameBoard.appendChild(gameSpace);

class Room{
    up;
    down;
    left;
    right;
    image;
    roomInstance;

    constructor(up,down,left,right,image,roomInstance){
        this.up=up;
        this.down=down;
        this.left=left;
        this.right=right;
        this.image=image;
        this.roomInstance=roomInstance;
        
        this.draw();
    }

    draw(){
        this.roomInstance.style.cssText  += "background-image:url('" + this.image + "');";
       
       this.roomInstance.style.backgroundRepeat = 'no-repeat';
        if(this.left==true && this.right==false && this.up==false && this.down==true){
            this.rotate180();
        }
        else if(this.left==false && this.right==true && this.up==true && this.down==false){
            this.rotate90();
        }
        else if(this.left==true && this.right==false && this.up==true && this.down==false){
            this.rotate270();
        }
        else if(this.left==true && this.right==true && this.up==false && this.down==false){
            this.rotate90();
        }
        else if(this.left==true && this.right==true && this.up==true && this.down==false){
            this.rotate180();
        }
        else if(this.left==false && this.right==true && this.up==true && this.down==true){
            this.rotate90();
        }
        else if(this.left==true && this.right==false && this.up==true && this.down==true){
            this.rotate270();
        }
    }

    rotate90(){
        this.roomInstance.style.transform = 'rotate(90deg)';
    }
    rotate180(){
        this.roomInstance.style.transform = 'rotate(180deg)';
    }
    rotate270(){
        this.roomInstance.style.transform = 'rotate(270deg)';
    }
    redraw(roomX){
        roomX.roomInstance.style.cssText  += "background-image:url('" + roomX.image + "');";
       
       roomX.roomInstance.style.backgroundRepeat = 'no-repeat';
        if(roomX.left==true && roomX.right==false && roomX.up==false && roomX.down==true){
            roomX.rotate180();
        }
        else if(roomX.left==false && roomX.right==true && roomX.up==true && roomX.down==false){
            roomX.rotate90();
        }
        else if(roomX.left==true && roomX.right==false && roomX.up==true && roomX.down==false){
            roomX.rotate270();
        }
        else if(roomX.left==true && roomX.right==true && roomX.up==false && roomX.down==false){
            roomX.rotate90();
        }
        else if(roomX.left==true && roomX.right==true && roomX.up==true && roomX.down==false){
            roomX.rotate180();
        }
        else if(roomX.left==false && roomX.right==true && roomX.up==true && roomX.down==true){
            roomX.rotate90();
        }
        else if(roomX.left==true && roomX.right==false && roomX.up==true && roomX.down==true){
            roomX.rotate270();
        }

    }
}

let imageSources = ["images/bukvaG.png", "images/bukvaT.png", "images/bukvaI.png"];
let straightRotated = [];
let straight = [];
for(let i=0; i<7; i++){
    straight.push(imageSources[2]);
}
console.log(straight);
for(let i=0; i<6; i++){
    straightRotated.push(imageSources[2]);
}
console.log(straightRotated);
let bend = [];
for (let i=0; i<5; i++){
    bend.push(imageSources[0]);
}

console.log(bend);
let bend180 = [];
for(let i=0; i<5; i++){
    bend180.push(imageSources[0]);
}
console.log(bend180)
let bend90 = [];
for(let i=0; i<5; i++){
    bend90.push(imageSources[0]);
}
console.log(bend90)

let bend270 = [];
for(let i=0; i<4; i++){
    bend270.push(imageSources[0]);
}
console.log(bend270)

let tPiece = [];
for(let i=0; i<5; i++){
    tPiece.push(imageSources[1]);
}
console.log(tPiece)

let tPiece180 = [];
for(let i=0; i<4; i++){
tPiece180.push(imageSources[1]);
}
console.log(tPiece180)

let tPiece90 = [];
for(let i=0; i<4; i++){
tPiece90.push(imageSources[1]);
}
console.log(tPiece90)
let tPiece270 = [];
for(let i=0; i<4; i++){
    tPiece270.push(imageSources[i]);
}
console.log(tPiece270)
let randoms = shuffle([...Array(34).fill().map((element, index) => index + 1)]);
let cnt = 0;

function shuffle(array) {
    let i = array.length;
    let j = 0;
    let temp;
    
    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

let rooms = document.querySelectorAll('.rooms');
let cntBend = 0;
let cntBend180 = 0;
let cntBend90 = 0;
let cntBend270 = 0;
let cntTpiece = 0;
let cntTpiece180 = 0;
let cntTpiece270 = 0
let cntTpiece90 = 0;
let cntStraight =0;
let cntStraightRotated = 0;
rooms.forEach(room => {
    let x = room.id[0];
    let y = room.id[2];
    let r;
    if(x == 0 && y == 0){
        //room.style.background = '#ff66cc';
        r= new Room(false, true, false, true, bend[cntBend], room);
        cntBend++;
        gameRooms.push([room,r]);
        
    }
    else if(x == 0 && y == 6){
        r= new Room(false, true, true, false, bend180[cntBend180], room);

        cntBend180++;
        gameRooms.push([room,r]);

    }
    else if((x == 0 && y == 2) || (x == 0 && y == 4) || (x == 2 && y == 4)){
        r= new Room(false, true, true, true, tPiece[cntTpiece], room);

        cntTpiece++;
        gameRooms.push([room,r]);

    
    }
    else if((x == 2 && y == 0) || (x == 2 && y == 2) || (x == 4 && y == 0)){
        r= new Room(true, true, false, true, tPiece90[cntTpiece90], room);

        cntTpiece90++;
        gameRooms.push([room,r]);

    }
    else if((x == 2 && y == 6) || (x == 4 && y == 4) || (x == 4 && y == 6)){
        r= new Room(true, true, true, false, tPiece270[cntTpiece270], room);

        cntTpiece270++;
        gameRooms.push([room,r]);

    }
    else if((x == 4 && y == 2) || (x == 6 && y == 2) || (x == 6 && y == 4)){
        r= new Room(true, false, true, true, tPiece180[cntTpiece180], room);

        cntTpiece180++;
        gameRooms.push([room,r]);

    }
    else if(x == 6 && y == 0){
        r= new Room(true, false, false, true, bend90[cntBend90], room);
        cntBend90++;
        gameRooms.push([room,r]);

    }
    else if(x == 6 && y == 6){
        r= new Room(true, false, true, false, bend270[cntBend270], room);
        cntBend270++;
        gameRooms.push([room,r]);

    }else{
        value = randoms[cnt];
        let restOfStraight = [];
        let restOfStraightRotated = [];
        let restOfBend= [];
        let restOfBend90 = [];
        let restOfBend180 = [];
        let restOfBend270 = [];
        let restOfTPiece = [];
        let restOfTPiece90 = [];
        let restOfTPiece180 = [];
        let restOfTPiece270 = [];
    
        for(let i=cntStraightRotated; i<straightRotated.length; i++){
            restOfStraightRotated.push(imageSources[2]);
        
        }

        for(let i=cntStraight; i<straight.length; i++){
            restOfStraight.push(imageSources[2]);
        }
  
        for (let i=cntBend; i<bend.length; i++){
            restOfBend.push(imageSources[0]);
        }

        for(let i=cntBend180; i<bend180.length; i++){
            restOfBend180.push(imageSources[0]);
        }
 
        for(let i=cntBend90; i<bend90.length; i++){
            restOfBend90.push(imageSources[0]);
        }

        for(let i=cntBend270; i<bend270.length; i++){
            restOfBend270.push(imageSources[0]);
        }

        for(let i=cntTpiece; i<tPiece.length; i++){
            restOfTPiece.push(imageSources[1]);
        }
        for(let i=cntTpiece180; i<tPiece180.length; i++){
        restOfTPiece180.push(imageSources[1]);
        }
        for(let i=cntTpiece90; i<tPiece90.length; i++){
        restOfTPiece90.push(imageSources[1]);
        }

        for(let i=cntTpiece270; i<tPiece270.length; i++){
            restOfTPiece270.push(imageSources[i]);
        }

        
        if(value >= 0 && value <= 6){
            r= new Room( false, false, true, true,restOfStraightRotated[cntStraightRotated], room );
            cntStraightRotated++;
            gameRooms.push([room,r]);

        }
        else if(value >= 7 && value <= 12){
            r= new Room(true, true, false, false, restOfStraight[cntStraight], room);
            cntStraight++;
            gameRooms.push([room,r]);

        }
        else if(value >= 13 && value <= 16){
            r= new Room(true, false, true, false, restOfBend270[cntBend270], room);
            cntBend270++;
            gameRooms.push([room,r]);

        }
        else if(value >= 17 && value <= 20){
            r= new Room(false, true, true, false, restOfBend180[cntBend180], room);
            cntBend180++;
            gameRooms.push([room,r]);

        }
        else if(value >= 21 && value <= 24){
            r= new Room(true, false, false, true, restOfBend90[cntBend90], room);
            cntBend90++;
            gameRooms.push([room,r]);

        }
        else if(value >= 25 && value <= 27){
            r= new Room(false, true, false, true, restOfBend[cntBend], room);
            cntBend++;
            gameRooms.push([room,r]);

        }
        else if(value >= 28 && value <= 29){
            r= new Room(true, true, true, false, restOfTPiece270[cntBend270], room);
            cntTpiece270++;
            gameRooms.push([room,r]);

        }
        else if(value >= 30 && value <= 31){
            r= new Room(false, true, true, true, restOfTPiece[cntTpiece], room);
            cntTpiece++;
            gameRooms.push([room,r]);

        }
        else if(value == 32 || value == 33){
            r= new Room(true, true, false, true, restOfTPiece90[cntTpiece90], room);
            cntTpiece90++;
            gameRooms.push([room,r]);

        }
        else if(value == 34){
            r= new Room(true, false, true, true, restOfTPiece180[cntTpiece180], room);
            cntTpiece180++;
            gameRooms.push([room,r]);

        }
        cnt++;
    }
})