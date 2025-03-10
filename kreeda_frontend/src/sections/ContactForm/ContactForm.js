import React, { useState } from 'react';
import axios from 'axios';
import styles from './ContactForm.module.css'; // Import the CSS module

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_BASE_URL}/api/contact`, // Local development URL
                formData
            );
            console.log(response.data.message);
            // Reset form fields
            setFormData({
                name: '',
                email: '',
                mobile: '',
                message: '',
            });
        } catch (error) {
            console.error('There was an error sending the data!', error);
        }
    };
    

    return (
        <div className={styles['contact-form']}>
            <div className="container">
                <div className={styles['contact-content']}>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="mobile"
                            placeholder="Mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                        />
                        <textarea
                            name="message"
                            placeholder="Your message to us"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        <button type="submit">Send Now</button>
                    </form>
                    <div className={styles['contact-info']}>
                        <h2>Contact Us!</h2>
                        <h3>Kreeda Studio</h3>
                        <p>Ramaiah Colony, Bangalore - 560037</p>
                        <p>+91 9999999999</p>
                        <p>kreeda.ai@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
