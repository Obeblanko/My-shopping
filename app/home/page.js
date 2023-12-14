// Import necessary modules and styles
import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Navbar
        showAbout={true}
        showProducts={true}
        showShop={true}
        showContact={true}
      />

      <div className="container mx-auto my-8">
        <h1 className="text-4xl font-bold mb-4">
          Discover Amazing Deals in Our Online Store
        </h1>

        <p className="text-lg mb-6">
          Uncover a vast selection of products and seize incredible offers on
          the latest trends in fashion, electronics, and more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Link href="/products">
              <h2 className="text-xl font-bold mb-2">Awesome Products</h2>
              <p className="text-gray-600">
                Dive into the details of fantastic products in stock.{" "}
              </p>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Link href="/shop">
              <h2 className="text-xl font-bold mb-2">Exciting Services</h2>
              <p className="text-gray-600">
                Experience the best customer service when you shop from us.
              </p>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Link href="/booking">
              <h2 className="text-xl font-bold mb-2">
                Explore our delivery service
              </h2>
              <p className="text-gray-600">
                Use this service to get your goods delivered at your doorstep
                with no stress and at your comfort.
              </p>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
