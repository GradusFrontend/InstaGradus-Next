import Image from "next/image";
import History from "./components/History";
import "./globals.css";
import Post from "./components/Post";

export default function Home() {
    return (
        <div className="wrap mt-5 w-[95%] max-w-[1240px] mx-auto my-0 flex gap-4 mb-20">
            <main className="w-[800px]">
                <section className="p-4 border-2 w-full border-[#c4c4c4] flex gap-4 flex-nowrap overflow-x-scroll no-scrollbar">
                    {
                        <>
                            <History title='name' />
                            <History title='name' />
                            <History title='name' />
                            <History title='name' />
                            <History title='name' />
                            <History title='name' />
                            <History title='name' />
                            <History title='name' />
                            <History title='name' />
                            <History title='name' />
                            <History title='name' />
                            <History title='name' />
                            <History title='name' />
                            <History title='name' />
                            <History title='name' />
                            <History title='name' />
                            <History title='name' />
                            <History title='name' />
                        </>
                    }
                </section>

                <section className="mt-10">
                    <Post image="https://images.unsplash.com/photo-1716112054546-3027ad687a62?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" postId={6} username="Patrick" />
                </section>
            </main>
            <aside>
                <h1>Aside</h1>
            </aside>
        </div>
    );
}
