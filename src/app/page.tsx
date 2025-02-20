import Avatar from "@/components/Avatar";

export default function Home() {
    return (
        <div className="flex flex-col h-screen w-screen justify-center items-center p-4">
            <div className="flex flex-col md:flex-row w-full md:w-3/5 h-auto md:h-2/3 border border-gray-700 rounded-xl">
                <div className="flex flex-col w-full md:w-2/3 h-full">
                    <div className="flex flex-col rounded-xl h-full md:h-4/5 w-full md:w-4/5 m-4 md:m-10 p-4 animate-fadeIn justify-evenly">
                        <span className="text-4xl sm:text-5xl md:text-8xl text-gray mb-3 text-center md:text-left">
                            Celil Akdemir
                        </span>
                        <div className="flex flex-col space-y-4">
                            <span className="text-2xl sm:text-3xl md:text-4xl my-auto mx-4 md:mx-10 transition duration-300 text-gray-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                                <a href="/resume"> &gt; Resume</a>
                            </span>
                            <span className="text-2xl sm:text-3xl md:text-4xl my-auto mx-4 md:mx-10 transition duration-300 text-gray-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                                <a href="/blog"> &gt; Blog</a>
                            </span>
                            <span className="text-2xl sm:text-3xl md:text-4xl my-auto mx-4 md:mx-10 transition duration-300 text-gray-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                                <a href="/contact"> &gt; Contact</a>
                            </span>
                            <span className="text-2xl sm:text-3xl md:text-4xl my-auto mx-4 md:mx-10 transition duration-300 text-gray-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                                <a href="https://www.linkedin.com/in/celil-akdemir-568433258/" target="_blank" rel="noopener noreferrer"> &gt; Linkedin</a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full md:w-1/3 h-full items-center md:items-end p-4">
                    <Avatar />
                </div>
            </div>
        </div>
    );
}
