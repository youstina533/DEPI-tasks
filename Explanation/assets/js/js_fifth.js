
const names = [10, "ahmed", "hany"];
names.forEach(showNames);
function showNames(a,b)
{
    let txt = "";
    const dv = document.getElementById("dv");
    txt +=  a + " " + b;
    dv.innerHTML += txt + " ";
}
 
let sum = (a,b) => console.log(a+b);
sum(2,5);
 
const r = {
    name: "ahmed",
    getName : function (){
        console.log(this.name);
    }
}
r.getName();
const call = r.getName;
console.log(call);
console.log(typeof(call));
call();
 
const t = {
    name: "ahmed",
    getName : () => {
        console.log(this.name);
    }
}
t.getName();
let info = [12,"hany",true,11.11,"ahmed","hany",123,false];
console.log(info.length);

console.log(info.pop());
console.log(info);

console.log(info.shift());
console.log(info);

console.log(info.push("aly"));
console.log(info);

console.log(info.unshift("mona"));
console.log(info);

var s = info.slice(1);
console.log(s);
console.log(info);

s = info.slice(2);
console.log(s);
console.log(info);

info = [12,true,11.11,"ahmed","hany",123,false];
s = info.slice(2,5);
console.log(s);
console.log(info);

info = [12,true,11.11,"ahmed","hany",123,false];
s = info.slice(-1);
console.log(s);
console.log(info);

s = info.slice(1,5);
console.log("s",s);
console.log(info);

var s = info.splice(1,5);
console.log("s",s);

console.log("info",info);
s = info.indexOf("hany");
console.log(s);

s = info.find((el)=>el == "hany");
console.log(s);
console.log(info.toString() + 1111111);

/*this binding
arguments
hoisting => call before defination
readability and intent*/