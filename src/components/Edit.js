import React from 'react'; 
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Edit(props) {
  let { id } = useParams();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

useEffect(() => {
    axios.get('http://localhost:4000/api/event/' + id)
        .then((response) => {
            setName(response.data.name);
            setDate(response.data.date);
            setLocation(response.data.location);
        })
        .catch((error) => {
            console.log(error);
        });
}, [id]);

const handleSubmit = (event) => {
    event.preventDefault();
    const newEvent = { id, name, date, location };
    axios.put('http://localhost:4000/api/event/' + id, newEvent)
        .then((res) => {
            console.log(res.data);
            navigate('/read');
        });
}

return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Event Name: </label>
                <input type="text" 
                className="form-control" 
                value={name} 
                onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Event Date: </label>
                <input type="text" 
                className="form-control" 
                value={date} 
                onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Location URL: </label>
                <input type="text" 
                className="form-control" 
                value={location} 
                onChange={(e) => setLocation(e.target.value)} />
            </div>
            <div className="form-group">
                <input type="submit" value="Edit Event" className="btn btn-primary" />
            </div>
        </form>
    </div>
);
}
