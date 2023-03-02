const loadData = () => {
    const URL = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(URL)
        .then(res => res.json())
        .then(data => displayAllData(data.data))


}
// loadData()

const displayAllData = (datas) => {
    // console.log(data.tools);

    const mainCard = document.getElementById('main-card');

    datas.tools.forEach(singleData => {
        // console.log(singleData);
        const cardDiv = document.createElement('div')
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
              3. ${singleData.features[2] ? singleData.features[2] : 'Not available'}
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
            <i class="fa-solid fa-arrow-right"
             onclick="cardModal('${singleData.id}')"
             data-bs-toggle="modal" data-bs-toggle="modal" data-bs-target="#extraLargeModal"></i>
            </div>
            </div>
              
            </div>
          </div>
        </div>
        
        `;
        mainCard.appendChild(cardDiv)



    })



}

// Card Modal Section

const cardModal = (id) => {

    const URL = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(URL)
        .then(res => res.json())
        .then(data => displayCardModal(data))



}

const displayCardModal = (data) => {

    console.log(data.data.features);
    const cardModal = document.getElementById('modal-body');

    cardModal.innerHTML = `


    <div class="container text-center p-4">
  <div class="row align-items-start gap-2">
    <div  class="col">
    <div id="left-side">
    <h5 class="card-title fw-bold">${data.data.description} <span class="badge text-bg-warning">
    </span></h5>
    <div class="d-flex justify-content-between mt-4">
      <p id="pricing-box" class="text-success border border fw-bold rounded">${data.data.pricing[0].price}<br> ${data.data.pricing[0].plan}</p>
      <p id="pricing-box" class="text-warning-emphasis border border fw-bold rounded">${data.data.pricing[1].price}<br> ${data.data.pricing[1].plan}</p>
      <p id="pricing-box" class="text-danger border border fw-bold rounded">${data.data.pricing[2].price}<br> ${data.data.pricing[2].plan}</p>
    </div>


    <div class="d-flex justify-content-between mt-2">


  <div>
  <h1 class="fw-bold">features</h1>
  <li>${data.data.features[0]}</li>
  </div>
  
  
  <div>
  <h1 class="fw-bold">integrations</h1>

  <ul>
  <li>${data.data.integrations[0]}</li>
  <li>${data.data.integrations[1]}</li>
  <li>${data.data.integrations[2]}</li>
</ul>

  </div>



</div>



    
  </div>
    </div>
    <div class="col">
    <div id="right-side" class="card p-4 ">
    <img src="${data.data.image_link[0]}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title mt-4 fw-bold">${data.data.input_output_examples[0].input}</h5>
      <p class="card-text mt-4">${data.data.input_output_examples[0].output}</p>
      
    </div>
  </div>
  
  
      
    </div>
      </div>
    </div>
  </div>
</div>

    `


}