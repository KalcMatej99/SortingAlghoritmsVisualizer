
function clearAllTimeouts() {
    var highestTimeoutId = setTimeout(";");
    for (var i = 0; i < highestTimeoutId; i++) {
        clearTimeout(i);
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}