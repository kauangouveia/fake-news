'use client'
import fake from '@/assets/fake.jpg'
import fato from '@/assets/Fato.png'
import searchIcon from '@/assets/search.png'
import Image from 'next/image'
import { useState } from 'react'
import { ButtonPrimary } from '../UI/ButtonPrimary'
import check from '@/assets/checklist.png';
import incorrect from '@/assets/incorrect.png';
import { Loading } from '../Loading'


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
    status: ''
  });
  const [loading, setLoading] = useState(false);

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
    <>
      <div className="w-full max-w-[1980px] h-[480px] flex items-center justify-center p-4 md:p-0">
        <form className="w-full max-w-[1000px] h-72 rounded-3xl bg-white flex flex-col items-center justify-center -mt-4 p-4 md:p-0">
          <h2 className="font-bold text-black text-2xl md:text-3xl">Faça sua busca</h2>
          <div className="relative w-full h-12 max-w-[700px] mt-6">
            <input
              placeholder="Buscar..."
              className="w-full h-full pr-1 py-1 pl-6 rounded-full border border-primary text-gray-400"
              type="text"
              onChange={(e) => {
                setInput(e.target.value)
                setResult({
                  title: '',
                  analysis: '',
                  status: ''
                })
              }}
              value={input}
            />
            <button className="absolute flex items-center justify-center rounded-full bg-primary w-28 bottom-1 top-1 right-1 hover:opacity-90" type="submit" onClick={(e) => checkNews(e)}>
              <Image src={searchIcon} alt="Search" width={22} height={21} />
            </button>
          </div>
        </form>
      </div>



      {loading ? <Loading /> : result.analysis !== "" ?

        <div className="w-full min-h-[300px] flex  items-center justify-center">
          <div className="w-full max-w-[1980px] h-full flex flex-col md:flex-row items-center justify-center gap-4 p-8 md:p-20">
            <div className='w-full max-w-[600px] h-full flex items-center justify-center'>
              <Image
                src={result.status === "FALSA" ? incorrect : check}
                alt={result.status === "FALSA" ? "incorrect" : "check"}
                className="w-60 h-w-60 object-cover rounded-2xl"
                height={200}
                width={200}
              />
            </div>

            <span className="max-w-[600px] w-full h-full flex flex-col gap-8">
              <h2 className="font-bold text-2xl text-white">{result.title}</h2>
              <p className="text-base text-white">{result.analysis}</p>
              <ButtonPrimary title='Veja' />
            </span>
          </div>
        </div>
        :
        <></>
      }
    </>
  )
}