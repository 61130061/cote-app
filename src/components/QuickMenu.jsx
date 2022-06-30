import { useNavigate } from 'react-router-dom';

export default function HomeQuick () {
   const navigate = useNavigate();

   return (
      <div className="flex flex-col gap-5 bg-zinc-700 rounded-md p-10 text-sm">
         <div className="text-md font-bold">Quick Menu</div>

         <div onClick={() => navigate('/note')} className="flex gap-3 items-center hover:cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} color="#9ca3af">
               <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <div>
               <div className="font-semibold text-blue-500 hover:text-blue-400">New Note</div>
               <div className="text-sm text-gray-400">descripttion for this menu</div>
            </div>
         </div>

         <div className="flex gap-3 items-center hover:cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} color="#9ca3af">
               <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            <div>
               <div className="font-semibold text-blue-500 hover:text-blue-400">New Collection</div>
               <div className="text-sm text-gray-400">descripttion for this menu</div>
            </div>
         </div>

         <div className="flex gap-3 items-center hover:cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} color="#9ca3af">
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <div>
               <div className="font-semibold text-blue-500 hover:text-blue-400">Import</div>
               <div className="text-sm text-gray-400">descripttion for this menu</div>
            </div>
         </div>
      </div>

   )
}
