import item from './emojiList.json';
import { useState } from 'react';
function Emoji() {
    const [data, setData] = useState(item);
  return (
   <>
    <center>
    <div className='main'>
    
    <div className='nav'>
    <input type="text" placeholder="Search here..."
        onChange={(a)=>{
            setData(item.filter((e)=>e.title.toLowerCase().includes(a.target.value.toLowerCase()) ))
        }}
         />
    </div>
        
        
        {data.map((d)=>{
             const {title,symbol,keywords}= d;
      return(<>

        <div className='bg-setting'>       
         <div key={title} className='title'>{title}</div>
         <div className='symbol'>{symbol}</div>
         <div className='para'>{keywords}</div>
        </div>
   
    </>
    )})
}

</div>
</center>
</>
)}
export default Emoji;