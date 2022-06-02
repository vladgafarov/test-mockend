import type { Post } from "~/interfaces/Post"

interface IGetPosts {
	limit?: number
	offset?: number
}

export async function getPosts({
	limit = 100,
	offset = 0,
}: IGetPosts): Promise<Post[]> {
	const res = await fetch(
		`${process.env.BACKEND_URL}/posts?limit=${limit}&offset=${offset}`,
	)
	return await res.json()
}

export async function getPost({ id }: { id: string }) {
	const res = await fetch(`${process.env.BACKEND_URL}/posts/${id}`)
	return await res.json()
}
