export const Header = () => {
  return (
    <header className="w-full h-20 px-40 bg-white hidden xl:flex gap-4 items-center justify-between">
      <div className="h-full w-28 bg-red-500">

      </div>
      <span className="h-full flex gap-8 items-center justify-center text-black">
        <a href="#news" className="font-bold">Inicio</a>
        <a href="#aboutUS" className="font-bold">Sobre nós</a>
        <a href="#searchNews" className="font-bold">Faça sua Busca</a>
        <a href="#fakenewsBrasil" className="font-bold">Fake news</a>
      </span>
    </header>
  )
}