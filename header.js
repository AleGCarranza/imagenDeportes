import data from "./data.js"

const articles= data.articles
const firstContainer = document.getElementById("headline")
let oneArticle= articles.at(0)

export const firstMinuteHTML = (articles) => {
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