const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

// MILESTONE 1 - print the name, role and image string of the team array to the console
// for (let i = 0; i < team.length; i++) {
//     console.log(team[i]);
// }


// MILESTONE 2 - prints the same information to the DOM as strings
// select a dom element where I will put the info
// const teamInfo = document.querySelector('.team_info');
// // create a list of the info from the team array
// const list = document.createElement('ul');
// teamInfo.append(list);
// // populate the list with the info
// for (let i = 0; i < team.length; i++) {
//     const person = team[i];
//     const listItem = document.createElement('li');
//     listItem.innerText = `Name: ${person.name} - Role: ${person.role} - Image: ${person.image}`;
//     list.append(listItem);
// }


// bonus
for (let i = 0; i < team.length; i++) {
    const person = team[i];
    // transform the image string in a real image
    // organize individual members into cards
    const cardMarkup = ` 
    <div class="col-xs-1 col-sm-6 col-lg-4">
    <div class="card rounded-0 border-0 text-center text-secondary mb-3">
    <img src="./assets/img/${person.image}" class="card-img-top rounded-0" alt="${person.image}">
    <div class="card-body">
    <h5 class="card-title">${person.name}</h5>
    <p class="card-text">${person.role}</p>
    </div>
    </div>
    </div>`;
    document.querySelector('.row').insertAdjacentHTML('beforeend', cardMarkup);
}