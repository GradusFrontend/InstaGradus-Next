import Image from "next/image";

function History(props: any) {
    return ( 
        <div className="text-center">
            <div className="rounded-full p-1 border-2 border-[#c4c4c4]">
                <div className="rounded-full h-12 w-12 bg-[#c4c4c4]">
                    {/* <Image src={image} alt="history" height={1000} width={1000} className="rounded-full object-cover h-10 w-10" /> */}
                </div>
            </div>

            <span className="mt-4">{props.title}</span>
        </div>
     );
}

export default History;