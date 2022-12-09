let num = prompt('Ввудите число от 0 до 4')

const lang = ['html', 'css', 'js', 'c++', 'c#']
// consolelog(lang[0]);
switch (num) {
    case '0':
        alert(console.log(lang[0]));
        break;
    case '1':
        alert(console.log(lang[1]));
        break;
    case '2':
        alert(console.log(lang[2]));
        break;
    case '3':
        alert(console.log(lang[3]));
        break;
    case '4':
        alert(console.log(lang[4]));
        break;
    default:
        alert('НЕ правильно введено число');
}