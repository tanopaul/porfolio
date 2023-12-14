

const all_projects = [
    {
        id: 1,
        class: 'flatify',
        title: 'Flatify',
        team: [
            {
                name: "Kris Panko",
                image: "https://media.licdn.com/dms/image/D4E35AQE5nepkIsJoqg/profile-framedphoto-shrink_800_800/0/1692859260662?e=1703156400&v=beta&t=sxcWw410-7DdgNcParbBlBJ5UBQTxyGXQkEynfKHgfQ"
            }, 
            {
                name: "Collin Shakes",
                image: "https://media.licdn.com/dms/image/D4E03AQGyWR7W09T_Cg/profile-displayphoto-shrink_800_800/0/1692044745570?e=1707955200&v=beta&t=Dtu3wHq6JmAxxm3kSWqZ7e6sMJ6FT0jpjASY01wYUtc"
            }, 
            {
                name: "Douglas Hellberg",
                image: "https://media.licdn.com/dms/image/C4E03AQGypj5ilNekeg/profile-displayphoto-shrink_800_800/0/1547494923921?e=1707955200&v=beta&t=c25aC8ZkC3Eh5PSO4EMr3rbJPhlR2vaf2Dz9iGfNAOw"
            }
        ],
        languages: ['React.js', 'CSS'],
        background: 'hsla(206, 84%, 86%, 1)',
        browser: 'browser-black.png',
        image1: 'flatify.png',
        videos: ['spotify-select.mp4', 'spotify-search.mp4', 'spotify-pages.mp4'],
        overview: "Immerse yourself in a Spotify-inspired experience crafted with the dynamic capabilities of React.js and polished with pure CSS. This app not only allows users to seamlessly explore the latest music releases from Spotify's API but also provides the functionality to store their favorites and conduct targeted song searches. When a track is favorited, a persistent heart icon accompanies it throughout the app until it's removed from the user's favorites. Additionally, the application leverages React Router DOM to create distinct routes leading to different pages, enhancing the overall navigation experience. Moreover, it integrates 'react-h5-audio-player' to deliver a tailored player interface that mirrors the distinctive look and feel of Spotify's music player.",
        github: "https://github.com/kris-panko/flatify"
    },
    {
        id: 2,
        class: 'pokedex',
        title: 'Pokedex',
        team: [
            {
                name: "Douglas Hellberg",
                image: "https://media.licdn.com/dms/image/C4E03AQGypj5ilNekeg/profile-displayphoto-shrink_800_800/0/1547494923921?e=1707955200&v=beta&t=c25aC8ZkC3Eh5PSO4EMr3rbJPhlR2vaf2Dz9iGfNAOw"
            }, 
            {
                name: "Idalis Valadez",
                image: "https://media.licdn.com/dms/image/D5635AQGaYrrMVhzTlg/profile-framedphoto-shrink_800_800/0/1701211467450?e=1703156400&v=beta&t=gQYPPaNEqR9TPCZuyElPYvpEnsREkDIiet357Y5qIG0"
            }, 
            {
                name: "Jon Lea",
                image: "https://media.licdn.com/dms/image/D5603AQFBTBgwH828mg/profile-displayphoto-shrink_800_800/0/1693331878825?e=1707955200&v=beta&t=a6Ahxj_aJOWEnXWL-bFHybUGlos2z8sXIYuL7ALKeq0"
            }
        ],
        languages: ['JavaScript', 'CSS', 'HTML'],
        background: 'hsla(172, 45%, 75%, 1)',
        browser: 'browser-blue.png',
        image1: 'pokedex-img-main.png',
        videos: ['pokemon-search.mp4', 'pokemon-team.mp4', 'pokemon-select.mp4'],
        overview: "Explore the Pokemon directory, peruse each Pokemon's description, and assemble your dream team. This project was crafted by extracting data from the Pokemon API. Users can easily navigate a comprehensive list of Pokemon. When a specific card is clicked, the Pokemon's image and details will be showcased. Users can curate their own personalized Pokemon squad by adding them to their team inventory (with a maximum limit of 6) and also remove them if needed. The index.js file handles the core functionality, calling the PokeAPI URL and converting the response to JSON for rendering. The renderPokedex function creates DOM elements for each Pokemon and assigns dynamic event listeners. Upon a 'click', a fetch request retrieves specific Pokemon data displayed on the right side.",
        github: "https://github.com/Idalisvaladez/project-phase-1"
    },
    {
        id: 3,
        class: 'game',
        title: 'Adventures of Mattanoman',
        team: [
            {
                name: "Eman Gurung",
                image: "https://media.licdn.com/dms/image/D5635AQFsncfwLSorZA/profile-framedphoto-shrink_800_800/0/1699874287266?e=1703156400&v=beta&t=CmKMkXVYJY5VXeaEWnM9EdoS9UsQSIHq6f17aZyRbg4"
            }, 
            {
                name: "Matthew Stewart",
                image: "https://media.licdn.com/dms/image/D5635AQHyNFbNNealtQ/profile-framedphoto-shrink_800_800/0/1696192858655?e=1703156400&v=beta&t=qaLi1jwf5iJG795Cg7FAN5NerrbNLlOa1lkI_Mp40Yk"
            }
        ],
        languages: ['Python', 'SQL'],
        background: 'hsla(22, 62%, 76%, 1)',
        browser: 'browser-black.png',
        image1: 'game.png',
        videos: ['game-start.mp4', 'game-shop.mp4', 'game-battle.mp4'],
        overview: "Embark on an enchanting journey through the realm of Eldoria with this Python and SQL-powered Command Line Interface (CLI) game. Within this captivating adventure, players can traverse diverse regions of the map, embarking on quests to discover gold, engage in thrilling monster battles, acquire weaponry, solve intricate puzzles, and ultimately face off against the malevolent dragon, Zuko. The game's meticulously designed SQL tables facilitate intricate many-to-many relationships among monsters, locations, items, and users. Furthermore, strategically placed while loops ensure continuous user engagement by prompting specific responses. To enhance immersion, the game incorporates 'pygame' for tailored sound effects that punctuate pivotal actions throughout the gameplay experience.",
        github: "https://github.com/Matt827/Phase-3-group-4-project"
    },
    {
        id: 4,
        class: 'flask',
        title: 'FitFlav',
        team: [
            {
                name: "Kimberly Love",
                image: "https://media.licdn.com/dms/image/D4E03AQFgtUrOfC2BwA/profile-displayphoto-shrink_800_800/0/1693861469085?e=1703721600&v=beta&t=W7p2V_3X-WZ2dtG07iDTS0y40wkMMoKz2lM7DlRox_U"
            }, 
            {
                name: "Jon Lea",
                image: "https://media.licdn.com/dms/image/D5603AQFBTBgwH828mg/profile-displayphoto-shrink_800_800/0/1693331878825?e=1707955200&v=beta&t=a6Ahxj_aJOWEnXWL-bFHybUGlos2z8sXIYuL7ALKeq0"
            }, 
            {
                name: "Collin Shakes",
                image: "https://media.licdn.com/dms/image/D4E03AQGyWR7W09T_Cg/profile-displayphoto-shrink_800_800/0/1692044745570?e=1707955200&v=beta&t=Dtu3wHq6JmAxxm3kSWqZ7e6sMJ6FT0jpjASY01wYUtc"
            }
        ],
        languages: ['Flask', 'SQLAlchemy', 'React.js', 'CSS'],
        background: 'hsla(284, 61%, 74%, 1)',
        browser: 'browser-blue.png',
        image1: 'fitconnectpicture1.png',
        videos: ['fitconnect2.mp4', 'fitconnect3.mp4', 'fitconnect1.mp4'],
        overview: "Embark on a fitness-centered social media journey with this robust full-stack application, skillfully crafted using React.js, CSS, Flask, and SQLAlchemy. Upon entry, users are greeted with a login/signup interface, offering the choice to either access existing accounts or establish new ones. Account creation triggers the secure storage of a password hash in the database. Subsequently, the user's unique ID is encoded as a session cookie, allowing them to stay logged on to the main page despite leaving the website. Here, users can peruse an array of posted workouts, extending the opportunity to engage through comments. They're also empowered to contribute their own workouts for fellow users to review and discuss. The authorship of comments grants users the flexibility to edit or remove their contributions.",
        github: "https://github.com/Kmlove/FitConnect-Phase-4-Project"
    },
    {
        id: 5,
        class: 'flask',
        title: 'FitConnect',
        team: [],
        languages: ['Flask', 'SQLAlchemy', 'React.js', 'CSS'],
        background: 'hsla(206, 84%, 86%, 1)',
        browser: 'browser-black.png',
        image1: 'FitFlavImg.png',
        videos: ['FitFlav-Login.mp4', 'FitFlavCalories.mp4', 'FitFlavCommunity.mp4'],
        overview: "Elevate your culinary experience with FitFlav, a platform that empowers users to craft, save, and customize their cherished recipes. Here, you have the ability to fine-tune the calorie count for each creation and generously share your culinary masterpieces with the community. The application offers a seamless process for users to establish their secure profiles, ensuring that passwords are meticulously hashed before storage in the database. FitFlav is intelligently integrated with a food ingredients API, providing precise calorie information for every recipe inputted. Effortlessly adjust the total calorie count while simultaneously fine-tuning the proportions of individual ingredients. Additionally, users can explore and incorporate recipes from the vibrant Community page, expanding the horizons of their culinary repertoire.",
        github: "https://github.com/tanopaul/phase-5-final-project"
    }
];

export {all_projects}