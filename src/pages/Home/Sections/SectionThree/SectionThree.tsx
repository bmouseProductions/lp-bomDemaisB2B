import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import sorridents from '../../../../assets/images/logos/sorridents.webp'
import amoVacinas from '../../../../assets/images/logos/amovacinas.webp'
import drogaRaia from '../../../../assets/images/logos/drogaRaia.webp'
//import zoologico from '../../../../assets/images/logos/zoologico.webp'
import gioLaser from '../../../../assets/images/logos/gioLaser.webp'
import drogasil from '../../../../assets/images/logos/drogasil.webp'
import unip from '../../../../assets/images/logos/unip.webp'
import aquario from '../../../../assets/images/logos/aquario.webp'
import olharCerto from '../../../../assets/images/logos/olharCerto.webp'
import drogaoSuper from '../../../../assets/images/logos/drogaoSuper.webp'
import jardim from '../../../../assets/images/logos/jardim.webp'
import cna from '../../../../assets/images/logos/cna.webp'


const parceiros = [
    {
        imagem: sorridents,
        nome: `Sorridents`,
        categoria: `Odontologia`,
        desconto: 'Tabela Exclusiva'
    },
    {
        imagem: gioLaser,
        nome: `GiOlaser`,
        categoria: `Saúde e Bem Estar`,
        desconto: 'Até 70%'
    },
    {
        imagem: olharCerto,
        nome: `Olhar Certo`,
        categoria: `Oftalmologia`,
        desconto: 'Até 30%'
    },
    {
        imagem: amoVacinas,
        nome: `Amo Vacinas`,
        categoria: `Imunização`,
        desconto: 'Até 10%'
    },
    {
        imagem: drogaRaia,
        nome: `Droga Raia`,
        categoria: `Medicamentos`,
        desconto: 'Até 10%'
    },
    {
        imagem: drogasil,
        nome: `Drogasil`,
        categoria: `Medicamentos`,
        desconto: 'Até 70%'
    },
    {
        imagem: drogaoSuper,
        nome: `Drogão Super`,
        categoria: `Medicamentos`,
        desconto: 'Até 75%'
    },
    // {
    //     imagem: zoologico,
    //     nome: `Zoologico`,
    //     categoria: `Lazer`,
    //     desconto: 'Até 10%'
    // },
    {
        imagem: unip,
        nome: `Unip`,
        categoria: `Educação`,
        desconto: 'Até 10%'
    },
    {
        imagem: aquario,
        nome: `Aquário de SP`,
        categoria: `Lazer`,
        desconto: 'Até 10%'
    },
    {
        imagem: jardim,
        nome: `Jardim Bothânico`,
        categoria: `Lazer`,
        desconto: 'Até 25%'
    },
    {
        imagem: cna,
        nome: `CNA`,
        categoria: `Educação`,
        desconto: 'Até 35%'
    },
]

export default function SectionThree() {
    return (
       <section className="my-20">
            <div 
                data-aos="zoom-in-up"
                data-aos-duration="3000"
                className="container mx-auto px-5 md:px-10 xl:px-16 flex flex-col"
            >
                <h1 className='my-10 titleFont text-4xl lg:text-5xl text-center lg:text-start lg:!leading-[60px] '>
                    CONFIRA NOSSOS <br className='hidden lg:block' />PRINCIPAIS <span className='px-3 text-white bg-[#0062ff] rounded-xl'>PARCEIROS E DESCONTOS</span> 
                </h1>

                <Swiper
                    spaceBetween={10}
                    centeredSlides={true}
                    modules={[Pagination, Autoplay]}
                    pagination={{
                      clickable: true,
                    }}
                    slidesPerView={1}
                    autoplay={{
                        delay: 1000,
                      }}
                    breakpoints={{
                        768: {
                          slidesPerView: 2,
                          centeredSlides: false
                        },
                        1024: {
                          slidesPerView: 3,
                          centeredSlides: false
                        },
                        1300: {
                            slidesPerView: 4,
                            centeredSlides: false
                          },
                      }}
                    className="mySwiper w-full h-[430px] "
                >
                    {parceiros.map( (parceiro, index) => (
                        <SwiperSlide key={index} className='!flex justify-center'>
                            <div className='max-w-[300px] w-full h-fit flex flex-col items-center border-2 border-[#0062ff] rounded-[20px] py-10 px-5'>
                                <div>
                                    <img src={parceiro.imagem} className='rounded-full max-w-[150px] ' alt="" />
                                </div>
                                <div className='mt-5 flex flex-col gap-3'>
                                    <h2 className='titleFont text-2xl text-center'>
                                        {parceiro.nome}
                                    </h2>
                                    <p className='text-center'>
                                        {parceiro.categoria}
                                    </p>
                                    <div className='py-2 px-5 font-semibold text-white text-center bg-[#0062ff] rounded-[20px] '>
                                        {parceiro.desconto} de desconto
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
       </section>
    )
}