'use client'

import { FileInput } from "@/components/FileInput";
import { Footer } from "@/components/Footer";
import { Logotipo } from "@/components/Logotipo";

export default function Home() {
  return (
    <div className='flex flex-col w-full h-screen items-center justify-between bg-[url("../../public/background.svg")] bg-no-repeat bg-cover gap-10'>
      <Logotipo/>

      <div className="flex flex-col lg:flex-row w-full justify-evenly items-center gap-5 lg:gap-0">
        <FileInput/>
      </div>

      <Footer/>
    </div>
  )
}
