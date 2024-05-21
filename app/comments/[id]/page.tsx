import axios from "axios";


async function Comments(props: any) {

    let comments = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + props.params.id)

    return (
        <div className="wrap mt-5 w-[95%] max-w-[1240px] mx-auto my-0 flex gap-10 mb-20">
            <main className="w-[800px] mx-auto my-0 mt-5">
                <h1 className="text-2xl text-[#878686]">Comments to post id: {props.params.id}</h1>

                <section className="flex flex-col gap-3 mt-4">
                    {
                        comments.data.map((item: {email: string, body: string}) => (
                            <div className="flex gap-2 border p-3">
                                <span className="font-semibold">{item.email}: </span>
                                <span>{item.body}</span>
                            </div>
                        ))
                    }
                </section>
            </main>
        </div>
    );
}

export default Comments;