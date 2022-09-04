const loadNews = (tap) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${tap}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayNews(data.data))
}
const displayNews = newss => {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';
    newss.forEach(news => {
        // console.log(news);
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('col');
        newsDiv.innerHTML = `
        <div class="card-body">
        <img src="${news.thumbnail_url}" class="img-fluid rounded-start" alt="...">
                            <h5 class="card-title">${news.title}</h5>
                            <p class="card-text">${news.details.slice(0, 200) + '...'}</p>
                            <img class="image-size" src="${news.author.img}" class="img-fluid rounded-start" alt="...">
                            <p class="card-text"><small class="text-muted">${news.author.name}
                            <p class="card-text"><small class="text-muted">${news.author.published_date}
                            
                        
                            </small></p></small></p>
            
                        </div>
        `;
        newsContainer.appendChild(newsDiv);
    })
}
const homeBtn = () => {
    const alb = '08';
    loadNews(alb);
}
const breakingBtn = () => {
    const brk = '01';
    loadNews(brk);
}
const regularBtn = () => {
    const rgl = '02';
    loadNews(rgl);
}
const interBtn = () => {
    const itn = '03';
    loadNews(itn);
}
const sportsBtn = () => {
    const spt = '04';
    loadNews(spt);
}
const entertainmentBtn = () => {
    const ent = '05';
    loadNews(ent);
}
const cultureBtn = () => {
    const cul = '06';
    loadNews(cul);
}
const artsBtn = () => {
    const art = '07';
    loadNews(art);
}
const allBtn = () => {
    const alb = '08';
    loadNews(alb);
}


// loadNews();
