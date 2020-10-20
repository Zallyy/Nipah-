const menu = document.getElementById('menu')
const contentMenu = document.getElementById('content-menu')
const topSeason = document.getElementById('top-season')
const seasonsOptions = document.getElementById('seasons-options')

menu.addEventListener('click', () => {
    contentMenu.classList.toggle('inactive')
    contentMenu.classList.toggle('active')
})

topSeason.addEventListener('click', () => {
    seasonsOptions.classList.toggle('inactive')

})