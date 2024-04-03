import fetch from 'node-fetch'

type responseItemType = {
  id: string
  name: string
}

type WeatherDetailType = {
  zipcode: string
  weather: string
  temp?: number
}

interface WeatherQueryInterface {
  zipcode: string
}

const routeHello = (): string => 'Hello World!'

const routeAPINames = async (): Promise<string> => {
  const url = 'https://www.usemodernfullstack.dev/api/v1/users'
  let data: responseItemType[]
  try {
    const response = await fetch(url)
    data = (await response.json()) as responseItemType[]
  } catch (err) {
    return 'Error'
  }
  const names = data.map((item) => `id: ${item.id}, name: ${item.name}`).join('<br>')
  return names
}

const routeWeather = (query: WeatherQueryInterface): WeatherDetailType => queryWeatherData(query)

const queryWeatherData = (query: WeatherQueryInterface): WeatherDetailType => {
  return {
    zipcode: query.zipcode,
    weather: 'sunny',
    temp: 35,
  }
}

export { routeHello, routeAPINames, routeWeather }
