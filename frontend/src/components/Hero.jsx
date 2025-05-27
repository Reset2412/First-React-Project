import { assets } from "../assets/frontend_assets/assets";

export function Hero(){
    return(
        <div className="flex flex-col sm:flex-row border boder-grey-400">
            {/* Hero */}
            <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
                <div className="text-[#414141]">
                    <div className="flex items-center gap-2">
                        <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                        <p className="font-medium text-sm md:text-base">NUESTRO MEJOR PRODUCTO</p>
                    </div>
                    <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">Latest Arrivals</h1>
                    <div className="flex items-center gap-2">
                        <p className="font-semibold text-sm md:text-base">COMPRAR AHORA</p>
                        <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
                    </div>
                </div>
            </div>
            <img className="w-full sm:w-1/2" src={assets.hero_img} alt="Hero" />
        </div>
    )
}