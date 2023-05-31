var num = 0;

var cookie = document.getElementById("cookie");



function cookieClick() { 
    num += 1;

    var numbers = document.getElementById("numbers");

    numbers.innerHTML = num;

    if (num > 50) {
    	if (Math.random()>0.8) {
    		num -=1;
    	}
    }
    if (num > 70) {
    	if (Math.random()>0.6) {
    		num -=1;
    	}
    }
    if (num > 90) {
    	if (Math.random()>0.4) {
    		num -=1;
    	}
    }
    if (num == 100) {
    	alert("Ого ты набил 100 печенек");
    	num = 0;
    }
}