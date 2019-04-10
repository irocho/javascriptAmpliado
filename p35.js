// https://javascript.info/
function novata(){
    var then = new Date(2010, 0, 1);
    var agora = new Date()

    alert(agora.getFullYear());

    var age = prompt('How old are you?', 100);
    alert(`You are ${age} years old!`); // You are 100 years old!
}

function sayHi() {
    alert( "Hello" );
}

//Function expression
var sayOla = function() {
    alert("oLA");
};
