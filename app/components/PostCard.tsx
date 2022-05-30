import { Link } from "@remix-run/react"
import type { Post } from "~/interfaces/Post"

const PostCard = ({ post }: { post: Post }) => {
	const createdAt = new Date(post.createdAt).toLocaleDateString()

	return (
		<div className="shadow-xl p-8 space-y-2">
			<h1 className="text-xl font-bold">{post.title}</h1>
			<span className="text-slate-400">{createdAt}</span>
			<br />
			<Link to={`/post/${post.id}`} className="underline">
				Read more
			</Link>
		</div>
	)
}

export default PostCard
