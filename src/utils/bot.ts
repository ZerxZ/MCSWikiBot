
import { mwn, MwnOptions } from "mwn";

export interface IBWikiBotOption extends MwnOptions {
  cookie?: string
}
export class BWikiBot extends mwn {
  public static instance: BWikiBot;
  public static Create(options: IBWikiBotOption) {
    if (!BWikiBot.instance) BWikiBot.instance = new BWikiBot(options);
    return BWikiBot.instance
  }
  private _cookie: string[];
  constructor(options: IBWikiBotOption) {
    super(options)
    this._cookie = this.parseCookies(options.cookie)
    this.initCookies()

  }
  private parseCookies(CookieString?: string) {
    return !!CookieString ? CookieString.split(";").map(v => v.trim()) : []
  }
  private initCookies() {
    const apiUrl = !!this.options?.apiUrl ? this.options.apiUrl : ""
    const cookieJar = this.cookieJar
    if (apiUrl) {
      this._cookie.forEach(v => cookieJar.setCookieSync(v, apiUrl))
    }
  }
}
