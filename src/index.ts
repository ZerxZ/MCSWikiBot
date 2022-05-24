import 'dotenv/config'
import { IBWikiBotOption, BWikiBot } from "./utils";
const { BOT_USERNAME: username, BOT_PASSWORD: password, WIKI_NAME, WIKI_SITE, COOKIES: cookie } = process.env
const apiUrl = `${WIKI_SITE}${WIKI_NAME}/api.php`

const options: IBWikiBotOption = {
  apiUrl,
  username,
  password,
  cookie
};

(async () => {
  const bot = BWikiBot.Create(options)
  await bot.login()

})()
