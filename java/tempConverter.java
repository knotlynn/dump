//Brenna Curtis, Jan 26
//hopefully will convert farenheit to celcius and vice versa

import java.util.*;
public class tempConverter {

	public static void main(String[] args) {
		//OH BOY WE'RE DOIN IT
		//variables
		Scanner kb = new Scanner(System.in);
		int menu = -1;
		String run = "";
		double far = 1, celc = 1;
		boolean bool = false, bool1 = true;
		
		//a loop so that the user doesn't have to execute the program over and over again. they can just...
		//keep converting temperatures if they want
		do{
			//ask user if they want to convert to farenheit or celcius
			do{
				
				System.out.print("\nWhich temperature converion would you like to perform?\n\n1:farenheit to celcius");
				System.out.print("\n2:celcius to farenheit\n");
			
				menu = kb.nextInt();
				
				if(menu == 1) {
					
					System.out.println("\nWhat is the temperature in farenheit? ");
					far = kb.nextDouble();
					farToCelc(far);
					
					bool = true;
					
				} else if(menu == 2) {
					
					System.out.println("What is the temperature in celcius? ");
					celc = kb.nextDouble();
					celcToFar(celc);
					bool = true;
					
				} else {
					System.out.println("please only enter a 1 or a 2.");
				}
				
			}while(bool != true);
			
			System.out.print("\n\nWould you like to convert another temperature? Type yes or no  ");
			run = kb.next();
			
			if(run.equalsIgnoreCase("yes")) {
				bool1 = true;
			} else {
				bool1 = false; //hopefully stop the program..
			}
			
		}while(bool1 == true);

	}
	
	public static void farToCelc(double f) {
		double celc = (f - 32) * (5.0/9.0);
		System.out.println(celc);
	}
	
	public static void celcToFar(double c) {
		double far = (c * (9.0/5.0)) + 32;
		System.out.println(far);
	}

}


