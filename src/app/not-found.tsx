import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-6">
            <div className="text-center">
                <div className="text-8xl md:text-9xl font-bold bg-linear-to-r from-white to-neutral-500 bg-clip-text text-transparent">
                    404
                </div>

                <h1 className="mt-4 text-3xl font-bold text-white">
                    Lost in the Dark
                </h1>

                <p className="mt-4 text-neutral-400 max-w-md mx-auto">
                    The page you are trying to access cannot be found.
                </p>

                <Link
                    href="/"
                    className="inline-block mt-8 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition-transform"
                >
                    Return Home
                </Link>
            </div>
        </div>
    );
}