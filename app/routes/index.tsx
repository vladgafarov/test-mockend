import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import PostCard from "~/components/PostCard"
import type { Post } from "~/interfaces/Post"
import { getPosts } from "~/models/post.server"

export async function loader() {
	const posts = await getPosts({
		limit: 3,
	})
	return json(posts)
}

export default function Index() {
	const posts = useLoaderData() as Post[]

	return (
		<main>
			{posts.map((post) => (
				<PostCard key={post.id} post={post} />
			))}
		</main>
	)
}
