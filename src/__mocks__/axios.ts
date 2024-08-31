const mockResponse = {
  data: {
    coord: {
      lon: 3.35,
      lat: 7.15,
    },
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10n",
      },
    ],
    base: "stations",
    main: {
      temp: 22.68,
      feels_like: 23.54,
      temp_min: 22.68,
      temp_max: 22.68,
      pressure: 1011,
      humidity: 97,
      sea_level: 1011,
      grnd_level: 1004,
    },
    visibility: 10000,
    wind: {
      speed: 2.55,
      deg: 218,
      gust: 9.33,
    },
    rain: {
      "1h": 0.6,
    },
    clouds: {
      all: 100,
    },
    dt: 1725069120,
    sys: {
      country: "NG",
      sunrise: 1725082763,
      sunset: 1725126884,
    },
    timezone: 3600,
    id: 2352947,
    name: "Abeokuta",
    cod: 200,
  },
  status: 200,
  statusText: "OK",
  headers: {
    "content-length": "507",
    "content-type": "application/json; charset=utf-8",
  },
  config: {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false,
    },
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [null],
    transformResponse: [null],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {},
    headers: {
      Accept: "application/json, text/plain, */*",
    },
    method: "get",
    url: "https://api.openweathermap.org/data/2.5/weather?q=Abeokuta&appid=e9adce16abaf19448c9a85e45e704632&units=metric",
  },
  request: {},
};

export default {
  get: jest.fn().mockReturnValue(mockResponse),
};
