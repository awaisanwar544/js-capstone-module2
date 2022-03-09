const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/4GGYGwEvoFtLqcqYJDpq/likes';

const postLike = async (data = {}) => {
  const response = await fetch(URL, {
    method: 'POST',
    mode: 'cors',
    credentials: 'omit',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  });

  return response.text();
};

export default postLike;