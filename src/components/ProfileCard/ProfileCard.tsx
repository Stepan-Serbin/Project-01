import styles from './ProfileCard.module.css';

type ProfileCardProps = {
  avatar: string;
  name: string;
  description: string;
};

const ProfileCard = ({ avatar, name, description }: ProfileCardProps) => {
  return (
    <div className={styles.profileCard}>
      <img
        src={avatar}
        alt="User avatar"
        className={styles.avatar}
      />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ProfileCard;


// 2ой вариант:

// import type { FC } from "react";

// interface Props {
//   avatar: string;
//   name: string;
//   description: string;
// }

// const ProfileCard: FC<Props> = (props) => {
//   const { avatar, name, description } = props;
//   return <div>ProfileCard</div>;
// };

// export default ProfileCard;
