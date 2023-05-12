import Private from '../../components/auth/Private';
import UserDashLayout from "../../components/UserDashLayout"

const UserIndex = () => {
  return (

    <Private>
      <UserDashLayout>
        <h2 style={{color:"var(--text-color)"}}>Welcome To User's DashBoard</h2>
        <div style={{color:"var(--text-color)"}}>You can now create, update, delete your posts in this section</div>
      </UserDashLayout>
    </Private>

  );
};

export default UserIndex;