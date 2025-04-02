import { ListCharacters } from "./../../components/ListCharacters";
import { Pagination } from "./../../components/Pagination";

const getData = async (page) => {
  const response = await fetch(
    "https://rickandmortyapi.com/api/character?page=" + page
  );
  const data = await response.json();
  return data;
};

export default async function Home({ params }) {
  const data = await getData(params.number);

  return (
    <main>
      <ListCharacters characters={data.results} />
      <Pagination next={data.info.next} prev={data.info.prev} />
    </main>
  );
}
