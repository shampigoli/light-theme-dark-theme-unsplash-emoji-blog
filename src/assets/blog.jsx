
// api key for blog
// b07c1fc3f8e1419aaf22d55968400be6
import { useEffect, useState } from "react";
function Blog() {
    const [iemg,setIemg]=useState([]);
    const [search, setSearch] = useState('');
    const pageSize=36;
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b07c1fc3f8e1419aaf22d55968400be6&pageSize=${pageSize}&q=${search}`;
    useEffect(()=>{
        async function blog(){
            const response=await fetch(apiUrl);
            const data= await response.json();
            console.log(data)
            setIemg(data.articles)
        }
        blog();
    },[search])
  return (
    <div>
    <div className="inputt">
              <input
        type="text"
        style={{
            backgroundColor:"white"
        }}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      </div>
      <div className="bloe">
      {iemg.map((data)=>{
        return(
            <>
            <div className="blogs">
            <img src={data.urlToImage} alt="" />
                <h4>{data.description}</h4>
                <h5>{data.content}</h5>
                </div>
            </>
        )
      })}
      </div>
    </div>
  )
}

export default Blog;