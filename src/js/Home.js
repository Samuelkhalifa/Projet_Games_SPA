const Home = () => {

    const pageContentHome = document.querySelector("#pageContent")
    
    async function loadingApiDatas() {
        const URL = `https://api.rawg.io/api/games?page_size=40&dates=2021-01-01,2023-12-31&key=af75f58410ec453b8bc2f81c1360b4ab`
        const response = await fetch(`${URL}`)
        const data = await response.json()
        displayGamesActu(data.results)
    };

    function displayGamesActu(i) {
        console.log(i)
        for( var j=0 ; j<i.length ; j++) {
            pageContentHome.innerHTML += `
            <div class="game-card mt-3 mb-3 d-flex">
                <div class="game-pic">
                    <img src="${i[j].short_screenshots[0].image}">
                </div>
                <div class="game-detail mx-3">
                    <h1>${i[j].name}</h1>
                    <h4>Released :${i[j].released}</h4>
                </div>
            </div>
        `}
    }
    loadingApiDatas()
}


export default Home;