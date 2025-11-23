document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');
    const glossaryTitle = document.getElementById('glossary-title');
    const glossaryContent = document.getElementById('glossary-content');
    const contentArea = document.querySelector('.content-area');

    // Glossary Data
    const glossaryData = {
        'default': {
            title: 'Glossário',
            content: 'Passe o mouse sobre os termos destacados para ver a definição sociológica.'
        },
        'Sincretismo': {
            title: 'Sincretismo',
            content: 'Fusão de diferentes doutrinas ou culturas. Aqui, refere-se à técnica indígena adaptada à lógica econômica colonial.'
        },
        'Gentrificação': {
            title: 'Gentrificação Alimentar',
            content: 'Processo onde alimentos populares são apropriados pela elite, tornando-se caros e exclusivos.'
        },
        'Habitus': {
            title: 'Habitus (Bourdieu)',
            content: 'Disposições adquiridas (jeito de fazer, pensar) que refletem a trajetória social do indivíduo.'
        },
        'Decolonialidade': {
            title: 'Decolonialidade',
            content: 'Pensamento e prática que buscam desfazer as hierarquias de poder herdadas do colonialismo.'
        },
        'Estigmatização': {
            title: 'Estigmatização Social',
            content: 'Processo de desvalorização simbólica de grupos, práticas ou produtos. Reduz identidades a estereótipos negativos (Goffman).'
        },
        'MatrizCivilizatória': {
            title: 'Matriz Civilizatória',
            content: 'Conjunto de técnicas, saberes e cosmologias que organizam uma sociedade em torno de bases materiais e simbólicas.'
        },
        'SoberaniaAlimentar': {
            title: 'Soberania Alimentar',
            content: 'Direito dos povos definirem suas próprias políticas e práticas de produção, distribuição e consumo de alimentos.'
        },
        'Cosmologia': {
            title: 'Cosmologia',
            content: 'Sistema de crenças que explica a origem e organização do mundo. Inclui mitos, rituais e relações entre humanos e não-humanos.'
        },
        'Reciprocidade': {
            title: 'Reciprocidade',
            content: 'Sistema de trocas baseado em obrigações mútuas e vínculos sociais, não apenas em valor monetário (Mauss).'
        },
        'DivisãoSexualTrabalho': {
            title: 'Divisão Sexual do Trabalho',
            content: 'Distribuição desigual de tarefas entre gêneros, frequentemente naturalizando papéis e invisibilizando o trabalho feminino.'
        },
        'ApropriaçãoCultural': {
            title: 'Apropriação Cultural',
            content: 'Uso de elementos culturais por grupos dominantes sem reconhecimento, compensação ou respeito às comunidades de origem.'
        },
        'PatrimônioCultural': {
            title: 'Patrimônio Cultural',
            content: 'Bens materiais e imateriais de valor histórico, artístico e identitário, reconhecidos como herança coletiva.'
        },
        'Invisibilização': {
            title: 'Invisibilização',
            content: 'Apagamento sistemático de grupos, saberes ou práticas da narrativa dominante e das políticas públicas.'
        },
        'TecnologiaSocial': {
            title: 'Tecnologia Social',
            content: 'Conjunto de técnicas e procedimentos desenvolvidos coletivamente, voltados para a transformação social e inclusão.'
        },
        'Colonialidade': {
            title: 'Colonialidade',
            content: 'Permanência das estruturas de poder, saber e ser criadas pelo colonialismo, mesmo após a independência formal (Quijano).'
        },
        'Bourdieu': {
            title: 'Pierre Bourdieu (1930-2002)',
            content: 'Sociólogo francês. Desenvolveu conceitos fundamentais como habitus, capital cultural e violência simbólica.'
        },
        'Cascudo': {
            title: 'Luís da Câmara Cascudo (1898-1986)',
            content: 'Antropólogo e folclorista brasileiro. Autor de "História da Alimentação no Brasil", obra fundamental sobre cultura alimentar.'
        },
        'Goffman': {
            title: 'Erving Goffman (1922-1982)',
            content: 'Sociólogo canadense. Teorizou sobre estigma, interação social e apresentação do self na vida cotidiana.'
        },
        'Mauss': {
            title: 'Marcel Mauss (1872-1950)',
            content: 'Antropólogo francês. Autor de "Ensaio sobre a Dádiva", obra sobre sistemas de troca e reciprocidade.'
        },
        'Quijano': {
            title: 'Aníbal Quijano (1928-2018)',
            content: 'Sociólogo peruano. Teórico da colonialidade do poder e do pensamento decolonial latino-americano.'
        },
        'IBGE': {
            title: 'IBGE',
            content: 'Instituto Brasileiro de Geografia e Estatística. Órgão federal responsável por dados estatísticos e geográficos do Brasil.'
        },
        'Almeida': {
            title: 'Alfredo Wagner Berno de Almeida',
            content: 'Antropólogo brasileiro. Especialista em territorialidades, conflitos agrários e direitos de comunidades tradicionais.'
        },
        'ODwyer': {
            title: 'Eliane Cantarino O\'Dwyer',
            content: 'Antropóloga brasileira. Pesquisadora de identidade étnica, quilombos e territorialidade no Brasil.'
        },
        'Posey': {
            title: 'Darrell Addison Posey (1947-2001)',
            content: 'Etnobiólogo americano. Pioneiro nos estudos sobre conhecimento ecológico tradicional de povos indígenas.'
        }
    };

    // Scroll Spy
    contentArea.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Check if section is in middle of viewport
            if (contentArea.scrollTop >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').includes(current)) {
                item.classList.add('active');
            }
        });

        // Trigger animations if needed (e.g. progress bar)
        if (current === 'conflitos') {
            document.getElementById('price-bar').style.width = '100%';
        } else {
            document.getElementById('price-bar').style.width = '0%';
        }
    });

    // Glossary Interactivity
    const concepts = document.querySelectorAll('.concept-highlight');
    concepts.forEach(concept => {
        concept.addEventListener('mouseenter', () => {
            const term = concept.getAttribute('data-term');
            if (glossaryData[term]) {
                glossaryTitle.textContent = glossaryData[term].title;
                glossaryContent.textContent = glossaryData[term].content;
                glossaryTitle.parentElement.style.backgroundColor = 'rgba(46, 125, 50, 0.2)'; // Green tint
            }
        });

        concept.addEventListener('mouseleave', () => {
            glossaryTitle.textContent = glossaryData['default'].title;
            glossaryContent.textContent = glossaryData['default'].content;
            glossaryTitle.parentElement.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        });
    });

    // Flip Card Logic
    const flipCard = document.querySelector('.flip-card');
    if (flipCard) {
        flipCard.addEventListener('click', () => {
            flipCard.classList.toggle('flipped');
        });
    }

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            // Scroll to next section logic could go here, but native scroll is usually fine
        }
    });
});
