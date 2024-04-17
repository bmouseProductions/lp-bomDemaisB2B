interface ButtonProps {
    estilo: "amarelo" | "azul";
}

export default function Button( {estilo}:ButtonProps ){
    return (
        <a 
            href="https://transtriangulo.com.br/contato/"
            target="_blank"
            className={
                `${estilo === "amarelo" ? 
                "bg-[#fff800] text-black" : 
                "bg-[#0062ff] text-white"} 
                w-[250px] py-2 px-7 text-xl uppercase text-center titleFont rounded-[35px]`
            }
        >
            CONTRATE AGORA
        </a>
    )
}