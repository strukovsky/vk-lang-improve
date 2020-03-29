let data = [
    [
        {

            ru: "Привет! Я Вова",
            en: "Hello! Im Vladimir",
            fr: "Bonjour! Je suis Vladimir",
            es: "Hola! Soy Vova"
        },
        {

            ru: "Я люблю компьютеры",
            en: "I fond of computers",
            fr: "J aime computers",
            es: "Me gustan los ordenadores"
        }
    ],
    [
        {
            ru: "Я живу рядом с заводом",
            en: "I live near the factory",
            fr: "J habite pres de l usine",
            es: "Yo vivo acerca de la factoria"
        },
        {
            ru: "Я хочу купить новый дом",
            en: "I want to buy a new house",
            fr: "Je veux acheter maison nouveau"
        }
    ]
];

let titles = [
    "Про Вовчика", "Про меня"
];


export default class Data{




    static getLangs()
    {
        return ["ru", "fr", "en", "es"]
    }

    static getText(textId, langs)
    {
            let paragraphs = []
            langs.forEach(function(item, i, arr){
                let paragraph = data[textId][i][item];
                paragraphs.push(paragraph);
            })
        return {
                paragraphs,
                title: titles[textId]
        }
    }

    static getTexts() {
       return titles

    }
}