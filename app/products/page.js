// Import necessary libraries and components
import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const ProductsPage = () => {
    return (
        <div>
            <Header />
            <Navbar showHome={true} showAbout={true} showShop={true} showContact={true}   />

            {/* Main content for the Products Page */}
            <div className="container mx-auto my-8">
                <h1 className="text-3xl font-bold mb-4">Explore Our Products</h1>
                <p className="text-gray-600 mb-8">
                    Welcome to our diverse collection of high-quality products. Find the perfect items that
                    suit your needs and preferences. Whether you're looking for the latest gadgets,
                    stylish clothing, or essential everyday items, we have it all!
                </p>

                <section className='my-8'>
          <h2 className='text-2xl font-bold mb-2 text-center'><strong>Featured Products</strong></h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            
            <div className='border p-4 rounded-md shadow-md'>
              <h3 className='text-xl font-semibold mb-2'>Product 1</h3>
              <p className='text-gray-700'>
                Description of the first featured product.
              </p>
            </div>

            <div className='border p-4 rounded-md shadow-md'>
              <h3 className='text-xl font-semibold mb-2'>Product 2</h3>
              <p className='text-gray-700'>
                Description of the second featured product.
              </p>
            </div>

            <div className='border p-4 rounded-md shadow-md'>
              <h3 className='text-xl font-semibold mb-2'>Product 3</h3>
              <p className='text-gray-700'>
                Description of the second featured product.
              </p>
            </div>

            <div className='border p-4 rounded-md shadow-md'>
              <h3 className='text-xl font-semibold mb-2'>Product 1</h3>
              <p className='text-gray-700'>
                Description of the first featured product.
              </p>
            </div>

            <div className='border p-4 rounded-md shadow-md'>
              <h3 className='text-xl font-semibold mb-2'>Product 1</h3>
              <p className='text-gray-700'>
                Description of the first featured product.
              </p>
            </div>

            <div className='border p-4 rounded-md shadow-md'>
              <h3 className='text-xl font-semibold mb-2'>Product 1</h3>
              <p className='text-gray-700'>
                Description of the first featured product.
              </p>
            </div>
          </div>
        </section>


        <section className='my-8'>
          <h2 className='text-2xl font-bold mb-2 text-center'> <strong>New Arrivals</strong></h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            
            <div className='border p-4 rounded-md shadow-md'>
              <h3 className='text-xl font-semibold mb-2'>New Product 1</h3>
              <p className='text-gray-700'>
                Description of the first new arrival product.
              </p>
            </div>

            <div className='border p-4 rounded-md shadow-md'>
              <h3 className='text-xl font-semibold mb-2'>New Product 2</h3>
              <p className='text-gray-700'>
                Description of the second new arrival product.
              </p>
            </div>

            <div className='border p-4 rounded-md shadow-md'>
              <h3 className='text-xl font-semibold mb-2'>New Product 1</h3>
              <p className='text-gray-700'>
                Description of the first new arrival product.
              </p>
            </div>

            <div className='border p-4 rounded-md shadow-md'>
              <h3 className='text-xl font-semibold mb-2'>New Product 1</h3>
              <p className='text-gray-700'>
                Description of the first new arrival product.
              </p>
            </div>

            <div className='border p-4 rounded-md shadow-md'>
              <h3 className='text-xl font-semibold mb-2'>New Product 1</h3>
              <p className='text-gray-700'>
                Description of the first new arrival product.
              </p>
            </div>

            <div className='border p-4 rounded-md shadow-md'>
              <h3 className='text-xl font-semibold mb-2'>New Product 1</h3>
              <p className='text-gray-700'>
                Description of the first new arrival product.
              </p>
            </div>
            
          </div>
        </section>

                
           
            </div>

            <Footer />
        </div>
    );
};

export default ProductsPage;
