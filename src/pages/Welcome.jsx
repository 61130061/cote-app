import QuickMenu from '../components/QuickMenu';

export default function Welcome () {
   return (
      <div className="flex flex-1 flex-col justify-center items-center p-5">
         <div className="text-3xl font-bold my-10">
            Welcome to Cote
         </div>

         <div className="flex flex-col gap-5">
            <div className="flex gap-3 bg-zinc-700 rounded-lg w-full p-4 hover:cursor-text">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} color="#9ca3af">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
               </svg>
               <input className="w-full bg-transparent outline-none" placeholder="Search..." />
            </div>

            <div className="flex gap-5">
               <div className="bg-zinc-700 flex min-w-[250px] justify-center items-center rounded-md p-5">
                  <div className="text-gray-400">No recently note</div>
               </div>

               <QuickMenu />
            </div>

         </div>
      </div>
   );
}
