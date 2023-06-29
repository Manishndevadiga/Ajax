
console.log("Connected succesfulluy")

    var next = document.getElementsByClassName("next")[0];
    next.addEventListener('click', () =>{

        // Create an XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Prepare the request
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

xhr.onprogress = function() {
  console.log(xhr.status);
}


// Define a callback function to handle the response
xhr.onload = function() {
  if (xhr.status === 200) {
    // Request was successful
    var response = xhr.response; //we can use this.response

    // Handle the response data here which is in json format
    console.log(response);

    var obj = JSON.parse(this.response);  //converting json to array object
    
console.log(obj);


var list= document.getElementById('list');
str="";
for(key in obj)
{
  str+=`<li>${obj[key].id} <br> ${obj[key].title} <br> ${obj[key].body} <br> ${obj[key].userId}</li>`;
 
}
list.innerHTML = str;


  } else {
    // Request failed
    console.error('Request failed. Status:', xhr.status);
  }
};

// Send the request
xhr.send();  

   
});




      
  
  




