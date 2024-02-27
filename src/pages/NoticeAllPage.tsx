import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './NoticeAllPage.module.css';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function NoticeAllPage() {
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    axios.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      setPosts(res.data);
    });
  }, []);

  if (!posts?.length) return <div>로딩중</div>;

  return (
    <div>
      <p>TODO</p>
      {posts.map((post, i) => {
        return (
          <div key={i} className={styles.container}>
            <Link to={`/notice/${post.id}`}>
              <p>{post.title}</p>
            </Link>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}
