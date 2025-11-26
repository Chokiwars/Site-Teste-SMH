import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FileText,
  ShieldAlert,
  ExternalLink,
  Award,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

// --- Animações ---
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, ease: "easeOut" },
  },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } },
};
const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } },
};

// --- Dados Base ---
const policiesBaseData = [
  { href: "/docs/codigo-etica-e-conduta.pdf" },
  { href: "/docs/politica-de-qualidade.pdf" },
  { href: "/docs/politica-antissuborno.pdf" },
  { href: "/docs/politica-de-compliance.pdf" },
];

const certificationsBaseData = [
  { icon: "Award", href: "/certificados/iso-37001.pdf" },
  { icon: "ShieldCheck", href: "/certificados/iso-37301.pdf" },
  { icon: "CheckCircle", href: "/certificados/iso-9001.pdf" },
];

const iconMap = { Award, ShieldCheck, CheckCircle };

const ComplianceQualidade = () => {
  const { t } = useTranslation();

  const policiesText = t("compliance.policies", { returnObjects: true }) || [];
  const policies = policiesBaseData.map((base, index) => ({
    ...base,
    title: policiesText[index]?.title || `Política ${index + 1}`,
  }));

  const certificationsText = t("compliance.certifications", { returnObjects: true }) || [];
  const certifications = certificationsBaseData.map((base, index) => ({
    ...base,
    ...certificationsText[index],
  }));

  const content = t("compliance.pageContent", { returnObjects: true });
  if (!content) return <div className="min-h-screen flex items-center justify-center text-white">A carregar…</div>;

  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen w-full overflow-x-hidden pt-24 sm:pt-28 pb-20 font-sans">

      {/* Fundo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e2a78] via-[#0b1e36] to-[#09162a] animate-gradientMove opacity-95"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1),_transparent_70%)] animate-pulseSlow"></div>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full px-4 sm:px-8 md:px-16 text-gray-100 max-w-7xl mx-auto"
      >

        {/* HERO */}
        <motion.section
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="text-center py-16 sm:py-20"
        >
          <motion.h1
            variants={item}
            className="font-extrabold text-white mb-6 drop-shadow-lg
                       text-[clamp(2.2rem,6vw,4rem)]"
          >
            {content.hero.title}
          </motion.h1>

          <motion.p
            variants={item}
            className="text-gray-300 mx-auto leading-relaxed
                       text-[clamp(1rem,2.2vw,1.25rem)] max-w-3xl px-2"
          >
            {content.hero.subtitle}
          </motion.p>
        </motion.section>

        {/* INTRODUÇÃO */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-12 sm:py-16 md:py-24"
        >
          <motion.h2
            variants={item}
            className="text-white font-bold text-center mb-6
                       text-[clamp(1.7rem,4vw,2rem)]"
          >
            {content.introduction.title}
          </motion.h2>

          <div className="max-w-4xl mx-auto text-gray-200 space-y-4 leading-relaxed text-[clamp(1rem,2vw,1.125rem)] px-2">
            <motion.p variants={item} dangerouslySetInnerHTML={{ __html: content.introduction.p1 }} />
            <motion.p variants={item}>{content.introduction.p2}</motion.p>
          </div>
        </motion.section>

        {/* POLÍTICAS */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-12 sm:py-16 md:py-24"
        >
          <motion.h2
            variants={item}
            className="text-white text-center font-bold mb-10 sm:mb-12
                       text-[clamp(1.7rem,4vw,2rem)]"
          >
            {content.policiesSection.title}
          </motion.h2>

          <motion.div
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {policies.map((policy, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg group transition"
              >
                <a
                  href={policy.href}
                  target="_blank"
                  className="flex flex-col h-full p-5 sm:p-6 space-y-3"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#ff4747]/20 rounded-full">
                    <FileText className="text-[#ff4747] w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <h3 className="text-white font-semibold text-[clamp(1rem,2.2vw,1.125rem)]">
                    {policy.title}
                  </h3>

                  <span className="flex items-center text-gray-300 text-sm mt-auto">
                    {content.policiesSection.viewButtonText}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </span>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* CANAL DE DENÚNCIA */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="py-12 sm:py-16 md:py-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">

            {/* Texto */}
            <motion.div variants={slideLeft} className="px-1">
              <h2 className="text-white font-bold mb-6 text-[clamp(1.7rem,4vw,2rem)]">
                {content.whistleblowerChannel.title}
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed text-[clamp(1rem,2vw,1.125rem)]">
                {content.whistleblowerChannel.description}
              </p>
              <p className="text-gray-300 leading-relaxed text-[clamp(1rem,2vw,1.125rem)]">
                {content.whistleblowerChannel.followUp}
              </p>
            </motion.div>

            {/* Card */}
            <motion.div variants={slideRight} className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-xl border border-white/20">
                <ShieldAlert className="mx-auto text-[#ff4747] w-12 h-12 sm:w-16 sm:h-16" />

                <h3 className="text-white font-semibold mt-6 mb-4 text-[clamp(1.4rem,3vw,1.8rem)]">
                  {content.whistleblowerChannel.card.title}
                </h3>

                <p className="text-gray-300 mb-6 text-[clamp(0.95rem,2vw,1.1rem)]">
                  {content.whistleblowerChannel.card.description}
                </p>

                <a
                  href={content.whistleblowerChannel.card.href}
                  target="_blank"
                  className="inline-flex justify-center items-center bg-[#ff4747] text-white px-6 sm:px-8 py-3 rounded-md font-medium text-[clamp(1rem,2vw,1.125rem)] shadow-md hover:bg-[#ff5f5f]"
                >
                  {content.whistleblowerChannel.card.buttonText}
                </a>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* CERTIFICAÇÕES */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-12 sm:py-16 md:py-24"
        >
          <motion.div variants={item} className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="text-[#ff4747] uppercase tracking-wider text-[clamp(0.8rem,1.5vw,1rem)]">
              {content.certificationsSection.preTitle}
            </h3>

            <h2 className="text-white font-bold mt-2 text-[clamp(1.8rem,5vw,2.5rem)]">
              {content.certificationsSection.title}
            </h2>

            <p className="text-gray-300 mt-4 text-[clamp(1rem,2vw,1.2rem)]">
              {content.certificationsSection.description}
            </p>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {certifications.map((cert, idx) => {
              const Icon = iconMap[cert.icon];

              return (
                <motion.div
                  key={idx}
                  variants={item}
                  className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg flex flex-col"
                >
                  <div className="p-6 sm:p-8">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#ff4747]/20 rounded-full mb-4">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff4747]" />
                    </div>

                    <h4 className="text-white font-bold text-[clamp(1.1rem,2.5vw,1.3rem)]">
                      {cert.title}
                    </h4>

                    <p className="text-gray-400 text-[clamp(0.8rem,2vw,0.95rem)] mb-4">
                      {cert.subtitle}
                    </p>

                    <p className="text-gray-200 text-[clamp(0.9rem,2vw,1.05rem)]">
                      {cert.description}
                    </p>
                  </div>

                  <div className="p-4 border-t border-white/10 text-center">
                    <a
                      href={cert.href}
                      target="_blank"
                      className="text-[#ff4747] font-medium text-[clamp(0.95rem,2vw,1.05rem)] inline-flex items-center"
                    >
                      {content.certificationsSection.viewButtonText}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>
      </motion.main>
    </div>
  );
};

export default ComplianceQualidade;
