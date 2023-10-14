// import React,{useState,useEffect} from "react";

// function BackImg() {
//     const [theme, setTheme] = useState("lighttheme");
// const mode = ()=>{
//   theme === "darktheme"? setTheme("lighttheme"): setTheme("darktheme")
// }

//     useEffect(() => {
//     document.body.className=theme
//     }, [theme]);

// //   const darktheme = () => {
   
// //       document.getElementById("theme").style.color = "white";
// //     document.getElementById("theme").style.backgroundColor = "black";

// // };
// // const lighttheme = () => {
// //       document.getElementById("theme").style.color = "black";
// //     document.getElementById("theme").style.backgroundColor = "white";
// // };



//   return (
//     <>
//       <div className="" id="theme">
//         <h1 style={{textAlign:"center",paddingTop:"30px"}}>AJ Styles</h1>
//         {theme==="darktheme"?
//         <button className="btn btn-primary" onClick={mode}>
//         Enable LightTheme
//         </button>

//        : <button className="btn btn-primary" onClick={mode}>
//        Enable DarkTheme
//        </button>

        
//         }

//         {/* <button className="btn btn-primary" onClick={lighttheme}>
//           Enable Light Theme
//         </button>    */}
    
    
    
//         <div>
//             <h1 className="heading">Bookfolio</h1>
//         </div>
//         <div className="images">
//             <img src="day.jpg" alt="" style={{width:"300px",borderRadius:"8px",height:"400px",margin:"10px"}}/>
//             <img src="real.jpeg" alt="" style={{width:"300px",borderRadius:"8px",height:"400px",margin:"10px"}}/>
//             <img src="topten.webp" alt="" style={{width:"300px",borderRadius:"8px",height:"400px",margin:"10px"}}/>
//         </div>
//      </div>
//     </>
//   );
// }

// export default BackImg;
