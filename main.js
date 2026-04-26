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
    keywords: "scifi, drama, dvd"
  },
  {
    name:"Rush Hour 1",
    keywords: "comedy, action, bluray"
  },
  {
    name:"Rush Hour 2",
    keywords: "comedy, action, bluray"
  },
  {
    name:"Rush Hour 3",
    keywords: "comedy, action, bluray"
  },
  {
    name:"Yu-Yu-Hakusho Complete Collection",
    keywords: "anime, paranormal, action, series, bluray"
  },
  {
    name:"Teenage Mutant Ninja Turtles The Original Movie",
    keywords: "comedy, drama, action, kids, tmnt, dvd"
  },
  {
    name:"Scrooged",
    keywords: "christmas, family, dvd"
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
    keywords: "historical, action, drama, dvd"
  },
  {
    name:"Bad Boys",
    keywords: "action, comedy, mystery, drama, dvd"
  },
  {
    name:"Blade",
    keywords: "scifi, drama, action, vampire, bluray"
  },
  {
    name:"Blade II",
    keywords: "scifi, drama, action, vampire, bluray"
  },
  {
    name:"Blade Trinity",
    keywords: "scifi, drama, action, vampire, bluray"
  },
  {
    name:"John Wick",
    keywords: "action, secret agent, drama, dvd"
  },
  {
    name:"John Wick 2",
    keywords: "action, secret agent, drama, dvd"
  },
  {
    name:"John Wick 3",
    keywords: "action, secret agent, drama, dvd"
  },
  {
    name:"John Wick 4",
    keywords: "action, secret agent, drama, dvd"
  },
  {
    name:"Ballerina",
    keywords: "action, secret agent, drama, dvd"
  },
  {
    name:"It's a Wonderful Life",
    keywords: "christmas, family, dvd"
  },
  {
    name:"March of the Penguins",
    keywords: "nat geo, animals, documentary, dvd"
  },
  {
    name:"Rocky Balboa",
    keywords: "sport, boxing, drama, dvd"
  },
  {
    name:"Dan in Real Life",
    keywords: "comedy, drama, romance, dvd"
  },
  {
    name:"Village, The",
    keywords: "scifi, horror, thriller, drama, dvd"
  },
  {
    name:"Ocean's 11 (Original)",
    keywords: "action, drama, secret agent, dvd"
  },
  {
    name:"Ocean's Eleven",
    keywords: "action, drama, secret agent, dvd"
  },
  {
    name:"Ocean's Twelve",
    keywords: "action, drama, secret agent, dvd"
  },
  {
    name:"Ocean's Thirteen",
    keywords: "action, drama, secret agent, dvd"
  },
  {
    name:"Secondhand Lions",
    keywords: "comedy, drama, dvd"
  },
  {
    name:"Eight Below",
    keywords: "comedy, animals, disney, kids, dvd"
  },
  {
    name:"Stuart Little 1",
    keywords: "comedy, kids, family, dvd"
  },
  {
    name:"Stuart Little 2",
    keywords: "comedy, kids, family, dvd"
  },
  {
    name:"Gravity",
    keywords: "scifi, drama, dvd"
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
    name:"Family Guy Season 3",
    keywords: "comedy, adult, series, dvd"
  },
  {
    name:"Family Guy Season 4 Part 1",
    keywords: "scifi, drama, dvd"
  },
  {
    name:"Lucky # Slevin",
    keywords: "action, drama, mystery, bluray"
  },
  {
    name:"Adventure Time Complete Collection",
    keywords: "animated, comedy, kids, cartoon network, dvd"
  },
  {
    name:"Ghostbusters 2",
    keywords: "scifi, comedy, drama, dvd"
  },
  {
    name:"The Santa Clause",
    keywords: "christmas, comedy, dvd"
  },
  {
    name:"Stranger than Fiction",
    keywords: "romance, comedy, dvd"
  },
  {
    name:"Groundhog Day",
    keywords: "romance, comedy, dvd"
  },
  {
    name:"Thing, The",
    keywords: "scifi, horror, bluray"
  },
  {
    name:"Moulin Rouge!",
    keywords: "musical, romance, drama, dvd"
  },
  {
    name:"Die Hard Trilogy",
    keywords: "action, drama, secret agent, dvd"
  },
  {
    name:"Starwars Episode 1: The Phantom Menace",
    keywords: "scifi, drama, dvd"
  },  
  {
    name:"Starwars Episode 2: Attack of the Clones",
    keywords: "scifi, drama, dvd"
  },
  {
    name:"Starwars Episode 3: Revenge of the Sith",
    keywords: "scifi, drama, dvd"
  },
  {
    name:"Starwars Episode 4: A New Hope",
    keywords: "scifi, drama, dvd"
  },
  {
    name:"Starwars Episode 5: The Empire Strikes Back",
    keywords: "scifi, drama, dvd"
  },
  {
    name:"Starwars Episode 6: Return of the Jedi",
    keywords: "scifi, drama, dvd"
  },
  {
    name:"Matlida",
    keywords: "comedy, family, kids, drama, dvd"
  },
  {
    name:"Zombieland",
    keywords: "scifi, zombies, comedy, drama, dvd"
  },
  {
    name:"Willy Wonka and the Chocolate Factory",
    keywords: "family, drama, adventure, coming of age, dvd"
  },
  {
    name:"Super 8",
    keywords: "scifi, action, adventure, supernatural, dvd"
  },
  {
    name:"Star Trek",
    keywords: "scifi, drama, adventure, dvd"
  },
  {
    name:"Star Trek Into Darkness",
    keywords: "scifi, drama, adventure, dvd"
  },
  {
    name:"Snatch",
    keywords: "comedy, crime, british, sports, action, drama, dvd"
  },
  {
    name:"Sinners",
    keywords: "fantasy, vampires, action, drama, dvd"
  },
  {
    name:"Sherlock Holmes",
    keywords: "rdj, mystery, detective, action, drama, dvd"
  },
  {
    name:"Shawshank Redemption, The",
    keywords: "drama, crime, bluray"
  },
  {
    name:"Pirates of the Caribbean: Curse of the Black Pearl",
    keywords: "comedy, action, drama, dvd"
  },
  {
    name:"Pirates of the Caribbean: Dead Man's Chest",
    keywords: "comedy, action, drama, dvd"
  },
  {
    name:"Now You See Me 1",
    keywords: "mystery, action, comedy, drama, magic, dvd"
  },
  {
    name:"Now You See Me 2",
    keywords: "mystery, action, comedy, drama, magic, dvd"
  },
  {
    name:"Night at the Museum",
    keywords: "famil, comedy, kids, family, dvd"
  },
  {
    name:"Mummy, The",
    keywords: "scifi, drama, adventure, dvd"
  },
  {
    name:"Stargate",
    keywords: "scifi, action, adventure, dvd"
  },
  {
    name:"MIB 2",
    keywords: "scifi, comedy, mystery, drama, dvd"
  },
  {
    name:"Matrix, The",
    keywords: "scifi, dystopia, action, drama, dvd"
  },
  {
    name:"Lord of the Rings: The Fellowship of the Ring",
    keywords: "fantasy, adventure, drama, dvd"
  },
  {
    name:"Lord of the Rings: Return of the King",
    keywords: "fantasy, adventure, drama, dvd"
  },
  {
    name:"Kung Fu Hustle",
    keywords: "comedy, action, martial arts, dvd"
  },
  {
    name:"Kung Fury",
    keywords: "comedy, short film, action, indie, drama, bluray"
  },
  {
    name:"Karate Kid: Original, The",
    keywords: "action, martial arts, coming of age, drama, dvd"
  },
  {
    name:"Inception",
    keywords: "scifi, action, drama, dvd"
  },
  {
    name:"Green Mile, The",
    keywords: "crime, drama, supernatural, dvd"
  },
  {
    name:"Green Book",
    keywords: "biography, comedy, drama, dvd"
  },
  {
    name:"Day After Tomorrow, The",
    keywords: "scifi, horror, drama, dvd"
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
    keywords: "anime, ghibli, romance, adventure, bluray"
  },
  {
    name:"Spirited Away",
    keywords: "anime, ghibli, family, adventure, coming of age, bluray"
  },
  {
    name:"My Neighbor Totoro",
    keywords: "anime, ghibli, family, adventure, coming of age, bluray"
  },
  {
    name:"Kiki's Delivery Service",
    keywords: "anime, ghibli, romance, adventure, coming of age, bluray"
  },
  {
    name:"Ponyo",
    keywords: "anime, ghibli, family, adventure, coming of age, bluray"
  },
  {
    name:"Castle in the Sky",
    keywords: "anime, ghibli, family, adventure, coming of age, bluray"
  },
  {
    name:"Grease",
    keywords: "musical, comedy, drama, dvd"
  },
  {
    name:"Gran Torino",
    keywords: "cars, drama, action, dvd"
  },
  {
    name:"Gladiator",
    keywords: "historical, action, drama, dvd"
  },
  {
    name:"Fear and Loathing in Las Vegas",
    keywords: "comedy, journalism, drama, dvd"
  },
  {
    name:"Fault in Our Stars, The",
    keywords: "romance, young adult, terminal illness, grief, drama, dvd"
  },
  {
    name:"Dirty Dancing",
    keywords: "romance, drama, musical, dancing, dvd"
  },
  {
    name:"The DaVinci Code",
    keywords: "thriller, mystery, drama, dvd"
  },
  {
    name:"Labyrinth, The",
    keywords: "fantasy, drama, dvd"
  },
  {
    name:"Dark Crystal, The",
    keywords: "fantasy, drama, dvd"
  },
  {
    name:"007: Casino Royale",
    keywords: "action, secret agent, drama, dvd"
  },
  {
    name:"Breakfast Club, The",
    keywords: "scifi, drama, dvd"
  },
  {
    name:"Army of Darkness",
    keywords: "fantasy, horror, comedy, dvd"
  },
  {
    name:"42: The Jackie Robinson Story",
    keywords: "sports, baseball, drama, dvd"
  },
  {
    name:"3:10 to Yuma",
    keywords: "western, action, drama, dvd"
  },
  {
    name:"Mist, The",
    keywords: "scifi, horror, thriller, dvd"
  },
  {
    name:"Oblivion",
    keywords: "scifi, action, adventure, mystery, dvd"
  },
  {
    name:"Godfather Part 1, The",
    keywords: "gangster, drama, crime, dvd"
  },
  {
    name:"Godfather Part 2, The",
    keywords: "gangster, drama, crime, dvd"
  },
  {
    name:"Godfather Part 3, The",
    keywords: "gangster, drama, crime, dvd"
  },
  {
    name:"Lethal Weapon 4",
    keywords: "action, comedy, crime, drama, dvd"
  },
  {
    name:"Planet Earth Complete Collection",
    keywords: "animals, nature, documentary, educational, series, dvd"
  },
  {
    name:"Amazing Spiderman, The",
    keywords: "superhero, marvel comics, action, drama, dvd"
  },
  {
    name:"A League of Their Own",
    keywords: "comedy, sports, baseball, drama, dvd"
  },
  {
    name:"Land Before Time, The",
    keywords: "family, kids, animated, adventure, dvd"
  },
  {
    name:"Bridge to Terabithia, The",
    keywords: "adventure, coming of age, fantasy, drama, dvd"
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