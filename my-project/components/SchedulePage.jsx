// import React from 'react';

// function SchedulePage() {
//   const statusLabels = [
//     { text: 'All Statuses', bg: 'bg-gray-100' },
//     { text: 'Scheduled', bg: 'bg-blue-500' },
//     { text: 'Unscheduled', bg: 'bg-orange-500' },
//     { text: 'Clocked In', bg: 'bg-green-500' },
//     { text: 'Confirmed', bg: 'bg-blue-600' }
//   ];

//   const clients = [
//     { name: 'Abhallah, Ralph', s: 0, c: 0, p: 0 },
//     { name: 'Charpentier, D', s: 0, c: 0, p: 0 },
//     { name: 'Claudia, Delle', s: 0, c: 0, p: 0 }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       {/* Search Bar */}
//       <div className="mb-4">
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Quick Search Active Clients and Caregivers"
//             className="w-full px-4 py-2 border rounded-lg"
//           />
//         </div>
//       </div>

//       {/* Status Tags */}
//       <div className="flex flex-wrap gap-2 mb-4">
//         {statusLabels.map((status, index) => (
//           <span
//             key={index}
//             className={`${status.bg} text-white px-3 py-1 rounded-full text-sm`}
//           >
//             {status.text}
//           </span>
//         ))}
//       </div>

//       {/* Action Buttons */}
//       <div className="flex gap-2 mb-4">
//         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
//           + Schedule Shift
//         </button>
//         <button className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600">
//           Bulk Editor
//         </button>
//         <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
//           Delete Schedules
//         </button>
//       </div>

//       {/* Dropdowns */}
//       <div className="flex justify-between mb-4">
//         <select className="w-64 p-2 border rounded-lg">
//           <option>All Clients</option>
//         </select>
//         <select className="w-64 p-2 border rounded-lg">
//           <option>All Caregivers</option>
//         </select>
//       </div>

//       {/* Date Navigation */}
//       <div className="flex items-center justify-between mb-4">
//         <div className="flex items-center gap-2">
//           <button className="px-2 py-1">←</button>
//           <span className="font-semibold">JAN 8 - 14, 2024</span>
//           <button className="px-2 py-1">→</button>
//         </div>
//         <div className="flex gap-2">
//           <button className="px-4 py-2 hover:bg-gray-100 rounded">Day</button>
//           <button className="px-4 py-2 bg-gray-800 text-white rounded">Week</button>
//           <button className="px-4 py-2 hover:bg-gray-100 rounded">Month</button>
//           <button className="px-4 py-2 hover:bg-gray-100 rounded">Caregiver View</button>
//         </div>
//       </div>

//       {/* Schedule Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-50">
//               <th className="border p-2 text-left">CLIENT</th>
//               <th className="border p-2">S</th>
//               <th className="border p-2">C</th>
//               <th className="border p-2">P</th>
//               <th className="border p-2">MON 8</th>
//               <th className="border p-2">TUE 9</th>
//               <th className="border p-2">WED 10</th>
//               <th className="border p-2">THU 11</th>
//               <th className="border p-2">FRI 12</th>
//               <th className="border p-2">SAT 13</th>
//               <th className="border p-2">SUN 14</th>
//             </tr>
//           </thead>
//           <tbody>
//             {clients.map((client, index) => (
//               <tr key={index} className="hover:bg-gray-50">
//                 <td className="border p-2 text-blue-500 hover:underline cursor-pointer">
//                   {client.name}
//                 </td>
//                 <td className="border p-2 text-center">{client.s}</td>
//                 <td className="border p-2 text-center">{client.c}</td>
//                 <td className="border p-2 text-center">{client.p}</td>
//                 <td className="border p-2"></td>
//                 <td className="border p-2"></td>
//                 <td className="border p-2"></td>
//                 <td className="border p-2"></td>
//                 <td className="border p-2"></td>
//                 <td className="border p-2"></td>
//                 <td className="border p-2"></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default SchedulePage;






// Refining the code now

// import React from 'react';
// import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
// import EventAvailableIcon from '@mui/icons-material/EventAvailable';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import SearchIcon from '@mui/icons-material/Search';
// function SchedulePage() {
//   const statusLabels = [
//     { text: 'All Statuses', bg: 'bg-black' },
//     { text: 'Scheduled', bg: 'bg-blue-600', textColor: 'text-white' },
//     { text: 'Unscheduled', bg: 'bg-orange-600', textColor: 'text-white' },
//     { text: 'Clocked In', bg: 'bg-green-600', textColor: 'text-white' },
//     { text: 'Confirmed', bg: 'bg-blue-700', textColor: 'text-white' },
//     { text: 'Unconfirmed', bg: 'bg-purple-500', textColor: 'text-white' },
//     { text: 'Open Shift', bg: 'bg-yellow-500', textColor: 'text-white' },
//     { text: 'Client Canceled', bg: 'bg-red-600', textColor: 'text-white' },
//     { text: 'CG Canceled', bg: 'bg-orange-600', textColor: 'text-white' },
//     { text: 'CG No Show', bg: 'bg-cyan-500', textColor: 'text-white' },
//     { text: 'Attention Required', bg: 'bg-red-700', textColor: 'text-white' },
//     { text: 'HOL / OT', bg: 'bg-pink-500', textColor: 'text-white' },
//     { text: 'Added to Past', bg: 'bg-blue-800', textColor: 'text-white' },
//     { text: 'Hospital Hold', bg: 'bg-purple-400', textColor: 'text-white' },
//     { text: 'Unable to Staff', bg: 'bg-black', textColor: 'text-white' },
//     { text: 'Medicaid Missed Visit', bg: 'bg-black', textColor: 'text-black' }
//   ];

//   const clients = [
//     { name: 'Abhallah, Ralph', s: 0, c: 0, p: 0 },
//     { name: 'Charpentier, D', s: 0, c: 0, p: 0 },
//     { name: 'Claudia, Delle', s: 0, c: 0, p: 0 }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-200 p-6">



//       {/* Search Bar Section */}
//       <div className="bg-white p-4 rounded-md mb-4 shadow">
//         <div className="flex justify-between items-center">
//           <h1 className="text-blue-500 font-extrabold text-2xl lg:text-3xl tracking-wide">Schedule</h1>
//           <div className="relative w-1/3"> {/* Adjusted width */}
//             <input
//               type="text"
//               placeholder="Quick Search Active Clients and Caregivers"
//               className="w-full px-4 py-2 border rounded-lg"
//             />
//           </div>
//         </div>
//       </div>


//       {/* Main Content Section */}
//       <div className="bg-white p-6 rounded-md shadow">
//         {/* Status Tags */}
//         <div className="flex flex-wrap gap-2 mb-4">
//           {statusLabels.map((status, index) => (
//             <span
//               key={index}
//               className={`${status.bg} text-white px-3 py-1 rounded-full text-sm w-[calc(12.5%-0.5rem)]`}
//             >
//               {status.text}
//             </span>
//           ))}
//         </div>

//         {/* Action Buttons */}
//         <div className="flex gap-2 mb-4">
//           <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
//             + Schedule Shift
//           </button>
//           <button className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600">
//             Bulk Editor
//           </button>
//           <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
//             Delete Schedules
//           </button>
//         </div>

//         {/* Dropdowns */}
//         <div className="flex justify-between mb-4">
//           <select className="w-64 p-2 border rounded-lg">
//             <option>All Clients</option>
//           </select>
//           <select className="w-64 p-2 border rounded-lg">
//             <option>All Caregivers</option>
//           </select>
//         </div>

//         {/* Date Navigation */}
//         <div className="flex items-center justify-between mb-4">
//           <div className="flex items-center gap-2">
//             <button className="px-2 py-1">←</button>
//             <span className="font-semibold">JAN 8 - 14, 2024</span>
//             <button className="px-2 py-1">→</button>
//           </div>
//           <div className="flex gap-2">
//             <button className="px-4 py-2 bg-grey-300 hover:bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 active:bg-blue-200">Day</button>
//             <button className="px-4 py-2 bg-grey-300 text-black hover:bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-gray-600 active:bg-gray-700">Week</button>
//             <button className="px-4 py-2 bg-grey-300 hover:bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-green-400 active:bg-green-200">Month</button>
//             <button className="px-4 py-2 bg-grey-300 hover:bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 active:bg-yellow-200">Caregiver View</button>
//             <button className='px-2 py-1 bg-grey hover:bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-grey-300 active:bg-grey-300'> 
//               < LocalPrintshopOutlinedIcon />
//             </button>
//             <button className='px-4 py-1 bg-grey hover:bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-grey-300 active:bg-grey-300'> 
//               < EventAvailableIcon />
//             </button>
//             <button className='px-2 py-1 bg-grey hover:bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-grey-300 active:bg-grey-300'> 
//               < LocationOnIcon />
//             </button>

//           </div>
//         </div>


//         {/* Schedule Table */}
//         <div className="overflow-x-auto">
//           <table className="w-full border-collapse">
//             <thead>
//               <tr className="bg-gray-50">
//                 <th className="border p-2 text-left">CLIENT</th>
//                 <th className="border p-2">S</th>
//                 <th className="border p-2">C</th>
//                 <th className="border p-2">P</th>
//                 <th className="border p-2">MON 8</th>
//                 <th className="border p-2">TUE 9</th>
//                 <th className="border p-2">WED 10</th>
//                 <th className="border p-2">THU 11</th>
//                 <th className="border p-2">FRI 12</th>
//                 <th className="border p-2">SAT 13</th>
//                 <th className="border p-2">SUN 14</th>
//               </tr>
//             </thead>
//             <tbody>
//               {clients.map((client, index) => (
//                 <tr key={index} className="hover:bg-gray-50">
//                   <td className="border p-2 text-blue-500 hover:underline cursor-pointer">
//                     {client.name}
//                   </td>
//                   <td className="border p-2 text-center">{client.s}</td>
//                   <td className="border p-2 text-center">{client.c}</td>
//                   <td className="border p-2 text-center">{client.p}</td>
//                   <td className="border p-2"></td>
//                   <td className="border p-2"></td>
//                   <td className="border p-2"></td>
//                   <td className="border p-2"></td>
//                   <td className="border p-2"></td>
//                   <td className="border p-2"></td>
//                   <td className="border p-2"></td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SchedulePage;




import React, { useState } from 'react';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';

function SchedulePage() {
  const [viewMode, setViewMode] = useState('week');
  const [currentDate, setCurrentDate] = useState(new Date());

  const statusLabels = [
    { text: 'All Statuses', bg: 'bg-black' },
    { text: 'Scheduled', bg: 'bg-blue-600', textColor: 'text-white' },
    { text: 'Unscheduled', bg: 'bg-orange-600', textColor: 'text-white' },
    { text: 'Clocked In', bg: 'bg-green-600', textColor: 'text-white' },
    { text: 'Confirmed', bg: 'bg-blue-700', textColor: 'text-white' },
    { text: 'Unconfirmed', bg: 'bg-purple-500', textColor: 'text-white' },
    { text: 'Open Shift', bg: 'bg-yellow-500', textColor: 'text-white' },
    { text: 'Client Canceled', bg: 'bg-red-600', textColor: 'text-white' },
    { text: 'CG Canceled', bg: 'bg-orange-600', textColor: 'text-white' },
    { text: 'CG No Show', bg: 'bg-cyan-500', textColor: 'text-white' },
    { text: 'Attention Required', bg: 'bg-red-700', textColor: 'text-white' },
    { text: 'HOL / OT', bg: 'bg-pink-500', textColor: 'text-white' },
    { text: 'Added to Past', bg: 'bg-blue-800', textColor: 'text-white' },
    { text: 'Hospital Hold', bg: 'bg-purple-400', textColor: 'text-white' },
    { text: 'Unable to Staff', bg: 'bg-black', textColor: 'text-white' },
    { text: 'Medicaid Missed Visit', bg: 'bg-black', textColor: 'text-black' }
  ];

  const clients = [
    { name: 'Abhallah, Ralph', s: 0, c: 0, p: 0 },
    { name: 'Charpentier, D', s: 0, c: 0, p: 0 },
    { name: 'Claudia, Delle', s: 0, c: 0, p: 0 }
  ];

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const getDateRange = () => {
    const dates = [];
    const startDate = new Date(currentDate);

    if (viewMode === 'day') {
      for (let i = 0; i < 24; i++) {
        dates.push(`${i}:00`);
      }
    } else if (viewMode === 'week') {
      startDate.setDate(currentDate.getDate() - 6);
      for (let i = 0; i < 7; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        dates.push(formatDate(date));
      }
    } else if (viewMode === 'month') {
      const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
      for (let i = 0; i < 5; i++) {
        const weekStart = new Date(firstDay);
        weekStart.setDate(firstDay.getDate() + (i * 7));
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + 6);
        dates.push(`${formatDate(weekStart)} - ${formatDate(weekEnd)}`);
      }
    }
    return dates;
  };

  const getDateRangeDisplay = () => {
    if (viewMode === 'day') {
      return formatDate(currentDate);
    } else if (viewMode === 'week') {
      const endDate = new Date(currentDate);
      const startDate = new Date(currentDate);
      startDate.setDate(currentDate.getDate() - 6);
      return `${formatDate(startDate)} - ${formatDate(endDate)}`;
    } else {
      return currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    }
  };

  const navigate = (direction) => {
    const newDate = new Date(currentDate);
    if (viewMode === 'day') {
      newDate.setDate(currentDate.getDate() + direction);
    } else if (viewMode === 'week') {
      newDate.setDate(currentDate.getDate() + (direction * 7));
    } else {
      newDate.setMonth(currentDate.getMonth() + direction);
    }
    setCurrentDate(newDate);
  };

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <div className="bg-white p-4 rounded-md mb-4 shadow">
        <div className="flex justify-between items-center">
          <h1 className="text-blue-500 font-extrabold text-2xl lg:text-3xl tracking-wide">Schedule</h1>
          <div className="relative w-1/3">
            <input
              type="text"
              placeholder="Quick Search Active Clients and Caregivers"
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-md shadow">
        <div className="flex flex-wrap gap-2 mb-4">
          {statusLabels.map((status, index) => (
            <span
              key={index}
              className={`${status.bg} text-white px-3 py-1 rounded-full text-sm w-[calc(12.5%-0.5rem)]`}
            >
              {status.text}
            </span>
          ))}
        </div>

        <div className="flex gap-2 mb-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            + Schedule Shift
          </button>
          <button className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600">
            Bulk Editor
          </button>
          <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
            Delete Schedules
          </button>
        </div>

        <div className="flex justify-between mb-4">
          <select className="w-64 p-2 border rounded-lg">
            <option>All Clients</option>
          </select>
          <select className="w-64 p-2 border rounded-lg">
            <option>All Caregivers</option>
          </select>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <button
              className="px-2 py-1 hover:bg-gray-100 rounded"
              onClick={() => navigate(-1)}
            >←</button>
            <span className="font-semibold">
              {getDateRangeDisplay()}
            </span>
            <button
              className="px-2 py-1 hover:bg-gray-500 rounded"
              onClick={() => navigate(1)}
            >→</button>
          </div>
          <div className="flex gap-2">
            <button
              className={`px-4 py-2 bg-grey-300 hover:bg-gray-500 rounded focus:outline-none focus:ring-2 ${viewMode === 'day' ? 'bg-blue-900 text-white' : ''
                }`}
              onClick={() => setViewMode('day')}
            >Day</button>
            <button
              className={`px-4 py-2 bg-grey-300 hover:bg-gray-500 rounded focus:outline-none focus:ring-2 ${viewMode === 'week' ? 'bg-blue-900 text-white' : ''
                }`}
              onClick={() => setViewMode('week')}
            >Week</button>
            <button
              className={`px-4 py-2 bg-grey-300 hover:bg-gray-500 rounded focus:outline-none focus:ring-2 ${viewMode === 'month' ? 'bg-blue-900 text-white' : ''
                }`}
              onClick={() => setViewMode('month')}
            >Month</button>
            <button className="px-4 py-2 bg-grey-300 hover:bg-gray-500 rounded">
              Caregiver View
            </button>
            <button className='px-2 py-1 bg-grey hover:bg-gray-500 rounded'>
              <LocalPrintshopOutlinedIcon />
            </button>
            <button className='px-4 py-1 bg-grey hover:bg-gray-500 rounded'>
              <EventAvailableIcon />
            </button>
            <button className='px-2 py-1 bg-grey hover:bg-gray-500 rounded'>
              <LocationOnIcon />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border p-2 text-left">CLIENT</th>
                <th className="border p-2">S</th>
                <th className="border p-2">C</th>
                <th className="border p-2">P</th>
                {getDateRange().map((date, index) => (
                  <th key={index} className="border p-2">{date}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {clients.map((client, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border p-2 text-blue-500 hover:underline cursor-pointer">
                    {client.name}
                  </td>
                  <td className="border p-2 text-center">{client.s}</td>
                  <td className="border p-2 text-center">{client.c}</td>
                  <td className="border p-2 text-center">{client.p}</td>
                  {getDateRange().map((_, i) => (
                    <td key={i} className="border p-2"></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SchedulePage;