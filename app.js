 // add event listner to a button
 document.getElementById('gen-button').addEventListener('click', generateQuote);

// function genrate button

function generateQuote(){
   const xhr = new XMLHttpRequest();

   xhr.open('GET','http://quotes.stormconsultancy.co.uk/random.json', true);
   xhr.onload = function(){
     if(this.status === 200){
       let response = JSON.parse(this.responseText);
       // show it on screen
       console.log(response);
       document.querySelector('.blockquote').innerHTML = `
                                                          <p class="active active-quote">"${response.quote}"</p>
                                                           
                                                           <cite class = "author">- ${response.author}</cite>
                                                          `
       
      
     }
    
   } 
   xhr.send();
}