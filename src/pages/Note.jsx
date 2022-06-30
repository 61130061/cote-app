import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function Note () {
   return (
      <div className="flex flex-col flex-1 p-5">
         {/* Navigation bar */}
         <div className="flex justify-between text-sm mb-10">
            <div className="flex gap-3 items-center font-bold">
               <div className="flex gap-3 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                     <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                  <div className="hover:underline hover:cursor-pointer underline-offset-4">My Folder</div>
               </div>
               <div className="text-zinc-400">/</div>
               <div>Untitle note</div>
            </div>

            <div>
               <div>3 dots menu</div>
            </div>
         </div>

         <div className="self-center md:w-[600px]">
            <div>
               <div className="text-4xl font-bold my-5">Untitled note</div>
               <div className="text-gray-400 font-bold">discription...</div>
            </div>

            <div className="my-10 text-lg font-medium leading-8">
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>

         </div>

      </div>
   )
}
