const url = window.location.href

let id = url.indexOf('=')+1
id = url[id]

function CreatePage ({title, opening, ending, episodes, current_episode, image}) {
    document.getElementById('show-name').innerHTML = title;
    document.getElementById('opening').href = opening;
    document.getElementById('ending').href = ending;
    document.getElementById('episode').innerHTML = `Episode ${current_episode}/${episodes}`
    document.getElementById('show-img').src = image;
}

CreatePage(shows[id-1])