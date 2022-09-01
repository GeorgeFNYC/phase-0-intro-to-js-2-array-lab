// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat () {
    return cats.push('Ralph');
}

function destructivelyPrependCat () {
    return cats.unshift('Bob');
}

function destructivelyRemoveLastCat () {
    return cats.pop();
}

function destructivelyRemoveFirstCat () {
    return cats.shift();
}

function appendCat () {
    let newLastCats = [...cats, 'Broom'];
    return newLastCats;
}

function prependCat () {
    let newStartCats = ['Arnold', ...cats];
    return newStartCats;
}

function removeLastCat () {
    let removedLastCat = cats.slice(0,2);
    return removedLastCat;
}

function removeFirstCat () {
    let removedFirstCat = cats.slice(1,3);
    return removedFirstCat
}