//  creates a request variable and XMLHttpRequest() object   is to iteract with server
var request= new XMLHttpRequest()
//  make a connection with the URL end point 
request.open('GET','https://ghibliapi.herokuapp.com/films')
// Now we access data  inside onload function 
request.onload=function(){
     // converting the JSON response to javascript variable as data
    var data=  JSON.parse(this.response)
    // to handle error if any. 200 is ok 
    if(request.status>=200 && request.status<400){
    // print out the title of each movie using forEach
    data.forEach(movie=>{

        // make a card first, then h1 and  description of movie
        const card=document.createElement('div')
        card.setAttribute('class','card')
        //  now make h1
        const h1=document.createElement('h1')
        h1.setAttribute('class','h1')
        h1.textContent=movie.title
    
        const para=document.createElement('p')
        movie.description=movie.description.substring(0,300)
        para.textContent=movie.description
        
// put the card in the container
container.appendChild(card)
// put h1 and para in the card
card.appendChild(h1)
card.appendChild(para)
    }) 
    }else{
        console.log('There is some error  in handling the JSON response')
    }
}
// now we send request to the URL to get data
request.send();
// accessing the root 
const app=document.getElementById('root')
// our application contains logo on the top, so to make logo 

// this is to create a logo at the top of the page
const logo=document.createElement('img')
logo.src="logo.jpg";

//  create a container to put the card on
// this  code is to  create => <div class='container'>
const container= document.createElement('div')
container.setAttribute('class','container')

// Lets append logo and the container to the  app which is root
app.appendChild(logo)
app.appendChild(container)

// This DOM make front end console as 
// <div id="root">
//   <img src="logo.png" />
//   <div class="container"></div>
// </div>







