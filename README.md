install    -->  pip install virtualenv
create     -->  python -m venv venv
activate   -->  venv\Scripts\activate
deactivate -->  deactivate

help to create intractive and dynamic website

types of variable scope:
    local scope  
        let a = 5
    function scope or global scope:
        var b = 5
        {
            var b = 10
        }
        console.log(b)
        <!-- # 10 (accessible outside the function -->
    immutable varaible scope
        const c = 5

Datatype:
    primitive datatype:
        number
        string
        boolean
        Null
        Undefined
    Non Primitive Datatype:
        Object
        Array
        
keywords in javascript

functions:

    function abc() {
        var a = 10
        var b = 200
        console.log(a+b);
    }
    abc()

    function add(a,b) {
    console.log(a*b);
    }
    add(2,3)

using return in function :
    function add(a,b) {
    return a*b
    }
    var p = add(2,3)
    console.log(p);

if condition:
    var a = 0
    if(a)
    {
        console.log("its True")
    }
    else{
        console.log("it is false");
    }
else if :
    var col = "green"

    if (col === "red"){
        console.log("stop");
    }else if (col === "yellow"){
        console.log("ready");
    }else{
    console.log("Go");
    }
for loop:
    for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
    }

logical Operator:
AND : &&
    console.log(true && true && true)
OR : ||
    console.log(true || false || false)
NOT : !true  (or) !false
    console.log(!false)
console.log(true || false || !false)

example:
    var i = "k"
    
    if(i == 'a' || i =='e'||i=='i'||i=='o'||i=='u'){
    console.log("vowel");
    }else{
        console.log("consonant");
    }

for loop:
    for(count = 2;count<=10;count+=2){
    console.log(count);
    }

math libary:
random , floor :
    var a = Math.random()
    console.log(Math.floor(a*10));
    

Event and Event Handling:
    event --> an action or occurence that happens within a webpage such us user intrection
    or page loading
    event handling --> function respond to an event when it occure 