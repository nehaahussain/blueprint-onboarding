'use client';

import React, { useEffect, useState } from 'react';
import supabase from '@/supabase/client';
import styles from './styles.module.css';
import '../assets/global.css';
import { PostItem, ProfileItem } from '@/components/project';

export interface Post {
  description: string;
  like_count: number;
  username: string;
  created_at: string;
  image_url: string;
}

export default function Home() {
  const [postData, setPostData] = useState<Post[] | null>(null);
  async function fetchPostData() {
    const { data, error } = await supabase.from('posts').select('*');

    if (error) {
      console.error('Error fetching post:', error);
      return null;
    }

    const formattedPosts = data.map((post: Post) => ({
      description: post.description,
      like_count: post.like_count,
      username: post.username,
      created_at: new Date(post.created_at).toLocaleDateString(), // Formatting date
      image_url: post.image_url,
    })) as Post[];

    return formattedPosts;
  }

  useEffect(() => {
    async function fetchData() {
      const fetchedPost = await fetchPostData();
      setPostData(fetchedPost);
    }
    fetchData();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        {!postData ? (
          <p>Loading post...</p>
        ) : (
          postData.map((post, index) => (
            <div key={index} className={styles.postSection}>
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
          ))
        )}
      </div>
    </main>
  );
}
