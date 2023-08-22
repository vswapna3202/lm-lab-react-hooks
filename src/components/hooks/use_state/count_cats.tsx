export function CountCats() {

  const cats = ["🐈"].length;

  return (
    <>
    <h2>useState</h2>

    <p>{cats}</p>

    <button>
      There are ... cats 🥳
    </button>
    </>
  );
}