const arrayLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split``;
const arrayDigits = '0123456789'.split``;
let ser_table_p0, ser_table_p1, deser_table_p0, deser_table_p1;
let length_ser_table_p0, length_ser_table_p1;

/// --- init algo
function createSerTable(arrayChars) {
    let table = {};

    for(let i = 0; i < arrayChars.length; i++) 
        table[i] = arrayChars[i];

    return table;
}
function createDeserTable(serTable) {
    let deserTable = {};

    for(let k in serTable) {
        value = serTable[k];     
        deserTable[value] = k;
    }

    return deserTable;
}

function prepareTables() {
    ser_table_p0 = createSerTable(arrayLetters);
    ser_table_p1 = createSerTable(arrayDigits);

    length_ser_table_p0 = Object.keys(ser_table_p0).length;
    length_ser_table_p1 = Object.keys(ser_table_p1).length;

    deser_table_p0 = createDeserTable(ser_table_p0);
    deser_table_p1 = createDeserTable(ser_table_p1);
}

prepareTables();


function serialize_number(num) {
    let p0 = num % length_ser_table_p0;
    let p1 = Math.floor(num / length_ser_table_p0);
    let char = ser_table_p0[p0];


    if (p1 == 0)
        return char;
    else 
        return ser_table_p1[p1] + char;
}
function serialize_array(arr) {
    return arr.map(el=>serialize_number(el)).join("");
}


// -- main
function main() { // Usage: node algo "x y z"

    let input = process.argv[2].toString();
    let result = serialize_array(input.split(" "));
    let coeff = result.length / input.length;

    console.log('Input string: ' + input.split(" "));
    console.log('Compact string: ' + result);
    console.log('Coeff: ' + coeff.toFixed(2));
    console.log();
    
}
main();

