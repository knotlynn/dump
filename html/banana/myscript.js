//*** Brenna Curtis, Banana Program ***//

//automatically hide the results so there's not a bunch of flashing text every time the slider moves
document.getElementById('out').style.display = "none";
document.getElementById('pic').style.display = "none";

/*** BUTTONS ***/
//button to show results
function display(){
	document.getElementById('out').style.display = "block";
	document.getElementById('pic').style.display = "block";
}

//buttons to hide resluts because why not
function hide(){
	document.getElementById('out').style.display = "none";
	document.getElementById('pic').style.display = "none";
}

/*** SLIDER SHIT ***/
var slider = document.getElementById("myRange");

/*** ARRAYS FOR BANANA MUSHINESS ***/
var one = ["one1", "one2", "one3", "one4", "one5"];
var two = ["two1", "two2", "two3", "two3", "two4", "two5"];
var three = ["three1", "three2", "three3", "three4", "three5"];
var four = ["four1", "four2", "four3", "four4", "four5"];
var five = ["five1", "five2", "five3", "five4", "five5"];
var six = ["six1", "six2", "six3", "six4", "six5"];
var seven = ["seven1", "seven2", "seven3", "seven4", "seven5"];
var eight = ["eight1", "eight2", "eight3", "eight4", "eight5"];
var nine = ["nine1", "nine2", "nine3", "nine4", "nine5"];
var ten = ["ten1", "ten2", "ten3", "ten4", "ten5"];

//update the current slider value each time you drag the slider handle
slider.oninput = function(){
	var mush = this.value;
	document.getElementById('num').innerHTML = mush; //shows the number that the slider is inputting on the computer

	/*** IF/ELSE TO SHOW THE RESULTS ***/
	if(mush >= 1 && mush < 15){ //1
		document.getElementById("out").innerHTML = one[Math.floor(Math.random() * 5)];
		document.getElementById("pic").src = "1.png";
	}else if(mush >= 15 && mush < 25){ //2
		document.getElementById("out").innerHTML = two[Math.floor(Math.random() * 5)];
		document.getElementById("pic").src = "2.jfif";
	}else if(mush >= 25 && mush < 35){ //3
		document.getElementById("out").innerHTML = three[Math.floor(Math.random() * 5)];
		document.getElementById("pic").src = "3.png";
	}else if(mush >= 35 && mush < 45){ //4
		document.getElementById("out").innerHTML = four[Math.floor(Math.random() * 5)];
		document.getElementById("pic").src = "4.jfif";
	}else if(mush >= 45 && mush < 55){ //5
		document.getElementById("out").innerHTML = five[Math.floor(Math.random() * 5)];
		document.getElementById("pic").src = "5.png";
	}else if(mush >= 55 && mush < 65){ //6
		document.getElementById("out").innerHTML = six[Math.floor(Math.random() * 5)];
	}else if(mush >= 65 && mush < 75){ //7
		document.getElementById("out").innerHTML = seven[Math.floor(Math.random() * 5)];
	}else if(mush >= 75 && mush < 85){ //8
		document.getElementById("out").innerHTML = eight[Math.floor(Math.random() * 5)];
	}
	else if(mush >= 85 && mush < 95){ //9
		document.getElementById("out").innerHTML = nine[Math.floor(Math.random() * 5)];
	}else if(mush >= 95 && mush <= 100){ //10
		document.getElementById("out").innerHTML = ten[Math.floor(Math.random() * 5)];
	}
}
