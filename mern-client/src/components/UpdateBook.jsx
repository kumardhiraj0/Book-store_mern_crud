import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBook = () => {
    const {bid} = useParams();
    const navigate = useNavigate();
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
      useEffect(()=>{
        axios.get(`http://localhost:8000/api/viewbook/${bid}`)
        .then(response=>{
            setBookData({
                ...bookData,
                "book_name":response.data.book_name,
                "book_auther":response.data.book_auther,
                "book_price":response.data.book_price,
                
            });

        }).catch(err=>{
            console.error(err);
        })

      },[])

      const handleFormSubmit = async(e)=>{
        e.preventDefault();
        try {
          const response = await axios.put(`http://localhost:8000/api/updatebook/${bid}`,bookData);
          console.log(response.data);
          setBookData({
            "book_name":"",
            "book_auther":"",
            "book_price":"",
          })
          navigate("/books");
          
        } catch (err) {
          console.error(err);
        }
      }

  return (
    <div>
        <fieldset style={formFieldSet}>
      <legend>Update Book</legend>
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
          <input type="button" value={"Update Book"} name='UpdateBook' onClick={handleFormSubmit}/>
        </td>
      </tr>
      <h2>{bookData.book_name}</h2>

    </fieldset>
    </div>
  )
}

export default UpdateBook;

