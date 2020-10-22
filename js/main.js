const menu = document.getElementById('menu')
const contentMenu = document.getElementById('content-menu')
const topSeason = document.getElementById('top-season')
const seasonsOptions = document.getElementById('seasons-options')
const content = document.getElementById('content')


menu.addEventListener('click', () => {
    contentMenu.classList.toggle('inactive')
    contentMenu.classList.toggle('active')
    content.classList.toggle("inactive")
})

topSeason.addEventListener('click', () => {
    seasonsOptions.classList.toggle('inactive')
})

