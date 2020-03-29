export default class Cookie {
    static setAuth()
    {
        let date = new Date(Date.now() + 86400e3 * 100);
        date = date.toUTCString();
        document.cookie = "auth=yes; expires=" + date;

    }

    static changeLanguages(languages) {
        Cookie.deleteCookie("languages");
        Cookie.setCookie("languages", JSON.stringify(languages), {"expires": Date.now()+ 86400e3*100})
    }

    static getLanguages()
    {
        return Cookie.getCookie("languages")
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


    static setCookie(name, value, options = {}) {

        options = {
            path: '/',
            // при необходимости добавьте другие значения по умолчанию
            ...options
        };

        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }

        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

        for (let optionKey in options) {
            updatedCookie += "; " + optionKey;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
            }
        }

        document.cookie = updatedCookie;
    }

    static deleteCookie(name) {
        Cookie.setCookie(name, "", {
            'max-age': -1
        })
    }


}