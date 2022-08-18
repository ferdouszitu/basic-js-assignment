// Problem:1  radianToDegree


function radianToDegree(radian) {
    if (typeof radian !== 'number') {
        return 'Please enter a number';
    }
    let degree = radian * 180 / Math.PI;
    const deg = parseFloat(degree.toFixed(2));
    return deg;
}
console.log(radianToDegree(25));

// Problem:2  isJavaScriptFile


function isJavaScriptFile(String) {
    if (typeof String !== 'string') {
        return 'Please enter a string';
    }
    else if (String.endsWith('.js')) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isJavaScriptFile('js.png'));

// Problem 3: oilPrice


function oilPrice(diesel, petrol, octane) {
    // diesel = 114;
    // petrol = 130;
    // octane = 135; 
    if (typeof diesel !== 'number' || typeof petrol !== 'number' || typeof octane !== 'number') {
        return 'Please enter number';
    }
    return diesel * 114 + petrol * 130 + octane * 135;
}
console.log(oilPrice(30, 20, 10));

// Problem 4 : publicBusFare

function publicBusFare(people) {
    if (typeof people !== 'number') {
        return 'Please Enter a Number!';
    }
    let remainderForBus = people % 50;
    let remainderFormicro = remainderForBus % 11;
    let restPeoplePublicBus = remainderFormicro * 250;

    return restPeoplePublicBus;
}
console.log(publicBusFare(235));

// Problem 5: isBestFriend

function isBestFriend({ name }, { friend }) {
    if (typeof name !== 'string' || typeof friend !== 'string') {
        return 'Please Enter a Valid Object!';
    }
    if (name === friend && friend === name) {
        return true;
    } else {
        return false;
    }
}
console.log(isBestFriend({ name: 'abul', friend: 'Rock' },

    { name: 'John', friend: 'babul' }));
