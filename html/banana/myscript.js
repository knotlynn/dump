//*** Brenna Curtis, Banana Program ***//

//initially hides the results
document.getElementById('out').style.display = "none";
//document.getElementById('pic').style.display = "none";

/*** BUTTONS ***/
//button to show results
function display(){
	document.getElementById('out').style.display = "block";
	//document.getElementById('pic').style.display = "block";
}

//buttons to hide resluts because why not
function hide(){
	document.getElementById('out').style.display = "none";
	//document.getElementById('pic').style.display = "none";
}

/*** SLIDER SHIT ***/
var slider = document.getElementById("myRange");

/*** ARRAYS FOR BANANA MUSHINESS ***/
//aka possible results
var one = ["This is just a rock you have painted to look like a banana", "If I bit into this, my teeth would break", "one3", "one4", "one5"];
var two = ["two1", "two2", "two3", "two3", "two4", "two5"];
var three = ["three1", "three2", "three3", "three4", "three5"];
var four = ["You like your bananas a little green? You like a little green on your bananas? You like to eat them when they're just a little firm? On an unrelated note, how's that god complex of yours doing?", "four2", "four3", "four4", "four5"];
var five = ["five1", "five2", "five3", "five4", "five5"];
var six = ["six1", "six2", "six3", "six4", "six5"];
var seven = ["seven1", "seven2", "seven3", "seven4", "seven5"];
var eight = ["eight1", "eight2", "eight3", "eight4", "eight5"];
var nine = ["What, did you go dumpster diving?", "nine2", "nine3", "nine4", "nine5"];
var ten = ["I would rather stick my hand in a blender than call this a banana", "This is just a pile of goo that you're calling a banana", "This is just....slime. Pure slime", "ten4", "ten5"];

//update the current slider value each time you drag the slider handle
slider.oninput = function(){

	//hide results automatically when the slider is being moved
	document.getElementById('out').style.display = "none";
	//document.getElementById('pic').style.display = "none";

	//!!!- SHOWS WHAT NUMBER THE SLIDER IS INPUTTING, DELETE WHEN DONE -!!!
	var mush = this.value;
	document.getElementById('num').innerHTML = mush; //shows the number that the slider is inputting on the computer

	/*** IF/ELSE TO SHOW THE RESULTS ***/
	//also calculates the result being shown with a Math.Random
	if(mush >= 1 && mush < 15){ //1
		document.getElementById("out").innerHTML = one[Math.floor(Math.random() * 5)];
		document.getElementById("pic").src = "banana1.png";

	}else if(mush >= 15 && mush < 25){ //2
		document.getElementById("out").innerHTML = two[Math.floor(Math.random() * 5)];
		document.getElementById("pic").src = "banana2.png";
	}else if(mush >= 25 && mush < 35){ //3
		document.getElementById("out").innerHTML = three[Math.floor(Math.random() * 5)];
		document.getElementById("pic").src = "banana3.png";
	}else if(mush >= 35 && mush < 45){ //4
		document.getElementById("out").innerHTML = four[Math.floor(Math.random() * 5)];
		document.getElementById("pic").src = "banana4.png";
	}else if(mush >= 45 && mush < 55){ //5
		document.getElementById("out").innerHTML = five[Math.floor(Math.random() * 5)];
		document.getElementById("pic").src = "banana5.png";
	}else if(mush >= 55 && mush < 65){ //6
		document.getElementById("out").innerHTML = six[Math.floor(Math.random() * 5)];
		document.getElementById("pic").src = "banana6.png";
	}else if(mush >= 65 && mush < 75){ //7
		document.getElementById("out").innerHTML = seven[Math.floor(Math.random() * 5)];
		document.getElementById("pic").src = "banana7.png";
	}else if(mush >= 75 && mush < 85){ //8
		document.getElementById("out").innerHTML = eight[Math.floor(Math.random() * 5)];
		document.getElementById("pic").src = "banana8.png";
	}
	else if(mush >= 85 && mush < 95){ //9
		document.getElementById("out").innerHTML = nine[Math.floor(Math.random() * 5)];
		document.getElementById("pic").src = "banana9.png";
	}else if(mush >= 95 && mush <= 100){ //10
		document.getElementById("out").innerHTML = ten[Math.floor(Math.random() * 5)];
		document.getElementById("pic").src = "banana0.png";
	}
}
