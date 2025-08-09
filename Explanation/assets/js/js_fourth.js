// loop
let info = { // object
    fullname: "ahmed aly amr",
    age: 20,
    address: "giza",
    salary: 2345.56,
    job: "doctor"
}
let info2 = ["aaaa",12,12.23,true];
const btn = document.getElementById('btn');
btn.addEventListener("mouseleave", showData)
function showData()
{
    const dv = document.getElementById('container');
    // counter, condition, statments, increment or decrement
    // for in => counter gets the key of object
    for(let x in info2)
    {
        console.log(x);         // x => key
        console.log(info2[x]);   // objectName[variable] => value
        dv.innerHTML += `<p>${x}</p>`; // string format => backquote => ${variable}
    }
}