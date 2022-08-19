const inputFilter = document.querySelector('.input-filter');
const cardList = document.querySelector('#card-list');
var foundedCards;

// -------------------- filterNames ---------------------
function filterNames (search) {         
    for (foundedCards = 0; foundedCards < recipe.length; foundedCards++) {
        let valueIncluded = recipe[foundedCards].name.toLowerCase().includes(search.toLowerCase());
        if(valueIncluded) {
            return foundedCards;
        }
    }
}

// -------------------- cleanScreen ---------------------
const cleanScreen = () => {
        document.querySelector('.insertCards').innerHTML = '';   
}

// -------------------- inputFilter ---------------------
inputFilter.addEventListener('input', function() {

    if (inputFilter.value.length === 0) {
        cleanScreen();
        cardsCreator();
    } else {
        filterNames(inputFilter.value);    
        
            if (foundedCards === 5) {
                cleanScreen();
                let div = document.createElement('div');
                div.innerHTML = 
                `
                <div class="row-container">
                    <div class="box orange">
                        <div>
                            <h2> Recipe name not founded. </h2>         
                        </div>
                    </div>
                </div>
                `
                document.querySelector('.insertCards').appendChild(div);
                
            } else {
                cleanScreen();
                createDiv(foundedCards);
                insertValues(foundedCards);   
            }    
        }

        let accordion = document.querySelectorAll('.accordion');
        for (let i = 0; i < accordion.length; i++) {
            accordion[i].addEventListener('click', function() {
                this.classList.toggle('active');
                let next = this.nextElementSibling;
                if (next.style.display === 'block') {
                    next.style.display = 'none';
                } else {
                    next.style.display = 'block';
                }
            })            
        }        

})

