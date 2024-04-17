import Button from "../../../../components/Button/Button";


export default function SectionTwo() {
    return (
        <section className="my-20 container mx-auto px-5 md:px-10 xl:px-16 flex flex-col-reverse lg:flex-row gap-5">
            <div className='w-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-10 text-white'>
                <div className='px-5 lg:px-10 py-10 lg:py-16 max-w-[500px] flex flex-col justify-center items-center gap-5 bg-[#0062ff] rounded-[30px]  '>
                    <h2 className='titleFont text-3xl text-center text-[#fff800] uppercase '>
                        RETENÇÃO DE FUNCIONÁRIOS
                    </h2>
                    <p>
                        Oferecendo um clube de benefícios, você deixa o
                        seu funcionário mais feliz e, consequentemente,
                        retém ele na empresa.
                    </p>
                </div>

                <div className='px-5 lg:px-10  py-10 lg:py-16 max-w-[500px] flex flex-col justify-center items-center gap-5 bg-[#0062ff] rounded-[30px]  '>
                    <h2 className='titleFont text-3xl text-center text-[#fff800] uppercase '>
                    Atrair novos bons funcionários
                    </h2>
                    <p>
                        Oferecendo um bom clube de descontos, você
                        atrai novos funcionários que veem um diferencial
                        na empresa.
                    </p>
                </div>

                <div className='px-5 lg:px-10  py-10 lg:py-16 max-w-[500px] flex flex-col justify-center items-center gap-5 bg-[#0062ff] rounded-[30px]  '>
                    <h2 className='titleFont text-3xl text-center text-[#fff800] uppercase '>
                    Bem-estar e preocupação com o funcionário
                    </h2>
                    <p>
                        Mostra que a empresa se preocupa com a
                        economia e saúde do funcionário.
                    </p>
                </div>

                <div className='px-5 lg:px-10  py-10 lg:py-16 max-w-[500px] flex flex-col justify-center items-center gap-5 bg-[#0062ff] rounded-[30px]  '>
                    <h2 className='titleFont text-3xl text-center text-[#fff800] uppercase '>
                        valores coorporativos
                    </h2>
                    <p>
                        Oferecer benefícios alinhados com a missão e
                        valores da empresa, reforça o compromisso com
                        o desenvolvimento profissional e pessoal dos
                        colaboradores.
                    </p>
                </div>

                <div>
                    <Button estilo="amarelo"/>
                </div>
            </div>
        </section>
    )
}