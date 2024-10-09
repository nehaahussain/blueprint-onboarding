import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
import '../assets/global.css';
import { CommentItem, PostItem, ProfileItem } from '@/components/project';

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
          <Image
            src="https://cdn.britannica.com/51/178051-050-3B786A55/San-Francisco.jpg"
            width={500}
            height={500}
            alt="View of a hilly road in San Francisco, California"
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
