import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Styles/BookSessionStyle.css';

const BookSession: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        extraInfo: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev, 
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log('Booking submitted:', formData);
        navigate('/student-dashboard');
    };

    return (
        <div className="book-session-container wide-form">
            <h1>Book Session</h1>

            <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
                    </div>

                    <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                    </div>

                    <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input 
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    />
                    </div>
                        
                    <div className="form-group">
                    <label htmlFor="extraInfo">Extra Info</label>
                    <input 
                    type="text"
                    id="extraInfo"
                    name="extraInfo"
                    value={formData.extraInfo}
                    onChange={handleChange}
                    
                    />
                    </div>
                    
                    <button type="submit" className="book-now-button">
                        Book Now
                    </button>
            </form>
        </div>
    );
};

export default BookSession;