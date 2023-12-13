'use client'
import React from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Banner from '../components/Banner/Banner';
import Navbar from '../components/Navbar/Navbar';

const BookingPage = ()=> {
  return (
    <div>
           <Header />
           <Banner />
            <Navbar showHome={true}  showProducts={true} showShop={true} showContact={true}   />
            <div className="container mx-auto my-8 p-4 bg-white rounded shadow-md">
            <div className="max-w-2xl mx-auto bg-yellow-100 p-8 rounded shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center"> <strong>Delivery Information</strong></h2>

        <form className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Steve Marful"
            />
          </div>

          <div>
  <label htmlFor="email" className="block text-sm font-medium text-gray-600">
    Email Address
  </label>
  <input
    type="email"
    id="email"
    name="email"
    className="mt-1 p-2 w-full border rounded-md"
    placeholder="Enter your e-mail address"
  />
</div>


          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-600">
              Delivery Address
            </label>
            <textarea
              id="address"
              name="address"
              rows="3"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your delivery address"
            ></textarea>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              I agree to the <span className="text-indigo-600">terms and conditions</span>.
            </label>
          </div>

          <button
            type="submit"
            className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
          >
            Place Order
          </button>
        </form>
      </div>
      </div>
            <Footer />
    </div>



  )
}

export default BookingPage
