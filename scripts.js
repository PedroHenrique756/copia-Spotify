document.addEventListener('DOMContentLoaded', () => {
    // Imagens dos artistas
    const artistasData = [
        {nome: 'Alee', image: 'images/artista-alee.jpeg'},
        {nome: 'Baco Exu', image:'images/artista-baco-exu.jpeg'},
        {nome: 'Jorge & Mateus', image:'images/artista-jorge-mateus.jpg'},
        {nome: 'Matue', image:'images/artista-matue.jpeg'},
        {nome: 'Veigh', image:'images/artista-veigh.jpeg'},
    ];

    // Imagens dos álbuns    
    const albumData = [
        {nome: '333', artista: 'Matue', image: 'images/album-333.jpeg'},
        {nome: '808 CLUB', artista: 'Wiu', image:'images/album-808-club.jpeg'},
        {nome: 'Dos Predios', artista: 'Veigh', image:'images/album-dos-predios.jpeg'},
        {nome: 'Hit Me', artista: 'Billie Eilish', image:'images/album-hit-me.jpg'},
        {nome: 'Tempo.zip', artista: 'Teto', image:'images/album-tempozip-teto.jpeg'},
    ];

    // Divs mapeadas
    const artistaGrid = document.querySelector('.artistas-grid');
    const albunsGrid = document.querySelector('.albuns-grid');

    // Um loop para criar todas as divs
    artistasData.forEach(artista => {
        const artistasCard = document.createElement('div');
        artistasCard.classList.add('artistas-card');

        // Adicionando elementos dentro da div
        artistasCard.innerHTML = `
            <img src="${artista.image}" alt="${artista.nome}">
            <div>
                <h3>${artista.nome}</h3>
                <p>Artista</p>
            </div>
        `;

        // Adicionando ao grid de artistas
        artistaGrid.appendChild(artistasCard);
    });

        albumData.forEach(album => {
        const albumCard = document.createElement('div');
        albumCard.classList.add('album-card');

        // Adicionando elementos dentro da div
        albumCard.innerHTML = `
            <img src="${album.image}" alt="${album.nome}">
            <div>
                <h3>${album.nome}</p>
                <p>${album.artista}</p>
            </div>
        `;

        albunsGrid.appendChild(albumCard);
    });
});

