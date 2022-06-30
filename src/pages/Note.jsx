import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `
# h1
## h2
### h3

A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

`

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

            <article className="my-10 text-lg font-medium leading-8">
               <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
            </article>

         </div>

      </div>
   )
}
