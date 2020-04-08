type CitiesResponse = {
  id: number;
  name: string;
  sys: {
    country: string;
  };
}[];

const getCities = (query: string) =>
  fetch(
    `/api/data/2.5/find?q=${query}&cnt=10&appid=b6907d289e10d714a6e88b30761fae22`,
    {}
  )
    .then((res) => res.json())
    .then<CitiesResponse>((res) => res.list)
    .catch(() => [] as CitiesResponse);

export { getCities };
