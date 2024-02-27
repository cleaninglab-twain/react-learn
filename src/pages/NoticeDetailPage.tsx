import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Post } from './NoticeAllPage';

export default function NoticeDetailPage() {
  const { noticeId } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${noticeId}`).then((res) => {
      setPost(res.data);
    });
  }, []);

  if (!post) return <div>로딩중</div>;

  return (
    <div>
      <p>TODO</p>
      {JSON.stringify(post)}
    </div>
  );
}
