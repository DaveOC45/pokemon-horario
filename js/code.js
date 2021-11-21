window.onload = function() {
        //Ejercicio 1 linea 3. Solo podemos hacer un onload de ahí a que se haya cambiado
        alert('Hello world');
        saludo();
        console.log(getListRandom(10, 1, 10)); //en console comprobamos que funciona, esto se peude quitar pero lo dejo xd.
    }
    //Ejercicio2
function saludo() {
    f = new Date();
    d = f.getHours();
    if (d < 7 || d > 17) {
        document.getElementById("body").style.backgroundColor = "#3E3730";
        document.getElementById("h1").innerHTML = "Buenas noches";
    } else {

        document.getElementById("body").style.backgroundColor = "rgb(238, 107, 47)";
        document.getElementById("h1").innerHTML = "Buenos dias";

    }
}
//Ejercicio 3
function getListRandom(n, min, max) {
    var array = []
    for (let i = 0; i < n; i++) {
        let numr = getRndInteger(min, max);
        if (array.includes(numr)) {
            i--;
        } else {
            array.push(numr);
        }
    }
    return array;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Ejercicio 4
function buttonOpacity() {
    let opacidad = document.getElementById('pokeball').style.opacity;
    if (opacidad == 0.5) {
        //si es 0.5 cambia  1 
        document.getElementById('pokeball').style.opacity = '1';
    } else {
        document.getElementById('pokeball').style.opacity = '0.5';
    }
}

//Ejercicio 5
function listRandom() {
    buttonOpacity();
    galleryRandom();
}

function galleryRandom() {
    let n = 17;
    let min = 1;
    let max = 17;
    let images = document.getElementsByClassName('random');
    let listRnd = getListRandom(n, min, max);
    for (i = 0; i < n; i++) {
        images[i].setAttribute("src", "./img/IMG_" + listRnd[i] + ".PNG");
    }
}


/*
por si no funciona el retornar num aleatorios
function getListRandom(n, min, max) {
    var n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    n = n.sort(function() { return Math.random() - 0.5 });
    document.write(n); // imprime por ejemplo: 7,9,1,5,2,3,6,4,8
    getRndInteger(min, max);

}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.onload = function() {
    console.log(getListRandom(10, 1, 10));
}*/