export async function getLatestEpisodes(cantReviews) {
  const LATEST_EPISODES = `https://rickandmortyapi.com/api/episode`;

  const rawData = await fetch(LATEST_EPISODES);
  const json = await rawData.json();

  const { results } = json;

  // Limitar los resultados según la cantidad especificada
  const limitedResults = results.slice(0, cantReviews);

  if (cantReviews) {
    return limitedResults.map((item) => {
      const { name, id, air_date, episode } = item;

      const code = episode;

      return {
        name,
        id,
        air_date,
        code,
      };
    });
  }

  return results.map((item) => {
    const { name, id, air_date, episode } = item;
    const code = episode;

    return {
      name,
      id,
      air_date,
      code,
    };
  });
}

// export async function getCharacterEpisodes(characterEpisodes, cantReviews) {
//   const CHARACTER_EPISODES = `https://rickandmortyapi.com/api/episode/${characterEpisodes}`;

//   const rawData = await fetch(CHARACTER_EPISODES);
//   const json = await rawData.json();

//   const results = json;

//   // Limitar los resultados según la cantidad especificada

//   if (cantReviews) {
//     const limitedResults = results.slice(0, cantReviews);
//     return limitedResults.map((item) => {
//       const { name, id, episode } = item;

//       const code = episode;

//       return {
//         name,
//         id,
//         code,
//       };
//     });
//   }

//   return results.map((item) => {
//     const { name, id, episode } = item;
//     const code = episode;

//     return {
//       name,
//       id,
//       code,
//     };
//   });
// }

export async function getEpisodeDetails(id) {
  const CHARACTER_DETAILS = `https://rickandmortyapi.com/api/episode/${id}`;

  const rawData = await fetch(CHARACTER_DETAILS);
  const json = await rawData.json();

  const components = json;
  const { name, air_date, episode, characters } = components;
  const code = episode;

  const arrayIds = characters.map((url) => url.split("/").pop());
  const charactersIn = await getCharacterInEpisodes(arrayIds);

  return {
    name,
    air_date,
    code,
    charactersIn,
  };
}

export async function getCharacterInEpisodes(characterEpisodes, cantReviews) {
  const URL = `https://rickandmortyapi.com/api/character/${characterEpisodes}`;

  const rawData = await fetch(URL);
  const json = await rawData.json();

  const results = Array.isArray(json) ? json : [json];

  const dataToProcess = cantReviews ? results.slice(0, cantReviews) : results;

  return dataToProcess.map((item) => ({
    name: item.name,
    id: item.id,
    status: item.status,
    species: item.species,
    image: item.image,
  }));
}
