import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add any additional form submission logic here (e.g., API call)
    };

    return (
        <section className="bg-white py-16">
            <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
                    <p className="text-lg text-gray-600">
                        Have questions or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow-lg">
                    <div className="grid gap-6 sm:grid-cols-2">
                        {/* Name Field */}
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your Name"
                            />
                        </div>

                        {/* Email Field */}
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your Email"
                            />
                        </div>

                        {/* Phone Field */}
                        <div className="flex flex-col">
                            <label htmlFor="phone" className="text-sm font-semibold text-gray-700 mb-2">Phone</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your Phone Number"
                            />
                        </div>

                        {/* Message Field */}
                        <div className="flex flex-col sm:col-span-2">
                            <label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6 text-center">
                        <button
                            type="submit"
                            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;
