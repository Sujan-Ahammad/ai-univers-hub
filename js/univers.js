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
        console.log(singleData);
        const cardDiv=document.createElement('div')
        cardDiv.classList.add('card')
        cardDiv.innerHTML = `

        <div class="col">
          <div class="card p-4">
            <img src="${singleData.image}" class="p-3 card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title fs-3 fw-bold ">features</h5>
              <div >
              <p class="mb-2 card-text fw-light">
              1. ${singleData.features[0]}
              </p>
              <p class="mb-2 card-text fw-light">
              2. ${singleData.features[1]}
              </p>
              <p class="card-text fw-light">
              3. ${singleData.features[2]}
              </p>
              </div>
            </div>
            <div class="card-footer ">
            <div>
            <h1 class="fw-semibold">${singleData.name}</h1>
            </div>
            <div class="d-flex justify-content-between">
            <div><p><i class="fa-solid fa-calendar-days"></i> ${singleData.published_in}</p></div>
            
            <div>
            <i class="fa-solid fa-arrow-right"></i>
            </div>
            </div>
              
            </div>
          </div>
        </div>
        
        `;
        mainCard.appendChild(cardDiv)
        


    })



}