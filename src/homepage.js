import PokeApi from './pokeApi.js';

class homepage {
  PokeList = [];

  constructor() {
    this.api = new PokeApi();
  }

  async getPokemonsById(first, last) {
    this.PokeList = await this.api.getPokemonByRange(first,last);
    this.drawCards();
  }

  drawCards() {
    const Container = document.getElementById('pokeContainer');
    Container.innerHTML = '';
    let card = '';
    if (this.PokeList.length > 0) {
      this.PokeList.sort((first, second) => {
        if (first.id > second.id) return 1;
        if (first.id < second.id) return -1;
        return 0;
      });
    }
    this.PokeList.forEach((e, i) => {
        card += `
        <div class="col-4 d-flex justify-content-center p-2">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${e.sprites.other.dream_world.front_default}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${e.name}</h5>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
            </svg>
            <p class="card-text">10 likes</p>
            <div class="row text-right">
              <a id="${e.id}" href="#" class="btn btn-primary float-right">Comments</a>
            </div>
          </div>
        </div>
      </div>
        `;
        return;
      });
      
      Container.innerHTML = card;
  }
}

export default homepage;