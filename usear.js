function loadData(){
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then(data => displayData(data))
}

function displayData(data){
    const userData = document.getElementById('user-data');
    for(const user of data){
   const div = document.createElement('div')
     div.classList.add('user')
     div.innerHTML = `
             <h4>user ${user.name}</h4>
             <h5>email ${user.email}</h5>
             <p>addres ${user.address.city}</p>
     `
     userData.appendChild(div)
    }
}