import ArrowIcon from '../UI/Arrow'

export const Header = () => {
  return (
    <header className="flex w-full h-20 bg-[#1C1C1C]  items-center justify-center border-b border-gray-50 md:px-14">
      <div className="flex max-w-[1980px] w-full h-full md:gap-4 items-center justify-center md:justify-between py-4">
        <div className="hidden md:flex w-28 h-full bg-green-300">

        </div>

        <div className="flex md:gap-8 h-full">
          <a href="#" className="group text-white h-full w-full hidden md:flex items-center justify-center gap-4 hover:bg-[#3078FF] hover:bg-opacity-35 transition-all px-5 py-4 rounded-xl">
            Home
              <ArrowIcon
                _className='shrink-0 fill-white group-hover:-rotate-90 transition-all duration-300' 
                width={14} height={14}
              />

          </a>
          <a href="#about-us" className="group text-white h-full w-full flex items-center justify-center gap-4 hover:bg-[#3078FF] hover:bg-opacity-35 transition-all px-5 py-4 rounded-xl">
            Sobre
            <ArrowIcon
              _className='shrink-0 fill-white group-hover:-rotate-90 transition-all duration-300' 
              width={14} height={14}
            />

          </a>
          <a href="#footer" className="group text-white h-full w-full flex items-center justify-center gap-4 hover:bg-[#3078FF] hover:bg-opacity-35 transition-all px-5 py-4 rounded-xl">
            Contato
            <ArrowIcon
              _className='shrink-0 fill-white group-hover:-rotate-90 transition-all duration-300' 
              width={14} height={14}
            />

          </a>
        </div>

        <a className='w-auto h-full flex gap-4 items-center justify-center font-medium text-white px-5 py-4 rounded-xl hover:bg-[#3078FF] hover:bg-opacity-35' href='#search'>
          Pesquise
          <ArrowIcon
            _className='shrink-0 fill-white'
            width={14} height={14}
          />

        </a>
      </div>
    </header>
  )
}