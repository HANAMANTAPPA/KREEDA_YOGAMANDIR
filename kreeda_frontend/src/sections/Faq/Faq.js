import React, { useState } from 'react';
import styles from './Faq.module.css'; // Import CSS module

const Faq = () => {
    // Array of FAQ items
    const faqItems = [
        {
            question: 'What is Kreeda Fitness Studio?',
            answer: 'Kreeda Fitness Studio is a state-of-the-art facility offering a variety of fitness programs including group exercises, personal training, and more.'
        },
        {
            question: 'How do I join Kreeda Fitness Studio?',
            answer: 'You can join Kreeda Fitness Studio by signing up online or visiting our facility. Our team will guide you through the process.'
        },
        {
            question: 'What are the operating hours?',
            answer: 'We are open from 6 AM to 10 PM on weekdays and from 8 AM to 8 PM on weekends.'
        },
        {
            question: 'Do you offer personal training?',
            answer: 'Yes, we offer personal training sessions tailored to your fitness goals. Our certified trainers are here to help you.'
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    // Toggle the open state of an FAQ item
    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={styles.cont}>
            <div className={styles['faq-section']}>
                <h2>FAQ</h2>
                {faqItems.map((item, index) => (
                    <div key={index} className={styles['faq-item']}>
                        <div className={styles['faq-question']} onClick={() => toggleFaq(index)}>
                            {item.question}
                            <span className={styles['toggle-icon']}>{openIndex === index ? '-' : '+'}</span>
                        </div>
                        {openIndex === index && (
                            <div className={styles['faq-answer']}>
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
