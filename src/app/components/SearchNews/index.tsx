'use client'
import fake from './../../assets/fake.jpg'
import fato from '../../assets/fato.png'
import searchIcon from '../../assets/search.png'
import Image from 'next/image'
import { useState } from 'react'


interface SearchNewsProps {
  title: string,
  analysis: string,
  status: string,
}

export const SearchNews = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<SearchNewsProps>({
    title: '',
    analysis: '',
    status: 'FALSO'
  });
  const [loading, setLoading] = useState(true);

  const checkNews = async (e: any) => {
    setLoading(true);

    e.preventDefault();
    const res = await fetch('/api/verify-news', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ titleOrUrl: input })
    });

    const data = await res.json();

    setResult(data);

    setLoading(false);
  };

  return (
    <div className="w-full flex flex-col">
      <form className="w-full h-[260px] flex flex-col gap-4 items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 p-4 md:p-0">
        <h3 className="text-white md:text-2xl font-bold">Faça uma busca da noticia que deseja checar</h3>
        <div className="relative w-full md:w-[700px]">
          <input
            placeholder="Buscar..."
            type="text"
            className="w-full md:w-[700px] h-14 rounded-xl border border-black px-8 bg-white outline-none text-black"
            onChange={(e) => {
              setLoading(true);
              setInput(e.target.value)
              setResult({
                title: '',
                analysis: '',
                status: ''
              })
            }}
            value={input}
          />
          <button className="absolute right-6 top-4" type="submit" onClick={(e) => checkNews(e)} >
            <Image src={searchIcon} alt="Search" width={20} height={20} />
          </button>
        </div>
      </form>
      <div className="w-full flex items-center justify-center mb-12 p-4 md:p-0" id="searchNews">
        <span className="w-full max-w-[1000px] flex flex-col md:flex-row gap-8 md:gap-0 rounded-xl shadow-xl p-12">
          <div className='w-full h-full'>
            <Image src={result.status === "FALSA" ? fake : fato} alt="Search" width={350} height={360} />
          </div>
          <div className="w-full h-full flex items-center justify-center flex-col gap-8">
            {loading ? <p className='font-bold text-black'>Aguardando análise...</p> :
              <>
                <h3 className='text-xl md:text-3xl font-bold text-black text-center'>{result?.title}</h3>
                <p className='text-sm md:text-base font-bold text-black '>{result.analysis}</p>
              </>
            }
          </div>
        </span>
      </div>
    </div>
  )
}