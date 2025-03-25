import { PostList } from "@/components/PostList";

export default function HomePage() {
	const posts = [{ _id: "123", title: "Hello Next.js", author: { username: "Lauris" } }];

	return <PostList posts={posts} />;
}
