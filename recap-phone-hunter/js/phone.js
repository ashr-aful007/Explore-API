const dataload = async (searchPhone, dataLimit) =>{
     const url = `https://openapi.programming-hero.com/api/phones?search=${searchPhone}`
     const res = await fetch(url);
     const data = await res.json();
     displayData(data.data, dataLimit)
}

const displayData = (phones,dataLimit )=>{
   
 
  
    const phoneContaner = document.getElementById('phone-Contaner');
    phoneContaner.innerText = '';


    const vewAllbtn = document.getElementById('vew-all-btn');
    if(dataLimit && phones.length > 10){
      phones = phones.slice(0, 10);
      vewAllbtn.classList.remove('d-none')
    }
    else{
      vewAllbtn.classList.add('d-none')
    }

    //no phone found massege
    const noPhoneAlrt = document.getElementById('no-phoneAlrt');
      if(phones.length === 0){
      noPhoneAlrt.classList.remove('d-none')
    }
    else{
      noPhoneAlrt.classList.add('d-none')
    }
   

    phones.forEach(phone =>{      
       const phoneDiv = document.createElement('div');
       phoneDiv.classList.add('col');
       phoneDiv.innerHTML = `      
       <div class="card">
         <img src="${phone.image}" class="card-img-top" alt="...">
         <div class="card-body">
           <h5 class="card-title">${phone.phone_name}</h5>
           <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
           <button href="#" onclick="detailsLoad('${phone.slug}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Show Details</button>
         </div>
       </div>    
       `;
       phoneContaner.appendChild(phoneDiv)

    })
    toggleSpiner(false)
}


const searchInputText = (dataLimit) =>{     
     const inputFildText = document.getElementById('input-fildText');    
     const searchText = inputFildText.value;
     dataload(searchText,dataLimit)
    //  inputFildText.value = '';
     
  }


document.getElementById('search-input').addEventListener('click', function(){
  toggleSpiner(true)
     searchInputText(10)

})

document.getElementById('input-fildText').addEventListener('keypress', function(event){
  
   if(event.key === 'Enter'){
    searchInputText(10)
    toggleSpiner(true) //start loader
   }
})

//loader spinner 
const toggleSpiner = isloading =>{
  const loaderSpinr = document.getElementById('loader');
  if(isloading == true){
    loaderSpinr.classList.remove('d-none')
  }
  else{
    loaderSpinr.classList.add('d-none')
  }
}


 document.getElementById('btn-vew-all').addEventListener('click', function(){
      searchInputText()
 })


 const detailsLoad = async id =>{
  const url = `https://openapi.programming-hero.com/api/phone/${id}`
  const res = await fetch(url)
  const data = await res.json()
  displayPhoneDitails(data.data)


 }

 const displayPhoneDitails = phone =>{
  console.log(phone)
      const modaltital = document.getElementById('exampleModalLabel')
      modaltital.innerText = phone.name;

      const phoneDetails = document.getElementById('phone-details');
      phoneDetails.innerHTML = `
         <p>Relese Date:${phone.releaseDate ? phone.releaseDate : 'No relise date'}</p>   
      `
 }
 







dataload('apple');