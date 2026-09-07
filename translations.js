/* ============================================================
   ELEVRA 360° SALES DIAGNOSTIC™ — translations.js
   ------------------------------------------------------------
   Every visible string, in three languages. No text is hardcoded
   elsewhere. Structure per language:
     ui          → interface strings
     sections    → section labels shown above questions
     categories  → the five score categories
     statuses    → score bands
     exposure    → financial exposure levels
     bottlenecks → per-category diagnosis text (name / explanation / impact / recommendation)
     solutions   → the three Elevra solutions
     questions   → text, help, placeholder and options for each question
   ============================================================ */

const TRANSLATIONS = {

  /* ======================= ENGLISH ======================= */
  en: {
    ui: {
      brand: "ELEVRA 360°",
      brandSub: "Sales Diagnostic™",
      heroHeadline: "How much revenue is your business leaving on the table?",
      heroSub: "Discover the hidden gaps in your digital presence, customer response and sales process.",
      heroText: "Answer a few questions about your business and receive a 360° analysis showing where opportunities may be getting lost — and what to prioritize next.",
      benefits: [
        "Takes approximately 5 minutes",
        "Personalized business analysis",
        "Instant 360° score",
        "Actionable recommendations"
      ],
      heroCta: "Start my diagnostic",
      heroResume: "Continue where I left off",
      heroTime: "Approximately 5 minutes",
      questionOf: "Question {n} of {t}",
      percentComplete: "{p}% complete",
      back: "Back",
      continue: "Continue",
      seeResults: "See my results",
      startOver: "Start over",
      startOverConfirm: "This will erase all your answers and start from the beginning. Continue?",
      required: "This field is required.",
      invalidEmail: "Please enter a valid business email.",
      chooseOne: "Please select one option to continue.",
      optional: "Optional",
      loading: [
        "Analyzing your responses...",
        "Identifying sales bottlenecks...",
        "Evaluating revenue opportunities...",
        "Building your growth priorities..."
      ],
      resultFor: "Diagnostic prepared for",
      overallLabel: "Overall Elevra Score",
      outOf: "/ 100",
      scoresTitle: "Your 360° scores",
      scoresIntro: "Each area is scored from 0 to 100 based on your answers.",
      perceivedTitle: "Perception vs. data",
      perceivedLabel: "What you think is the problem",
      perceivedNone: "You weren't sure which obstacle matters most.",
      dataLabel: "What the data shows",
      alignMatch: "Your perception aligns with the diagnostic.",
      alignDiff: "The diagnostic suggests a different primary bottleneck than the one initially identified.",
      alignUnsure: "The diagnostic identifies a clear starting point for you.",
      noBottleneck: "No critical bottleneck",
      alignStrong: "No area scored below the priority threshold. Use your own perception to guide fine-tuning.",
      financialTitle: "Financial exposure",
      exposureLabel: "Potential revenue exposure",
      exposureText: "Based on your average customer value and the number of opportunities you believe may be lost each month, improving your sales process could have a meaningful financial impact.",
      exposureTextLow: "Based on your answers, the estimated opportunity at risk appears limited — a good sign, provided your numbers are being tracked.",
      exposureTextUnknown: "You don't currently know how many opportunities are lost each month. Gaining visibility into that number is often the first step toward recovering it.",
      exposureRangeLabel: "Estimated opportunity at risk",
      exposureRangeUnit: "per month · indicative",
      exposureNote: "This is an indicative range based on your own estimates, not a guaranteed or measured loss.",
      prioritiesTitle: "Your priorities",
      prioritiesIntro: "The areas with the greatest room for improvement, ordered by criticality.",
      priorityLabel: "Priority #{n}",
      issueLabel: "What's happening",
      impactLabel: "Business impact",
      recommendationLabel: "Recommendation",
      planTitle: "Your recommended action plan",
      planIntro: "Only the solutions that match the bottlenecks found in your diagnostic.",
      planIssueLabel: "Issue",
      planSolutionLabel: "Recommended solution",
      strongTitle: "Your business has a strong foundation.",
      strongText: "No urgent bottlenecks were identified across the five areas. Keep measuring, keep refining, and revisit this diagnostic as your business evolves.",
      mainCta: "Build my growth plan",
      mainCtaText: "Talk with an Elevra strategist about the priorities identified in your diagnostic.",
      newDiagnostic: "Run a new diagnostic",
      downloadPdf: "Download as PDF",
      printDate: "Generated on",
      demoNotice: "Demo mode: no destination URL configured for this action yet.",
      footer: "© Elevra Digital. Proprietary diagnostic methodology.",
      scoreRingLabel: "Overall score"
    },
    sections: {
      company: "Company information",
      digital: "Digital presence",
      lead: "Lead generation",
      response: "Customer response",
      conversion: "Sales conversion",
      growth: "Growth intelligence",
      financial: "Financial impact"
    },
    categories: {
      digital: "Digital Presence",
      lead: "Lead Generation",
      response: "Customer Response",
      conversion: "Sales Conversion",
      growth: "Growth Intelligence"
    },
    statuses: {
      strong: "Strong",
      healthy: "Healthy",
      attention: "Needs Attention",
      risk: "High Risk",
      critical: "Critical"
    },
    exposure: {
      low: "Low",
      moderate: "Moderate",
      high: "High",
      significant: "Significant"
    },
    bottlenecks: {
      digital: {
        name: "Website Conversion",
        explanation: "Your digital presence isn't consistently turning visitors into inquiries. Clarity, calls to action or measurement are falling short.",
        impact: "Prospects who research you online may leave without ever contacting you — and you won't know it happened.",
        recommendation: "Rebuild the website around clarity, a single obvious next step and measurable lead capture."
      },
      lead: {
        name: "Lead Generation Predictability",
        explanation: "New business depends on channels you don't fully control, and the volume of qualified opportunities isn't consistent.",
        impact: "Growth stalls whenever referrals slow down, and planning becomes reactive instead of strategic.",
        recommendation: "Design a repeatable acquisition system with defined channels, targets and tracking."
      },
      response: {
        name: "Lead Response Gap",
        explanation: "Inquiries aren't answered fast enough, some calls go unrecovered, and coverage stops outside business hours.",
        impact: "Every unanswered or delayed call is a customer who may book with a competitor within minutes.",
        recommendation: "Guarantee an immediate, 24/7 first response that captures information and books appointments."
      },
      conversion: {
        name: "Sales Conversion & Follow-up",
        explanation: "The path from lead to customer isn't defined, follow-up is inconsistent and lost deals aren't analyzed.",
        impact: "Leads you already paid to attract are slipping away after the first contact.",
        recommendation: "Document the sales process, install structured follow-up and measure why deals are lost."
      },
      growth: {
        name: "Sales Predictability & Visibility",
        explanation: "You can't clearly see which channels produce revenue or how much business the next 90 days will bring.",
        impact: "Decisions on marketing spend and hiring are made without reliable data, increasing risk.",
        recommendation: "Build a simple revenue attribution and pipeline model to make growth measurable."
      }
    },
    solutions: {
      ai: {
        name: "Elevra AI Receptionist™",
        planTitle: "Capture every opportunity",
        issue: "Missed and delayed inbound inquiries.",
        description: "An AI-powered receptionist that answers calls naturally, assists customers, captures information and schedules appointments — 24/7.",
        cta: "Explore AI Receptionist"
      },
      website: {
        name: "Elevra Website",
        planTitle: "Turn your website into a sales asset",
        issue: "A digital presence that isn't converting visitors into leads.",
        description: "A high-converting website designed around customer journeys, clarity and lead generation.",
        cta: "Explore website solutions"
      },
      consulting: {
        name: "Elevra Growth & Sales Consulting",
        planTitle: "Build a predictable growth system",
        issue: "Gaps in acquisition, sales process, follow-up or metrics.",
        description: "Strategic consulting focused on acquisition, conversion, sales processes, metrics and scalable growth.",
        cta: "Talk to a strategist"
      }
    },
    questions: {
      companyName: { text: "Company name", placeholder: "e.g. Summit Roofing LLC" },
      contactName: { text: "Your name", placeholder: "First and last name" },
      email:       { text: "Business email", placeholder: "name@company.com" },
      phone:       { text: "Phone number", placeholder: "+1 (555) 000-0000" },
      industry: {
        text: "What industry are you in?",
        options: {
          home: "Home Services", health: "Healthcare / Medical", beauty: "Beauty / Wellness",
          realestate: "Real Estate", auto: "Automotive", professional: "Professional Services",
          retail: "Retail", hospitality: "Hospitality", other: "Other"
        }
      },
      revenue: {
        text: "Approximately how much revenue does your company generate per month?",
        options: { u10: "Under $10K", "10_25": "$10K–$25K", "25_50": "$25K–$50K", "50_100": "$50K–$100K", "100_250": "$100K–$250K", "250p": "$250K+" }
      },
      q7: {
        text: "Does your business currently have a website?",
        options: {
          leads: "Yes, and it generates leads consistently",
          few: "Yes, but it generates few leads",
          outdated: "Yes, but it's outdated",
          unknown: "Yes, but I don't know if it generates business",
          none: "No website"
        }
      },
      q8: {
        text: "When someone visits your website, is it immediately clear what your company does and what they should do next?",
        options: { absolutely: "Absolutely", mostly: "Mostly", notreally: "Not really", no: "No", unknown: "I don't know", none: "We don't have a website" }
      },
      q9: {
        text: "Can customers easily take action directly from your website?",
        help: "For example: call, request a quote, schedule or contact your team.",
        options: {
          easy: "Yes, very easily",
          better: "Yes, but the process could be better",
          form: "Only through a basic contact form",
          noaction: "No clear action",
          none: "We don't have a website"
        }
      },
      q10: {
        text: "Do you know approximately how many leads your website generates every month?",
        options: { track: "Yes, we track it", estimate: "I have an estimate", no: "No", noleads: "Our website doesn't generate leads", none: "We don't have a website" }
      },
      q11: {
        text: "Where do most of your new customers currently come from?",
        options: {
          referrals: "Referrals", google: "Google", social: "Social media", paid: "Paid advertising",
          outbound: "Outbound sales", partners: "Partnerships", multiple: "Multiple predictable channels", unsure: "I'm not sure"
        }
      },
      q12: {
        text: "Is your company generating enough qualified opportunities to hit its growth goals?",
        options: { consistently: "Yes, consistently", most: "Most months", sometimes: "Sometimes", no: "No", nogoals: "We don't have defined growth goals" }
      },
      q13: {
        text: "If referrals suddenly stopped tomorrow, would your company still have a predictable way to generate new business?",
        options: { yes: "Yes", probably: "Probably", affect: "It would significantly affect us", no: "No", entire: "Referrals are almost our entire acquisition strategy" }
      },
      q14: {
        text: "How quickly does your company normally respond to a new inquiry?",
        options: { immediately: "Immediately", u5: "Under 5 minutes", "5_30": "5–30 minutes", "30m_2h": "30 minutes–2 hours", o2h: "More than 2 hours", depends: "It depends" }
      },
      q15: {
        text: "What happens when someone calls your business and your team can't answer?",
        options: {
          another: "Another team member answers", quick: "We return the call quickly", voicemail: "They reach voicemail",
          later: "We call back when someone becomes available", lost: "Sometimes the call is never recovered", unknown: "I don't know"
        }
      },
      q16: {
        text: "Can customers call your company after business hours and still get assistance?",
        options: { always: "Yes, 24/7", limited: "Limited after-hours coverage", message: "They can leave a message", no: "No" }
      },
      q17: {
        text: "If a customer calls right now wanting to schedule an appointment, can the person answering the phone complete the booking during the call?",
        options: {
          always: "Yes, always", usually: "Usually", someone: "They need someone else to handle it",
          callback: "We have to call the customer back", no: "No", noappts: "Our business doesn't use appointments"
        }
      },
      q18: {
        text: "Approximately how many inbound calls does your business receive each month?",
        options: { u50: "Under 50", "50_150": "50–150", "151_300": "151–300", "301_500": "301–500", "500p": "500+", unknown: "I don't know" }
      },
      q19: {
        text: "Do you know approximately what percentage of your leads become paying customers?",
        options: { track: "Yes, we track it", rough: "I have a rough estimate", no: "No", notrack: "We don't track this" }
      },
      q20: {
        text: "What happens when a lead doesn't buy or book during the first interaction?",
        options: {
          structured: "They enter a structured follow-up process", manual: "Our team follows up manually",
          sometimes: "We follow up sometimes", nothing: "Usually nothing happens", unknown: "I don't know"
        }
      },
      q21: {
        text: "Does your company have a defined sales process from new lead to closed customer?",
        options: { documented: "Yes, documented and measured", informal: "Yes, but it's mostly informal", depends: "It depends on the salesperson", notreally: "Not really", no: "No" }
      },
      q22: {
        text: "If I asked why your last 10 opportunities didn't become customers, could you show me the data?",
        options: { yes: "Yes", most: "For most of them", some: "Maybe some", no: "No" }
      },
      q23: {
        text: "Do you know which marketing channels actually generate revenue — not just leads?",
        options: { clearly: "Yes, clearly", some: "For some channels", leads: "We mostly measure leads", no: "No", notrack: "We don't track marketing performance" }
      },
      q24: {
        text: "How predictable is your company's sales pipeline for the next 30–90 days?",
        options: { very: "Very predictable", fairly: "Fairly predictable", somewhat: "Somewhat unpredictable", unpredict: "Very unpredictable", nopipeline: "We don't have a pipeline" }
      },
      q25: {
        text: "What's currently the biggest obstacle preventing your company from growing faster?",
        options: {
          leads: "Not enough leads", website: "Website isn't converting", calls: "Missed calls / slow response",
          appointments: "Not enough appointments", conversion: "Low sales conversion", followup: "Lack of follow-up",
          salesteam: "Sales team / process", marketing: "Marketing strategy", visibility: "Lack of visibility into our numbers", unsure: "I'm not sure"
        }
      },
      q26: {
        text: "What's the approximate average value of a new customer?",
        options: { u500: "Under $500", "500_1k": "$500–$1,000", "1k_2500": "$1,001–$2,500", "2500_5k": "$2,501–$5,000", "5k_10k": "$5,001–$10,000", "10kp": "$10,000+" }
      },
      q27: {
        text: "How many potential customers do you believe your company loses in an average month because of missed calls, slow responses, weak follow-up or other sales-process issues?",
        options: { none: "None", "1_5": "1–5", "6_10": "6–10", "11_25": "11–25", "26p": "26+", unknown: "I honestly don't know" }
      }
    }
  },

  /* ======================= PORTUGUÊS ======================= */
  pt: {
    ui: {
      brand: "ELEVRA 360°",
      brandSub: "Sales Diagnostic™",
      heroHeadline: "Quanta receita a sua empresa está deixando na mesa?",
      heroSub: "Descubra as lacunas ocultas na sua presença digital, no atendimento ao cliente e no processo de vendas.",
      heroText: "Responda a algumas perguntas sobre o seu negócio e receba uma análise 360° mostrando onde as oportunidades podem estar sendo perdidas — e o que priorizar a seguir.",
      benefits: [
        "Leva aproximadamente 5 minutos",
        "Análise personalizada do negócio",
        "Score 360° instantâneo",
        "Recomendações práticas"
      ],
      heroCta: "Iniciar meu diagnóstico",
      heroResume: "Continuar de onde parei",
      heroTime: "Aproximadamente 5 minutos",
      questionOf: "Pergunta {n} de {t}",
      percentComplete: "{p}% concluído",
      back: "Voltar",
      continue: "Continuar",
      seeResults: "Ver meu resultado",
      startOver: "Recomeçar",
      startOverConfirm: "Isso apagará todas as suas respostas e recomeçará do início. Continuar?",
      required: "Este campo é obrigatório.",
      invalidEmail: "Informe um e-mail corporativo válido.",
      chooseOne: "Selecione uma opção para continuar.",
      optional: "Opcional",
      loading: [
        "Analisando suas respostas...",
        "Identificando gargalos de vendas...",
        "Avaliando oportunidades de receita...",
        "Montando suas prioridades de crescimento..."
      ],
      resultFor: "Diagnóstico preparado para",
      overallLabel: "Elevra Score geral",
      outOf: "/ 100",
      scoresTitle: "Seus scores 360°",
      scoresIntro: "Cada área recebe uma nota de 0 a 100 com base nas suas respostas.",
      perceivedTitle: "Percepção vs. dados",
      perceivedLabel: "O que você acredita ser o problema",
      perceivedNone: "Você não tinha certeza de qual obstáculo é o mais importante.",
      dataLabel: "O que os dados mostram",
      alignMatch: "Sua percepção está alinhada com o diagnóstico.",
      alignDiff: "O diagnóstico indica um gargalo principal diferente daquele identificado inicialmente.",
      alignUnsure: "O diagnóstico identifica um ponto de partida claro para você.",
      noBottleneck: "Nenhum gargalo crítico",
      alignStrong: "Nenhuma área ficou abaixo do limite de prioridade. Use sua própria percepção para orientar ajustes finos.",
      financialTitle: "Exposição financeira",
      exposureLabel: "Exposição potencial de receita",
      exposureText: "Com base no valor médio do seu cliente e no número de oportunidades que você acredita perder por mês, melhorar seu processo de vendas pode ter um impacto financeiro relevante.",
      exposureTextLow: "Com base nas suas respostas, a oportunidade em risco parece limitada — um bom sinal, desde que seus números estejam sendo acompanhados.",
      exposureTextUnknown: "Você não sabe hoje quantas oportunidades são perdidas por mês. Ganhar visibilidade sobre esse número costuma ser o primeiro passo para recuperá-lo.",
      exposureRangeLabel: "Oportunidade estimada em risco",
      exposureRangeUnit: "por mês · indicativo",
      exposureNote: "Esta é uma faixa indicativa baseada nas suas próprias estimativas, não uma perda garantida ou medida.",
      prioritiesTitle: "Suas prioridades",
      prioritiesIntro: "As áreas com maior espaço para melhoria, ordenadas por criticidade.",
      priorityLabel: "Prioridade #{n}",
      issueLabel: "O que está acontecendo",
      impactLabel: "Impacto no negócio",
      recommendationLabel: "Recomendação",
      planTitle: "Seu plano de ação recomendado",
      planIntro: "Apenas as soluções que correspondem aos gargalos encontrados no seu diagnóstico.",
      planIssueLabel: "Problema",
      planSolutionLabel: "Solução recomendada",
      strongTitle: "Sua empresa tem uma base sólida.",
      strongText: "Nenhum gargalo urgente foi identificado nas cinco áreas. Continue medindo, continue refinando e refaça este diagnóstico à medida que o negócio evoluir.",
      mainCta: "Montar meu plano de crescimento",
      mainCtaText: "Converse com um estrategista da Elevra sobre as prioridades identificadas no seu diagnóstico.",
      newDiagnostic: "Fazer um novo diagnóstico",
      downloadPdf: "Baixar em PDF",
      printDate: "Gerado em",
      demoNotice: "Modo demonstração: nenhuma URL de destino configurada para esta ação ainda.",
      footer: "© Elevra Digital. Metodologia de diagnóstico proprietária.",
      scoreRingLabel: "Score geral"
    },
    sections: {
      company: "Informações da empresa",
      digital: "Presença digital",
      lead: "Geração de leads",
      response: "Atendimento ao cliente",
      conversion: "Conversão de vendas",
      growth: "Inteligência de crescimento",
      financial: "Impacto financeiro"
    },
    categories: {
      digital: "Presença Digital",
      lead: "Geração de Leads",
      response: "Atendimento ao Cliente",
      conversion: "Conversão de Vendas",
      growth: "Inteligência de Crescimento"
    },
    statuses: {
      strong: "Forte",
      healthy: "Saudável",
      attention: "Requer Atenção",
      risk: "Alto Risco",
      critical: "Crítico"
    },
    exposure: {
      low: "Baixa",
      moderate: "Moderada",
      high: "Alta",
      significant: "Significativa"
    },
    bottlenecks: {
      digital: {
        name: "Conversão do Website",
        explanation: "Sua presença digital não está transformando visitantes em contatos de forma consistente. Clareza, chamadas para ação ou medição estão aquém.",
        impact: "Clientes em potencial que pesquisam sobre você online podem sair sem nunca entrar em contato — e você não saberá que isso aconteceu.",
        recommendation: "Reconstruir o site em torno de clareza, um próximo passo óbvio e captura de leads mensurável."
      },
      lead: {
        name: "Previsibilidade na Geração de Leads",
        explanation: "Novos negócios dependem de canais que você não controla totalmente, e o volume de oportunidades qualificadas não é constante.",
        impact: "O crescimento trava sempre que as indicações diminuem, e o planejamento se torna reativo em vez de estratégico.",
        recommendation: "Estruturar um sistema de aquisição repetível com canais, metas e acompanhamento definidos."
      },
      response: {
        name: "Lacuna na Resposta a Leads",
        explanation: "As solicitações não são respondidas com rapidez suficiente, algumas ligações se perdem e a cobertura para fora do horário comercial.",
        impact: "Cada ligação não atendida ou atrasada é um cliente que pode fechar com um concorrente em minutos.",
        recommendation: "Garantir uma primeira resposta imediata, 24/7, que capture informações e agende compromissos."
      },
      conversion: {
        name: "Conversão de Vendas e Follow-up",
        explanation: "O caminho de lead a cliente não está definido, o follow-up é inconsistente e as vendas perdidas não são analisadas.",
        impact: "Leads que você já pagou para atrair estão escapando após o primeiro contato.",
        recommendation: "Documentar o processo comercial, implantar follow-up estruturado e medir por que negócios são perdidos."
      },
      growth: {
        name: "Previsibilidade e Visibilidade de Vendas",
        explanation: "Você não consegue ver claramente quais canais geram receita nem quanto negócio os próximos 90 dias vão trazer.",
        impact: "Decisões sobre investimento em marketing e contratações são tomadas sem dados confiáveis, aumentando o risco.",
        recommendation: "Construir um modelo simples de atribuição de receita e pipeline para tornar o crescimento mensurável."
      }
    },
    solutions: {
      ai: {
        name: "Elevra AI Receptionist™",
        planTitle: "Capture todas as oportunidades",
        issue: "Ligações perdidas e respostas demoradas.",
        description: "Uma recepcionista com inteligência artificial que atende ligações de forma natural, auxilia clientes, captura informações e agenda compromissos — 24 horas por dia, 7 dias por semana.",
        cta: "Conhecer o AI Receptionist"
      },
      website: {
        name: "Elevra Website",
        planTitle: "Transforme seu site em um ativo de vendas",
        issue: "Uma presença digital que não converte visitantes em leads.",
        description: "Um site de alta conversão, projetado em torno da jornada do cliente, clareza e geração de leads.",
        cta: "Conhecer soluções de website"
      },
      consulting: {
        name: "Elevra Growth & Sales Consulting",
        planTitle: "Construa um sistema de crescimento previsível",
        issue: "Lacunas em aquisição, processo comercial, follow-up ou métricas.",
        description: "Consultoria estratégica focada em aquisição, conversão, processos de vendas, métricas e crescimento escalável.",
        cta: "Falar com um estrategista"
      }
    },
    questions: {
      companyName: { text: "Nome da empresa", placeholder: "ex.: Summit Roofing LLC" },
      contactName: { text: "Seu nome", placeholder: "Nome e sobrenome" },
      email:       { text: "E-mail corporativo", placeholder: "nome@empresa.com" },
      phone:       { text: "Telefone", placeholder: "+55 (11) 90000-0000" },
      industry: {
        text: "Em qual setor a sua empresa atua?",
        options: {
          home: "Serviços residenciais", health: "Saúde / Medicina", beauty: "Beleza / Bem-estar",
          realestate: "Imobiliário", auto: "Automotivo", professional: "Serviços profissionais",
          retail: "Varejo", hospitality: "Hotelaria / Alimentação", other: "Outro"
        }
      },
      revenue: {
        text: "Aproximadamente quanto a sua empresa fatura por mês?",
        options: { u10: "Menos de US$ 10 mil", "10_25": "US$ 10–25 mil", "25_50": "US$ 25–50 mil", "50_100": "US$ 50–100 mil", "100_250": "US$ 100–250 mil", "250p": "Mais de US$ 250 mil" }
      },
      q7: {
        text: "Sua empresa possui um site atualmente?",
        options: {
          leads: "Sim, e ele gera leads de forma consistente",
          few: "Sim, mas gera poucos leads",
          outdated: "Sim, mas está desatualizado",
          unknown: "Sim, mas não sei se gera negócios",
          none: "Não temos site"
        }
      },
      q8: {
        text: "Quando alguém visita o seu site, fica imediatamente claro o que a sua empresa faz e qual o próximo passo?",
        options: { absolutely: "Com certeza", mostly: "Na maior parte", notreally: "Não muito", no: "Não", unknown: "Não sei", none: "Não temos site" }
      },
      q9: {
        text: "Os clientes conseguem agir facilmente diretamente pelo seu site?",
        help: "Por exemplo: ligar, pedir orçamento, agendar ou entrar em contato com a equipe.",
        options: {
          easy: "Sim, com muita facilidade",
          better: "Sim, mas o processo poderia ser melhor",
          form: "Apenas por um formulário de contato básico",
          noaction: "Não há uma ação clara",
          none: "Não temos site"
        }
      },
      q10: {
        text: "Você sabe aproximadamente quantos leads o seu site gera por mês?",
        options: { track: "Sim, acompanhamos", estimate: "Tenho uma estimativa", no: "Não", noleads: "Nosso site não gera leads", none: "Não temos site" }
      },
      q11: {
        text: "De onde vem a maioria dos seus novos clientes hoje?",
        options: {
          referrals: "Indicações", google: "Google", social: "Redes sociais", paid: "Anúncios pagos",
          outbound: "Prospecção ativa", partners: "Parcerias", multiple: "Vários canais previsíveis", unsure: "Não tenho certeza"
        }
      },
      q12: {
        text: "Sua empresa está gerando oportunidades qualificadas suficientes para atingir as metas de crescimento?",
        options: { consistently: "Sim, de forma consistente", most: "Na maioria dos meses", sometimes: "Às vezes", no: "Não", nogoals: "Não temos metas de crescimento definidas" }
      },
      q13: {
        text: "Se as indicações parassem amanhã, sua empresa ainda teria uma forma previsível de gerar novos negócios?",
        options: { yes: "Sim", probably: "Provavelmente", affect: "Nos afetaria significativamente", no: "Não", entire: "Indicações são quase toda a nossa estratégia de aquisição" }
      },
      q14: {
        text: "Com que rapidez sua empresa normalmente responde a uma nova solicitação?",
        options: { immediately: "Imediatamente", u5: "Em menos de 5 minutos", "5_30": "5–30 minutos", "30m_2h": "30 minutos a 2 horas", o2h: "Mais de 2 horas", depends: "Depende" }
      },
      q15: {
        text: "O que acontece quando alguém liga para a sua empresa e a equipe não consegue atender?",
        options: {
          another: "Outro membro da equipe atende", quick: "Retornamos a ligação rapidamente", voicemail: "Cai na caixa postal",
          later: "Retornamos quando alguém fica disponível", lost: "Às vezes a ligação nunca é recuperada", unknown: "Não sei"
        }
      },
      q16: {
        text: "Os clientes podem ligar fora do horário comercial e ainda assim receber atendimento?",
        options: { always: "Sim, 24/7", limited: "Cobertura limitada fora do horário", message: "Podem deixar uma mensagem", no: "Não" }
      },
      q17: {
        text: "Se um cliente ligar agora querendo agendar, quem atende consegue concluir o agendamento durante a ligação?",
        options: {
          always: "Sim, sempre", usually: "Geralmente", someone: "Precisa de outra pessoa para resolver",
          callback: "Precisamos retornar a ligação", no: "Não", noappts: "Nosso negócio não trabalha com agendamentos"
        }
      },
      q18: {
        text: "Aproximadamente quantas ligações a sua empresa recebe por mês?",
        options: { u50: "Menos de 50", "50_150": "50–150", "151_300": "151–300", "301_500": "301–500", "500p": "Mais de 500", unknown: "Não sei" }
      },
      q19: {
        text: "Você sabe aproximadamente qual porcentagem dos seus leads se torna cliente pagante?",
        options: { track: "Sim, acompanhamos", rough: "Tenho uma estimativa aproximada", no: "Não", notrack: "Não acompanhamos isso" }
      },
      q20: {
        text: "O que acontece quando um lead não compra ou não agenda na primeira interação?",
        options: {
          structured: "Entra em um processo estruturado de follow-up", manual: "Nossa equipe faz follow-up manualmente",
          sometimes: "Fazemos follow-up às vezes", nothing: "Normalmente nada acontece", unknown: "Não sei"
        }
      },
      q21: {
        text: "Sua empresa tem um processo de vendas definido, do novo lead ao cliente fechado?",
        options: { documented: "Sim, documentado e medido", informal: "Sim, mas é majoritariamente informal", depends: "Depende do vendedor", notreally: "Não exatamente", no: "Não" }
      },
      q22: {
        text: "Se eu perguntasse por que suas últimas 10 oportunidades não viraram clientes, você conseguiria me mostrar os dados?",
        options: { yes: "Sim", most: "Para a maioria", some: "Talvez para algumas", no: "Não" }
      },
      q23: {
        text: "Você sabe quais canais de marketing realmente geram receita — e não apenas leads?",
        options: { clearly: "Sim, claramente", some: "Para alguns canais", leads: "Medimos principalmente leads", no: "Não", notrack: "Não acompanhamos o desempenho de marketing" }
      },
      q24: {
        text: "Quão previsível é o pipeline de vendas da sua empresa para os próximos 30–90 dias?",
        options: { very: "Muito previsível", fairly: "Razoavelmente previsível", somewhat: "Um pouco imprevisível", unpredict: "Muito imprevisível", nopipeline: "Não temos pipeline" }
      },
      q25: {
        text: "Qual é hoje o maior obstáculo que impede a sua empresa de crescer mais rápido?",
        options: {
          leads: "Poucos leads", website: "O site não converte", calls: "Ligações perdidas / resposta lenta",
          appointments: "Poucos agendamentos", conversion: "Baixa conversão de vendas", followup: "Falta de follow-up",
          salesteam: "Equipe / processo de vendas", marketing: "Estratégia de marketing", visibility: "Falta de visibilidade dos nossos números", unsure: "Não tenho certeza"
        }
      },
      q26: {
        text: "Qual é o valor médio aproximado de um novo cliente?",
        options: { u500: "Menos de US$ 500", "500_1k": "US$ 500–1.000", "1k_2500": "US$ 1.001–2.500", "2500_5k": "US$ 2.501–5.000", "5k_10k": "US$ 5.001–10.000", "10kp": "Mais de US$ 10.000" }
      },
      q27: {
        text: "Quantos clientes em potencial você acredita que sua empresa perde em um mês normal por ligações perdidas, respostas lentas, follow-up fraco ou outros problemas no processo de vendas?",
        options: { none: "Nenhum", "1_5": "1–5", "6_10": "6–10", "11_25": "11–25", "26p": "Mais de 26", unknown: "Sinceramente, não sei" }
      }
    }
  },

  /* ======================= ESPAÑOL ======================= */
  es: {
    ui: {
      brand: "ELEVRA 360°",
      brandSub: "Sales Diagnostic™",
      heroHeadline: "¿Cuántos ingresos está dejando tu empresa sobre la mesa?",
      heroSub: "Descubre las brechas ocultas en tu presencia digital, tu respuesta al cliente y tu proceso de ventas.",
      heroText: "Responde algunas preguntas sobre tu negocio y recibe un análisis 360° que muestra dónde se pueden estar perdiendo oportunidades — y qué priorizar a continuación.",
      benefits: [
        "Toma aproximadamente 5 minutos",
        "Análisis personalizado del negocio",
        "Puntuación 360° instantánea",
        "Recomendaciones accionables"
      ],
      heroCta: "Iniciar mi diagnóstico",
      heroResume: "Continuar donde lo dejé",
      heroTime: "Aproximadamente 5 minutos",
      questionOf: "Pregunta {n} de {t}",
      percentComplete: "{p}% completado",
      back: "Atrás",
      continue: "Continuar",
      seeResults: "Ver mis resultados",
      startOver: "Empezar de nuevo",
      startOverConfirm: "Esto borrará todas tus respuestas y empezará desde el principio. ¿Continuar?",
      required: "Este campo es obligatorio.",
      invalidEmail: "Ingresa un correo empresarial válido.",
      chooseOne: "Selecciona una opción para continuar.",
      optional: "Opcional",
      loading: [
        "Analizando tus respuestas...",
        "Identificando cuellos de botella en ventas...",
        "Evaluando oportunidades de ingresos...",
        "Construyendo tus prioridades de crecimiento..."
      ],
      resultFor: "Diagnóstico preparado para",
      overallLabel: "Elevra Score general",
      outOf: "/ 100",
      scoresTitle: "Tus puntuaciones 360°",
      scoresIntro: "Cada área se puntúa de 0 a 100 según tus respuestas.",
      perceivedTitle: "Percepción vs. datos",
      perceivedLabel: "Lo que crees que es el problema",
      perceivedNone: "No estabas seguro de cuál obstáculo importa más.",
      dataLabel: "Lo que muestran los datos",
      alignMatch: "Tu percepción coincide con el diagnóstico.",
      alignDiff: "El diagnóstico sugiere un cuello de botella principal diferente al identificado inicialmente.",
      alignUnsure: "El diagnóstico identifica un punto de partida claro para ti.",
      noBottleneck: "Ningún cuello de botella crítico",
      alignStrong: "Ninguna área quedó por debajo del umbral de prioridad. Usa tu propia percepción para guiar los ajustes finos.",
      financialTitle: "Exposición financiera",
      exposureLabel: "Exposición potencial de ingresos",
      exposureText: "Según el valor promedio de tu cliente y la cantidad de oportunidades que crees perder cada mes, mejorar tu proceso de ventas podría tener un impacto financiero relevante.",
      exposureTextLow: "Según tus respuestas, la oportunidad en riesgo parece limitada — una buena señal, siempre que tus cifras se estén midiendo.",
      exposureTextUnknown: "Actualmente no sabes cuántas oportunidades se pierden cada mes. Ganar visibilidad sobre ese número suele ser el primer paso para recuperarlo.",
      exposureRangeLabel: "Oportunidad estimada en riesgo",
      exposureRangeUnit: "por mes · indicativo",
      exposureNote: "Este es un rango indicativo basado en tus propias estimaciones, no una pérdida garantizada ni medida.",
      prioritiesTitle: "Tus prioridades",
      prioritiesIntro: "Las áreas con mayor margen de mejora, ordenadas por criticidad.",
      priorityLabel: "Prioridad #{n}",
      issueLabel: "Qué está pasando",
      impactLabel: "Impacto en el negocio",
      recommendationLabel: "Recomendación",
      planTitle: "Tu plan de acción recomendado",
      planIntro: "Solo las soluciones que corresponden a los cuellos de botella detectados en tu diagnóstico.",
      planIssueLabel: "Problema",
      planSolutionLabel: "Solución recomendada",
      strongTitle: "Tu empresa tiene una base sólida.",
      strongText: "No se identificaron cuellos de botella urgentes en las cinco áreas. Sigue midiendo, sigue afinando y repite este diagnóstico a medida que tu negocio evolucione.",
      mainCta: "Construir mi plan de crecimiento",
      mainCtaText: "Habla con un estratega de Elevra sobre las prioridades identificadas en tu diagnóstico.",
      newDiagnostic: "Hacer un nuevo diagnóstico",
      downloadPdf: "Descargar en PDF",
      printDate: "Generado el",
      demoNotice: "Modo demostración: aún no hay una URL de destino configurada para esta acción.",
      footer: "© Elevra Digital. Metodología de diagnóstico propietaria.",
      scoreRingLabel: "Puntuación general"
    },
    sections: {
      company: "Información de la empresa",
      digital: "Presencia digital",
      lead: "Generación de leads",
      response: "Respuesta al cliente",
      conversion: "Conversión de ventas",
      growth: "Inteligencia de crecimiento",
      financial: "Impacto financiero"
    },
    categories: {
      digital: "Presencia Digital",
      lead: "Generación de Leads",
      response: "Respuesta al Cliente",
      conversion: "Conversión de Ventas",
      growth: "Inteligencia de Crecimiento"
    },
    statuses: {
      strong: "Sólido",
      healthy: "Saludable",
      attention: "Requiere Atención",
      risk: "Alto Riesgo",
      critical: "Crítico"
    },
    exposure: {
      low: "Baja",
      moderate: "Moderada",
      high: "Alta",
      significant: "Significativa"
    },
    bottlenecks: {
      digital: {
        name: "Conversión del Sitio Web",
        explanation: "Tu presencia digital no convierte visitantes en consultas de forma consistente. La claridad, las llamadas a la acción o la medición se quedan cortas.",
        impact: "Los prospectos que te investigan en línea pueden irse sin contactarte nunca — y no sabrás que ocurrió.",
        recommendation: "Reconstruir el sitio en torno a la claridad, un siguiente paso evidente y una captura de leads medible."
      },
      lead: {
        name: "Previsibilidad en la Generación de Leads",
        explanation: "Los nuevos negocios dependen de canales que no controlas del todo, y el volumen de oportunidades calificadas no es constante.",
        impact: "El crecimiento se estanca cuando bajan las referencias, y la planificación se vuelve reactiva en lugar de estratégica.",
        recommendation: "Diseñar un sistema de adquisición repetible con canales, objetivos y seguimiento definidos."
      },
      response: {
        name: "Brecha en la Respuesta a Leads",
        explanation: "Las consultas no se responden con suficiente rapidez, algunas llamadas se pierden y la cobertura se detiene fuera del horario laboral.",
        impact: "Cada llamada sin responder o retrasada es un cliente que puede reservar con un competidor en minutos.",
        recommendation: "Garantizar una primera respuesta inmediata, 24/7, que capture información y agende citas."
      },
      conversion: {
        name: "Conversión de Ventas y Seguimiento",
        explanation: "El camino de lead a cliente no está definido, el seguimiento es inconsistente y las ventas perdidas no se analizan.",
        impact: "Los leads que ya pagaste por atraer se escapan después del primer contacto.",
        recommendation: "Documentar el proceso de ventas, implementar un seguimiento estructurado y medir por qué se pierden negocios."
      },
      growth: {
        name: "Previsibilidad y Visibilidad de Ventas",
        explanation: "No puedes ver con claridad qué canales generan ingresos ni cuánto negocio traerán los próximos 90 días.",
        impact: "Las decisiones sobre inversión en marketing y contratación se toman sin datos confiables, aumentando el riesgo.",
        recommendation: "Construir un modelo simple de atribución de ingresos y pipeline para hacer medible el crecimiento."
      }
    },
    solutions: {
      ai: {
        name: "Elevra AI Receptionist™",
        planTitle: "Captura cada oportunidad",
        issue: "Llamadas perdidas y consultas respondidas con retraso.",
        description: "Una recepcionista con inteligencia artificial que responde llamadas de forma natural, asiste a los clientes, captura información y agenda citas — 24/7.",
        cta: "Conocer el AI Receptionist"
      },
      website: {
        name: "Elevra Website",
        planTitle: "Convierte tu sitio web en un activo de ventas",
        issue: "Una presencia digital que no convierte visitantes en leads.",
        description: "Un sitio web de alta conversión, diseñado en torno al recorrido del cliente, la claridad y la generación de leads.",
        cta: "Conocer soluciones de sitio web"
      },
      consulting: {
        name: "Elevra Growth & Sales Consulting",
        planTitle: "Construye un sistema de crecimiento predecible",
        issue: "Brechas en adquisición, proceso de ventas, seguimiento o métricas.",
        description: "Consultoría estratégica enfocada en adquisición, conversión, procesos de ventas, métricas y crecimiento escalable.",
        cta: "Hablar con un estratega"
      }
    },
    questions: {
      companyName: { text: "Nombre de la empresa", placeholder: "ej.: Summit Roofing LLC" },
      contactName: { text: "Tu nombre", placeholder: "Nombre y apellido" },
      email:       { text: "Correo empresarial", placeholder: "nombre@empresa.com" },
      phone:       { text: "Número de teléfono", placeholder: "+1 (555) 000-0000" },
      industry: {
        text: "¿En qué sector está tu empresa?",
        options: {
          home: "Servicios para el hogar", health: "Salud / Médico", beauty: "Belleza / Bienestar",
          realestate: "Bienes raíces", auto: "Automotriz", professional: "Servicios profesionales",
          retail: "Comercio minorista", hospitality: "Hospitalidad", other: "Otro"
        }
      },
      revenue: {
        text: "¿Aproximadamente cuántos ingresos genera tu empresa por mes?",
        options: { u10: "Menos de $10K", "10_25": "$10K–$25K", "25_50": "$25K–$50K", "50_100": "$50K–$100K", "100_250": "$100K–$250K", "250p": "Más de $250K" }
      },
      q7: {
        text: "¿Tu empresa tiene actualmente un sitio web?",
        options: {
          leads: "Sí, y genera leads de forma consistente",
          few: "Sí, pero genera pocos leads",
          outdated: "Sí, pero está desactualizado",
          unknown: "Sí, pero no sé si genera negocio",
          none: "No tenemos sitio web"
        }
      },
      q8: {
        text: "Cuando alguien visita tu sitio web, ¿queda inmediatamente claro qué hace tu empresa y cuál es el siguiente paso?",
        options: { absolutely: "Absolutamente", mostly: "En su mayoría", notreally: "No realmente", no: "No", unknown: "No lo sé", none: "No tenemos sitio web" }
      },
      q9: {
        text: "¿Los clientes pueden actuar fácilmente directamente desde tu sitio web?",
        help: "Por ejemplo: llamar, pedir una cotización, agendar o contactar a tu equipo.",
        options: {
          easy: "Sí, muy fácilmente",
          better: "Sí, pero el proceso podría ser mejor",
          form: "Solo a través de un formulario de contacto básico",
          noaction: "No hay una acción clara",
          none: "No tenemos sitio web"
        }
      },
      q10: {
        text: "¿Sabes aproximadamente cuántos leads genera tu sitio web cada mes?",
        options: { track: "Sí, lo medimos", estimate: "Tengo una estimación", no: "No", noleads: "Nuestro sitio no genera leads", none: "No tenemos sitio web" }
      },
      q11: {
        text: "¿De dónde provienen actualmente la mayoría de tus nuevos clientes?",
        options: {
          referrals: "Referencias", google: "Google", social: "Redes sociales", paid: "Publicidad pagada",
          outbound: "Ventas outbound", partners: "Alianzas", multiple: "Varios canales predecibles", unsure: "No estoy seguro"
        }
      },
      q12: {
        text: "¿Tu empresa genera suficientes oportunidades calificadas para alcanzar sus metas de crecimiento?",
        options: { consistently: "Sí, de forma consistente", most: "La mayoría de los meses", sometimes: "A veces", no: "No", nogoals: "No tenemos metas de crecimiento definidas" }
      },
      q13: {
        text: "Si las referencias se detuvieran mañana, ¿tu empresa aún tendría una forma predecible de generar nuevos negocios?",
        options: { yes: "Sí", probably: "Probablemente", affect: "Nos afectaría significativamente", no: "No", entire: "Las referencias son casi toda nuestra estrategia de adquisición" }
      },
      q14: {
        text: "¿Con qué rapidez responde normalmente tu empresa a una nueva consulta?",
        options: { immediately: "Inmediatamente", u5: "Menos de 5 minutos", "5_30": "5–30 minutos", "30m_2h": "30 minutos–2 horas", o2h: "Más de 2 horas", depends: "Depende" }
      },
      q15: {
        text: "¿Qué pasa cuando alguien llama a tu empresa y tu equipo no puede contestar?",
        options: {
          another: "Otro miembro del equipo contesta", quick: "Devolvemos la llamada rápidamente", voicemail: "Llega al buzón de voz",
          later: "Devolvemos la llamada cuando alguien se libera", lost: "A veces la llamada nunca se recupera", unknown: "No lo sé"
        }
      },
      q16: {
        text: "¿Los clientes pueden llamar fuera del horario laboral y aun así recibir asistencia?",
        options: { always: "Sí, 24/7", limited: "Cobertura limitada fuera de horario", message: "Pueden dejar un mensaje", no: "No" }
      },
      q17: {
        text: "Si un cliente llama ahora mismo queriendo agendar una cita, ¿la persona que contesta puede completar la reserva durante la llamada?",
        options: {
          always: "Sí, siempre", usually: "Generalmente", someone: "Necesita que alguien más lo gestione",
          callback: "Tenemos que devolverle la llamada", no: "No", noappts: "Nuestro negocio no trabaja con citas"
        }
      },
      q18: {
        text: "¿Aproximadamente cuántas llamadas entrantes recibe tu empresa cada mes?",
        options: { u50: "Menos de 50", "50_150": "50–150", "151_300": "151–300", "301_500": "301–500", "500p": "Más de 500", unknown: "No lo sé" }
      },
      q19: {
        text: "¿Sabes aproximadamente qué porcentaje de tus leads se convierten en clientes que pagan?",
        options: { track: "Sí, lo medimos", rough: "Tengo una estimación aproximada", no: "No", notrack: "No lo medimos" }
      },
      q20: {
        text: "¿Qué pasa cuando un lead no compra ni agenda en la primera interacción?",
        options: {
          structured: "Entra en un proceso de seguimiento estructurado", manual: "Nuestro equipo hace seguimiento manualmente",
          sometimes: "Hacemos seguimiento a veces", nothing: "Normalmente no pasa nada", unknown: "No lo sé"
        }
      },
      q21: {
        text: "¿Tu empresa tiene un proceso de ventas definido, desde el nuevo lead hasta el cliente cerrado?",
        options: { documented: "Sí, documentado y medido", informal: "Sí, pero es mayormente informal", depends: "Depende del vendedor", notreally: "No realmente", no: "No" }
      },
      q22: {
        text: "Si te preguntara por qué tus últimas 10 oportunidades no se convirtieron en clientes, ¿podrías mostrarme los datos?",
        options: { yes: "Sí", most: "Para la mayoría", some: "Quizás para algunas", no: "No" }
      },
      q23: {
        text: "¿Sabes qué canales de marketing realmente generan ingresos — no solo leads?",
        options: { clearly: "Sí, claramente", some: "Para algunos canales", leads: "Medimos principalmente leads", no: "No", notrack: "No medimos el desempeño de marketing" }
      },
      q24: {
        text: "¿Qué tan predecible es el pipeline de ventas de tu empresa para los próximos 30–90 días?",
        options: { very: "Muy predecible", fairly: "Bastante predecible", somewhat: "Algo impredecible", unpredict: "Muy impredecible", nopipeline: "No tenemos pipeline" }
      },
      q25: {
        text: "¿Cuál es actualmente el mayor obstáculo que impide que tu empresa crezca más rápido?",
        options: {
          leads: "Pocos leads", website: "El sitio web no convierte", calls: "Llamadas perdidas / respuesta lenta",
          appointments: "Pocas citas", conversion: "Baja conversión de ventas", followup: "Falta de seguimiento",
          salesteam: "Equipo / proceso de ventas", marketing: "Estrategia de marketing", visibility: "Falta de visibilidad de nuestras cifras", unsure: "No estoy seguro"
        }
      },
      q26: {
        text: "¿Cuál es el valor promedio aproximado de un nuevo cliente?",
        options: { u500: "Menos de $500", "500_1k": "$500–$1,000", "1k_2500": "$1,001–$2,500", "2500_5k": "$2,501–$5,000", "5k_10k": "$5,001–$10,000", "10kp": "Más de $10,000" }
      },
      q27: {
        text: "¿Cuántos clientes potenciales crees que tu empresa pierde en un mes promedio por llamadas perdidas, respuestas lentas, seguimiento débil u otros problemas del proceso de ventas?",
        options: { none: "Ninguno", "1_5": "1–5", "6_10": "6–10", "11_25": "11–25", "26p": "Más de 26", unknown: "Sinceramente, no lo sé" }
      }
    }
  }
};
