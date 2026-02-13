import { getEpisodesInCharacter, getLatestEpisodes } from "./episode";

export async function getLatestCharacter(cantReviews) {
  const LATEST_GAMES = "https://rickandmortyapi.com/api/character";

  const rawData = await fetch(LATEST_GAMES);
  const json = await rawData.json();

  const { results } = json;

  // Limitar los resultados según la cantidad especificada
  const limitedResults = results.slice(0, cantReviews);

  if (cantReviews) {
    return limitedResults.map((item) => {
      const { name, id, image, status, species } = item;
      return {
        name,
        id,
        image,
        status,
        species,
      };
    });
  }

  return results.map((item) => {
    const { name, id, image, status, species } = item;

    // crea la imagen
    // const { bucketType, bucketPath } = image;
    // const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;

    return {
      name,
      id,
      image,
      status,
      species,
    };
  });
}

export async function getCharacterDetails(id) {
  const CHARACTER_DETAILS = `https://rickandmortyapi.com/api/character/${id}`;

  const rawData = await fetch(CHARACTER_DETAILS);
  const json = await rawData.json();

  const components = json;
  const { name, image, status, species, origin, location, episode } =
    components;

  // get the reviews
  const originPlace = origin.name;

  const arrayIds = episode.map((url) => url.split("/").pop());

  const episodes = await getEpisodesInCharacter(arrayIds);

  return {
    image,
    status,
    species,
    originPlace,
    location,
    episodes,
    name,
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
