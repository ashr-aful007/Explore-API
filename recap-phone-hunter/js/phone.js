const dataload = async (searchPhone) =>{
     const url = `https://openapi.programming-hero.com/api/phones?search=${searchPhone}`
     const res = await fetch(url);
     const data = await res.json();
     displayData(data.data)
}

const displayData = phones =>{

    const phoneContaner = document.getElementById('phone-Contaner');

    phones.forEach(phone =>{
     
       const phoneDiv = document.createElement('div');
       phoneDiv.classList.add('col');
       phoneDiv.innerHTML = `      
       <div class="card">
         <img src="${phone.image}" class="card-img-top" alt="...">
         <div class="card-body">
           <h5 class="card-title">${phone.phone_name}</h5>
           <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
         </div>
       </div>    
       `;
       phoneContaner.appendChild(phoneDiv)

    })
}

const searchInputText = () =>{
     const inputFildText = document.getElementById('input-fildText');
     const searchText = inputFildText.value;
     dataload(searchText)
     
  }


document.getElementById('search-input').addEventListener('click', function(){
     searchInputText()

})






dataload()