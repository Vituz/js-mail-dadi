var message = document.getElementById("response");

// Chiedere la mail dell'utente
var userMail = prompt("Inserisci la tua mail per accedere.");
console.log(userMail);

document.getElementById("user_mail").innerHTML = userMail;

// Controllare se è presente nella lista
var mailList = ["snoi@hotmail.it", "prova@gmail.com", "mail@libero.it"];

console.log(mailList);

for(var i = 0; i < mailList.length; i++){
    
    

    if(mailList[i] == userMail){
        message.innerHTML = "Email presente nella Mail List!"
    } else {
        message.innerHTML = "Email non presente nella Mail List!" 
    }
}

// Comunicare esito della convalida