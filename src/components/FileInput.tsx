import Image from "next/image"
import { useState } from "react"

export function FileInput(){
    const [image, setImage] = useState('')

    return(
        <>
        <div className="flex items-center justify-center">
            <label className="flex flex-col items-center justify-center w-full h-40 lg:h-64 border-2 border-[#00E3F0] rounded-lg cursor-pointer bg-gray-50 hover:opacity-80 transition-opacity p-5 lg:p-10">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Clique para selecionar</span> ou arraste aqui</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">PNG (MAX. 256x256px)</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" onChange={e => setImage(e.target.value)} />
            </label>
        </div> 

        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-center lg:items-start gap-2">
            <p className="text-[#0078F0] font-semibold text-2xl">Resultado:</p>
            <p className="text-2xl">-</p>
          </div>
          
          <button 
            className="w-48 text-2xl font-semibold bg-gradient-to-r from-[#0078F0] to-[#00E3F0] text-white rounded-lg px-5 py-4 hover:opacity-70 transition-opacity"
          >
            ANALISAR
          </button>
        </div>
        </>
    )
}