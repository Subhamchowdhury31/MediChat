import React from 'react';

const About = () => {
    return (
        <section className="bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">About Our Platform</h2>
                    <p className="text-lg text-gray-700">
                        Discover quality health products and medications at affordable prices, delivered with exceptional service and convenience.
                    </p>
                </div>
                
                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Section: Affordable Products */}
                    <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-100">
                        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Affordable Health Products</h3>
                        <p className="text-gray-700 leading-relaxed">
                            We are committed to offering high-quality products at prices lower than the market. By working directly with trusted suppliers, we ensure that you receive genuine health essentials without the premium markup.
                        </p>
                    </div>

                    {/* Section: Extensive Medicine Range */}
                    <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-100">
                        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Wide Range of Medicines</h3>
                        <p className="text-gray-700 leading-relaxed">
                            From general health products to specialized medicines, our platform provides an extensive catalog that covers your medical needs. Whether it’s daily supplements or prescription drugs, we have it all.
                        </p>
                    </div>

                    {/* Section: User-Friendly Interface */}
                    <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-100">
                        <h3 className="text-2xl font-semibold text-blue-600 mb-4">User-Friendly Experience</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Our platform is designed with a simple and intuitive interface. Effortlessly browse, search, and shop. We prioritize a seamless experience, whether you’re a first-time visitor or a frequent user placing bulk orders.
                        </p>
                    </div>

                    {/* Section: Chatbot Assistance */}
                    <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-100">
                        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Chatbot for Health Assistance</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Need guidance on health or medicine-related topics? Our AI-powered chatbot is here to assist you with instant, reliable responses, making it easy to get the information you need without any hassle.
                        </p>
                    </div>

                    {/* Section: Bulk Orders & Fast Delivery */}
                    <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-100 lg:col-span-2">
                        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Bulk Orders & Fast Delivery</h3>
                        <p className="text-gray-700 leading-relaxed">
                            For businesses and organizations, we offer convenient bulk ordering options with special pricing. Plus, our reliable delivery partners ensure that your products arrive swiftly, meeting your schedule every time.
                        </p>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-600 text-base">
                        Experience a new level of convenience and care in health shopping. Thank you for trusting us with your wellness journey!
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
