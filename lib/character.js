export async function getLatestCharacter() {
  const LATEST_GAMES = "https://rickandmortyapi.com/api/character";

  const rawData = await fetch(LATEST_GAMES);
  const json = await rawData.json();

  const { results } = json;

  return results.map((item) => {
    const { name, id, image, status } = item;

    // crea la imagen
    // const { bucketType, bucketPath } = image;
    // const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;

    return {
      name,
      id,
      image,
      status,
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

  const numEpisodes = episode.length;

  // get the reviews
  const originPlace = origin.name;

  return {
    image,
    status,
    species,
    originPlace,
    location,
    numEpisodes,
    name,
  };
}
