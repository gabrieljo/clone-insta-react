import Post from "./Post"

const DATA = [
    {
        id: 1,
        username: 'hello_world',
        userImage:'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: "Subscribe and destory the like button"
    },
    {
        id: 2,
        username: 'hello_world',
        userImage:'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: "Subscribe and destory the like button"
    },
    {
        id: 3,
        username: 'hello_world',
        userImage:'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: "Subscribe and destory the like button"
    }
]

function Posts() {
    return (
        <div>
            {
                DATA.map(post => <Post
                        key={post.id}
                        id={post.id}
                        username={post.username}
                        userImg={post.userImage}
                        img={post.img}
                        caption={post.caption}/>)
            }
            <Post />
        </div>
    )
}

export default Posts
