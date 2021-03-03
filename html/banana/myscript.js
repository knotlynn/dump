document.getElementById('out').style.display = "none";
document.getElementById('pic').style.display = "none";

function display(){
	document.getElementById('out').style.display = "block";
	document.getElementById('pic').style.display = "block";
}

function hide(){
	document.getElementById('out').style.display = "none";
	document.getElementById('pic').style.display = "none";
}

var one = ["Are you sure that's not a rock painted to look like a banana?",
				"What, did you fry it?",
				"That's just.....pure green. It's so green it's almost blue",
				"If I bit into that, I would break my teeth",
				"Thanks!!\t\t\tI hate it :)"];
var two = ["", "", "", "", ""];
var three = ["", "", "", "", ""];
var four = ["", "", "", "", ""];
var five = ["", "", "", "", ""];
var six = ["", "", "", "", ""];
var seven = ["", "", "", "", ""];
var eight = ["", "", "", "", ""];
var nine = ["", "", "", "", ""];
var ten = ["I'm not convinced you DIDN'T fish this out of a grocery store dumpster",
				"What, did you feed the banana Taco Bell?",
				"That's just a pile of goo you're calling a banana",
				"Thanks, I've always wanted some slime",
				"I'd rather stick my hand in a blender than call this a banana."];

/*
var oneTwo = ["That's just.... pure green. There isn't even a hint of yellow",
				"Are you sure that's not a rock painted like a banana?",
				"eww.",
				"What, did you fry it?",
				"Thanks!\n\n\tI hate it"];

var threeFour = ["mmmm, crunchy banana",
				"That is indeed pretty firm",
				"What, you like your bananas green? You like a little bit of green at the top of your bananas?\non an unrelated note how's that god complex of yours doing?",
				"It's not mushy enough, wait to eat it until tomorrow",
				"i t ' s   n o t   r i p e"];

var fiveSix = ["a perfectly ripe banana",
				"the only acceptable answer",
				"wait you actually eat bananas?\n\n\tcringe.",
				"omg... IT'S A BANANA!!!!!!!!!!!1!!!!!!!!!!!!!!!!!!!1!11!!",
				"It's piss yellow! Which means it's perfect for eating."];

		var sevenEight = ["A little too ripe for comfort",
				"That is a very ripe banana, probably has a lot of brown spots. But hey, maybe you're a weirdo who likes them that way",
				"A little too ripe for comfort",
				"It's very bruised",
				"Why would you even EAT that?? It's so mushyyyyyy"];

		var nineTen = ["That's jut a pile of goo that you're calling a banana",
				"I'm not convinced you DIDN'T fish this out of a grocery store dumpster",
				"Yummy",
				"Thanks, I've always wanted some slime",
				"I'd rather stick my hand in a blender then call this a banana"];

var slider = document.getElementById("myRange");

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  var mush = this.value;
  document.getElementById("num").innerHTML = mush;

  if(mush >=1 && mush <25){
    document.getElementById("out").innerHTML = oneTwo[Math.floor(Math.random() * 5)];
		document.getElementById("pic").src = "1.png";
  }else if(mush >=25 && mush <45){
    document.getElementById("out").innerHTML = threeFour[Math.floor(Math.random() * 5)];
		document.getElementById("pic").src = "2.jfif";
  }else if(mush >= 45 && mush <= 65){
    document.getElementById("out").innerHTML = fiveSix[Math.floor(Math.random() * 5)];
		document.getElementById("pic").src = "3.png";
  }else if(mush >= 65 && mush < 85){
    document.getElementById("out").innerHTML = sevenEight[Math.floor(Math.random() * 5)];
		document.getElementById('pic').src = "4.jfif"
  }else if(mush >= 85 && mush <=100){
    document.getElementById("out").innerHTML = nineTen[Math.floor(Math.random() * 5)];
		document.getElementById("pic").src = "5.png";
  }
}
*/
