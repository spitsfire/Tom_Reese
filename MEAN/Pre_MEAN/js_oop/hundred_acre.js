const tigger = { character: "Tigger" };
const pooh = { character: "Winnie the Pooh" };
const piglet = {character:"Piglet"};
const bees = {character: "Bees"};
const owl = {character: "OWl"};
const christopherrobin = {character: "Christopher Robin"};
const rabbit = {character: "Rabbit"};
const gopher = {character: "Gopher"};
const kanga = {character: "Kanga"};
const eeyore = {character: "Eeyore"};
const heffalumps = {character: "Heffalumps"};

tigger.north = pooh;
pooh.north = christopherrobin;
pooh.south = christopherrobin;
pooh.west = piglet;
pooh.east = bees;
christopherrobin.north = kanga;
christopherrobin.south = pooh;
christopherrobin.east = rabbit;
christopherrobin.west = owl;
owl.south = piglet;
owl.east = christopherrobin;
piglet.north = owl;
piglet.east = pooh;
bees.north = rabbit;
bees.west = pooh;
rabbit.south = bees;
rabbit.east = gopher;
rabbit.west = christopherrobin;
gopher.west = rabbit;
kanga.north = eeyore;
kanga.south = christopherrobin;
eeyore.south = kanga;
eeyore.east = heffalumps;
heffalumps.west = eeyore;


