import joelJota from '../../../../assets/images/jotinha.webp'

export default function SectionFour(){
    return (
        <section className="py-20">
            <div className="container mx-auto px-5 md:px-10 xl:px-16 flex flex-col-reverse lg:flex-row-reverse gap-5">
                <div 
                    data-aos="fade-right" 
                    data-aos-duration="3000"
                    className='px-5 py-10 xl:px-10 xl:py-0 w-full flex flex-col lg:justify-center gap-5 lg:text-lg border-2 border-[#0062ff] rounded-[30px] '
                >
                    <h1 className="hidden lg:block titleFont text-6xl text-center md:text-start ">
                        Sobre Joel Jota
                    </h1>

                    <p className='text-center md:text-start'>
                    Joel Jota é uma figura de destaque na arena da alta performance. Sua jornada começou como um atleta de natação de elite, conquistando reconhecimento nacional e internacional. Após encerrar sua carreira esportiva, ele se tornou um treinador renomado, moldando mais de 1000 atletas em todos os níveis de habilidade.
                    </p>

                    <p className='text-center md:text-start'>
                    Como empresário, Joel já impactou mais de 500 mil empreendedores e empresas. Ele também é autor de best-sellers, palestrante inspirador e influenciador digital, alcançando uma audiência de mais de 30 milhões de pessoas em suas redes sociais.
                    </p>
                        
                    <p className='text-center md:text-start'>
                    Joel está empenhado em capacitar outros a atingirem seu máximo potencial, tanto pessoal quanto profissionalmente, deixando um legado de sucesso e realização.
                    </p>
                    
                </div>

                <div className='lg:w-1/2 flex flex-col items-center lg:items-end lg:justify-center'>
                    <h1 className="lg:hidden mb-10 titleFont text-5xl text-center lg:text-start text-[#0062ff] ">
                        Sobre Joel Jota
                    </h1>

                    <img 
                        data-aos="fade-up-left" 
                        data-aos-duration="3000"
                        src={joelJota} 
                        className='rounded-[30px] ' 
                        alt="" 
                    />
                </div>
            </div>
        </section>
    )
}