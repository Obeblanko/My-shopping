import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import Navbar from "../components/Navbar/Navbar";

const ShopPage = () => {
  return (
    <div className="bg-white">
      <Header />
      <Navbar
        showHome={true}
        showAbout={true}
        showProducts={true}
        showContact={true}
      />
      <Banner />

      <div className="container mx-auto mt-8 p-8 bg-white shadow-md rounded-md">
        <main className="container mx-auto my-8">
          <section className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to Our Online Platform
            </h1>
            <p className="text-gray-600">
              Explore our wide range of products and find the perfect items for
              you.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-md shadow-md">
              <img
                src="https://"
                alt="Product"
                className="w-full h-32 object-cover mb-4 rounded-md"
              />
              <h2 className="text-xl font-semibold mb-2">Product Name</h2>
              <p className="text-gray-600 mb-4">
                Product description goes here.
              </p>
              <span className="text-blue-500"> $19.99</span>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md">
                Add to Cart
              </button>
            </div>

            <div className="bg-white p-6 rounded-md shadow-md">
              <img
                src="https://"
                alt="Product"
                className="w-full h-32 object-cover mb-4 rounded-md"
              />
              <h2 className="text-xl font-semibold mb-2">Product Name</h2>
              <p className="text-gray-600 mb-4">
                Product description goes here.
              </p>
              <span className="text-blue-500"> $19.99</span>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md">
                Add to Cart
              </button>
            </div>

            <div className="bg-white p-6 rounded-md shadow-md">
              <img
                src="https://"
                alt="Product"
                className="w-full h-32 object-cover mb-4 rounded-md"
              />
              <h2 className="text-xl font-semibold mb-2">Product Name</h2>
              <p className="text-gray-600 mb-4">
                Product description goes here.
              </p>
              <span className="text-blue-500"> $19.99</span>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md">
                Add to Cart
              </button>
            </div>

            <div className="bg-white p-6 rounded-md shadow-md">
              <img
                src="https://"
                alt="Product"
                className="w-full h-32 object-cover mb-4 rounded-md"
              />
              <h2 className="text-xl font-semibold mb-2">Product Name</h2>
              <p className="text-gray-600 mb-4">
                Product description goes here.
              </p>
              <span className="text-blue-500"> $19.99</span>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md">
                Add to Cart
              </button>
            </div>

            <div className="bg-white p-6 rounded-md shadow-md">
              <img
                src="https://"
                alt="Product"
                className="w-full h-32 object-cover mb-4 rounded-md"
              />
              <h2 className="text-xl font-semibold mb-2">Product Name</h2>
              <p className="text-gray-600 mb-4">
                Product description goes here.
              </p>
              <span className="text-blue-500"> $19.99</span>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md">
                Add to Cart
              </button>
            </div>

            <div className="bg-white p-6 rounded-md shadow-md">
              <img
                src="https://"
                alt="Product"
                className="w-full h-32 object-cover mb-4 rounded-md"
              />
              <h2 className="text-xl font-semibold mb-2">Product Name</h2>
              <p className="text-gray-600 mb-4">
                Product description goes here.
              </p>
              <span className="text-blue-500"> $19.99</span>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md">
                Add to Cart
              </button>
            </div>

            <div className="bg-white p-6 rounded-md shadow-md">
              <img
                src="https://"
                alt="Product"
                className="w-full h-32 object-cover mb-4 rounded-md"
              />
              <h2 className="text-xl font-semibold mb-2">Product Name</h2>
              <p className="text-gray-600 mb-4">
                Product description goes here.
              </p>
              <span className="text-blue-500"> $19.99</span>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md">
                Add to Cart
              </button>
            </div>

            <div className="bg-white p-6 rounded-md shadow-md">
              <img
                src="https://"
                alt="Product"
                className="w-full h-32 object-cover mb-4 rounded-md"
              />
              <h2 className="text-xl font-semibold mb-2">Product Name</h2>
              <p className="text-gray-600 mb-4">
                Product description goes here.
              </p>
              <span className="text-blue-500"> $19.99</span>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md">
                Add to Cart
              </button>
            </div>

            <div className="bg-white p-6 rounded-md shadow-md">
              <img
                src="https://"
                alt="Product"
                className="w-full h-32 object-cover mb-4 rounded-md"
              />
              <h2 className="text-xl font-semibold mb-2">Product Name</h2>
              <p className="text-gray-600 mb-4">
                Product description goes here.
              </p>
              <span className="text-blue-500"> $19.99</span>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ShopPage;
