import logo from '../../../../assets/images/logoFrente.webp'

export default function SectionFour(){
    return (
        <section className="py-20 container mx-auto px-5 md:px-10 xl:px-16 text-white">
            <div className="pt-10 px-5 h-[800px] flex flex-col items-center gap-5 rounded-[30px] bg-[#0062ff] bg-banner-form ">
                <img src={logo} alt="" className='w-[200px] ' />
                <h2 className="text-wrap titleFont uppercase text-xl md:text-4xl text-center">
                    Solicite o orçamento do<br /> 
                    <span className='text-[#ffee00] text-4xl md:text-6xl text-center'>cartão bomd+ <br /> </span>
                    para a sua empresa
                </h2>

                <div className='max-w-[600px] md:text-lg'>
                    <p className='text-center mb-5'>
                        Seus colaboradores com descontos exclusivos em saúde, educação, beleza e bem-estar!
                        Preencha o formulário para falar com um de nossos consultores.
                    </p>
                    
                    <form 
                        className='mt-5 flex flex-col gap-5 text-black'
                        action=""
                    >
                        <input 
                            type="text"
                            placeholder='Seu CNPJ'
                            className='px-7 py-3 w-full  rounded-[30px] shadow-xl '
                            required
                            id='cpf'
                        />

                        <input 
                            type="text"
                            placeholder='Seu nome'
                            className='px-7 py-3 w-full  rounded-[30px] shadow-xl '
                            required
                            id='nome'
                        />

                        <select 
                            className='px-7 py-3 w-full  rounded-[30px] shadow-xl '
                            name="" 
                            id="plano"
                        >
                            <option value="">
                                Plano Premium
                            </option>

                            <option value="">
                                Plano Premium Saúde
                            </option>
                        </select>

                        <button 
                            className="w-[250px] md:w-[300px] mt-5 mx-auto py-2 px-7 text-xl md:text-2xl uppercase text-center titleFont rounded-[35px] bg-[#ff4200] text-black"
                        >
                            contrate agora
                        </button>
                    </form>
                </div>
                
            </div>
        </section>
    )
}