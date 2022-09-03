const loadNews = () => {
    fetch('https://openapi.programming-hero.com/api/news/category/01')
        .then(res => res.json())
        .then(data => displayNews(data.data))
}
const displayNews = newss => {
    const newsContainer = document.getElementById('news-container');
    newss.forEach(news => {
        console.log(news);
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('col');
        newsDiv.innerHTML = `
        <div class="card-body">
        <img src="${news.thumbnail_url}" class="img-fluid rounded-start" alt="...">
                            <h5 class="card-title">${news.title}</h5>
                            <p class="card-text">${news.details}</p>
                            <p class="card-text"><small class="text-muted">${news.author.name}
                            <p class="card-text"><small class="text-muted">${news.author.published_date}
                            </small></p></small></p>
                        </div>
        `;
        newsContainer.appendChild(newsDiv);
    })
}
loadNews();