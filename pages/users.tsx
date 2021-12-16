import { AllUsers } from "../domain/users";
import { useAxios } from "../axios";

export default function UsersPage() {
  const users = useAxios("https://api.nft.mn/nft1003/analytic/users");

  return <AllUsers users={users} />;
}
