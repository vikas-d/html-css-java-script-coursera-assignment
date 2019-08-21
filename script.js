/*
Hello guys i am vikas dubey from india. and this couse help me to grow up my knowledge.
i want to make some friend and also i wnat to intract with my classmat please if any one is intrested to do friendship with me'
please mail me .MY MAIL ID IS (vikasdubey01998@gmail.com).thank you every one.....



 assignment 4:
Expected output:
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/


//here we can  use "function(window)" if we want.and  i am also use "function(window)" in the next scripting code.. 
(function() {

	//here we create an array 
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    
    //here we use for loop from zero to the array length for the perpose is to get all neame 
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
    
        //here we apply if condition to check in array if name start with "j" then if condition is work otherwise else  condition is going to work.....
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();





