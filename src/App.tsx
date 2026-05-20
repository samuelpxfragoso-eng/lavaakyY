/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Menu, X, CheckCircle, Clock, Zap, Star, MapPin, Phone, Instagram, Facebook, ChevronDown, ChevronUp } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentInstaImage, setCurrentInstaImage] = useState(0);

  const instaImages = [
    "https://res.cloudinary.com/dqukldtq1/image/upload/v1777072823/WhatsApp_Image_2026-04-24_at_8.14.26_PM_1_mhc0dh.jpg",
    "https://res.cloudinary.com/dqukldtq1/image/upload/v1777072823/WhatsApp_Image_2026-04-24_at_8.14.26_PM_e21zk4.jpg",
    "https://res.cloudinary.com/dqukldtq1/image/upload/v1777072820/WhatsApp_Image_2026-04-24_at_8.14.25_PM_eu4h6r.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentInstaImage((prev) => (prev + 1) % instaImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-[#846CAD]/30">
      {/* Top Informative Banner */}
      <div className="bg-[#846CAD] text-white py-2 fixed top-0 left-0 right-0 z-[60] text-sm overflow-hidden flex items-center">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          <span className="flex items-center gap-2 px-8 font-bold uppercase tracking-wider"><Clock size={14} /> Aberto todos os dias: 07h às 22h</span>
          <span className="flex items-center gap-2 px-8 font-bold uppercase tracking-wider"><MapPin size={14} /> Rua Andrade Neves, 3061 - Centro, Pelotas</span>
          <span className="flex items-center gap-2 px-8 font-bold uppercase tracking-wider"><Phone size={14} /> (53) 99122-2096</span>
          <span className="flex items-center gap-2 px-8 font-bold uppercase tracking-wider italic text-[#E2BA59]">Sua lavanderia inteligente e moderna</span>
          {/* Duplicação para loop infinito */}
          <span className="flex items-center gap-2 px-8 font-bold uppercase tracking-wider"><Clock size={14} /> Aberto todos os dias: 07h às 22h</span>
          <span className="flex items-center gap-2 px-8 font-bold uppercase tracking-wider"><MapPin size={14} /> Rua Andrade Neves, 3061 - Centro, Pelotas</span>
          <span className="flex items-center gap-2 px-8 font-bold uppercase tracking-wider"><Phone size={14} /> (53) 99122-2096</span>
          <span className="flex items-center gap-2 px-8 font-bold uppercase tracking-wider italic text-[#E2BA59]">Sua lavanderia inteligente e moderna</span>
        </div>
      </div>

      {/* Header */}
      <header className="fixed top-[36px] left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
        <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-12 w-12 rounded-full object-cover border-2 border-[#846CAD] shadow-sm"
              src="https://res.cloudinary.com/dmn4b5luu/video/upload/q_auto/f_auto/v1779292271/grok-video-698df21a-6d22-4040-88d4-05cb8a59cbae_f5byne.mp4"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold font-chocolate text-[#846CAD] tracking-tight leading-none">LAVA AKY</span>
              <span className="text-[9px] uppercase tracking-widest text-stone-400 font-bold">Autoatendimento</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 lowercase">
            <a href="#planos" className="text-stone-600 hover:text-[#CB2E50] font-semibold tracking-tight transition-colors">planos</a>
            <a href="#b2b" className="text-stone-600 hover:text-[#CB2E50] font-semibold tracking-tight transition-colors">empresas</a>
            <a href="#unidades" className="text-stone-600 hover:text-[#CB2E50] font-semibold tracking-tight transition-colors">contato</a>
            <a href="https://wa.link/w77i2s" target="_blank" rel="noopener noreferrer" className="bg-[#846CAD] text-white px-6 py-2.5 rounded-full font-bold uppercase hover:bg-[#CB2E50] transition shadow-md hover:shadow-[#CB2E50]/20">
              agendar coleta
            </a>
          </div>
          <button className="md:hidden text-[#846CAD]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-stone-100 overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-4">
                <a 
                  href="#planos" 
                  className="text-stone-700 hover:text-[#CB2E50] font-bold uppercase py-2 border-b border-stone-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  PLANOS
                </a>
                <a 
                  href="#b2b" 
                  className="text-stone-700 hover:text-[#CB2E50] font-bold uppercase py-2 border-b border-stone-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CNPJ/CONDOMÍNIOS
                </a>
                <a 
                  href="#unidades" 
                  className="text-stone-700 hover:text-[#CB2E50] font-bold uppercase py-2 border-b border-stone-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  LOCAL
                </a>
                <a 
                  href="https://wa.me/5553991222096" 
                  className="bg-[#E2BA59] text-white px-6 py-3 rounded-full font-bold uppercase text-center hover:bg-[#CB2E50] transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  AGENDAR COLETA
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 text-white">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
            src="https://res.cloudinary.com/dmn4b5luu/video/upload/q_auto/f_auto/v1779292276/grok-video-794ef6cd-e378-40b7-a396-dda96875316c_iyyjzy.mp4"
          />
          <div className="absolute inset-0 bg-[#846CAD]/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-stone-50 via-stone-50/40 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10 py-32">
          {/* Left: Text and Buttons */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-[#F29593]/20 text-[#CB2E50] px-4 py-1 rounded-full text-sm font-bold mb-6 italic uppercase tracking-widest">
              • Tecnologia profissional • Cuidado especializado
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-stone-900 leading-tight tracking-tight uppercase">
              Sua aliada para você <span className="text-[#846CAD] block">aproveitar a vida</span>
            </h1>
            <p className="text-lg text-stone-500 mb-8 leading-relaxed max-w-xl font-medium italic">
              A <span className="font-bold text-[#846CAD]">Lava Aky</span> nasceu para transformar a rotina doméstica em algo ágil. Oferecemos um sistema híbrido no centro de Pelotas: autoatendimento, serviço de atendente ou delivery.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.link/w77i2s" target="_blank" rel="noopener noreferrer" className="bg-[#846CAD] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#CB2E50] transition shadow-lg uppercase tracking-wider">
                Agendar Coleta
              </a>
              <a href="#planos" className="bg-white text-stone-900 border-2 border-stone-200 px-8 py-4 rounded-full text-lg font-bold hover:bg-stone-50 transition shadow-md uppercase tracking-wider">
                Ver planos
              </a>
            </div>
          </motion.div>

          {/* Right: Featured Video Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="bg-white p-6 rounded-[3rem] shadow-2xl border-t-8 border-[#846CAD] overflow-hidden">
               <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-[2rem]"
                src="https://res.cloudinary.com/dmn4b5luu/video/upload/q_auto/f_auto/v1779292271/grok-video-698df21a-6d22-4040-88d4-05cb8a59cbae_f5byne.mp4"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prova Social */}
      <section id="depoimentos" className="relative py-16 overflow-hidden text-white my-12">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover filter blur-sm"
            src="https://res.cloudinary.com/dqukldtq1/video/upload/v1777072818/grok-video-794ef6cd-e378-40b7-a396-dda96875316c_tomglw.mp4"
          />
          <div className="absolute inset-0 bg-[#846CAD]/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">QUEM CONFIA, RECOMENDA.</h2>
          
          <div className="overflow-x-auto flex gap-6 px-4 pb-8 snap-x">
            {[
              { nome: 'Janaina Redü', texto: 'A lavanderia está instalada em um local estratégico, bom para estacionar, tranquilo muito limpo. E os edredons foram entregues impecáveis pareciam ser novos.' },
              { nome: 'delta civil-DIEGO', texto: 'Excepcional o atendimento do pessoal tanto via telefone como pelo whatsapp. Super indico eles. Parabéns pelo profissionalismo e rapidez na entrega' },
              { nome: 'Gabriela Marini', texto: 'Muito bom! Serviço rápido, bem feito, preço justo. Lavamos dois cobertores de casal super grossos e ficaram limpíssimos e cheirosos.' },
              { nome: 'luiza maronn', texto: 'Excelente atendimento. Muito atenciosos com as roupas e cobertores que deixamos lá. Fui lá nessa tarde lavar um edredom tamanho quenn. Sem explicações para o quão cheiroso e limpinho ele ficou.' },
              { nome: 'Alessandro Marques', texto: 'Serviço incrível, agilidade e qualidade definem!!! Cliente fidelizado aqui…' },
              { nome: 'Bruna Garcia', texto: 'Ótimo e rápido atendimento! Utilizei o serviço da lavanderia para lavagem de um cobertor, o item foi recolhido e entregue na minha casa.' },
              { nome: 'Alberto Langhinrichs', texto: 'Excelente atendimento e serviço de ótima qualidade. Lavei minhas roupas e um cobertor pesado com ótimo preço e muito bem atendido.' },
              { nome: 'Cristian Rafael Campos', texto: 'Melhor da cidade, simplesmente isso! Atendimento excelente, produtos da melhor qualidade que fica um cheiro maravilhoso.' },
              { nome: 'Lucas Faria', texto: 'É a melhor lavanderia de pelotas, local de fácil localização, máquinas novas e eficientes, excelente espaço de espera e preço excelente !!!!!' },
              { nome: 'Lais Demarco', texto: 'Ótimo atendimento, nunca tinha utilizado esse tipo de serviço de auto atendimento e a moça me chamou no wpp e me deu todo suporte, super educada e atenciosa.' },
              { nome: 'Natalie Griep', texto: 'Amei o serviço, impecável! Roupa cheirosinha e divida, só coloquei nos guarda-roupas 😅 amei!' },
            ].map((depoimento, index) => (
              <div key={index} className="bg-white text-stone-800 p-6 rounded-2xl shadow-lg min-w-[280px] max-w-[280px] snap-center">
                <div className="flex text-[#E2BA59] mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-stone-600 italic text-sm mb-4 leading-relaxed">"{depoimento.texto}"</p>
                <p className="font-bold text-stone-900 text-sm">{depoimento.nome}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <a href="https://g.page/r/CWyKwEm87zhAEBE/review" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-stone-900 px-6 py-3 rounded-full font-bold hover:bg-stone-200 transition shadow-lg">
              <Star size={18} fill="currentColor" /> Avaliar no Google
            </a>
          </div>
        </div>
      </section>

      {/* Siga-nos no Instagram */}
      <section id="instagram" className="py-24 bg-white overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#846CAD] uppercase tracking-tight">Instagram @lavaaky</h2>
        
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl border-8 border-stone-50">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentInstaImage}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="relative aspect-video flex items-center justify-center bg-stone-100"
              >
                <img 
                  src={instaImages[currentInstaImage]} 
                  className="w-full h-full object-cover" 
                  alt="Lava Aky Instagram"
                />
                
                {/* Shine Effect Overlay */}
                <motion.div 
                  className="absolute inset-0 z-10 pointer-events-none"
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    repeatDelay: 1,
                    ease: "easeInOut" 
                  }}
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                    transform: 'skewX(-20deg)'
                  }}
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
              {instaImages.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-3 h-3 rounded-full transition-all duration-500 ${idx === currentInstaImage ? 'bg-[#846CAD] w-8' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="https://www.instagram.com/lavaaky" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#846CAD] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#CB2E50] transition shadow-lg">
            Seguir no Instagram
          </a>
        </div>
      </section>

      {/* Parcerias com Condomínios */}
      <section id="valores-delivery" className="py-24 bg-[#846CAD] text-white relative overflow-hidden">
        {/* Background Decorative Circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tight uppercase">PARCERIAS COM CONDOMÍNIOS</h2>
          
          {/* Lave ou Seque Card */}
          <div className="max-w-sm mx-auto bg-stone-50/10 backdrop-blur-md border-4 border-[#E2BA59] rounded-[3rem] p-8 mb-16 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#E2BA59]"></div>
            <div className="bg-[#E2BA59] text-white inline-block px-8 py-2 rounded-full font-black text-xl mb-6 shadow-md border-2 border-white/20">
              LAVE <span className="text-sm font-bold opacity-80">OU</span> SEQUE
            </div>
            <div className="bg-white rounded-[2rem] p-6 shadow-inner border border-stone-200">
              <p className="text-[#846CAD] font-black text-sm uppercase tracking-widest mb-1">Por Apenas</p>
              <div className="flex items-center justify-center gap-1 text-[#E2BA59]">
                <span className="text-2xl font-black self-start mt-2">R$</span>
                <span className="text-7xl font-black leading-none tracking-tighter">17,99</span>
              </div>
              <p className="mt-2 text-[#846CAD] font-bold text-xs uppercase tracking-widest">LAVAGEM</p>
            </div>
          </div>

          {/* Vantagens List */}
          <div className="text-left max-w-2xl mx-auto space-y-4 mb-20 bg-black/10 p-8 rounded-[2rem] backdrop-blur-sm">
             <p className="font-bold text-[#E2BA59] text-center mb-8 text-2xl uppercase tracking-widest">👉 Vantagens exclusivas:</p>
             <ul className="space-y-6 text-lg sm:text-xl font-medium">
                <li className="flex items-start gap-4">
                   <CheckCircle className="text-[#E2BA59] shrink-0 mt-1" size={24} />
                   <span>Acima de 4 clientes, o <span className="font-black text-[#E2BA59]">DELIVERY É GRATUITO</span> 🚚</span>
                </li>
                <li className="flex items-start gap-4">
                   <CheckCircle className="text-[#E2BA59] shrink-0 mt-1" size={24} />
                   <span>Serviço de dobragem como <span className="font-black text-[#E2BA59]">BRINDE</span> 🧺</span>
                </li>
                <li className="flex items-start gap-4">
                   <CheckCircle className="text-[#E2BA59] shrink-0 mt-1" size={24} />
                   <span>Retiradas sempre às segundas e quintas-feiras</span>
                </li>
                <li className="flex items-start gap-4">
                   <CheckCircle className="text-[#E2BA59] shrink-0 mt-1" size={24} />
                   <span>Entrega em até 24h após a coleta ⚡</span>
                </li>
                <li className="flex items-start gap-4">
                   <CheckCircle className="text-[#E2BA59] shrink-0 mt-1" size={24} />
                   <span>Lavagem expressa com todo cuidado e agilidade</span>
                </li>
             </ul>
          </div>

          {/* Comparison */}
          <div className="mb-20">
            <h3 className="text-3xl font-black mb-16 uppercase tracking-tighter italic border-b-4 border-[#E2BA59] inline-block pb-2">EM CASA X LAVA AKY</h3>
            <div className="grid md:grid-cols-[1fr,auto,1fr] gap-6 items-center max-w-4xl mx-auto">
               <div className="bg-white text-stone-800 p-10 rounded-[2.5rem] shadow-2xl border-t-8 border-[#E2BA59]">
                  <h4 className="font-black text-[#E2BA59] text-2xl mb-8 border-b border-stone-100 pb-4 uppercase">EM CASA</h4>
                  <ul className="space-y-3 font-bold opacity-70 text-xl text-left pl-8 list-disc">
                     <li>água</li>
                     <li>luz</li>
                     <li>estender</li>
                     <li>passar</li>
                     <li>produtos</li>
                  </ul>
               </div>
               <div className="text-6xl font-black text-[#E2BA59] animate-pulse">X</div>
               <div className="bg-white text-stone-800 p-10 rounded-[2.5rem] shadow-2xl border-t-8 border-[#E2BA59] flex items-center justify-center min-h-[300px]">
                  <div className="space-y-4">
                    <h4 className="font-black text-[#E2BA59] text-2xl mb-8 border-b border-stone-100 pb-4 uppercase">LAVA AKY</h4>
                    <p className="font-black text-[#846CAD] text-3xl leading-tight uppercase tracking-tighter italic">Tudo incluso no valor</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="space-y-6 mb-20 opacity-90 italic">
            <p className="text-2xl font-bold tracking-tight">Você economiza água, luz e produtos 💧⚡🧴</p>
            <p className="text-2xl font-bold tracking-tight">Não precisa se preocupar em lavar, estender, passar e dobrar 🧺</p>
          </div>

          <div className="flex flex-col items-center gap-8 border-t border-white/10 pt-16">
            <a href="https://wa.me/5553991222096" className="flex items-center gap-4 bg-[#25D366] text-white px-12 py-6 rounded-full text-3xl font-black shadow-2xl hover:scale-110 transition-transform">
               <Phone size={40} /> 53 99122-2096
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16 space-y-24">
        {/* Infográfico de Valor */}
        <section id="valor" className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-w-[350px] rounded-2xl shadow-lg"
                src="https://res.cloudinary.com/dmn4b5luu/video/upload/q_auto/f_auto/v1779292282/SnapInsta.to_AQN90fgoausIgAIwRxPxLTYRLGSx4MQgu7jJWTHuDJzPi3fFpSFf4ODUeOcEywn3V7J6ekA1QW_rHPVbiiHg90_Yw4D56kiTONfjCzI_am8jdp.mp4"
              />
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#846CAD]">O Retorno do Tempo</h2>
              <p className="text-lg text-stone-500 mb-4">Seu recurso mais valioso não é o dinheiro, é o tempo.</p>
              <div className="space-y-3">
                <p className="text-sm text-stone-700 flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span><strong>Em Casa:</strong> 4h/semana perdidas com lavar e passar.</span>
                </p>
                <p className="text-sm text-stone-700 flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[#846CAD] shrink-0"></span>
                  <span><strong>Lava Aky:</strong> Apenas 75min. Lavagem e secagem sem precisar passar.</span>
                </p>
              </div>
            </div>
            <div className="bg-stone-900 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold mb-6 text-[#E2BA59]">A Matemática Real</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="opacity-60 text-sm">Em Casa (mensal)</span>
                  <span className="font-bold text-red-400">R$ 240,00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="opacity-60 text-sm italic">Na Lava Aky</span>
                  <span className="font-bold text-3xl text-[#846CAD]">R$ 151,20</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Preço Normal Section */}
        <section id="preco-normal" className="py-12 bg-white rounded-3xl shadow-xl border border-stone-100 p-6 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-black mb-4 text-[#846CAD] uppercase tracking-widest">VALOR POR CICLO</h2>
            <p className="text-stone-400 font-bold mb-6 md:mb-8 uppercase tracking-widest text-sm md:text-base">Lavagem ou Secagem</p>
            <div className="inline-block bg-[#F5F3F7] p-6 md:p-10 rounded-[2.5rem] border-2 border-[#846CAD]">
                <div className="flex items-center justify-center gap-2 text-[#846CAD]">
                    <span className="text-xl md:text-3xl font-black self-start mt-2">R$</span>
                    <span className="text-5xl md:text-8xl font-black tracking-tighter tabular-nums">18,90</span>
                </div>
                <p className="text-xs md:text-sm font-black mt-4 uppercase tracking-[0.3em] opacity-60">Uso avulso</p>
            </div>
        </section>

        {/* Grade de Planos */}
        <section id="planos">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#846CAD]">PLANOS E PACOTES</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Básico', ciclos: 8, preco: 136.00, unit: 17.00, desc: 'Perfeito para quem mora só', link: 'https://wa.link/r44e1y', color: '#E2BA59' },
              { name: 'Plus', ciclos: 16, preco: 268.00, unit: 16.75, desc: 'Ideal para casais dinâmicos', link: 'https://wa.link/u10gjm', color: '#846CAD', featured: true },
              { name: 'Premium', ciclos: 24, preco: 396.00, unit: 16.50, desc: 'A melhor escolha para famílias', link: 'https://wa.link/u10gjm', color: '#CB2E50' },
            ].map(plano => (
              <div key={plano.name} className={`bg-white p-8 rounded-2xl shadow-lg border border-stone-100 flex flex-col ${plano.featured ? 'border-[#846CAD]' : ''}`}>
                <h3 className="text-xl font-bold mb-6 uppercase">{plano.name}</h3>
                <div className="mb-6">
                  <p className="text-4xl font-bold text-stone-900 mb-1">{plano.ciclos} Ciclos</p>
                  <p className="text-stone-400 text-xs italic">R$ {plano.unit.toFixed(2).replace('.', ',')} / ciclo</p>
                </div>
                <div className="mt-auto">
                  <p className="text-2xl font-bold mb-6 text-stone-900">R$ {plano.preco.toFixed(2).replace('.', ',')}</p>
                  <p className="text-stone-500 mb-6 text-sm italic">{plano.desc}</p>
                  <a href={plano.link} target="_blank" rel="noopener noreferrer" className={`block py-4 rounded-xl font-bold uppercase text-xs text-center transition-all shadow-md`} style={{ backgroundColor: plano.color, color: 'white' }}>Assinar Agora</a>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-stone-300 mt-12 text-xs font-medium uppercase tracking-[0.2em]">* 1 ciclo = 1 lavagem ou 1 secagem • Uso livre em qualquer unidade</p>
        </section>

        {/* Seção B2B */}
        <section id="b2b" className="relative bg-stone-900 overflow-hidden rounded-3xl p-12 text-white">
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">SOLUÇÕES PARA <span className="text-[#846CAD]">EMPRESAS</span></h2>
              <p className="text-lg text-stone-400">Pacotes personalizados para Hotéis, Airbnbs, Clínicas e Salões de Beleza.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 font-medium">
                  <CheckCircle size={20} className="text-[#846CAD]" />
                  Faturamento mensal para CNPJ
                </li>
                <li className="flex items-center gap-3 font-medium">
                  <CheckCircle size={20} className="text-[#846CAD]" />
                  Prioridade extrema no delivery
                </li>
              </ul>
              <a href="https://wa.link/o3ahop" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white text-stone-900 px-8 py-3 rounded-full font-bold uppercase hover:bg-[#846CAD] hover:text-white transition-all shadow-lg">
                <MessageCircle size={20} /> Solicitar Planos CNPJ
              </a>
            </div>
          </div>
        </section>

        {/* Serviço Deixa Aky */}
        <section id="deixa-aky" className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-stone-100 overflow-hidden relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#846CAD]">🧺 Serviço "Deixa Aky"</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start relative z-10">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-xl font-bold">Como funciona</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100 transition-colors">
                    <span className="text-3xl font-bold opacity-10 block mb-2">01</span>
                    <p className="text-sm">Meça suas roupas no cesto de medida.</p>
                  </div>
                  <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100 transition-colors">
                    <span className="text-3xl font-bold opacity-10 block mb-2">02</span>
                    <p className="text-sm">Coloque as roupas no armário e tranque.</p>
                  </div>
                  <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100 transition-colors">
                    <span className="text-3xl font-bold opacity-10 block mb-2">03</span>
                    <p className="text-sm">Aguarde nosso aviso de coleta.</p>
                  </div>
                  <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100 transition-colors">
                    <span className="text-3xl font-bold opacity-10 block mb-2">04</span>
                    <p className="text-sm">Pronto! Suas roupas estarão limpas e dobradas.</p>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 bg-[#846CAD] text-white rounded-2xl shadow-lg">
                  <h3 className="text-xs font-bold mb-4 uppercase tracking-widest opacity-60">Horários</h3>
                  <ul className="space-y-1 text-sm">
                    <li>Seg - Qui: 07h às 22h</li>
                    <li>Sexta: 07h às 13h</li>
                  </ul>
                </div>
                
                <div className="p-6 bg-[#E2BA59] text-white rounded-2xl shadow-lg">
                  <h3 className="text-xs font-bold mb-4 uppercase tracking-widest opacity-60">Investimento</h3>
                  <p className="text-3xl font-bold">R$ 10,00</p>
                  <p className="text-[10px] font-bold mt-1 opacity-80 uppercase">Por cesto medida</p>
                </div>
              </div>
            </div>
            
            <motion.div 
              className="relative rounded-3xl overflow-hidden shadow-xl"
              whileHover={{ scale: 1.01 }}
            >
            <img 
              src="https://res.cloudinary.com/dmn4b5luu/image/upload/q_auto/f_auto/v1779292266/Captura_de_tela_2026-03-07_112112_rxhn6z.png" 
              alt="Serviço Deixa Aky" 
              className="w-full object-cover"
              referrerPolicy="no-referrer"
            />
            </motion.div>
          </div>
        </section>

        {/* Clube de Benefícios */}
        <section id="beneficios" className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#846CAD]">VANTAGENS EXCLUSIVAS</h2>
            <p className="text-stone-400 font-medium tracking-widest uppercase">Felicidade em cada ciclo.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { title: 'Cashback', desc: 'Sua fidelidade rende retorno automático em cada nova lavagem.' },
              { title: 'Aniversário', desc: 'Mimo especial no seu mês. Celebre com roupa limpa e renovada.' },
              { title: 'Vip WhatsApp', desc: 'Ofertas relâmpago e cupons exclusivos.' },
              { title: 'Sorteios', desc: 'Participe de campanhas mensais e ganhe ciclos extras.' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-stone-50 text-center transition-transform hover:-translate-y-1">
                <div className="bg-[#846CAD]/10 text-[#846CAD] w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Star size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center bg-[#846CAD] text-white p-12 md:p-16 rounded-3xl shadow-xl relative overflow-hidden">
            <div className="relative z-10 space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold leading-tight uppercase">CONTROLE O TEMPO NA PALMA DA MÃO</h3>
              <p className="text-lg text-[#F5F3F7] opacity-80 leading-relaxed">Acompanhe seu histórico, gerencie seu cashback e agende serviços com 1 toque.</p>
              <a href="https://play.google.com/store/apps/details?id=com.begin.laundway&pcampaignid=web_share" className="inline-block bg-white text-[#846CAD] px-8 py-3 rounded-full font-bold uppercase hover:bg-[#E2BA59] hover:text-white transition-all shadow-lg">
                BAIXAR APP LAVA AKY
              </a>
            </div>
            <div className="flex justify-center relative z-10">
              <div className="relative bg-stone-900 p-2 pb-0 rounded-2xl shadow-2xl border-4 border-white/20 overflow-hidden transform rotate-3">
                <img 
                  src="https://res.cloudinary.com/dmn4b5luu/image/upload/q_auto/f_auto/v1779292277/WhatsApp_Image_2026-03-06_at_5.41.59_PM_ih7lmn.jpg" 
                  alt="Aplicativo Lava Aky" 
                  className="w-full max-w-[180px] rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Clube de Fidelidade */}
        <section id="fidelidade" className="grid lg:grid-cols-2 gap-12 items-center bg-[#846CAD] text-white p-12 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold uppercase">Fidelidade & Mimos</h2>
            <p className="text-lg opacity-90 leading-relaxed font-bold">A cada 10 ciclos completos, ganhe 1 secagem. Acumule 20 ciclos e leve uma BAG exclusiva.</p>
            <div className="p-6 bg-white/10 rounded-2xl border border-white/20">
              <p className="font-bold text-xl mb-1 text-[#E2BA59]">Presente de Aniversário 🎂</p>
              <p className="opacity-70 text-sm">No seu mês, a Lava Aky reserva uma surpresa especial.</p>
            </div>
          </div>
          <div className="relative z-10 bg-white p-2 rounded-2xl shadow-lg">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-xl"
              src="https://res.cloudinary.com/dmn4b5luu/video/upload/q_auto/f_auto/v1779292267/grok-video-7cd289a9-71f8-4134-ab2b-b8b226f6820a_ffx8lo.mp4"
            />
          </div>
        </section>
        {/* Comodidades e Regras */}
        <section className="grid md:grid-cols-2 gap-8">
          {/* Comodidades */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-stone-100">
            <h2 className="text-3xl font-bold mb-8 text-[#846CAD]">Comodidades</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-stone-50 rounded-2xl">
                <div className="text-[#846CAD] mb-3 flex justify-center"><Zap size={32} /></div>
                <h4 className="font-bold mb-1">Wi-Fi Grátis</h4>
                <p className="text-xs text-stone-500">Conecte-se enquanto espera.</p>
              </div>
              <div className="text-center p-4 bg-stone-50 rounded-2xl">
                <div className="text-[#846CAD] mb-3 flex justify-center"><Clock size={32} /></div>
                <h4 className="font-bold mb-1">Ar Condicionado</h4>
                <p className="text-xs text-stone-500">Ambiente sempre climatizado.</p>
              </div>
              <div className="text-center p-4 bg-stone-50 rounded-2xl">
                <div className="text-[#846CAD] mb-3 flex justify-center"><Star size={32} /></div>
                <h4 className="font-bold mb-1">Alexa</h4>
                <p className="text-xs text-stone-500">Peça sua música favorita.</p>
              </div>
            </div>
          </div>

          {/* Regras de Uso e Segurança */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-stone-100">
            <h2 className="text-3xl font-bold mb-6 text-[#846CAD]">Regras de Uso e Segurança</h2>
            <ul className="space-y-3 text-sm text-stone-700">
              <li className="flex gap-2 items-start"><CheckCircle size={16} className="text-green-500 mt-1 shrink-0" /> Respeite a capacidade indicada em cada máquina.</li>
              <li className="flex gap-2 items-start"><CheckCircle size={16} className="text-green-500 mt-1 shrink-0" /> Meça as peças sempre soltas, sem compactar no cesto e ultrapassar a borda.</li>
              <li className="flex gap-2 items-start"><CheckCircle size={16} className="text-green-500 mt-1 shrink-0" /> Respeite a ordem de chegada.</li>
              <li className="flex gap-2 items-start"><X size={16} className="text-red-500 mt-1 shrink-0" /> Proibido lavar ou secar tapetes, travesseiro, panos de chão, sapatos, roupas com graxa, areia ou excesso de pelos.</li>
              <li className="flex gap-2 items-start"><X size={16} className="text-red-500 mt-1 shrink-0" /> Proibido adicionar produtos em pó em nossos equipamentos.</li>
              <li className="flex gap-2 items-start"><X size={16} className="text-red-500 mt-1 shrink-0" /> Não adicione roupas sem centrifugar em nossas secadoras.</li>
              <li className="flex gap-2 items-start"><X size={16} className="text-red-500 mt-1 shrink-0" /> Não é permitido lavar acessórios e roupas de pets nas máquinas de uso comum por questões de higiene e conservação dos equipamentos.</li>
            </ul>
          </div>
        </section>

        {/* Simbologia Têxtil */}
        <section id="simbologia" className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-[#846CAD] tracking-tighter uppercase italic">Simbologia Têxtil</h2>
          </div>
          <div className="flex justify-center max-w-5xl mx-auto">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-[500px] rounded-[3rem] shadow-2xl border-8 border-white"
              src="https://res.cloudinary.com/dmn4b5luu/video/upload/q_auto/f_auto/v1779292270/grok-video-37ae5719-fe1b-4d99-b8f8-78438049407d_qcm98t.mp4"
            />
          </div>
        </section>

        {/* Avaliar no Google Section */}
        <section id="avaliar-google" className="py-24 bg-white rounded-3xl shadow-xl border border-stone-100 p-8 md:p-12 text-center">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-left space-y-6">
              <h2 className="text-3xl md:text-5xl font-black text-[#846CAD] uppercase tracking-tighter italic">AVALIE-NOS NO GOOGLE</h2>
              <p className="text-lg text-stone-500 font-medium italic">Sua opinião é fundamental para continuarmos oferecendo o melhor cuidado para suas roupas.</p>
              <div className="flex gap-1 text-[#E2BA59]">
                {[...Array(5)].map((_, i) => <Star key={i} size={40} fill="currentColor" />)}
              </div>
              <a 
                href="https://g.page/r/CWyKwEm87zhAEBE/review" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[#846CAD] text-white px-10 py-5 rounded-full text-xl font-black uppercase tracking-widest hover:bg-[#CB2E50] transition shadow-xl"
              >
                Deixar Avaliação
              </a>
            </div>
            <div className="md:w-1/2">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-[2.5rem] shadow-2xl border-4 border-[#846CAD]"
                src="https://res.cloudinary.com/dmn4b5luu/video/upload/q_auto/f_auto/v1779292274/grok-video-a7e6f9ad-aa7d-4a83-928f-72ac936ace74_zb5ut8.mp4"
              />
            </div>
          </div>
        </section>

        {/* Unidade Section */}
        <section id="unidades" className="py-16 bg-white rounded-3xl shadow-xl border border-stone-100 p-8 md:p-12 relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase tracking-tight">COMO <span className="text-[#846CAD]">CHEGAR</span></h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-8 text-center flex flex-col items-center">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest opacity-40">Endereço</span>
                <p className="text-xl font-bold text-stone-800 leading-tight">Rua Andrade Neves, 3061 <br/> Centro, Pelotas - RS</p>
              </div>
              <div className="flex justify-center gap-12">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#846CAD] mb-1">Telefone</h4>
                  <p className="text-sm font-bold opacity-80">(53) 99122-2096</p>
                </div>
              </div>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Rua+Andrade+Neves+3061+Pelotas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-stone-900 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#846CAD] transition-all shadow-lg"
              >
                Ver no Google Maps <MapPin size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* Perguntas Frequentes (FAQ) */}
        <section id="faq" className="py-24 bg-stone-900 text-white -mx-4 px-4 sm:px-8 rounded-3xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase tracking-tight">Dúvidas? <span className="text-[#846CAD]">Respondemos.</span></h2>
            <div className="space-y-2">
              {[
                { q: "Como funciona o sistema de autoatendimento?", a: "É simples! Você escolhe a máquina, coloca suas roupas, realiza o pagamento via totem ou aplicativo e a máquina inicia o ciclo automaticamente." },
                { q: "Preciso levar sabão e amaciante?", a: "Não! Nossas máquinas já possuem dosagem automática de sabão e amaciante profissionais de alta qualidade inclusos no valor." },
                { q: "Quanto tempo leva para lavar e secar?", a: "Cada ciclo de lavagem leva em média 30 a 35 minutos, e a secagem leva em média 45 minutos." },
                { q: "Quais formas de pagamento são aceitas?", a: "Aceitamos cartões de débito, crédito e Pix diretamente no nosso totem de autoatendimento." },
                { q: "Posso lavar qualquer tipo de roupa?", a: "Sim, desde que respeitadas as etiquetas das roupas e as regras da unidade (proibido tapetes pesados, sapatos, etc)." },
                { q: "Como funcionam os pacotes de ciclos?", a: "Você pode comprar pacotes com 8, 16 ou 24 ciclos com descontos progressivos para usar quando quiser." },
                { q: "O que é o serviço 'Deixa Aky'?", a: "É a nossa conveniência onde você deixa suas roupas no armário, nós lavamos, secamos, dobramos e avisamos quando estiver pronto para retirar." },
                { q: "A lavanderia funciona em feriados?", a: "Sim! Nossa unidade de autoatendimento funciona todos os dias, incluindo feriados, das 07h às 22h." },
                { q: "As máquinas são higienizadas?", a: "Sim, as máquinas passam por processos de higienização constantes e o próprio sabão utilizado possui ação desinfetante." },
                { q: "Posso lavar acessórios de pet?", a: "Não é permitido lavar acessórios e roupas de pets nas máquinas de uso comum por questões de higiene e conservação dos equipamentos." },
              ].map((faq, index) => (
                <details key={index} className="group border-b border-white/10 overflow-hidden">
                  <summary className="py-6 font-bold text-lg cursor-pointer flex justify-between items-center list-none hover:text-[#846CAD] transition-colors">
                    {faq.q}
                    <div className="relative w-5 h-5 shrink-0">
                      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-current transition-transform duration-300 group-open:rotate-90"></div>
                      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-current transition-transform duration-300 group-open:rotate-0"></div>
                    </div>
                  </summary>
                  <div className="pb-6 text-stone-400 leading-relaxed text-sm italic">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="relative py-16 bg-stone-900 border-t border-white/5 overflow-hidden">
        {/* Footer Background Video */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/dqukldtq1/video/upload/v1777072818/grok-video-794ef6cd-e378-40b7-a396-dda96875316c_tomglw.mp4"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 text-white relative z-10">
          <div className="space-y-6">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-16 w-16 rounded-full object-cover border-2 border-[#846CAD] shadow-lg mb-4"
              src="https://res.cloudinary.com/dmn4b5luu/video/upload/q_auto/f_auto/v1779292271/grok-video-698df21a-6d22-4040-88d4-05cb8a59cbae_f5byne.mp4"
            />
            <p className="text-sm opacity-60 leading-relaxed font-medium">Sua aliada para você aproveitar as coisas boas da vida. Lavanderia inteligente e moderna.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#846CAD]">Links</h4>
            <ul className="space-y-2 opacity-80">
              <li><a href="#planos" className="hover:text-[#CB2E50] transition-colors">Planos</a></li>
              <li><a href="#b2b" className="hover:text-[#CB2E50] transition-colors">Empresas</a></li>
              <li><a href="#faq" className="hover:text-[#CB2E50] transition-colors">Dúvidas</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E2BA59]">Empresa</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/lava.aky?igsh=MXY4MjVrOHNvMjRuMw==" target="_blank" rel="noopener noreferrer" className="hover:text-[#846CAD] transition-colors"><Instagram size={24} /></a>
              <a href="https://www.facebook.com/share/1AQ4apXk3i/" target="_blank" rel="noopener noreferrer" className="hover:text-[#CB2E50] transition-colors"><Facebook size={24} /></a>
            </div>
            <p className="text-xs opacity-50 italic">© {new Date().getFullYear()} Lava Aky</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-red-500">Contato</h4>
            <p className="font-bold">(53) 99122-2096</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a href="https://wa.me/5553991222096" className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg z-50 hover:scale-110 transition">
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
