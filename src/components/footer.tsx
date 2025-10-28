import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="bg-black py-8 px-4 md:px-8 border-t border-gray-800">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
            <div className="space-y-2">
                <Link to="#" className="text-3xl font-extrabold text-white tracking-wider">
                    SynEdge <span className="text-primary">BD</span>
                </Link>
                <p className="text-sm text-gray-500">
                    Web · SEO · Marketing · Creative
                </p>
            </div>
            <p className="text-sm text-gray-500">
                &copy; 2025 SynEdge BD. All rights reserved.
            </p>
        </div>
    </footer>
  )
}
