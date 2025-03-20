import ManageUsers from "@/components/modules/Admin/users";
import { getAllUsers } from "@/services/auth";

const AllUserPage = async () => {
  const { data } = await getAllUsers();
  return (
    <div>
      <ManageUsers products={data} />
    </div>
  );
};

export default AllUserPage;
