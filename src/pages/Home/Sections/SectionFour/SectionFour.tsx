import logo from '../../../../assets/images/logoFrente.webp'

export default function SectionFour(){
    return (
        <section className="py-20 container mx-auto px-5 md:px-10 xl:px-16 text-white">
            <div className="pt-10 px-5 h-[500px] md:h-[600px] flex flex-col items-center gap-5 rounded-[30px] bg-[#0062ff] bg-banner-form ">
                <img src={logo} alt="" className='w-[200px] ' />
                <h2 className="text-wrap titleFont uppercase text-xl md:text-4xl text-center">
                    Solicite o orçamento do<br /> 
                    <span className='text-[#ffee00] text-3xl md:text-6xl text-center'> bomd+ </span><br />
                    para a sua empresa
                </h2>

                <div className='max-w-[600px] md:text-lg flex flex-col items-center'>
                    <p className='text-center mb-5'>
                        Seus colaboradores com descontos exclusivos em saúde, educação, beleza e bem-estar!
                    </p>
                    
                    <a 
                        href='https://www.cartaobomdemais.com.br/planos/para-sua-empresa/'
                        target='_blank'
                        className="w-[250px] md:w-[300px] mt-5 mx-auto py-2 px-7 text-xl md:text-2xl uppercase text-center titleFont rounded-[35px] bg-[#ff4200] text-black"
                    >
                        contrate agora
                    </a>
                </div>
                
            </div>
        </section>
    )
}
