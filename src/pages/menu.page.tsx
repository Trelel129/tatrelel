import Header from '@/containers/navbar';

export default function Menu() {
  return (
    <div className='flex flex-col min-h-screen bg-white '>
      <Header />
      <h1 className='head_text text-left md:text-center'>Mari Kita Mulai!</h1>
    </div>
  );
}
