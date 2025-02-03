import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function HomePage() {

    const navigate=useNavigate();
    return (
        <>
            {/* After navbar design code */}
            <div className="min-h-screen bg-gray-200">
                {/* Hero Section */}
                <div className="relative pt-16">
                    <div className="mx-4 sm:mx-8 lg:mx-16 mt-8">
                        <div className="bg-[#f8f8f8] rounded-3xl overflow-hidden">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between">
                                {/* Left Content */}
                                <div className="md:w-1/2 z-10">
                                    <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                        Enjoy Your Healthy
                                        <br />
                                        Delicious Food
                                    </h1>
                                    <p className="text-gray-600 text-lg mb-8 max-w-md font-['Poppins']">
                                        Experience the perfect blend of health and taste with our carefully crafted dishes, made just for you.
                                    </p>
                                    <button onClick={() => navigate("/products")} className="shop-now-btn bg-emerald-600 text-white px-10 py-3 rounded-full text-lg font-semibold">
                                        Shop Now
                                    </button>
                                </div>

                                {/* Right Content - Floating Image */}
                                <div className="md:w-1/2 mt-8 md:mt-0 relative">
                                    <div className="floating-dish">
                                        <img
                                            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
                                            alt="Healthy Dish"
                                            className="w-full h-auto rounded-2xl"
                                            style={{ filter: 'contrast(1.1) saturate(1.2)' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
