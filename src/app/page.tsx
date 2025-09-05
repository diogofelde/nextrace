export default function Home() {
  return (
    <main style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f4f8'
    }}>
      <img
        src="/logonextrace.png"
        alt="Logo NexTrace"
        style={{ maxWidth: '400px', width: '100%', borderRadius: '12px' }}
      />
    </main>
  );
}