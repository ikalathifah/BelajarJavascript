// Example 
const thisYear = 2022
if (thisYear === 2022) {  document.getElementById('example').innerText = thisYear
}
// End of Example

//Case 1
const nextYear = 2024
if (nextYear != 2026) {
  document.getElementById('Case1').innerText = nextYear + ' is not 2026'
} else { document.getElementById('Case1').innerText = nextYear + ' is 2026'
}
// End of Case 1

//Case 2
let age = 20
let identityCardAllowed = age >= 17
document.getElementById('Case2').innerText = identityCardAllowed;
// End of Case 2