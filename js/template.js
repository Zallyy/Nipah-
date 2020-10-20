const url = window.location.href

let id = url.indexOf('=')+1
id = url.substring(id,url.length)

function CreatePage ({title, opening='#', ending='#', episodes, current_episode, image}) {  
    document.getElementById('show-name').innerHTML = title;
    document.getElementById('opening').href = opening;
    document.getElementById('ending').href = ending;
    document.getElementById('episode').innerHTML = `Episode ${current_episode}/${episodes}`
    document.getElementById('show-img').src = image;
    if (id < 6) {
        document.getElementById('back-link').href = './personal_list.html'
    } else {
        document.getElementById('back-link').href = './kai_and_lulu_list.html'
    }
}

CreatePage(shows3[id-1])
