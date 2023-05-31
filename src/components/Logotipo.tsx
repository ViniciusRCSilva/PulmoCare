import Image from "next/image";

import Logo from '../../public/Logotipo.png'

export function Logotipo(){
    return(
        <div className="flex rounded-xl justify-center items-center border-4 border-[#00E3F0] bg-white p-8">
            <Image src={Logo} alt='Logotipo' width={250} className="flex lg:hidden" />
            <Image src={Logo} alt='Logotipo' width={300} className="hidden lg:flex" />
      </div>
    )
}