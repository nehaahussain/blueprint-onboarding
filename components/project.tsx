import React from 'react';
import { FiHeart as HeartIcon } from 'react-icons/fi';
import { GoPaperAirplane as ShareIcon } from 'react-icons/go';
import { LuUserCircle as ProfileIcon } from 'react-icons/lu';
import styles from '@/app/styles.module.css';
import '../assets/global.css';

interface DateItemProps {
  date: string;
}
const DateItem = (props: DateItemProps) => {
  return (
    <div className={styles.date}>
      <div>{props.date}</div>
    </div>
  );
};

interface PostItemProps {
  likes: string;
}

const PostItem = (props: PostItemProps) => {
  return (
    <div className={styles.post}>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <HeartIcon size={24} />
        <p style={{ marginLeft: '8px' }}>{props.likes}</p>
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
      <div style={{ display: 'flex', alignItems: 'center', width: '80%' }}>
        <ProfileIcon size={24} />
        <p style={{ marginLeft: '8px' }}>{props.username}</p>
      </div>
      <div className={styles.dateItem}>
        <DateItem date={props.date} />
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
      <p style={{ marginLeft: '9%' }}>{props.comment}</p>
    </div>
  );
};

export { PostItem, CommentItem, ProfileItem, DateItem };
