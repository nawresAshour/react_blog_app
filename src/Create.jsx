import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";




const Create = () => {


    const [title,setTitle] = useState('') ;
        const [body,setbody] = useState('') ;
               
        const [auther,setauther] = useState('mario') ;
                const [ispending,setispending] = useState(false);
const navigate = useNavigate();

const handleSubmit = (e)=>{
        e.preventDefault();
        const blog ={ title,body,auther};
        // console.log(blog)
        //End Pint the url
        fetch('http://localhost:8000/blog',{
            method: 'POST',
            headers : {"content-type":"appliction/json"},
            body:JSON.stringify(blog)

        }).then(()=>{
            console.log("neww Blog added");
            setispending(false);
            //history.go(-1);
         //navigate.push('/');
             navigate("/");

        })

}

  return (
    <div className="create">
      <h2>Add New Blog</h2>

      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input type="text"  value={title} onChange={(e)=> setTitle(e.target.value)}  required />

        <label>Blog Body</label>
        <textarea value={body} onChange={(e)=> setbody(e.target.value)} required></textarea>

        <label>Blog Author</label>

        <select  value={auther} onChange={(e)=> setauther(e.target.value)}>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option> //nwrs
       <option value="nwrs">nwrs</option> 
        </select>

       { !ispending && <button >ADD BLOG</button>}
       { ispending && <button disabled >ADDing blog ...</button>}

      </form>
    </div>
  );
};

export default Create;