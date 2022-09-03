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
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
        `;
        newsContainer.appendChild(newsDiv);
    })
}
loadNews();