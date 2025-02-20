export default function Avatar() {
    return (<>
        <div className="flex flex-row h-96">
            <div className=" flex flex-row h-full p-10">
                <div className="md:w-64 md:h-64 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-2xl animate-upDown ">
                    <img src="/profil-pic.jpg" alt="Yuvarlak Fotoğraf"
                         className=" object-fit w-auto h-auto animate-fadeIn"/>
                </div>
            </div>
        </div>
    </>)
}

