'use client'
import check from '@/assets/checklist.png'
import factOrFake from '@/assets/factorfake.jpg'
import incorrect from '@/assets/incorrect.png'
import searchIcon from '@/assets/search.png'
import Image from 'next/image'
import { useState } from 'react'
import { Loading } from '../Loading'
import { ButtonPrimary } from '../UI/ButtonPrimary'

interface SearchNewsProps {
  title: string,
  analysis: string,
  status: string,
}

interface SearchResult {
  Titulos: string;
  Data: string;
  Link: string;
  Site: string;
}

export const SearchNews = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<SearchNewsProps>({
    title: '',
    analysis: '',
    status: ''
  });
  const [loading, setLoading] = useState(false);
  const [searchWithIA, setSearchWithIA] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [limitPage, setLimitPage] = useState(6);

  const checkNews = async (e: any) => {
    e.preventDefault();
    if (!input.trim()) return

    setLoading(true);

    if (!searchWithIA) {
      const res = await fetch(`/api/search?search=${input}&limit=${limitPage}`);
      if (res.ok) {
        const data = await res.json();
        setResults(data.results || []);
      }

      setLoading(false);
      return
    }

    const res = await fetch('/api/verify-news', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ titleOrUrl: input })
    });

    const data = await res.json();
    setResult(data);

    setLoading(false);
  };

  // Função para carregar mais resultados ao clicar no "Ver mais"
  const loadMoreResults = async () => {
    setLimitPage(limitPage + 6);  // Incrementar o limite da página em 6 (ou valor desejado)
    setLoading(true);  // Mostrar o carregando enquanto busca os novos resultados

    if (!searchWithIA) {
      const res = await fetch(`/api/search?search=${input}&limit=${limitPage}`);
      if (res.ok) {
        const data = await res.json();
        setResults(prevResults => [...prevResults, ...(data.results || [])]);
      }
    }

    setLoading(false); // Esconde o carregamento
  };

  return (
    <>
      <div className="w-full max-w-[1980px] h-[320px] flex items-center justify-center p-4 md:p-0" id="search">
        <form className="w-full max-w-[1000px] h-72 rounded-3xl bg-white flex flex-col items-center justify-center -mt-4 p-4 md:p-0">
          <h2 className="font-bold text-black text-2xl md:text-3xl">Faça sua busca</h2>
          <div className="relative w-full h-12 max-w-[700px] mt-6">
            <input
              placeholder="Buscar..."
              className="w-full h-full pr-1 py-1 pl-6 rounded-full border border-primary text-black placeholder:text-gray-400"
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
            <button className="absolute flex items-center justify-center rounded-full bg-primaryDefault w-28 bottom-1 top-1 right-1 hover:opacity-90" type="submit" onClick={(e) => checkNews(e)}>
              <Image src={searchIcon} alt="Search" width={19} height={21} />
            </button>
          </div>

          <label className="w-full max-w-[700px] flex items-center justify-start relative group p-2 text-base font-bold">
            Pesquisar com nossa IA
            <input type="checkbox" className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md" onChange={() => { setSearchWithIA(!searchWithIA) }} />
            <span className="w-10 h-5 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-primaryDefault after:w-3 after:h-3 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-4 group-hover:after:translate-x-1 shadow-md"></span>
          </label>
        </form>
      </div>

      {(loading && !searchWithIA) ? <Loading /> : (results.length > 0 && !searchWithIA) ?
        <div className="w-full min-h-[300px] flex items-center justify-center">
          <div className="w-full max-w-[1980px] h-full flex flex-col items-center justify-center gap-8 p-8 md:p-20">
            <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-16">
              {results.map((item, index) => (
                <a href={item.Link} target="_blank" className="w-[330px] h-[530px] bg-white rounded-md flex flex-col hover:scale-[1.02] transition-all cursor-pointer shadow-lg" key={index}>
                  <div className="w-full bg-white min-h-[250px] rounded-md">
                    <Image
                      src={factOrFake}
                      alt="fato ou fake"
                      className="w-full h-full rounded-md"
                      height={250}
                      width={300}
                    />
                  </div>
                  <div className="w-full h-full flex flex-col gap-4 items-start justify-between p-8">
                    <div className="font-bold text-grey-400 text-xl mb-2">{item.Titulos}</div>
                    <p className="text-slate-800 text-base">{item.Data}</p>
                    <button className="bg-gradient-to-r from-[#77b1e0] to-[#0077ff] ease-in-out duration-300 text-texto-400 font-bold py-2 px-4 rounded">{item.Site}</button>

                  </div>
                </a>
              ))}
            </div>

            <ButtonPrimary title='Ver mais' onClick={loadMoreResults} />
          </div>
        </div>
        :
        <></>
      }

      {(loading && searchWithIA) ? <Loading /> : (result.analysis !== "" && searchWithIA) ?
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
            </span>
          </div>
        </div>
        :
        <></>
      }
    </>
  )
}
