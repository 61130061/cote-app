import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useStoreContext } from '../Store';

function Menu ({ onClick, children }) {
   const [hover, setHover] = useState(false);

   return (
      <li 
         onClick={onClick} 
         onMouseOver={() => setHover(true)} 
         onMouseLeave={() => setHover(false)} 
         className="p-2 rounded-lg hover:bg-blue-400 hover:cursor-pointer text-gray-400 hover:text-white"
      >
         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {children}
         </svg>
      </li>
   )
}

function Folder ({ highlight="blue", onClick }) {
   return (
      <li 
         onClick={onClick} 
         className={`p-2 rounded-lg text-${highlight}-400 hover:bg-${highlight}-400 hover:cursor-pointer hover:text-white`}
      >
         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} color="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
         </svg>
      </li>
   )
}

export default function Sidebar () {
   const [showFolder, setShowFolder] = useState(false);
   const [folderId, setFolderId] = useState(null);

   const navigate = useNavigate();
   const { folders, notes, tags } = useStoreContext();

   const handleOpenFolder = (id) => {
      setFolderId(id);
      setShowFolder(true);
   }

   return (
      <div className="flex overflow-hidden">
         <div className="bg-stone-900 p-2">
            <div className="font-bold">Cote</div>

            {/* Main menu */}
            <ul className="my-5">
               <Menu onClick={() => navigate('/')}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
               </Menu>
               <Menu onClick={() => navigate('/')}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
               </Menu>
               <Menu onClick={() => navigate('/')}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
               </Menu>
               <Menu onClick={() => navigate('/')}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
               </Menu>
            </ul>

            {/* Folders */}
            <ul className="my-5">
               {folders.map((data, index) =>
               <Folder onClick={() => handleOpenFolder(data.id)} key={index} />
               )}
            </ul>
         </div>

         {showFolder &&
         <div className="flex flex-col bg-zinc-900 p-2 w-[240px]">

            <div className="flex text-xs gap-2 bg-zinc-700 rounded-lg w-full mt-2 mb-5 p-2 hover:cursor-text">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} color="#9ca3af">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
               </svg>
               <input className="w-full bg-transparent outline-none" placeholder="Search..." />
            </div>

            <div className="flex justify-between items-center mb-2">
               <div className="flex gap-2 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div className="font-bold text-white w-[140px] truncate overflow-hidden">
                     {folders.find(e => e.id == folderId).name}
                  </div>
               </div>
               <div className="flex items-center text-gray-400">
                  <div className="p-2 hover:cursor-pointer rounded-lg hover:text-white">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                     </svg>
                  </div>
                  <div onClick={() => setShowFolder(false)} className="p-1 hover:cursor-pointer rounded-lg hover:text-white">
                     <svg xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4" 
                        fill="none" 
                        viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}
                     >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                     </svg>
                  </div>
               </div>
            </div>

            <div className="flex flex-col flex-1 overflow-y-scroll no-scrollbar">
               {folderId && notes.filter(e => e.folderId == folderId).map((data, index) =>
               <div key={index} onClick={() => navigate('/note')} className="flex text-sm">
                  <div className="py-3 border-b border-[#ffffff20] w-full hover:cursor-pointer">
                     <div className="font-bold truncate">{data.topic}</div>
                     <div className="text-gray-400 mb-2 line-clamp-2">
                        {data.description}
                     </div>
                     <div className="flex gap-2 text-xs font-bold text-blue-400">
                        {data.tags.map((tagId, index) =>
                        <div key={index} className="hover:text-blue-500">
                           {tags.find(e=>e.id == tagId).name}
                        </div>
                        )}
                     </div>
                  </div>
               </div>
               )}
            </div>

         </div>
         }

      </div>
   )
}
