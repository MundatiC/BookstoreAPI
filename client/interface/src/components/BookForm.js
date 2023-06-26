import React, { useState } from 'react';
import "../createbook.css"

const BookForm = () => {
    const [bookData, setBookData] = useState({
        title: '',
        author: '',
        year: '',
        image: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Handle form submission
        console.log(bookData);
        // Reset form
        setBookData({
            title: '',
            author: '',
            year: '',
            image: '',
            description: '',
        });
    };

    return (
        <div className="book-form">
            <h1>Create Book</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    value={bookData.title}
                    onChange={handleChange}
                    placeholder="Title"
                    className="input-box"
                />
                <input
                    type="text"
                    name="author"
                    value={bookData.author}
                    onChange={handleChange}
                    placeholder="Author"
                    className="input-box"
                />
                <input
                    type="text"
                    name="year"
                    value={bookData.year}
                    onChange={handleChange}
                    placeholder="Publication Year"
                    className="input-box"
                />
                <input
                    type="text"
                    name="image"
                    value={bookData.image}
                    onChange={handleChange}
                    placeholder="Image URL"
                    className="input-box"
                />
                <textarea
                    name="description"
                    value={bookData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    className="input-box"
                    rows="5"
                />
                <button type="submit" className="sign-btn">
                    Create Book
                </button>
            </form>
        </div>
    );
};

export default BookForm;
