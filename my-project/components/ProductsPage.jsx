import axios from 'axios';
import { useState, useEffect } from 'react';

export default function ProductsPage() {
    const api = "http://localhost:4000/api/food/list";
    const url="http://localhost:4000";
    const [products, setProducts] = useState([]);

    const fetchItems = async () => {
        try {
            const response = await axios.get(api);
            setProducts(response.data.data);
        } catch (error) {
            console.log("Error fetching the data from the database", error);
        }
    };

    useEffect(() => {
        async function loadData() {
            await fetchItems();
        }
        loadData();
    }, []);
    return (
        <div className="max-w-[1400px] mx-auto px-6 py-12 mt-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {products.map(product => (
                    <div 
                        key={product.id} 
                        className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <div className="relative aspect-square overflow-hidden bg-gray-100">
                            <img
                                src={url+"/Images/"+`${product.images}`}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6 ">
                            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                                {product.name}
                            </h3>
                            <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                                {product.description}
                            </p>
                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-2xl font-bold text-gray-800">
                                    ${product.price}
                                </span>
                                <button 
                                    className="px-5 py-2.5 bg-green-500 text-white rounded-lg font-semibold 
                                             hover:bg-green-600 active:bg-green-700 
                                             transform hover:scale-105 active:scale-95
                                             transition-all duration-200 ease-in-out
                                             shadow-md hover:shadow-lg"
                                    onClick={() => console.log(`Add to cart: ${product.id}`)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}




