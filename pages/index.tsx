// @ts-nocheck
import Head from 'next/head'
import RedirectUser from '@/components/RedirectUser';
import { useSession,signIn } from 'next-auth/react';
import Image from 'next/image';
import imgpath from "../assests/astronaut.svg"





export default  function Home () {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <RedirectUser />
      </>
    );
  }
  return (
    <>
    <div className="flex flex-col lg:flex-row justify-center items-center h-screen">
  <div className="flex flex-col justify-center items-center py-4 px-4 flex-shrink-0 w-full lg:w-1/3 space-y-6 mr-4 lg:mr-0">
    <h1 className="text-4xl font-bold text-center text-white">Welcome to Repositoriz</h1>
    <p className="text-lg text-center text-white">The new way to create,delete,update and view your repositories.</p>
          <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded" style={{ backgroundColor: '#695cce' }}
            onClick={() => signIn()}>Get Started</button>

  </div>

  <div className="flex justify-center items-center flex-shrink-0 w-full lg:w-auto">
    <Image src={imgpath} width={500} height={500} alt="Your SVG Image" />
  </div>
</div>







    </>
  );
  
}
