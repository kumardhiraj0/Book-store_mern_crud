import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AllBook = () => {
    const [bookData,setBookData] = useState([]);
    useEffect(()=>{
        getBook();
    },[])

    const getBook = async()=>{
        axios.get("http://localhost:8000/api/viewbook").then(response=>{
            setBookData(response.data);
        }).catch(error=>{
            console.error(error);
        })
    }

    const deleteBook = async(id)=>{
        axios.delete(`http://localhost:8000/api/deletebook/${id}`)
        getBook();

    }
  return (
    <>
    <h1>All Books</h1>
    <table border={"1"} width={"600px"}>
        <tr>
            <th>Book_Name</th>
            <th>Book_Author</th>
            <th>Book_Price</th>
            <th colSpan={2}>Action</th>
        </tr>

        {
            bookData.map(books=>{
                return(
                    <tr>
                    <td>{books.book_name}</td>
                    <td>{books.book_auther}</td>
                    <td>{books.book_price}</td>
                    <td>
                        <a href={`updatebook/${books._id}`}>Edit</a>
                    </td>

                    <td>
                         <a href="#" onClick={ ()=> deleteBook(books._id)}>Delete</a>
                    </td>
                </tr>
                )
                
            })
        }
    </table>
    </>
  )
}

export default AllBook;

