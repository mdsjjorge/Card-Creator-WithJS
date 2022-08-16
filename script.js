
let recipeName = document.querySelector('.recipeName');
let recipeIngredients = document.querySelector('.recipeIngredients');
let recipeMethod = document.querySelector('.recipeMethod');

const creator = () => {

    let h2 = document.createElement('h2');
    h2.innerHTML = recipe[0].name;
    document.querySelector('.recipeName').appendChild(h2);
    
    for (let i = 0; i < recipe[0].ingredients.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = recipe[0].ingredients[i];   
        document.querySelector('.recipeIngredients').appendChild(li);     
    }

    for (let j = 0; j < recipe[0].method.length; j++) {
        let li = document.createElement('li');
        li.innerHTML = recipe[0].method[j];   
        document.querySelector('.recipeMethod').appendChild(li);  
    } 
}
