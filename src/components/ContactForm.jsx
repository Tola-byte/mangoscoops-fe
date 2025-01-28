import { useState } from 'react';
import axios from 'axios';
import { Loader } from './Loader';

export const ContactForm = () => {
   // const [loading, setLoading] = useState(true)
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        numberOfDogs: 1,
        cleanupFrequency: 0,
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const cleanupFrequencyOptions = ["Twice a Week", "Once a Week", "Bi-Weekly", "Once a Month"];
        const dataToSend = {
            ...form,
            cleanupFrequency: cleanupFrequencyOptions[form.cleanupFrequency], // Convert number to text
        };

        try {
            
            await axios.post('https://scoop-be.vercel.app/mailer/send', dataToSend);

            alert('Your message was sent successfully!');
            setForm({
                name: '',
                email: '',
                phone: '',
                message: '',
                numberOfDogs: 1,
                cleanupFrequency: 0,
            });
        } catch (error) {
            setLoading(false)
            alert('Failed to send your message. Please try again later.');
        }
    };

    // if (loading) {
    //     return <Loader />
    // }
    // Check if all required fields are filled
    const isFormValid = () => {
        const { name, email, phone, numberOfDogs, cleanupFrequency } = form;
        return name && email && phone && numberOfDogs > 0 && cleanupFrequency > 0;
    };

    return (
        <div className='mt-16'>
            <h2 className="text-3xl text-center font-bold text-gray-800 mt-2">
                Contact <span className="text-green-600">Us</span>
            </h2>
        <form onSubmit={handleSubmit} className="w-[95%] md:max-w-lg mb-20 mt-10 mx-auto bg-white p-6 rounded-lg shadow-xl">

            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-bold mb-2">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-bold mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-bold mb-2">
                    Phone
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="numberOfDogs" className="block text-sm font-bold mb-2">
                    Number Of Dogs: {form.numberOfDogs}
                </label>
                <input
                    type="range"
                    id="numberOfDogs"
                    name="numberOfDogs"
                    min="1"
                    max="4"
                    value={form.numberOfDogs}
                    onChange={handleChange}
                    className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600">
                    {[...Array(4)].map((_, i) => (
                        <span key={i + 1}>{i + 1}</span>
                    ))}
                </div>
            </div>
            <div className="mb-4">
                <label htmlFor="cleanupFrequency" className="block text-sm font-bold mb-2">
                    Cleanup Frequency: {["Twice a Week", "Once a Week", "Bi-Weekly", "Once a Month"][form.cleanupFrequency]}
                </label>
                <input
                    type="range"
                    id="cleanupFrequency"
                    name="cleanupFrequency"
                    min="0"
                    max="3"
                    value={form.cleanupFrequency}
                    onChange={handleChange}
                    className="w-full"
                />
               
                <div className="flex justify-between text-sm text-gray-600">
                    {["Twice a Week", "Once a Week", "Bi-Weekly", "Once a Month"].map((frequency, i) => (
                        <span key={i}>{frequency}</span>
                    ))}
                </div>
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-bold mb-2">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full p-2 border rounded"
                ></textarea>
                </div>
            
                    <button
                        type="submit"
                        disabled={!isFormValid()}
                        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
                    >
                        Submit
                    </button>
                
        </form>
       </div>
    );
};

