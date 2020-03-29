export default class Cookie {
    static setAuth()
    {
        let date = new Date(Date.now() + 86400e3 * 100);
        date = date.toUTCString();
        document.cookie = "auth=yes; expires=" + date;

    }

    static isAuth()
    {

        return this.getCookie("auth") === "yes"
    }

    static  getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
}