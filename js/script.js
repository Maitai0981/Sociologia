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
