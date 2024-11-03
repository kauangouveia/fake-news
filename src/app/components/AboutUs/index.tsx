export const AboutUS = () => {
  return (
    <div className="w-full h-[680px] flex flex-col md:flex-row gap-4 items-center justify-center" id="aboutUS">
      <div className="w-full md:h-full flex flex-col md:flex-row justify-center items-center gap-8 p-4 xl:p-12">
        <div className="flex flex-col h-full justify-between">
          <circle className="w-[150px] h-[150px] md:w-[200px] md:h-[205px] lg:w-[256px] lg:h-[251px] bg-gray-500 rounded-full"></circle>
          <circle className="hidden md:flex w-[200px] h-[205px] lg:w-[256px] lg:h-[251px] bg-gray-500 rounded-full"></circle>
        </div>
        <circle className="hidden md:flex w-[200px] h-[205px] lg:w-[256px] lg:h-[251px] bg-gray-500 rounded-full"></circle>
      </div>
      <div className="flex w-full h-full flex-col items-center gap-8 p-4 xl:p-24">
        <h2 className="font-bold text-black text-3xl xl:text-4xl">Sobre nosso projeto</h2>
        <p className="text-sm lg:text-xl text-center text-black">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </p>
      </div>
    </div>
  )
}