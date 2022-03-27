import React from 'react';
import type { GetStaticPropsContext } from 'next';
import { getDataApi } from '@services/getDataApi';
import { ICityWeather } from '@interfaces/ICityWeather';
import { Container } from '@styles/components/Box';
import { Title } from '@styles/components/Title';
import { Temp } from '@styles/components/Temp';
import { CloudDrizzleFillICons, SunICons, TemperatureICons } from '@styles/components/Icons';

const INITIAL_DATA_FETCH_URL = (city: string) => (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2e15b119b196985ebbc0e88160e56bee`);

interface props {
  data: ICityWeather
}

const City: React.FC<props> = ({ data }) => {
  let icon: string;
  let background: string;
  let backgroundColor: string;
  let Color: string;
  switch (data.weather[0].icon) {
    case '01d':
      icon = 'http://openweathermap.org/img/wn/01d@2x.png';
      background = '/img/dia.jpg';
      backgroundColor = 'rgba(255, 255, 255, .6)';
      Color = '#333';
      break;
    case '02d':
      icon = 'http://openweathermap.org/img/wn/02d@2x.png';
      background = '/img/dia.jpg';
      backgroundColor = 'rgba(255, 255, 255, .6)';
      Color = '#333';
      break;
    case '03d':
      icon = 'http://openweathermap.org/img/wn/03d@2x.png';
      background = '/img/nublado.jpg';
      backgroundColor = 'rgba(255, 255, 255, .6)';
      Color = '#333';
      break;
    case '04d':
      icon = 'http://openweathermap.org/img/wn/04d@2x.png';
      background = '/img/nublado.jpg';
      backgroundColor = 'rgba(255, 255, 255, .6)';
      Color = '#333';
      break;
    case '09d':
      icon = 'http://openweathermap.org/img/wn/09d@2x.png';
      background = '/img/chuva.jpg';
      backgroundColor = 'rgba(255, 255, 255, .6)';
      Color = '#333';
      break;
    case '10d':
      icon = 'http://openweathermap.org/img/wn/10d@2x.png';
      background = '/img/chuva.jpg';
      backgroundColor = 'rgba(255, 255, 255, .6)';
      Color = '#333';
      break;
    case '11d':
      icon = 'http://openweathermap.org/img/wn/11d@2x.png';
      background = '/img/chuva.jpg';
      backgroundColor = 'rgba(255, 255, 255, .6)';
      Color = '#333';
      break;
    case '13d':
      icon = 'http://openweathermap.org/img/wn/13d@2x.png';
      background = '/img/neve.jpg';
      backgroundColor = 'rgba(255, 255, 255, .6)';
      Color = '#333';
      break;
    case '50d':
      icon = 'http://openweathermap.org/img/wn/50d@2x.png';
      backgroundColor = 'rgba(255, 255, 255, .6)';
      Color = '#333';
      break;
    case '01n':
      icon = 'http://openweathermap.org/img/wn/01n@2x.png';
      background = '/img/noite.jpg';
      backgroundColor = 'rgba(51, 51, 51, .9)';
      Color = '#fff';
      break;
    case '02n':
      icon = 'http://openweathermap.org/img/wn/02n@2x.png';
      background = '/img/noite.jpg';
      backgroundColor = 'rgba(51, 51, 51, .9)';
      Color = '#fff';
      break;
    case '03n':
      icon = 'http://openweathermap.org/img/wn/03n@2x.png';
      background = '/img/nublado-noite.jpg';
      backgroundColor = 'rgba(51, 51, 51, .9)';
      Color = '#fff';
      break;
    case '04n':
      icon = 'http://openweathermap.org/img/wn/04n@2x.png';
      background = '/img/nublado-noite.jpg';
      backgroundColor = 'rgba(51, 51, 51, .9)';
      Color = '#fff';
      break;
    case '09n':
      icon = 'http://openweathermap.org/img/wn/09n@2x.png';
      background = '/img/chuv-anoite.jpg';
      backgroundColor = 'rgba(51, 51, 51, .9)';
      Color = '#fff';
      break;
    case '10n':
      icon = 'http://openweathermap.org/img/wn/10n@2x.png';
      background = '/img/chuv-anoite.jpg';
      backgroundColor = 'rgba(51, 51, 51, .9)';
      Color = '#fff';
      break;
    case '11n':
      icon = 'http://openweathermap.org/img/wn/11n@2x.png';
      background = '/img/chuv-anoite.jpg';
      backgroundColor = 'rgba(51, 51, 51, .9)';
      Color = '#fff';
      break;
    case '13n':
      icon = 'http://openweathermap.org/img/wn/13n@2x.png';
      background = '/img/snow-noite.jpg';
      backgroundColor = 'rgba(51, 51, 51, .9)';
      Color = '#fff';
      break;
    case '50n':
      icon = 'http://openweathermap.org/img/wn/50n@2x.png';
      backgroundColor = 'rgba(51, 51, 51, .9)';
      Color = '#fff';
      break;
    default:
      break;
  }

  const temperatureKelvin = data.main.temp;

  const temperatureCelsius = temperatureKelvin - 273.15;

  const temperatureMaxKelvin = data.main.temp_max;

  const temperatureMaxCelsius = temperatureMaxKelvin - 273.15;

  const temperatureMinKelvin = data.main.temp_min;

  const temperatureMinCelsius = temperatureMinKelvin - 273.15;

  let colorIcon: string;

  if (temperatureMinCelsius > 20) {
    colorIcon = '#EE3A3A';
  } else {
    colorIcon = '#3A86EE';
  }
  return (
    <Container style={{ backgroundImage: `url(${background})` }}>
      <div className="containerCenter" style={{ background: backgroundColor }}>
        <div className="main">
          <img src={icon} alt="icon" />
          <Title style={{ color: Color, marginTop: '-5px', fontSize: '3rem' }}>
            {data.name}
          </Title>
        </div>
        <Temp>
          <TemperatureICons style={{ color: colorIcon }} />
          <h2 style={{ color: Color }}>{`${temperatureCelsius.toFixed(0)}°c`}</h2>
        </Temp>
        <Temp style={{ justifyContent: 'space-evenly' }}>
          <div className="tempMaxMin">
            <h2 style={{ color: Color }}>Max</h2>
            <SunICons />
            <h3 style={{ color: Color }}>{`${temperatureMaxCelsius.toFixed(0)}°c`}</h3>
          </div>
          <div className="tempMaxMin">
            <h2 style={{ color: Color }}>Min</h2>
            <CloudDrizzleFillICons />
            <h3 style={{ color: Color }}>{`${temperatureMinCelsius.toFixed(0)}°c`}</h3>
          </div>
        </Temp>
        <div className="buttonBack" aria-hidden onClick={() => history.back()}>
          <h3 style={{ color: Color }}>Go Back</h3>
          <div className="linha" />
        </div>
      </div>
    </Container>
  );
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const data = await getDataApi(INITIAL_DATA_FETCH_URL(params?.city as string))
    .catch(() => null);

  if (!data) {
    return {
      notFound: true
    };
  }
  return { props: { data } };
}

export default City;
