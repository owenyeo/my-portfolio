import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-font font-medium text-white mb-4 md:mb-0">
                    <Link to="/" className="ml-3 text-xl">
                        Owen Yeo
                    </Link>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link to="/projects" className="mr-5 hover:text-white">
                        Past Work
                    </Link>
                    <Link to="/skills" className="mr-5 hover:text-white">
                        Skills
                    </Link>
                    <Link to="/testimonials" className="mr-5 hover:text-white">
                        Testimonials
                    </Link>
                </nav>
                <Link
                    to="/contact"
                    className="inline-flex items-center bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base mt-4 md:mt-0">
                    Hire Me
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                </Link>
            </div>
        </header>
    )
}