'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link'; // Import Link component
import { useParams } from 'next/navigation';
import { Comment, Post } from '@/app/page';
import styles from '@/app/styles.module.css';
import { CommentItem, PostItem, ProfileItem } from '@/components/project';
import supabase from '@/supabase/client';

export default function PostDetails() {
  const { uuid } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[] | null>(null);

  async function fetchPostAndComments() {
    const { data: postData } = await supabase
      .from('posts')
      .select('*')
      .eq('uuid', uuid)
      .single();

    const { data: commentsData } = await supabase
      .from('comments')
      .select('*')
      .eq('post_uuid', uuid);

    if (postData) {
      postData.created_at = new Date(postData.created_at).toLocaleDateString();
      setPost(postData);
    }

    if (commentsData) {
      commentsData.forEach(comment => {
        comment.created_at = new Date(comment.created_at).toLocaleDateString();
      });
      setComments(commentsData);
    }
  }

  useEffect(() => {
    fetchPostAndComments();
  }, [uuid]);

  if (!post) return <p>Loading post details...</p>;

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <Link href="/" className={styles.button}>
          ←{' '}
        </Link>

        <div className={styles.postSection}>
          <ProfileItem username={post.username} date={post.created_at} />
          <div className={styles.text}>
            <p>{post.description}</p>
          </div>
          <div className={styles.image}>
            <img
              src={post.image_url}
              width={500}
              height={500}
              alt="Post image"
            />
          </div>
          <PostItem likes={`${post.like_count} Likes`} />
        </div>

        <hr className={styles.line} />
        <div className={styles.commentSection}>
          {comments?.map(comment => (
            <CommentItem
              key={comment.uuid}
              username={comment.username}
              date={comment.created_at}
              comment={comment.comment}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
