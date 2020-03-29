let texts = [
        {paragraphs: [
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
        },
        {
            ru: "Я хожу в школу программирования",
            en: "I go to school of programming",
            fr: "Je vais a l ecole de programmation",
            es: "Yo voy a la escuela de programacion"
        },
        {
            ru: "Я учусь там на одни пятерки",
            en: "I am an excellent pupil there",
            fr: "Je suis un eleve excellent",
            es: "Yo soy un alumno excelente"
        }
    ],
            questions: [
                {
                    title: "Что любит Вова?",
                    variants: [
                        "Компьютеры",
                        "Конструкторы",
                        "Енотов"
                    ],
                    correct: 0
                },
                {
                    title: "Как учится Вова?",
                    variants: [
                        "Плохо",
                        "Средне",
                        "Он отличник"
                    ],
                    correct: 2
                }
            ]
        },
    {paragraphs: [
        {
            ru: "Я живу рядом с заводом",
            en: "I live near the factory",
            fr: "J habite pres de l usine",
            es: "Yo vivo acerca de la factoria"
        },
        {
            ru: "Я хочу купить новый дом",
            en: "I want to buy a new house",
            fr: "Je veux acheter maison nouveau",
            es: "Yo quiero comprar una casa nueva"
        },
        {
            ru: "Я люблю свой город",
            en: "I love my city",
            fr: "J aime ma ville natale",
            es: "Yo quiero a mi cuidad de nacio"
        },
        {
            ru: "Но я должен уехать",
            en: "But I have to leave it",
            fr: "Mais je dois le partir",
            es: "Pero yo tengo que dejarlo"
        }
    ],
     questions: [
         {
             title: "Где живет главный герой?",
             variants: [
                 "В Кисловодске",
                 "Рядом с Красной Площадью",
                 "Около завода"
             ],
             correct: 2
         },
         {
             title: "Что хочет сделать главный герой?",
             variants: [
                 "Поступить в университет",
                 "Купить новый дом",
                 "Найти работу"
             ],
             correct: 1
         }
     ]
    }
];


let titles = [
    "Про Вовчика", "Про меня"
];

let languages_count = 4;

let languages = [
    {code: "ru", verbose: "Русский"},
    {code: "fr", verbose: "Французский"},
    {code: "en", verbose: "Английский"},
    {code: "es", verbose: "Испанский"}];


export default class Data{

    static getLanguages()
    {
        return languages;
    }

    static getVerbose(code)
    {
        let result = "Русский";
        languages.forEach(item => {
            if(item.code === code)
                result = item.verbose
        });
        return result
    }

    static getText(textId, languages)
    {
            let paragraphs = [];
            languages.forEach(function(item, i, _){
                let paragraph = texts[textId].paragraphs[i][item];
                paragraphs.push(paragraph);
            });
            let len = languages.length;
            if(len < languages_count)
            {
                for(let i = len; i < languages_count; i++)
                {
                    paragraphs.push(texts[textId].paragraphs[i][languages[len-1]])
                }
            }
        return {
                paragraphs,
                title: titles[textId]
        }
    }

    static getQuestions(textId)
    {
        return texts[textId].questions
    }

    static getTexts() {
       return titles
    }


}