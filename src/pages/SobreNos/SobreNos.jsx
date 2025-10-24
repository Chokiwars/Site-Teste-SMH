import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Ícones ilustrativos
const imagens = {
  historia: "src/assets/images/historia.jpeg",
  missao: "src/assets/images/missao.jpg",
  valores: "src/assets/images/valores.jpg",
  equipe: "src/assets/images/equipe.jpg",
  contato: "src/assets/images/contato.png",
};

// Variantes de animação
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const float = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  hover: { scale: 1.03 },
};

function SobreNos() {
  const fadeRef = useRef(null);

  useEffect(() => {
    if (fadeRef.current) {
      fadeRef.current.classList.add("opacity-100", "translate-y-0");
    }
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen w-full overflow-hidden pt-28 pb-20">
      {/* Fundo animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e2a78] via-[#0b1e36] to-[#09162a] animate-gradientMove opacity-90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1),_transparent_70%)] animate-pulseSlow"></div>

      {/* Conteúdo principal */}
      <motion.div
        ref={fadeRef}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative z-10 w-full px-10 md:px-20 lg:px-40 text-gray-100 opacity-0 translate-y-5 transition-all duration-700"
      >
        <motion.h1
          className="text-6xl font-extrabold text-center text-white drop-shadow-lg mb-12"
          variants={fadeUp}
        >
          Sobre Nós
        </motion.h1>

        <motion.p
          className="text-xl text-center text-gray-200 mb-16 max-w-4xl mx-auto leading-relaxed"
          variants={fadeUp}
        >
          Bem-vindo à <span className="font-semibold text-[#ff4747]">SMH</span> — inovação, segurança e
          qualidade em soluções tecnológicas que transformam o futuro.
        </motion.p>

        <div className="space-y-20">
          {/* Cada seção */}
          {[
            {
              id: "historia",
              titulo: "Nossa História",
              texto:
                "Fundada com o propósito de oferecer sistemas modernos e confiáveis, a SMH nasceu da paixão por tecnologia e do compromisso com a segurança de nossos clientes. Desenvolvemos projetos personalizados, unindo eficiência e simplicidade.",
              reverso: false,
            },
            {
              id: "missao",
              titulo: "Nossa Missão",
              texto:
                "Garantir a tranquilidade e satisfação dos nossos clientes através de soluções seguras, acessíveis e tecnológicas, promovendo desenvolvimento sustentável e confiança em cada parceria.",
              reverso: true,
            },
            {
              id: "valores",
              titulo: "Nossos Valores",
              texto: (
                <ul className="list-disc list-inside space-y-2 text-gray-200 text-lg">
                  <li>💡 Inovação constante e busca por excelência</li>
                  <li>🤝 Comprometimento e transparência</li>
                  <li>🔒 Segurança e confiança em cada serviço</li>
                  <li>🌱 Sustentabilidade e responsabilidade social</li>
                </ul>
              ),
              reverso: false,
            },
            {
              id: "equipe",
              titulo: "Nossa Equipe",
              texto:
                "Contamos com uma equipe multidisciplinar apaixonada por tecnologia e inovação. Cada membro contribui com suas habilidades únicas para tornar nossos produtos e serviços ainda melhores.",
              reverso: true,
            },
            {
              id: "contato",
              titulo: "Entre em Contato",
              texto: (
                <p className="text-gray-200 text-lg leading-relaxed">
                  Quer saber mais sobre nós ou tirar suas dúvidas? Ficaremos felizes em conversar com
                  você!
                  <br />
                  📧{" "}
                  <span className="font-semibold text-[#ff4747]">contato@smh.com.br</span>
                </p>
              ),
              reverso: false,
            },
          ].map((secao, index) => (
            <motion.section
              key={secao.id}
              variants={float}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white/10 backdrop-blur-lg p-0 rounded-3xl shadow-xl overflow-hidden transition-transform duration-300"
            >
              <div
                className={`flex flex-col md:flex-row ${
                  secao.reverso ? "md:flex-row-reverse" : ""
                } items-stretch h-[400px]`}
              >
                {/* Imagem ocupa todo o lado esquerdo/direito */}
                <motion.img
                  src={imagens[secao.id]}
                  alt={secao.titulo}
                  className="w-full md:w-1/2 h-full object-cover"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                />

                {/* Texto */}
                <div className="flex flex-col justify-center p-10 md:w-1/2">
                  <h2 className="text-4xl font-bold text-white mb-4">{secao.titulo}</h2>
                  <div>{secao.texto}</div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Rodapé */}
        <motion.footer
          className="mt-20 text-center text-sm text-gray-400 border-t border-white/20 pt-8"
          variants={fadeUp}
        >
          © {new Date().getFullYear()} SMH — Todos os direitos reservados.
        </motion.footer>
      </motion.div>

      {/* Animações CSS inline */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientMove {
          background-size: 300% 300%;
          animation: gradientMove 20s ease infinite;
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        .animate-pulseSlow {
          animation: pulseSlow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default SobreNos;
