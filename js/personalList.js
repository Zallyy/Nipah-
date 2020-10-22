const showsEl = document.getElementById('shows')

const shows = [
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
        opening: "https://www.youtube.com/watch?v=2St40996LDw",
        ending: "https://www.youtube.com/watch?v=tCaq2HKhjRU",
        id: 2
    },
    {
        title: "Kuma Kuma Kuma Bear",
        episodes: "26",
        current_episode: 4,
        image: "images/shows/kumaBear.jpeg",
        season: "Fall 2020",
        opening: "https://www.youtube.com/watch?v=VVsZRUQ8YH4",
        ending: "https://www.youtube.com/watch?v=VVsZRUQ8YH4",
        id: 3
    },
    {
        title: "Tonikaku Kawaii",
        episodes: "26",
        current_episode: 4,
        image: "images/shows/tonikakuKawaii.jpeg",
        season: "Fall 2020",
        opening: "https://www.youtube.com/watch?v=Cv1Y2chJRWM",
        ending: "https://www.youtube.com/watch?v=lBxLxceGTpY",
        id: 4
    },
    {
        title: "Majo no Tabitabi",
        episodes: "26",
        current_episode: 4,
        image: "images/shows/majoNoTabitabi.jpeg",
        season: "Fall 2018",
        opening: "https://www.youtube.com/watch?v=QdIm6_Tpb8M",
        ending: "https://www.youtube.com/watch?v=X1L7SwPVL6U",
        id: 5
    }
]

function ShowTemplate({title, image, id}) {
  return `
    <a href='./info_page.html?=${id}'>
    <div class="card">
        <div class="img-container">
            <img src="${image}" alt="show image">
        </div>
        <div class="title">${title}</div>
        <p class="view-more">View more</p>
    </div>
    </a>
  `  
}

shows.forEach(show => {
    showsEl.innerHTML += ShowTemplate(show)
})

