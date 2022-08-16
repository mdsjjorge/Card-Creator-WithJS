
// let recipeName = document.querySelector('.recipeName');
// let recipeIngredients = document.querySelector('.recipeIngredients');
// let recipeMethod = document.querySelector('.recipeMethod');

const createDiv = (k) => {
    let div = document.createElement('div');
    div.innerHTML = 
    `
    <div class="row-container">            
    <div class="box orange">
    <div class="recipeName${k}"></div>
    <div class="accordion accordion-flush" id="accordionFlushExample">
    <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
    Ingredients
    </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
    <div class="accordion-body">
    <ul class="recipeIngredients${k}">
    </ul>
    </div>
    </div>
    </div>
    <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
    Method
    </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
    <div class="accordion-body">
    <ul class="recipeMethod${k}">
    </ul>
    </div>
    </div>
    </div>
    </div>
    </div>    
    `
    document.querySelector('.insertCards').appendChild(div);
}

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

const cardsCreator = () => {
    for (let k = 0; k < recipe.length; k++) {
        createDiv(k);
        insertValues(k);    
    }
}