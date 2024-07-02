import { currentUser, auth } from "@clerk/nextjs/server";
export default async function Home() {
  const { userId } = auth();
  console.log(userId);
  const user = await currentUser();
  console.log(user);
  return <h1>Clerk Auth</h1>;
}
