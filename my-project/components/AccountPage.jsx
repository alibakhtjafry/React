// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { User2, ShoppingBag,MapPin, HelpCircle,LogOut } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const AccountPage = () => {
//   const [userData, setUserData] = useState(null);
//   const [activeTab, setActiveTab] = useState('account-settings');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('http://localhost:4000/api/user/profile', {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         setUserData(response.data);
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//         if (axios.isAxiosError(error) && error.response?.status === 401) {
//           localStorage.removeItem('token');
//           navigate('/');
//         }
//       }
//     };

//     fetchUserData();
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/');
//   };

//   const menuItems = [
//     { icon: User2, label: 'Account Settings', id: 'account-settings' },
//     { icon: ShoppingBag, label: 'Orders', id: 'orders' },
//     { icon: MapPin, label: 'Address', id: 'address' },
//     { icon: HelpCircle, label: 'Help Center', id: 'help-center' },
//   ];

//   return (
//     <div className="container mx-auto px-4 py-8 pt-20">
//       <div className="flex flex-col md:flex-row gap-8">
//         <div className="w-full md:w-1/4">
//           <div className="bg-white rounded-lg shadow-sm p-6">
//             <div className="mb-6">
//               <h2 className="text-xl font-semibold mb-2">
//                 {userData ? userData.name : 'Loading...'}
//               </h2>
//               <p className="text-gray-600">{userData ? userData.email : 'Loading...'}</p>
//             </div>
//             <nav className="space-y-2">
//               {menuItems.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => setActiveTab(item.id)}
//                   className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
//                     activeTab === item.id
//                       ? 'bg-emerald-50 text-emerald-600'
//                       : 'text-gray-700 hover:bg-gray-50'
//                   }`}
//                 >
//                   <item.icon className="h-5 w-5" />
//                   <span>{item.label}</span>
//                 </button>
//               ))}
//               <button
//                 onClick={handleLogout}
//                 className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
//               >
//                 <LogOut className="h-5 w-5" />
//                 <span>Logout</span>
//               </button>
//             </nav>
//           </div>
//         </div>

//         <div className="w-full md:w-3/4">
//           <div className="bg-white rounded-lg shadow-sm p-6">
//             {activeTab === 'account-settings' && (
//               <div>
//                 <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>
//                 <form className="space-y-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">
//                         First Name
//                       </label>
//                       <input
//                         type="text"
//                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
//                         defaultValue={userData ? userData.name.split(' ')[0] : ''}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">
//                         Last Name
//                       </label>
//                       <input
//                         type="text"
//                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
//                         defaultValue={userData ? userData.name.split(' ')[1] : ''}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
//                         defaultValue={userData ? userData.email : ''}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">
//                         Phone Number
//                       </label>
//                       <input
//                         type="tel"
//                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
//                         defaultValue={userData ? userData.phone : ''}
//                       />
//                     </div>
//                   </div>
//                   <div className="flex justify-end">
//                     <button
//                       type="submit"
//                       className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
//                     >
//                       Save Changes
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AccountPage;



//chnaged code with data fetched from the database
import { useState, useEffect } from 'react';
import axios from 'axios';
import { User2, ShoppingBag, MapPin, HelpCircle, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AccountPage = () => {
  const [userData, setUserData] = useState(null);
  const [activeTab, setActiveTab] = useState('account-settings');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/');
          return;
        }
        const response = await axios.post('http://localhost:4000/api/cart/get', {
          headers: { token: `Bearer ${token}`, 'Content-Type': 'application/json' }
        });
        setUserData(response.data);
      } catch (error) {
        setError(error.response?.data?.message || 'Error fetching user data');
        if (axios.isAxiosError(error) && error.response?.status === 401) {
          localStorage.removeItem('token');
          navigate('/');
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };
  const menuItems = [
    { icon: User2, label: 'Account Settings', id: 'account-settings' },
    { icon: ShoppingBag, label: 'Orders', id: 'orders' },
    { icon: MapPin, label: 'Address', id: 'address' },
    { icon: HelpCircle, label: 'Help Center', id: 'help-center' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 pt-20">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-2">Hi, {userData?.name || 'User'}</h2>
            <p className="text-gray-600">{userData?.email || 'No email provided'}</p>
            <nav className="space-y-2 mt-6">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                    activeTab === item.id ? 'bg-emerald-50 text-emerald-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              ))}
              <button
                onClick={handleLogout}
                className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </nav>
          </div>
        </div>

        <div className="w-full md:w-3/4">
          <div className="bg-white rounded-lg shadow-sm p-6">
            {activeTab === 'account-settings' && (
              <div>
                <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>
                <form className="space-y-6">
                  <input type="text" className="w-full p-3 border rounded-md focus:ring focus:ring-emerald-500" placeholder="Full Name" defaultValue={userData?.name || ''} />
                  <input type="email" className="w-full p-3 border rounded-md focus:ring focus:ring-emerald-500" placeholder="Email" defaultValue={userData?.email || ''} />
                  <input type="tel" className="w-full p-3 border rounded-md focus:ring focus:ring-emerald-500" placeholder="Phone Number" defaultValue={userData?.phone || ''} />
                  <button className="w-full bg-emerald-600 text-white py-2 rounded-md hover:bg-emerald-700">Save Changes</button>
                </form>
              </div>
            )}
            {activeTab === 'address' && (
              <div>
                <h2 className="text-2xl font-semibold mb-6">Address Information</h2>
                <form className="space-y-6">
                  <input type="text" className="w-full p-3 border rounded-md focus:ring focus:ring-emerald-500" placeholder="Enter your address" value={address} onChange={(e) => setAddress(e.target.value)} />
                  <button className="w-full bg-emerald-600 text-white py-2 rounded-md hover:bg-emerald-700">Save Address</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
