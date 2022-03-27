import { useRef } from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import Layout from '@components/Layout';
import { Input } from '@styles-components/Input';
import { Title } from '@styles-components/Title';
import { Button } from '@styles/components/Button';

// const INITIAL_DATA_FETCH_URL = (city: string) => (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2e15b119b196985ebbc0e88160e56bee`);

const Home: NextPage = () => {
  const inputSearch = useRef<HTMLInputElement>(null);
  const router = useRouter();

  return (
    <Layout>
      <form onSubmit={(ev) => {
        ev.preventDefault();
        if (inputSearch.current) {
          router.push(`/${inputSearch.current.value}`);
        }
      }}
      >
        <div className="icon">
          <img src="/74375.png" alt="intorogation" />
        </div>
        <Title>What is the forecast?</Title>
        <Input
          placeholder="Type a city"
          required
          ref={inputSearch}
        />
        <Button type="submit">Search</Button>
      </form>
    </Layout>
  );
};

export default Home;
