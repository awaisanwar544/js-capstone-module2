const getComments = async (id) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/4GGYGwEvoFtLqcqYJDpq/comments?item_id=${id}`;
  const response = await fetch(url);
  return response.json();
};

export default getComments;