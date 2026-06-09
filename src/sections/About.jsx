import React from 'react';
import logoAms from '../assets/logo-ams.png';

export default function About() {
  return (
    <section id="about" className="pt-16 sm:pt-20 bg-slate-50">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-12 sm:mb-20">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-10 md:p-12 lg:p-16
                        flex flex-col-reverse md:flex-row items-center gap-8 sm:gap-12 lg:gap-16">

          <div className="w-full md:w-3/5 text-left flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-950 mb-4 sm:mb-6 tracking-tight">
              Apa itu AMS?
            </h2>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8">
              Gerakan Nasional yang bertujuan untuk melindungi dan melestarikan sungai sebagai
              infrastruktur dasar-alami bagi kesejahteraan manusia. AMS memandang sungai sebagai
              urat nadi peradaban yang harus kita jaga bersama demi masa depan Indonesia.
            </p>

            <div className="border-l-4 border-emerald-600 bg-emerald-50/50 py-3.5 px-4 sm:py-4 sm:px-5 rounded-r-lg">
              <p className="italic text-sm md:text-base text-slate-700 font-medium leading-relaxed">
                "Membangun kesadaran kolektif untuk memulihkan kejayaan sungai-sungai nusantara."
              </p>
            </div>
          </div>

          <div className="w-full md:w-2/5 flex items-center justify-center">
            <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72
                            transition-transform hover:scale-105 duration-300">
              <img
                src={logoAms}
                alt="Ayo Muliakan Sungai"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

        </div>
      </div>

      <div className="w-full bg-[#051d49] text-white py-12 sm:py-16 px-4 sm:px-6 text-center border-b border-blue-900">
        <div className="max-w-3xl mx-auto flex flex-col items-center">

          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-4 sm:mb-5">
            Sungai Sebagai Ruang Hidup
          </h3>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl font-light">
            "Ayo Muliakan Sungai" adalah ajakan bahwa sungai bukan sekadar saluran air, tetapi
            ruang hidup bersama. Karena pada akhirnya, ketika kita memuliakan sungai, maka kita
            memuliakan negeri.
          </p>

        </div>
      </div>

    </section>
  );
}