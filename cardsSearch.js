const inputFilter = document.querySelector('.input-filter');
const nameList = document.querySelector('#name-list');

const names = [
      'Dawson Schroeder',
      'Ella Rivera',
      'Cory Mcneil',
      'Fletcher Newton',
      'Kassandra Moody',
      'Walter Erickson',
      'Reese Sawyer',
      'Jenny Benton',
      'Keyla Day',
      'Iris Benjamin',
      'Alyvia Decker',
      'Taniya Lane',
      'Issac Meyer',
      'Justus Waller',
      'Jarrett Werner',
      'Darion Edwards',
      'Alicia Buckley',
      'Kaydence Nunez',
      'Malachi Kennedy',
      'Ashlyn Warren',
      'Eva Gilbert',
      'Breanna Bradford',
      'Yasmin Cordova',
      'Amina Petersen',
      'Javier Browning',
      'Aydan Best',
      'Kristin Blake',
      'Harper Hayes',
      'Myles Hays',
      'Kathy Bright',
      'Karina Dunlap',
      'Brice Wilcox',
      'Yahir Bishop',
      'Zackery Hobbs',
      'Patricia Escobar',
      'Taniya Diaz',
      'Liana Cline',
      'Shayna Pruitt',
      'Everett Wood',
      'Jenna Dickerson',
      'Tyrone Henderson',
      'Jorge Combs',
      'Gael Cantu',
      'Ruby Anthony',
      'Roselyn Nelson',
      'Saige Mitchell',
      'Liberty Parrish',
      'Kassandra Stevenson',
      'Viviana Forbes',
      'Mckayla Reyes',
      'Zane Boyd',
      'Raymond Case',
      'Jamarcus Mahoney',
      'Dante Mcpherson',
      'Nathan Ayala',
      'Tamara Blair',
      'Dayanara Watson',
      'Bryce Elliott',
      'Valentino Zhang',
      'Taniyah Bright',
      'Kristin Glenn',
      'Ashlee Paul',
      'Jerome Tate',
      'Ean Charles',
      'Sidney Ray',
      'Alisa Hubbard',
      'Sherlyn Watson',
      'Raymond Mcgrath',
      'Damian Lane',
      'Elyse Tucker',
      'Lesly Lang',
      'Payten Moreno',
      'Genesis Peterson',
      'Giovanny Mcdowell',
      'Saniyah Shah',
      'Arely Boyle',
      'Deja Barber',
      'Aracely Doyle',
      'Desmond Allison',
      'Virginia Ramsey',
      'Alaina Conway',
      'Holden Waller',
      'Hezekiah Walsh',
      'Devin Estes',
      'Austin Casey',
      'Carolina Richmond',
      'Hayden Velasquez',
      'Lily Mcguire',
      'Joel Hendricks',
      'Shaylee Rivers',
      'Malaki Glover',
      'Lily Jenkins',
      'Quinn Franco',
      'Kason Frazier',
      'Nataly Serrano',
      'Yasmin Simmons',
      'Virginia Michael',
      'Hanna Thornton',
      'Heaven Hurst',
      'Collin Mcguire',
      'Marlee Espinoza',
      'Meadow Wong',
      'Karli Cunningham',
      'Zack Tanner',
      'Ben Higgins',
      'Presley Gamble',
      'Roselyn Manning',
      'Emily Holder',
      'Kristian Guerrero',
      'Darryl Khan',
      'Cassius Fields',
      'Gloria Blackburn',
      'Gage Mcgrath',
      'Steve Branch',
      'Omar Garrett',
      'Kadence Bauer',
      'Parker Porter',
      'Reuben Calhoun',
      'Xavier Nicholson',
      'Aidyn Adkins',
      'Layla Lara',
      'Julianne Murray',
      'Ashly Harvey',
      'Bella Aguilar',
      'Gillian Sandoval',
      'Guadalupe Rubio',
      'Marlie Butler',
      'Camden Yu',
      'Kaylen Vang',
      'Johanna Hartman',
      'Hugo Galvan',
      'Hazel Blackwell',
      'Deandre Green',
      'Fisher Bradshaw',
      'Chaz Small',
      'Allisson Neal',
      'Sofia Bowers',
      'Warren Singleton',
      'Liana Larson',
      'Jane Moss',
      'Liberty Lee',
      'Braxton Mccarthy',
      'Reed Armstrong',
      'Maryjane Newton',
      'Tommy Mcpherson',
      'Ricardo Avila',
      'Madeline Ochoa',
      'Karlie Bass',
      'Joy Gibbs',
      'Jett Carey',
      'Gavyn Wheeler',
      'Sheldon Cannon',
      'Kaylyn Shepard',
      'Naima Frye',
      'Cole Faulkner',
      'Amare Boyd',
      'Lillie Walters',
      'Layne Michael',
      'Addison Patton',
      'Madisyn Hughes',
      'Finley Carr',
      'Teagan Richards',
      'Gabriela Forbes',
      'Trent Mann',
      'Briana Flores',
      'Jalen Robertson',
      'Deja Carroll',
      'Jesus Dennis',
      'Emery Conway',
      'Jayvion Villarreal',
      'Precious Rush',
      'Branden Mcdowell',
      'Mason Carr',
      'Colin Kim',
      'Finnegan Serrano',
      'Marvin Armstrong',
      'Carolyn Clay',
      'Jordyn Lynch',
      'Averie Randolph',
      'Kason Mclaughlin',
      'Skyla David',
      'Tamia Hall',
      'Abigail Lang',
      'Gina Bishop',
      'Catalina Fuller',
      'Caitlyn Gordon',
      'Alfred Cameron',
      'Mayra Yates',
      'Ricardo Strickland',
      'Declan Arellano',
      'Hugh Harris',
      'Tabitha Murray',
      'Angelica Gray',
      'Stephen Schultz',
      'Kaia Kerr',
      'Kelton Hicks',
      'Kaylah Hurley',
      'Aditya Frost',
      'Carlos Daniels',
      'Kira Blankenship',
]

function filterNames (search) {
    let filteredNames = names.filter(function (name) {
    return name.toUpperCase().includes(search.toUpperCase());
    })

    return filteredNames;
}

function showNames (filteredNames) {
    const nameListHTML = filteredNames.map(function (userName) {
    return `<li>${userName}</li>`
    }).join('');

    if (filteredNames.length > 0) {
    nameList.innerHTML = nameListHTML;
    } else {
    nameList.innerHTML = 'Nenhum nome encontrado!';
    }
}

const searchClean = (search) => {
    if (search.length === 0) {
        nameList.innerHTML = '';
    }
}

inputFilter.addEventListener('input', function() {
    const filteredNames = filterNames(inputFilter.value);
    showNames(filteredNames);
    searchClean(inputFilter.value);
})