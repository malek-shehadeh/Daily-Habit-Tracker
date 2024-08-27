// // // frontend/src/components/HabitList.js
// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const HabitList = ({ habits, setHabits }) => {
// //   const [editingHabit, setEditingHabit] = useState(null);

// //   const handleEdit = (habit) => {
// //     setEditingHabit(habit);
// //   };

// //   const handleUpdate = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.put(`http://localhost:5000/api/habits/${editingHabit._id}`, editingHabit);
// //       setEditingHabit(null);
// //       setHabits(habits.map(habit => habit._id === response.data._id ? response.data : habit));
// //     } catch (error) {
// //       console.error('Error updating habit:', error);
// //     }
// //   };

// //   const handleDelete = async (id) => {
// //     try {
// //       await axios.delete(`http://localhost:5000/api/habits/${id}`);
// //       setHabits(habits.filter(habit => habit._id !== id));
// //     } catch (error) {
// //       console.error('Error deleting habit:', error);
// //     }
// //   };

// //   const handleComplete = async (id, isComplete) => {
// //     try {
// //       const endpoint = isComplete ? 'complete' : 'incomplete';
// //       const response = await axios.put(`http://localhost:5000/api/habits/${id}/${endpoint}`);
// //       setHabits(habits.map(habit => habit._id === id ? response.data : habit));
// //     } catch (error) {
// //       console.error('Error updating habit completion:', error);
// //     }
// //   };

// //   return (
// //     <div className="container mx-auto p-4">
// //       <h2 className="text-2xl font-bold mb-4">My Habits</h2>
// //       <ul className="space-y-4">
// //         {habits.map((habit) => (
// //           <li key={habit._id} className="bg-white shadow rounded-lg p-4">
// //             {editingHabit && editingHabit._id === habit._id ? (
// //               <form onSubmit={handleUpdate} className="space-y-2">
// //                 <input
// //                   type="text"
// //                   value={editingHabit.name}
// //                   onChange={(e) => setEditingHabit({ ...editingHabit, name: e.target.value })}
// //                   className="w-full p-2 border rounded"
// //                 />
// //                 <textarea
// //                   value={editingHabit.description}
// //                   onChange={(e) => setEditingHabit({ ...editingHabit, description: e.target.value })}
// //                   className="w-full p-2 border rounded"
// //                 />
// //                 <input
// //                   type="text"
// //                   value={editingHabit.category}
// //                   onChange={(e) => setEditingHabit({ ...editingHabit, category: e.target.value })}
// //                   className="w-full p-2 border rounded"
// //                 />
// //                 <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
// //                 <button onClick={() => setEditingHabit(null)} className="bg-gray-500 text-white px-4 py-2 rounded ml-2">Cancel</button>
// //               </form>
// //             ) : (
// //               <>
// //                 <h3 className="text-xl font-semibold">{habit.name}</h3>
// //                 <p className="text-gray-600">{habit.description}</p>
// //                 <div className="mt-2">
// //                   <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
// //                     {habit.category}
// //                   </span>
// //                 </div>
// //                 <div className="mt-4 flex items-center">
// //                   <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
// //                     <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${habit.progress}%`}}></div>
// //                   </div>
// //                   <span className="text-sm font-medium text-gray-500">{habit.progress}%</span>
// //                 </div>
// //                 <div className="mt-4 space-x-2">
// //                   <button onClick={() => handleEdit(habit)} className="bg-yellow-500 text-white px-4 py-2 rounded">Edit</button>
// //                   <button onClick={() => handleDelete(habit._id)} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
// //                   <button onClick={() => handleComplete(habit._id, true)} className="bg-green-500 text-white px-4 py-2 rounded">Complete</button>
// //                   <button onClick={() => handleComplete(habit._id, false)} className="bg-orange-500 text-white px-4 py-2 rounded">Incomplete</button>
// //                 </div>
// //               </>
// //             )}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default HabitList;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { PencilIcon, TrashIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

// const HabitList = ({ habits, setHabits }) => {
//   const [editingHabit, setEditingHabit] = useState(null);

//   const handleEdit = (habit) => {
//     setEditingHabit(habit);
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(`http://localhost:5000/api/habits/${editingHabit._id}`, editingHabit);
//       setEditingHabit(null);
//       setHabits(habits.map(habit => habit._id === response.data._id ? response.data : habit));
//     } catch (error) {
//       console.error('Error updating habit:', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/habits/${id}`);
//       setHabits(habits.filter(habit => habit._id !== id));
//     } catch (error) {
//       console.error('Error deleting habit:', error);
//     }
//   };

//   const handleComplete = async (id, isComplete) => {
//     try {
//       const endpoint = isComplete ? 'complete' : 'incomplete';
//       const response = await axios.put(`http://localhost:5000/api/habits/${id}/${endpoint}`);
//       setHabits(habits.map(habit => habit._id === id ? response.data : habit));
//     } catch (error) {
//       console.error('Error updating habit completion:', error);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h2 className="text-3xl font-bold mb-6 text-gray-800">My Habits</h2>
//       <div className="space-y-6">
//         {habits.map((habit) => (
//           <div key={habit._id} className="bg-white rounded-lg shadow-md overflow-hidden">
//             {editingHabit && editingHabit._id === habit._id ? (
//               <form onSubmit={handleUpdate} className="p-6 space-y-4">
//                 <input
//                   type="text"
//                   value={editingHabit.name}
//                   onChange={(e) => setEditingHabit({ ...editingHabit, name: e.target.value })}
//                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   placeholder="Habit name"
//                 />
//                 <textarea
//                   value={editingHabit.description}
//                   onChange={(e) => setEditingHabit({ ...editingHabit, description: e.target.value })}
//                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   placeholder="Description"
//                   rows="3"
//                 />
//                 <input
//                   type="text"
//                   value={editingHabit.category}
//                   onChange={(e) => setEditingHabit({ ...editingHabit, category: e.target.value })}
//                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   placeholder="Category"
//                 />
//                 <div className="flex justify-end space-x-2">
//                   <button type="button" onClick={() => setEditingHabit(null)} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
//                     Cancel
//                   </button>
//                   <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
//                     Save Changes
//                   </button>
//                 </div>
//               </form>
//             ) : (
//               <div className="p-6">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-800">{habit.name}</h3>
//                     <p className="mt-2 text-gray-600">{habit.description}</p>
//                     <span className="inline-block mt-2 px-2 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">
//                       {habit.category}
//                     </span>
//                   </div>
//                   <div className="flex space-x-2">
//                     <button onClick={() => handleEdit(habit)} className="p-2 text-gray-500 hover:text-blue-600 focus:outline-none">
//                       <PencilIcon className="h-5 w-5" />
//                     </button>
//                     <button onClick={() => handleDelete(habit._id)} className="p-2 text-gray-500 hover:text-red-600 focus:outline-none">
//                       <TrashIcon className="h-5 w-5" />
//                     </button>
//                   </div>
//                 </div>
//                 <div className="mt-4">
//                   <div className="relative pt-1">
//                     <div className="flex mb-2 items-center justify-between">
//                       <div>
//                         <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
//                           Progress
//                         </span>
//                       </div>
//                       <div className="text-right">
//                         <span className="text-xs font-semibold inline-block text-blue-600">
//                           {habit.progress}%
//                         </span>
//                       </div>
//                     </div>
//                     <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
//                       <div style={{ width: `${habit.progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mt-4 flex justify-end space-x-2">
//                   <button
//                     onClick={() => handleComplete(habit._id, true)}
//                     className="flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//                   >
//                     <CheckCircleIcon className="h-4 w-4 mr-1" />
//                     Complete
//                   </button>
//                   <button
//                     onClick={() => handleComplete(habit._id, false)}
//                     className="flex items-center px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
//                   >
//                     <XCircleIcon className="h-4 w-4 mr-1" />
//                     Incomplete
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HabitList;
///////////////////
import React, { useState } from "react";
import axios from "axios";
import {
  PencilIcon,
  TrashIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

const HabitList = ({ habits, setHabits }) => {
  const [editingHabit, setEditingHabit] = useState(null);

  const handleEdit = (habit) => {
    setEditingHabit(habit);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/api/habits/${editingHabit._id}`,
        editingHabit
      );
      setEditingHabit(null);
      setHabits(
        habits.map((habit) =>
          habit._id === response.data._id ? response.data : habit
        )
      );
    } catch (error) {
      console.error("Error updating habit:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/habits/${id}`);
      setHabits(habits.filter((habit) => habit._id !== id));
    } catch (error) {
      console.error("Error deleting habit:", error);
    }
  };

  const handleComplete = async (id, isComplete) => {
    try {
      const endpoint = isComplete ? "complete" : "incomplete";
      const response = await axios.put(
        `http://localhost:5000/api/habits/${id}/${endpoint}`
      );
      setHabits(
        habits.map((habit) => (habit._id === id ? response.data : habit))
      );
    } catch (error) {
      console.error("Error updating habit completion:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 rounded-3xl shadow-lg">
      <h2 className="text-4xl font-bold mb-8 text-white text-center">
        My Colorful Habits
      </h2>
      <div className="space-y-6">
        {habits.map((habit) => (
          <div
            key={habit._id}
            className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
          >
            {editingHabit && editingHabit._id === habit._id ? (
              <form onSubmit={handleUpdate} className="p-6 space-y-4">
                <input
                  type="text"
                  value={editingHabit.name}
                  onChange={(e) =>
                    setEditingHabit({ ...editingHabit, name: e.target.value })
                  }
                  className="w-full p-2 bg-white bg-opacity-30 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  placeholder="Habit name"
                />
                <textarea
                  value={editingHabit.description}
                  onChange={(e) =>
                    setEditingHabit({
                      ...editingHabit,
                      description: e.target.value,
                    })
                  }
                  className="w-full p-2 bg-white bg-opacity-30 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  placeholder="Description"
                  rows="3"
                />
                <input
                  type="text"
                  value={editingHabit.category}
                  onChange={(e) =>
                    setEditingHabit({
                      ...editingHabit,
                      category: e.target.value,
                    })
                  }
                  className="w-full p-2 bg-white bg-opacity-30 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  placeholder="Category"
                />
                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={() => setEditingHabit(null)}
                    className="px-4 py-2 text-sm font-medium text-purple-600 bg-white rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600 transition-colors duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600 transition-colors duration-300"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {habit.name}
                    </h3>
                    <p className="mt-2 text-white text-opacity-80">
                      {habit.description}
                    </p>
                    <span className="inline-block mt-2 px-2 py-1 text-xs font-semibold text-purple-800 bg-purple-200 bg-opacity-50 rounded-full">
                      {habit.category}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(habit)}
                      className="p-2 text-white hover:text-yellow-300 focus:outline-none transition-colors duration-300"
                    >
                      <PencilIcon className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(habit._id)}
                      className="p-2 text-white hover:text-red-300 focus:outline-none transition-colors duration-300"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200 bg-opacity-50">
                          Progress
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-white">
                          {habit.progress}%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200 bg-opacity-50">
                      <div
                        style={{ width: `${habit.progress}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-white"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-end space-x-2">
                  <button
                    onClick={() => handleComplete(habit._id, true)}
                    className="flex items-center px-3 py-1 bg-green-500 bg-opacity-30 text-white rounded-full text-sm font-medium hover:bg-opacity-40 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600 transition-colors duration-300"
                  >
                    <CheckCircleIcon className="h-4 w-4 mr-1" />
                    Complete
                  </button>
                  <button
                    onClick={() => handleComplete(habit._id, false)}
                    className="flex items-center px-3 py-1 bg-orange-500 bg-opacity-30 text-white rounded-full text-sm font-medium hover:bg-opacity-40 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600 transition-colors duration-300"
                  >
                    <XCircleIcon className="h-4 w-4 mr-1" />
                    Incomplete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HabitList;
