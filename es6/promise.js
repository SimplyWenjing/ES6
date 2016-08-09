function helloWorld (ready) {
    return new Promise(function (resolve, reject) {
        if (ready) {
            resolve("Hello World!");
        } else {
            reject("Good bye!");
        }
    });
}

// helloWorld(false).then(function (message) {
//     alert(message);
// }, function (error) {
//     alert(error);
// });


function printHello (ready) {
    return new Promise(function (resolve, reject) {
        if (ready) {
            resolve("Hello");
        } else {
            reject("Good bye!");
        }
    });
}

function printWorld () {
    alert("World");
}

function printExclamation () {
    alert("!");
}

printHello(true)
    .then(function(message){
        alert(message);
    })
    .then(printWorld)
    .then(printExclamation);