var tigger = {character: "Tigger"};
var winnie = {character: "Winnie the Pooh"};
var piglet = {character: "Piglet"};
var bees = {character: "Bees"};
var chris = {character: "Christopher Robin"};
var owl = {character: "Owl"};
var rabbit = {character: "Rabbit"};
var gopher = {character: "Gopher"};
var kanga = {character: "Kanga"};
var eeyore = {character: "Eeyore"};
var heffalumps = {character: "Heffalumps"};

tigger.north = winnie
winnie.south = tigger
winnie.west = piglet
winnie.east = bees
winnie.north = chris
piglet.east = winnie
piglet.north = owl
owl.south = piglet
owl.east = chris
chris.south = winnie
chris.west = owl
chris.east = rabbit
chris.north = kanga
bees.west = winnie
bees.north = rabbit
rabbit.south = bees
rabbit.east = gopher
rabbit.west = chris
gopher.west = rabbit
kanga.south = chris
kanga.north = eeyore
eeyore.south = kanga
eeyore.east = heffalumps
heffalumps.west = eeyore

console.log(eeyore.south.character)