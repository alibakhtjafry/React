// import { useState } from 'react';
// import { ShoppingCart, User2, Search, Menu, X, ChevronDown } from 'lucide-react';
// import SignIn from "./SignInModal"

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [isSignInOpen, setIsSignInOpen] = useState(false);

//     return (
//         <>
//             <nav className="bg-white shadow-sm">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex items-center h-16">
//                         {/* Logo - Now guaranteed to be at the start */}
//                         <div className=" mr-3 -ml-32">
//                             <span className="text-emerald-600 text-2xl font-bold">Fresh & Fit</span>
//                         </div>

//                         {/* Desktop Navigation */}
//                         <div className="hidden md:flex items-start space-x-8 ml-10">
//                             <div className="relative group">
//                                 <button className="flex items-center text-gray-700 hover:text-emerald-600">
//                                     Demos
//                                     <ChevronDown className="ml-1 h-4 w-4" />
//                                 </button>
//                             </div>
//                             <div className="relative group">
//                                 <button className="flex items-center text-gray-700 hover:text-emerald-600">
//                                     Categories
//                                     <ChevronDown className="ml-1 h-4 w-4" />
//                                 </button>
//                             </div>
//                             <div className="relative group">
//                                 <button className="flex items-center text-gray-700 hover:text-emerald-600">
//                                     Dietary
//                                     <ChevronDown className="ml-1 h-4 w-4" />
//                                 </button>
//                             </div>
//                             <button className="text-gray-700 hover:text-emerald-600">Search</button>
//                             <button className="text-gray-700 hover:text-emerald-600">Shops</button>
//                             <div className="relative group">
//                                 <button className="flex items-center text-gray-700 hover:text-emerald-600">
//                                     Pages
//                                     <ChevronDown className="ml-1 h-4 w-4" />
//                                 </button>
//                             </div>
//                         </div>

//                         {/* Right side icons */}
//                         <div className="hidden md:flex ml-auto space-x-6">
//                             <button className="text-gray-700 hover:text-emerald-600">
//                                 <Search className="h-5 w-5" />
//                             </button>
//                             <div className="relative">
//                                 <button className="text-gray-700 hover:text-emerald-600">
//                                     <ShoppingCart className="h-5 w-5" />
//                                 </button>
//                                 <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                                     0
//                                 </span>
//                             </div>
//                             <button
//                                 onClick={() => setIsSignInOpen(true)}
//                                 className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600"
//                             >
//                                 <User2 className="h-5 w-5" />
//                                 <span>Sign In</span>
//                             </button>
//                         </div>

//                         {/* Mobile menu button */}
//                         <div className="md:hidden">
//                             <button
//                                 onClick={() => setIsOpen(!isOpen)}
//                                 className="text-gray-700 hover:text-emerald-600"
//                             >
//                                 {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Mobile menu */}
//                 {isOpen && (
//                     <div className="md:hidden">
//                         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                             <a href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Demos</a>
//                             <a href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Categories</a>
//                             <a href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Dietary</a>
//                             <a href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Search</a>
//                             <a href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Shops</a>
//                             <a href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Pages</a>
//                         </div>
//                         <div className="pt-4 pb-3 border-t border-gray-200">
//                             <div className="flex items-center px-5">
//                                 <button
//                                     onClick={() => setIsSignInOpen(true)}
//                                     className="flex-shrink-0 text-gray-700 hover:text-emerald-600"
//                                 >
//                                     <User2 className="h-5 w-5" />
//                                 </button>
//                                 <div className="ml-3">
//                                     <div className="text-base font-medium text-gray-800">Sign In</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </nav>

//             {/* Sign In Modal */}
//             <SignIn isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} />

//             <div className="flex justify-end">
//                 <video autoPlay loop muted className="absolute top-18 transform -translate-x-0 -translate-y-0  h-[600px] w-full object-cover">
//                     <source src="/logo2.mp4" type="video/mp4" />
//                     <source src="/path/to/your/video.webm" type="video/webm" />
//                     Your browser does not support the video tag.
//                 </video>
//             </div>

//         </>
//     );
// };

// export default Navbar;

import { useState, useEffect, useRef } from 'react';
import { ShoppingCart, User2,Menu, X, ChevronDown, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SignIn from "./SignInModal";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSignInOpen, setIsSignInOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const accountMenuRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (accountMenuRef.current && !accountMenuRef.current.contains(event.target)) {
                setShowAccountMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSignOut = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setShowAccountMenu(false);
        navigate('/');
    };

    const handleLoginSuccess = () => {
        setIsAuthenticated(true);
        setIsSignInOpen(false);
    };

    const handleAccountClick = () => {
        navigate('/account');
        setShowAccountMenu(false);
    };

    return (
        <>
            <nav className="bg-white shadow-sm fixed w-full h-19 z-10 top-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center h-16">
                        {/* Logo */}
                        <div className="mr-3 -ml-32">
                            <button
                            onClick={() => navigate("/")}
                             className="text-emerald-600 text-[27px] font-bold">Fresh & Fit</button>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-start space-x-10 ml-10 text-[16.5px]">
                            <div className="relative group">
                                <button
                                    onClick={() => navigate("/")}
                                    className="text-gray-700 hover:text-emerald-600 transition-colors"
                                >
                                    Home
                                </button>
                            </div>
                            <div className="relative group">
                            <button
                                    onClick={() => navigate("/products")}
                                    className="text-gray-700 hover:text-emerald-600 transition-colors"
                                >
                                    Products
                                </button>
                            </div>
                            <div className="relative group">
                                <button className="flex items-center text-gray-700 hover:text-emerald-600">
                                    Dietary
                                    <ChevronDown className="ml-1 h-4 w-4" />
                                </button>
                            </div>
                            <div className="relative group">
                                <button className="flex items-center text-gray-700 hover:text-emerald-600">
                                    Pages
                                    <ChevronDown className="ml-1 h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        {/* Right side icons */}
                        <div className="hidden md:flex ml-auto space-x-9">
                            
                            <div className="relative">
                                <button onClick={()=> navigate("/cart")} className="text-gray-700 hover:text-emerald-600">
                                    <ShoppingCart className="h-6 w-6" />
                                </button>
                                <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    0
                                </span>
                            </div>

                            {isAuthenticated ? (
                                <div className="relative" ref={accountMenuRef}>
                                    <button
                                        onClick={() => setShowAccountMenu(!showAccountMenu)}
                                        className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600"
                                    >
                                        <User2 className="h-6 w-6" />
                                        <span className='text-[16.5px]'>Account</span>
                                    </button>

                                    {showAccountMenu && (
                                        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                                            <button
                                                onClick={handleAccountClick}
                                                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                                            >
                                                <User2 className="h-4 w-4 mr-2" />
                                                My Account
                                            </button>
                                            <button
                                                onClick={handleSignOut}
                                                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                                            >
                                                <LogOut className="h-4 w-4 mr-2" />
                                                Sign Out
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <button
                                    onClick={() => setIsSignInOpen(true)}
                                    className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600"
                                >
                                    <User2 className="h-5 w-5" />
                                    <span>Sign In</span>
                                </button>
                            )}
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-700 hover:text-emerald-600"
                            >
                                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Demos</a>
                            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Categories</a>
                            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Dietary</a>
                            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Search</a>
                            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Shops</a>
                            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Pages</a>
                        </div>
                        <div className="pt-4 pb-3 border-t border-gray-200">
                            <div className="flex items-center px-5">
                                {isAuthenticated ? (
                                    <button
                                        onClick={handleSignOut}
                                        className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600"
                                    >
                                        <LogOut className="h-5 w-5" />
                                        <span>Sign Out</span>
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => setIsSignInOpen(true)}
                                        className="flex-shrink-0 text-gray-700 hover:text-emerald-600"
                                    >
                                        <User2 className="h-5 w-5" />
                                        <div className="ml-3">
                                            <div className="text-base font-medium text-gray-800">Sign In</div>
                                        </div>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* Sign In Modal */}
            <SignIn
                isOpen={isSignInOpen}
                onClose={() => setIsSignInOpen(false)}
                onLoginSuccess={handleLoginSuccess}
            />

            
        </>
    );
};

export default Navbar;