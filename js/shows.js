const shows3 = [
    {
        title: "Higurashi no Naku Koro Ni Gou",
        episodes: "26",
        current_episode: 4,
        image: "images/shows/higurashiGou.jpg",
        season: "Fall 2020",
        opening: "https://www.youtube.com/watch?v=soQjR5_GHXI",
        ending: "https://www.youtube.com/watch?v=E4_pLpqerqQ",
        id: 1
    },
    {
        title: "Kamisama ni Nitta hi",
        episodes: "26",
        current_episode: 4,
        image: "images/shows/kamisamaNitta.jpeg",
        season: "Fall 2020",
        opening: "https://www.youtube.com/watch?v=soQjR5_GHXI",
        ending: "https://www.youtube.com/watch?v=E4_pLpqerqQ",
        id: 2
    },
    {
        title: "Kuma Kuma Kuma Bear",
        episodes: "26",
        current_episode: 4,
        image: "images/shows/kumaBear.jpeg",
        season: "Fall 2020",
        opening: "https://www.youtube.com/watch?v=soQjR5_GHXI",
        ending: "https://www.youtube.com/watch?v=E4_pLpqerqQ",
        id: 3
    },
    {
        title: "Tonikaku Kawaii",
        episodes: "26",
        current_episode: 4,
        image: "images/shows/tonikakuKawaii.jpeg",
        season: "Fall 2020",
        opening: "https://www.youtube.com/watch?v=soQjR5_GHXI",
        ending: "https://www.youtube.com/watch?v=E4_pLpqerqQ",
        id: 4
    },
    {
        title: "Majo no Tabitabi",
        episodes: "26",
        current_episode: 4,
        image: "images/shows/majoNoTabitabi.jpeg",
        season: "Fall 2018",
        opening: "https://www.youtube.com/watch?v=3JmvuPaFbZw",
        ending: "https://www.youtube.com/watch?v=X1L7SwPVL6U",
        id: 5
    },
    {
        title:"Higurashi No Naku Koro Ni",
        episodes:26,
        current_episode: 26,
        image:"images/shows/higurashi_no_naku_koro_ni.jpg",
        status:"finished",
        initial_display:"inactive",
        anilist: "https://anilist.co/anime/934/When-They-Cry/",
        id: 6
    },
    
    {
        title:"Higurashi No Naku Koro Ni Kai",
        episodes:26,
        current_episode: 26,
        image:"images/shows/higurash_kai.jpg",
        status:"finished",
        initial_display:"inactive",
        anilist: "https://anilist.co/anime/1889/When-They-Cry-Kai/",
        id: 7
    },

    {
        title:"Sing 'Yesterday' For Me",
        episodes:12,
        current_episode: 12,
        image:"images/shows/Yesterday-wo-Uttate.jpg",
        status:"finished",
        initial_display:"inactive",
        anilist: "https://anilist.co/anime/109020/SING-YESTERDAY-FOR-ME/",
        link: "https://4anime.to/yesterday-wo-utatte-episode-",
        id: 8
    },

    {
        title:"Another",
        episodes:13,
        current_episode: 13,
        image:"images/shows/another.jpg",
        status:"finished",
        initial_display:"inactive",
        anilist: "https://anilist.co/anime/11111/Another/",
        id: 9
    },

    {
        title:"White Album 2",
        episodes:13,
        current_episode: 13,
        image:"images/shows/white_albumn_2.jpg",
        status:"finished",
        initial_display:"inactive",
        anilist: "https://anilist.co/anime/18245/White-Album-2/",
        id: 10
    },

    {
        title:"Chihayafuru 3",
        episodes:24,
        current_episode: 24,
        image:"images/shows/chihayafuru.jpg",
        status:"finished",
        initial_display:"inactive",
        anilist: "https://anilist.co/anime/101215/Chihayafuru-3/",
        id: 11
    },

    {
        title:"Dennou Coil",
        episodes:26,
        current_episode: 26,
        image:"images/shows/dennou_coil.jpg",
        status:"finished",
        initial_display:"inactive",
        anilist: "https://anilist.co/anime/2164/Dennoh-Coil/",
        link: "https://4anime.to/dennou-coil-episode-",
        id: 12
    },

    {
        title:"My Next Life as a Villainess",
        episodes:12,
        current_episode: 12,
        image:"images/shows/otome.jpg",
        status:"finished",
        initial_display:"inactive",
        anilist: "https://anilist.co/anime/104647/My-Next-Life-as-a-Villainess-All-Routes-Lead-to-Doom/",
        link: "https://4anime.to/hamefura-episode-",
        id: 13
    },

    {
        title:"Ride Your Wave",
        episodes:1,
        current_episode: 1,
        image:"images/shows/ride_your_wave.jpg",
        status:"finished",
        initial_display:"inactive",
        anilist: "https://anilist.co/anime/105018/Ride-Your-Wave/",
        id: 14
    },

    {
        title:"Yona of the Dawn",
        episodes:24,
        current_episode: 24,
        image:"images/shows/yona.jpg",
        status:"finished",
        initial_display:"inactive",
        anilist: "https://anilist.co/anime/20770/Yona-of-the-Dawn/",
        id: 15
    },

    {
        title:"Stars Align!",
        episodes:12,
        current_episode: 12,
        image:"images/shows/stars_align.jpg",
        status:"finished",
        initial_display:"inactive",
        anilist: "https://anilist.co/anime/104052/Stars-Align/",
        id: 16
    },

    {
        title:"Letter to Momo",
        episodes:1,
        current_episode: 1,
        image:"images/shows/momo.jpg",
        status:"finished",
        initial_display:"inactive",
        anilist: "https://anilist.co/anime/10389/A-Letter-to-Momo/",
        id: 17
    },

    {
        title:"Love Lab",
        episodes:13,
        current_episode: 13,
        image:"images/shows/love_lab.jpg",
        status:"finished",
        initial_display:"inactive",
        anilist: "https://anilist.co/anime/16353/Love-Lab/",
        id: 18
    },
    
    {
        title:"Revolutionary Girl Utena",
        episodes:39,
        current_episode: 23,
        image:"images/shows/utena.jpg",
        status:"finished",
        initial_display:"",
        anilist: "https://anilist.co/anime/440/Revolutionary-Girl-Utena/",
        id: 19
    }
]