import Private from '../../components/auth/Private';
import UserDashLayout from "../../components/UserDashLayout"

const UserIndex = () => {
  return (

    <Private>
      <UserDashLayout>
        <h2 style={{color:"var(--text-color)", paddingTop:"7px"}}>Welcome To User's DashBoard</h2>
        <div style={{color:"var(--text-color)", paddingTop:"10px"}}>You can now create, update, delete your posts in this section</div>
      </UserDashLayout>
    </Private>

  );
};

export default UserIndex;