import "./App.css";
import { CharacterList } from "./components/CharacterList";
import { Spinner } from "./components/Spinner";
import { useMarvelCharacters } from "./hooks/useMarvelCharacters";

function App() {
  const { isLoading, hasError, error, characters } = useMarvelCharacters();

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-3xl font-bold">MARVEL</h1>
      {isLoading && !hasError ? (
        <Spinner />
      ) : (
        <CharacterList characters={characters} />
      )}
      {!isLoading && hasError && <span className="text-red-600">{error}</span>}
    </div>
  );
}

export default App;
