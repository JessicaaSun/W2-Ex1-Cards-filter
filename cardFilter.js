const filterFruit = () => {
   const input = document.getElementById('fruit').value.toLowerCase();
   const cardsContainer = document.getElementById('cardsContainer');

   const cards = cardsContainer.getElementsByClassName('card');

   for(let i = 0 ; i < cards.length; i++) {
       let name = cards[i].querySelector("h3#name");
    
       if(name.innerText.toLowerCase().indexOf(input) > -1) {
        cards[i].style.display = "";
       } else {
        cards[i].style.display = "none";
       }
   }
}