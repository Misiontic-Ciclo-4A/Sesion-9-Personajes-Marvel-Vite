const characterClasses =
  "flex flex-col space-y-1 w-full border order-gray-300 shadow transition-all hover:shadow-xl";

export function CharacterList({ characters = [] }) {
  return (
    <div className="grid grid-cols-4 gap-6 mx-auto">
      {characters.map((character) => {
        const { id, name, thumbnail } = character;
        const { extension: ext, path } = thumbnail;
        return (
          <div id={id} className={characterClasses}>
            <img
              src={`${path}/standard_fantastic.${ext}`}
              alt={name}
              className="rounded-t-md cursor-pointer"
            />
            <h2 className="text-xl py-2 font-bold">{name}</h2>
          </div>
        );
      })}
    </div>
  );
}
