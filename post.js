function loadData(){
     fetch('https://jsonplaceholder.typicode.com/posts')
     .then(res => res.json())
     .then(data => showData(data))
}

function showData(data){
   const postcontinar = document.getElementById('user-nameSection');
   
   for(const user of data){
     const div =document.createElement('div');
     
     div.classList.add('post')
   div.innerHTML = `
          <h3>id${user.title}</h3> 
          <h5>tital${user.id}</h5>
          <p>Description${user.body}</p>   
          `
     postcontinar.appendChild(div)
   }
}