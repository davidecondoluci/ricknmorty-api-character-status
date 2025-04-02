import { ListCharacters } from "./components/ListCharacters";
import { Pagination } from "./components/Pagination";

const getData = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  return data;
};

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <ListCharacters characters={data.results} />
      <Pagination next={data.info.next} prev={data.info.prev} />
    </main>
  );
}
