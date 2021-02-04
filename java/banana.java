package test;

import java.util.*;
import static java.lang.Math.*;

public class MyFirstClass {

	public static void main(String[] args) {
		
		//variables and objects
		Scanner kb = new Scanner(System.in);
		double num = 0;

		//arrays
		String[] oneTwo = {"That's just.... pure green. There isn't even a hint of yellow",
				"Are you sure that's not a rock painted like a banana?",
				"eww.",
				"What, did you fry it?",
				"Thanks!\\n\\n\\tI hate it"};
		
		String[] threeFour = {"mmmm, crunchy banana",
				"That is indeed pretty firm",
				"What, you like your bananas green? You like a little bit of green at the top of your bananas?\non an unrelated note how's that god complex of yours doing?",
				"It's not mushy enough, wait to eat it until tomorrow",
				"i t ' s   n o t   r i p e"};
		
		String[] fiveSix = {"a perfectly ripe banana",
				"the only acceptable answer",
				"wait you actually eat bananas?\n\n\tcringe.",
				"omg... IT'S A BANANA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1",
				"It's piss yellow! Which means it's perfect for eating."};
		
		String[] sevenEight = {"A little too ripe for comfort",
				"That is a very ripe banana, probably has a lot of brown spots. But hey, maybe you're a weirdo who likes them that way",
				"A little too ripe for comfort",
				"It's very bruised",
				"Why would you even EAT that?? It's so mushyyyyyy"};
		
		String[] nineTen = {"That's jut a pile of goo that you're calling a banana",
				"I'm not convinced you DIDN'T fish this out of a grocery store dumpster",
				"Yummy",
				"Thanks, I've always wanted some slime",
				"I'd rather stick my hand in a blender then call this a banana"};
		
		
		//ask for input
		System.out.println("On a scale of 1 - 10, how mushy is your banana?");
		num = kb.nextDouble();
		
		//replies sassily
		if(num >=1 && num < 2.5) { // 1-2
			
			System.out.println("\n" + oneTwo[(int)(Math.random()*5)]);
			
		} else if(num >= 2.5 && num < 4.5) { // 3-4
			
			System.out.println("\n" + threeFour[(int)(Math.random()*5)]);
			
		} else if(num >= 4.5 && num < 6.5) { //5-6
			
			System.out.println("\n" + fiveSix[(int)(Math.random()*5)]);
			
		} else if(num >= 6.5 && num <8.5) { //7-8
			
			System.out.println("\n" + sevenEight[(int)(Math.random()*5)]);
			
		} else if(num >= 8.5 && num <= 10) { //9-10
			
			System.out.println("\n" + nineTen[(int)(Math.random()*5)]);
			
		} else {
			System.out.println("That number isn't withing the range of 1-10\n\n\nstupid");
		}

	}

}
