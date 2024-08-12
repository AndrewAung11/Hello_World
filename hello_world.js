let count = {"A": 0, "B": 0, "C": 0, "D": 0, "E": 0, "F": 0, "G": 0, "H": 1, "I": 0, "J": 0, "K": 0, "L": 0, "M": 0, "N": 0, "O": 0, "P": 0, "Q": 0, "R": 0, "S": 0, "T": 0, "U": 0, "V": 0, "W": 1, "X": 0, "Y": 0, "Z": 0, "a": 0, "b": 0, "c": 0, "d": 1, "e": 1, "f": 0, "g": 0, "h": 0, "i": 0, "j": 0, "k": 0, "l": 3, "m": 0, "n": 0, "o": 2, "p": 0, "q": 0, "r": 1, "s": 0, "t": 0, "u": 0, "v": 0, "w": 0, "x": 0, "y": 0, "z": 0};

let toUse = {};

for (let i = 0; i < Object.keys(count).length; i++) {
    if (count[Object.keys(count)[i]] > 0) {
        toUse[Object.keys(count)[i]] = count[Object.keys(count)[i]];
    }
}

let start = 65;
let end = 122;

let chars = []

for (let i = start; i < end; i++) {
    for (let j = 0; j < Object.keys(toUse).length; j++) {
        if (String.fromCharCode(i) == Object.keys(toUse)[j]) {
            for (let k = 0; k < toUse[String.fromCharCode(i)]; k++) {
                chars.push(String.fromCharCode(i));
            }
        }
    }
}

let charsOrder = {}

for (let i = 0; i < chars.length; i++) {
    charsOrder[i] = chars[i];
}

let sortOrder = { 0: "H", 1: "e", 2: "l", 3: "l", 4: "o", 5: "W", 6: "o", 7: "r", 8: "l", 9: "d"}

let sorted = [...chars]

for (let i = 0; i < chars.length; i++) {
    for (let j = 0; j < Object.keys(charsOrder).length; j++) {
        if (Object.values(sortOrder)[i] == Object.values(charsOrder)[j]) {
            sorted[i] = charsOrder[j];
        }
    }
}

let final = [...sorted.slice(0, 5), " ", ...sorted.slice(5), "!"];

final = final.join("");
console.log(final);