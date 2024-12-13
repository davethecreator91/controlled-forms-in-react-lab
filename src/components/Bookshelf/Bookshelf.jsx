import { useState } from "react";
import Books from "./books";
const Bookshelf = () => {
  //===================STATE=============================
  const [books, setBooks] = useState([]);

const [newBook, setNewBook] = useState({ title: "", author: ""});
//======================HANDLER FUNCTIONS==================
  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setNewBook((prevBook)=>({ ...prevBook, [name]:value}));
    }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    setBooks((prevBooks)=>[...prevBooks, newBook]);
    setNewBook({ title: "", author: ""});
  };

  //=====================FORM INPUT===================
  return (
  <div className="bookshelfDiv">
    <div className="formDiv">
      <h3>Add a Book</h3>

     <div>
      <label htmlFor="title">Title</label>
      <input
       type="text" 
       name= "title"
       value= {books.title}
       onChange={handleInputChange}
       />
     </div>

     <div>
      <label htmlFor="author">Author</label>
      <input 
      type="text" 
      name= "author"
      value= {books.author}
      onChange= {handleInputChange}
      />
     </div>

     <div>
      <button onClick={(e)=>handleSubmit(e)} style={{
        
      }}>Submit</button>
      </div>

    </div>
    <div className="bookCardsDiv">
     {books.map((book)=>{
      return (
        <Books author={book.author} title={book.title}/>
      )
     })}
      </div>
  </div>
  );
}
export default Bookshelf;