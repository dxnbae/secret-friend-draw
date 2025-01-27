// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array en donde se guardaran los amigos
let friends = [];

//Funcion para añadir amigos
function addFriend () {
    let friend = document.getElementById("amigo").value;

    //En caso de estar vacio se muestra una alerta
    if(friend == ""){
        alert("Por favor, inserte un nombre.");
    }
    else{
        friends.push(friend);
        document.getElementById("amigo").value = "";
        createList(friends);
    }
}

//Funcion para añadir/crear las listas de los amigos
function createList (friends){

    let list = document.getElementById("listaAmigos");
    list.innerHTML = "";
    //Se recorre el Array y se añaden <li> para cada elemento
    for (let index = 0; index < friends.length; index++) {
        let element = document.createElement("li");
        element.innerHTML = friends[index];
        list.appendChild(element);
    }
}

//funcion para escoger un amigo al azar
function drawFriend (){
    //En caso de estar vacio se muestra una alerta
    if ( friends == "" ){
        alert("Añade un amigo antes de sortear")
    }
    else{
        //Se consigue el numero aleatorio mediante Math
        let randomIndex = Math.floor(Math.random() * friends.length);
        let friendRandom = friends[randomIndex];
        console.log(friendRandom);

        //Se muestra el amigo sorteado
        let result = document.getElementById("resultado");
        result.innerHTML = "";
        let element = document.createElement("li");
        element.innerHTML = friendRandom;
        result.appendChild(element);
    }
}