import React from 'react';
import { FiHeart as HeartIcon } from 'react-icons/fi';
import { GoPaperAirplane as ShareIcon } from 'react-icons/go';
import { LuUserCircle as ProfileIcon } from 'react-icons/lu';
import styles from '@/app/styles.module.css';
import '../assets/global.css';

interface PostItemProps {
  likes: string;
}

const PostItem = (props: PostItemProps) => {
  return (
    <div className={styles.post}>
      <div className={styles.postInner}>
        <HeartIcon size={24} />
        <p className={styles.likesText}>{props.likes}</p>
      </div>
      <ShareIcon size={24} />
    </div>
  );
};

interface ProfileItemProps {
  username: string;
  date: string;
}
const ProfileItem = (props: ProfileItemProps) => {
  return (
    <div className={styles.profile}>
      <div className={styles.profileInner}>
        <ProfileIcon size={24} />
        <p className={styles.username}>{props.username}</p>
      </div>
      <div className={styles.date}>
        <p>{props.date}</p>
      </div>
    </div>
  );
};

interface CommentItemProps {
  username: string;
  date: string;
  comment: string;
}
const CommentItem = (props: CommentItemProps) => {
  return (
    <div className={styles.comment}>
      <ProfileItem username={props.username} date={props.date} />
      <p className={styles.commentText}>{props.comment}</p>
    </div>
  );
};

export { PostItem, CommentItem, ProfileItem };
