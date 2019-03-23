const mainDiv = document.getElementById("div");
const selector = document.getElementById("selector");
var apiKey = '2fea6986d2c14521ae1c56e32077b122';
var newsName = document.getElementById("newsName");
const defaultVal = "the-washington-post";

window.addEventListener('load', async a => {
    await updateSelector();
    updateNews();
    selector.value = defaultVal;
    selector.addEventListener('change', a => {
        updateNews(a.target.value);
    })
})
async function updateSelector() {
    const selectorUrl = await fetch(`https://newsapi.org/v1/sources`);
    const selectorData = await selectorUrl.json();
    selector.innerHTML = selectorData.sources.map(src => `<option value="${src.id}">${src.name}</option>`).join("\n");
}
async function updateNews(params = defaultVal) {
    const mainUrl = await fetch(`https://newsapi.org/v1/articles?source=${params}&apikey=${apiKey}`);
    const mainData = await mainUrl.json();
    newsName.innerHTML = params.toUpperCase();
    mainDiv.innerHTML = mainData.articles.map(newArticles).join('\n');
}
function newArticles(article) {
    return `
    <div class="col-md-8 col-md-offset-2">
    <h2 class='h2'>${article.title}</h2>
    <img class="img-rounded" width='100%' src="${article.urlToImage}"/>
    <p class='h4'>${article.description}</p>
    </div>`
}