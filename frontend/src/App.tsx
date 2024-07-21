import Home from "./pages/Home";
import About from "./pages/About";
import { useContext } from "react";
import Search from "./pages/Search";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import Layout from "./layouts/Layout";
import DashboardLayout from "./layouts/DashboardLayout";
import Register from "./pages/Register";
import MyResources from "./pages/MyResources";
import Dashboard from "./pages/Dashboard";
import VerifyEmail from "./pages/VerifyEmail";
import AddResource from "./pages/AddResource";
import HeroLayout from "./layouts/HeroLayout";
import EditResource from "./pages/EditResource";
import ViewResource from "./pages/ViewResource";
import ResetPassword from "./pages/ResetPassword";
import { AppContext } from "./contexts/AppContext";
import ForgotPassword from "./pages/ForgotPassword";
import MyReservations from "./pages/MyReservations";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

const App = () => {
	const { isLoggedIn } = useContext(AppContext);
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={isLoggedIn ? <Navigate to="/dashboard" /> :
						<HeroLayout>
							<Home />
						</HeroLayout>
					}
				/>
				<Route
                    path="/search"
                    element={
                        <HeroLayout>
                            <Search />
                        </HeroLayout>
                    }
                />
				<Route
					path="/resource/:resourceId"
					element={
						<Layout>
							<ViewResource />
						</Layout>
					}
				/>
				<Route
					path="/about"
					element={
						<Layout>
							<About />
						</Layout>
					}
				/>
				<Route
					path="/sign-in"
					element={isLoggedIn ? <Navigate to="/dashboard" /> :
						<Layout>
							<SignIn />
						</Layout>
					}
				/>
				<Route
					path="/register"
					element={isLoggedIn ? <Navigate to="/dashboard" /> :
						<Layout>
							<Register />
						</Layout>
					}
				/>
				<Route
					path="/email/verify/:verificationToken"
					element={
						<Layout>
							<VerifyEmail />
						</Layout>
					}
				/>
				<Route
					path="/password/forgot"
					element={isLoggedIn ? <Navigate to="/dashboard" /> :
						<Layout>
							<ForgotPassword />
						</Layout>
					}
				/>
				<Route
					path="/password/reset/:resetToken"
					element={
						<Layout>
							<ResetPassword />
						</Layout>
					}
				/>
				{isLoggedIn && (
					<>
						<Route
							path="/dashboard"
							element={
								<DashboardLayout>
									<Dashboard />
								</DashboardLayout>
							}
						/>
						<Route
							path="/profile"
							element={
								<Layout>
									<Profile />
								</Layout>
							}
						/>
						<Route
							path="/my-reservations"
							element={
								<Layout>
									<MyReservations />
								</Layout>
							}
						/>
						<Route
							path="/my-resources"
							element={
								<Layout>
									<MyResources />
								</Layout>
							}
						/>
						<Route
							path="/my-resources/add"
							element={
								<Layout>
									<AddResource />
								</Layout>
							}
						/>
						<Route
							path="/my-resources/:resourceId"
							element={
								<Layout>
									<EditResource />
								</Layout>
							}
						/>
					</>
				)}
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</Router>
	);
};

export default App;
