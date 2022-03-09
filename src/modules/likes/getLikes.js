const getLikes = async () => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/4GGYGwEvoFtLqcqYJDpq/likes';
  const response = await fetch(url);
  return response.json();
};

export default getLikes;