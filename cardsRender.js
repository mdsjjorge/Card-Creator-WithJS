
// -------------------- createDiv ---------------------
const createDiv = (k) => {
    let div = document.createElement('div');
    div.innerHTML = 
    `
    <div class="row-container">
        <div class="box orange">
            <div>
                <div class="recipeName${k}"> </div>
                <div>
                    <div>
                        <button class="accordion ">Ingredients</button>
                        <div class="panel">
                            <ul class="recipeIngredients${k}">
                            </ul>
                        </div>
                    </div>

                    <div>
                        <button class="accordion ">Method</button>
                        <div class="panel">
                            <ul class="recipeMethod${k}">
                            </ul>
                        </div>
                    </div>                        
                </div>                        
            </div>
        </div>
    </div>
    `
    document.querySelector('.insertCards').appendChild(div);
}

// -------------------- insertValues ---------------------
const insertValues = (k) => {

    let h2 = document.createElement('h2');
    h2.innerHTML = recipe[k].name;
    document.querySelector(`.recipeName${k}`).appendChild(h2);
    
    for (let i = 0; i < recipe[k].ingredients.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = recipe[k].ingredients[i];   
        document.querySelector(`.recipeIngredients${k}`).appendChild(li);     
    }

    for (let j = 0; j < recipe[k].method.length; j++) {
        let li = document.createElement('li');
        li.innerHTML = recipe[k].method[j];   
        document.querySelector(`.recipeMethod${k}`).appendChild(li);  
    } 
}

// -------------------- cardsCreator ---------------------
const cardsCreator = () => {
    for (let k = 0; k < recipe.length; k++) {
        createDiv(k);
        insertValues(k);            
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
}
