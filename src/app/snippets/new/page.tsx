import { db } from "@/db";
import { redirect } from "next/navigation";

export default function SnippetCreate() {

    async function createSnippet(formData: FormData) {
// сервер экшн
"use server";
// взять данные с формы и провалидировать
const title = formData.get('title') as string;
const code = formData.get('code') as string;
// создать записи в базе данныч
 const snippet = await db.spippet.create ({
    data:{
         title,
         code
    }
 })

 console.log(snippet);
// riderect на главную страницу
redirect ("/");

    }
  return (
<form action={createSnippet}>
    <h1>Cteate a snippet</h1>
    <div className="flex flex-col gap-4">
        <div className="flex gap-4">
            <label htmlFor="title" className="w-12">Title:</label>
            <input id="title" className="border w-full p-2 rounded" name ='title' type="text" />
        </div>
    </div>
    <div className="flex flex-col gap-4">
        <div className="flex gap-4">
            <label htmlFor="code" className="w-12">Code:</label>
            <textarea id="code" className="border w-full p-2 rounded" name ='code'  />
        </div>
    </div>
    <button className="rounded bg-blue-200 p-2" type="submit">Save</button>
</form>
  );
}
