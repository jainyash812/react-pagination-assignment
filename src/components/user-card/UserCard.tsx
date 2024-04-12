import { IUserDataItem } from "../../features/user/userSlice";
import './UserCard.css';

const UserCard = ({ user }: { user: IUserDataItem }) => {
  return (
    <>
      <div className="user-card-container">
        <img
          src={`${user.avatar}`}
          alt={`${user.first_name}`}
          className="user-card-avatar"
        />
        <h2>{user.first_name}</h2>
        <h2>{user.last_name}</h2>
        <span>{user.email}</span>
      </div>
    </>
  );
};

export default UserCard;
