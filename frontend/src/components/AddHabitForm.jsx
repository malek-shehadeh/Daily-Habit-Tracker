// // // frontend/src/components/AddHabitForm.js
// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const AddHabitForm = ({ onHabitAdded }) => {
// //   const [habit, setHabit] = useState({ name: '', description: '', category: '' });

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post('http://localhost:5000/api/habits', habit);
// //       setHabit({ name: '', description: '', category: '' });
// //       if (typeof onHabitAdded === 'function') {
// //         onHabitAdded(response.data);
// //       }
// //     } catch (error) {
// //       console.error('Error adding habit:', error);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
// //       <div className="mb-4">
// //         <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
// //           Habit Name
// //         </label>
// //         <input
// //           type="text"
// //           id="name"
// //           value={habit.name}
// //           onChange={(e) => setHabit({ ...habit, name: e.target.value })}
// //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //           required
// //         />
// //       </div>
// //       <div className="mb-4">
// //         <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
// //           Description
// //         </label>
// //         <textarea
// //           id="description"
// //           value={habit.description}
// //           onChange={(e) => setHabit({ ...habit, description: e.target.value })}
// //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //         />
// //       </div>
// //       <div className="mb-4">
// //         <label htmlFor="category" className="block text-gray-700 font-bold mb-2">
// //           Category
// //         </label>
// //         <input
// //           type="text"
// //           id="category"
// //           value={habit.category}
// //           onChange={(e) => setHabit({ ...habit, category: e.target.value })}
// //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //         />
// //       </div>
// //       <button
// //         type="submit"
// //         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
// //       >
// //         Add Habit
// //       </button>
// //     </form>
// //   );
// // };

// // export default AddHabitForm;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { PlusIcon } from '@heroicons/react/24/solid';

// const AddHabitForm = ({ onHabitAdded }) => {
//   const [habit, setHabit] = useState({ name: '', description: '', category: '' });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/habits', habit);
//       setHabit({ name: '', description: '', category: '' });
//       if (typeof onHabitAdded === 'function') {
//         onHabitAdded(response.data);
//       }
//     } catch (error) {
//       console.error('Error adding habit:', error);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
//       <form onSubmit={handleSubmit} className="p-6 space-y-4">
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Habit</h2>
//         <div>
//           <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//             Habit Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             value={habit.name}
//             onChange={(e) => setHabit({ ...habit, name: e.target.value })}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
//             Description
//           </label>
//           <textarea
//             id="description"
//             value={habit.description}
//             onChange={(e) => setHabit({ ...habit, description: e.target.value })}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             rows="3"
//           />
//         </div>
//         <div>
//           <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
//             Category
//           </label>
//           <input
//             type="text"
//             id="category"
//             value={habit.category}
//             onChange={(e) => setHabit({ ...habit, category: e.target.value })}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full flex justify-center items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//         >
//           <PlusIcon className="h-5 w-5 mr-2" />
//           Add Habit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddHabitForm;

import React, { useState } from "react";
import axios from "axios";
import { PlusIcon } from "@heroicons/react/24/solid";

const AddHabitForm = ({ onHabitAdded }) => {
  const [habit, setHabit] = useState({
    name: "",
    description: "",
    category: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/habits",
        habit
      );
      setHabit({ name: "", description: "", category: "" });
      if (typeof onHabitAdded === "function") {
        onHabitAdded(response.data);
      }
    } catch (error) {
      console.error("Error adding habit:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto overflow-hidden rounded-2xl shadow-lg">
      <div className="relative">
        {/* Colorful background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 opacity-90"></div>

        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full translate-x-1/4 translate-y-1/4"></div>

        <form onSubmit={handleSubmit} className="relative p-8 space-y-6">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Create New Habit
          </h2>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white mb-1"
            >
              Habit Name
            </label>
            <input
              type="text"
              id="name"
              value={habit.name}
              onChange={(e) => setHabit({ ...habit, name: e.target.value })}
              className="w-full px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              required
              placeholder="Enter habit name"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-white mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              value={habit.description}
              onChange={(e) =>
                setHabit({ ...habit, description: e.target.value })
              }
              className="w-full px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              rows="3"
              placeholder="Describe your habit"
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-white mb-1"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              value={habit.category}
              onChange={(e) => setHabit({ ...habit, category: e.target.value })}
              className="w-full px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              placeholder="e.g., Health, Productivity"
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center items-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600 transition-colors duration-300"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            Add Habit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddHabitForm;
