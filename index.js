import data from "./data.js"

const articles= data.articles
const containerLast = document.getElementById("container")
const firstContainer = document.getElementById("firstContainer")
const firstContainerTwo = document.getElementById("firstContainerTwo")
const containerTitle = document.getElementById("containerTitle")
let oneArticle= articles.at(0)

const firstMinuteHTML = (articles) => {
    const div = document.createElement("div")
    const titleLast = document.createElement("h3")
    titleLast.textContent = oneArticle.title
    const authorLast = document.createElement("h5")
    authorLast.textContent = articles.author
    const timeLast = document.createElement ("span")
    timeLast.textContent = articles.publishedAt
    const descriptionLast = document.createElement("p")
    descriptionLast.textContent = articles.description
    const imageSport = document.createElement("img") 
    imageSport.setAttribute("src", articles.urlToImage)
    div.append(imageSport, titleLast, authorLast, timeLast, descriptionLast)
    return div
}

firstContainer.appendChild(firstMinuteHTML(oneArticle))


const secondaryHTML = (articles) => {
    const div = document.createElement("div")
    const titleLast = document.createElement("h3")
    titleLast.textContent = articles.title
    const authorLast = document.createElement("h5")
    authorLast.textContent = articles.author
    const timeLast = document.createElement ("span")
    timeLast.textContent = articles.publishedAt
    const imageSport = document.createElement("img") 
    imageSport.setAttribute("src", articles.urlToImage)
    div.append(imageSport, titleLast, authorLast, timeLast)
    return div
}

articles.forEach(oneArticle => containerTitle.appendChild(secondaryHTML(oneArticle)))
firstContainerTwo.appendChild(secondaryHTML(oneArticle))

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