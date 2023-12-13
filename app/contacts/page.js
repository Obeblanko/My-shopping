import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Banner from '../components/Banner/Banner';
import Navbar from '../components/Navbar/Navbar';

const ContactsPage = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Navbar showHome={true} showAbout={true} showShop={true} showProducts={true}   />

            <div className="container mx-auto my-8 p-8 bg-gray-100 rounded shadow-lg text-center">
                <h1 className="text-2xl font-bold mb-4 text-center">Contact Us</h1>
                <p className="text-gray-600 mb-8">
                    We believe strongly in feedback from our valued customers as we <br/> build on that to improve on our service delivery. <br/><br/>
                    Have questions or suggestions?  <br/>Feel free to reach out to us using the form below.
                </p>

                <form className="max-w-md mx-auto">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-3 py-2 border rounded shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Your Name"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-3 py-2 border rounded shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Your Email"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="w-full px-3 py-2 border rounded shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Your Message"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                    >
                        Submit
                    </button>
                </form>

                <p className="text-lg mb-4 ">
                    Or feel free to reach us directly through our mail at{' '}
                    <a href='mailto: 1clickmall23@gmail.com' className="text-blue-500 underline">1clickmall23@gmail.com</a>.
                </p>

                <p className="text-lg">
                    You can also give us a call at{' '}
                    <a href="tel:+233540203669" className="text-blue-500">+233-540-203-669</a> / <a href="tel:+233506775792" className="text-blue-500">+233-506-775-792</a>.
                </p>
            </div>

            <Footer />
        </div>
    );
};

export default ContactsPage;
