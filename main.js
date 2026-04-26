const moviesTemplate = `<tr>
                            <td class="name"></td>
                            <td class="keywords"></td>
                        </tr>`
const listOptions = {
    valueNames: ['name', 'keywords'], 
    item: moviesTemplate
}

const movieObj = [
    {
        name:"Abyss, The",
        keywords: "scifi, drama, dvd"
    },
    {
        name:"Rush Hour Trilogy",
        keywords: "comedy, action, bluray"
    },
    {
        name:"Yu-Yu-Hakusho Complete Series",
        keywords: "anime, paranormal, action, bluray"
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
        keywords: "anime, kids, adventure, bluray"
    },
]

let moviesList = new List('myMovies', listOptions, movieObj);

moviesList.sort('name', {order: 'asc'})