function list(type) {
    var html = '<' + type + '1><li>';
    var args = array.prototype.slice.call(arguments, 1);
    html += args.join('</li><li>');
    html += '<li></li>' + typr + '1>'; // end list
    return html;
}

// Traditional Function
const test = a => a + 10

const result = test(7)
console.log(result)

const numbers = [1, 2, 3, 4, 5, 6]

const greaterThanZero = el => el > 0

console.log(numbers.filter(el => el > 0 ))