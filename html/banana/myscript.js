//*** Brenna Curtis, Banana Program ***//

//format the website to be mobile friendly

//initially hides the results
document.getElementById('out').style.display = "none";
//document.getElementById('pic').style.display = "none";

/*** BUTTONS ***/
//button to show results
function display(){
	document.getElementById('out').style.display = "block";
	document.getElementById('pic').style.display = "block";
}

//buttons to hide resluts because why not
function hide(){
	var value = 50;
	changeNums(value,true);
	document.getElementById("myRange").value = 50;
	document.getElementById("out").innerHTML = "Try actually using the slider first";

	/*document.getElementById('out').style.display = "none";
	document.getElementById('pic').style.display = "none";*/
}

/*** SLIDER STUFF ***/
var slider = document.getElementById("myRange");

/*** ARRAYS FOR BANANA MUSHINESS ***/
//aka possible results
var one = ["This is just a rock you have painted to look like a banana", "If I bit into this, my teeth would break", "You are evil", "Did you eat this? Did you ACTUALLY eat this?? Get in the car, we're going to the ER", "I've bitten into steel softer than this banana"];
var two = ["If you bite into this, it will make a crunching sound", "It's not ripe yet, why do you have this?", "hmm. gross.", "...did you get it out of a toddlers kitchen play set?", "I don't... I don't know if you should eat that", "Why on earth do you have a crispy banana?"];
var three = ["It's not quite ripe yet", "I mean.. it's got a fair bit of green on it but you <i>could</i> eat it if you want to?", "Either you plan on making a banana sundae or you're saving this for later, no sane sould would eat a partially green banana", "I mean, it's not plotting your ultimate demise, so what's the harm in it?", "This level of green is not ideal"];
var four = ["You like your bananas a little green? You like a little green on your bananas? You like to eat them when they're just a little firm? On an unrelated note, how's that god complex of yours doing?", "It's......fine. It's fine", "I <i>suppose</i> that this level of green is acceptable", "Woop-de-doo, it's a banana", "It's perfect for eating! ..or it will be in about three and a half hours."];
var five = ["Perfectly ripe, as all things should be.", "A monkeys favorite snack", "Are you the banana whisperer? Because this banana is just the <i>perfect</i> amount of ripeness", "WOOP, it's mine now. What are you gonna do about it??", "Wait, you actually like bananas?? That's pretty cringe"];

//TODO "six2", "six3", "six4", "six5"
var six = ["Perfectly ripe, with jusy a little extra sweetness"];

//TODO , "seven3", "seven4", "seven5"
var seven = ["Perfect to make banana bread with", "This banana is like you, overrated"];

//TODO , "eight2", "eight3", "eight4", "eight5"
var eight = ["You should probaly throw it out"];

//TODO , "nine5"
var nine = ["What, did you go dumpster diving?", "God, it's almost rotten", "You are a disgusting excuse for a human being", "I'm calling the cops"];
var ten = ["I would rather stick my hand in a blender than call this a banana", "This is just a pile of goo that you're calling a banana", "This is just....slime. Pure slime", "Why is it leaking? I'm pretty sure banana peels are suposed to be <i>intact</i>", "damn. it's to mushy for even banana bread"];

//update the current slider value each time you drag the slider handle
slider.oninput = function(){
	var mush = this.value;
	changeNums(mush,false);
}

function changeNums(value, isReset){
	//hide results automatically when the slider is being moved
	//document.getElementById('out').style.display = "none";
	//document.getElementById('pic').style.display = "none";

	//!!!!!SHOWS WHAT NUMBER THE SLIDER IS INPUTTING, DELETE WHEN DONE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	var mush = value;
	document.getElementById('num').innerHTML = mush; //shows the number that the slider is inputting on the computer

	/*** IF/ELSE TO SHOW THE RESULTS ***/
	//also calculates the result being shown with a Math.Random
	if(!isReset){
		if(mush >= 1 && mush < 15 ){ //1
			document.getElementById("out").innerHTML = one[Math.floor(Math.random() * one.length)];
			document.getElementById("pic").src = "banana1.png";

		}else if(mush >= 15 && mush < 25){ //2
			document.getElementById("out").innerHTML = two[Math.floor(Math.random() * two.length)];
			document.getElementById("pic").src = "banana2.png";
		}else if(mush >= 25 && mush < 35){ //3
			document.getElementById("out").innerHTML = three[Math.floor(Math.random() * three.length)];
			document.getElementById("pic").src = "banana3.png";
		}else if(mush >= 35 && mush < 45){ //4
			document.getElementById("out").innerHTML = four[Math.floor(Math.random() * four.length)];
			document.getElementById("pic").src = "banana4.png";
		}else if(mush >= 45 && mush < 55){ //5
			document.getElementById("out").innerHTML = five[Math.floor(Math.random() * five.length)];
			document.getElementById("pic").src = "banana5.png";
		}else if(mush >= 55 && mush < 65){ //6
			document.getElementById("out").innerHTML = six[Math.floor(Math.random() * six.length)];
			document.getElementById("pic").src = "banana6.png";
		}else if(mush >= 65 && mush < 75){ //7
			document.getElementById("out").innerHTML = seven[Math.floor(Math.random() * seven.length)];
			document.getElementById("pic").src = "banana7.png";
		}else if(mush >= 75 && mush < 85){ //8
			document.getElementById("out").innerHTML = eight[Math.floor(Math.random() * eight.length)];
			document.getElementById("pic").src = "banana8.png";
		}else if(mush >= 85 && mush < 95){ //9
			document.getElementById("out").innerHTML = nine[Math.floor(Math.random() * nine.length)];
			document.getElementById("pic").src = "banana9.png";
		}else if(mush >= 95 && mush <= 100){ //10
			document.getElementById("out").innerHTML = ten[Math.floor(Math.random() * ten.length)];
			document.getElementById("pic").src = "banana0.png";
		}
	}else{
		document.getElementById('out').style.display = "none";
		document.getElementById("pic").src = "banana5.png";
	}

}

class Banana {
	constructor(mushiness) {
		this.value = 50;
	}
}
