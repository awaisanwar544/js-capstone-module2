class PokeApi {
  baseURL = 'https://pokeapi.co/api/v2/pokemon';

  async getPokemonByRange(first, last) {
    let pokelist = [];
    for (let i = first; i <= last; i += 1){
      const pokemon = await this.getPokemon(i)
      pokelist.push(pokemon);
    }
    return pokelist;
  }

  async getPokemon(id){
    const request = new XMLHttpRequest();
    request.open('GET', `${this.baseURL}/${id}`, false);
    request.setRequestHeader('Credentials', 'omit');
    request.setRequestHeader('Acept', 'application/json');
    request.setRequestHeader('Content-Type', 'text/plain');
    request.send();
    if (request.status === 200) 
      return JSON.parse(request.response);
    return [];

    // const url = `${this.baseURL}/${id}`;
    // const result = await fetch(url);
    // return result.json();
  }

}
export default PokeApi;