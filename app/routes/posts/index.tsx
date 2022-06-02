import type { LoaderFunction } from "@remix-run/node"
import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import PostCard from "~/components/PostCard"
import type { Post } from "~/interfaces/Post"
import { getPosts } from "~/models/post.server"

export const loader: LoaderFunction = async () => {
	const posts = await getPosts({
		limit: 2,
		offset: 0,
	})
	return json<Post[]>(posts)
}

export default function Posts() {
	const posts = useLoaderData() as Post[]

	return (
		<div>
			<h1>Posts</h1>

			{posts.map((post) => (
				<PostCard key={post.id} post={post} />
			))}
		</div>
	)
}
