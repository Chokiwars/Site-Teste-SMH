import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  Building,
  ShieldCheck,
  Network,
  Cloud,
  Zap,
  Workflow,
  Check,
  ArrowRight,
  Sparkles,
  X
} from 'lucide-react';

const iconMap = {
  Cpu, Building, ShieldCheck, Network, Cloud, Zap, Workflow, Check, ArrowRight, Sparkles, X
};

const Icon = ({ name, size = 24, className = "" }) => {
  const LucideIcon = iconMap[name];
  if (!LucideIcon) return null;
  return <LucideIcon size={size} className={className} />;
};

const Button = ({ children, variant = 'default', size = 'md', onClick, iconName, iconPosition = 'right', className = "" }) => {
  let baseClasses = "font-medium rounded-xl transition duration-300 flex items-center justify-center space-x-2 shadow-lg";

  if (variant === 'default') {
    baseClasses += " bg-[#29314A] text-white hover:bg-[#29314A]/90 border border-transparent";
  } else if (variant === 'outline') {
    baseClasses += " bg-white text-[#29314A] border border-[#29314A] hover:bg-[#29314A] hover:text-white";
  }

  if (size === 'sm') baseClasses += " px-3 py-1.5 text-sm";
  else if (size === 'md') baseClasses += " px-4 py-2";
  else if (size === 'lg') baseClasses += " px-6 py-3 text-lg";

  const iconComponent = iconName ? <Icon name={iconName} size={20} /> : null;

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
      type="button"
    >
      {iconName && iconPosition === 'left' && iconComponent}
      {children && (typeof children === 'string' ? <span>{children}</span> : children)}
      {iconName && iconPosition === 'right' && iconComponent}
    </motion.button>
  );
};

// --- ANIMAÇÃO DE TEXTO ---
const wordAnimation = {
  initial: { y: 50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', damping: 10, stiffness: 100 },
  },
};

const AnimatedText = ({ text, className, style, delay = 0 }) => {
  const words = String(text).split(' ');
  const container = {
    animate: {
      transition: { delayChildren: delay, staggerChildren: 0.05 },
    },
  };
  return (
    <motion.div
      className={`flex flex-wrap ${className || ''}`}
      style={style}
      variants={container}
      initial="initial"
      animate="animate"
    >
      {words.map((word, index) => (
        <span key={index} className="overflow-hidden inline-block mr-2">
          <motion.span className="inline-block" variants={wordAnimation}>
            {word + (index < words.length - 1 ? ' ' : '')}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
};

// --- DADOS DAS SOLUÇÕES ---
const solutionsData = [
  {
    id: 1,
    title: "Soluções Integradas em Automação",
    description: "Sistemas inteligentes que conectam sensores, controladores e softwares para maximizar o desempenho operacional.",
    icon: "Cpu",
    features: ["Automação Industrial", "Integração IoT", "Monitoramento em Tempo Real"],
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: 2,
    title: "Gestão Predial e Energética",
    description: "Controle total de energia, climatização e segurança predial, com dashboards e relatórios inteligentes.",
    icon: "Building",
    features: ["Eficiência Energética", "Controle de Acesso", "Monitoramento de Consumo"],
    color: "from-green-500 to-teal-600"
  },
  {
    id: 3,
    title: "Segurança e Confiabilidade",
    description: "Soluções que garantem integridade, continuidade e proteção de sistemas críticos.",
    icon: "ShieldCheck",
    features: ["Segurança de Dados", "Sistemas de Backup", "Certificação Técnica"],
    color: "from-red-500 to-orange-600"
  },
  {
    id: 4,
    title: "Infraestrutura e Redes Inteligentes",
    description: "Planejamento e implementação de redes de comunicação seguras e de alto desempenho.",
    icon: "Network",
    features: ["Cabeamento Estruturado", "Switches e Roteadores", "Segurança de Rede"],
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 5,
    title: "Cloud Solutions",
    description: "Migração, gerenciamento e otimização de sistemas na nuvem, com alta disponibilidade e escalabilidade.",
    icon: "Cloud",
    features: ["Backup em Nuvem", "Hospedagem Segura", "Monitoramento 24h"],
    color: "from-sky-500 to-blue-600"
  },
  {
    id: 6,
    title: "Eficiência Operacional",
    description: "Aprimore fluxos de trabalho com soluções digitais que reduzem custos e aumentam produtividade.",
    icon: "Workflow",
    features: ["Análise de Processos", "Automação de Rotinas", "Indicadores de Performance"],
    color: "from-yellow-500 to-amber-600"
  },
  {
    id: 7,
    title: "Energia e Sustentabilidade",
    description: "Projetos voltados à sustentabilidade, energia limpa e responsabilidade ambiental.",
    icon: "Zap",
    features: ["Energia Solar", "Gestão de Consumo", "Relatórios Sustentáveis"],
    color: "from-lime-500 to-green-600"
  }
];

const App = () => {
  const [selectedSolution, setSelectedSolution] = useState(null);

  const handleSolutionClick = (solution) => {
    setSelectedSolution(solution);
    setTimeout(() => window.scrollTo(0, 0), 0);
  };

  if (selectedSolution) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gray-50 p-6 md:p-12"
      >
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 lg:p-12 mt-10 border-t-4 border-[#29314A]">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#29314A] flex items-center justify-center">
                <Icon name={selectedSolution.icon} size={22} className="text-white" />
              </div>
              <h1 className="text-3xl font-extrabold text-[#333]">
                {selectedSolution.title}
              </h1>
            </div>

            <Button
              variant="outline"
              onClick={() => setSelectedSolution(null)}
              iconName="X"
              className="p-3 rounded-full text-gray-500 hover:text-white hover:bg-red-500 border-none"
            />
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {selectedSolution.description}
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-semibold text-[#29314A] mb-4">
              Componentes e Benefícios
            </h2>
            <ul className="space-y-3">
              {selectedSolution.features?.map((feature, idx) => (
                <li key={idx} className="flex items-start text-gray-700 text-base">
                  <Icon name="Check" size={18} className="text-green-500 mr-2 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <Button
              variant="default"
              size="lg"
              onClick={() =>
                console.log(`Saiba mais: ${selectedSolution.title}`)
              }
              iconName="Sparkles"
              iconPosition="left"
              className="bg-[#29314A] hover:bg-[#29314A]/90 px-8 py-4"
            >
              Saiba mais sobre esta solução
            </Button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-32 px-6 max-w-7xl mx-auto text-center">
        <AnimatedText
          text="Soluções inteligentes para o futuro"
          className="text-4xl font-extrabold text-[#333] mb-2 justify-center"
          delay={0.1}
        />
        <AnimatedText
          text="Descubra como as soluções da SMH transformam tecnologia em resultados práticos e sustentáveis."
          className="text-gray-600 text-xl max-w-3xl mx-auto mb-8 justify-center"
          delay={0.4}
        />
      </div>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionsData.map((solution, index) => (
              <motion.div
                key={solution.id}
                className="group bg-white rounded-2xl p-8 shadow-xl h-full flex flex-col border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 15px 30px rgba(41, 49, 74, 0.3)",
                  y: -8
                }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${solution.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon name={solution.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#333] mb-3 group-hover:text-[#29314A] transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {solution.description}
                  </p>
                </div>

                <div className="flex-grow mb-6 pt-4 border-t border-gray-100">
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">
                    Principais Componentes:
                  </h4>
                  <ul className="space-y-2">
                    {solution.features?.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-800">
                        <Icon
                          name="Check"
                          size={16}
                          className="text-green-500 mr-2 flex-shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant="outline"
                  onClick={() => handleSolutionClick(solution)}
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="w-full group-hover:bg-[#29314A] group-hover:text-white group-hover:border-[#29314A] transition-all duration-300 text-base"
                >
                  Ver Detalhes
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
