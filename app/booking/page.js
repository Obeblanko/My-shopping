"use client";
import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import Navbar from "../components/Navbar/Navbar";

const BookingPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Navbar
        showHome={true}
        showProducts={true}
        showShop={true}
        showContact={true}
      />
      <div className="container mx-auto my-8 p-4 bg-yellow-200 rounded shadow-md ">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow-md">
          <h3 className="text-1xl font-semibold mb-6 text-center text-blue-400">
            Utilize our convenient booking platform to effortlessly order your
            selected products, delivered right to your doorsteps for your utmost
            comfort. <br/> Please take a moment to complete the form below with your
            details, ensuring a seamless process for the submission and delivery
            of your goods.
          </h3>
          <h2 className="text-4xl font-semibold mb-6 text-center text-gray-500">
            {" "}
            <strong>Delivery Information</strong>
          </h2>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-600"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Ben"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
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
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-600"
              >
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
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-600"
              >
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

            <div>
              <label
                htmlFor="delivery"
                className="block text-sm font-medium text-gray-600"
              >
                Delivery type
              </label>
              <select
                id="delivery"
                name="delivery"
                className="mt-1 p-2 w-full border rounded-md text-gray-600"
                defaultValue=""
              >
                <option value="" disabled hidden>
                  Choose a delivery type
                </option>
                <option value="uber">Uber</option>
                <option value="yango">Yango</option>
                <option value="bolt">Bolt</option>
              </select>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-gray-900"
              >
                I agree to the{" "}
                <span className="text-indigo-600">terms and conditions</span>.
              </label>
            </div>

            <button
              type="submit"
              className="bg-blue-400 text-white py-2 px-4 rounded-md hover:bg-blue-500 transition duration-300 text-center"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookingPage;
