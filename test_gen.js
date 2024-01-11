function rand(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function getrndnum(count = 0) {
    if(count == 0) return rand(1, 300).toString();
    else {
        let str = "";
        for(let i = 0; i < count; i++) {
            str += getrndnum() + " ";
        }
        return str.trim();
    }
}
function gen_range(min, max/*exclude*/) {
    let str = '';
    for(let i = min; i < max; i++)
        str += i + " ";
    return str.trim();
}
function test1signs() 
{
    return gen_range(1, 10);
}
function test2signs() 
{
    return gen_range(10, 100);
}
function test3signs() 
{
    return gen_range(100, 301);
}

const pre = 'node algo "';

let test3SignsOut = test3signs()
console.log(pre + getrndnum() + '" & ' +
pre + getrndnum() + '" & ' +
pre + getrndnum() + '" & ' +
pre + getrndnum(50) + '" & ' +
pre + getrndnum(100) + '" & ' +
pre + getrndnum(500) + '" & ' +
pre + getrndnum(1000) + '" & ' +
pre + test1signs() + '" & ' +
pre + test2signs() + '" & ' +
pre + test3SignsOut + '" & ' +
pre + test3SignsOut + test3SignsOut + test3SignsOut + '"');