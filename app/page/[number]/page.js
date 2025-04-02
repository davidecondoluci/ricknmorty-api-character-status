import { ListCharacters } from "../../components/ListCharacters";
import { Pagination } from "../../components/Pagination";

const getData = async (page) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  const data = await response.json();
  return data;
};

export default async function Page({ params }) {
  const currentPage = Number(params.number) || 1;
  const data = await getData(currentPage);

  return (
    <main>
      <ListCharacters characters={data.results} />
      <Pagination
        next={data.info.next}
        prev={data.info.prev}
        currentPage={currentPage}
      />
    </main>
  );
}
