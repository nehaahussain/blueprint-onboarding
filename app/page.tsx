import React from 'react';
import { FiHeart as HeartIcon } from 'react-icons/fi';
import { GoPaperAirplane as ShareIcon } from 'react-icons/go';
import { LuUserCircle as ProfileIcon } from 'react-icons/lu';
import styles from './styles.module.css';
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

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <ProfileItem username="rbeggs" date="September 19" />
        <div className={styles.text}>
          <p>
            In response to the growing homelessness crisis in San Francisco, a
            local nonprofit organization, Code Tenderloin, has launched a
            comprehensive initiative aimed at providing long-term solutions for
            individuals experiencing homelessness. The organization, founded in
            2015, is dedicated to addressing both immediate needs and underlying
            causes of homelessness through a combination of shelter services,
            job training programs, and mental health support. Read more online:
            <a href="https://www.codetenderloin.org/">
              {' '}
              https://www.codetenderloin.org/
            </a>
          </p>
        </div>
        <div className={styles.image}>
          <img
            src="https://cdn.britannica.com/51/178051-050-3B786A55/San-Francisco.jpg"
            alt=""
          />
        </div>

        <PostItem likes="256 Likes" />

        <hr className={styles.line} />

        <CommentItem
          username="daviddd"
          date="September 20"
          comment="This organization is doing amazing work tackling the complex root causes of the issue."
        />

        <CommentItem
          username="vppraggie"
          date="September 21"
          comment="Thanks for sharing!"
        />
      </div>
    </main>
  );
}
