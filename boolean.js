var isValid = false;

function toggleBoolean (booleanVar) {
    if (typeof booleanVar === 'boolean') {
        return !booleanVar;
    } else {
        console.log('Warning! Not a boolean.');
    }
}

console.log(toggleBoolean(isValid));
console.log(toggleBoolean('asdfasdf'));
console.log(toggleBoolean(345));