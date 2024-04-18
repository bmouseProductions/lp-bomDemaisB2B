import logo from '../../../../assets/images/logoFrente.webp'

export default function SectionFour(){
    return (
        <section className="py-20 container mx-auto px-5 md:px-10 xl:px-16 text-white">
            <div className="pt-10 px-5 h-[700px] md:h-[800px] flex flex-col items-center gap-5 rounded-[30px] bg-[#0062ff] bg-banner-form ">
                <img src={logo} alt="" className='w-[200px] ' />
                <h2 className="titleFont uppercase text-3xl lg:text-6xl text-center">
                    Solicite seu <br /> 
                    <span className='text-[#ffee00] lg:text-7xl text-center'>cartão bomd+</span>
                </h2>

                <div className='max-w-[600px] '>
                    <p className='text-center mb-5'>
                        Tenha acesso a descontos exclusivos em saúde, educação, lazer e
                        bem-estar! Preencha o formulário abaixo para pedir o seu Cartão
                        bomd+
                    </p>
                    <p className='text-center'>
                        Aproveite benefícios especiais <strong>para você e sua família.</strong>
                    </p>
                    
                    <form 
                        className='mt-5 flex flex-col gap-5 text-black'
                        action=""
                    >
                        <input 
                            type="text"
                            placeholder='Seu CPF'
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
                    </form>
                </div>
                
            </div>
        </section>
    )
}