import { useEffect, useState } from "react";

function Unsplash() {
  const [image, setImage] = useState([]);
  const [search, setSearch] = useState("");
  const api =
    "https://api.unsplash.com/photos?client_id=MGChkos1Hmc6ebq88vh8tM8pNYisZqyHJTeR5jZQDW0";
  useEffect(() => {
    async function splash() {
      const res = await fetch(api);
      const data = await res.json();
      setImage(data);
    }
    splash();
  });
  const hc = async (a) => {
    a.preventDefault();
    const link = `https://api.unsplash.com/search/photos?&query=${search}&client_id=MGChkos1Hmc6ebq88vh8tM8pNYisZqyHJTeR5jZQDW0`;
    const abc = await fetch(link);
    const data1 = await abc.json();
    setImage(data1.results);
    console.log(data1.results);
  };
  return (
    <>
    <div className="">
      <input
        type="text"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button onClick={hc}>Click me</button>
      </div>
      {image?.map((goli) => {
        const { urls, likes, description } = goli;

        return (
          <>
            <div >
              <img src={urls.small}  />
              <div>{likes}</div>
              <div>{description}</div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Unsplash;
