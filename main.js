const moviesTemplate = `<tr>
                            <td class="name"></td>
                            <td class="keywords"></td>
                        </tr>`
const listOptions = {
    valueNames: ['name', 'keywords'], 
    item: moviesTemplate
}

const putCount = document.getElementById('count')

const movieObj = [
  {
    name:"Abyss, The",
    keywords: "movie, scifi, drama, dvd"
  },
  {
    name:"Rush Hour 1",
    keywords: "movie, comedy, action, bluray"
  },
  {
    name:"Rush Hour 2",
    keywords: "movie, comedy, action, bluray"
  },
  {
    name:"Rush Hour 3",
    keywords: "movie, comedy, action, bluray"
  },
  {
    name:"Yu-Yu-Hakusho Complete Collection",
    keywords: "anime, paranormal, action, series, bluray"
  },
  {
    name:"Teenage Mutant Ninja Turtles The Original Movie",
    keywords: "movie, comedy, drama, action, kids, tmnt, dvd"
  },
  {
    name:"Scrooged",
    keywords: "movie, christmas, family, dvd"
  },
  {
    name:"Wakfu",
    keywords: "anime, kids, adventure, series, bluray"
  },
  {
    name:"Flight of the Conchords Complete Collection",
    keywords: "comedy, musical, series, dvd"
  },
  {
    name:"Downton Abbey Seasons 1-4",
    keywords: "drama, historical, british, series, bluray"
  },
  {
    name:"Venture Bros Complete Collection, The",
    keywords: "animated, action, drama, series, dvd"
  },
  {
    name:"House Complete Collection",
    keywords: "medical, drama, series, dvd"
  },
  {
    name:"Troy",
    keywords: "movie, historical, action, drama, dvd"
  },
  {
    name:"Bad Boys",
    keywords: "movie, action, comedy, mystery, drama, dvd"
  },
  {
    name:"Blade",
    keywords: "movie, scifi, drama, action, vampire, bluray"
  },
  {
    name:"Blade II",
    keywords: "movie, scifi, drama, action, vampire, bluray"
  },
  {
    name:"Blade Trinity",
    keywords: "movie, scifi, drama, action, vampire, bluray"
  },
  {
    name:"John Wick",
    keywords: "movie, action, secret agent, drama, dvd"
  },
  {
    name:"John Wick 2",
    keywords: "movie, action, secret agent, drama, dvd"
  },
  {
    name:"John Wick 3",
    keywords: "movie, action, secret agent, drama, dvd"
  },
  {
    name:"John Wick 4",
    keywords: "movie, action, secret agent, drama, dvd"
  },
  {
    name:"Ballerina",
    keywords: "movie, action, secret agent, drama, dvd"
  },
  {
    name:"It's a Wonderful Life",
    keywords: "movie, christmas, family, dvd"
  },
  {
    name:"March of the Penguins",
    keywords: "movie, nat geo, animals, documentary, dvd"
  },
  {
    name:"Rocky Balboa",
    keywords: "movie, sport, boxing, drama, dvd"
  },
  {
    name:"Dan in Real Life",
    keywords: "movie, comedy, drama, romance, dvd"
  },
  {
    name:"Village, The",
    keywords: "movie, scifi, horror, thriller, drama, dvd"
  },
  {
    name:"Ocean's 11 (Original)",
    keywords: "movie, action, drama, secret agent, dvd"
  },
  {
    name:"Ocean's Eleven",
    keywords: "movie, action, drama, secret agent, dvd"
  },
  {
    name:"Ocean's Twelve",
    keywords: "movie, action, drama, secret agent, dvd"
  },
  {
    name:"Ocean's Thirteen",
    keywords: "movie, action, drama, secret agent, dvd"
  },
  {
    name:"Secondhand Lions",
    keywords: "movie, comedy, drama, dvd"
  },
  {
    name:"Eight Below",
    keywords: "movie, comedy, animals, disney, kids, dvd"
  },
  {
    name:"Stuart Little 1",
    keywords: "movie, comedy, kids, family, dvd"
  },
  {
    name:"Stuart Little 2",
    keywords: "movie, comedy, kids, family, dvd"
  },
  {
    name:"Gravity",
    keywords: "movie, scifi, drama, dvd"
  },
  {
    name:"Avatar the Last Air Bender Complete Collection",
    keywords: "anime, kids, nickelodeon, series dvd"
  },
  {
    name:"Legend of Korra Complete Collection, The",
    keywords: "anime, kids, nickelodeon, series dvd"
  },
  {
    name:"Fullmetal Alchemist Season 1, Volume 1 & 2",
    keywords: "anime, action, drama, series, dvd"
  },
  {
    name:"Family Guy Season 3 & Season 4 pt. 1",
    keywords: "comedy, adult, series, dvd"
  },
  {
    name:"Lucky # Slevin",
    keywords: "movie, action, drama, mystery, bluray"
  },
  {
    name:"Adventure Time Complete Collection",
    keywords: "movie, animated, comedy, kids, cartoon network, dvd"
  },
  {
    name:"Ghostbusters 2",
    keywords: "movie, scifi, comedy, drama, dvd"
  },
  {
    name:"The Santa Clause",
    keywords: "movie, christmas, comedy, dvd"
  },
  {
    name:"Stranger than Fiction",
    keywords: "movie, romance, comedy, dvd"
  },
  {
    name:"Groundhog Day",
    keywords: "movie, romance, comedy, dvd"
  },
  {
    name:"Thing, The",
    keywords: "movie, scifi, horror, bluray"
  },
  {
    name:"Moulin Rouge!",
    keywords: "movie, musical, romance, drama, dvd"
  },
  {
    name:"Die Hard",
    keywords: "movie, action, drama, secret agent, dvd"
  },
  {
    name:"Die Hard 2: Die Harder",
    keywords: "movie, action, drama, secret agent, dvd"
  },
  {
    name:"Die Hard with a Vengeance (Die Hard 3)",
    keywords: "movie, action, drama, secret agent, dvd"
  },
  {
    name:"Starwars Episode 1: The Phantom Menace",
    keywords: "movie, scifi, drama, dvd"
  },  
  {
    name:"Starwars Episode 2: Attack of the Clones",
    keywords: "movie, scifi, drama, dvd"
  },
  {
    name:"Starwars Episode 3: Revenge of the Sith",
    keywords: "movie, scifi, drama, dvd"
  },
  {
    name:"Starwars Episode 4: A New Hope",
    keywords: "movie, scifi, drama, dvd"
  },
  {
    name:"Starwars Episode 5: The Empire Strikes Back",
    keywords: "movie, scifi, drama, dvd"
  },
  {
    name:"Starwars Episode 6: Return of the Jedi",
    keywords: "movie, scifi, drama, dvd"
  },
  {
    name:"Matlida",
    keywords: "movie, comedy, family, kids, drama, dvd"
  },
  {
    name:"Zombieland",
    keywords: "movie, scifi, zombies, comedy, drama, dvd"
  },
  {
    name:"Willy Wonka and the Chocolate Factory",
    keywords: "movie, family, drama, adventure, coming of age, dvd"
  },
  {
    name:"Super 8",
    keywords: "movie, scifi, action, adventure, supernatural, dvd"
  },
  {
    name:"Star Trek",
    keywords: "movie, scifi, drama, adventure, dvd"
  },
  {
    name:"Star Trek Into Darkness",
    keywords: "movie, scifi, drama, adventure, dvd"
  },
  {
    name:"Snatch",
    keywords: "movie, comedy, crime, british, sports, action, drama, dvd"
  },
  {
    name:"Sinners",
    keywords: "movie, fantasy, vampires, action, drama, dvd"
  },
  {
    name:"Sherlock Holmes",
    keywords: "movie, rdj, mystery, detective, action, drama, dvd"
  },
  {
    name:"Shawshank Redemption, The",
    keywords: "movie, drama, crime, bluray"
  },
  {
    name:"Pirates of the Caribbean: Curse of the Black Pearl",
    keywords: "movie, comedy, action, drama, dvd"
  },
  {
    name:"Pirates of the Caribbean: Dead Man's Chest",
    keywords: "movie, comedy, action, drama, dvd"
  },
  {
    name:"Now You See Me 1",
    keywords: "movie, mystery, action, comedy, drama, magic, dvd"
  },
  {
    name:"Now You See Me 2",
    keywords: "movie, mystery, action, comedy, drama, magic, dvd"
  },
  {
    name:"Night at the Museum",
    keywords: "movie, famil, comedy, kids, family, dvd"
  },
  {
    name:"Mummy, The",
    keywords: "movie, scifi, drama, adventure, dvd"
  },
  {
    name:"Mummy Returns, The",
    keywords: "movie, scifi, drama, adventure, dvd"
  },
  {
    name:"Scorpion King, The",
    keywords: "movie, scifi, drama, adventure, dvd"
  },
  {
    name:"Stargate",
    keywords: "movie, scifi, action, adventure, dvd"
  },
  {
    name:"MIB 2",
    keywords: "movie, scifi, comedy, mystery, drama, dvd"
  },
  {
    name:"Matrix, The",
    keywords: "movie, scifi, dystopia, action, drama, dvd"
  },
  {
    name:"Lord of the Rings: The Fellowship of the Ring",
    keywords: "movie, fantasy, adventure, drama, dvd"
  },
  {
    name:"Lord of the Rings: Return of the King",
    keywords: "movie, fantasy, adventure, drama, dvd"
  },
  {
    name:"Kung Fu Hustle",
    keywords: "movie, comedy, action, martial arts, dvd"
  },
  {
    name:"Kung Fury",
    keywords: "movie, comedy, short film, action, indie, drama, bluray"
  },
  {
    name:"Karate Kid: Original, The",
    keywords: "movie, action, martial arts, coming of age, drama, dvd"
  },
  {
    name:"Inception",
    keywords: "movie, scifi, action, drama, dvd"
  },
  {
    name:"Green Mile, The",
    keywords: "movie, crime, drama, supernatural, dvd"
  },
  {
    name:"Green Book",
    keywords: "movie, biography, comedy, drama, dvd"
  },
  {
    name:"Day After Tomorrow, The",
    keywords: "movie, scifi, horror, drama, dvd"
  },
  {
    name:"Over the Garden Wall Complete Collection",
    keywords: "animated, adventure, indie, series, bluray"
  },
  {
    name:"Cowboy Bebop",
    keywords: "anime, scifi, action, adventure, drama, series, bluray"
  },
  {
    name:"Howl's Moving Castle",
    keywords: "movie, anime, ghibli, romance, adventure, bluray"
  },
  {
    name:"Spirited Away",
    keywords: "movie, anime, ghibli, family, adventure, coming of age, bluray"
  },
  {
    name:"My Neighbor Totoro",
    keywords: "movie, anime, ghibli, family, adventure, coming of age, bluray"
  },
  {
    name:"Kiki's Delivery Service",
    keywords: "movie, anime, ghibli, romance, adventure, coming of age, bluray"
  },
  {
    name:"Ponyo",
    keywords: "movie, anime, ghibli, family, adventure, coming of age, bluray"
  },
  {
    name:"Castle in the Sky",
    keywords: "movie, anime, ghibli, family, adventure, coming of age, bluray"
  },
  {
    name:"Grease",
    keywords: "movie, musical, comedy, drama, dvd"
  },
  {
    name:"Gran Torino",
    keywords: "movie, cars, drama, action, dvd"
  },
  {
    name:"Gladiator",
    keywords: "movie, historical, action, drama, dvd"
  },
  {
    name:"Fear and Loathing in Las Vegas",
    keywords: "movie, comedy, journalism, drama, dvd"
  },
  {
    name:"Fault in Our Stars, The",
    keywords: "movie, romance, young adult, terminal illness, grief, drama, dvd"
  },
  {
    name:"Dirty Dancing",
    keywords: "movie, romance, drama, musical, dancing, dvd"
  },
  {
    name:"The DaVinci Code",
    keywords: "movie, thriller, mystery, drama, dvd"
  },
  {
    name:"Labyrinth, The",
    keywords: "movie, fantasy, drama, dvd"
  },
  {
    name:"Dark Crystal, The",
    keywords: "movie, fantasy, drama, dvd"
  },
  {
    name:"007: Casino Royale",
    keywords: "movie, action, secret agent, drama, dvd"
  },
  {
    name:"Breakfast Club, The",
    keywords: "movie, scifi, drama, dvd"
  },
  {
    name:"Army of Darkness",
    keywords: "movie, fantasy, horror, comedy, dvd"
  },
  {
    name:"42: The Jackie Robinson Story",
    keywords: "movie, sports, baseball, drama, dvd"
  },
  {
    name:"3:10 to Yuma",
    keywords: "movie, western, action, drama, dvd"
  },
  {
    name:"Mist, The",
    keywords: "movie, scifi, horror, thriller, dvd"
  },
  {
    name:"Oblivion",
    keywords: "movie, scifi, action, adventure, mystery, dvd"
  },
  {
    name:"Godfather Part 1, The",
    keywords: "movie, gangster, drama, crime, dvd"
  },
  {
    name:"Godfather Part 2, The",
    keywords: "movie, gangster, drama, crime, dvd"
  },
  {
    name:"Godfather Part 3, The",
    keywords: "movie, gangster, drama, crime, dvd"
  },
  {
    name:"Lethal Weapon 4",
    keywords: "movie, action, comedy, crime, drama, dvd"
  },
  {
    name:"Planet Earth Complete Collection",
    keywords: "animals, nature, documentary, educational, series, dvd"
  },
  {
    name:"Amazing Spiderman, The",
    keywords: "movie, superhero, marvel comics, action, drama, dvd"
  },
  {
    name:"A League of Their Own",
    keywords: "movie, comedy, sports, baseball, drama, dvd"
  },
  {
    name:"Land Before Time, The",
    keywords: "movie, family, kids, animated, adventure, dvd"
  },
  {
    name:"Bridge to Terabithia, The",
    keywords: "movie, adventure, coming of age, fantasy, drama, dvd"
  },
]

let moviesList = new List('myMovies', listOptions, movieObj);

moviesList.sort('name', {order: 'asc'})
putCount.innerHTML = `<b>${moviesList.items.length} total items</b>`

moviesList.on('searchComplete', function(){
    if (moviesList.visibleItems.length == moviesList.items.length){
        putCount.innerHTML = `<b>${moviesList.visibleItems.length} Total Items</b>`
    }else{
        putCount.innerHTML = `<b>${moviesList.visibleItems.length} Matching Items</b>`
    }
    
})