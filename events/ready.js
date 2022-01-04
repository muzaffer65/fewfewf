const config = require("../config.json")
const log = message => {
  
    console.log(`${message}`)
}

module.exports = async client => {
  
client.user.setActivity(`${config.prefix}yardım | ${config.prefix}çal Klamy Tekrar Aktif`, {
  
type: "WATCHING",
url: "https://www.twitch.tv/muzafferkaraman"})
    log(`[BOT] Aktif, Komutlar Yüklendi.`)
  }
