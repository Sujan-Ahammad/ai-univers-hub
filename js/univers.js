const loadData = () => {
    const URL = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(URL)
    .then(res=>res.json())
    .then(data=>displayAllData(data.data))


}
loadData()

const displayAllData = (datas) => {
    // console.log(data.tools);

    const mainCard = document.getElementById('main-card');

    datas.tools.forEach(singleData => {
        console.log(singleData.features);
        const cardDiv=document.createElement('div')
        cardDiv.classList.add('card')
        cardDiv.innerHTML = `

        <div class="col">
          <div class="card w-full">
            <img src="${singleData.image}" class="p-3 card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title text-2xl">features</h5>
              <p class="card-text">
              1. ${singleData.features[0]}
              </p>
              <p class="card-text">
              2. ${singleData.features[1]}
              </p>
              <p class="card-text">
              3. ${singleData.features[2]}
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        
        `;
        mainCard.appendChild(cardDiv)
        


    })



}