import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside>
      <h2>NexTrace</h2>
      <nav>
        <Link href="/">Dashboard</Link>
        <Link href="/alerts">Alertas</Link>
      </nav>
    </aside>
  );
}