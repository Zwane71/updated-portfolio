"use client";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import Services from "@/components/services/Services";
import Work from "@/components/work/Work";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<Navbar />
			<Header />
			<About />
			<Services />
			<Work />
			<Contact/>
		</>
	);
}
