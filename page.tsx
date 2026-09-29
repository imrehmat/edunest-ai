import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, Brain, Lock, Users } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8F0] via-[#FFFFFF] to-[#F0F4FF]">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="font-bold text-lg text-slate-900">EduNest AI</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-slate-600 hover:text-slate-900 font-medium">Recursos</Link>
            <Link href="#about" className="text-slate-600 hover:text-slate-900 font-medium">Sobre</Link>
            <Link href="#contact" className="text-slate-600 hover:text-slate-900 font-medium">Contacto</Link>
          </div>

          <div className="flex items-center gap-3">
            <Link 
              href="/auth/login"
              className="px-6 py-2 text-primary-600 font-medium hover:text-primary-700 transition-colors"
            >
              Entrar
            </Link>
            <Link 
              href="/auth/signup"
              className="px-6 py-2 bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-lg font-medium hover:shadow-lg transition-shadow"
            >
              Começar Grátis
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Lisbon Background */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Lisbon-Inspired Background Pattern */}
        <div className="absolute inset-0 -z-10">
          {/* Azulejo pattern (Portuguese tiles) */}
          <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
            <svg viewBox="0 0 400 400" className="w-full h-full text-primary-600">
              <defs>
                <pattern id="azulejo" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M 30 30 Q 50 20 70 30" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M 30 70 Q 50 80 70 70" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                </pattern>
              </defs>
              <rect width="400" height="400" fill="url(#azulejo)"/>
            </svg>
          </div>

          {/* Tejo River gradient (bottom left) */}
          <div className="absolute -bottom-32 -left-40 w-96 h-96 bg-gradient-radial from-[#1E90FF]/10 to-transparent rounded-full blur-3xl"></div>

          {/* Sunny Lisbon warmth (top left) */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-radial from-[#FFA500]/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                  ✨ A Escola Digital Premium para Portugal
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                Educação <span className="bg-gradient-to-r from-primary-600 via-blue-500 to-navy-600 bg-clip-text text-transparent">com IA</span>
                <br />
                <span className="text-4xl md:text-5xl">em Português</span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed">
                A plataforma educacional mais avançada para estudantes em Lisboa. Professores IA personalizados, aulas interativas, e progresso académico em tempo real.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="/auth/signup"
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 justify-center"
              >
                Começar Gratuitamente
                <ArrowRight size={20} />
              </Link>
              <Link 
                href="#demo"
                className="px-8 py-4 border-2 border-primary-300 text-primary-700 rounded-xl font-bold text-lg hover:bg-primary-50 transition-colors flex items-center gap-3 justify-center"
              >
                Ver Demo
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-2 border-white flex items-center justify-center text-white font-bold text-sm"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div className="text-sm text-slate-600">
                <p className="font-semibold text-slate-900">1000+ Alunos</p>
                <p>Confiam em nós em Lisboa</p>
              </div>
            </div>
          </div>

          {/* Right side - Lisbon illustration */}
          <div className="relative h-96 md:h-full hidden md:block">
            <LisbonIllustration />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Tudo que Precisa para Sucesso Académico
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Ferramentas premium integradas num único lugar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl border border-primary-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                <Brain className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Professores IA Especializados</h3>
              <p className="text-slate-600">
                Professores personalizados para Português, Matemática, Ciências e muito mais. Adaptam-se ao seu ritmo.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 bg-gradient-to-br from-[#FFF0E6] to-[#FFE6D5] rounded-2xl border border-[#FFB88C] hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#FF8C42] rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Currículo Português</h3>
              <p className="text-slate-600">
                Alineado 100% com o Ministério da Educação. 5º, 10º e 12º anos.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Aulas Interativas</h3>
              <p className="text-slate-600">
                Quadro branco digital, conversa em tempo real, e voz natural.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center mb-6">
                <Lock className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Privado e Seguro</h3>
              <p className="text-slate-600">
                Criptografia militar. Conformidade GDPR. A privacidade dos seus filhos em primeiro lugar.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="text-white" size={28} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Progresso Visível</h3>
              <p className="text-slate-600">
                Relatórios detalhados, análise de desempenho, e recomendações personalizadas.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="text-white" size={28} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Certificados</h3>
              <p className="text-slate-600">
                Exames simulados, preparação oficial, certificados de conclusão.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lisbon-Themed Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary-600 via-blue-500 to-navy-600 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <p className="text-5xl font-bold">1000+</p>
            <p className="text-blue-100 text-lg">Alunos Ativos em Lisboa</p>
          </div>
          <div className="space-y-2">
            <p className="text-5xl font-bold">98%</p>
            <p className="text-blue-100 text-lg">Taxa de Satisfação</p>
          </div>
          <div className="space-y-2">
            <p className="text-5xl font-bold">150+</p>
            <p className="text-blue-100 text-lg">Horas de Aulas Mensais</p>
          </div>
          <div className="space-y-2">
            <p className="text-5xl font-bold">24/7</p>
            <p className="text-blue-100 text-lg">Suporte Disponível</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Planos Simples e Transparentes
            </h2>
            <p className="text-xl text-slate-600">Sem taxas ocultas. Cancele a qualquer momento.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Essencial</h3>
              <p className="text-slate-600 mb-6">Para começar</p>
              <p className="text-5xl font-bold text-slate-900 mb-6">€29<span className="text-lg text-slate-600">/mês</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-700">
                  <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  1 Aluno
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Todos os Professores IA
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Aulas Ilimitadas
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Suporte por Email
                </li>
              </ul>
              <button className="w-full py-3 border-2 border-primary-600 text-primary-600 rounded-lg font-bold hover:bg-primary-50 transition-colors">
                Começar Grátis
              </button>
            </div>

            {/* Professional Plan (Highlighted) */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white shadow-2xl transform md:scale-105">
              <div className="absolute -top-4 -right-4 bg-amber-400 text-amber-900 px-4 py-2 rounded-full font-bold text-sm">
                MAIS POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">Profissional</h3>
              <p className="text-blue-100 mb-6">Para 2-3 alunos</p>
              <p className="text-5xl font-bold mb-6">€59<span className="text-lg text-blue-100">/mês</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Até 3 Alunos
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Painel de Controlo Completo
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Relatórios Detalhados
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Suporte Prioritário
                </li>
              </ul>
              <button className="w-full py-3 bg-white text-primary-700 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                Começar Agora
              </button>
            </div>

            {/* Family Plan */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Família</h3>
              <p className="text-slate-600 mb-6">Para toda a família</p>
              <p className="text-5xl font-bold text-slate-900 mb-6">€99<span className="text-lg text-slate-600">/mês</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-700">
                  <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Até 5 Alunos
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Todos os Recursos
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Consultoria Personalizada
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Suporte Telefónico 24/7
                </li>
              </ul>
              <button className="w-full py-3 border-2 border-primary-600 text-primary-600 rounded-lg font-bold hover:bg-primary-50 transition-colors">
                Contatar Vendas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para Começar?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Junte-se a centenas de famílias em Lisboa que já transformaram o sucesso educacional dos seus filhos.
          </p>
          <Link 
            href="/auth/signup"
            className="inline-block px-10 py-4 bg-white text-primary-700 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300"
          >
            Começar Gratuitamente Agora →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center">
                <span className="text-white font-bold">E</span>
              </div>
              <span className="font-bold text-white">EduNest AI</span>
            </div>
            <p className="text-sm">A educação premium em português para o futuro.</p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Produto</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition">Recursos</Link></li>
              <li><Link href="#" className="hover:text-white transition">Preços</Link></li>
              <li><Link href="#" className="hover:text-white transition">Segurança</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition">Sobre</Link></li>
              <li><Link href="#" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition">Privacidade</Link></li>
              <li><Link href="#" className="hover:text-white transition">Termos</Link></li>
              <li><Link href="#" className="hover:text-white transition">GDPR</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center text-sm">
          <p>&copy; 2024 EduNest AI. Todos os direitos reservados. Criado com ❤️ em Lisboa, Portugal.</p>
        </div>
      </footer>
    </div>
  );
}

/**
 * Lisbon-Inspired Illustration Component
 * Shows Tejo River, buildings, tiles, and warm colors
 */
function LisbonIllustration() {
  return (
    <div className="relative w-full h-full">
      <svg
        viewBox="0 0 400 500"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))' }}
      >
        {/* Sky gradient - Lisbon's blue */}
        <defs>
          <linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#87CEEB" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#E0F4FF" stopOpacity="0.8" />
          </linearGradient>

          {/* Warm Lisbon sun */}
          <radialGradient id="sun">
            <stop offset="0%" stopColor="#FFC857" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFB347" stopOpacity="0.7" />
          </radialGradient>

          {/* Tejo River blue */}
          <linearGradient id="water" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E90FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#4169E1" stopOpacity="0.9" />
          </linearGradient>

          {/* Azulejo pattern */}
          <pattern id="tiles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="40" height="40" fill="#E8956F" />
            <path
              d="M 5 5 L 35 5 L 35 35 L 5 35 Z"
              fill="none"
              stroke="#D4756F"
              strokeWidth="1"
            />
            <circle cx="20" cy="20" r="8" fill="#4A90E2" opacity="0.6" />
          </pattern>
        </defs>

        {/* Sky */}
        <rect width="400" height="500" fill="url(#sky)" />

        {/* Sun */}
        <circle cx="320" cy="60" r="45" fill="url(#sun)" opacity="0.95" />

        {/* Sun rays */}
        <g stroke="#FFD700" strokeWidth="3" strokeLinecap="round" opacity="0.5">
          <line x1="320" y1="10" x2="320" y2="0" />
          <line x1="320" y1="110" x2="320" y2="120" />
          <line x1="370" y1="60" x2="380" y2="60" />
          <line x1="270" y1="60" x2="260" y2="60" />
        </g>

        {/* Tejo River */}
        <rect x="0" y="320" width="400" height="180" fill="url(#water)" />

        {/* River waves */}
        <path
          d="M 0 330 Q 50 320, 100 330 T 200 330 T 300 330 T 400 330"
          fill="none"
          stroke="#87CEEB"
          strokeWidth="2"
          opacity="0.6"
        />
        <path
          d="M 0 360 Q 50 350, 100 360 T 200 360 T 300 360 T 400 360"
          fill="none"
          stroke="#87CEEB"
          strokeWidth="2"
          opacity="0.4"
        />

        {/* Left Building - Old Lisbon (cream/terracotta) */}
        <rect x="20" y="200" width="100" height="120" fill="#F4D7B8" stroke="#D4A574" strokeWidth="2" />

        {/* Azulejo tiles on building */}
        <rect x="30" y="210" width="80" height="80" fill="url(#tiles)" />

        {/* Windows */}
        {[0, 1, 2].map((row) =>
          [0, 1, 2].map((col) => (
            <rect
              key={`win1-${row}-${col}`}
              x={35 + col * 28}
              y={215 + row * 25}
              width="18"
              height="18"
              fill="#FFF8DC"
              stroke="#8B7355"
              strokeWidth="1"
            />
          ))
        )}

        {/* Roof - traditional Portuguese tiles */}
        <polygon
          points="20,200 70,170 120,200"
          fill="#C85A54"
          stroke="#A03D38"
          strokeWidth="2"
        />

        {/* Door */}
        <rect x="55" y="300" width="30" height="50" fill="#8B4513" stroke="#654321" strokeWidth="2" />
        <circle cx="82" cy="325" r="3" fill="#FFD700" />

        {/* Right Building - Modern Lisbon (lighter) */}
        <rect x="280" y="180" width="90" height="140" fill="#E8E8E8" stroke="#999" strokeWidth="2" />

        {/* Modern windows */}
        {[0, 1, 2, 3].map((row) =>
          [0, 1].map((col) => (
            <rect
              key={`win2-${row}-${col}`}
              x={290 + col * 45}
              y={190 + row * 30}
              width="25"
              height="25"
              fill="#87CEEB"
              stroke="#4A90E2"
              strokeWidth="1"
            />
          ))
        )}

        {/* Modern roof */}
        <polygon
          points="280,180 325,150 370,180"
          fill="#1E90FF"
          stroke="#0056B3"
          strokeWidth="2"
        />

        {/* Middle Building - Colorful Lisbon (accent color) */}
        <rect x="140" y="220" width="80" height="100" fill="#FFE6D5" stroke="#FF8C42" strokeWidth="2" />

        {/* Decorative top accent */}
        <rect x="140" y="215" width="80" height="8" fill="#FF8C42" />

        {/* Balconies */}
        <rect x="135" y="250" width="90" height="8" fill="#FFB88C" stroke="#FF8C42" strokeWidth="1" />
        <rect x="135" y="290" width="90" height="8" fill="#FFB88C" stroke="#FF8C42" strokeWidth="1" />

        {/* Balcony railings */}
        {[0, 1].map((bal) =>
          [0, 1, 2, 3, 4].map((i) => (
            <line
              key={`rail-${bal}-${i}`}
              x1={145 + i * 15}
              y1={250 + bal * 40}
              x2={145 + i * 15}
              y2={256 + bal * 40}
              stroke="#FF8C42"
              strokeWidth="1"
            />
          ))
        )}

        {/* Windows for middle building */}
        {[0, 1, 2].map((row) =>
          [0, 1].map((col) => (
            <rect
              key={`win3-${row}-${col}`}
              x={150 + col * 35}
              y={230 + row * 25}
              width="20"
              height="20"
              fill="#FFF8DC"
              stroke="#8B4513"
              strokeWidth="1"
            />
          ))
        )}

        {/* Seagulls flying */}
        {[1, 2, 3].map((i) => (
          <g key={`seagull-${i}`} opacity="0.6" transform={`translate(${50 + i * 100}, ${100 + i * 20})`}>
            <path
              d="M 0 0 Q 5 -5 10 0"
              fill="none"
              stroke="#FFF"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M 2 0 Q 0 -3 -2 0"
              fill="none"
              stroke="#FFF"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M 8 0 Q 10 -3 12 0"
              fill="none"
              stroke="#FFF"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </g>
        ))}

        {/* Lisbon's iconic statue silhouette */}
        <circle cx="100" cy="50" r="8" fill="#FFD700" opacity="0.8" />
        <rect x="97" y="58" width="6" height="40" fill="#FFD700" opacity="0.7" />
      </svg>
    </div>
  );
}
