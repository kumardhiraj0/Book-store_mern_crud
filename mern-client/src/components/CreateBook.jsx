import React, { useState } from 'react'
import axios from "axios";

const CreateBook = () => {
  const formFieldSet = {
    width:"300px",
    padding:"10px",
    margin:"auto",
    borderRadius:"10px"
  }

  const [bookData,setBookData] = useState({
    "book_name":"",
    "book_auther":"",
    "book_price":"",
  })

  const handleInputChange = (e)=>{
    const {name,value} = e.target;
    setBookData({
      ...bookData,
      [name]:value
    })
  }

  const handleFormSubmit = async(e)=>{
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/addbook",bookData);
      console.log(response.data);
      setBookData({
        "book_name":"",
        "book_auther":"",
        "book_price":"",
      })
      
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <fieldset style={formFieldSet}>
      <legend>Add Book</legend>
      <tr>
        <td>Book Name</td>
        <td>
          <input type="text" name='book_name' placeholder='Book_name..' value={bookData.book_name} onChange={handleInputChange}/>
        </td>
      </tr>

      <tr>
        <td>Book Auther</td>
        <td>
          <input type="text" name='book_auther' placeholder='Book_auther..' value={bookData.book_auther} onChange={handleInputChange}/>
        </td>
      </tr>

      <tr>
        <td>Book Price</td>
        <td>
          <input type="text" name='book_price' placeholder='Book_price..' value={bookData.book_price} onChange={handleInputChange}/>
        </td>
      </tr>

      <tr>
        <td colSpan={2} align='center'>
          <input type="button" value={"Add Book"} name='AddBook' onClick={handleFormSubmit}/>
        </td>
      </tr>
      <h2>{bookData.book_name}</h2>

    </fieldset>
  )
}

export default CreateBook;
