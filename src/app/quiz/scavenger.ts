export interface Scavenger {
	id: number
	question: string
	answer: string | null
}

export const scavenger = [
	{
		id: 1,
		question:
			'Get a picture of the object from the (3x - 4y) world. where x equals 4 and y equals 3. "What has hands but no arms and a face but no eyes?" asks the object.',
		answer: 'Clock at ground floor',
	},
	{
		id: 2,
		question:
			'Search for the mathematician whose contributions to the field of mathematics continue to be celebrated and studied to this day. His work on infinite series and number theory earned him a reputation as a genius and he gained the attention of leading mathematicians of his time. Look for a photo of this brilliant mind on The Fields, where [(10-2) x (5+3)] is seen.',
		answer: "Ramanujan's picture on notice board having the number 64",
	},
	{
		id: 3,
		question: 'I’m the smallest perfect number. And I’m the address to a den.',
		answer: 'Room number 006',
	},
	{
		id: 4,
		question:
			'Everyone feels I’m annoying when they find me. But I’m essential to convey that you are lost. I exist on the internet but when you separate [(50x4) + 2] from me, You are accepted. Tell me who I am?',
		answer:
			'404 is annoying, 202 is separated and the answer is pointing towards room number 202.',
	},
	{
		id: 5,
		question:
			"People hate to be “Moved Permanently” but web devs love me. You hate it when I move too frequently and get the message “Too many redirects”' and sometimes you need to eat all your cookies",
		answer: 'Room number 301',
	},
	{
		id: 6,
		question:
			'Click a picture of me, and my den. I throw the lights of knowledge on the walls. And live inside (X + X*10 - 449) where X = 25*2.',
		answer: 'Projector in room number 101',
	},
	{
		id: 7,
		question:
			'Find me if you can! I discovered the binomial theorem and calculus. But known for gravity. And I love the number 10^3 + 9^3 which is also known as the Ramanujan-Hardy number. And if you subtract (12^3 + 1^3) from it you get my world.',
		answer: 'Picture of Issac Newton that is beside the number 1729.',
	},
	{
		id: 8,
		question:
			'I’ve a lot of wisdom, the Holy place of picture. My address is multiple of 5. And you gotta click a picture with me.',
		answer: 'Library',
	},
	{
		id: 9,
		question:
			'I’m the Warden, guarding the room of wisdom, I will only allow you if you have the access card to the den of wisdom. And I guard the den 2*(10^2)+5. Click a picture with me!',
		answer: 'Picture with the security guard in the library.',
	},
	{
		id: 10,
		question:
			'Your opinion is what I care about. But no one cares about me. I reside beside the holy place for readers. And I’m constantly looking towards Hobbit hole located at (x * y) den, where x = 2 and y = 107. Get your points from me.',
		answer: 'Suggestion box besides library.',
	},
	{
		id: 11,
		question:
			'What is the value of x if the hobbit hole address can be represented as x + 200?.',
		answer:
			'Room number 215. It’s a small room therefore referred as hobbithole.',
	},
	{
		id: 12,
		question:
			'Find the place where “A group of foodies wants to split the cost of their meals evenly. If the total cost of their meals is $72 and there are 9 foodies in the group, what is the cost per person?”',
		answer: 'Canteen or room number 10',
	},
	{
		id: 13,
		question:
			'Find the total cost of items available on the menu board in the foodies place.',
		answer: 'Total cost of items on the whiteboard in the canteen.',
	},
	{
		id: 14,
		question:
			'I’m referred to as 3rd world. But I’m on top of all other worlds. Fellow cities are in shambles. They are in front of den number _______. To know the answer, solve the following riddle "I am a three-digit number, my units-digit place is three times of my hundreds-digit, and my tens-digit is discovered by Aryabhata"',
		answer: '309',
	},
	{
		id: 15,
		question: 'How many Books are available in the Room of Wisdom?',
		answer: 'Answer is the total number of books in the library.',
	},
	{
		id: 16,
		question:
			'How many classrooms are there in the whole building where classes are conducted?',
		answer: '27',
	},
	{
		id: 17,
		question:
			'Sum of all the row numbers of bookshelves in the room in-front of Hobbit holes. Locations are (10 x 20 + 15) and (50 * 4 + 14) respectively of hobithole.',
		answer: null,
	},
	{
		id: 18,
		question: 'Click a picture of me if you were able to decode me "1110011".',
		answer: '115 room (R&D)',
	},
	{
		id: 19,
		question:
			'I am on the grounds, to click a picture with me you need to subtract the birth year of the man who knew infinity from the birth year of the man who gave us the big bang theory. Then divide it by (current year - 2000). And multiply your answer by 2.',
		answer: 'Room number 5',
	},
	{
		id: 20,
		question:
			'To click a picture of this item you need to solve this riddle “I am a constant presence in the reading hall, But I am not a book or a wall. I am always there, but I am not always seen, Yet my presence is always keen. I am something that can be heard, But I am not a bird. I am something that can be felt, But I am not a belt. What am I?”',
		answer: 'Clock hanging on wall at reading hall',
	},
	{
		id: 21,
		question:
			"Find me and click a picture of me by solving the following riddle “I am a mathematician and astronomer from ancient India. My contributions to science are quite grand. I am credited with inventing the concept of zero, And I wrote a treatise on the solar system's phases. My name is known throughout history, But my legacy is still shrouded in mystery. Who am I?” (participants are required to search for their image on all floors).",
		answer: 'Aryabhata',
	},
	{
		id: 22,
		question:
			'You need to click a picture with his name by solving the following equation and riddle:\nRiddle: “I am a mathematician and scientist from ancient Greece, My discoveries and inventions have never ceased. I am known for my work on buoyancy and density, And for my famous exclamation of "Eureka!" in moments of clarity. My name is synonymous with innovation and genius, Who am I?”\nRiddle 2: “I am a floor, but not the first or the second, I am not the highest, but I am not the lowest either. I am in the middle, between the ones above and below, I am the one that comes after two, and before four, you know. What number am I?”',
		answer: 'Archimedes, Floor no 3',
	},
	{
		id: 23,
		question:
			'Click a picture by solving the following riddle “I am a mathematician and philosopher from ancient Greece, My contributions to mathematics and science have never ceased. I am known for my theorem that bears my name, And for my beliefs in the spiritual and the same. Who am I?” (participants are required to search for their image on all floors).',
		answer: 'Pythagoras',
	},
	{
		id: 24,
		question:
			'Click a picture with the following mathematician if you are able to guess his name: “I am a mathematician and astronomer from ancient India, My contributions to mathematics and science are quite grand. I am credited with the development of the concept of negative numbers and zero, And with writing important works on mathematics and astronomy, you know. I was the court astronomer of the Gupta empire, And I made significant contributions to the study of trigonometry and geometry. I am known for my work on the theory of quadratic equations, And for calculating the value of pi to four decimal places. Who am I?” (participants are required to search for their image on all floors).',
		answer: 'Brahmagupta',
	},
	{
		id: 25,
		question:
			'Which colour am I? If my binary code is “11111111 00000000 00000000”. Click a picture with an object that is in colour and is an enemy of fire.',
		answer: 'Red, Fire extinguisher',
	},
	{
		id: 26,
		question: 'Find the sum of all rooms with even numbers in the college.',
		answer: '6266',
	},
	{
		id: 27,
		question: 'Find the sum of all rooms with odd numbers in the college.',
		answer: '6565',
	},
	{
		id: 28,
		question:
			'Find the sum of all rooms with odd numbers on even floors. Lift is the way to go.',
		answer: '2244',
	},
	{
		id: 29,
		question:
			'Find the sum of all rooms with even numbers on odd floors. Lift is the way to go.',
		answer: '4220',
	},
	{
		id: 30,
		question:
			'Click picture of the object that is often found in a classroom, has a flat surface, and is used for writing. And the location is (10y - 16x) world where y= 16.5 and x = 10',
		answer: 'Benches in room no 5',
	},
]
