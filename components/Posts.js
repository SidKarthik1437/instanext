import Post from './Post'

const posts = [
  {
    id: '123',
    username: 'sidkarthik',
    userImg: 'https://imgkub.com/images/2022/03/08/meehehe.jpg',
    img: 'https://imgkub.com/images/2022/03/08/meehehe.jpg',
    caption: 'LETSSS GOOO!!!',
  },
  {
    id: '124',
    username: 'sidkarthik',
    userImg: 'https://imgkub.com/images/2022/03/08/meehehe.jpg',
    img: 'https://imgkub.com/images/2022/03/08/meehehe.jpg',
    caption: 'LETSSS GOOO!!!',
  },
]

export default function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}
