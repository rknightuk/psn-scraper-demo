const cheerio = require('cheerio')

async function run() {
    const response = await fetch('https://psnprofiles.com/rknightuk')
    const body = await response.text()

    const $ = cheerio.load(body)
    const games = $('#gamesTable .title')

    const parsedData = {
        title: games.first().text(),
        link: games.first().attr('href'),
    }

    console.log(parsedData)

    // get ALL games
    // const parsedData = []
    // games.each((i, el) => {
    //     const path = $(el).attr('href')
    //     parse.push({
    //         title: $(el).text(),
    //         link: `https://psnprofiles.com${path}`,
    //     })
    // })
}

run()
