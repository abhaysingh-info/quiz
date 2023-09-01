export interface Quiz {
	id: number
	question: string
	options: string[]
	correctOption: number | null
}

export const quiz: Quiz[] = [
	{
		id: 1,
		question: 'The probability of event equal to zero is called;',
		options: [
			'Unsure event',
			'Sure Event',
			'Impossible event',
			'Independent event',
		],
		correctOption: 3,
	},
	{
		id: 2,
		question: 'The probability that cannot exist among the following:',
		options: ['⅔', '-1.5', '15%', '0.7'],
		correctOption: 2,
	},
	{
		id: 3,
		question: 'If P(E) = 0.07, then what is the probability of ‘not E’?',
		options: ['0.93', '0.95', '0.89', '0.90'],
		correctOption: 1,
	},
	{
		id: 4,
		question:
			'A bag has 3 red balls and 5 green balls. If we take a ball from the bag, then what is the probability of getting red balls only?',
		options: ['3', '8', '⅜', '8/3'],
		correctOption: 3,
	},
	{
		id: 5,
		question:
			'A bag has 5 white marbles, 8 red marbles and 4 purple marbles. If we take a marble randomly, then what is the probability of not getting purple marble?',
		options: ['0.5', '0.66', '0.08', '0.77'],
		correctOption: 4,
	},
	{
		id: 6,
		question:
			'A dice is thrown in the air. The probability of getting odd numbers is',
		options: ['½', '3/2', '3', '4'],
		correctOption: 1,
	},
	{
		id: 7,
		question:
			'If we throw two coins in the air, then the probability of getting both tails will be:',
		options: ['½', '¼', '2', '4'],
		correctOption: 2,
	},
	{
		id: 8,
		question:
			'If two dice are thrown in the air, the probability of getting sum as 3 will be',
		options: ['2/18', '3/18', '1/18', '1/36'],
		correctOption: 3,
	},
	{
		id: 9,
		question:
			'A card is drawn from the set of 52 cards. Find the probability of getting a queen card.',
		options: ['1/26', '1/13', '4/53', '4/13'],
		correctOption: 2,
	},
	{
		id: 10,
		question:
			'A fish tank has 5 male fish and 8 female fish. The probability of fish taken out is a male fish:',
		options: ['5/8', '5/13', '13/5', '5'],
		correctOption: 2,
	},
	{
		id: 11,
		question:
			'The sum of the probabilities of all the elementary events of an experiment is',
		options: ['0.5', '1', '2', '1.5'],
		correctOption: 2,
	},
	{
		id: 12,
		question:
			'A card is selected at random from a well shuffled deck of 52 playing cards. The probability of its being a face card is',
		options: ['3/13', '4/13', '6/13', '9/13'],
		correctOption: 1,
	},
	{
		id: 13,
		question: 'If an event cannot occur, then its probability is',
		options: ['1', '3/4', '1/2', '0'],
		correctOption: 4,
	},
	{
		id: 14,
		question:
			'An event is very unlikely to happen. Its probability is closest to',
		options: ['0.0001', '0.001', '0.01', '0.1'],
		correctOption: 1,
	},
	{
		id: 15,
		question: 'If P(A) denotes the probability of an event A, then',
		options: ['P(A) < 0', 'P(A) > 1', '0 ≤ P(A) ≤ 1', '–1 ≤ P(A) ≤ 1'],
		correctOption: 3,
	},
	{
		id: 16,
		question:
			'The probability that a non leap year selected at random will contain 53 Sundays is',
		options: ['1/7', '2/7', '3/7', '5/7'],
		correctOption: 1,
	},
	{
		id: 17,
		question:
			'If the probability of an event is p, the probability of its complementary event will be',
		options: ['p – 1', 'p', '1 – p', '1 – 1/p'],
		correctOption: 3,
	},
	{
		id: 18,
		question:
			'A card is drawn from a deck of 52 cards. The event E is that card is not an ace of hearts. The number of outcomes favourable to E is',
		options: ['4', '13', '48', '51'],
		correctOption: 4,
	},
	{
		id: 19,
		question:
			'The probability of getting a bad egg in a lot of 400 is 0.035. The number of bad eggs in the lot is',
		options: ['7', '14', '21', '28'],
		correctOption: 2,
	},
	{
		id: 20,
		question:
			'Two players, Sangeeta and Reshma, play a tennis match. It is known that the probability of Sangeeta winning the match is 0.62. The probability of Reshma winning the match is',
		options: ['0.62', '0.38', '0.58', '0.42'],
		correctOption: 2,
	},
	{
		id: 21,
		question:
			'A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?',
		options: ['120 metres', '180 metres', '324 metres', '150 metres'],
		correctOption: 4,
	},
	{
		id: 22,
		question:
			'A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is:',
		options: ['45 km/hr', '50 km/hr', '54 km/hr', '55 km/hr'],
		correctOption: 2,
	},
	{
		id: 23,
		question:
			'The length of the bridge, which a train 130 metres long and travelling at 45 km/hr can cross in 30 seconds, is:',
		options: ['200m', '225m', '245m', '250m'],
		correctOption: 3,
	},
	{
		id: 24,
		question:
			'Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:',
		options: ['1:3', '3:2', '3:4', 'None of these'],
		correctOption: 2,
	},
	{
		id: 25,
		question:
			'A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?',
		options: ['120 m', '240 m', '300 m', 'None of these'],
		correctOption: 2,
	},
	{
		id: 26,
		question:
			'A train 240 m long passes a pole in 24 seconds. How long will it take to pass a platform 650 m long?',
		options: ['65 sec', '100 sec', '89 sec', '150 sec'],
		correctOption: 3,
	},
	{
		id: 27,
		question:
			'Two trains of equal length are running on parallel lines in the same direction at 46 km/hr and 36 km/hr. The faster train passes the slower train in 36 seconds. The length of each train is',
		options: ['50 m', '72 m', '80 m', '82 m'],
		correctOption: 1,
	},
	{
		id: 28,
		question:
			'A train 360 m long is running at a speed of 45 km/hr. In what time will it pass a bridge 140 m long?',
		options: ['40 sec', '42 sec', '45 sec', '48 sec'],
		correctOption: 1,
	},
	{
		id: 29,
		question:
			'Two trains are moving in opposite directions @ 60 km/hr and 90 km/hr. Their lengths are 1.10 km and 0.9 km respectively. The time taken by the slower train to cross the faster train in seconds is:',
		options: ['36', '45', '48', '49'],
		correctOption: 3,
	},
	{
		id: 30,
		question:
			'A jogger running at 9 kmph alongside a railway track 240 metres ahead of the engine of a 120 metres long train running at 45 kmph in the same direction. In how much time will the train pass the jogger?',
		options: ['3.6 sec', '18 sec', '36 sec', '72 sec'],
		correctOption: 3,
	},
	{
		id: 31,
		question:
			" Father is four times the age of his daughter. If after 5 years, he would be three times his daughter's age, then further after 5 years, how many times would he be of his daughter’s age?",
		options: ['1.5 times', '2 times', '2.5 times', '3 times'],
		correctOption: 3,
	},
	{
		id: 32,
		question:
			" What is Aman's present age, if after 20 years his age will be 10 times his age 10 years back?",
		options: ['6.2 years', '7.7 years', '13.3 years', '10 years'],
		correctOption: 3,
	},
	{
		id: 33,
		question:
			'Nisha is 15 years elder to Romi. If 5 years ago, Nisha was 3 times as old as Romi, then find Nisha’s present age.',
		options: ['32.5 years', '27.5 years', '25 years', '24.9 years'],
		correctOption: 2,
	},
	{
		id: 34,
		question:
			" Ten years ago, the mother was three times the age of her son. After ten years, the mother's age will be twice that of his son. Find the ratio of their present ages.",
		options: ['11:7', '9:5', '7:4', '7:3'],
		correctOption: 4,
	},
	{
		id: 35,
		question:
			'Saransh is 50 years old and Nazma is 40 years old. How long ago was the ratio of their ages 3:2?',
		options: ['20 years', '30 years', '40 years', '25 years'],
		correctOption: 1,
	},
	{
		id: 36,
		question:
			'The ratio of the present ages of Pranav and Qureshi is 4:5. Five years ago, the ratio of their ages was 7:9. Find their present ages? (In years)',
		options: ['40, 50', '18, 25', '40, 60', '20, 25'],
		correctOption: 1,
	},
	{
		id: 37,
		question:
			'A man said to his son, "I was one-third of your present age when you were born". If the present age of the man is 48 years, find the present age of the son.',
		options: ['25.7 years', '28 years', '29.3 years', '36 years'],
		correctOption: 4,
	},
	{
		id: 38,
		question:
			'Dinesh is younger to Roshan by 9 years. If their ages are in the respective ratio of 4:5, how old is Dinesh?',
		options: ['36 years', '23 years', '29 years', 'Cannot be determined'],
		correctOption: 1,
	},
	{
		id: 39,
		question:
			'The ratio of Sara’s age 4 years ago and Vaishali’s age after 4 years is 1: 1. Presently, the ratio of their ages is 5: 3. Find the ratio between Sara’s age 4 years hence and Vaishali’s age 4 years ago.',
		options: ['1:3', '3:1', '4:3', '3:4'],
		correctOption: 2,
	},
	{
		id: 40,
		question:
			'A shopkeeper offers a discount of 10% on his articles. The marked price of the article is Rs. 450. The selling price should be?',
		options: ['Rs. 405', 'Rs 400', 'Rs 395', 'Rs. 410'],
		correctOption: 1,
	},
	{
		id: 41,
		question:
			'How much percent more than the cost price should a shopkeeper mark his goods so that after allowing a discount of 25% on the marked price, he gains 20%?',
		options: ['60%', '55%', '70%', '50%'],
		correctOption: 1,
	},
	{
		id: 42,
		question:
			'A retailer purchased radio sets at the rate of Rs. 400 each from a wholesaler. He raised the price by 30% and then allowed a discount of 8% on each set. His profit will be:',
		options: ['19%', '78.4%', '22%', '19.6%'],
		correctOption: 4,
	},
	{
		id: 43,
		question:
			'An article is sold at 10% loss. If the selling price is Rs. 40 more, there will be a gain of 15%. The cost price of the article is:',
		options: ['140', '120', '175', '160'],
		correctOption: 4,
	},
	{
		id: 44,
		question:
			'The marked price of a table is Rs. 800. A retailer bought it after two successive discounts of 10% and 15%. He spent Rs. 13 on transportation and sold it for Rs. 875. His profit was:',
		options: ['40%', '37%', '28%', '25%'],
		correctOption: 1,
	},
	{
		id: 45,
		question:
			'A person sells 320 mangoes at the cost price of 400 mangoes. What is his profit percent?',
		options: ['10%', '15%', '20%', '25%'],
		correctOption: 4,
	},
	{
		id: 46,
		question:
			'A shopkeeper earns a profit of 15% on selling a book at 10% discount on the printed price. The ratio of the cost price and the printed price is:',
		options: ['18:23', '16:21', '18:21', '17:23'],
		correctOption: 1,
	},
	{
		id: 47,
		question:
			'If a selling price of Rs. 24 results in 20% discount on the list price of an article, the selling price that would result in 30% discount on the list price is:',
		options: ['Rs. 17', 'Rs. 23', 'Rs. 18', 'Rs. 21'],
		correctOption: 4,
	},
	{
		id: 48,
		question:
			'If the cost price of 15 books is equal to the selling price of 20 books, the loss percent is:',
		options: ['16', '20', '24', '25'],
		correctOption: 4,
	},
	{
		id: 49,
		question:
			'Successive discounts of 10%, 20% and 30% is equivalent to a single discount of:',
		options: ['60%', '49.6%', '40.5%', '36%'],
		correctOption: 2,
	},
	{
		id: 50,
		question:
			'A merchant purchases a wrist watch for Rs 1200 and fixes its list price in such a way that after allowing a discount of 10%, he earns a profit of 20%. The list price of the watch is:',
		options: ['Rs. 1600', 'Rs. 1200', 'Rs. 1400', 'Rs. 1800'],
		correctOption: 1,
	},
	{
		id: 51,
		question:
			'A man sells an article at 5% above the cost price. If he had bought it at 5% less than what he paid for it and sold it for Rs 2 less, he would have gained 10%. The cost price of the article is:',
		options: ['Rs. 250', 'Rs. 400', 'Rs. 350', 'Rs. 200'],
		correctOption: 2,
	},
	{
		id: 52,
		question:
			'The marked price of a watch was Rs 720. A man bought the same for Rs 550.80 after getting two successive discounts, the first being 10%. The second discount rate is:',
		options: ['12%', '14%', '15%', '18%'],
		correctOption: 3,
	},
	{
		id: 53,
		question:
			'A man purchased an article for Rs 1500 and sold it at 25% above the cost price. If he has to pay Rs 75 as tax on it, his net profit percentage will be:',
		options: ['25%', '30%', '15%', '20%'],
		correctOption: 4,
	},
	{
		id: 54,
		question:
			'A fruit seller buys 240 apples for Rs 600. Some of these apples are bad and are thrown away. He sells the remaining apples at Rs 3.50 each and makes a profit of Rs 198. The percentage of apples thrown away are:',
		options: ['8%', '7%', '6%', '5%'],
		correctOption: 4,
	},
	{
		id: 55,
		question: 'What is the highest common factor of the numbers 30 and 132?',
		options: ['8', '6', '12', '9'],
		correctOption: 2,
	},
	{
		id: 56,
		question: '123+4-5+67-89 = ?',
		options: ['100', '167', '104', '123'],
		correctOption: 1,
	},
	{
		id: 57,
		question:
			'From the number 0 to the number 1000, the letter “A” appears only in?\n(don’t give options, unless asked for)',
		options: ['100', '500', '1000', '800'],
		correctOption: 3,
	},
	{
		id: 58,
		question: 'If 1=3, 2=3, 3=5, 4=4, and 5=4, what is 6=?',
		options: ['4', '5', '3', '2'],
		correctOption: 3,
	},
	{
		id: 59,
		question: 'Which number is the equivalent to 3^(4)/3^(2)',
		options: ['9', '6', '3', '12'],
		correctOption: 1,
	},
	{
		id: 60,
		question:
			'Using only the process of addition, how to add eight 8’s to get the final number of 1000?',
		options: ['888+88+8', '888+88+8+8', '888+88+88+8+8', '888+88+8+8+8'],
		correctOption: 4,
	},
	{
		id: 61,
		question:
			'What is next in the following number series: 256, 289, 324, 361 . . . ?',
		options: ['390', '405', '381', '400'],
		correctOption: 4,
	},
	{
		id: 62,
		question:
			'Three people in a room tell lies for 1/3rd of their time. A coin flip is conducted with the three of them, and all of them say it is “heads.” What is the probability that the coin actually has the “head” face up? (Probability is a concept often tested in maths quiz questions!)',
		options: ['8/9', '6/7', '9/10', '5/6'],
		correctOption: 1,
	},
	{
		id: 63,
		question:
			'At a Christmas party, everyone shook hands with everyone else. There were a total of 66 handshakes that happened during the party. How many people were present?',
		options: ['11', '12', '13', '14'],
		correctOption: 2,
	},
	{
		id: 64,
		question: 'What is the value of Pi to four individual decimal places?',
		options: ['3.1413', '3.1415', '3.1416', '3.1417'],
		correctOption: 2,
	},
	{
		id: 65,
		question: ' What does 6 raise to the power of 0 equal?',
		options: ['2', '3', '6', '1'],
		correctOption: 4,
	},
	{
		id: 66,
		question: 'How many vertices are present on a cube?',
		options: ['4', '6', '8', '12'],
		correctOption: 3,
	},
	{
		id: 67,
		question:
			'An object is thrown into the air. After a while, it falls back to the Earth. The flight path of the object traces what shape?',
		options: ['A parabola', 'A Hyperbola', 'A Bezier curve', 'A Cycloid'],
		correctOption: 1,
	},
	{
		id: 68,
		question:
			'Adding the numbers between 1 to 100 consecutively (1+2+3+4+…) gives you what final answer?',
		options: ['5005', '5055', '5050', '5505'],
		correctOption: 3,
	},
	{
		id: 69,
		question:
			'-1.43, 1.56  , 3/14, 1.09, and 5,643.1 have one thing in common. What is that?',
		options: [
			'These numbers are integer',
			'These numbers are not integer',
			'These numbers are irrational numbers',
			'These',
		],
		correctOption: 1,
	},
	{
		id: 70,
		question:
			'All natural numbers are whole numbers. However, not all whole numbers can be considered natural – True or False?',
		options: ['True', 'False'],
		correctOption: 1,
	},
	{
		id: 71,
		question:
			'You are given a 3-digit number. The second digit of this number is four times bigger than the third digit. The first digit of the number is 3 less than the second digit. What is the number?',
		options: ['282', '262', '131', '141'],
		correctOption: 4,
	},
	{
		id: 72,
		question:
			'Solve the following equation: -15 + (-5x)=0.\n(there’s no need of options)',
		options: ['-3', '-5', '3', '5'],
		correctOption: 1,
	},
	{
		id: 73,
		question:
			'A car is travelling at the rate of 75 kilometres per hour. How many metres is the car travelling in one minute?',
		options: [
			'750 metres per minute.',
			'1250 metres per minute.',
			'1150 metres per minute.',
			'1350 metres per minute.',
		],
		correctOption: 2,
	},
	{
		id: 74,
		question:
			'What is the rounded-off value of 6488 cakes to the nearest 100 cakes?',
		options: ['6490', '6400', '6500', '6480'],
		correctOption: 3,
	},
	{
		id: 75,
		question:
			'How many hours are there in a year (rounded to the nearest hour)?',
		options: ['8760', '8670', '7860', '6870'],
		correctOption: 1,
	},
	{
		id: 76,
		question:
			'A man is currently 4 times older than his son. In 10 years, the man will be three times older than his son. What is the man’s age presently?',
		options: ['88', '40', '66', '80'],
		correctOption: 4,
	},
	{
		id: 77,
		question: 'Which prime number is closest to 100?',
		options: ['109', '103', '107', '101'],
		correctOption: 4,
	},
	{
		id: 78,
		question: 'Which number is best represented in binary as 100?',
		options: ['5', '4', '6', '10'],
		correctOption: 2,
	},
	{
		id: 79,
		question:
			'What 3 numbers result in the same answer when they are added or multiplied altogether?',
		options: ['1, 2 and 3', '1, 3 and 5', '2, 4 and 6', '3, 6, 9'],
		correctOption: 1,
	},
	{
		id: 80,
		question:
			'Sarah read a novel in 20 days. She made it a habit to read 16 pages every day for the first 15 days. She then started reading 18 pages every day for the last 5 days. How many pages was the book?',
		options: ['320', '360', '330', '350'],
		correctOption: 3,
	},
	{
		id: 81,
		question:
			'Express log(75/16) - 2log(5/9) + log(32/243) in terms of log 2 and log 3.',
		options: ['log(5)', 'log(2)', 'log(3)', 'log(4)'],
		correctOption: 2,
	},
	{
		id: 82,
		question: 'Solve for x if log(x - 1) + log(x+1) = log21',
		options: ['√7', '√5', '√3', '√2'],
		correctOption: 4,
	},
	{
		id: 83,
		question: 'Find x if log5(x-7)=1.',
		options: ['8', '10', '12', '14'],
		correctOption: 3,
	},
	{
		id: 84,
		question: 'Find the log of 32 to the base 4.',
		options: ['5/2', '3/2', '7/2', '9/2'],
		correctOption: 1,
	},
	{
		id: 85,
		question: 'Express 5^3 = 125 in logarithmic form.',
		options: ['Log5125 = 3', 'Log10125 = 3', 'Log15125 = 6', 'Log3125 = 5'],
		correctOption: 1,
	},
	{
		id: 86,
		question: 'Rewrite 34 = 81 in logarithmic form.',
		options: ['log34 = 81', 'log813 = 4', 'log481 = 3', 'log381 = 4'],
		correctOption: 4,
	},
	{
		id: 87,
		question: 'Rewrite logpt = m in exponential form.',
		options: ['p^t = m', 't^m = p', 'm^t = p', 'p^m = t'],
		correctOption: 4,
	},
	{
		id: 88,
		question: 'Expand the logarithm log107x',
		options: ['(log107)(log10x)', 'log107 + log10x', '7log10x', 'xlog107'],
		correctOption: 2,
	},
	{
		id: 89,
		question: 'Evaluate log 0.001',
		options: ['-2', '-3', '1/3', '3'],
		correctOption: 2,
	},
	{
		id: 90,
		question: 'Evaluate log7 343',
		options: ['3', '49', '7', '1'],
		correctOption: 1,
	},
	{
		id: 91,
		question: '(17)^3.5 * (17)^? = 17^8',
		options: ['2.29', '4', '3.89', '4.5'],
		correctOption: 4,
	},
	{
		id: 92,
		question: 'If (a/b)^(x-1) = (b/a)^(x - 3), then the value of x is:',
		options: ['1/2', '1', '2', '7/2'],
		correctOption: 3,
	},
	{
		id: 93,
		question:
			'Given that 10^0.48 = x, 10^0.70 = y and xz = y2, then the value of z is close to:',
		options: ['1.45', '1.88', '2.9', '3.7'],
		correctOption: 3,
	},
	{
		id: 94,
		question: 'If 5^a = 3125, then the value of 5^(a - 3) is:',
		options: ['25', '125', '625', '1625'],
		correctOption: 1,
	},
	{
		id: 95,
		question: 'If 3(x - y) = 27 and 3(x + y) = 243, then x is equal to:',
		options: ['0', '2', '4', '6'],
		correctOption: 3,
	},
	{
		id: 96,
		question: 'The value of [(10)150 ÷ (10)146]',
		options: ['1000', '10000', '100000', '10^6'],
		correctOption: 2,
	},
	{
		id: 97,
		question: '(25)7.5 x (5)2.5 ÷ (125)1.5 = 5?',
		options: ['8.5', '13', '16', '17.5'],
		correctOption: 2,
	},
	{
		id: 98,
		question: '(0.04)-1.5 = ?',
		options: ['125', '25', '250', '625'],
		correctOption: 1,
	},
	{
		id: 99,
		question:
			'If m and n are whole numbers such that m^n = 121, the value of (m - 1)^(n + 1) is:',
		options: ['1', '10', '121', '1000'],
		correctOption: 4,
	},
	{
		id: 100,
		question:
			'If x be any integer different from zero and m be any positive integer, then x^(-m) is equal to',
		options: ['x^m', '-x^m', '1/(x^m)', '-1/(x^m)'],
		correctOption: 3,
	},
	{
		id: 101,
		question:
			'Find the total amount of interest to the nearest cent if the interest is compounded annually. $2750 at 8% for 2 years',
		options: ['$220.5', '$457.6', '$660.6', '$237.6'],
		correctOption: 2,
	},
	{
		id: 102,
		question:
			'The simple interest formula is I=Prt.  What does the t represent?',
		options: ['Principle', 'Interest', 'Time', 'Percent Rate'],
		correctOption: 3,
	},
	{
		id: 103,
		question:
			'Starting money = $350.\nInterest rate = 2.5%\nTIme = 3 years.\nHow much interest?',
		options: ['$7.5', '$26.25', '$87.5', '$262.5'],
		correctOption: 2,
	},
	{
		id: 104,
		question:
			'The simple interest formula is I=Prt.  The P represents the principle.  The principle is ___________________.',
		options: [
			'the amount of money borrowed or deposited',
			'the percent interest for his year',
			'The amount taxed',
			'the amount the bank owes you for being a customer at their bank',
		],
		correctOption: 1,
	},
	{
		id: 105,
		question:
			'Emilio borrows $1200 from a bank with 8% simple interest per year.  How much will he have to pay back in total in 2 years?',
		options: ['$150', '$190', '$1350', '$1392'],
		correctOption: 4,
	},
	{
		id: 106,
		question:
			'Phyllis went to the mall and saw a massage chair that she would have to take a loan out for $6500 to purchase.  The bank said that she could get a simple interest rate of 5% for 5 years.  What is the total amount that Phyllis will pay for the chair?',
		options: ['$2600', '$9100', '$8125', '$2650'],
		correctOption: 3,
	},
	{
		id: 107,
		question:
			'Find the principal for a loan that has an earned interest of $3500 with an annual rate of 10% for 5 years.',
		options: ['$7000', '$6,500', '$5000', '$3750'],
		correctOption: 1,
	},
	{
		id: 108,
		question:
			'I = Prt where r represents the rate.  Rates must be converted into ____ before multiplying.',
		options: ['fractions', 'mixed numbers', 'decimals', 'percents'],
		correctOption: 3,
	},
	{
		id: 109,
		question:
			'Robert invested $200 in a retirement account that had a rate of 20% that compounds annually.  If Robert leaves his money in for 3 years, how much money will be in his account rounded to the nearest cent?',
		options: ['$240.50', '$300.60', '$288.00', '$345.60'],
		correctOption: 4,
	},
	{
		id: 110,
		question:
			'Mickey earned $475 from mowing lawns last summer. He deposited this money in an account that pays an interest rate of 3.8% compounded annually. What will be his balance after 4 years rounded to the nearest cent?',
		options: ['$827.52', '$551.42', '$539.45', '$646.80'],
		correctOption: 2,
	},
	{
		id: 111,
		question:
			" Emily's parents put $1,500 in her bank account for college tuition. At an interest rate of 8.25% compounded annually, what will be the total balance after 2 years?",
		options: ['$3,273.50', '$1314.08', '$2385.72', '$1757.71'],
		correctOption: 4,
	},
	{
		id: 112,
		question:
			'If the balance at the end of eight years on an investment of $630 that has been invested at a rate of 9%, how much was the interest?',
		options: ['$453.60', '$523.75', '$633.55', '$460.75'],
		correctOption: 1,
	},
	{
		id: 113,
		question:
			'If the interest earned was $55.20 on an investment of $230 that has a rate of 3%, how long was the money invested?',
		options: ['4 years', '8 years', '5 years', '10 years'],
		correctOption: 2,
	},
	{
		id: 114,
		question:
			" The Henley's took out a loan for $195,000 to purchase a home. At a 4.3% interest rate compounded annually, how much will the loan be after 5 years?",
		options: ['$45,689', '$2,40,689', '$1,95,000', '$41,925'],
		correctOption: 2,
	},
	{
		id: 115,
		question:
			'Kennedy won $3,000 from a radio contest. If she puts this money in a bank account that earns 2.9% interest compounded annually, how much total interest will she earn in 10 years?',
		options: ['$992.78', '$900.78', '$995.78', '$962.78'],
		correctOption: 1,
	},
	{
		id: 116,
		question:
			'Riley invested $1,000 in savings bonds. If the bonds earn 6.75% interest compounded annually, how much total interest will Riley earn in 15 years?',
		options: ['$663.90', '$2663.90', '$1663.90', '$1000.90'],
		correctOption: 3,
	},
	{
		id: 117,
		question:
			'Andrew borrows $79,500 for 2 years and earns $10,017 of simple interest. Calculate the interest rate?',
		options: ['7.3%', '6.63%', '5.3%', '6.3%'],
		correctOption: 4,
	},
	{
		id: 118,
		question:
			'John wants to open a showroom and borrows $48,000 on 12% interest rate. He plans to pay this after 4 years. What will that total principal + interest payment be?',
		options: ['$71,040', '$72,050', '$71,060', '$71,990'],
		correctOption: 1,
	},
	{
		id: 119,
		question:
			'Bruno was given $2000 when he turned 3 years old.  His parents invested it at a 2% interest rate compounded annually.  No deposits or withdrawls were made.  Which expression can be used to determine how much money Bruno had in the account when he turned 16?',
		options: [
			'2000(1+0.02)^13',
			'2000(1-0.02)^13',
			'2000(1+0.02)^16',
			'2000(1-0.02)^16',
		],
		correctOption: 1,
	},
	{
		id: 120,
		question:
			'Leroy borrowed $1500 at an annual simple interest rate of 12%.  He paid $270 in interest.  For what time period did Leroy borrow the money?',
		options: ['8 years', '5 years', '18 months', '18 years'],
		correctOption: 3,
	},
	{
		id: 121,
		question: 'If 72 x 96 = 6927, 58 x 87 = 7885, then 79 x 86 = ?',
		options: ['7689', '8976', '6897', '6978'],
		correctOption: 3,
	},
	{
		id: 122,
		question: '3,5, 9,17,33',
		options: ['44', '65', '64', '49'],
		correctOption: 2,
	},
	{
		id: 123,
		question:
			'Look at this series: 36, 34, 30, 28, 24, ... What number should come next?',
		options: ['20', '22', '23', '26'],
		correctOption: 2,
	},
	{
		id: 124,
		question: 'If 11 (170)16, 11(203)19, then value of 17(?)18 will be –',
		options: ['200', '300', '400', 'None of these'],
		correctOption: 2,
	},
	{
		id: 125,
		question: '6,5,24,25,144,(?)',
		options: ['155', '160', '170', '175'],
		correctOption: 4,
	},
	{
		id: 126,
		question:
			'Look at this series: 22, 21, 23, 22, 24, 23, ... What number should come next?',
		options: ['22', '24', '25', '26'],
		correctOption: 3,
	},
	{
		id: 127,
		question: 'a= 12 (390) 8, b = 7 (134) 5, c = 5 (?) 12',
		options: ['299', '289', '279', '280'],
		correctOption: 3,
	},
	{
		id: 128,
		question:
			'Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?',
		options: ['7', '10', '12', '13'],
		correctOption: 2,
	},
	{
		id: 129,
		question: 'If 13 x 12 = 651 & 41 x 23 = 448, then, 24 x 22 =?',
		options: ['504', '46', '524', '924'],
		correctOption: 4,
	},
	{
		id: 130,
		question:
			'Look at this series: 53, 53, 40, 40, 27, 27, ... What number should come next?',
		options: ['12', '14', '27', '53'],
		correctOption: 2,
	},
	{
		id: 131,
		question: 'If the time is 12pm, how many hours is it until 6pm?',
		options: ['3 hr', '6 hr', '12 hr', '18 hr'],
		correctOption: 2,
	},
	{
		id: 132,
		question:
			'If I have a bag of 5 yellow balls and 5 green balls, what is the probability (in %) of picking a yellow ball?',
		options: ['12', '14', '27', '53'],
		correctOption: 2,
	},
	{
		id: 133,
		question:
			'Priya had 16 Red Balls, 2 Green Balls, 9  Blue Balls, and 1 Multicolor Ball. If He Lost 9 Red Balls, 1 Green Ball, and 3 Blue Balls. How Many Balls would be Left?',
		options: ['15', '11', '28', '39'],
		correctOption: 1,
	},
	{
		id: 134,
		question: 'How many months make a century?',
		options: ['12', '120', '1200', '12000'],
		correctOption: 3,
	},
	{
		id: 135,
		question:
			'If David’s age is 27 years old in 2011. What was his age in 2003?',
		options: ['17 Years', '37 Years', '20 Years', '19 Years'],
		correctOption: 4,
	},
	{
		id: 136,
		question:
			'The difference between the smallest number of four digits and the largest number of three digits is …….',
		options: ['1', '100', '0', '99'],
		correctOption: 1,
	},
	{
		id: 137,
		question: 'Simplify :150 ÷ (6 + 3 x 8) - 5',
		options: ['2', '5', '0', 'None of these'],
		correctOption: 3,
	},
	{
		id: 138,
		question: 'Which is the largest number in 15/17, 15/18, 15/19, 15/21?',
		options: ['15/17', '15/18', '15/19', '15/21'],
		correctOption: 1,
	},
	{
		id: 139,
		question: 'What is the sum of one digit prime numbers?',
		options: ['11', '13', '15', '17'],
		correctOption: 4,
	},
	{
		id: 140,
		question: 'Name a triangle whose two angles are equal.',
		options: [
			'Right angle triangle',
			'Isosceles triangle',
			'Scalene triangle',
			'None of these',
		],
		correctOption: 2,
	},
	{
		id: 141,
		question: 'What is 999 times 100.0?',
		options: ['199.0', '999.0', '9990', '99900'],
		correctOption: 4,
	},
	{
		id: 142,
		question: '1010 gram = ……… kg.',
		options: ['10.10 kg', '101.0 kg', '1.001 kg', '1.01 kg'],
		correctOption: 4,
	},
	{
		id: 143,
		question:
			'Average of three person’s age is 9 years. Find the sum of there age.',
		options: ['18', '21', '24', '27'],
		correctOption: 3,
	},
	{
		id: 144,
		question: 'How many cents is equal to $ ¼?',
		options: ['15', '20', '25', '30'],
		correctOption: 3,
	},
	{
		id: 145,
		question: 'How many diagonals are there in a quadrilateral?',
		options: ['2', '3', '4', '6'],
		correctOption: 1,
	},
	{
		id: 146,
		question:
			'Speed of a car is 60 km/hr. Distance covered in 1 ¼ hours is ………',
		options: ['60 KM', '65 KM', '70 KM', '75 KM'],
		correctOption: 4,
	},
	{
		id: 147,
		question: 'How many surfaces are there in a cube?',
		options: ['3', '4', '5', 'None of these'],
		correctOption: 4,
	},
	{
		id: 148,
		question:
			'How much water is added to 750 g milk to get 1 kilogram mixture of liquid?',
		options: ['2.5 kg', '0.25 kg', '20.5 kg', '25.0 kg'],
		correctOption: 2,
	},
	{
		id: 149,
		question: 'Which value of x makes the equation true? x – 7 = –13',
		options: ['-20 deg', '20 deg', '-6 deg', '6 deg'],
		correctOption: 3,
	},
	{
		id: 150,
		question: 'Simplify: {36 ÷ (-9)} ÷ {(-24) ÷ 6}',
		options: ['1', '2', '3', '-1'],
		correctOption: 1,
	},
	{
		id: 151,
		question: 'What should be added to (5)3/7 to get 12?',
		options: ['7/25', '9/34', '2/59', '46/7'],
		correctOption: 4,
	},
	{
		id: 152,
		question: 'Each side of a square is (6)2/3 m long. Find its Area.',
		options: ['(44)4/9 m^2', '(12)3/2 m^2', '(12)3/2 m^2', 'None of these'],
		correctOption: 1,
	},

	// complete from here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	{
		id: 153,
		question:
			'A car can cover a distance of 522 km on 36 liters of petrol. How far can it travel on 14 liters of petrol?',
		options: ['213 km', '223 km', '203 km', '302 km'],
		correctOption: 3,
	},
	{
		id: 154,
		question:
			'Two numbers are in ratio 4 : 5. If the sum of the numbers is 135, find the numbers',
		options: ['60 and 75', '50 and 65', '70 and 95', '65 and 75'],
		correctOption: 1,
	},
	{
		id: 155,
		question:
			'A long rope has to be cut to make 23 small pieces. If it is double folded to start with how many times does it need to be cut?',
		options: ['9', '23', '11', '12'],
		correctOption: 3,
	},
	{
		id: 156,
		question:
			'Ruby’s height is 5’2”. Ana is taller than Ruby but she is not taller than Pamela. Pamela is shorter than her cousin Ron but she is not shorter than Ruby. Who is the tallest in the group?',
		options: ['Ana', 'Ron', 'Pamela', 'Ruby'],
		correctOption: 2,
	},
	{
		id: 157,
		question:
			'A clock seen through a mirror, shows quarter past three. What is the correct time shown by the clock?',
		options: ['3.15', '8.45', '9.15', '9.45'],
		correctOption: 2,
	},
	{
		id: 158,
		question:
			'A river flows west to east and on the way turns left and go in a semi-circle round a hillock, and then turns left at right-angles. In what direction is the river finally flowing?',
		options: ['North', 'South', 'East', 'West'],
		correctOption: 3,
	},
	{
		id: 159,
		question:
			'Tom was not at school on Saturday last. He was first absent for four days before that. Today is Monday, the 31st of October. When was Tom first absent? Give the day and date.',
		options: [
			'Monday, Oct. 24',
			'Tuesday, Oct. 25',
			'Wednesday, Oct. 26',
			'Thursday, Oct. 27',
		],
		correctOption: 3,
	},
	{
		id: 160,
		question:
			'A clock shows the time as 12.20. What is the angle the hour hand makes with the minutes hand?',
		options: ['100', '110', '120', '130'],
		correctOption: 2,
	},
	{
		id: 161,
		question:
			'Nil is 23 years 1 month old, Shelly is 18 years 7 months old and Ben is as much older than Shelly is younger than Nil. The age of Ben is ……. .',
		options: [
			'18 years 6 months',
			'21 years 11 months',
			'20 years 9 months',
			'20 years 10 months',
		],
		correctOption: 4,
	},
	{
		id: 162,
		question:
			'Three bells toll at the intervals of 10, 15 and 24 minutes. All the three begin to toll together at 8 A.M. At what time they will again toll together?',
		options: ['10.45 A.M', '10 A.M', '9.25 A.M', '8.50 A.M'],
		correctOption: 2,
	},
	{
		id: 163,
		question:
			'In your bookshelf, you have five favorite books. If you decide to arrange these five books in every possible combination and moved just one book in every half a minute. How much time it will take you to arrange?',
		options: ['3 hours', '1 hours', '2 hours', '30 minutes'],
		correctOption: 2,
	},
	{
		id: 164,
		question:
			'From the alternatives, select the set which is most alike the set (23, 29, 31)',
		options: ['(17, 21, 29)', '(31, 37, 49)', '(13, 15, 23)', '(41, 43, 47)'],
		correctOption: 4,
	},
	{
		id: 165,
		question: 'If 6 is 50% of a number, what is the number?',
		options: ['10', '11', '12', '13'],
		correctOption: 3,
	},

	{
		id: 166,
		question: 'Which number is missing? 1, 9, 25, 49, (?)',
		options: ['121', '81', '16', '169'],
		correctOption: 2,
	},
	{
		id: 167,
		question:
			'Andy read 4/5 th of a story book which has 100 pages. How many pages of the book is not yet read by Andy?',
		options: ['40', '60', '80', '20'],
		correctOption: 4,
	},
	{
		id: 168,
		question:
			'Which least number should be added to 2600 to make it a perfect square?',
		options: ['3', '39', '1', '5'],
		correctOption: 1,
	},
	{
		id: 169,
		question:
			'If ‘+’ means ‘×’, ‘-‘ means ‘+’, ‘×’ means ‘÷’ and ‘÷’ means ‘-‘ then find the value of; 6 – 9 + 8 × 3 ÷ 20 = ……. .',
		options: ['6', '10', '-2', '12'],
		correctOption: 2,
	},
	{
		id: 170,
		question:
			'A car covers a distance of 200km in 2 hours 40 minutes, whereas a jeep covers the same distance in 2 hours. What is the ratio of their speed?',
		options: ['3:4', '4:3', '4:5', '5:4'],
		correctOption: 1,
	},
]
