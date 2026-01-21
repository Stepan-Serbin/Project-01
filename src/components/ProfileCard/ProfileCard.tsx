import type { FC } from "react";

interface Props {
  avatar: string;
  name: string;
  description: string;
}

const ProfileCard: FC<Props> = (props) => {
  const { avatar, name, description } = props;
  return (
    <div>
      <h2>{name}</h2>
      <img src={avatar} alt={`avatar of ${name}`} />
      <p>{description}</p>
    </div>
  );
};

export default ProfileCard;
