'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link'; // Import Link here
import supabase from '@/supabase/client';
import styles from './styles.module.css';
import '../assets/global.css';
import { CommentItem, ProfileItem } from '@/components/project';

export interface Post {
  uuid: string;
  description: string;
  like_count: number;
  username: string;
  created_at: string;
  image_url: string;
  firstComment?: Comment;
}

export interface Comment {
  uuid: string;
  username: string;
  comment: string;
  created_at: string;
}

export default function Feed() {
  const [postData, setPostData] = useState<Post[] | null>(null);

  async function fetchPostData() {
    const { data, error } = await supabase.from('posts').select('*');
    if (error) {
      console.error('Error fetching posts:', error);
      return null;
    }

    const formattedPosts = await Promise.all(
      data.map(async (post: Post) => {
        const { data: commentsData } = await supabase
          .from('comments')
          .select('*')
          .eq('post_uuid', post.uuid)
          .limit(1)
          .single();

        return {
          description: post.description,
          like_count: post.like_count,
          username: post.username,
          created_at: new Date(post.created_at).toLocaleDateString(),
          image_url: post.image_url,
          uuid: post.uuid,
          firstComment: commentsData
            ? {
                uuid: commentsData.uuid,
                username: commentsData.username,
                comment: commentsData.comment,
                created_at: new Date(
                  commentsData.created_at,
                ).toLocaleDateString(),
              }
            : null, // Add first comment if exists
        } as Post;
      }),
    );

    return formattedPosts;
  }

  useEffect(() => {
    async function fetchData() {
      const fetchedPosts = await fetchPostData();
      setPostData(fetchedPosts);
    }
    fetchData();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        {!postData ? (
          <p>Loading posts...</p>
        ) : (
          postData.map(post => (
            <Link
              key={post.uuid}
              className={styles.noUnderline}
              href={`/post/${post.uuid}`}
              passHref
            >
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
                <div className={styles.activity}>
                  <p>View Activity</p>
                </div>
                <hr className={styles.line} />

                {post.firstComment && (
                  <CommentItem
                    key={post.firstComment.uuid}
                    username={post.firstComment.username}
                    date={post.firstComment.created_at}
                    comment={post.firstComment.comment}
                  />
                )}
                <div className={styles.activity}>
                  <p>View Activity</p>
                </div>
                <hr className={styles.line} />
              </div>
            </Link>
          ))
        )}
      </div>
    </main>
  );
}
