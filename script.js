
let player1 = prompt("Player1 ingresa tu nombre")
alert(`${player1} seras el color azul`)
let player2 = prompt("Player2 ingresa tu nombre")
alert(`${player2} seras el color rojo`)


const botones = Array.from(document.querySelectorAll(".button"));

let turno = 1;
const matriz = [
    [1,2,3,4,5,6,7],
    [8,9,10,11,12,13,14],
    [15,16,17,18,19,20,21],
    [22,23,24,25,26,27,28],
    [29,30,31,32,33,34,35],
    [36,37,38,39,40,41,42]
];

const clickButton = function () {
    if(turno % 2 != 0){
        // this.style.background = "blue";
        
        bajarColor(this.id, "blue")
        document.getElementById("player").innerHTML = `Turno de ${player2}`
    }else if(turno % 2 ==0 ){
        // this.style.background = "red";
        
        bajarColor(this.id, "red")
        document.getElementById("player").innerHTML = `Turno de ${player1}`
        }
    if(matrizRevisar()== true){
        return 
    }
    turno ++
}


let botonesID = []
let numId = 1
botones.forEach(boton => {
    boton.id = numId;
    boton.addEventListener("click", clickButton)
    numId ++
})

function matrizRevisar(){
    let colorRed = 0
    let colorBlue = 0
    //horizontal
    for (x=0;x<matriz.length;x++) {
        for (y=0;y<matriz[x].length;y++) {
            if(y < matriz[x].length ){
                if(document.getElementById(matriz[x][y]).style.background== "red"){
                    colorRed ++
                }else{
                    colorRed = 0
                }
                if(document.getElementById(matriz[x][y]).style.background== "blue"){
                    colorBlue ++
                }else{
                    colorBlue = 0
                }
                if (colorRed == 4 ){
                    alert(`Felicidade ${player2} ganaste!!!`)
                        return true
                }else if (colorBlue == 4){
                    alert(`Felicidade ${player1} ganaste!!!`)
                        return true
                }
            }
        }
        colorRed = 0
        colorBlue = 0
    }
    //fin horizontal

    //vertical
    for (x=0;x<matriz[0].length;x++){
        for (y=0;y<matriz.length;y++){
            // console.log(matriz[y][x])
            if(document.getElementById(matriz[y][x]).style.background== "red"){
                colorRed ++
            }else{
                colorRed = 0
            }
            if(document.getElementById(matriz[y][x]).style.background== "blue"){
                colorBlue ++
            }else{
                colorBlue = 0
            }
            if (colorRed == 4 ){
                alert(`Felicidade ${player2} ganaste!!!`)
                    return true
            }else if (colorBlue == 4){
                alert(`Felicidade ${player1} ganaste!!!`)
                    return true
            }
        }
}

    //fin vertical

    //inicio diagonal arriba izquierda abajo derecha
    for (var i=0;i<matriz.length;i++) {
        for (var j=0;j<=i;j++) {
            if(document.getElementById(matriz[i-j][j]).style.background== "red"){
                colorRed ++
            }else{
                colorRed = 0
            }
            if(document.getElementById(matriz[i-j][j]).style.background== "blue"){
                colorBlue ++
            }else{
                colorBlue = 0
            }
            if (colorRed == 4 ){
                alert(`Felicidade ${player2} ganaste!!!`)
                    return true
            }else if (colorBlue == 4){
                alert(`Felicidade ${player1} ganaste!!!`)
                    return true
            }
        }
    }
    for (var i=0;i<matriz.length;i++) {
        for (var j=0;j<matriz.length-i;j++) {
            if(document.getElementById(matriz[matriz.length-j-1][j+i+1]).style.background== "red"){
                colorRed ++
            }else{
                colorRed = 0
            }
            if(document.getElementById(matriz[matriz.length-j-1][j+i+1]).style.background== "blue"){
                colorBlue ++
            }else{
                colorBlue = 0
            }
            if (colorRed == 4 ){
                alert(`Felicidade ${player2} ganaste!!!`)
                    return true
            }else if (colorBlue == 4){
                alert(`Felicidade ${player1} ganaste!!!`)
                    return true
            }
        }
    }
    //fin diagonal abajo izquierda a derecha arriba

    for (var i=0;i<matriz.length;i++) {
        for (var j=0;j<i+1;j++) {
            if(document.getElementById(matriz[j][matriz.length-i+j]).style.background== "red"){
                colorRed ++
            }else{
                colorRed = 0
            }
            if(document.getElementById(matriz[j][matriz.length-i+j]).style.background== "blue"){
                colorBlue ++
            }else{
                colorBlue = 0
            }
            if (colorRed == 4 ){
                alert(`Felicidade ${player2} ganaste!!!`)
                    return true
            }else if (colorBlue == 4){
                alert(`Felicidade ${player1} ganaste!!!`)
                    return true
            }
        }
    }
    for (var i=0;i<matriz.length;i++) {
        for (var j=0;j<matriz.length-i;j++) {
            if(document.getElementById(matriz[i+j][j]).style.background== "red"){
                colorRed ++
            }else{
                colorRed = 0
            }
            if(document.getElementById(matriz[i+j][j]).style.background== "blue"){
                colorBlue ++
            }else{
                colorBlue = 0
            }
            if (colorRed == 4 ){
                alert(`Felicidade ${player2} ganaste!!!`)
                    return true
            }else if (colorBlue == 4){
                alert(`Felicidade ${player1} ganaste!!!`)
                    return true
            }
        }
    }
}

function bajarColor(id, color){
    //horizontal
    y = parseInt(id)-1
    for (x=matriz.length-1;x>=0;x--) {
        // console.log(x, y)
        // console.log(matriz[x][y])
        if(document.getElementById(matriz[x][y]).style.background != "red" &&
            document.getElementById(matriz[x][y]).style.background != "blue"){
                document.getElementById(matriz[x][y]).style.background = color
                return
        }
    }
    //fin horizontal
}