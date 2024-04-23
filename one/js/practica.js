const users = [
    {
        name: 'Lionel Messi',
        avatar: '../img/lionel_messi.jpg',
    },
    {
        name: 'Taylor Swift',
        avatar: '../img/taylor_swift.jpg',
    },
    {
        name: 'Stephen Curry',
        avatar: '../img/stephen_curry.webp',
    },
    {
        name: 'aubameyang',
        avatar: '../img/aubameyang.jpg',
    },
    {
        name: 'Bad Bunny',
        avatar: '../img/bad_bunny.webp',
    },
    {
        name: 'Frenkie De Jong',
        avatar: '../img/frenkie_jong.webp',
    },
    {
        name: 'Kendrick Lamar',
        avatar: '../img/kendrick_lamar.webp',
    },
    {
        name: 'Pedri',
        avatar: '../img/pedri.jpg',
    },
    {
        name: 'Phil Foden',
        avatar: '../img/phil_foden.jpg',
    },
    {
        name: 'The Weeknd',
        avatar: '../img/the_weeknd.webp',
    },
];

// Obtener el contenedor donde se mostrarán los cards
const userCardsContainer = document.getElementById('userCardsContainer');

// Iterar sobre el array de usuarios
users.forEach(user => {
    // Crear un elemento div para el card de Bootstrap
    const card = document.createElement('div');
    card.classList.add('col-md-3', 'mb-4');

    // Configurar el contenido del card
    card.innerHTML = `
      <div class="card">
        <img src="${user.avatar}" class="" alt="${user.name}" width="100">
        <div class="card-body">
          <h5 class="card-title">${user.name}</h5>
        </div>
      </div>
    `;

    // Agregar el card al contenedor
    userCardsContainer.appendChild(card);
});