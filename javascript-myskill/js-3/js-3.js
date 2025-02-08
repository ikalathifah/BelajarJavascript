//example 1
let x = "example"
const b = (typeof x === 'string');

document.getElementById('example1').innerText = b
// end of example1

//Case 1
let y = true
const c = (typeof y === 'boolean');
    document.getElementById('Case1').innerText = c;
// End of Case 1

//Case 2
let d = !(c);
    document.getElementById('Case2').innerText = d;
// End of Case 2