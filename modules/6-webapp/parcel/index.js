import './styles.css'

// const root = document.querySelector('#root')
// let counter = 0
// setInterval(() => {
//     root.innerHTML = counter++
// }, 1000)

const url = 'https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json'

async function getComicUrl() {
    const response = await fetch(url, {})
    const comic = await response.json()
    return comic.img
}

async function findImg() {
    const img = await getComicUrl()

    document.querySelector('.main-img').setAttribute('src', img)
}

findImg()
