const artistsAndCities = [
    {
        artist: 'Miley Cyrus',
        country: 'United States',
    },
    {
        artist: 'FIFTY FIFTY',
        country: 'United Kingdom',
    },
    {
        artist: 'ROSALÍA',
        country: 'Spain',
    },
    {
        artist: 'PinkPantheress',
        country: 'United Kingdom',
    },
    {
        artist: 'Metro Boomin',
        country: 'United States',
    },
    {
        artist: 'David Kushner',
        country: 'United States',
    },
    {
        artist: 'KAROL G',
        country: 'Colombia',
    },
    {
        artist: 'Rema',
        country: 'Nigeria',
    },
    {
        artist: 'Taylor Swift',
        country: 'United States',
    },
    {
        artist: 'd4vd',
        country: 'United States',
    },
    {
        artist: 'David Guetta',
        country: 'France',
    },
    {
        artist: 'SZA',
        country: 'United States',
    },
    {
        artist: 'The Weeknd',
        country: 'Canada',
    },
    {
        artist: 'OneRepublic',
        country: 'United States',
    },
    {
        artist: 'Bizarrap',
        country: 'Argentina',
    },
    {
        artist: 'Stephen Sanchez',
        country: 'United States',
    },
    {
        artist: 'Tom Odell',
        country: 'United Kingdom',
    },
    {
        artist: 'Harry Styles',
        country: 'United Kingdom',
    },
    {
        artist: 'Bad Bunny',
        country: 'Puerto Rico',
    },
    {
        artist: 'Eminem',
        country: 'United States',
    },
    {
        artist: 'Coi Leray',
        country: 'United States',
    },
    {
        artist: 'RAYE',
        country: 'United Kingdom',
    },
    {
        artist: 'Drake',
        country: 'Canada',
    },
    {
        artist: 'Miguel',
        country: 'United States',
    },
    {
        artist: 'The Neighbourhood',
        country: 'United States',
    },
    {
        artist: 'Sam Smith',
        country: 'United Kingdom',
    },
    {
        artist: 'Ruth B.',
        country: 'Canada',
    },
    {
        artist: 'NewJeans',
        country: 'South Korea',
    },
    {
        artist: 'JVKE',
        country: 'United States',
    },
    {
        artist: 'Glass Animals',
        country: 'United Kingdom',
    },
    {
        artist: 'Manuel Turizo',
        country: 'Colombia',
    },
    {
        artist: 'Morgan Wallen',
        country: 'United States',
    },
    {
        artist: 'Billie Eilish',
        country: 'United States',
    },
    {
        artist: 'Meghan Trainor',
        country: 'United States',
    },
    {
        artist: 'Sabrina Carpenter',
        country: 'United States',
    },
    {
        artist: 'Ed Sheeran',
        country: 'United Kingdom',
    },
    {
        artist: 'Yandel',
        country: 'Puerto Rico',
    },
    {
        artist: 'Coldplay',
        country: 'United Kingdom',
    },
    {
        artist: 'Arctic Monkeys',
        country: 'United Kingdom',
    },
    {
        artist: 'Labrinth',
        country: 'United Kingdom',
    },
    {
        artist: 'One Direction',
        country: 'United Kingdom',
    },
    {
        artist: 'Lewis Capaldi',
        country: 'United Kingdom',
    },
    {
        artist: 'Bruno Mars',
        country: 'United States',
    },
    {
        artist: 'Post Malone',
        country: 'United States',
    },
    {
        artist: 'Justin Bieber',
        country: 'Canada',
    },
    {
        artist: 'Conan Gray',
        country: 'United States',
    },
    {
        artist: 'The Walters',
        country: 'United States',
    },
    {
        artist: 'Calvin Harris',
        country: 'United Kingdom',
    },
    {
        artist: 'Frank Ocean',
        country: 'United States',
    },
    {
        artist: 'Kanye West',
        country: 'United States',
    },
    {
        artist: 'Niall Horan',
        country: 'United Kingdom',
    },
    {
        artist: 'Linkin Park',
        country: 'United States',
    },
    {
        artist: 'Arcángel',
        country: 'Puerto Rico',
    },
    {
        artist: 'Central Cee',
        country: 'United Kingdom',
    },
    {
        artist: 'Elley Duhé',
        country: 'United States',
    },
    {
        artist: 'The Killers',
        country: 'United States',
    },
    {
        artist: 'James Arthur',
        country: 'United Kingdom',
    },
    {
        artist: 'The Chainsmokers',
        country: 'United States',
    },
    {
        artist: 'Keane',
        country: 'United Kingdom',
    },
    {
        artist: 'The Kid LAROI',
        country: 'Australia',
    },
    {
        artist: 'Twenty One Pilots',
        country: 'United States',
    },
    {
        artist: 'Avicii',
        country: 'Sweden',
    },
    {
        artist: 'Imagine Dragons',
        country: 'United States',
    },
    {
        artist: 'Olivia Rodrigo',
        country: 'United States',
    },
    {
        artist: 'Lost Frequencies',
        country: 'Belgium',
    },
    {
        artist: 'Doja Cat',
        country: 'United States',
    },
    {
        artist: 'Ariana Grande',
        country: 'United States',
    },
    {
        artist: 'John Legend',
        country: 'United States',
    },
    {
        artist: 'Måneskin',
        country: 'Italy',
    },
    {
        artist: 'Elton John',
        country: 'United Kingdom',
    },
    {
        artist: 'JISOO',
        country: 'South Korea',
    },
    {
        artist: 'Joji',
        country: 'United States',
    },
    {
        artist: 'Travis Scott',
        country: 'United States',
    },
    {
        artist: 'Shakira',
        country: 'Colombia',
    },
    {
        artist: 'Kendrick Lamar',
        country: 'United States',
    },
    {
        artist: 'Alec Benjamin',
        country: 'United States',
    },
    {
        artist: 'Rihanna',
        country: 'United States',
    },
    {
        artist: 'JAY-Z',
        country: 'United States',
    },
    {
        artist: 'Kate Bush',
        country: 'United Kingdom',
    },
    {
        artist: 'Adele',
        country: 'United Kingdom',
    },
    {
        artist: 'The White Stripes',
        country: 'United States',
    },
    {
        artist: 'Lady Gaga',
        country: 'United States',
    },
    {
        artist: 'Kali Uchis',
        country: 'United States',
    },
    {
        artist: 'Tame Impala',
        country: 'Australia',
    },
    {
        artist: 'Shawn Mendes',
        country: 'Canada',
    },
    {
        artist: 'Cris Mj',
        country: 'Chile',
    },
    {
        artist: 'Imanbek',
        country: 'Kazakhstan',
    },
    {
        artist: 'Gorillaz',
        country: 'United Kingdom',
    },
    {
        artist: 'DJ Snake',
        country: 'France',
    },
    {
        artist: 'Dua Lipa',
        country: 'United Kingdom',
    },
    {
        artist: 'Gesaffelstein',
        country: 'France',
    },
    {
        artist: 'Juice WRLD',
        country: 'United States',
    },
    {
        artist: 'Maroon 5',
        country: 'United States',
    },
    {
        artist: 'Paloma Faith',
        country: 'United Kingdom',
    },
    {
        artist: 'Nelly Furtado',
        country: 'Canada',
    },
    {
        artist: 'Childish Gambino',
        country: 'United States',
    },
    {
        artist: 'Vance Joy',
        country: 'Australia',
    },
    {
        artist: 'WALK THE MOON',
        country: 'United States',
    },
    {
        artist: 'Hozier',
        country: 'United Kingdom',
    },
    {
        artist: 'GAYLE',
        country: 'United States',
    },
    {
        artist: 'Evanescence',
        country: 'United States',
    },
    {
        artist: 'Lana Del Rey',
        country: 'United States',
    },
    {
        artist: 'Bryson Tiller',
        country: 'United States',
    },
    {
        artist: 'Tyler The Creator',
        country: 'United States',
    },
    {
        artist: 'Pitbull',
        country: 'United States',
    },
    {
        artist: 'Marshmello',
        country: 'United States',
    },
    {
        artist: 'Train',
        country: 'United States',
    },
    {
        artist: '50 Cent',
        country: 'United States',
    },
    {
        artist: 'Ice Spice',
        country: 'United States',
    },
    {
        artist: 'Jaymes Young',
        country: 'United States',
    },
    {
        artist: 'XXXTENTACION',
        country: 'United States',
    },
    {
        artist: 'Santana',
        country: 'United States',
    },
    {
        artist: 'Farruko',
        country: 'Puerto Rico',
    },
    {
        artist: 'Foster The People',
        country: 'United States',
    },
    {
        artist: 'Offset',
        country: 'United States',
    },
    {
        artist: 'Capital Cities',
        country: 'United States',
    },
    {
        artist: 'Wiz Khalifa',
        country: 'United States',
    },
    {
        artist: 'Lil Nas X',
        country: 'United States',
    },
    {
        artist: 'Tiësto',
        country: 'Netherlands',
    },
    {
        artist: 'Britney Spears',
        country: 'United States',
    },
    {
        artist: 'French Montana',
        country: 'United States',
    },
    {
        artist: 'Mark Ronson',
        country: 'United Kingdom',
    },
    {
        artist: 'Charlie Puth',
        country: 'United States',
    },
    {
        artist: 'girl in red',
        country: 'Norway',
    },
    {
        artist: 'Usher',
        country: 'United States',
    },
    {
        artist: 'Lukas Graham',
        country: 'Denmark',
    },
    {
        artist: '21 Savage',
        country: 'United States',
    },
    {
        artist: 'Blink-182',
        country: 'United States',
    },
    {
        artist: 'DNCE',
        country: 'United States',
    },
    {
        artist: 'Carly Rae Jepsen',
        country: 'Canada',
    },
    {
        artist: 'Macklemore & Ryan Lewis',
        country: 'United States',
    },
    {
        artist: 'Red Hot Chili Peppers',
        country: 'United States',
    },
    {
        artist: 'Powfu',
        country: 'Canada',
    },
    {
        artist: 'Rauw Alejandro',
        country: 'Puerto Rico',
    },
    {
        artist: 'Swedish House Mafia',
        country: 'Sweden',
    },
    {
        artist: 'BTS',
        country: 'South Korea',
    },
    {
        artist: 'Jack Harlow',
        country: 'United States',
    },
    {
        artist: 'Daddy Yankee',
        country: 'Puerto Rico',
    },
    {
        artist: 'Daft Punk',
        country: 'France',
    },
    {
        artist: 'The Game',
        country: 'United States',
    },
    {
        artist: 'Giveon',
        country: 'United States',
    },
    {
        artist: 'Outkast',
        country: 'United States',
    },
    {
        artist: 'Black Eyed Peas',
        country: 'United States',
    },
    {
        artist: 'Lauv',
        country: 'United States',
    },
    {
        artist: 'Backstreet Boys',
        country: 'United States',
    },
    {
        artist: 'P!nk',
        country: 'United States',
    },
    {
        artist: 'Tainy',
        country: 'Puerto Rico',
    },
    {
        artist: 'Selena Gomez',
        country: 'United States',
    },
    {
        artist: 'Selena Gomez & The Scene',
        country: 'United States',
    },
    {
        artist: 'Future',
        country: 'United States',
    },
    {
        artist: 'J. Cole',
        country: 'United States',
    },
    {
        artist: '24kGoldn',
        country: 'United States',
    },
    {
        artist: 'Sean Paul',
        country: 'Jamaica',
    },
    {
        artist: 'Kings of Leon',
        country: 'United States',
    },
    {
        artist: 'Akon',
        country: 'Senegal',
    },
    {
        artist: 'Gym Class Heroes',
        country: 'United States',
    },
    {
        artist: 'Roddy Ricch',
        country: 'United States',
    },
    {
        artist: 'Jimmy Eat World',
        country: 'United States',
    },
    {
        artist: 'Hoobastank',
        country: 'United States',
    },
    {
        artist: 'Timbaland',
        country: 'United States',
    },
    {
        artist: 'Kesha',
        country: 'United States',
    },
    {
        artist: 'Lil Uzi Vert',
        country: 'United States',
    },
    {
        artist: 'Lil Baby',
        country: 'United States',
    },
    {
        artist: 'Christina Perri',
        country: 'United States',
    },
    {
        artist: 'Lizzo',
        country: 'United States',
    },
    {
        artist: 'Kodaline',
        country: 'United Kingdom',
    },
    {
        artist: 'Camila Cabello',
        country: 'United States',
    },
    {
        artist: 'Snow Patrol',
        country: 'United Kingdom',
    },
    {
        artist: 'MKTO',
        country: 'United States',
    },
    {
        artist: 'Calum Scott',
        country: 'United Kingdom',
    },
    {
        artist: 'Luis Fonsi',
        country: 'Puerto Rico',
    },
    {
        artist: 'Florence + The Machine',
        country: 'United Kingdom',
    },
    {
        artist: 'Taio Cruz',
        country: 'United Kingdom',
    },
    {
        artist: 'BØRNS',
        country: 'United States',
    },
    {
        artist: 'Meek Mill',
        country: 'United States',
    },
    {
        artist: 'Pharrell Williams',
        country: 'United States',
    },
    {
        artist: 'Alicia Keys',
        country: 'United States',
    },
    {
        artist: 'Jason Mraz',
        country: 'United States',
    },
    {
        artist: 'Martin Garrix',
        country: 'Netherlands',
    },
    {
        artist: 'Bon Jovi',
        country: 'United States',
    },
    {
        artist: 'Ava Max',
        country: 'United States',
    },
    {
        artist: 'NF',
        country: 'United States',
    },
    {
        artist: 'MGMT',
        country: 'United States',
    },
    {
        artist: 'Lil Wayne',
        country: 'United States',
    },
    {
        artist: 'CKay',
        country: 'Nigeria',
    },
    {
        artist: 'Flo Rida',
        country: 'United States',
    },
    {
        artist: 'Lil Tecca',
        country: 'United States',
    },
    {
        artist: 'Polo G',
        country: 'United States',
    },
    {
        artist: 'Madison Beer',
        country: 'United States',
    },
    {
        artist: 'MAGIC!',
        country: 'Canada',
    },
    {
        artist: 'Milky Chance',
        country: 'Germany',
    },
    {
        artist: 'My Chemical Romance',
        country: 'United States',
    },
    {
        artist: 'Dr. Dre',
        country: 'United States',
    },
    {
        artist: 'WILLOW',
        country: 'United States',
    },
    {
        artist: 'Spice Girls',
        country: 'United Kingdom',
    },
    {
        artist: 'Pop Smoke',
        country: 'United States',
    },
    {
        artist: 'Khalid',
        country: 'United States',
    },
    {
        artist: 'Amy Winehouse',
        country: 'United Kingdom',
    },
    {
        artist: 'Carrie Underwood',
        country: 'United States',
    },
    {
        artist: 'American Authors',
        country: 'United States',
    },
    {
        artist: 'George Ezra',
        country: 'United Kingdom',
    },
    {
        artist: 'Lil Tjay',
        country: 'United States',
    },
    {
        artist: 'Sia',
        country: 'Australia',
    },
    {
        artist: 'Avril Lavigne',
        country: 'Canada',
    },
    {
        artist: 'Don Omar',
        country: 'Puerto Rico',
    },
    {
        artist: 'Katy Perry',
        country: 'United States',
    },
    {
        artist: 'Neon Trees',
        country: 'United States',
    },
    {
        artist: 'Alan Walker',
        country: 'Norway',
    },
    {
        artist: 'The Script',
        country: 'United Kingdom',
    },
    {
        artist: 'The Fray',
        country: 'United States',
    },
    {
        artist: 'Nickelback',
        country: 'Canada',
    },
    {
        artist: 'ZAYN',
        country: 'United Kingdom',
    },
    {
        artist: '3 Doors Down',
        country: 'United States',
    },
    {
        artist: 'Of Monsters and Men',
        country: 'Iceland',
    },
    {
        artist: 'Keyshia Cole',
        country: 'United States',
    },
    {
        artist: 'Playboi Carti',
        country: 'United States',
    },
    {
        artist: 'Becky G',
        country: 'United States',
    },
    {
        artist: 'Sheck Wes',
        country: 'United States',
    },
    {
        artist: 'LISA',
        country: 'Japan',
    },
    {
        artist: 'Axwell /\\ Ingrosso',
        country: 'Sweden',
    },
    {
        artist: 'Regard',
        country: 'United States',
    },
    {
        artist: 'Lorde',
        country: 'New Zealand',
    },
    {
        artist: 'Nicki Minaj',
        country: 'United States',
    },
    {
        artist: 'Franz Ferdinand',
        country: 'United Kingdom',
    },
    {
        artist: 'Zedd',
        country: 'Germany',
    },
    {
        artist: 'Amy Macdonald',
        country: 'United Kingdom',
    },
    {
        artist: 'Empire of the Sun',
        country: 'Australia',
    },
    {
        artist: 'Cardi B',
        country: 'United States',
    },
    {
        artist: 'Stromae',
        country: 'Belgium',
    },
    {
        artist: 'Green Day',
        country: 'United States',
    },
    {
        artist: 'Jessie J',
        country: 'United Kingdom',
    },
    {
        artist: 'Dean Lewis',
        country: 'Australia',
    },
    {
        artist: 'Justin Timberlake',
        country: 'United States',
    },
    {
        artist: 'OMI',
        country: 'Jamaica',
    },
    {
        artist: 'Demi Lovato',
        country: 'United States',
    },
    {
        artist: 'Beyoncé',
        country: 'United States',
    },
    {
        artist: 'Nelly',
        country: 'United States',
    },
    {
        artist: 'Jay Sean',
        country: 'United Kingdom',
    },
    {
        artist: 'A Boogie Wit da Hoodie',
        country: 'United States',
    },
    {
        artist: 'Owl City',
        country: 'United States',
    },
    {
        artist: 'The Wanted',
        country: 'United Kingdom',
    },
    {
        artist: 'Joel Corry',
        country: 'United Kingdom',
    },
    {
        artist: "Plain White T's",
        country: 'United States',
    },
    {
        artist: 'The Lumineers',
        country: 'United States',
    },
    {
        artist: 'James Blunt',
        country: 'United Kingdom',
    },
    {
        artist: 'Mike Posner',
        country: 'United States',
    },
    {
        artist: 'Dynoro',
        country: 'Lithuania',
    },
    {
        artist: 'Weezer',
        country: 'United States',
    },
    {
        artist: 'Shaggy',
        country: 'Jamaica',
    },
    {
        artist: 'R. City',
        country: 'United States',
    },
    {
        artist: 'Ellie Goulding',
        country: 'United Kingdom',
    },
    {
        artist: 'Zara Larsson',
        country: 'Sweden',
    },
    {
        artist: 'Jennifer Lopez',
        country: 'United States',
    },
    {
        artist: 'Corinne Bailey Rae',
        country: 'United Kingdom',
    },
    {
        artist: 'Majestic',
        country: 'United Kingdom',
    },
    {
        artist: 'SAINt JHN',
        country: 'Guyana',
    },
    {
        artist: 'Alessia Cara',
        country: 'Canada',
    },
    {
        artist: 'will.i.am',
        country: 'United States',
    },
    {
        artist: 'Paramore',
        country: 'United States',
    },
    {
        artist: 'Fall Out Boy',
        country: 'United States',
    },
    {
        artist: 'Foo Fighters',
        country: 'United States',
    },
    {
        artist: 'GROUPLOVE',
        country: 'United States',
    },
    {
        artist: 't.A.T.u.',
        country: 'Russia',
    },
    {
        artist: 'Nico & Vinz',
        country: 'Norway',
    },
    {
        artist: 'Estelle',
        country: 'United Kingdom',
    },
    {
        artist: 'Sean Kingston',
        country: 'Jamaica',
    },
    {
        artist: 'Nadin Amizah',
        country: 'Indonesia',
    },
    {
        artist: 'Gnarls Barkley',
        country: 'United States',
    },
    {
        artist: 'Toploader',
        country: 'United Kingdom',
    },
    {
        artist: 'Piso 21',
        country: 'Colombia',
    },
    {
        artist: 'Trevor Daniel',
        country: 'United States',
    },
    {
        artist: 'Chris Brown',
        country: 'United States',
    },
    {
        artist: 'Maluma',
        country: 'Colombia',
    },
    {
        artist: 'G-Eazy',
        country: 'United States',
    },
    {
        artist: 'JP Saxe',
        country: 'Canada',
    },
    {
        artist: 'Kygo',
        country: 'Norway',
    },
    {
        artist: 'Soulja Boy',
        country: 'United States',
    },
    {
        artist: 'Audioslave',
        country: 'United States',
    },
    {
        artist: 'Dave',
        country: 'Netherlands',
    },
    {
        artist: 'Rixton',
        country: 'United Kingdom',
    },
    {
        artist: 'THE ANXIETY',
        country: 'United States',
    },
    {
        artist: 'M83',
        country: 'France',
    },
    {
        artist: 'Skillet',
        country: 'United States',
    },
    {
        artist: 'M.I.A.',
        country: 'United Kingdom',
    },
    {
        artist: 'DaBaby',
        country: 'United States',
    },
    {
        artist: 'Limp Bizkit',
        country: 'United States',
    },
    {
        artist: 'Lil Peep',
        country: 'United States',
    },
    {
        artist: "Destiny's Child",
        country: 'United States',
    },
    {
        artist: 'Ne-Yo',
        country: 'United States',
    },
    {
        artist: 'Robin Schulz',
        country: 'Germany',
    },
    {
        artist: 'Muse',
        country: 'United Kingdom',
    },
    {
        artist: 'Rae Sremmurd',
        country: 'United States',
    },
    {
        artist: 'Kungs',
        country: 'France',
    },
    {
        artist: 'Pamungkas',
        country: 'Indonesia',
    },
    {
        artist: 'Mr. Probz',
        country: 'Netherlands',
    },
    {
        artist: 'Snoop Dogg',
        country: 'United States',
    },
    {
        artist: 'Vanessa Carlton',
        country: 'United States',
    },
    {
        artist: 'Jet',
        country: 'Australia',
    },
    {
        artist: 'Masked Wolf',
        country: 'Australia',
    },
    {
        artist: 'Alice Deejay',
        country: 'Netherlands',
    },
    {
        artist: 'Topic',
        country: 'Germany',
    },
    {
        artist: 'Rob $tone',
        country: 'United States',
    },
    {
        artist: 'ScHoolboy Q',
        country: 'United States',
    },
    {
        artist: 'All Time Low',
        country: 'United States',
    },
    {
        artist: 'Incubus',
        country: 'United States',
    },
    {
        artist: 'Mary J. Blige',
        country: 'United States',
    },
    {
        artist: 'Macklemore',
        country: 'United States',
    },
    {
        artist: 'Jamie Miller',
        country: 'United States',
    },
    {
        artist: 'gnash',
        country: 'United States',
    },
    {
        artist: 'The 1975',
        country: 'United Kingdom',
    },
    {
        artist: 'Modjo',
        country: 'France',
    },
    {
        artist: 'Juicy Luicy',
        country: 'Indonesia',
    },
    {
        artist: 'Major Lazer',
        country: 'Jamaica',
    },
    {
        artist: 'Oliver Tree',
        country: 'United States',
    },
    {
        artist: 'John Newman',
        country: 'United Kingdom',
    },
    {
        artist: 'Lou Bega',
        country: 'Germany',
    },
    {
        artist: 'Cassie',
        country: 'United States',
    },
    {
        artist: 'MEDUZA',
        country: 'Italy',
    },
    {
        artist: 'Iyaz',
        country: 'British Virgin Islands',
    },
    {
        artist: 'Arizona Zervas',
        country: 'United States',
    },
    {
        artist: 'MK',
        country: 'United States',
    },
    {
        artist: 'Nio Garcia',
        country: 'Puerto Rico',
    },
    {
        artist: 'Thirty Seconds To Mars',
        country: 'United States',
    },
    {
        artist: 'Natasha Bedingfield',
        country: 'United Kingdom',
    },
    {
        artist: 'fun.',
        country: 'United States',
    },
    {
        artist: 'Fifth Harmony',
        country: 'United States',
    },
    {
        artist: 'Logic',
        country: 'United States',
    },
    {
        artist: 'Dominic Fike',
        country: 'United States',
    },
    {
        artist: 'Aqua',
        country: 'Denmark',
    },
    {
        artist: 'Leona Lewis',
        country: 'United Kingdom',
    },
    {
        artist: 'Robin Thicke',
        country: 'United States',
    },
    {
        artist: 'Loud Luxury',
        country: 'Canada',
    },
    {
        artist: 'T-Pain',
        country: 'United States',
    },
    {
        artist: 'Eric Prydz',
        country: 'Sweden',
    },
    {
        artist: 'Kylie Minogue',
        country: 'Australia',
    },
    {
        artist: 'Tones And I',
        country: 'Australia',
    },
    {
        artist: 'Mabel',
        country: 'United Kingdom',
    },
    {
        artist: 'Norah Jones',
        country: 'United States',
    },
    {
        artist: 'benny blanco',
        country: 'United States',
    },
    {
        artist: 'Anitta',
        country: 'Brazil',
    },
    {
        artist: 'A$AP Rocky',
        country: 'United States',
    },
    {
        artist: 'The Red Jumpsuit Apparatus',
        country: 'United States',
    },
    {
        artist: 'Alok',
        country: 'Brazil',
    },
    {
        artist: 'Madonna',
        country: 'United States',
    },
    {
        artist: 'Surf Mesa',
        country: 'United States',
    },
    {
        artist: 'Sum 41',
        country: 'Canada',
    },
    {
        artist: 'Eve',
        country: 'United States',
    },
    {
        artist: 'Hailee Steinfeld',
        country: 'United States',
    },
    {
        artist: 'T.I.',
        country: 'United States',
    },
    {
        artist: 'Anne-Marie',
        country: 'France',
    },
    {
        artist: 'Russ',
        country: 'United States',
    },
    {
        artist: 'Dennis Lloyd',
        country: 'Israel',
    },
    {
        artist: 'Kehlani',
        country: 'United States',
    },
    {
        artist: 'Waka Flocka Flame',
        country: 'United States',
    },
    {
        artist: 'Jeremih',
        country: 'United States',
    },
    {
        artist: 'Jonas Blue',
        country: 'United Kingdom',
    },
    {
        artist: 'Bastille',
        country: 'United Kingdom',
    },
    {
        artist: 'Mustard',
        country: 'United States',
    },
    {
        artist: 'X Ambassadors',
        country: 'United States',
    },
    {
        artist: 'The Strokes',
        country: 'United States',
    },
    {
        artist: 'Galantis',
        country: 'Sweden',
    },
    {
        artist: 'Jawsh 685',
        country: 'New Zealand',
    },
    {
        artist: 'Tory Lanez',
        country: 'Canada',
    },
    {
        artist: 'Anuel AA',
        country: 'Puerto Rico',
    },
    {
        artist: 'Alien Ant Farm',
        country: 'United States',
    },
    {
        artist: 'Migos',
        country: 'United States',
    },
    {
        artist: 'Kelly Clarkson',
        country: 'United States',
    },
    {
        artist: 'Surfaces',
        country: 'United States',
    },
    {
        artist: 'Jason Derulo',
        country: 'United States',
    },
    {
        artist: 'THE SCOTTS',
        country: 'United States',
    },
    {
        artist: 'Ozuna',
        country: 'Puerto Rico',
    },
    {
        artist: 'DJ Khaled',
        country: 'United States',
    },
    {
        artist: 'Halsey',
        country: 'United States',
    },
    {
        artist: 'Kodak Black',
        country: 'United States',
    },
    {
        artist: 'Fetty Wap',
        country: 'United States',
    },
    {
        artist: 'B.o.B',
        country: 'United States',
    },
    {
        artist: 'Daniel Powter',
        country: 'Canada',
    },
    {
        artist: 'U2',
        country: 'United Kingdom',
    },
    {
        artist: 'Jack Johnson',
        country: 'Hawaii',
    },
    {
        artist: 'Lil Mosey',
        country: 'United States',
    },
    {
        artist: 'Alex Gaudino',
        country: 'Italy',
    },
    {
        artist: 'Tove Lo',
        country: 'Sweden',
    },
    {
        artist: 'Big Sean',
        country: 'United States',
    },
    {
        artist: 'Three Days Grace',
        country: 'Canada',
    },
    {
        artist: 'Guru Josh Project',
        country: 'United Kingdom',
    },
    {
        artist: "Gigi D'Agostino",
        country: 'Italy',
    },
    {
        artist: 'Disclosure',
        country: 'United Kingdom',
    },
    {
        artist: 'Mario',
        country: 'United States',
    },
    {
        artist: 'Rascal Flatts',
        country: 'United States',
    },
    {
        artist: 'Far East Movement',
        country: 'United States',
    },
    {
        artist: 'Alex & Sierra',
        country: 'United States',
    },
    {
        artist: 'Bebe Rexha',
        country: 'United States',
    },
    {
        artist: 'J Balvin',
        country: 'Colombia',
    },
    {
        artist: 'Bazzi',
        country: 'United States',
    },
    {
        artist: 'The Kooks',
        country: 'United Kingdom',
    },
    {
        artist: 'Finger Eleven',
        country: 'Canada',
    },
    {
        artist: 'A$AP Ferg',
        country: 'United States',
    },
    {
        artist: 'Clean Bandit',
        country: 'United Kingdom',
    },
    {
        artist: 'AWOLNATION',
        country: 'United States',
    },
    {
        artist: 'Azealia Banks',
        country: 'United States',
    },
    {
        artist: 'Little Mix',
        country: 'United Kingdom',
    },
    {
        artist: 'Lunay',
        country: 'Puerto Rico',
    },
    {
        artist: 'Eric Church',
        country: 'United States',
    },
    {
        artist: 'Fountains Of Wayne',
        country: 'United States',
    },
    {
        artist: 'Olly Murs',
        country: 'United Kingdom',
    },
    {
        artist: 'The Calling',
        country: 'United States',
    },
    {
        artist: 'Nicky Jam',
        country: 'Puerto Rico',
    },
    {
        artist: 'Lifehouse',
        country: 'United States',
    },
    {
        artist: 'Paulo Londra',
        country: 'Argentina',
    },
    {
        artist: 'Felix Jaehn',
        country: 'Germany',
    },
    {
        artist: 'Kid Rock',
        country: 'United States',
    },
    {
        artist: 'Myke Towers',
        country: 'Puerto Rico',
    },
    {
        artist: 'GANGGA',
        country: 'Indonesia',
    },
    {
        artist: 'alt-J',
        country: 'United Kingdom',
    },
    {
        artist: 'Bella Poarch',
        country: 'United States',
    },
    {
        artist: 'Echosmith',
        country: 'United States',
    },
    {
        artist: 'Jason Aldean',
        country: 'United States',
    },
    {
        artist: 'Ashanti',
        country: 'United States',
    },
    {
        artist: 'John Mayer',
        country: 'United States',
    },
    {
        artist: 'The xx',
        country: 'United Kingdom',
    },
    {
        artist: 'Juanes',
        country: 'Colombia',
    },
    {
        artist: 'BlocBoy JB',
        country: 'United States',
    },
    {
        artist: 'Sara Bareilles',
        country: 'United States',
    },
    {
        artist: 'D12',
        country: 'United States',
    },
    {
        artist: 'Lady A',
        country: 'United States',
    },
    {
        artist: 'Mariah Carey',
        country: 'United States',
    },
    {
        artist: 'LMFAO',
        country: 'United States',
    },
    {
        artist: 'Lilly Wood and The Prick',
        country: 'France',
    },
    {
        artist: '5 Seconds of Summer',
        country: 'Australia',
    },
    {
        artist: 'Daya',
        country: 'United States',
    },
    {
        artist: 'KT Tunstall',
        country: 'United Kingdom',
    },
    {
        artist: 'Baby Bash',
        country: 'United States',
    },
    {
        artist: 'Wheatus',
        country: 'United States',
    },
    {
        artist: 'Dido',
        country: 'United Kingdom',
    },
    {
        artist: 'Rudimental',
        country: 'United Kingdom',
    },
    {
        artist: 'Ella Mai',
        country: 'United Kingdom',
    },
    {
        artist: 'Two Door Cinema Club',
        country: 'United Kingdom',
    },
    {
        artist: 'Fat Joe',
        country: 'United States',
    },
    {
        artist: 'Jack Ü',
        country: 'United States',
    },
    {
        artist: 'Tinashe',
        country: 'United States',
    },
    {
        artist: 'Pink Sweat$',
        country: 'United States',
    },
    {
        artist: 'Saweetie',
        country: 'United States',
    },
    {
        artist: 'Travie McCoy',
        country: 'United States',
    },
    {
        artist: 'Trey Songz',
        country: 'United States',
    },
    {
        artist: 'Colbie Caillat',
        country: 'United States',
    },
    {
        artist: 'Crazy Town',
        country: 'United States',
    },
    {
        artist: 'Aminé',
        country: 'United States',
    },
    {
        artist: 'Kardinal Offishall',
        country: 'Canada',
    },
    {
        artist: 'The Pussycat Dolls',
        country: 'United States',
    },
    {
        artist: 'dhruv',
        country: 'United Kingdom',
    },
    {
        artist: 'Christina Aguilera',
        country: 'United States',
    },
    {
        artist: 'MIKA',
        country: 'United Kingdom',
    },
    {
        artist: 'Trapt',
        country: 'Canada',
    },
    {
        artist: 'Alesso',
        country: 'Sweden',
    },
    {
        artist: 'Busta Rhymes',
        country: 'United States',
    },
    {
        artist: 'Tom Walker',
        country: 'United Kingdom',
    },
    {
        artist: 'Internet Money',
        country: 'United States',
    },
    {
        artist: 'James Bay',
        country: 'United Kingdom',
    },
    {
        artist: 'FINNEAS',
        country: 'United States',
    },
    {
        artist: 'Alexandra Stan',
        country: 'Romania',
    },
    {
        artist: 'Route 94',
        country: 'United Kingdom',
    },
    {
        artist: 'Jordin Sparks',
        country: 'United States',
    },
    {
        artist: 'MARINA',
        country: 'United Kingdom',
    },
    {
        artist: 'Fort Minor',
        country: 'United States',
    },
    {
        artist: 'NLE Choppa',
        country: 'United States',
    },
    {
        artist: 'Dan + Shay',
        country: 'United States',
    },
    {
        artist: 'James TW',
        country: 'United Kingdom',
    },
    {
        artist: 'DMX',
        country: 'United States',
    },
    {
        artist: 'Lloyd',
        country: 'United States',
    },
    {
        artist: 'Vampire Weekend',
        country: 'United States',
    },
    {
        artist: 'La Roux',
        country: 'United Kingdom',
    },
    {
        artist: 'Jonas Brothers',
        country: 'United States',
    },
    {
        artist: 'Kid Cudi',
        country: 'United States',
    },
    {
        artist: 'blackbear',
        country: 'United States',
    },
    {
        artist: 'Michael Bublé',
        country: 'Canada',
    },
    {
        artist: 'Uncle Kracker',
        country: 'United States',
    },
    {
        artist: 'Creed',
        country: 'United States',
    },
    {
        artist: 'Phillip Phillips',
        country: 'United States',
    },
    {
        artist: 'Bobby Shmurda',
        country: 'United States',
    },
    {
        artist: 'Astrid S',
        country: 'Norway',
    },
    {
        artist: 'Diddy',
        country: 'United States',
    },
    {
        artist: 'Years & Years',
        country: 'United Kingdom',
    },
    {
        artist: 'ROSÉ',
        country: 'South Korea',
    },
    {
        artist: 'Sech',
        country: 'Panama',
    },
    {
        artist: 'Lyodra',
        country: 'Indonesia',
    },
    {
        artist: 'Puddle Of Mudd',
        country: 'United States',
    },
    {
        artist: 'Birdy',
        country: 'United Kingdom',
    },
    {
        artist: 'Bon Iver',
        country: 'United States',
    },
    {
        artist: 'Tyga',
        country: 'United States',
    },
    {
        artist: 'JoJo',
        country: 'United States',
    },
    {
        artist: 'Cage The Elephant',
        country: 'United States',
    },
    {
        artist: 'Burak Yeter',
        country: 'Netherlands',
    },
    {
        artist: 'CJ',
        country: 'United States',
    },
    {
        artist: 'Sofía Reyes',
        country: 'Mexico',
    },
    {
        artist: 'Craig David',
        country: 'United Kingdom',
    },
    {
        artist: 'Snakehips',
        country: 'United Kingdom',
    },
    {
        artist: 'The Vamps',
        country: 'United Kingdom',
    },
    {
        artist: 'Lonestar',
        country: 'United States',
    },
    {
        artist: 'Toby Keith',
        country: 'United States',
    },
    {
        artist: 'Machine Gun Kelly',
        country: 'United States',
    },
    {
        artist: 'Skrillex',
        country: 'United States',
    },
    {
        artist: 'Jesse McCartney',
        country: 'United States',
    },
    {
        artist: 'Young Money',
        country: 'United States',
    },
    {
        artist: 'Madcon',
        country: 'Norway',
    },
    {
        artist: 'Fergie',
        country: 'United States',
    },
    {
        artist: 'Megan Thee Stallion',
        country: 'United States',
    },
    {
        artist: 'Pia Mia',
        country: 'United States',
    },
    {
        artist: 'Mac Miller',
        country: 'United States',
    },
    {
        artist: 'iann dior',
        country: 'United States',
    },
    {
        artist: '6ix9ine',
        country: 'United States',
    },
    {
        artist: 'Gwen Stefani',
        country: 'United States',
    },
    {
        artist: 'KYLE',
        country: 'United States',
    },
    {
        artist: 'Passenger',
        country: 'United Kingdom',
    },
    {
        artist: 'Rich The Kid',
        country: 'United States',
    },
    {
        artist: 'Darude',
        country: 'Finland',
    },
    {
        artist: 'Twista',
        country: 'United States',
    },
    {
        artist: 'Lily Allen',
        country: 'United Kingdom',
    },
    {
        artist: 'Alvaro Soler',
        country: 'Spain',
    },
    {
        artist: 'Klangkarussell',
        country: 'Austria',
    },
    {
        artist: 'Oasis',
        country: 'United Kingdom',
    },
    {
        artist: 'Mike Perry',
        country: 'Sweden',
    },
    {
        artist: 'Lupe Fiasco',
        country: 'United States',
    },
    {
        artist: 'Sisqo',
        country: 'United States',
    },
    {
        artist: 'Hot Chelle Rae',
        country: 'United States',
    },
    {
        artist: '2 Chainz',
        country: 'United States',
    },
    {
        artist: 'P.O.D.',
        country: 'United States',
    },
    {
        artist: 'Weeekly',
        country: 'South Korea',
    },
    {
        artist: 'Lenny Kravitz',
        country: 'United States',
    },
    {
        artist: 'Maggie Rogers',
        country: 'United States',
    },
    {
        artist: 'Crazy Frog',
        country: 'Germany',
    },
    {
        artist: 'Enrique Iglesias',
        country: 'Spain',
    },
    {
        artist: 'The Corrs',
        country: 'United Kingdom',
    },
    {
        artist: 'James Morrison',
        country: 'United Kingdom',
    },
    {
        artist: 'Robbie Williams',
        country: 'United Kingdom',
    },
    {
        artist: 'LeAnn Rimes',
        country: 'United States',
    },
    {
        artist: 'Stereophonics',
        country: 'United Kingdom',
    },
    {
        artist: '3OH!3',
        country: 'United States',
    },
    {
        artist: 'Iggy Azalea',
        country: 'United States',
    },
    {
        artist: 'Lil Dicky',
        country: 'United States',
    },
    {
        artist: 'Bingo Players',
        country: 'Netherlands',
    },
    {
        artist: 'Missy Elliott',
        country: 'United States',
    },
    {
        artist: 'The All-American Rejects',
        country: 'United States',
    },
    {
        artist: 'United States Georgia Line',
        country: 'United States',
    },
    {
        artist: 'Toni Braxton',
        country: 'United States',
    },
    {
        artist: 'The Darkness',
        country: 'United Kingdom',
    },
    {
        artist: 'Mario Winans',
        country: 'United States',
    },
    {
        artist: 'Icona Pop',
        country: 'Sweden',
    },
    {
        artist: 'Panic! At The Disco',
        country: 'United States',
    },
    {
        artist: 'Andy Grammer',
        country: 'United States',
    },
    {
        artist: 'Jay Rock',
        country: 'United States',
    },
    {
        artist: 'Good Charlotte',
        country: 'United States',
    },
    {
        artist: 'Tim McGraw',
        country: 'United States',
    },
    {
        artist: 'Duffy',
        country: 'United Kingdom',
    },
    {
        artist: 'Normani',
        country: 'United States',
    },
    {
        artist: 'Westlife',
        country: 'United Kingdom',
    },
    {
        artist: 'Desiigner',
        country: 'United States',
    },
    {
        artist: 'Omarion',
        country: 'United States',
    },
    {
        artist: 'Bridgit Mendler',
        country: 'United States',
    },
    {
        artist: 'Chamillionaire',
        country: 'United States',
    },
    {
        artist: 'Shinedown',
        country: 'United States',
    },
    {
        artist: 'JP Cooper',
        country: 'United Kingdom',
    },
    {
        artist: 'Kid Ink',
        country: 'United States',
    },
    {
        artist: 'Jamelia',
        country: 'United Kingdom',
    },
    {
        artist: 'Armin van Buuren',
        country: 'Netherlands',
    },
    {
        artist: 'Kevin Lyttle',
        country: 'Saint Vincent and The Grenadines',
    },
    {
        artist: 'Cobra Starship',
        country: 'United States',
    },
    {
        artist: 'Kevin Gates',
        country: 'United States',
    },
    {
        artist: 'Duncan Laurence',
        country: 'Netherlands',
    },
    {
        artist: 'Ramz',
        country: 'United Kingdom',
    },
    {
        artist: 'Nick Jonas',
        country: 'United States',
    },
    {
        artist: 'Diddy - Dirty Money',
        country: 'United States',
    },
    {
        artist: 'StarBoi3',
        country: 'United States',
    },
    {
        artist: 'Blu Cantrell',
        country: 'United States',
    },
    {
        artist: 'Ardhito Pramono',
        country: 'Indonesia',
    },
    {
        artist: 'Aloe Blacc',
        country: 'United States',
    },
    {
        artist: 'The Rasmus',
        country: 'Finland',
    },
    {
        artist: 'Kaleb J',
        country: 'Indonesia',
    },
    {
        artist: 'Sezairi',
        country: 'Singapore',
    },
    {
        artist: 'AJ Tracey',
        country: 'United Kingdom',
    },
    {
        artist: 'The Chicks',
        country: 'United States',
    },
    {
        artist: 'Paolo Nutini',
        country: 'United Kingdom',
    },
    {
        artist: 'Flipp Dinero',
        country: 'United States',
    },
    {
        artist: 'Mumford & Sons',
        country: 'United Kingdom',
    },
    {
        artist: 'Freya Ridings',
        country: 'United Kingdom',
    },
    {
        artist: 'Lil Jon & The East Side Boyz',
        country: 'United States',
    },
    {
        artist: 'Yeah Yeah Yeahs',
        country: 'United States',
    },
    {
        artist: 'Nina Sky',
        country: 'United States',
    },
    {
        artist: 'The Notorious B.I.G.',
        country: 'United States',
    },
    {
        artist: 'Grimes',
        country: 'Canada',
    },
    {
        artist: 'Asaf Avidan',
        country: 'Israel',
    },
    {
        artist: 'GABRIELLE',
        country: 'United Kingdom',
    },
    {
        artist: 'Joel Adams',
        country: 'Australia',
    },
    {
        artist: 'Chingy',
        country: 'United States',
    },
    {
        artist: 'Bob Sinclar',
        country: 'France',
    },
    {
        artist: 'Martin Jensen',
        country: 'Denmark',
    },
    {
        artist: 'The Raconteurs',
        country: 'United States',
    },
    {
        artist: 'Liam Payne',
        country: 'United Kingdom',
    },
    {
        artist: 'Petit Biscuit',
        country: 'France',
    },
    {
        artist: 'SAYGRACE',
        country: 'Australia',
    },
    {
        artist: 'Michael Jackson',
        country: 'United States',
    },
    {
        artist: 'Nine Days',
        country: 'United States',
    },
    {
        artist: 'Jon Bellion',
        country: 'United States',
    },
    {
        artist: 'Afroman',
        country: 'United States',
    },
    {
        artist: '*NSYNC',
        country: 'United States',
    },
    {
        artist: 'September',
        country: 'Sweden',
    },
    {
        artist: 'Ginuwine',
        country: 'United States',
    },
    {
        artist: 'O-Zone',
        country: 'Moldova',
    },
    {
        artist: 'Oliver Heldens',
        country: 'Netherlands',
    },
    {
        artist: '2Pac',
        country: 'United States',
    },
    {
        artist: 'Ciara',
        country: 'United States',
    },
    {
        artist: 'Duke Dumont',
        country: 'United Kingdom',
    },
    {
        artist: 'Smash Mouth',
        country: 'United States',
    },
    {
        artist: 'Shontelle',
        country: 'Barbados',
    },
    {
        artist: 'Fabolous',
        country: 'United States',
    },
    {
        artist: 'Bad Meets Evil',
        country: 'United States',
    },
    {
        artist: 'Kelis',
        country: 'United States',
    },
    {
        artist: 'Junior Senior',
        country: 'Denmark',
    },
    {
        artist: 'Ludacris',
        country: 'United States',
    },
    {
        artist: 'Sam Feldt',
        country: 'Netherlands',
    },
    {
        artist: 'Jeezy',
        country: 'United States',
    },
    {
        artist: 'Aaliyah',
        country: 'United States',
    },
    {
        artist: 'Ayo & Teo',
        country: 'United States',
    },
    {
        artist: 'Metro Station',
        country: 'United States',
    },
    {
        artist: 'Travis',
        country: 'United Kingdom',
    },
    {
        artist: 'Lil Jon',
        country: 'United States',
    },
    {
        artist: 'Edward Maya',
        country: 'Romania',
    },
    {
        artist: 'Young Thug',
        country: 'United States',
    },
    {
        artist: 'Matchbox Twenty',
        country: 'United States',
    },
    {
        artist: 'Basshunter',
        country: 'Sweden',
    },
    {
        artist: 'Spiderbait',
        country: 'Australia',
    },
    {
        artist: 'Jamie Foxx',
        country: 'United States',
    },
    {
        artist: 'Faith Hill',
        country: 'United States',
    },
    {
        artist: 'David Archuleta',
        country: 'United States',
    },
    {
        artist: 'Dizzee Rascal',
        country: 'United Kingdom',
    },
    {
        artist: 'Sigala',
        country: 'United Kingdom',
    },
    {
        artist: 'Secondhand Serenade',
        country: 'United States',
    },
    {
        artist: 'Deorro',
        country: 'United States',
    },
    {
        artist: 'Lee Ann Womack',
        country: 'United States',
    },
    {
        artist: 'Joe',
        country: 'United States',
    },
    {
        artist: 'Terror Squad',
        country: 'United States',
    },
    {
        artist: 'Ida Corr',
        country: 'Denmark',
    },
    {
        artist: 'Bow Wow',
        country: 'United States',
    },
    {
        artist: 'Mahalini',
        country: 'Indonesia',
    },
    {
        artist: 'Foals',
        country: 'United Kingdom',
    },
    {
        artist: 'Emeli Sandé',
        country: 'United Kingdom',
    },
    {
        artist: 'Sebastian Ingrosso',
        country: 'Sweden',
    },
    {
        artist: 'Tom Jones',
        country: 'United Kingdom',
    },
    {
        artist: 'Lasgo',
        country: 'Belgium',
    },
    {
        artist: 'Passion Pit',
        country: 'United States',
    },
    {
        artist: 'Cali Swag District',
        country: 'United States',
    },
    {
        artist: 'Las Ketchup',
        country: 'Spain',
    },
    {
        artist: 'Larissa Lambert',
        country: 'Australia',
    },
    {
        artist: 'Jagged Edge',
        country: 'United States',
    },
    {
        artist: 'Jax Jones',
        country: 'United Kingdom',
    },
    {
        artist: 'Misellia',
        country: 'Indonesia',
    },
    {
        artist: 'Razorlight',
        country: 'United Kingdom',
    },
    {
        artist: 'YG',
        country: 'United States',
    },
    {
        artist: 'Diskoria',
        country: 'Indonesia',
    },
    {
        artist: 'FRENSHIP',
        country: 'United States',
    },
    {
        artist: 'Cheryl',
        country: 'United Kingdom',
    },
    {
        artist: 'MØ',
        country: 'Denmark',
    },
    {
        artist: 'Kasabian',
        country: 'United Kingdom',
    },
    {
        artist: 'Klaxons',
        country: 'United Kingdom',
    },
    {
        artist: 'DJ Sammy',
        country: 'Spain',
    },
    {
        artist: 'Chad Kroeger',
        country: 'Canada',
    },
    {
        artist: 'Kiesza',
        country: 'Canada',
    },
    {
        artist: 'Purple Disco Machine',
        country: 'Germany',
    },
    {
        artist: 'Plies',
        country: 'United States',
    },
    {
        artist: 'Staind',
        country: 'United States',
    },
    {
        artist: 'Yung Joc',
        country: 'United States',
    },
    {
        artist: 'Russ Millions',
        country: 'United Kingdom',
    },
    {
        artist: 'Kevin Rudolf',
        country: 'United States',
    },
    {
        artist: 'Jamiroquai',
        country: 'United Kingdom',
    },
    {
        artist: 'The Shapeshifters',
        country: 'United Kingdom',
    },
    {
        artist: 'Budi Doremi',
        country: 'Indonesia',
    },
    {
        artist: 'Shouse',
        country: 'Australia',
    },
    {
        artist: 'Third Eye Blind',
        country: 'United States',
    },
    {
        artist: 'Wayne Wonder',
        country: 'Jamaica',
    },
    {
        artist: 'Gavin DeGraw',
        country: 'United States',
    },
    {
        artist: 'Dermot Kennedy',
        country: 'United Kingdom',
    },
    {
        artist: 'Take That',
        country: 'United Kingdom',
    },
    {
        artist: 'Yo Gotti',
        country: 'United States',
    },
    {
        artist: 'Agnes',
        country: 'Sweden',
    },
    {
        artist: 'Benny Benassi',
        country: 'Italy',
    },
    {
        artist: 'Michael Franti & Spearhead',
        country: 'United States',
    },
    {
        artist: 'Scouting For Girls',
        country: 'United Kingdom',
    },
    {
        artist: 'Bobby V.',
        country: 'United States',
    },
    {
        artist: 'Natalie La Rose',
        country: 'Netherlands',
    },
    {
        artist: 'Sugarland',
        country: 'United States',
    },
    {
        artist: 'Céline Dion',
        country: 'Canada',
    },
    {
        artist: 'Blueface',
        country: 'United States',
    },
    {
        artist: 'Donell Jones',
        country: 'United States',
    },
    {
        artist: 'KALEO',
        country: 'Iceland',
    },
    {
        artist: 'Baha Men',
        country: 'Bahamas',
    },
    {
        artist: 'Philip George',
        country: 'United Kingdom',
    },
    {
        artist: 'J. Holiday',
        country: 'United States',
    },
    {
        artist: 'Stevan Pasaribu',
        country: 'Indonesia',
    },
    {
        artist: 'Cherish',
        country: 'United States',
    },
    {
        artist: 'Imany',
        country: 'France',
    },
    {
        artist: 'Kent Jones',
        country: 'United States',
    },
    {
        artist: 'Rich Homie Quan',
        country: 'United States',
    },
    {
        artist: 'Eamon',
        country: 'United States',
    },
    {
        artist: 'DJ Fresh',
        country: 'United Kingdom',
    },
    {
        artist: 'Pretty Ricky',
        country: 'United States',
    },
    {
        artist: 'Fitz and The Tantrums',
        country: 'United States',
    },
    {
        artist: 'Death Cab for Cutie',
        country: 'United States',
    },
    {
        artist: 'Sonique',
        country: 'United Kingdom',
    },
    {
        artist: 'A.R. Rahman',
        country: 'India',
    },
    {
        artist: 'D4L',
        country: 'United States',
    },
    {
        artist: 'Anastacia',
        country: 'United States',
    },
    {
        artist: 'Phoenix',
        country: 'France',
    },
    {
        artist: 'Matoma',
        country: 'Norway',
    },
    {
        artist: 'Keri Hilson',
        country: 'United States',
    },
    {
        artist: 'Ja Rule',
        country: 'United States',
    },
    {
        artist: 'Ray J',
        country: 'United States',
    },
    {
        artist: 'Mary Mary',
        country: 'United States',
    },
    {
        artist: 'JUVENILE',
        country: 'United States',
    },
    {
        artist: 'Big Tymers',
        country: 'United States',
    },
    {
        artist: 'Filter',
        country: 'United States',
    },
    {
        artist: 'Atomic Kitten',
        country: 'United Kingdom',
    },
    {
        artist: 'Rui Da Silva',
        country: 'Portugal',
    },
    {
        artist: 'G.R.L.',
        country: 'United States',
    },
    {
        artist: 'Silentó',
        country: 'United States',
    },
    {
        artist: 'Yolanda Be Cool',
        country: 'Australia',
    },
    {
        artist: 'Janet Jackson',
        country: 'United States',
    },
    {
        artist: 'Blue',
        country: 'United Kingdom',
    },
    {
        artist: 'Charli XCX',
        country: 'United Kingdom',
    },
    {
        artist: 'Wiley',
        country: 'United Kingdom',
    },
    {
        artist: 'Robyn',
        country: 'Sweden',
    },
    {
        artist: 'Sting',
        country: 'United Kingdom',
    },
    {
        artist: 'Thomas Rhett',
        country: 'United States',
    },
    {
        artist: 'Jess Glynne',
        country: 'United Kingdom',
    },
    {
        artist: 'The Chemical Brothers',
        country: 'United Kingdom',
    },
    {
        artist: 'EO',
        country: 'United States',
    },
    {
        artist: 'Ella Henderson',
        country: 'United Kingdom',
    },
    {
        artist: 'No Doubt',
        country: 'United States',
    },
    {
        artist: 'Lykke Li',
        country: 'Sweden',
    },
    {
        artist: 'The-Dream',
        country: 'United States',
    },
    {
        artist: 'Kaiser Chiefs',
        country: 'United Kingdom',
    },
    {
        artist: 'Wolfmother',
        country: 'Australia',
    },
    {
        artist: 'Janelle Monáe',
        country: 'United States',
    },
    {
        artist: 'Switchfoot',
        country: 'United States',
    },
    {
        artist: 'Kelly Rowland',
        country: 'United States',
    },
    {
        artist: 'Panjabi MC',
        country: 'United Kingdom',
    },
    {
        artist: 'Armand Van Helden',
        country: 'United States',
    },
    {
        artist: 'Flume',
        country: 'Australia',
    },
    {
        artist: 'Lumidee',
        country: 'United States',
    },
    {
        artist: '112',
        country: 'United States',
    },
    {
        artist: 'NEIKED',
        country: 'Stockholm',
    },
    {
        artist: 'Monica',
        country: 'United States',
    },
    {
        artist: "Lil' Flip",
        country: 'United States',
    },
    {
        artist: 'The Roots',
        country: 'United States',
    },
    {
        artist: 'Cher Lloyd',
        country: 'United Kingdom',
    },
    {
        artist: 'Wale',
        country: 'United States',
    },
    {
        artist: 'DRAM',
        country: 'United States',
    },
    {
        artist: 'Starley',
        country: 'Australia',
    },
    {
        artist: 'Example',
        country: 'United Kingdom',
    },
    {
        artist: 'Cascada',
        country: 'Germany',
    },
    {
        artist: 'Tinie Tempah',
        country: 'United Kingdom',
    },
    {
        artist: 'Lil Pump',
        country: 'United States',
    },
    {
        artist: 'INNA',
        country: 'Romania',
    },
    {
        artist: 'Tyrese',
        country: 'United States',
    },
    {
        artist: 'The Band Perry',
        country: 'United States',
    },
    {
        artist: 'Daniel Bedingfield',
        country: 'United Kingdom',
    },
    {
        artist: 'S Club 7',
        country: 'United Kingdom',
    },
    {
        artist: 'HÄWK',
        country: 'Italy',
    },
    {
        artist: 'All Saints',
        country: 'United Kingdom',
    },
    {
        artist: 'Ying Yang Twins',
        country: 'United States',
    },
    {
        artist: 'Shania Twain',
        country: 'Canada',
    },
    {
        artist: 'E-40',
        country: 'United States',
    },
    {
        artist: 'G-Unit',
        country: 'United States',
    },
    {
        artist: 'B2K',
        country: 'United States',
    },
    {
        artist: 'Special D.',
        country: 'Germany',
    },
    {
        artist: 'Fuel',
        country: 'United States',
    },
    {
        artist: 'Stefflon Don',
        country: 'United Kingdom',
    },
    {
        artist: 'Scissor Sisters',
        country: 'United States',
    },
    {
        artist: 'Steve Aoki',
        country: 'United States',
    },
    {
        artist: 'Big Shaq',
        country: 'United Kingdom',
    },
    {
        artist: 'Bubba Sparxxx',
        country: 'United States',
    },
    {
        artist: 'Khia',
        country: 'United States',
    },
    {
        artist: 'PARTYNEXTDOOR',
        country: 'Canada',
    },
    {
        artist: 'Cam’ron',
        country: 'United States',
    },
    {
        artist: 'Elbow',
        country: 'United Kingdom',
    },
    {
        artist: 'Shop Boyz',
        country: 'United States',
    },
    {
        artist: 'Judika',
        country: 'Indonesia',
    },
    {
        artist: 'Papa Roach',
        country: 'United States',
    },
    {
        artist: 'The Supermen Lovers',
        country: 'France',
    },
    {
        artist: 'Simple Plan',
        country: 'Canada',
    },
    {
        artist: 'BENEE',
        country: 'New Zealand',
    },
    {
        artist: 'LMC',
        country: 'United Kingdom',
    },
    {
        artist: 'BOYS LIKE GIRLS',
        country: 'United States',
    },
    {
        artist: 'Stormzy',
        country: 'United Kingdom',
    },
    {
        artist: 'Busted',
        country: 'United Kingdom',
    },
    {
        artist: 'Truth Hurts',
        country: 'United States',
    },
    {
        artist: 'Chase & Status',
        country: 'United Kingdom',
    },
    {
        artist: 'O.T. Genasis',
        country: 'United States',
    },
    {
        artist: 'ZHU',
        country: 'China',
    },
    {
        artist: 'Petey Pablo',
        country: 'United States',
    },
    {
        artist: 'Musiq Soulchild',
        country: 'United States',
    },
    {
        artist: 'T2',
        country: 'United Kingdom',
    },
    {
        artist: 'Nas',
        country: 'United States',
    },
    {
        artist: 'Bone Thugs-N-Harmony',
        country: 'United States',
    },
    {
        artist: 'Trick Daddy',
        country: 'United States',
    },
    {
        artist: 'B Young',
        country: 'United Kingdom',
    },
    {
        artist: 'New Hope Club',
        country: 'United Kingdom',
    },
    {
        artist: 'Dem Franchize Boyz',
        country: 'United States',
    },
    {
        artist: 'Cheat Codes',
        country: 'United States',
    },
    {
        artist: 'Sophie Ellis-Bextor',
        country: 'United Kingdom',
    },
    {
        artist: 'Sigma',
        country: 'United Kingdom',
    },
    {
        artist: 'The Prodigy',
        country: 'United Kingdom',
    },
    {
        artist: 'Tweet',
        country: 'United States',
    },
    {
        artist: 'Ultrabeat',
        country: 'United Kingdom',
    },
    {
        artist: 'Maxwell',
        country: 'United States',
    },
    {
        artist: 'Gorgon City',
        country: 'United Kingdom',
    },
    {
        artist: 'Vengaboys',
        country: 'Netherlands',
    },
    {
        artist: 'Plan B',
        country: 'United Kingdom',
    },
    {
        artist: 'Scooter',
        country: 'Germany',
    },
    {
        artist: "K'NAAN",
        country: 'Somalia',
    },
    {
        artist: 'Marc E. Bassy',
        country: 'United States',
    },
    {
        artist: 'The Streets',
        country: 'United Kingdom',
    },
    {
        artist: 'Montell Jordan',
        country: 'United States',
    },
    {
        artist: 'Sunshine Anderson',
        country: 'United States',
    },
    {
        artist: 'Houston',
        country: 'Sweden',
    },
    {
        artist: 'Asher Roth',
        country: 'United States',
    },
    {
        artist: 'Radiohead',
        country: 'United Kingdom',
    },
    {
        artist: 'Ronan Keating',
        country: 'United Kingdom',
    },
    {
        artist: 'Room 5',
        country: 'Belgium',
    },
    {
        artist: 'Katie Melua',
        country: 'United Kingdom',
    },
    {
        artist: 'Lloyd Banks',
        country: 'United States',
    },
    {
        artist: 'Floetry',
        country: 'United Kingdom',
    },
    {
        artist: 'Mis-Teeq',
        country: 'United Kingdom',
    },
    {
        artist: 'Gotye',
        country: 'Australia',
    },
    {
        artist: 'Jennifer Hudson',
        country: 'United States',
    },
    {
        artist: 'Alex Clare',
        country: 'United Kingdom',
    },
    {
        artist: 'The Veronicas',
        country: 'Australia',
    },
    {
        artist: "Colby O'Donis",
        country: 'United States',
    },
    {
        artist: 'Noah And The Whale',
        country: 'United Kingdom',
    },
    {
        artist: 'Elvis Presley',
        country: 'United States',
    },
    {
        artist: 'Michel Teló',
        country: 'Brazil',
    },
    {
        artist: 'McFly',
        country: 'United Kingdom',
    },
    {
        artist: 'Mýa',
        country: 'United States',
    },
    {
        artist: 'Jidenna',
        country: 'United States',
    },
    {
        artist: 'Rizzle Kicks',
        country: 'United Kingdom',
    },
    {
        artist: 'CeeLo Green',
        country: 'United States',
    },
    {
        artist: 'Kate Nash',
        country: 'United Kingdom',
    },
    {
        artist: 'Infernal',
        country: 'Denmark',
    },
    {
        artist: 'LL COOL J',
        country: 'United States',
    },
    {
        artist: 'DJ Ötzi',
        country: 'Austria',
    },
    {
        artist: 'Naughty Boy',
        country: 'United Kingdom',
    },
    {
        artist: 'Case',
        country: 'United States',
    },
    {
        artist: 'Erick Sermon',
        country: 'United States',
    },
    {
        artist: 'Melanie C',
        country: 'United Kingdom',
    },
    {
        artist: 'Sugababes',
        country: 'United Kingdom',
    },
    {
        artist: 'Simply Red',
        country: 'United Kingdom',
    },
    {
        artist: 'Gabriella Cilmi',
        country: 'Australia',
    },
    {
        artist: 'Hilltop Hoods',
        country: 'Australia',
    },
    {
        artist: 'MiMS',
        country: 'United States',
    },
    {
        artist: 'Elliott Yamin',
        country: 'United States',
    },
    {
        artist: 'Adam Lambert',
        country: 'United States',
    },
    {
        artist: 'George Michael',
        country: 'United Kingdom',
    },
    {
        artist: 'Erykah Badu',
        country: 'United States',
    },
    {
        artist: 'The Fratellis',
        country: 'United Kingdom',
    },
    {
        artist: 'Madison Avenue',
        country: 'Australia',
    },
    {
        artist: 'The Coral',
        country: 'United Kingdom',
    },
    {
        artist: 'Klingande',
        country: 'France',
    },
    {
        artist: 'Zay Hilfigerrr',
        country: 'United States',
    },
    {
        artist: 'Dere',
        country: 'Indonesia',
    },
    {
        artist: 'Storm Queen',
        country: 'United States',
    },
    {
        artist: 'Eiffel 65',
        country: 'Italy',
    },
    {
        artist: 'Ruff Endz',
        country: 'United States',
    },
    {
        artist: 'Tinchy Stryder',
        country: 'United Kingdom',
    },
    {
        artist: 'Pendulum',
        country: 'Australia',
    },
    {
        artist: 'Jaheim',
        country: 'United States',
    },
    {
        artist: 'Fedde Le Grand',
        country: 'Netherlands',
    },
    {
        artist: 'Mystikal',
        country: 'United States',
    },
    {
        artist: 'Young T & Bugsey',
        country: 'United Kingdom',
    },
    {
        artist: 'Wyclef Jean',
        country: 'United States',
    },
    {
        artist: 'Baby Boy Da Prince',
        country: 'United States',
    },
    {
        artist: 'Rich Boy',
        country: 'United States',
    },
    {
        artist: 'J-Kwon',
        country: 'United States',
    },
    {
        artist: 'Christina Milian',
        country: 'United States',
    },
    {
        artist: 'Next',
        country: 'United States',
    },
    {
        artist: 'Milow',
        country: 'Belgium',
    },
    {
        artist: 'Fatman Scoop',
        country: 'United States',
    },
    {
        artist: 'JLS',
        country: 'United Kingdom',
    },
    {
        artist: 'Sam Sparro',
        country: 'Australia',
    },
    {
        artist: 'Jibbs',
        country: 'United States',
    },
    {
        artist: 'Danity Kane',
        country: 'United States',
    },
    {
        artist: 'Otto Knows',
        country: 'Sweden',
    },
    {
        artist: 'Anneth',
        country: 'Indonesia',
    },
    {
        artist: 'Hayden James',
        country: 'Australia',
    },
    {
        artist: 'Timeflies',
        country: 'United States',
    },
    {
        artist: 'iio',
        country: 'United States',
    },
    {
        artist: 'Avant',
        country: 'United States',
    },
    {
        artist: 'Girls Aloud',
        country: 'United Kingdom',
    },
    {
        artist: 'AFROJACK',
        country: 'Netherlands',
    },
    {
        artist: '99 Souls',
        country: 'United Kingdom',
    },
    {
        artist: 'Youngbloodz',
        country: 'United States',
    },
    {
        artist: 'DJ Pied Piper & The Masters Of Ceremonies',
        country: 'United Kingdom',
    },
    {
        artist: "Bomfunk MC's",
        country: 'Finland',
    },
    {
        artist: 'Martin Solveig',
        country: 'France',
    },
    {
        artist: 'Peking Duk',
        country: 'Australia',
    },
    {
        artist: 'Carl Thomas',
        country: 'United States',
    },
    {
        artist: '3LW',
        country: 'United States',
    },
    {
        artist: 'N.O.R.E.',
        country: 'United States',
    },
    {
        artist: 'NSG',
        country: 'Indonesia',
    },
    {
        artist: 'DB Boulevard',
        country: 'Italy',
    },
    {
        artist: 'N.E.R.D',
        country: 'United States',
    },
    {
        artist: 'Moloko',
        country: 'United Kingdom',
    },
    {
        artist: 'Da Brat',
        country: 'United States',
    },
    {
        artist: 'H "two" O',
        country: 'United Kingdom',
    },
    {
        artist: 'Tim Berg',
        country: 'Sweden',
    },
    {
        artist: 'Kandi',
        country: 'United States',
    },
    {
        artist: 'Faith Evans',
        country: 'United States',
    },
    {
        artist: 'Cashmere Cat',
        country: 'Norway',
    },
    {
        artist: 'Huey',
        country: 'United States',
    },
    {
        artist: 'Basement Jaxx',
        country: 'United Kingdom',
    },
    {
        artist: 'Faithless',
        country: 'United Kingdom',
    },
    {
        artist: 'PNAU',
        country: 'Australia',
    },
    {
        artist: 'M.O.P.',
        country: 'United States',
    },
    {
        artist: 'Howie Day',
        country: 'United States',
    },
    {
        artist: 'Kiiara',
        country: 'United States',
    },
    {
        artist: 'Olivia Holt',
        country: 'United States',
    },
    {
        artist: 'Will Young',
        country: 'United Kingdom',
    },
    {
        artist: 'Sheryl Crow',
        country: 'United States',
    },
    {
        artist: 'Trillville',
        country: 'United States',
    },
    {
        artist: 'Jim Jones',
        country: 'United States',
    },
    {
        artist: 'City High',
        country: 'United States',
    },
    {
        artist: 'Chicane',
        country: 'United Kingdom',
    },
    {
        artist: 'Brandy',
        country: 'United States',
    },
    {
        artist: 'David Banner',
        country: 'United States',
    },
    {
        artist: 'Just Jack',
        country: 'United Kingdom',
    },
    {
        artist: 'CHVRCHES',
        country: 'United Kingdom',
    },
    {
        artist: 'Amerie',
        country: 'United States',
    },
    {
        artist: 'M.O',
        country: 'United Kingdom',
    },
    {
        artist: 'AlunaGeorge',
        country: 'United Kingdom',
    },
    {
        artist: "Lil' Kim",
        country: 'United States',
    },
    {
        artist: 'So Solid Crew',
        country: 'United Kingdom',
    },
    {
        artist: 'Jenil',
        country: 'Philippines',
    },
    {
        artist: 'Karley Scott Collins',
        country: 'United States',
    },
    {
        artist: 'Illy',
        country: 'Australia',
    },
    {
        artist: 'Unk',
        country: 'Barcelona',
    },
    {
        artist: 'David Bowie',
        country: 'United Kingdom',
    },
    {
        artist: 'Duck Sauce',
        country: 'United States',
    },
    {
        artist: 'Counting Crows',
        country: 'United States',
    },
    {
        artist: 'Chip',
        country: 'United Kingdom',
    },
    {
        artist: 'Orson',
        country: 'United States',
    },
    {
        artist: 'Chumbawamba',
        country: 'United Kingdom',
    },
    {
        artist: 'Lucas & Steve',
        country: 'Netherlands',
    },
    {
        artist: 'Amanda Perez',
        country: 'United States',
    },
    {
        artist: 'Mann',
        country: 'United States',
    },
    {
        artist: 'Sammie',
        country: 'United States',
    },
    {
        artist: 'Sak Noel',
        country: 'Spain',
    },
    {
        artist: 'Tamia',
        country: 'Canada',
    },
    {
        artist: 'Charli Baltimore',
        country: 'United States',
    },
    {
        artist: 'Sweet Female Attitude',
        country: 'United Kingdom',
    },
    {
        artist: 'King Princess',
        country: 'United States',
    },
    {
        artist: 'Lemar',
        country: 'United Kingdom',
    },
    {
        artist: 'Big Brovaz',
        country: 'United Kingdom',
    },
    {
        artist: 'Sidney Samson',
        country: 'Netherlands',
    },
    {
        artist: 'Meck',
        country: 'United Kingdom',
    },
    {
        artist: 'Matt Simons',
        country: 'United States',
    },
    {
        artist: 'Hoodie Forester',
        country: 'Netherlands',
    },
    {
        artist: 'NSB',
        country: 'United States',
    },
    {
        artist: 'Samantha Mumba',
        country: 'United Kingdom',
    },
];

export default artistsAndCities;
