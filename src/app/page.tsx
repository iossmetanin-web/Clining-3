"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Zap, 
  Target, 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Check,
  ArrowRight,
  Users,
  Menu,
  X
} from "lucide-react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ========================================
// NAVBAR — Brutalist
// ========================================
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <nav
      className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 max-w-[95vw] ${
        scrolled
          ? "bg-[#E8E4DD]/95 backdrop-blur border-b-2 border-black shadow-[4px_4px_0_0_rgba(17,17,17,0.2)]"
          : "bg-transparent"
      } px-4 py-3 md:px-6`}
    >
      <div className="flex items-center justify-between gap-4 md:gap-8 min-w-[280px] md:min-w-[600px]">
        <a href="#" className="flex items-center gap-2">
          <div className={`w-8 h-8 md:w-10 md:h-10 border-2 border-black flex items-center justify-center font-mono text-xs md:text-sm font-bold transition-colors ${
            scrolled ? "bg-[#E63B2E] text-white" : "bg-black text-[#E8E4DD]"
          }`}>
            C
          </div>
          <span className={`font-sans text-lg md:text-xl font-bold tracking-tight transition-colors ${
            scrolled ? "text-black" : "text-white"
          }`}>
            CONCRETE
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Услуги", "О нас", "Цены", "Контакты"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-[#E63B2E] after:transition-all hover:after:w-full transition-colors ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#контакты"
          className="hidden md:flex items-center gap-2 bg-[#E63B2E] text-white px-5 py-2.5 font-medium text-sm border-2 border-[#E63B2E] transition-transform hover:scale-[1.02]"
        >
          Расчёт
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 transition-colors ${
            scrolled ? "text-black" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-[#E8E4DD] border-2 border-black shadow-[4px_4px_0_0_rgba(17,17,17,0.3)] p-6">
          <div className="flex flex-col gap-4">
            {["Услуги", "О нас", "Цены", "Контакты"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-black font-medium py-2 hover:text-[#E63B2E] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#контакты"
              className="bg-[#E63B2E] text-white px-6 py-3 font-medium text-center mt-2 border-2 border-[#E63B2E]"
              onClick={() => setMobileOpen(false)}
            >
              Расчёт стоимости
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

// ========================================
// HERO SECTION — Brutalist
// ========================================
function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-[100dvh] min-h-[500px] md:min-h-[600px] flex items-end overflow-hidden"
    >
      {/* Background Image - using native img for better compatibility */}
      <img
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
        alt="Бруталистская архитектура"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ filter: 'grayscale(100%) contrast(1.25)' }}
        loading="eager"
        decoding="async"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `linear-gradient(rgba(17, 17, 17, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(17, 17, 17, 0.03) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Content */}
      <div className="relative z-10 w-full px-5 md:px-16 pb-16 md:pb-24">
        <div className="max-w-5xl">
          <div className="hero-text flex items-center gap-3 mb-4 md:mb-6">
            <div className="h-px w-8 md:w-12 bg-[#E63B2E]" />
            <span className="font-mono text-[#E63B2E] text-xs md:text-sm tracking-wider uppercase">
              Коммерческий клининг
            </span>
          </div>
          
          <h1 className="hero-text font-sans text-4xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-2 md:mb-4 tracking-tight">
            Точность
          </h1>
          
          <h2 className="hero-text font-serif text-4xl md:text-7xl lg:text-8xl text-[#E63B2E] leading-[0.95] mb-6 md:mb-10">
            определяет стандарт.
          </h2>
          
          <p className="hero-text text-white/60 text-base md:text-lg max-w-xl mb-8 md:mb-12 leading-relaxed">
            Промышленная уборка для бизнеса. Офисы, склады, торговые центры.
            <span className="text-white font-medium"> Скорость. Масштаб. Контроль.</span>
          </p>
          
          <div className="hero-text flex flex-col sm:flex-row gap-3 md:gap-4">
            <a
              href="#контакты"
              className="inline-flex items-center justify-center gap-2 bg-[#E63B2E] text-white px-6 md:px-10 py-3 md:py-4 font-medium text-base md:text-lg border-2 border-[#E63B2E] transition-transform hover:scale-[1.02]"
            >
              Рассчитать стоимость
              <ArrowRight size={18} className="md:w-5 md:h-5" />
            </a>
            <a
              href="#услуги"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-6 md:px-10 py-3 md:py-4 font-medium text-base md:text-lg hover:bg-white/10 transition-colors"
            >
              Услуги
            </a>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-5 md:px-16 py-4 md:py-6 grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="font-sans text-2xl md:text-4xl font-bold text-[#E63B2E]">500+</div>
            <div className="font-mono text-[10px] md:text-xs text-white/40 uppercase tracking-wider">Объектов</div>
          </div>
          <div className="text-center border-x border-white/10">
            <div className="font-sans text-2xl md:text-4xl font-bold text-[#E63B2E]">24/7</div>
            <div className="font-mono text-[10px] md:text-xs text-white/40 uppercase tracking-wider">Контроль</div>
          </div>
          <div className="text-center">
            <div className="font-sans text-2xl md:text-4xl font-bold text-[#E63B2E]">2ч</div>
            <div className="font-mono text-[10px] md:text-xs text-white/40 uppercase tracking-wider">Норма</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ========================================
// FEATURES — Brutalist Cards
// ========================================
function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  const features = [
    {
      icon: Zap,
      title: "Скорость",
      subtitle: "Уборка за 2 часа",
      description: "Стандартизированные процессы позволяют убирать 100 м² за 2 часа. Жёсткие нормативы — предсказуемый результат.",
      stat: "100 м² / 2ч",
    },
    {
      icon: Target,
      title: "Точность",
      subtitle: "Контроль качества",
      description: "QR-чеклисты на каждом этапе. Фотофиксация до и после. Менеджер качества проверяет каждый объект.",
      stat: "99.8% соответствие",
    },
    {
      icon: Building2,
      title: "Масштаб",
      subtitle: "От 100 до 10 000 м²",
      description: "Офисы, склады, торговые центры, производства. Единый стандарт качества для любого масштаба.",
      stat: "до 10 000 м²",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".feature-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="услуги" className="py-16 md:py-32 px-5 md:px-16 bg-[#E8E4DD]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <div className="h-px w-6 md:w-8 bg-[#E63B2E]" />
              <span className="font-mono text-[#E63B2E] text-xs md:text-sm tracking-wider uppercase">Преимущества</span>
            </div>
            <h2 className="font-sans text-3xl md:text-5xl font-bold text-black tracking-tight">
              Три принципа
            </h2>
          </div>
          <p className="text-black/50 text-sm md:text-base max-w-md">
            Жёсткие стандарты. Измеримый результат. Никаких компромиссов.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="feature-card bg-[#F5F3EE] border-2 border-black p-6 md:p-8 relative group hover:shadow-[8px_8px_0_0_rgba(17,17,17,0.1)] transition-shadow duration-300"
              >
                <div className="absolute top-4 right-4 font-mono text-xs text-black/20">
                  0{index + 1}
                </div>
                
                <div className="w-12 h-12 md:w-14 md:h-14 border-2 border-[#E63B2E] flex items-center justify-center mb-6 group-hover:bg-[#E63B2E] transition-colors duration-300">
                  <IconComponent className="text-[#E63B2E] group-hover:text-white w-6 h-6 md:w-7 md:h-7 transition-colors duration-300" />
                </div>
                
                <h3 className="font-sans text-2xl md:text-3xl font-bold text-black mb-1">
                  {feature.title}
                </h3>
                <p className="font-mono text-xs text-[#E63B2E] mb-4">{feature.subtitle}</p>
                
                <p className="text-black/60 text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>
                
                <div className="pt-4 border-t border-black/10">
                  <span className="font-mono text-lg md:text-xl font-bold text-black">{feature.stat}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ========================================
// PHILOSOPHY — Brutalist Manifesto
// ========================================
function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".philosophy-text",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-48 overflow-hidden bg-black">
      {/* Concrete Texture */}
      <img
        src="https://images.unsplash.com/photo-1541123603104-512919d6a96c?w=1920&q=80"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        style={{ filter: 'grayscale(100%)' }}
        loading="lazy"
        decoding="async"
      />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(rgba(17, 17, 17, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(17, 17, 17, 0.03) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />
      
      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-16">
        <div className="flex items-center gap-3 mb-6 md:mb-8">
          <div className="h-px w-6 md:w-8 bg-[#E63B2E]" />
          <span className="font-mono text-[#E63B2E] text-xs md:text-sm tracking-wider uppercase">Манифест</span>
        </div>
        
        <p className="philosophy-text text-white/40 text-base md:text-lg mb-6 md:mb-8 leading-relaxed max-w-2xl">
          Большинство клининговых компаний фокусируются на количестве сотрудников и низкой цене.
        </p>
        
        <h2 className="philosophy-text font-sans text-2xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight">
          Мы фокусируемся на{" "}
          <span className="text-[#E63B2E]">
            стандартах и измеримом результате
          </span>.
        </h2>
        
        <div className="philosophy-text mt-10 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="border-l-2 border-[#E63B2E] pl-4">
            <div className="font-mono text-3xl md:text-4xl font-bold text-[#E63B2E]">ISO</div>
            <div className="font-mono text-xs text-white/40 uppercase mt-1">Сертификат</div>
          </div>
          <div className="border-l-2 border-[#E63B2E] pl-4">
            <div className="font-mono text-3xl md:text-4xl font-bold text-[#E63B2E]">SLA</div>
            <div className="font-mono text-xs text-white/40 uppercase mt-1">Гарантия</div>
          </div>
          <div className="border-l-2 border-[#E63B2E] pl-4">
            <div className="font-mono text-3xl md:text-4xl font-bold text-[#E63B2E]">KPI</div>
            <div className="font-mono text-xs text-white/40 uppercase mt-1">Метрики</div>
          </div>
          <div className="border-l-2 border-[#E63B2E] pl-4">
            <div className="font-mono text-3xl md:text-4xl font-bold text-[#E63B2E]">QR</div>
            <div className="font-mono text-xs text-white/40 uppercase mt-1">Контроль</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ========================================
// PROCESS — Timeline
// ========================================
function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  const steps = [
    {
      number: "01",
      title: "Аудит объекта",
      description: "Выезд менеджера, замеры, определение нормативов. Расчёт стоимости за 24 часа.",
    },
    {
      number: "02",
      title: "Договор и график",
      description: "Фиксированная цена, SLA, график уборок. Прозрачные условия без скрытых платежей.",
    },
    {
      number: "03",
      title: "Исполнение",
      description: "Бригада по графику. QR-чеклисты. Фотоотчёт. Менеджер контроля качества.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".process-step",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="о-нас" className="py-16 md:py-32 px-5 md:px-16 bg-[#B8B4AD]/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <div className="h-px w-6 md:w-8 bg-[#E63B2E]" />
              <span className="font-mono text-[#E63B2E] text-xs md:text-sm tracking-wider uppercase">Процесс</span>
            </div>
            <h2 className="font-sans text-3xl md:text-5xl font-bold text-black tracking-tight">
              Как мы работаем
            </h2>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-black/10 hidden md:block" />
          
          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="process-step relative flex gap-4 md:gap-8 items-start"
              >
                <div className="w-8 h-8 md:w-16 md:h-16 border-2 border-black bg-[#E8E4DD] flex items-center justify-center font-mono text-sm md:text-lg font-bold flex-shrink-0">
                  {step.number}
                </div>
                
                <div className="flex-1 bg-white border-2 border-black p-6 md:p-8 hover:shadow-[4px_4px_0_0_rgba(17,17,17,0.1)] transition-shadow">
                  <h3 className="font-sans text-xl md:text-2xl font-bold text-black mb-2">
                    {step.title}
                  </h3>
                  <p className="text-black/60 text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ========================================
// CLIENTS LOGOS
// ========================================
function Clients() {
  const clients = [
    { name: "Технопарк", size: "12 000 м²" },
    { name: "Бизнес-центр Сити", size: "8 500 м²" },
    { name: "ТЦ Европейский", size: "15 000 м²" },
    { name: "Складской комплекс", size: "25 000 м²" },
  ];

  return (
    <section className="py-12 md:py-20 px-5 md:px-16 bg-[#E8E4DD] border-y-2 border-black/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
          <div className="flex items-center gap-3">
            <Users className="text-[#E63B2E] w-5 h-5" />
            <span className="font-mono text-xs text-black/40 uppercase tracking-wider">Наши клиенты</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {clients.map((client) => (
              <div key={client.name} className="text-center md:text-left">
                <div className="font-sans text-sm md:text-base font-bold text-black">{client.name}</div>
                <div className="font-mono text-xs text-black/40">{client.size}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ========================================
// PRICING
// ========================================
function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pricing-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const plans = [
    {
      name: "Стандарт",
      price: "от 150",
      unit: "₽/м²",
      description: "Разовая уборка офиса",
      features: ["Сухая и влажная уборка", "Уборка санузлов", "Вынос мусора", "Стандартные средства"],
      highlighted: false,
    },
    {
      name: "Контракт",
      price: "от 120",
      unit: "₽/м²",
      description: "Регулярная уборка по договору",
      features: ["Всё из Стандарт", "График 2-7 раз в неделю", "Персональный менеджер", "SLA гарантии", "QR-контроль качества"],
      highlighted: true,
    },
    {
      name: "Индустриальный",
      price: "от 80",
      unit: "₽/м²",
      description: "Склады и производства",
      features: ["Специализированное оборудование", "Уборка после смен", "Мойка техники", "Дезинфекция", "Круглосуточно"],
      highlighted: false,
    },
  ];

  return (
    <section ref={sectionRef} id="цены" className="py-16 md:py-32 px-5 md:px-16 bg-[#E8E4DD]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-3 md:mb-4">
            <div className="h-px w-6 md:w-8 bg-[#E63B2E]" />
            <span className="font-mono text-[#E63B2E] text-xs md:text-sm tracking-wider uppercase">Тарифы</span>
            <div className="h-px w-6 md:w-8 bg-[#E63B2E]" />
          </div>
          <h2 className="font-sans text-3xl md:text-5xl font-bold text-black tracking-tight">
            Прозрачные цены
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card border-2 p-6 md:p-8 ${
                plan.highlighted
                  ? "bg-black text-white border-black"
                  : "bg-white border-black"
              }`}
            >
              {plan.highlighted && (
                <div className="inline-block bg-[#E63B2E] text-white text-xs font-bold px-3 py-1 mb-4">
                  ОПТИМАЛЬНЫЙ
                </div>
              )}
              
              <h3 className={`font-sans text-xl md:text-2xl font-bold ${plan.highlighted ? "text-white" : "text-black"}`}>
                {plan.name}
              </h3>
              
              <p className={`text-xs mt-1 mb-4 md:mb-6 ${plan.highlighted ? "text-white/50" : "text-black/50"}`}>
                {plan.description}
              </p>
              
              <div className="mb-6">
                <span className={`font-mono text-3xl md:text-4xl font-bold ${plan.highlighted ? "text-[#E63B2E]" : "text-black"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.highlighted ? "text-white/50" : "text-black/50"}`}> {plan.unit}</span>
              </div>
              
              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check size={14} className="text-[#E63B2E] flex-shrink-0" />
                    <span className={`text-xs md:text-sm ${plan.highlighted ? "text-white/80" : "text-black/70"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <a
                href="#контакты"
                className={`block text-center py-3 font-medium text-sm border-2 transition-transform hover:scale-[1.02] ${
                  plan.highlighted
                    ? "bg-[#E63B2E] text-white border-[#E63B2E]"
                    : "bg-transparent text-black border-black hover:bg-black hover:text-white transition-colors"
                }`}
              >
                Запросить расчёт
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ========================================
// CTA BANNER
// ========================================
function CTABanner() {
  return (
    <section className="py-16 md:py-24 px-5 md:px-16 bg-[#E63B2E] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(rgba(17, 17, 17, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(17, 17, 17, 0.03) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="font-sans text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 tracking-tight">
          Нужен расчёт для вашего объекта?
        </h2>
        <p className="text-white/70 text-sm md:text-lg mb-6 md:mb-8 max-w-xl mx-auto">
          Отправьте заявку — менеджер свяжется в течение 30 минут и подготовит коммерческое предложение.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+74951234567"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#E63B2E] px-6 md:px-10 py-3 md:py-4 font-medium text-base md:text-lg border-2 border-white transition-transform hover:scale-[1.02]"
          >
            <Phone size={18} />
            +7 (495) 123-45-67
          </a>
          <a
            href="mailto:info@concrete-clean.ru"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 md:px-10 py-3 md:py-4 font-medium text-base md:text-lg hover:bg-white/10 transition-colors"
          >
            <Mail size={18} />
            Написать
          </a>
        </div>
      </div>
    </section>
  );
}

// ========================================
// FOOTER
// ========================================
function Footer() {
  return (
    <footer id="контакты" className="bg-black py-12 md:py-16 px-5 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <div className="w-10 h-10 border-2 border-[#E63B2E] bg-[#E63B2E] flex items-center justify-center font-mono text-sm font-bold text-white">
                C
              </div>
              <span className="font-sans text-xl font-bold text-white">CONCRETE</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-6">
              Коммерческий клининг для бизнеса. Стандартизированные процессы, измеримый результат, гарантия качества.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-xs text-white/40">Система активна</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-mono text-xs text-white/40 uppercase tracking-wider mb-4">Услуги</h4>
            <ul className="space-y-2">
              {["Уборка офисов", "Уборка складов", "Уборка ТЦ", "Уборка производств"].map((item) => (
                <li key={item}>
                  <span className="text-white/60 text-sm hover:text-[#E63B2E] transition-colors cursor-pointer">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono text-xs text-white/40 uppercase tracking-wider mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-[#E63B2E]" />
                <a href="tel:+74951234567" className="text-white/60 text-sm hover:text-[#E63B2E] transition-colors">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-[#E63B2E]" />
                <a href="mailto:info@concrete-clean.ru" className="text-white/60 text-sm hover:text-[#E63B2E] transition-colors">
                  info@concrete-clean.ru
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#E63B2E] mt-0.5" />
                <span className="text-white/60 text-sm">Москва и МО</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/20 text-xs">
            © 2024 CONCRETE. Все права защищены.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/20 text-xs hover:text-white/40 transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-white/20 text-xs hover:text-white/40 transition-colors">
              Публичная оферта
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ========================================
// MAIN APP
// ========================================
export default function Home() {
  return (
    <main className="min-h-screen bg-[#E8E4DD]">
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Process />
      <Clients />
      <Pricing />
      <CTABanner />
      <Footer />
    </main>
  );
}
