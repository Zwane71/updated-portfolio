import { Outfit, Ovo } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const outfit = Outfit({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
	subsets: ["latin"],
	weight: ["400"],
});

export const metadata = {
	title: "Themba Makhohlisa | MakZwane71",
	description: "Full Stack Developer | Frontend Developer| UI/UX Designer",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en' className="scroll-smooth  ">
			<body className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
