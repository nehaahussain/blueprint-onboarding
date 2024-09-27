import { FiHeart as HeartIcon } from 'react-icons/fi';
import { GoPaperAirplane as ShareIcon } from 'react-icons/go';
import { LuUserCircle as ProfileIcon } from 'react-icons/lu';
import styles from './styles.module.css';
import '../assets/global.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <ProfileIcon size={24} />
        <p>rbeggs</p>
        <p>September 19</p>
        <p>
          In response to the growing homelessness crisis in San Francisco, a
          local nonprofit organization, Code Tenderloin, has launched a
          comprehensive initiative aimed at providing long-term solutions for
          individuals experiencing homelessness. The organization, founded in
          2015, is dedicated to addressing both immediate needs and underlying
          causes of homelessness through a combination of shelter services, job
          training programs, and mental health support. Read more online:
          https://www.codetenderloin.org/
        </p>

        <p>
          Image Link:
          https://cdn.britannica.com/51/178051-050-3B786A55/San-Francisco.jpg
        </p>

        <HeartIcon size={24} />
        <p>256 Likes</p>
        <ShareIcon size={24} />

        <ProfileIcon size={24} />
        <p>daviddd</p>
        <p>September 20</p>
        <p>
          This organization is doing amazing work tackling the complex root
          causes of the issue.
        </p>

        <ProfileIcon size={24} />
        <p>vppraggie</p>
        <p>September 21</p>
        <p>Thanks for sharing!</p>
      </div>
    </main>
  );
}
