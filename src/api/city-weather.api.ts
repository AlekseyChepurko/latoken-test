type WatherResponse = {
  weather: {
    icon: string;
  }[],
  main: {
    temp: number;
    pressure: number;
  };
  wind: {
    speed: number;
  };
  name: string;
  cod: number;
  message?: string;
};

const getCityWeather = (id: number) =>
  fetch(
    `/weather/api/data/2.5/weather?id=${id}&cnt=10&appid=df1066ca5785a2b8dab3c7535b89a66d`,
    {}
  )
    .then<WatherResponse>((res) => res.json())
    .then((r) => {
      if (r.cod !== 200) {
        throw new Error(r.message);
      }
      return r;
    });

export { getCityWeather };
