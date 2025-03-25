import { queryResolver, querySchema } from "./query.js";
import { postResolver, postSchema } from "./post.js";
import { userResolver, userSchema } from "./user.js";
import { mutationResolver, mutationSchema } from "./mutation.js";

export const typeDefs = [querySchema, postSchema, userSchema, mutationSchema];
export const resolvers = [queryResolver, postResolver, userResolver, mutationResolver];
