export async function getLatestLocations(cantReviews) {
  const LATEST_LOCATION = "https://rickandmortyapi.com/api/location";

  const rawData = await fetch(LATEST_LOCATION);
  const json = await rawData.json();

  const { results } = json;

  // Limitar los resultados según la cantidad especificada
  const limitedResults = results.slice(0, cantReviews);

  if (cantReviews) {
    return limitedResults.map((item) => {
      const { name, id, type, dimension } = item;

      const dimensionIcons = {
        Planet: "earth-outline",
        Microverse: "planet-outline",
        Station: "rocket-outline",
      };

      const iconKey = Object.keys(dimensionIcons).find((key) =>
        dimension.includes(key),
      );

      const icon = dimensionIcons[iconKey] || false;

      return {
        name,
        id,
        type,
        dimension,
        icon,
      };
    });
  }

  return results.map((item) => {
    const { name, id, type, dimension } = item;

    const dimensionIcons = {
      Planet: "earth-outline",
      Microverse: "planet-outline",
      Space: "rocket-outline",
    };

    let iconKey = Object.keys(dimensionIcons).find((key) =>
      dimension.includes(key),
    );

    let icon = dimensionIcons[iconKey] || false;

    return {
      name,
      id,
      type,
      dimension,
      icon,
    };
  });
}
