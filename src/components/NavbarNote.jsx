import React, { useState } from 'react';

function AddTagButton () {
   const [hover, setHover] = useState(false);

   return (
      <div 
         className="flex gap-1 items-center rounded-lg hover:cursor-pointer"
         onMouseOver={() => setHover(true)}
         onMouseLeave={() => setHover(false)}
      >
         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} color={hover ? "#fff[" : "#d4d4d8"}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
         </svg>
         <div className={hover ? "text-xs text-white" : "text-xs text-zinc-400"}>Add tag</div>
      </div>
   )
}

function Button ({ children }) {
   const [hover, setHover] = useState(false);

   return (
      <div 
         className="p-1 hover:cursor-pointer"
         onMouseOver={() => setHover(true)} 
         onMouseLeave={() => setHover(false)}
      >
         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} color={hover ? "#fff[" : "#d4d4d8"}>
            {children}
         </svg>
      </div>
   )
}


export default function NavbarNote () {
   return (
      <div className="flex justify-between text-sm mb-10">
         <div className="flex gap-3 items-center font-bold">
            <div className="flex gap-2 items-center">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
               </svg>
               <div className="hover:underline hover:cursor-pointer underline-offset-4">
                  My Folder
               </div>
            </div>
            <AddTagButton />
         </div>

         <div className="flex gap-3 mr-3">
            <Button>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </Button>
            <Button>
               <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </Button>
            <Button>
               <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </Button>
         </div>
      </div>
   )
}
