import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SocketIOContextProvider } from "./contexts/SocketIOContext.jsx";
import { Chat } from "./pages/Chat.jsx";
import { Signup } from "./pages/Signup.jsx";
import { Login } from "./pages/Login.jsx";
import { AuthContextProvider } from "./contexts/AuthContext.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
	{
		path: "/",
		element: <Chat />
	},
	{
		path: "/signup",
		element: <Signup />
	},
	{
		path: "/login",
		element: <Login />
	}
]);

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthContextProvider>
				<SocketIOContextProvider>
					<RouterProvider router={router} />
				</SocketIOContextProvider>
			</AuthContextProvider>
		</QueryClientProvider>
	);
}
