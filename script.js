// Серая иконка для тех, у кого нет фото
const NO_PHOTO = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23bdbdbd"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>';

const people = [
    // --- ВЫ И БЛИЖАЙШЕЕ ОКРУЖЕНИЕ ---
    { data: { id: 'ilya', label: 'Илья\nБулыгин', image: 'photos/ilya.jpg', local: 'yes', info: 'Илья Анатольевич. Родился 5.07.2011 в Калининграде.' } },
    { data: { id: 'anatoly', label: 'Анатолий\nБулыгин', image: 'photos/anatoly.jpg', local: 'yes', info: 'Отец. Родился 17.11.1987 в пос. Мелиораторов. В 2000 г. переехал в Мамоново. Сварщик.' } },
    { data: { id: 'yulia', label: 'Юлия\nБулыгина', image: 'photos/yulia.jpg', local: 'yes', info: 'Мама. Родилась 9.05.1988 в Калининграде. Специалист ОПЛ в Энерготрансбанке.' } },
    { data: { id: 'denis', label: 'Денис\nБулыгин', image: 'photos/denis.jpg', local: 'yes', info: 'Дядя (брат отца). Родился 8.01.1982. Переехал в Мамоново в 2000 г. Умер 28.05.2010.' } },
    { data: { id: 'varvara', label: 'Варвара\nБулыгина', image: 'photos/varvara.jpg', local: 'yes', info: 'Сестра. Родилась 26.05.2021. Проживает в Мамоново.' } },
    { data: { id: 'daniil', label: 'Даниил\nБулыгин', image: 'photos/daniil.jpg', local: 'yes', info: 'Брат. Родился 21.06.2026. Проживает в Мамоново.' } },

    // --- ДЕДЫ И БАБУШКИ ---
    { data: { id: 'alexander_b', label: 'Александр\nБулыгин', image: 'photos/alexander_b.jpg', local: 'yes', info: 'Дед по папе. Родился 25.05.1959. Провёл детство в Мамоново. Водитель. Умер 27.02.2024.' } },
    { data: { id: 'lyubov', label: 'Любовь\nБулыгина', image: 'photos/lyubov.jpg', local: 'yes', info: 'Бабушка по папе. Родилась 3.10.1960. Работала в Мамоновском зверосовхозе. Умерла 3.10.2020.' } },
    { data: { id: 'sergey_m', label: 'Сергей\nМихновец', image: 'photos/sergey_m.jpg', local: 'yes', info: 'Дед по маме. Родился 5.07.1965 в Калининграде. Работал на заводе «Янтарь». Умер 15.05.2003.' } },
    { data: { id: 'svetlana', label: 'Светлана\nМихновец', image: 'photos/svetlana.jpg', local: 'yes', info: 'Бабушка по маме. Родилась 29.06.1966 в Калинине. Работала на «Янтаре», затем диспетчером.' } },
    { data: { id: 'vladimir_b', label: 'Владимир\nБулыгин', image: 'photos/vladimir_b.jpg', local: 'yes', info: 'Двоюродный дед. Жил в Мамоново. Ликвидатор аварии на ЧАЭС.' } },
    { data: { id: 'mikhail_a_b', label: 'Михаил\nБулыгин', image: 'photos/mikhail_a_b.jpg', local: 'yes', info: 'Двоюродный дед. Жил в Мамоново. Моряк, пропал без вести.' } },
    { data: { id: 'evgeny_m', label: 'Евгений\nМихновец', image: 'photos/evgeny_m.jpg', local: 'yes', info: 'Двоюродный дед. Работал на «Янтаре». Живёт в Евпатории.' } },
    { data: { id: 'dmitry_b', label: 'Дмитрий\nБелов', image: 'photos/dmitry_b.jpg', local: 'yes', info: 'Двоюродный дед. Работал на производстве мяса.' } },
    { data: { id: 'viktor_t', label: 'Виктор\nТуранин', image: 'photos/viktor_t.jpg', local: 'yes', info: 'Двоюродный дед. Умер в Мамоново 10.06.2000.' } },

    // --- ПРАДЕДЫ И ПРАБАБУШКИ ---
    { data: { id: 'mikhail_m', label: 'Михаил\nМихновец', image: 'photos/mikhail_m.jpg', local: 'yes', info: 'Прадед. Работал на «Янтаре» крановщиком. Умер 17.08.1999.' } },
    { data: { id: 'klavdia_m', label: 'Клавдия\nМихновец', image: 'photos/klavdia_m.jpg', local: 'yes', info: 'Прабабушка. Работала на «Янтаре» маляром.' } },
    { data: { id: 'alexander_m', label: 'Александр\nБулыгин (ст.)', image: 'photos/alexander_m.jpg', local: 'yes', info: 'Прадед. Переехал в Мамоново в 1960-х. Умер 28.08.1979.' } },
    { data: { id: 'klavdia_b', label: 'Клавдия\nБулыгина', image: 'photos/klavdia_b.jpg', local: 'yes', info: 'Прабабушка. Жила в Мамоново, работала в зверосовхозе.' } },
    { data: { id: 'nikolay_b', label: 'Николай\nБелов', image: 'photos/nikolay_b.jpg', local: 'yes', info: 'Прадед. Работал водителем на ЖБИ-1, ходил в моря.' } },
    { data: { id: 'antonina', label: 'Антонина\nБелова', image: 'photos/antonina.jpg', local: 'yes', info: 'Прабабушка. Работала плановиком на заводе ЖБИ-1.' } },
    { data: { id: 'anatoly_t', label: 'Анатолий\nТуранин', image: 'photos/anatoly_t.jpg', local: 'no', info: 'Прадед. Ветеран ВОВ, председатель колхоза.' } },
    { data: { id: 'anfisa', label: 'Анфиса\nТуранина', image: 'photos/anfisa.jpg', local: 'no', info: 'Прабабушка. Труженица тыла.' } },

    // --- ПРАПРАДЕДЫ И ПРАПРАБАБУШКИ ---
    { data: { id: 'ivan_b', label: 'Иван\nБелов', image: 'photos/ivan_b.jpg', local: 'yes', info: 'Прапрадед. Участник ВОВ.' } },
    { data: { id: 'olga', label: 'Ольга\nБелова', image: 'photos/olga.jpg', local: 'yes', info: 'Прапрабабушка. Переехала в Калининградскую обл.' } },
    { data: { id: 'ivan_h', label: 'Иван\nХлусов', image: 'photos/ivan_h.jpg', local: 'yes', info: 'Прапрадед. Оборонял Брестскую крепость.' } },
    { data: { id: 'pelageya', label: 'Пелагея\nХлусова', image: 'photos/pelageya.jpg', local: 'yes', info: 'Прапрабабушка.' } },
    { data: { id: 'makar_b', label: 'Макар\nБулыгин', image: 'photos/makar_b.jpg', local: 'no', info: 'Прапрадед.' } },
    { data: { id: 'maria_b', label: 'Мария\nБулыгина', image: 'photos/maria_b.jpg', local: 'no', info: 'Прапрабабушка.' } },
    { data: { id: 'nikolay_m', label: 'Николай\nМихновец', image: 'photos/nikolay_m.jpg', local: 'no', info: 'Прапрадед.' } },
    { data: { id: 'marta_m', label: 'Марта\nМихновец', image: 'photos/marta_m.jpg', local: 'no', info: 'Прапрабабушка.' } },
    { data: { id: 'petr_f', label: 'Пётр\nФигуров', image: 'photos/petr_f.jpg', local: 'no', info: 'Прапрадед. Участник ВОВ.' } },
    { data: { id: 'maria_f', label: 'Мария\nФигурова', image: 'photos/maria_f.jpg', local: 'no', info: 'Прапрабабушка.' } },
    { data: { id: 'iraida_t', label: 'Ираида\nТуранина', image: 'photos/iraida_t.jpg', local: 'no', info: 'Прапрабабушка.' } },
    { data: { id: 'irinya_f', label: 'Иринья\nФигурова', image: 'photos/irinya_f.jpg', local: 'no', info: 'Прапрапрабабушка.' } },

    // --- БРАТЬЯ, СЕСТРЫ, ДЯДИ, ТЕТИ ---
    { data: { id: 'boris_b', label: 'Борис\nБулыгин', image: 'photos/boris_b.jpg', local: 'yes', info: 'Двоюродный прадед. Работал на рыбкомбинате.' } },
    { data: { id: 'lidia_b', label: 'Лидия\nБулыгина', image: 'photos/lidia_b.jpg', local: 'no', info: 'Двоюродная прабабушка.' } },
    { data: { id: 'ignat_m', label: 'Игнат\nМихновец', image: 'photos/ignat_m.jpg', local: 'no', info: 'Двоюродный прадед.' } },
    { data: { id: 'mikhail_b', label: 'Михаил\nБелов', image: 'photos/mikhail_b.jpg', local: 'no', info: 'Двоюродный прадед. Участник ВОВ.' } },
    { data: { id: 'evgeny_b', label: 'Евгений\nБелов', image: 'photos/evgeny_b.jpg', local: 'no', info: 'Двоюродный прадед.' } },
    { data: { id: 'nikolay_f', label: 'Николай\nФигуров', image: 'photos/nikolay_f.jpg', local: 'no', info: 'Двоюродный прадед.' } },
    { data: { id: 'nina_m', label: 'Нина\nМочалкина', image: 'photos/nina_m.jpg', local: 'no', info: 'Двоюродная прабабушка.' } },
    { data: { id: 'zoya', label: 'Зоя', image: 'photos/zoya.jpg', local: 'no', info: 'Двоюродная прабабушка.' } },
    { data: { id: 'valentina_p', label: 'Валентина\nПодопригора', image: 'photos/valentina_p.jpg', local: 'no', info: 'Двоюродная прабабушка.' } },
    { data: { id: 'ekaterina_k', label: 'Екатерина\nКузнецова', image: 'photos/ekaterina_k.jpg', local: 'no', info: 'Двоюродная прабабушка.' } }
];

// Создаем невидимые узлы для браков
const marriages = [
    { id: 'm_ilya', parents: ['ilya'] }, // Одиночный узел для Ильи
    { id: 'm_anatoly_yulia', parents: ['anatoly', 'yulia'] },
    { id: 'm_alexander_lyubov', parents: ['alexander_b', 'lyubov'] },
    { id: 'm_sergey_svetlana', parents: ['sergey_m', 'svetlana'] },
    { id: 'm_mikhail_klavdia', parents: ['mikhail_m', 'klavdia_m'] },
    { id: 'm_alexander_klavdia', parents: ['alexander_m', 'klavdia_b'] },
    { id: 'm_nikolay_antonina', parents: ['nikolay_b', 'antonina'] },
    { id: 'm_anatoly_anfisa', parents: ['anatoly_t', 'anfisa'] },
    { id: 'm_anatoly_iraida', parents: ['anatoly_t', 'iraida_t'] },
    { id: 'm_ivan_olga', parents: ['ivan_b', 'olga'] },
    { id: 'm_ivan_pelageya', parents: ['ivan_h', 'pelageya'] },
    { id: 'm_makar_maria', parents: ['makar_b', 'maria_b'] },
    { id: 'm_nikolay_marta', parents: ['nikolay_m', 'marta_m'] },
    { id: 'm_petr_maria', parents: ['petr_f', 'maria_f'] }
];

const relationships = [];
marriages.forEach(m => {
    if (m.parents.length === 2) {
        relationships.push({ data: { source: m.parents[0], target: m.id, type: 'marriage-link' } });
        relationships.push({ data: { source: m.parents[1], target: m.id, type: 'marriage-link' } });
    }
});

const childLinks = [
    { child: 'ilya', parent: 'm_anatoly_yulia' },
    { child: 'varvara', parent: 'm_anatoly_yulia' },
    { child: 'daniil', parent: 'm_anatoly_yulia' },
    { child: 'anatoly', parent: 'm_alexander_lyubov' },
    { child: 'denis', parent: 'm_alexander_lyubov' },
    { child: 'yulia', parent: 'm_sergey_svetlana' },
    { child: 'sergey_m', parent: 'm_mikhail_klavdia' },
    { child: 'evgeny_m', parent: 'm_mikhail_klavdia' },
    { child: 'alexander_b', parent: 'm_alexander_klavdia' },
    { child: 'vladimir_b', parent: 'm_alexander_klavdia' },
    { child: 'mikhail_a_b', parent: 'm_alexander_klavdia' },
    { child: 'svetlana', parent: 'm_nikolay_antonina' },
    { child: 'dmitry_b', parent: 'm_nikolay_antonina' },
    { child: 'lyubov', parent: 'm_anatoly_anfisa' },
    { child: 'viktor_t', parent: 'm_anatoly_anfisa' },
    { child: 'anatoly_t', parent: 'm_anatoly_iraida' },
    { child: 'nikolay_b', parent: 'm_ivan_olga' },
    { child: 'mikhail_b', parent: 'm_ivan_olga' },
    { child: 'evgeny_b', parent: 'm_ivan_olga' },
    { child: 'klavdia_m', parent: 'm_ivan_pelageya' },
    { child: 'alexander_m', parent: 'm_makar_maria' },
    { child: 'boris_b', parent: 'm_makar_maria' },
    { child: 'lidia_b', parent: 'm_makar_maria' },
    { child: 'mikhail_m', parent: 'm_nikolay_marta' },
    { child: 'ignat_m', parent: 'm_nikolay_marta' },
    { child: 'antonina', parent: 'm_petr_maria' },
    { child: 'nikolay_f', parent: 'm_petr_maria' },
    { child: 'nina_m', parent: 'm_petr_maria' },
    { child: 'zoya', parent: 'm_petr_maria' },
    { child: 'valentina_p', parent: 'm_petr_maria' },
    { child: 'ekaterina_k', parent: 'm_petr_maria' },
    { child: 'petr_f', parent: 'm_petr_maria' }
];

childLinks.forEach(link => {
    relationships.push({ data: { source: link.parent, target: link.child, type: 'child-link' } });
});

const elements = [];
people.forEach(p => { elements.push({ data: p.data }); });
marriages.forEach(m => { 
    if(m.parents.length === 2) elements.push({ data: { id: m.id, label: '' }, classes: 'invisible-marriage' }); 
});
relationships.forEach(r => { elements.push({ data: r.data, classes: r.data.type }); });

// ============================================================
// 3. НАСТРОЙКА ГРАФА
// ============================================================
const cy = cytoscape({
    container: document.getElementById('cy'),
    elements: elements,
    style: [
        {
            selector: 'node',
            style: {
                'background-color': '#a5d6a7',
                'background-image': function(ele) {
                    return ele.data('image') ? ele.data('image') : NO_PHOTO;
                },
                'background-fit': 'cover',
                'label': 'data(label)',
                'color': '#1b5e20',
                'text-valign': 'bottom',
                'text-halign': 'center',
                'text-margin-y': 4,
                'font-size': '10px',
                'font-weight': 'bold',
                'text-outline-color': '#ffffff',
                'text-outline-width': 2,
                'width': '60px',
                'height': '60px',
                'shape': 'ellipse',
                'text-wrap': 'wrap',
                'text-max-width': '80px',
                'border-width': 2,
                'border-color': '#81c784'
            }
        },
        {
            selector: 'node[local = "yes"]',
            style: {
                'border-width': 4,
                'border-color': '#ffb300', // Янтарная рамка
                'background-color': '#fff8e1'
            }
        },
        {
            selector: '.invisible-marriage',
            style: {
                'width': 1,
                'height': 1,
                'background-opacity': 0,
                'border-width': 0,
                'label': ''
            }
        },
        {
            selector: 'edge.marriage-link',
            style: {
                'width': 0,
                'line-opacity': 0,
                'curve-style': 'straight'
            }
        },
        {
            selector: 'edge.child-link',
            style: {
                'width': 2,
                'line-color': '#81c784',
                'target-arrow-color': '#81c784',
                'target-arrow-shape': 'triangle',
                'curve-style': 'taxi', // Прямые углы
                'taxi-direction': 'downward',
                'taxi-turn': '50%',
                'arrow-scale': 0.8
            }
        },
        {
            selector: 'node:selected',
            style: { 'border-width': 6, 'border-color': '#ff6f00' }
        }
    ],
    // ВАЖНО: Используем layout 'breadthfirst' с направлением вниз
    layout: { 
        name: 'breadthfirst', 
        directed: true, 
        padding: 30, 
        spacingFactor: 1.2,
        avoidOverlap: true,
        roots: ['ilya'] // Илья на самом верху
    }
});

cy.on('tap', 'node', function (evt) {
    if (evt.target.hasClass('invisible-marriage')) return;
    const data = evt.target.data();
    showInfoCard(data.label.replace(/\n/g, ' '), data.image, data.info);
});

function showInfoCard(title, image, info) {
    const old = document.getElementById('info-card');
    if (old) old.remove();
    const finalImage = image ? image : NO_PHOTO;
    const card = document.createElement('div');
    card.id = 'info-card';
    card.innerHTML = `
        <button class="close-btn" onclick="this.parentElement.remove()">×</button>
        <img src="${finalImage}" alt="${title}">
        <h2>${title}</h2>
        <p>${info || 'Описание пока не добавлено.'}</p>
    `;
    document.body.appendChild(card);
}

// ============================================================
// 4. ЭКОНОМИКА И ВКЛАДКИ
// ============================================================
const econData = [
    { title: "Судостроительный завод «Янтарь»", text: "Сергей Михновец (сборщик КМС), Михаил Михновец (крановщик, слесарь), Клавдия Михновец (маляр), Евгений Михновец (рабочий)." },
    { title: "Завод ЖБИ-1", text: "Антонина Белова (плановик) и Николай Белов (водитель)." },
    { title: "Сельское хозяйство и рыболовство", text: "Любовь Булыгина (Мамоновский зверосовхоз), Клавдия Булыгина (совхоз), Николай Белов (моряк), Михаил Булыгин (моряк)." },
    { title: "Рыбоконсервный комбинат", text: "Борис Булыгин (тарный цех в Мамоново)." },
    { title: "Финансы и инфраструктура", text: "Юлия Булыгина (Энерготрансбанк), Светлана Михновец (диспетчер ПАП)." },
    { title: "Ликвидация катастроф", text: "Владимир Булыгин (ликвидатор аварии на ЧАЭС)." }
];

function renderEconList() {
    const container = document.getElementById('econ-list');
    container.innerHTML = '';
    econData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'econ-card';
        card.innerHTML = `<h3>${item.title}</h3><p>${item.text}</p>`;
        container.appendChild(card);
    });
}

function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('nav button').forEach(el => el.classList.remove('active'));

    if (tabName === 'tree') {
        document.getElementById('tab-tree').classList.add('active');
        document.getElementById('btn-tree').classList.add('active');
        cy.resize(); 
    } else if (tabName === 'econ') {
        document.getElementById('tab-econ').classList.add('active');
        document.getElementById('btn-econ').classList.add('active');
    }
}
renderEconList();