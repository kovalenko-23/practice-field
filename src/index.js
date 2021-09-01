import './sass/main.scss';
const container = document.querySelector('.container');

// ---------------------DESTRUCTURING ASSIGNMENT-------------------------
 const info = {
    title: 'Once Upon a Time',
    protagonist: {
      name: 'Emma Swan',
      enemies: [
        {name: 'Regina Mills', title: 'Evil Queen'},
        {name: 'Cora Mills', title: 'Queen of Hearts'},
        {name: 'Peter Pan', title: `The boy who wouldn't grow up`},
        {name: 'Zelena', title: 'The Wicked Witch'},
      ],
    },
 }


function nestedArrayAndObject(info) {
 
    const {
        title,
        protagonist: { name: protagonistName },
        protagonist: { enemies: [, , { name: enemyName, title: enemyTitle }] }
    } = info;

    const string = `${enemyName} (${enemyTitle}) is an enemy to ${protagonistName} in "${title}"`;
    
    return string;
}
const string = nestedArrayAndObject(info);

container.insertAdjacentHTML('beforeEnd', string);

// _______________________________________________________________________

