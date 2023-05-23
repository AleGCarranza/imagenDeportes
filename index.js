import data from "./data.js"

const articles= data.articles
const containerLast = document.getElementById("container")
const firstContainer = document.getElementById("headline")
const containerLoss = document.getElementById("cantLoss")
const containerTitle = document.getElementById("subtitle")
const secondaryGallery = document.getElementById("gallery")
const containerNotice = document.getElementById("container-notice")
const containerVideo = document.getElementById("videos")
let oneArticle= articles.at(0)

const headlineHTML = (articles) => {
    const div = document.createElement("div")
    div.classList.add("img-primary")
    const titleLast = document.createElement("h3")
    titleLast.textContent =articles.title
    const authorLast = document.createElement("h5")
    authorLast.textContent = articles.author
    const timeLast = document.createElement ("span")
    timeLast.textContent = articles.publishedAt
    const descriptionLast = document.createElement("p")
    descriptionLast.textContent = articles.description
    const imageSport = document.createElement("img") 
    imageSport.setAttribute("src", articles.urlToImage)
    imageSport.classList.add("img-primary")
    div.append(imageSport, titleLast, authorLast, timeLast, descriptionLast)
    return div
}

firstContainer.appendChild(headlineHTML(oneArticle))


const secondaryHTML = (articles) => {
    const div = document.createElement("div")
    div.classList.add("img-gallery")
    const titleLast = document.createElement("h3")
    titleLast.textContent = articles.title
    const authorLast = document.createElement("h5")
    authorLast.textContent = articles.author
    const timeLast = document.createElement ("span")
    timeLast.textContent = articles.publishedAt
    const imageSport = document.createElement("img") 
    imageSport.setAttribute("src", articles.urlToImage)
    imageSport.classList.add("img-secondary")
    div.append(imageSport, titleLast, authorLast, timeLast)
    return div
}

articles.forEach(oneArticle => containerTitle.appendChild(secondaryHTML(oneArticle)))
articles.forEach(oneArticle => secondaryGallery.appendChild(secondaryHTML(oneArticle)))
containerLoss.appendChild(secondaryHTML(oneArticle))


const lastMinuteHTML = (articles) => {
    const div = document.createElement("div")
    const titleLast = document.createElement("h3")
    titleLast.textContent = articles.title
    const authorLast = document.createElement("h5")
    authorLast.textContent = articles.author
    const timeLast = document.createElement ("span")
    timeLast.textContent = articles.publishedAt
    const descriptionLast = document.createElement("p")
    descriptionLast.textContent = articles.description

    div.append(titleLast, authorLast, timeLast, descriptionLast)
    return div
}

articles.forEach(oneArticle => containerLast.appendChild(lastMinuteHTML(oneArticle)))
articles.forEach(oneArticle => containerNotice.appendChild(lastMinuteHTML(oneArticle)))

const videoHTML = (articles) => {
    const div = document.createElement("div")
    const titleLast = document.createElement("h3")
    titleLast.textContent = articles.title
    const authorLast = document.createElement("h5")
    authorLast.textContent = articles.author
    const timeLast = document.createElement ("span")
    timeLast.textContent = articles.publishedAt
    const imageVideo = document.createElement("img") 
    imageVideo.setAttribute("src","./assets/video.jpg")
    imageVideo.classList.add("img-primary")

    div.append(imageVideo, titleLast, authorLast, timeLast  )
    return div
}
articles.forEach(oneArticle => containerVideo.appendChild(videoHTML(oneArticle)))