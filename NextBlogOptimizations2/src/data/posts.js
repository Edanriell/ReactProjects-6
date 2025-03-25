import "server-only";
import { Post } from "@/db/models";

export async function createPost(userId, { title, contents }) {
	const post = new Post({ author: userId, title, contents });
	return await post.save();
}

export async function listAllPosts() {
	try {
		// First, filter posts with valid ObjectId authors using MongoDB's $expr and $objectToArray
		return await Post.find({
			$expr: {
				$eq: [{ $type: "$author" }, "objectId"]
			}
		})
			.sort({ createdAt: "descending" })
			.populate("author", "username")
			.lean();
	} catch (error) {
		console.error("Failed to fetch posts:", error);
		return []; // Return empty array as fallback
	}
}

export async function getPostById(postId) {
	try {
		return await Post.findById(postId).populate("author", "username").lean();
	} catch (error) {
		console.error(`Failed to fetch post with ID ${postId}:`, error);
		return null;
	}
}
