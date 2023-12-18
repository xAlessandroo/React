export function MouseClicker() {
  function handleClick(e) {
    if (e.target.tagName.toLowerCase() === "img"){
        console.log(e.target.src)
    } else {
        console.log(e.target.name);
    }
  }

  return (
    <button name="one" onClick={handleClick}>
      <img src="/vite.svg" width={30} height={30} />
      Click me!
    </button>
  );
}
