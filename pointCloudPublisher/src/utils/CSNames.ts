const names = [
  // A
  "Wil_van_der_Aalst",
  "Scott_Aaronson",
  "Rediet_Abebe",
  "Hal_Abelson",
  "Serge_Abiteboul",
  "Samson_Abramsky",
  "Leonard_Adleman",
  "Manindra_Agrawal",
  "Luis_von_Ahn",
  "Alfred_Aho",
  "Frances_E_Allen",
  "Gene_Amdahl",
  "David_P_Anderson",
  "Lisa_Anthony",
  "Andrew_Appel",
  "Cecilia_R_Aragon",
  "Bruce_Arden",
  "Kevin_Ashton",
  "Sanjeev_Arora",
  "Winifred_Tim_Alice_Asprey",
  "John_Vincent_Atanasoff",
  "Shakuntala_Atre",
  "Lennart_Augustsson",

  // B
  "Charles_Babbage",
  "Charles_Bachman",
  "Roland_Carl_Backhouse",
  "John_Backus",
  "David_F_Bacon",
  "David_Bader",
  "Victor_Bahl",
  "Anthony_James_Barr",
  "Jean_Bartik",
  "Andrew_Barto",
  "Friedrich_L_Bauer",
  "Rudolf_Bayer",
  "Gordon_Bell",
  "Steven_M_Bellovin",
  "Cecilia_Berdichevsky",
  "Tim_Berners_Lee",
  "Daniel_J_Bernstein",
  "Peter_Bernus",
  "Abhay_Bhushan",
  "Dines_Bjørner",
  "Gerrit_Blaauw",
  "Sue_Black",
  "David_Blei",
  "Dorothy_Blum",
  "Lenore_Blum",
  "Manuel_Blum",
  "Barry_Boehm",
  "Corrado_Böhm",
  "Kurt_Bollacker",
  "Jeff_Bonwick",
  "Grady_Booch",
  "George_Boole",
  "Andrew_Booth",
  "Kathleen_Booth",
  "Anita_Borg",
  "Bert_Bos",
  "Mikhail_Botvinnik",
  "Jonathan_Bowen",
  "Stephen_R_Bourne",
  "Harry_Bouwman",
  "Robert_S_Boyer",
  "Karlheinz_Brandenburg",
  "Gilles_Brassard",
  "Lawrence_M_Breed",
  "Jack_E_Bresenham",
  "Sergey_Brin",
  "David_J_Brown",
  "Per_Brinch_Hansen",
  "Sjaak_Brinkkemper",
  "Fred_Brooks",
  "Rod_Brooks",
  "Margaret_Burnett",
  "Rod_Burstall",
  "Michael_Butler",

  // C
  "Pino_Caballero_Gil",
  "Tracy_Camp",
  "Martin_Campbell_Kelly",
  "Rosemary_Candlin",
  "Rod_Canion",
  "Bryan_Cantrill",
  "Luca_Cardelli",
  "John_Carmack",
  "Michael_Caspersen",
  "Edwin_Catmull",
  "Vint_Cerf",
  "Gregory_Chaitin",
  "Robert_Cailliau",
  "Zhou_Chaochen",
  "Peter_Chen",
  "Leonardo_Chiariglione",
  "Tracy_Chou",
  "Alonzo_Church",
  "Alberto_Ciaramella",
  "Edmund_M_Clarke",
  "John_Cocke",
  "Edgar_F_Codd",
  "Jacques_Cohen",
  "Ian_Coldwater",
  "Simon_Colton",
  "Alain_Colmerauer",
  "Douglas_Comer",
  "Paul_Justin_Compton",
  "Richard_W_Conway",
  "Gordon_Cormack",
  "Stephen_Cook",
  "James_Cooley",
  "Danese_Cooper",
  "Fernando_J_Corbató",
  "Kit_Cosper",
  "Patrick_Cousot",
  "Ingemar_Cox",
  "Damien_Coyle",
  "Seymour_Cray",
  "Nello_Cristianini",
  "Jon_Crowcroft",
  "W_Bruce_Croft",
  "Glen_Culler",
  "Haskell_Curry",

  // D
  "Luigi_Dadda",
  "Ole_Johan_Dahl",
  "Ryan_Dahl",
  "Andries_van_Dam",
  "Samir_Das",
  "Neil_Daswani",
  "Christopher_J_Date",
  "Terry_A_Davis",
  "Jeff_Dean",
  "Erik_Demaine",
  "Tom_DeMarco",
  "Richard_DeMillo",
  "Dorothy_E_Denning",
  "Peter_J_Denning",
  "Michael_Dertouzos",
  "Alexander_Dewdney",
  "Robert_Dewar",
  "Vinod_Dham",
  "Jan_Dietz",
  "Whitfield_Diffie",
  "Edsger_W_Dijkstra",
  "Matthew_Dillon",
  "Alan_Dix",
  "Jack_Dongarra",
  "Marco_Dorigo",
  "Paul_Dourish",
  "Charles_Stark_Draper",
  "Susan_Dumais",
  "Adam_Dunkels",
  "Jon_Michael_Dunn",
  "Schahram_Dustdar",

  // E
  "Peter_Eades",
  "Annie_Easley",
  "Wim_Ebbinkhuijsen",
  "John_Presper_Eckert",
  "Alan_Edelman",
  "Brendan_Eich",
  "Philip_Emeagwali",
  "E_Allen_Emerson",
  "Douglas_Engelbart",
  "Barbara_Engelhardt",
  "David_Eppstein",
  "Andrey_Ershov",
  "Don_Estridge",
  "Oren_Etzioni",
  "Christopher_Riche_Evans",
  "David_C_Evans",
  "Shimon_Even",

  // F
  "Scott_Fahlman",
  "Edward_Feigenbaum",
  "Edward_Felten",
  "Tim_Finin",
  "Raphael_Finkel",
  "Donald_Firesmith",
  "Gary_William_Flake",
  "Tommy_Flowers",
  "Robert_Floyd",
  "Sally_Floyd",
  "Lawrence_J_Fogel",
  "James_D_Foley",
  "Ken_Forbus",
  "L_R_Ford_Jr",
  "Lance_Fortnow",
  "Mahmoud_Samir_Fayed",
  "Martin_Fowler",
  "Robert_France",
  "Herbert_W_Franke",
  "Edward_Fredkin",
  "Yoav_Freund",
  "Daniel_P_Friedman",
  "Charlotte_Froese_Fischer",
  "Ping_Fu",
  "Xiaoming_Fu",
  "Kunihiko_Fukushima",
  "D_R_Fulkerson",

  // G
  "Richard_P_Gabriel",
  "Zvi_Galil",
  "Bernard_Galler",
  "Hector_Garcia_Molina",
  "Michael_Garey",
  "Hugo_de_Garis",
  "Bill_Gates",
  "David_Gelernter",
  "Lisa_Gelobter",
  "Charles_Geschke",
  "Zoubin_Ghahramani",
  "Sanjay_Ghemawat",
  "Jeremy_Gibbons",
  "Juan_E_Gilbert",
  "Lee_Giles",
  "Seymour_Ginsburg",
  "Robert_L_Glass",
  "Kurt_Gödel",
  "Ashok_Goel",
  "Joseph_Goguen",
  "E_Mark_Gold",
  "Adele_Goldberg",
  "Andrew_V_Goldberg",
  "Ian_Goldberg",
  "Judy_Goldsmith",
  "Oded_Goldreich",
  "Shafi_Goldwasser",
  "Gene_Golub",
  "Martin_Charles_Golumbic",
  "Gastón_Gonnet",
  "Ian_Goodfellow",
  "James_Gosling",
  "Paul_Graham",
  "Robert_M_Graham",
  "Susan_L_Graham",
  "Jim_Gray",
  "Sheila_Greibach",
  "David_Gries",
  "Robert_Griesemer",
  "Ralph_Griswold",
  "Bill_Gropp",
  "Tom_Gruber",
  "Shelia_Guberman",
  "Ramanathan_V_Guha",
  "Neil_J_Gunther",
  "Jürg_Gutknecht",
  "Michael_Guy",
  "Giri_Topper",

  // H
  "Nico_Habermann",
  "Philipp_Matthäus_Hahn",
  "Eldon_C_Hall",
  "Wendy_Hall",
  "Joseph_Halpern",
  "Margaret_Hamilton",
  "Richard_Hamming",
  "Jiawei_Han",
  "Frank_Harary",
  "Brian_Harris",
  "Juris_Hartmanis",
  "Johan_Håstad",
  "Les_Hatton",
  "Igor_Hawryszkiewycz",
  "He_Jifeng",
  "Eric_Hehner",
  "Martin_Hellman",
  "Gernot_Heiser",
  "James_Hendler",
  "John_L_Hennessy",
  "Andrew_Herbert",
  "Carl_Hewitt",
  "Kelsey_Hightower",
  "Danny_Hillis",
  "Geoffrey_Hinton",
  "Julia_Hirschberg",
  "Tin_Kam_Ho",
  "C_A_R_Hoare",
  "Louis_Hodes",
  "Betty_Holberton",
  "John_Henry_Holland",
  "Herman_Hollerith",
  "Gerard_Holzmann",
  "John_Hopcroft",
  "Admiral_Grace_Hopper",
  "Eric_Horvitz",
  "Alston_Householder",
  "Paul_Hudak",
  "David_A_Huffman",
  "John_Hughes",
  "Roger_Hui",
  "Watts_Humphrey",
  "Sandra_Hutchins",

  // I
  "Jean_Ichbiah",
  "Roberto_Ierusalimschy",
  "Dan_Ingalls",
  "Mary_Jane_Irwin",
  "Kenneth_E_Iverson",

  // J
  "Ivar_Jacobson",
  "Anil_K_Jain",
  "Ramesh_Jain",
  "Jonathan_James",
  "Jordi_Ustrell_Aguilà",
  "David_S_Johnson",
  "Stephen_C_Johnson",
  "Angie_Jones",
  "Cliff_Jones",
  "Michael_I_Jordan",
  "Mathai_Joseph",
  "Aravind_K_Joshi",
  "Bill_Joy",
  "Dan_Jurafsky",

  // K
  "William_Kahan",
  "Robert_E_Kahn",
  "Avinash_Kak",
  "Poul_Henning_Kamp",
  "David_Karger",
  "Richard_Karp",
  "Narendra_Karmarkar",
  "Marek_Karpinski",
  "Ted_Kaehler",
  "Alan_Kay",
  "Neeraj_Kayal",
  "Manolis_Kellis",
  "John_George_Kemeny",
  "Ken_Kennedy",
  "Brian_Kernighan",
  "Carl_Kesselman",
  "Gregor_Kiczales",
  "Peter_T_Kirstein",
  "Stephen_Cole_Kleene",
  "Dan_Klein",
  "Leonard_Kleinrock",
  "Donald_Knuth",
  "Andrew_Koenig",
  "Daphne_Koller",
  "Michael_Kölling",
  "Andrey_Nikolaevich_Kolmogorov",
  "Janet_L_Kolodner",
  "David_Korn",
  "Kees_Koster",
  "Robert_Kowalski",
  "John_Koza",
  "John_Krogstie",
  "Joseph_Kruskal",
  "Maarja_Kruusmaa",
  "Thomas_E_Kurtz",

  // L
  "Richard_E_Ladner",
  "Monica_S_Lam",
  "Leslie_Lamport",
  "Butler_Lampson",
  "Peter_Landin",
  "Tom_Lane",
  "Börje_Langefors",
  "Chris_Lattner",
  "Steve_Lawrence",
  "Edward_D_Lazowska",
  "Joshua_Lederberg",
  "Manny_M_Lehman",
  "Charles_E_Leiserson",
  "Douglas_Lenat",
  "Yann_LeCun",
  "Rasmus_Lerdorf",
  "Max_Levchin",
  "Leonid_Levin",
  "Kevin_Leyton_Brown",
  "J_C_R_Licklider",
  "David_Liddle",
  "Jochen_Liedtke",
  "John_Lions",
  "Charles_H_Lindsey",
  "Richard_J_Lipton",
  "Barbara_Liskov",
  "Yanhong_Annie_Liu",
  "Darrell_Long",
  "Patricia_D_Lopez",
  "Gillian_Lovegrove",
  "Ada_Lovelace",
  "David_Luckham",
  "Eugene_Luks",
  "Nancy_Lynch",

  // M
  "Nadia_Magnenat_Thalmann",
  "Tom_Maibaum",
  "George_Mallen",
  "Simon_Marlow",
  "Zohar_Manna",
  "James_Martin",
  "Robert_C_Martin",
  "John_Mashey",
  "Yuri_Matiyasevich",
  "Yukihiro_Matsumoto",
  "John_Mauchly",
  "Ujjwal_Maulik",
  "Derek_McAuley",
  "Conor_McBride",
  "John_McCarthy",
  "Andrew_McCallum",
  "Douglas_McIlroy",
  "Chris_McKinstry",
  "Marshall_Kirk_McKusick",
  "Lambert_Meertens",
  "Kurt_Mehlhorn",
  "Dora_Metcalf",
  "Bertrand_Meyer",
  "Silvio_Micali",
  "Robin_Milner",
  "Jack_Minker",
  "Marvin_Minsky",
  "James_G_Mitchell",
  "Tom_M_Mitchell",
  "Arvind_Mithal",
  "Paul_Mockapetris",
  "Cleve_Moler",
  "Faron_Moller",
  "John_P_Moon",
  "Charles_H_Moore",
  "Edward_F_Moore",
  "Gordon_Moore",
  "J_Strother_Moore",
  "Roger_Moore",
  "Hans_Moravec",
  "Carroll_Morgan",
  "Robert_Tappan_Morris",
  "Joel_Moses",
  "Rajeev_Motwani",
  "Oleg_A_Mukhanov",
  "Stephen_Muggleton",
  "Klaus_Robert_Müller",
  "Alan_Mycroft",
  "Brad_A_Myers",

  // N
  "Mihai_Nadin",
  "Makoto_Nagao",
  "Frieder_Nake",
  "Bonnie_Nardi",
  "Peter_Naur",
  "Roger_Needham",
  "James_G_Nell",
  "Greg_Nelson",
  "Bernard_de_Neumann",
  "Klara_Dan_von_Neumann",
  "John_von_Neumann",
  "Allen_Newell",
  "Max_Newman",
  "Andrew_Ng",
  "Nils_John_Nilsson",
  "GM_Nijssen",
  "Tobias_Nipkow",
  "Maurice_Nivat",
  "Phiwa_Nkambule",
  "Jerre_Noe",
  "Peter_Nordin",
  "Donald_Norman",
  "Peter_Norvig",
  "George_Novacky",
  "Kristen_Nygaard",

  // O
  "Martin_Odersky",
  "Peter_O'Hearn",
  "T_William_Olle",
  "Steve_Omohundro",
  "Severo_Ornstein",
  "John_O'Sullivan",
  "John_Ousterhout",
  "Mark_Overmars",
  "Susan_Owicki",

  // P
  "Larry_Page",
  "Sankar_Pal",
  "Paritosh_Pandya",
  "Christos_Papadimitriou",
  "David_Park",
  "David_Parnas",
  "DJ_Patil",
  "Yale_Patt",
  "David_Patterson",
  "Mike_Paterson",
  "Mihai_Pătraşcu",
  "Lawrence_Paulson",
  "Randy_Pausch",
  "Juan_Pavón",
  "Judea_Pearl",
  "Alan_Perlis",
  "Radia_Perlman",
  "Pier_Giorgio_Perotto",
  "Rózsa_Péter",
  "Simon_Peyton_Jones",
  "Kathy_Pham",
  "Roberto_Pieraccini",
  "Keshav_Pingali",
  "Gordon_Plotkin",
  "Amir_Pnueli",
  "Willem_van_der_Poel",
  "Robin_Popplestone",
  "Cicely_Popplewell",
  "Emil_Post",
  "Jon_Postel",
  "Franco_Preparata",
  "William_H_Press",

  // R
  "Rapelang_Rabana",
  "Grzegorz_Rozenberg",
  "Michael_O_Rabin",
  "Dragomir_R_Radev",
  "T_V_Raman",
  "Brian_Randell",
  "Anders_P_Ravn",
  "Raj_Reddy",
  "David_P_Reed",
  "Trygve_Reenskaug",
  "John_C_Reynolds",
  "Joyce_K_Reynolds",
  "Reinder_van_de_Riet",
  "Bernard_Richards",
  "Martin_Richards",
  "Adam_Riese",
  "C_J_van_Rijsbergen",
  "Dennis_Ritchie",
  "Ron_Rivest",
  "Ken_Robinson",
  "Colette_Rolland",
  "John_Romero",
  "Azriel_Rosenfeld",
  "Douglas_T_Ross",
  "Guido_van_Rossum",
  "M_A_Rothman",
  "Winston_W_Royce",
  "Rudy_Rucker",
  "Steven_Rudich",
  "Jeff_Rulifson",
  "James_Rumbaugh",
  "Peter_Ružička",

  // S
  "George_Sadowsky",
  "Mehrnoosh_Sadrzadeh",
  "Umar_Saif",
  "Gerard_Salton",
  "Jean_E_Sammet",
  "Claude_Sammut",
  "Carl_Sassenrath",
  "Mahadev_Satyanarayanan",
  "Walter_Savitch",
  "Nitin_Saxena",
  "Jonathan_Schaeffer",
  "Wilhelm_Schickard",
  "Jürgen_Schmidhuber",
  "Steve_Schneider",
  "Bruce_Schneier",
  "Fred_B_Schneider",
  "Sarita_Schoenebeck",
  "Glenda_Schroeder",
  "Bernhard_Schölkopf",
  "Dana_Scott",
  "Michael_L_Scott",
  "Robert_Sedgewick",
  "Ravi_Sethi",
  "Nigel_Shadbolt",
  "Adi_Shamir",
  "Claude_Shannon",
  "David_E_Shaw",
  "Cliff_Shaw",
  "Scott_Shenker",
  "Shashi_Shekhar",
  "Ben_Shneiderman",
  "Edward_H_Shortliffe",
  "Daniel_Siewiorek",
  "Joseph_Sifakis",
  "Herbert_A_Simon",
  "Munindar_P_Singh",
  "Ramesh_Sitaraman",
  "Daniel_Sleator",
  "Aaron_Sloman",
  "Arne_Sølvberg",
  "Brian_Cantwell_Smith",
  "David_Canfield_Smith",
  "Steven_Spewak",
  "Carol_Spradling",
  "Robert_Sproull",
  "Rohini_Kesavan_Srihari",
  "Sargur_Srihari",
  "Maciej_Stachowiak",
  "Richard_Stallman",
  "Ronald_Stamper",
  "Thad_Starner",
  "Richard_E_Stearns",
  "Guy_L_Steele_Jr",
  "Thomas_Sterling",
  "Alexander_Stepanov",
  "W_Richard_Stevens",
  "Larry_Stockmeyer",
  "Salvatore_Stolfo",
  "Michael_Stonebraker",
  "Olaf_Storaasli",
  "Christopher_Strachey",
  "Volker_Strassen",
  "Bjarne_Stroustrup",
  "Madhu_Sudan",
  "Gerald_Jay_Sussman",
  "Bert_Sutherland",
  "Ivan_Sutherland",
  "Latanya_Sweeney",
  "Mario_Szegedy",

  // T
  "Parisa_Tabriz",
  "Roberto_Tamassia",
  "Andrew_S_Tanenbaum",
  "Austin_Tate",
  "Bernhard_Thalheim",
  "Éva_Tardos",
  "Gábor_Tardos",
  "Robert_Tarjan",
  "Valerie_Taylor",
  "Mario_Tchou",
  "Jaime_Teevan",
  "Shang_Hua_Teng",
  "Larry_Tesler",
  "Avie_Tevanian",
  "Charles_P_Thacker",
  "Daniel_Thalmann",
  "Ken_Thompson",
  "Simon_Thompson",
  "Sebastian_Thrun",
  "Walter_F_Tichy",
  "Seinosuke_Toda",
  "Chai_Keong_Toh",
  "Linus_Torvalds",
  "Leonardo_Torres_Quevedo",
  "Godfried_Toussaint",
  "Gloria_Townsend",
  "Edwin_E_Tozer",
  "Joseph_F_Traub",
  "John_V_Tucker",
  "John_Tukey",
  "Alan_Turing",
  "David_Turner",
  "Murray_Turoff",

  // U
  "Jeffrey_D_Ullman",

  // V
  "Leslie_Valiant",
  "Vladimir_Vapnik",
  "Moshe_Vardi",
  "Dorothy_Vaughan",
  "Bernard_Vauquois",
  "Umesh_Vazirani",
  "Manuela_M_Veloso",
  "Francois_Vernadat",
  "Richard_Veryard",
  "Sergiy_Vilkomir",
  "Paul_Vitanyi",
  "Andrew_Viterbi",
  "Jeffrey_Scott_Vitter",
  "Paul_Vixie",

  // W
  "Eiiti_Wada",
  "David_Wagner",
  "David_Waltz",
  "James_Z_Wang",
  "Steve_Ward",
  "Manfred_K_Warmuth",
  "David_H_D_Warren",
  "Kevin_Warwick",
  "Jan_Weglarz",
  "Philip_Wadler",
  "Peter_Wegner",
  "Joseph_Henry_Wegstein",
  "Peter_J_Weinberger",
  "Mark_Weiser",
  "Joseph_Weizenbaum",
  "David_Wheeler",
  "Franklin_H_Westervelt",
  "Steve_Whittaker",
  "Jennifer_Widom",
  "Gio_Wiederhold",
  "Norbert_Wiener",
  "Adriaan_van_Wijngaarden",
  "Mary_Allen_Wilkes",
  "Maurice_Vincent_Wilkes",
  "Yorick_Wilks",
  "James_H_Wilkinson",
  "Sophie_Wilson",
  "Shmuel_Winograd",
  "Terry_Winograd",
  "Patrick_Winston",
  "Niklaus_Wirth",
  "Neil_Wiseman",
  "Dennis_E_Wisnosky",
  "Stephen_Wolfram",
  "Mike_Woodger",
  "Philip_Woodward",
  "Beatrice_Helen_Worsley",
  "Steve_Wozniak",
  "Jie_Wu",
  "William_Wulf",

  // X
  "Mihalis_Yannakakis",
  "Andrew_Chi_Chih_Yao",
  "John_Yen",
  "Nobuo_Yoneda",
  "Edward_Yourdon",
  "Moti_Yung",

  // Y

  // Z
  "Lotfi_Zadeh",
  "Hans_Zantema",
  "Arif_Zaman",
  "Stanley_Zdonik",
  "Hussein_Zedan",
  "Shlomo_Zilberstein",
  "Jill_Zimmerman",
  "Konrad_Zuse",
];

export const getRandomComputerScientistName = () => {
  return names[Math.floor(Math.random() * names.length)];
};
