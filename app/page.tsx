import Link from 'next/link';
import ProductCard from './components/ProductCard';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <p>Hello {session && <span>{session.user!.name}</span>}</p>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
