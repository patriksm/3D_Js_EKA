var myWorld = document.getElementById("world");

var lvl_one_map = [
    {name: "square", height: 200, width: 200, posX: 0, posY: 0, posZ: 0, color: "violet"},
];

var mySquare = document.createElement("div");
mySquare.id = lvl_one_map[0].name;
mySquare.style.position = "absolute";
mySquare.style.height = `${lvl_one_map[0].height}px`;
mySquare.style.width = `${lvl_one_map[0].width}px`;
mySquare.style.backgroundColor = lvl_one_map[0].color;
mySquare.style.transform = `translate3d(
    ${lvl_one_map[0].posX + myWorld.clientWidth / 2 - lvl_one_map[0].width/2}px, 
    ${lvl_one_map[0].posY + myWorld.clientHeight /2  - lvl_one_map[0].height/2}px, 
    ${lvl_one_map[0].posZ}px
)`;
myWorld.appendChild(mySquare);