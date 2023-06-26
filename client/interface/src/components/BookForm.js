import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BiArrowBack } from "react-icons/bi";
import "../createbook.css";

const CreateBook = () => {
    const navigate = useNavigate();
    const handleSignInClick = () => {
        navigate("/signin");
    };
    const backHome = () => {
        navigate("/");
    };

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [year, setYear] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const bookData = {
            title,
            author,
            year,
            image,
            description,
        };

        console.log(bookData);

        try {
            const response = await axios.post("http://localhost:5000/books", bookData);
            console.log(response.data);
        } catch (error) {
            if (error.response) {
                console.error("Server Error:", error.response.data);
            } else if (error.request) {
                console.error("No response from server:", error.request);
            } else {
                console.error("Error:", error.message);
            }
        }
    };

    return (
        <div>
            <div className="backhome" onClick={backHome}>
                <BiArrowBack />
            </div>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <h1>Create Book</h1>
                <input
                    type="text"
                    placeholder="Title"
                    className="input-box"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Author"
                    className="input-box"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Publication Year"
                    className="input-box"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    className="input-box"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <textarea
                    placeholder="Description"
                    className="input-box"
                    rows="5"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <button className="sign-btn">Create Book</button>

            </form>
        </div>
    );
};

export default CreateBook;
