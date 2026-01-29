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

  return {
    name,
    air_date,
    code,
    characters,
  };
}

export async function getCharacterEpisodes(characterEpisodes, cantReviews) {
  // Manejamos el caso de que characterEpisodes sea un array o un solo ID
  const ids = Array.isArray(characterEpisodes)
    ? characterEpisodes.join(",")
    : characterEpisodes;
  const URL = `https://rickandmortyapi.com/api/episode/${ids}`;

  const rawData = await fetch(URL);
  const json = await rawData.json();

  // La API devuelve un objeto si es solo uno, lo normalizamos a Array
  const results = Array.isArray(json) ? json : [json];

  // Limitamos resultados si es necesario
  const dataToProcess = cantReviews ? results.slice(0, cantReviews) : results;

  return dataToProcess.map((item) => ({
    name: item.name,
    id: item.id,
    code: item.episode,
  }));
}
