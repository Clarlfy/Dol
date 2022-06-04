/* ?animal */
Template.add('animal', () =>
	either("bee", "elephant", "bunny", "octopus", "chimp", "squid", "mollusc", "monkey", "wasp", "baboon", "wolf", "bear", "elk", "seal", "dolphin", "whale", "jellyfish", "cat", "lion", "tiger", "cheetah", "wild dog", "panther", "mole", "badger", "honey badger", "duck", "goose", "sparrows", "robin", "perch", "pike", "salmon", "sturgeon", "frog", "newt", "crocodile", "toad", "hawk", "eagle", "cuttlefish", "python", "anaconda", "adder", "cobra", "sturgeon", "trout", "salmon", "tuna", "deer", "robin"));

/* ?animals */
Template.add('animals', () =>
	either("bees", "elephants", "bunnies", "octopi", "chimps", "squid", "molluscs", "monkeys", "wasps", "baboons", "wolves", "bears", "elk", "seals", "dolphins", "whales", "jellyfish", "cats", "lions", "tigers", "cheetahs", "wild dogs", "panthers", "moles", "badgers", "honey badgers", "ducks", "geese", "sparrows", "robins", "perch", "pike", "salmon", "sturgeon", "frogs", "newts", "crocodiles", "toads", "hawks", "eagles", "cuttlefish", "pythons", "anacondas", "adders", "cobras", "sturgeon", "trout", "salmon", "tuna", "deer", "robins"));

/* ?garden */
Template.add('garden', () =>
	either("prune flowers", "prune trees", "prune bushes", "water flowers", "remove weeds"));

/* ?admires */
Template.add('admires', () =>
	either("leers at", "admires", "ogles", "eyes up"));

/* ?gwylanItem */
Template.add('gwylanItem', () =>
	either("trophy","baseball","baseball bat","snow globe","magic 8-ball","ping-pong paddle","chess set","piggy bank","mug","cookie tin","frying pan","backscratcher","pencil case","lunch box","lava lamp","flashlight","cuckoo clock","Rubix cube","globe","water gun","dictionary","hand mirror","novelty camera","ziplock bag filled with seashells","miniature stepladder","knick-knack of unknown purpose"));
