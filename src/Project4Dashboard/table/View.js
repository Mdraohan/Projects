import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'


export const View = ({books,deleteBook}) => {
    
    return books.map(book=>(
        
        <tr key={book.isbn}>         
             <td>{book.first_Name}</td>
             <td>{book.middle_Name}</td>
             <td>{book.last_Name}</td>
             <td>{book.position}</td>
             <td>{book.email}</td>
             <td>{book.password}</td>
             <td>{book.number}</td>
             <td>{book.isbn}</td>
            <td  onClick={()=>deleteBook(book.isbn)}>
                <Icon icon={trash}/>
            </td>           
        </tr>            
))
}