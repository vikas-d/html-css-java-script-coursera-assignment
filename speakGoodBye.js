(function(window) {
	//creating object without unig
    var byeSpeaker = {};
    var speakWord = "Good Bye";
    // here we not using speak with function but if you want to use you can use it .it not effect your programe.
    byeSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
    };
    window.byeSpeaker = byeSpeaker;
})(window);