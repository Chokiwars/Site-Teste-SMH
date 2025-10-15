import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Wrench, Sliders, Pipette, Waves, Gauge, Bell, Check, ArrowRight, Sparkles, X } from 'lucide-react';

// --- Utilitários de Componentes (simulando os imports externos) ---

const iconMap = {
  Settings, Wrench, Sliders, Pipette, Waves, Gauge, Bell, Check, ArrowRight, Sparkles, X
};

const Icon = ({ name, size = 24, className = "" }) => {
  const LucideIcon = iconMap[name];
  if (!LucideIcon) return null;
  return <LucideIcon size={size} className={className} />;
};

const Button = ({ children, variant = 'default', size = 'md', onClick, iconName, iconPosition = 'right', className = "" }) => {
  // Cores personalizadas: accent: #29314A (nova cor primária) / primary: #333
  let baseClasses = "font-medium rounded-xl transition duration-300 flex items-center justify-center space-x-2 shadow-lg";

  // Adaptação de variante
  if (variant === 'default') {
    // COR: Atualizado para a nova cor no interior do componente
    baseClasses += " bg-[#29314A] text-white hover:bg-[#29314A]/90 border border-transparent";
  } else if (variant === 'outline') {
    // COR: Atualizado para a nova cor no interior do componente
    baseClasses += " bg-white text-[#29314A] border border-[#29314A] hover:bg-[#29314A] hover:text-white";
  }

  // Adaptação de tamanho
  if (size === 'sm') {
    baseClasses += " px-3 py-1.5 text-sm";
  } else if (size === 'md') {
    baseClasses += " px-4 py-2";
  } else if (size === 'lg') {
    baseClasses += " px-6 py-3 text-lg";
  }

  const iconComponent = iconName ? <Icon name={iconName} size={20} /> : null;

  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {iconName && iconPosition === 'left' && iconComponent}
      {/* CORREÇÃO CRÍTICA: Lógica de renderização de children simplificada para evitar crash ao acessar .length em nós que não são strings (como o botão de fechar). */}
      {children ? (
        typeof children === 'string' ? <span>{children}</span> : children
      ) : null}
      {iconName && iconPosition === 'right' && iconComponent}
    </button>
  );
};

// --- Estrutura de Dados do Grid de Serviços ---
const servicesData = [
  {
    id: 1,
    title: "Manutenção Preventiva",
    description: "Executamos inspeções periódicas e ajustes técnicos para evitar falhas e manter os sistemas sempre operacionais.",
    icon: "Settings",
    features: ["Única", "Periódica", "Otimização de Performance"],
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    title: "Manutenção Corretiva",
    description: "Atuamos na identificação e reparo imediato de falhas, restaurando a funcionalidade dos sistemas com agilidade.",
    icon: "Wrench",
    features: ["Infraestrutura", "Equipamento", "Mão de obra", "Atendimento 24/7"],
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 3,
    title: "Adequação de Sistema",
    description: "Adaptamos e atualizamos sistemas existentes para atender às normas técnicas e às necessidades específicas do cliente.",
    icon: "Sliders",
    features: ["Infraestrutura", "Equipamento", "Mão de obra", "Compliance Legal"],
    color: "from-green-500 to-green-600"
  },
  {
    id: 4,
    title: "Teste de Estanqueidade",
    description: "Verificamos a vedação de tubulações e conexões para garantir que não haja vazamentos em sistemas pressurizados.",
    icon: "Pipette",
    features: ["Inspeção de Vazamentos", "Relatórios Detalhados", "Segurança Operacional"],
    color: "from-orange-500 to-orange-600"
  },
  {
    id: 5,
    title: "Teste de Ultrassom",
    description: "Utilizamos tecnologia ultrassônica para detectar falhas internas em materiais e componentes sem causar danos.",
    icon: "Waves",
    features: ["Análise Não Destrutiva", "Detecção de Rachaduras", "Avaliação de Integridade"],
    color: "from-red-500 to-red-600"
  },
  {
    id: 6,
    title: "Teste Hidrostático",
    description: "Realizamos ensaios com água pressurizada para avaliar a resistência e integridade de redes de combate a incêndio.",
    icon: "Gauge",
    features: ["Avaliação de Resistência", "Redes de Incêndio", "Certificação Técnica"],
    color: "from-indigo-500 to-indigo-600"
  },
  {
    id: 7,
    title: "Teste de Sirene",
    description: "Inspecionamos e testamos os sistemas de alarme sonoro para assegurar sua eficácia em situações de emergência.",
    icon: "Bell",
    features: ["Verificação de Alarme", "Simulação de Emergência", "Confiabilidade"],
    color: "from-pink-500 to-pink-600"
  }
];

// --- Componente Principal (que incorpora a ServicesGrid e a lógica da ServicesPage) ---

const App = () => {
  const [selectedService, setSelectedService] = useState(null);

  // Função para simular a navegação (mostrar o detalhe do serviço)
  const handleServiceClick = (service) => {
    setSelectedService(service);
    // Usa setTimeout para garantir que a rolagem ocorra após a renderização do modal
    setTimeout(() => window.scrollTo(0, 0), 0);
  };

  // Renderiza o Modal/Página de Detalhes
  if (selectedService) {
    // Esta é a simulação da "outra página"
    return (
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gray-50 p-6 md:p-12"
      >
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 lg:p-12 mt-10 border-t-4 border-[#29314A]"> 
          <div className="flex justify-between items-start mb-8">
            <h1 className="text-4xl font-extrabold text-[#333] break-words max-w-[80%]">
              {selectedService.title}
            </h1>
            <Button
              variant="outline"
              onClick={() => setSelectedService(null)}
              iconName="X"
              className="p-3 w-auto h-auto rounded-full text-gray-500 hover:text-white hover:bg-red-500 border-none"
            >
              {/* Botão de fechar */}
            </Button>
          </div>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {selectedService.description}
          </p>

          {/* CORREÇÃO: Removida a classe 'shadow-xl' para que o bloco com o ícone gigante pareça estático e não um botão. */}
          <div className={`w-full h-40 rounded-xl bg-gradient-to-r ${selectedService.color} flex items-center justify-center mb-10`}>
            <Icon name={selectedService.icon} size={64} className="text-white opacity-90" />
          </div>

          <h2 className="text-2xl font-bold text-[#333] mb-4 border-b pb-2">Detalhes e Benefícios</h2>
          <ul className="space-y-3 list-disc pl-6">
            {selectedService.features && selectedService.features.map((feature, idx) => (
              <li key={idx} className="flex items-start text-lg text-gray-800">
                <Icon name="Check" size={20} className="text-green-500 mr-3 flex-shrink-0 mt-1" />
                {feature}
              </li>
            ))}
          </ul>
          
          <div className="mt-12 text-center">
            {/* O botão de Orçamento foi mantido como colorido (variant="default") e com ícone, seguindo a última versão fornecida por você. */}
            <Button
              variant="default"
              size="lg"
              // Usando console.log em vez de alert()
              onClick={() => console.log(`Ação: Iniciar Contato sobre ${selectedService.title}`)}
              iconName="Sparkles"
              iconPosition="left"
              className="bg-[#29314A] hover:bg-[#29314A]/90 px-8 py-4"
            >
              Solicitar Orçamento para {selectedService.title}
            </Button>
            <p className="mt-4 text-sm text-gray-500">
              (Simulação: Em uma aplicação real, isso abriria um formulário de contato.)
            </p>
          </div>

        </div>
      </motion.div>
    );
  }

  // Renderiza o Grid de Serviços (ServicesGrid original)
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Cabeçalho da ServicesPage original */}
      <div className="pt-32 px-6 max-w-7xl mx-auto text-center"> 
        {/* Título animado */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-extrabold text-[#333] mb-2"
        >
          Conheça nossos serviços
        </motion.h1>
        
        {/* Descrição animada com delay - ESPAÇAMENTO REDUZIDO DE mb-12 PARA mb-8 */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-gray-600 text-xl max-w-3xl mx-auto mb-8"
        >
          Descubra como a SMH Sistemas pode impulsionar sua operação com tecnologia de alto nível
        </motion.p>
      </div>

      {/* Conteúdo da ServicesGrid */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          
          {/* Título escondido */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#333] mb-6 hidden">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto hidden">
              Oferecemos soluções tecnológicas completas para impulsionar sua transformação digital.
            </p>
          </motion.div>

          {/* O Grid de Serviços (aqui é a área de interesse para colunas e gap) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col border border-gray-100">
                  {/* Icon Header */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon name={service.icon} size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#333] mb-3 group-hover:text-[#29314A] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="flex-grow mb-6 pt-4 border-t border-gray-100">
                    <h4 className='text-sm font-semibold text-gray-500 mb-2'>Principais Focos:</h4>
                    <ul className="space-y-2">
                      {service.features?.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-800">
                          <Icon name="Check" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant="outline"
                    onClick={() => handleServiceClick(service)}
                    iconName="ArrowRight"
                    iconPosition="right"
                    className="w-full group-hover:bg-[#29314A] group-hover:text-white group-hover:border-[#29314A] transition-all duration-300 text-base"
                  >
                    Ver Detalhes
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: servicesData.length * 0.1 }}
            viewport={{ once: true }}
            className="text-center mt-20 p-10 bg-white rounded-2xl shadow-inner border border-gray-100"
          >
            <p className="text-xl text-gray-600 mb-6 font-semibold">
              Não encontrou exatamente o que precisa? Criamos soluções personalizadas para atender à sua demanda específica.
            </p>
            <Button
              variant="default"
              size="lg"
              onClick={() => handleServiceClick({ title: 'Solicitação Personalizada', description: 'Entre em contato para discutirmos suas necessidades exclusivas.' })}
              iconName="Sparkles"
              iconPosition="left"
              className="bg-[#29314A] hover:bg-[#29314A]/90 px-8 py-4 text-lg"
            >
              Solicitar Solução Personalizada
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default App;
