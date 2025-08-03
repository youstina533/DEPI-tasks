// events => الاحداث
// function => عبارة عن اسم شايل اكثر من كود
// conditions => if, if else, if else if, nested if
// comparsion operators > >= < <= == === != !==
// logical operators AND => &&  ,  OR => ||  ,  Not => !
// if syntax
/*
if(condition){
    statments
}
*/
/* if else syntax
if(condition){
    statments if condition is true
}
else{
    statments if condition is false
}
*/
function price()  {     // function defination
    // get price holder h1
    const price = document.getElementById('priceHolder');
    // get number of words that will be translated
    const wordCount = document.getElementById('wordCount');
    // parse data to float
    let words = parseFloat(wordCount.value);
    // get source language
    const fromLang = document.getElementById('fromLang');
    let langFrom = fromLang.value;
    // get to language
    const toLang = document.getElementById('toLang');
    let langTo = toLang.value;
    // price list
    let arabicToEnglish = 0.5;
    let arabicToGerman = 0.7;
    // conditions
    if(langFrom == "arabic") {
        console.log("aaaaaaaaa"); // نتيجة عند تحقق الشرط فقط
    }
    if(langFrom == "arabic") {
        console.log("hello arabic"); // نتيجة عند تحقق الشرط
    }
    else{
        console.log("language not arabic"); // نتيجة عند عدم تحقق الشرط
    }
    if(langFrom == "arabic" && langTo == "english")    {
        console.log(words * arabicToEnglish); // نتيجة عند تحقق الشرط
        price.innerText = words * arabicToEnglish;
    }
    else{
        console.log(words * arabicToGerman); // نتيجة عند عدم تحقق الشرط
        price.innerText = words * arabicToGerman;
    }
    console.log("after if");
}