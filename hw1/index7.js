const checkLetterCase = function (a) {
    return (a === a.toUpperCase()) ? 'Оууу май, большая буква!' : 'Нет уж, маленькие буквы - скучно';
    
}

console.log(checkLetterCase('A'));
console.log(checkLetterCase('s'));
