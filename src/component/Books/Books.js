import React from 'react';
import Book from '../Book/Book';

const Books = (props) => {
    const books = props.books;
    return (
        <div>
            {
                books.map(bk => <Book
                    key={bk.name}
                    name={bk.name}
                    author={bk.author}>
                </Book>)
            }

        </div>
    );
};

export default Books;