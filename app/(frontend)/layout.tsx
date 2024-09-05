import "@styles/globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";
import "react-toastify/dist/ReactToastify.css";
import "@styles/carousel.css";
import clsx from "clsx";
import type { Metadata } from "next";
import type { Viewport } from "next";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "@styles/carousel.css";
import { Flip, ToastContainer } from "react-toastify";
import { Providers } from "../providers";

export const metadata: Metadata = {
	title: {
		default: "RMIT Vietnam FinTech Club",
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/ft_logo.png",
		shortcut:
			"https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/ft_logo.png",
		apple: "https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/ft_logo.png",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
		{ media: "(prefers-color-scheme: tokyo)", color: "red" },
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html className="overflow-x-hidden" lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased overflow-x-hidden",
					fontSans.className,
				)}
			>
				<Providers
					themeProps={{ attribute: "class", defaultTheme: "light" }}
				>
					<ToastContainer
						position="top-center"
						autoClose={3000}
						hideProgressBar
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme="light"
						transition={Flip}
					/>
					<div className="relative flex flex-col h-screen">
						{<Navbar />}
						<main className="flex-grow overflow-x-clip">
							{children}
						</main>
						{<Footer />}
					</div>
				</Providers>
			</body>
		</html>
	);
}
