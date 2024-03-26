import { db } from "@/db";
import  Link  from "next/link"



export default async function Home () {
  const snippets = await db.spippet.findMany();

await new Promise ((r) => setTimeout (r, 2000))

  return(
    <div className="flex gap-2 flex-col">
      <div className="flex m-2 justify-between item-center">
<h1 className="text-xl font-bold">Snippets</h1>
<Link  className="border p2 border-rounded" href='/snippets/new'>New</Link>
          </div>
          {snippets.map(({id, code, title}) => (
      <Link
      className="flex justify-between items-center p-2 border rounded" 
      key={id} href={`snippets/${id}`}>
        <h3>{title}</h3>
      </Link>
    ))}</div>
  )
}






//3 lesson start
// "use client"
// import { useState, useEffect} from "react";


// export default function Home() {
//   const[ isOpen, setIsOpen] = useState(false);
//   useEffect (() => {
// setIsOpen(true)
//   }, [])
//   return (
// <div>
//   {isOpen && (
//     <div>Modal</div>
//   )}
// </div>
//   );
// }
