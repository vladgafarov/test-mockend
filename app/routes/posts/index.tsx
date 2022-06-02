import type { LoaderFunction } from "@remix-run/node"
import { json } from "@remix-run/node"
import { useLoaderData, useSearchParams } from "@remix-run/react"
import { useMemo } from "react"
import PostCard from "~/components/PostCard"
import type { Post } from "~/interfaces/Post"
import { getPosts } from "~/models/post.server"

export const loader: LoaderFunction = async ({ request }) => {
	const url = new URL(request.url)
	const page = url.searchParams.get("page") ?? 1

	const posts = await getPosts({
		limit: 2,
		offset: (Number(page) - 1) * 2,
	})
	return json<Post[]>(posts)
}

export default function Posts() {
	const posts = useLoaderData<Post[]>()

	const [searchParams, setSearchParams] = useSearchParams()

	const page = Number(
		useMemo(() => searchParams.get("page") ?? 1, [searchParams]),
	)

	return (
		<div>
			<h1>Posts</h1>

			{posts.map((post) => (
				<PostCard key={post.id} post={post} />
			))}

			<div className="mt-8 flex items-center justify-center space-x-4">
				<button
					onClick={() => setSearchParams({ page: String(page - 1) })}
					disabled={page <= 1}
					className="disabled:opacity-60 disabled:cursor-not-allowed border-2 border-slate-300 rounded px-3 py-2"
				>
					Prev
				</button>
				<button
					onClick={() => setSearchParams({ page: String(page + 1) })}
					disabled={page === 25}
					className="disabled:opacity-60 disabled:cursor-not-allowed border-2 border-slate-300 rounded px-3 py-2"
				>
					Next
				</button>
			</div>
		</div>
	)
}
