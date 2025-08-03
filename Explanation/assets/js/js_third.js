// events => الاحداث
// function => عبارة عن اسم شايل اكثر من كود
// conditions => if, if else, if else if, nested if
// comparsion operators > >= < <= == === != !==
// logical operators AND => &&  ,  OR => ||  ,  Not => !
// arthematic operators + - * / ++ +=
// loop
function getStatus()
{
 const stat2 = document.getElementById('status');
 let statValue2 = stat2.value;
 const child = document.getElementById('childrenParent');
 console.log(child);
 if(statValue2 === "yes")
 {
   child.classList.remove('hide');
   child.classList.add('show');
 }
 console.log(child);
}
function showStatusDiv(){
 const stat = document.getElementById('age');
 let statValue = parseInt(stat.value);
 const parent = document.getElementById('statusParent')
 if(statValue >= 18)
 {
     parent.style.display = "block";
 }
}
function makeCards()
{
 const container = document.getElementById('container');
// container.innerHTML = container.innerHTML + "<div class='card'><h4>heading</h4><p>paragraph</p></div>";
//  for(var i = 0; i<=3; i++)
 {
     container.innerHTML += "<div class='card'><h4>heading</h4><p>paragraph</p></div>";
   }
}
// loop التكرار
//  تكرار حدوث شيء لعدد مرات معينه بناءا على وجود شرط ونحقق هذا الشرط
// while, do ... while, for, for of, for in, for each
var s = 14;
while(s<=8)
{
  console.log(1);
  console.log("====");
  s++; // s = s + 1 // s += 1
}
var e = 14;
do{
   console.log(1);
   console.log("ahmed");
   e += 2;
}
while(e<=8);
for(var x = 0; x >= 10; x++)
{
   console.log(x); 
   console.log("======");
}
function dark(){
   const all = document.getElementById('all');
   all.classList.add('dark');
   all.classList.remove('light');
}
function light(){
   const all = document.getElementById('all');
   all.classList.add('light');
   all.classList.remove('dark');
}