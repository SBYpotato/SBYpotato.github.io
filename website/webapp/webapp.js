// JavaScript Document	

//VARIABLES
	//WORKERS
		//grandmas
			var grandma = 0;
			var grandmaL1 = 0;
			var grandmaL2 = 0;
			var grandmaL3 = 0;
			var grandmaL4 = 0;
		//bakers
			var baker = 0;
			var bakerL1 = 0;
			var bakerL2 = 0;
			var bakerL3 = 0;
			var bakerL4 = 0;
		//dispenser
			var dispenser = 0;
			var dispenserL1 = 0;
			var dispenserL2 = 0;
			var dispenserL3 = 0;
			var dispenserL4 = 0;
			var dispenserL5 = 0;
		//food fairy
			var fairy = 0;
			var fairyL1 = 0;
			var fairyL2 = 0;
			var fairyL3 = 0;
			var fairyL4 = 0;
		//farmers
			var farmer = 0;
			var farmerL1 = 0;
			var farmerL2 = 0;
			var farmerL3 = 0;
			var farmerL4 = 0;
			var farmerL5 = 0;
			var farmerL6 = 0;
			var farmerL7 = 0;
			var farmerL8 = 0;
		//diabetes troll
			var troll = 0;
			var trollL1 = 0;
			var trollL2 = 0;
			var trollL3 = 0;
			var trollL4 = 0;
	//FOOD
		//Bake
			var cookie_ = 0;
			var baguette = 0;
			var bread = 0;
			var brownie = 0;
			var croissant = 0;
		//dessert
			var cheesecake = 0;
			var taiyaki = 0;
			var gelato = 0;
			var churros = 0;
			var mousse = 0;
		//drinks
			var coffee=0;
			var coke=0;
			var drpepper=0;
			var jarritos=0;
			var tea=0;
		//fast food
			var fries=0;
			var hotdog=0;
			var pizza=0;
			var nacho=0;
			var pringles=0;
		//fresh produce
			var avocado=0;
			var bellpepper=0;
			var bokchoy=0;
			var broccoli=0;
			var carrot=0;
			var zucchini=0;
			var cherry=0;
			var grape=0;
			var mango=0;
			var pineapple=0;
			var haribo=0;
			var kitkat=0;
			var milkshakes=0;
			var skittles=0;
			var trolli=0;
//GRANDMA BAKE
setInterval(grandmaBake, 5000);
		function grandmaBake() {
			if (grandma >= 1) {
				cookie_ += grandma;		
			}
			if (grandmaL1 >=1) {
				cookie_ += grandmaL1;
				baguette += grandmaL1;	
			}
			if (grandmaL2 >=1) {
				cookie_ += grandmaL2*2;
				baguette+= grandmaL2;
				bread += grandmaL2;	
			}
			if (grandmaL3 >=1) {
				cookie_ += grandmaL3*2;
				baguette += grandmaL3*2;
				bread += grandmaL3;
				brownie += grandmaL3;	
			}
			if (grandmaL4 >=1) {
				cookie_ += grandmaL4*3;
				baguette += grandmaL4* 2;
				bread += grandmaL4*2;
				brownie += grandmaL4;
				croissant += grandmaL4;	
			}
			document.getElementById("cookie_").innerHTML = cookie_;
			document.getElementById("baguette").innerHTML = baguette;
			document.getElementById("bread").innerHTML = bread;
			document.getElementById("brownie").innerHTML = brownie;
			document.getElementById("croissant").innerHTML = croissant;
		}
		//Get Grandmas
				//Normal Grandma; Cookie
						function getGrandma() {
							if (cookie_ >= 10) {
								cookie_ -= 10;
								grandma += 1;
									document.getElementById("cookie_").innerHTML = cookie_;
									document.getElementById("grandma").innerHTML = grandma;
							}
							else if (cookie_ <10) {
								alert("not enough cookies to bribe a grandma to bake for you! get at least 10 cookies!");	
							}
						}
				
				//Grandma Lvl1; Baguette
					function getGrandmaL1() {
						if (baguette >= 15) {
							baguette -= 15; 
							grandmaL1 += 1;
								document.getElementById("baguette").innerHTML=baguette;
								document.getElementById("grandmaL1").innerHTML=grandmaL1;
						} 
						else if (baguette < 15) {
							alert("not enough baguettes to buy a grandma! get at least 15 baguettes to bribe a good grandma.");
							}
						}
	
				//Grandma Lvl2; Bread
					function getGrandmaL2() {
					if (bread >= 20) {
						bread -= 20; 
						grandmaL2 += 1;
							document.getElementById("bread").innerHTML=bread;
							document.getElementById("grandmaL2").innerHTML=grandmaL2;
					}
					else if (bread < 20) {
						alert("not enough bread to bribe! get at least 20 to buy a level 2 grandma.");	
					}
					}
				//Grandma Lvl3; Brownie
					function getGrandmaL3() {
						if (brownie >= 25) {
							brownie -= 25; 
							grandmaL3 += 1;
								document.getElementById("brownie").innerHTML=brownie;
								document.getElementById("grandmaL3").innerHTML=grandmaL3;
						}
					else if (brownie < 25) {
						alert("not enough brownies! get at least 25 brownies to bribe a grandma to bake for you!");	
					}
					}
				// Grandma Lvl4; Croissant
					function getGrandmaL4() {
						if (croissant >= 30) {
							croissant -= 30; 
							grandmaL4 += 1;
								document.getElementById("croissant").innerHTML=croissant;
								document.getElementById("grandmaL4").innerHTML=grandmaL4;	
						}
						else if (croissant < 30) {
							alert("not enough croissants!!! get 30 to bribe the grandma to bake for you!");	
						}
					}
	//BAKE
		// Cookie
			function cookieClick() {
				cookie_ += 1;
				document.getElementById("cookie_").innerHTML = cookie_;
			}			
		//Baguette
			function baguetteClick() {
				baguette += 1;
				document.getElementById("baguette").innerHTML = baguette;
			}
		//Bread
			function breadClick() {
				bread += 1;
				document.getElementById("bread").innerHTML = bread;
			}	
		// Brownie
			function brownieClick() {
				brownie += 1;
				document.getElementById("brownie").innerHTML = brownie;
			}
		//Croissant
				function croissantClick() {
						croissant += 1;
						document.getElementById("croissant").innerHTML = croissant;
				}
//BAKER BAKE
	setInterval(bakerBake, 5000);
	function bakerBake() {
		if (baker >= 1) {
			cheesecake += baker;	
		}
		if (bakerL1 >= 1) {
			cheesecake += bakerL1;
			taiyaki += bakerL1;
		}
		if (bakerL2 >= 1) {
			cheesecake += bakerL2*2;
			taiyaki += bakerL2;
			gelato += bakerL2;
		}
		if (bakerL3 >= 1) {
			cheesecake += bakerL3*2;
			taiyaki += bakerL3*2;
			gelato += bakerL3;
			churros += bakerL3;
		}
		if (bakerL4 >= 1) {
			cheesecake += bakerL4*3;
			taiyaki += bakerL4*2;
			gelato += bakerL4*2;
			churros += bakerL4;
			mousse += bakerL4;
		}
		document.getElementById("cheesecake").innerHTML = cheesecake;
		document.getElementById("taiyaki").innerHTML = taiyaki;
		document.getElementById("gelato").innerHTML = gelato;
		document.getElementById("churros").innerHTML = churros;
		document.getElementById("mousse").innerHTML = mousse;
	}
	//Normal Baker; Cheesecake
			function getBaker() {
				if (cheesecake >= 10) {
					cheesecake -= 10;
					baker += 1;
						document.getElementById("cheesecake").innerHTML = cheesecake;
						document.getElementById("baker").innerHTML = baker;
				}
				else if (cheesecake < 10) {
					alert("not enough cheesecake to bribe a pastry chef to bake for you! get at least 10 cheesecakes.");
				}
			}
		//Baker Lvl1; Taiyaki
		function getBakerL1() {
			if (taiyaki >= 15) {
				taiyaki -= 15;
				bakerL1 += 1;
					document.getElementById("taiyaki").innerHTML = taiyaki;
					document.getElementById("bakerL1").innerHTML = bakerL1;
			}
			else if (taiyaki < 15) {
				alert("not enough taiyaki to bribe a baker to bake for you! get at least 15 taiyaki.");
			}
		}
		//Baker Lvl2; gelato			
		function getBakerL2() {
				if (gelato >= 20) {
					gelato -= 20;
					bakerL2 += 1;
						document.getElementById("gelato").innerHTML = gelato;
						document.getElementById("bakerL2").innerHTML = bakerL2;
				}
				else if (gelato < 15) {
					alert("not enough gelato to bribe a baker to bake for you! get at least 20 gelato.");
				}
			}
		//Baker Lvl3; churros
		function getBakerL3() {
			if (churros >= 25) {
				churros -= 25;
				bakerL3 += 1;
					document.getElementById("churros").innerHTML = churros;
					document.getElementById("bakerL3").innerHTML = bakerL3;
			}
			else if (churros <25) {
				alert("not enough churros to bribe a baker to bake for you! get at least 25 churros.");	
			}
		}
		//Baker Lvl4; mousse
		function getBakerL4() {
			if (mousse >= 30) {
				mousse -= 30;
				bakerL4 += 1;
					document.getElementById("mousse").innerHTML = mousse;
					document.getElementById("bakerL4").innerHTML = bakerL4;	
			}
		}
	//FOOD COUNTERS
		//Cheesecake
				function cheesecakeClick() {
						cheesecake += 1;
						document.getElementById("cheesecake").innerHTML = cheesecake;
				}	
		//Taiyaki
				function taiyakiClick() {
						taiyaki += 1;
						document.getElementById("taiyaki").innerHTML = taiyaki;
				}
		//Gelato
				function gelatoClick() {
						gelato += 1;
						document.getElementById("gelato").innerHTML = gelato;
				}
		//Churros
				function churrosClick() {
						churros += 1;
						document.getElementById("churros").innerHTML = churros;
				}
		//Chocolate mousse
		function mousseClick() {
			mousse +=1;
			document.getElementById("mousse").innerHTML=mousse;
		}
//DRINKS Click Function
//Coffee
function coffeeClick() {
	coffee +=1;
	document.getElementById("coffee").innerHTML=coffee;
}
//Coke
function cokeClick() {
	coke +=1;
	document.getElementById("coke").innerHTML=coke;
}
//Dr. Pepper
function drpepperClick() {
	drpepper +=1;
	document.getElementById("drpepper").innerHTML=drpepper;
}
//Jarritos
function jarritosClick() {
	jarritos +=1;
	document.getElementById("jarritos").innerHTML=jarritos;
}
//Tea
function teaClick() {
	tea +=1;
	document.getElementById("tea").innerHTML=tea;
}
//DISPENSER BAKE functions
setInterval(dispenserBake, 5000);
function dispenserBake() {
	if (dispenser>= 1) {
		coffee += dispenser;
	}
	if (dispenserL1>=1) {
		coffee += dispenserL1;
		coke += dispenserL1;
	}
	if (dispenserL2 >= 1) {
		coffee += dispenserL2*2;
		coke += dispenserL2;
		drpepper += dispenserL2;
	}
	if (dispenserL3 >= 1) {
		coffee += dispenserL3*2;
		coke += dispenserL3*2;
		drpepper += dispenserL3;
		jarritos += dispenserL3;
	}
	if (dispenserL4 >= 1) {
		coffee += dispenserL4*3;
		coke += dispenserL4*2;
		drpepper += dispenserL4 *2;
		jarritos += dispenserL4;
		tea += dispenserL4;
	}
	document.getElementById("coffee").innerHTML = coffee;
	document.getElementById("coke").innerHTML = coke;
	document.getElementById("drpepper").innerHTML = drpepper;
	document.getElementById("jarritos").innerHTML = jarritos;
	document.getElementById("tea").innerHTML = tea;
}
//GetDispenser functions
	//Normal Dispenser; Coffee
		function getDispenser() {
			if (coffee >= 10) {
				coffee -= 10;
				dispenser += 1;
					document.getElementById("dispenser").innerHTML = dispenser;
					document.getElementById("coffee").innerHTML = coffee;	
			}
			else if (coffee < 10) {
				alert	("not enough coffee to bribe an inanimate object to give you drinks!");
			}
		}
	//Lvl1 Dispenser; Coke
		function getDispenserL1() {
			if(coke >= 15) {
				coke -= 15;
				dispenserL1 += 1;
					document.getElementById("dispenserL1").innerHTML = dispenserL1;
					document.getElementById("coke").innerHTML = coke;	
			}
			else if (coke < 15) {
				alert("not enough coke to bribe an inanimate object to give you drinks!");
			}
		}
	//Lvl2 Dispenser; Drpepper
		function getDispenserL2() {
			if(drpepper >= 20) {
				drpepper -= 20;
				dispenserL2 += 1;
					document.getElementById("dispenserL2").innerHTML = dispenserL2;	
					document.getElementById("drpepper").innerHTML = drpepper;
			}
			else if (drpepper < 20) {
				alert("not enough dr. pepper to bribe an inanimate object to give you drinks!");	
			}
		}
	//Lvl3 Dispenser; jarritos
		function getDispenserL3() {
			if(jarritos >= 25) {
				jarritos -= 25;
				dispenserL3 += 1;
					document.getElementById("dispenserL3").innerHTML = dispenserL3;
					document.getElementById("jarritos").innerHTML = jarritos;	
			}
			else if (jarritos < 25) {
				alert("not enough jarritos to bribe an inanimate object to give you drinks!");	
			}
		}
	//Lvl4 Dispenser; Tea
		function getDispenserL4() {
			if (tea >= 30) {
				tea -= 30;
				dispenserL4 += 1;
					document.getElementById("dispenserL4").innerHTML = dispenserL4;
					document.getElementById("tea").innerHTML = tea;	
			}
			else if (tea < 30) {
				alert("not enough tea to bribe an inanimate object to give you dirnks!");	
			}
		}
//Fast Food Click Function
//Fries
function friesClick() {
	fries +=1;
	document.getElementById("fries").innerHTML=fries;
}
//Hotdog
function hotdogClick() {
	hotdog +=1;
	document.getElementById("hotdog").innerHTML=hotdog;
}
//Pizza
function pizzaClick() {
	pizza +=1;	
	document.getElementById("pizza").innerHTML=pizza;
}
//Nacho
function nachoClick() {
	nacho +=1;
	document.getElementById("nacho").innerHTML=nacho;
}

//Pringles
function pringlesClick() {
	pringles +=1;
	document.getElementById("pringles").innerHTML=pringles;
}
//Food Fairy Bake Functions
setInterval(fairyBake, 5000);
function fairyBake() {
	if (fairy >= 1) {
		fries += fairy;
	}
	if (fairyL1 >= 1) {
		fries += fairyL1;
		hotdog += fairyL1;
	}
	if (fairyL2 >= 1) {
		fries += fairyL2*2;
		hotdog += fairyL2;
		pizza += fairyL2;
	}
	if (fairyL3 >= 1) {
		fries += fairyL3*2;
		hotdog += fairyL3*2;
		pizza += fairyL3;
		nacho += fairyL3;
	}
	if (fairyL4 >=1) {
		fries += fairyL4*3;
		hotdog += fairyL4*2;
		pizza += fairyL4*2;	
		nacho += fairyL4;
		pringles += fairyL4;
	}
	document.getElementById("fries").innerHTML = fries;
	document.getElementById("hotdog").innerHTML = hotdog;
	document.getElementById("pizza").innerHTML = pizza;
	document.getElementById("nacho").innerHTML = nacho;
	document.getElementById("pringles").innerHTML = pringles;
}
//Get FoodFairy functions
	//Normal Food Fairy; fries
		function getFairy() {
			if (fries >= 10) {
				fries -= 10;
				fairy += 1;
					document.getElementById("fries").innerHTML = fries;
					document.getElementById("fairy").innerHTML = fairy;	
			}
			else if (fries < 10) {alert("not enough magical fries to bribe a fairy to make magic food for you!");}
		}
	//Lvl 1 Food Fairy; hotdog
		function getFairyL1() {
			if (hotdog >= 15) {
				hotdog -= 15;
				fairyL1 += 1;
					document.getElementById("hotdog").innerHTML = hotdog;
					document.getElementById("fairyL1").innerHTML = fairyL1;	
			}
			else if (hotdog < 15) {alert("not enough magical hotdogs to bribe a fairy to make magic food for you!");}
		}
	//Lvl2 Food Fairy; pizza
		function getFairyL2() {
			if(pizza >= 20) {
				pizza -= 20;
				fairyL2 += 1;
					document.getElementById("pizza").innerHTML = pizza;
					document.getElementById("fairyL2").innerHTML = fairyL2;	
			}
			else if (pizza < 20) {alert("not enough magical pizza to bribe a fairy to make magic food for you!");}
		}
	//Lvl3 Food Fairy; nacho
		function getFairyL3() {
			if (nacho >= 25) {
				nacho -= 25;
				fairyL3 += 1;
					document.getElementById("nacho").innerHTML = nacho;
					document.getElementById("fairyL3").innerHTML = fairyL3;	
			}
			else if (nacho < 25) {alert("not enough magical pizza to bribe a fairy to make magic food for you!");}
		}
	//Lvl4 Food Fairy; pringles
	function getFairyL4() {
		if (pringles >= 30) {
			pringles -= 30;
			fairyL4 += 1;
				document.getElementById("pringles").innerHTML = pringles;
				document.getElementById("fairyL4").innerHTML = fairyL4;	
		}
		else if (pringles < 30) {alert("not enough magical pringles to bribe a fairy to produce magical foods for you!");}
	}
//FRESH PRODUCE CLICK FUNCTIONS
//Avocado
function avocadoClick() {
	avocado +=1;
	document.getElementById("avocado").innerHTML=avocado;
}

//Bell Pepper
function bellpepperClick() {
	bellpepper +=1;
	document.getElementById("bellpepper").innerHTML=bellpepper;
}

//Bok Choy
function bokchoyClick() {
	bokchoy +=1;
	document.getElementById("bokchoy").innerHTML=bokchoy;
}

//Broccoli
function broccoliClick() {
	broccoli +=1;
	document.getElementById("broccoli").innerHTML=broccoli;
}

//Carrot
function carrotClick() {
	carrot +=1;
	document.getElementById("carrot").innerHTML=carrot;
}

// Zucchini
	function zucchiniClick() {
		zucchini +=1;
		document.getElementById("zucchini").innerHTML=zucchini;
	}
//Cherry
function cherryClick() {
	cherry +=1;
	document.getElementById("cherry").innerHTML=cherry;
}

//Grape
function grapeClick() {
	grape +=1;
	document.getElementById("grape").innerHTML=grape;
}
//Mango
function mangoClick() {
	mango +=1;
	document.getElementById("mango").innerHTML=mango;
}
//Pineapple
function pineappleClick() {
	pineapple +=1;
	document.getElementById("pineapple").innerHTML=pineapple;
}
//FARMER BAKE FUNCTION
setInterval(farmerBake, 5000);
function farmerBake() {
	if (farmer >= 1) {
		avocado += farmer;	
	}
	if (farmerL1 >= 1) {
		avocado += farmerL1;
		bellpepper += farmerL1;
	}
	if (farmerL2 >= 1) {
		avocado += farmerL2*2;
		bellpepper += farmerL2;
		bokchoy += farmerL2;	
	}
	if (farmerL3 >= 1) {
		avocado += farmerL3*2;
		bellpepper += farmerL3*2;
		bokchoy += farmerL3;
		broccoli += farmerL3;	
	}
	if (farmerL4 >= 1) {
		avocado += farmerL4*3;
		bellpepper += farmerL4*2;
		bokchoy += farmerL4*2;
		broccoli += farmerL4;	
		carrot += farmerL4;
	}
	if (farmerL5 >= 1) {
		avocado += farmerL5*3;
		bellpepper += farmerL5 *3;
		bokchoy += farmerL5*2;
		broccoli += farmerL5*2;
		carrot += farmerL5;
		zucchini += farmerL5;	
	}
	if (farmerL6 >= 1) {
		avocado += farmerL6*3;
		bellpepper += farmerL6*3;	
		bokchoy += farmerL6*2;
		broccoli += farmerL6*2;
		carrot += farmerL6 *2;
		zucchini += farmerL6;
		cherry += farmerL6;
	}
	if (farmerL7 >=1) {
		avocado += farmerL7*3;
		bellpepper += farmerL7*3;
		bokchoy += farmerL7*3;
		broccoli += farmerL7*2;
		carrot += farmerL7*2;
		zucchini += farmerL7*2;
		cherry += farmerL7;
		grape += farmerL7;	
	}
	if (farmerL8 >=1) {
		avocado += farmerL8*2;
		bellpepper += farmerL8*2;
		bokchoy += farmerL8*2;
		broccoli += farmerL8 *2;
		carrot += farmerL8*2;
		zucchini += farmerL8*2;
		cherry += farmerL8*2;
		grape += farmerL8*2;
		mango += farmerL8*2;
		pineapple += farmerL8*2;	
	}
	document.getElementById("avocado").innerHTML = avocado;
	document.getElementById("bellpepper").innerHTML = bellpepper;
	document.getElementById("bokchoy").innerHTML = bokchoy;
	document.getElementById("broccoli").innerHTML = broccoli;
	document.getElementById("carrot").innerHTML = carrot;
	document.getElementById("zucchini").innerHTML = zucchini;
	document.getElementById("cherry").innerHTML = cherry;
	document.getElementById("grape").innerHTML = grape;
	document.getElementById("mango").innerHTML = mango;
	document.getElementById("pineapple").innerHTML = pineapple;
}
//Get Farmers Functions
//Normal Farmer; avocado
	function getFarmer() {
		if (avocado >= 10) {
			avocado -= 10;
			farmer += 1;
				document.getElementById("avocado").innerHTML = avocado;
				document.getElementById("farmer").innerHTML = farmer;	
		}
		else if (avocado < 10) {alert("not enough fre sha vac ado to bribe a farmer to work for you!");}
	}
//Lvl1 Farmer; bellpepper
	function getFarmerL1() {
		if (bellpepper >= 15) {
			bellpepper -= 15;
			farmerL1 += 1;
				document.getElementById("bellpepper").innerHTML = bellpepper;
				document.getElementById("farmerL1").innerHTML = farmerL1;	
		}
		else if (bellpepper < 15) {alert("not enough bellpeppers to bribe a farmer to work for you!");}
	}
//Lvl2 Farmer; bokchoy
	function getFarmerL2() {
		if (bokchoy >= 20) {
			bokchoy -= 20;
			farmerL2 += 1;
				document.getElementById("bokchoy").innerHTML = bokchoy;
				document.getElementById("farmerL2").innerHTML = farmerL2;	
		}
		else if (bokchoy < 20) {alert("not enough bokchoy to bribe a farmer to work for you!");}
	}
//Lvl3 Farmer; broccoli
	function getFarmerL3() {
		if (broccoli >= 25) {
			broccoli -= 25;
			farmerL3 += 1;
				document.getElementById("broccoli").innerHTML = broccoli;
				document.getElementById("farmerL3").innerHTML = farmerL3;	
		}
		else if (broccoli < 25) {alert("not enough broccoli to bribe a farmer to work for you!");}
	}
//Lvl4 Farmer; carrot
	function getFarmerL4() {
		if (carrot >= 30) {
			carrot -= 30;
			farmerL4 += 1;
				document.getElementById("carrot").innerHTML = carrot;
				document.getElementById("farmerL4").innerHTML = farmerL4;	
		}
		else if (carrot < 30) {alert("not enough carrots to bribe a farmer to work for you");}
	}
//Lvl5 Farmer; zucchini
	function getFarmerL5() {
		if (zucchini >= 35) 	{
			zucchini -= 35;
			farmerL5 += 1;
				document.getElementById("zucchini").innerHTML = zucchini;
				document.getElementById("farmerL5").innerHTML = farmerL5;	
		}
		else if (zucchini < 35) {alert("not enough zoo-key-knee to bribe a farmer to work for you! i think you need an english teacher first...");}
	}
//Lvl6 Farmer; cherry
	function getFarmerL6() {
		if (cherry >= 40) {
			cherry -= 40;
			farmerL6 += 1;
				document.getElementById("cherry").innerHTML = cherry;
				document.getElementById("farmerL6").innerHTML = farmerL6;	
		}
		else if (cherry < 40) {alert("not enough chairs... wait cherries... to bribe a farmer to work for you!");}
	}
//Lvl7 Farmer; grape
	function getFarmerL7() {
		if (grape >= 45) {
			grape -= 45;
			farmerL7 += 1;
				document.getElementById("grape").innerHTML = grape;
				document.getElementById("farmerL7").innerHTML = farmerL7;	
		}
		else if (grape < 45) {alert("not enough grapes to bribe a farmer to work for you!");}
	}
//Lvl8 Farmer; mango
	function getFarmerL8() {
		if (mango >= 150) {
			mango -= 150;
			farmerL8 += 1;
				document.getElementById("mango").innerHTML = mango;
				document.getElementById("farmerL8").innerHTML = farmerL8;	
		}
		else if (mango < 150) {alert("do you want a super farmer? well you don't have enough mangos! go man, go! hahaaha");}
	}
//SWEETS CLICK FUNCTIONS
//Haribo
function hariboClick() {
	haribo +=1;
	document.getElementById("haribo").innerHTML=haribo;
}

//Kit Kat
function kitkatClick() {
	kitkat +=1;
	document.getElementById("kitkat").innerHTML=kitkat;
}

//Milkshakes
function milkshakesClick() {
	milkshakes +=1;
	document.getElementById("milkshakes").innerHTML=milkshakes;
}

//Skittles
function skittlesClick() {
	skittles +=1;
	document.getElementById("skittles").innerHTML=skittles;
}

//Trolli
function trolliClick() {
	trolli +=1;
	document.getElementById("trolli").innerHTML=trolli;
}
//sweets troll Bake Functions
setInterval (trollBake, 5000);
function trollBake() {
	if (troll >= 1) {
		haribo += troll;
	}
	if (trollL1 >= 1) {
		haribo += trollL1;
		kitkat += trollL1;	
	}
	if (trollL2 >= 1) {
		haribo += trollL2*2;
		kitkat += trollL2;
		milkshakes += trollL2;
	}
	if (trollL3 >= 1) {
		haribo += trollL3*2;
		kitkat += trollL3 *2;
		milkshakes += trollL3;
		skittles += trollL3;	
	}
	if (trollL4 >= 1) {
		haribo += trollL4*3;
		kitkat += trollL4*2;
		milkshakes += trollL4*2;
		skittles += trollL4;
		trolli += trollL4;	
	}
	document.getElementById("haribo").innerHTML = haribo;
	document.getElementById("kitkat").innerHTML = kitkat;
	document.getElementById("milkshakes").innerHTML = milkshakes;
	document.getElementById("skittles").innerHTML = skittles;
	document.getElementById("trolli").innerHTML = trolli;s
}
//Sweets Troll getFunctions
//Normal Sweet; haribo
	function getTroll() {
		if (haribo >= 10) {
			haribo -= 10;
			troll += 1;
				document.getElementById("haribo").innerHTML = haribo;
				document.getElementById("troll").innerHTML = troll;	
		}
		else if (haribo < 10) {
			alert("not enough haribo to lure the diabetes troll to help you defeat health!");	
		}
	}
//Lvl1 troll; kitkat
	function getTrollL1() {
		if (kitkat >= 15) {
			kitkat -= 15;
			trollL1 += 1;
				document.getElementById("kitkat").innerHTML = kitkat;
				document.getElementById("trollL1").innerHTML = trollL1;	
		}
		else if (kitkat < 15) {alert("not enough kitkat to lure the diabetes troll to help you defeat health!");}
	}
//Lvl2 troll; milkshakes
	function getTrollL2() {
		if (milkshakes >= 20) {
			milkshakes -= 20;
			trollL2 += 1;
				document.getElementById("milkshakes").innerHTML = milkshakes;
				document.getElementById("trollL2").innerHTML = trollL2;	
		}
		else if (milkshakes < 20) {alert("not enough milkshakes to lure the diabetes troll to help you defeat health!");}
	}
//lvl3 troll; skittles
	function getTrollL3() {
		if (skittles >= 25) {
			skittles -= 25;
			trollL3 += 1;	
				document.getElementById("skittles").innerHTML = skittles;
				document.getElementById("trollL3").innerHTML = trollL3;
		}
		else if (skittles < 25) {alert("not enough skittles to lure the diabetes troll to help you defeat health!");}
	}
//lvl4 troll; trolli
	function getTrollL4() {
		if (trolli >= 30) {
			trolli -= 30;
			trollL4 += 1;
				document.getElementById("trolli").innerHTML = trolli;
				document.getElementById("trollL4").innerHTML = trollL4;	
		}
		else if (trolli < 30) {alert("not enough troll-i to lure the diabetes troll to help you defeat health!");}
	}