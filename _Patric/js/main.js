var myWorld = document.getElementById("world");

var lvl_one_map = [
    { name: "floor", height: 200, width: 200, posX: 0, posY: 100, posZ: 0, rotX: 90, rotY: 0, rotZ: 0, color: "violet", opacity: 0.3 },
    { name: "ceiling", height: 200, width: 200, posX: 0, posY: -100, posZ: 0, rotX: 90, rotY: 0, rotZ: 0, color: "green", opacity: 0.3 },
    { name: "right wall", height: 200, width: 200, posX: 100, posY: 0, posZ: 0, rotX: 0, rotY: 90, rotZ: 0, color: "blue", opacity: 0.3 },
    { name: "left wall", height: 200, width: 200, posX: -100, posY: 0, posZ: 0, rotX: 0, rotY: 90, rotZ: 0, color: "orange", opacity: 0.3 },
    { name: "front wall", height: 200, width: 200, posX: 0, posY: 0, posZ: 100, rotX: 0, rotY: 0, rotZ: 0, color: "#ecc0d1", opacity: 0.3 },
    { name: "hinter wall", height: 200, width: 200, posX: 0, posY: 0, posZ: 100, rotX: 0, rotY: 0, rotZ: 0, color: "yellow", opacity: 0.3 },
];

for (let i = 0; i < lvl_one_map.length; i++) {
    var mySquare = document.createElement("div");
    mySquare.id = lvl_one_map[i].name;
    mySquare.style.position = "absolute";
    mySquare.style.height = `${lvl_one_map[i].height}px`;
    mySquare.style.width = `${lvl_one_map[i].width}px`;
    mySquare.style.backgroundColor = lvl_one_map[i].color;
    mySquare.style.opacity = lvl_one_map[i].opacity;
    mySquare.style.transform = `
    translate3d(
        ${lvl_one_map[i].posX + myWorld.clientWidth / 2 - lvl_one_map[i].width / 2}px, 
        ${lvl_one_map[i].posY + myWorld.clientHeight / 2 - lvl_one_map[i].height / 2}px, 
        ${lvl_one_map[i].posZ}px
    ) 
    RotateX(${lvl_one_map[i].rotX}deg) 
    RotateY(${lvl_one_map[i].rotY}deg) 
    RotateZ(${lvl_one_map[i].rotZ}deg)
    `;
    myWorld.appendChild(mySquare);
}

