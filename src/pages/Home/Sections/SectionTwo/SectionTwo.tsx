
export default function SectionTwo() {
    return (
        <section className=" container mx-auto px-5 md:px-10 xl:px-16 flex flex-col gap-5">
            <h1 className="titleFont text-4xl md:text-5xl text-center uppercase mb-5 md:mb-10">
                BENEFÍCIOS para empresas
            </h1>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-5 md:gap-10 text-white'>
                <div className='px-5 lg:px-10 py-10 lg:py-16 max-w-[500px] flex flex-col justify-center items-center gap-5 bg-[#0062ff] rounded-[30px]  '>
                    <h2 className='titleFont text-2xl md:text-3xl text-center text-[#fff800] uppercase '>
                        RETENÇÃO DE FUNCIONÁRIOS
                    </h2>
                    <p>
                        Oferecendo um clube de benefícios, você deixa o
                        seu funcionário mais feliz e, consequentemente,
                        retém ele na empresa.
                    </p>
                </div>

                <div className='px-5 lg:px-10  py-10 lg:py-16 max-w-[500px] flex flex-col justify-center items-center gap-5 bg-[#0062ff] rounded-[30px]  '>
                    <h2 className='titleFont text-2xl md:text-3xl text-center text-[#fff800] uppercase '>
                        Atrair novos bons funcionários
                    </h2>
                    <p>
                        Oferecendo um bom clube de descontos, você
                        atrai novos funcionários que veem um diferencial
                        na empresa.
                    </p>
                </div>

                <div className='px-5 lg:px-10  py-10 lg:py-16 max-w-[500px] flex flex-col justify-center items-center gap-5 bg-[#0062ff] rounded-[30px]  '>
                    <h2 className='titleFont text-2xl md:text-3xl text-center text-[#fff800] uppercase '>
                        Bem-estar e preocupação com o funcionário
                    </h2>
                    <p>
                        Mostra que a empresa se preocupa com a
                        economia e saúde do funcionário.
                    </p>
                </div>

                <div className='px-5 lg:px-10  py-10 lg:py-16 max-w-[500px] flex flex-col justify-center items-center gap-5 bg-[#0062ff] rounded-[30px]  '>
                    <h2 className='titleFont text-2xl md:text-3xl text-center text-[#fff800] uppercase '>
                        valores corporativos
                    </h2>
                    <p>
                        Oferecer benefícios alinhados com a missão e
                        valores da empresa, reforça o compromisso com
                        o desenvolvimento profissional e pessoal dos
                        colaboradores.
                    </p>
                </div>
            </div>

            <div className="mx-auto mt-5 md:mt-7">
                <a 
                    href="https://www.cartaobomdemais.com.br/planos/para-sua-empresa/"
                    target="_blank"
                    className="w-[250px] py-2 px-7 text-xl md:text-3xl uppercase text-center titleFont rounded-[35px] bg-[#fff800] text-black"
                >
                    CONTRATE AGORA
                </a>
            </div>
        </section>
    )
}