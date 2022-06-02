import type { LoaderFunction } from "@remix-run/node"
import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import type { Post as IPost } from "~/interfaces/Post"
import { getPost } from "~/models/post.server"

export const loader: LoaderFunction = async ({ params }) => {
	const posts = await getPost({
		id: params.post as string,
	})
	return json<IPost>(posts)
}

export default function Post() {
	const post = useLoaderData() as IPost

	return (
		<div>
			<img
				src={post.imageUrl}
				alt="Remix is cool"
				width={300}
				height={200}
			/>
			<h1>{post.title}</h1>
			<p>{post.content}</p>
		</div>
	)
}
