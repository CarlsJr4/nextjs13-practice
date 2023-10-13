import Link from 'next/link';
import ProductCard from './components/ProductCard';

export default function Home() {
  return (
    <main>
      <p>Hello World</p>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
