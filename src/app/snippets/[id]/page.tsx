import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import { deleteSnippet } from '@/app/actions'

export default async function SnippetView(props: any) {
  const { id } = props.params;
  const snippet = await db.spippet.findFirst({
    where: {
      id: parseInt(id),
    },
  });

  if (!snippet) {
    return notFound();
  }

const deleteSnippetAction = deleteSnippet.bind(null, parseInt(id));

  return (
    <div>
      <div className="flex m-2 justify-between item-center">
        <h1 className="text-xl font-bold">View Snippet</h1>
        <div>
          <Link
            href={`/snippets/${id}/edit`}
            className="border p2 border-rounded"
          >
            Edit
          </Link>
          <form action={deleteSnippetAction}><button  className="border p2 border-rounded">Delete</button></form>
          
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}
