import Cookies from 'js-cookie'

export default class Cookie {
    static setAuth()
    {
        Cookies.set("auth", "yes", {expires: 30})

    }

    static changeLanguages(languages) {
        Cookies.remove("languages");
        Cookies.set("languages", JSON.stringify(languages), {expires: 30});
    }

    static getLanguages()
    {
        return Cookies.get("languages")
    }

    static isAuth()
    {

        return Cookies.get("auth") === "yes"
    }




}