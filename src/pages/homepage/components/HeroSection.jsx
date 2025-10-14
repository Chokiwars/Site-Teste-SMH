import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = ({ onGetProposal, onContactUs }) => {
  // Variantes para animação em cascata do texto
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Variantes para botões com efeito magnético aprimorado
  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 30
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1]
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  // Variantes para os indicadores de confiança
  const indicatorVariants = {
    hidden: { 
      opacity: 0, 
      x: -40,
      scale: 0.8
    },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 1.8 + custom * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }),
    hover: {
      scale: 1.1,
      y: -2,
      transition: {
        duration: 0.2
      }
    }
  };

  // Variantes para partículas avançadas
  const particleVariants = {
    float: (custom) => ({
      y: [0, -custom * 10 - 20, 0],
      x: [0, Math.sin(custom) * 10, 0],
      opacity: [0.3, 0.8, 0.3],
      scale: [1, 1.2, 1],
      transition: {
        duration: 6 + custom * 2,
        repeat: Infinity,
        delay: custom * 0.5,
        ease: "easeInOut"
      }
    })
  };

  // Variantes para onda de fundo
  const waveVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        }
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0C233F] overflow-hidden">

      {/* 🌊 Ondas animadas de fundo */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute -bottom-10 left-0 right-0 h-40 bg-gradient-to-r from-accent/20 via-purple-500/20 to-blue-500/20 blur-xl"
          variants={waveVariants}
          animate="animate"
        />
        
        {/* Gradiente dinâmico */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-[#0C233F] via-[#1a3a5f] to-[#2d4a6f]"
          animate={{
            background: [
              'linear-gradient(45deg, #0C233F 0%, #1a3a5f 50%, #2d4a6f 100%)',
              'linear-gradient(135deg, #0C233F 0%, #2d4a6f 50%, #1a3a5f 100%)',
              'linear-gradient(225deg, #0C233F 0%, #1a3a5f 50%, #2d4a6f 100%)',
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      {/* ✨ Partículas avançadas */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 1,
            height: Math.random() * 4 + 1,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: i % 3 === 0 ? '#60a5fa' : i % 3 === 1 ? '#f87171' : '#ffffff'
          }}
          variants={particleVariants}
          animate="float"
          custom={i}
        />
      ))}

      {/* 🔆 Brilhos especiais */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Título Principal com efeito mais discreto */}
          <div className="relative inline-block mb-6">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight relative z-10"
              variants={textVariants}
            >
              Tecnologia que{' '}
              <span className="text-accent">
                Transforma
              </span>{' '}
              Negócios
            </motion.h1>
          </div>

          {/* Parágrafo com animação suave */}
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-light"
            variants={textVariants}
          >
            Somos seu parceiro em transformação digital, combinando inovação tecnológica 
            com confiabilidade corporativa para entregar soluções que geram resultados reais.
          </motion.p>

          {/* Botões com efeitos magnéticos aprimorados */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            variants={containerVariants}
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                variant="default"
                size="lg"
                onClick={onGetProposal}
                iconName="Calculator"
                iconPosition="left"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold relative overflow-hidden group"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  whileHover={{ transition: { duration: 0.5 } }}
                />
                Gerar Proposta Personalizada
              </Button>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                variant="outline"
                size="lg"
                onClick={onContactUs}
                iconName="Phone"
                iconPosition="left"
                className="border-white/50 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold relative overflow-hidden group"
              >
                <motion.span
                  className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg"
                />
                Falar com Especialista
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators com hover effects */}
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-8 text-white/80"
            variants={containerVariants}
          >
            {[
              { icon: 'Shield', text: '100% Seguro' },
              { icon: 'Clock', text: 'Resposta em 24h' },
              { icon: 'Award', text: 'Certificado ISO' },
              { icon: 'Users', text: '500+ Clientes' }
            ].map((item, index) => (
              <motion.div
                key={item.text}
                className="flex items-center space-x-3 p-3 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 cursor-pointer transition-colors duration-300"
                variants={indicatorVariants}
                custom={index}
                whileHover="hover"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 5 
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon name={item.icon} size={20} />
                </motion.div>
                <span className="text-sm font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator aprimorado */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { delay: 2.5, duration: 0.8 }
        }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm"
          animate={{ 
            y: [0, 12, 0],
            borderColor: ["rgba(255,255,255,0.3)", "rgba(255,255,255,0.7)", "rgba(255,255,255,0.3)"]
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div 
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ 
              opacity: [0.3, 1, 0.3],
              y: [0, 4, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;