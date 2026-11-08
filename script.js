// Серая иконка для тех, у кого нет фото
const NO_PHOTO = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23bdbdbd"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>';

// Вспомогательная функция для расстановки по координатам
// x - отступ по горизонтали, y - номер поколения (0 - вы, 1 - родители, и т.д.)
function p(id, label, image, local, info, x, y) {
    return { data: { id, label, image, local, info, posX: x, posY: y } };
}

const people = [
    // ПОКОЛЕНИЕ 0 (Вы) - Сверху по центру
    p('ilya', 'Илья\nБулыгин', 'photos/ilya.jpg', 'yes', 'Илья Анатольевич. Родился 5.07.2011.', 0, 0),

    // ПОКОЛЕНИЕ 1 (Родители) - Чуть ниже
    p('anatoly', 'Анатолий\nБулыгин', 'photos/anatoly.jpg', 'yes', 'Отец.', -150, 1),
    p('yulia', 'Юлия\nБулыгина', 'photos/yulia.jpg', 'yes', 'Мама.', 150, 1),

    // ПОКОЛЕНИЕ 1.5 (Братья/Сестры и Дяди)
    p('varvara', 'Варвара', 'photos/varvara.jpg', 'yes', 'Сестра.', -250, 1.5),
    p('daniil', 'Даниил', 'photos/daniil.jpg', 'yes', 'Брат.', -50, 1.5),
    p('denis', 'Денис\nБулыгин', 'photos/denis.jpg', 'yes', 'Дядя.', -150, 1.5),

    // ПОКОЛЕНИЕ 2 (Деды и Бабушки)
    p('alexander_b', 'Александр\nБулыгин', 'photos/alexander_b.jpg', 'yes', 'Дед по папе.', -350, 2),
    p('lyubov', 'Любовь\nБулыгина', 'photos/lyubov.jpg', 'yes', 'Бабушка по папе.', -150, 2),
    p('sergey_m', 'Сергей\nМихновец', 'photos/sergey_m.jpg', 'yes', 'Дед по маме.', 50, 2),
    p('svetlana', 'Светлана\nМихновец', 'photos/svetlana.jpg', 'yes', 'Бабушка по маме.', 250, 2),

    // Дяди и тети (Поколение 2.5)
    p('vladimir_b', 'Владимир', 'photos/vladimir_b.jpg', 'yes', 'Двоюродный дед.', -450, 2.5),
    p('mikhail_a_b', 'Михаил', 'photos/mikhail_a_b.jpg', 'yes', 'Двоюродный дед.', -350, 2.5),
    p('evgeny_m', 'Евгений', 'photos/evgeny_m.jpg', 'yes', 'Двоюродный дед.', 50, 2.5),
    p('dmitry_b', 'Дмитрий', 'photos/dmitry_b.jpg', 'yes', 'Двоюродный дед.', 250, 2.5),
    p('viktor_t', 'Виктор\nТуранин', 'photos/viktor_t.jpg', 'yes', 'Двоюродный дед.', -150, 2.5),

    // ПОКОЛЕНИЕ 3 (Прадеды и Прабабушки)
    p('alexander_m', 'Александр\nБулыгин (ст.)', 'photos/alexander_m.jpg', 'yes', 'Прадед.', -400, 3),
    p('klavdia_b', 'Клавдия\nБулыгина', 'photos/klavdia_b.jpg', 'yes', 'Прабабушка.', -300, 3),
    p('anatoly_t', 'Анатолий\nТуранин', 'photos/anatoly_t.jpg', 'no', 'Прадед.', -200, 3),
    p('anfisa', 'Анфиса\nТуранина', 'photos/anfisa.jpg', 'no', 'Прабабушка.', -100, 3),
    p('mikhail_m', 'Михаил\nМихновец', 'photos/mikhail_m.jpg', 'yes', 'Прадед.', 0, 3),
    p('klavdia_m', 'Клавдия\nМихновец', 'photos/klavdia_m.jpg', 'yes', 'Прабабушка.', 100, 3),
    p('nikolay_b', 'Николай\nБелов', 'photos/nikolay_b.jpg', 'yes', 'Прадед.', 200, 3),
    p('antonina', 'Антонина\nБелова', 'photos/antonina.jpg', 'yes', 'Прабабушка.', 300, 3),

    // Братья и сестры прадедов
    p('boris_b', 'Борис', 'photos/boris_b.jpg', 'yes', 'Двоюр. прадед.', -500, 3.5),
    p('lidia_b', 'Лидия', 'photos/lidia_b.jpg', 'no', 'Двоюр. прабабушка.', -400, 3.5),
    p('ignat_m', 'Игнат', 'photos/ignat_m.jpg', 'no', 'Двоюр. прадед.', 0, 3.5),
    p('mikhail_b', 'Михаил\nБелов', 'photos/mikhail_b.jpg', 'no', 'Двоюр. прадед.', 200, 3.5),
    p('evgeny_b', 'Евгений\nБелов', 'photos/evgeny_b.jpg', 'no', 'Двоюр. прадед.', 300, 3.5),

    // ПОКОЛЕНИЕ 4 (Прапрадеды)
    p('makar_b', 'Макар\nБулыгин', 'photos/makar_b.jpg', 'no', 'Прапрадед.', -450, 4),
    p('maria_b', 'Мария\nБулыгина', 'photos/maria_b.jpg', 'no', 'Прапрабабушка.', -350, 4),
    p('iraida_t', 'Ираида\nТуранина', 'photos/iraida_t.jpg', 'no', 'Прапрабабушка.', -150, 4),
    p('nikolay_m', 'Николай\nМихновец', 'photos/nikolay_m.jpg', 'no', 'Прапрадед.', -50, 4),
    p('marta_m', 'Марта\nМихновец', 'photos/marta_m.jpg', 'no', 'Прапрабабушка.', 50, 4),
    p('ivan_b', 'Иван\nБелов', 'photos/ivan_b.jpg', 'yes', 'Прапрадед.', 150, 4),
    p('olga', 'Ольга\nБелова', 'photos/olga.jpg', 'yes', 'Прапрабабушка.', 250, 4),
    p('ivan_h', 'Иван\nХлусов', 'photos/ivan_h.jpg', 'yes', 'Прапрадед.', 0, 4),
    p('pelageya', 'Пелагея', 'photos/pelageya.jpg', 'yes', 'Прапрабабушка.', 100, 4),
    p('petr_f', 'Пётр\nФигуров', 'photos/petr_f.jpg', 'no', 'Прапрадед.', 350, 4),
    p('maria_f', 'Мария\nФигурова', 'photos/maria_f.jpg', 'no', 'Прапрабабушка.', 450, 4),

    // ПОКОЛЕНИЕ 5 (Прапрапрадеды)
    p('irinya_f', 'Иринья', 'photos/irinya_f.jpg', 'no', 'Прапрапрабабушка.', 400, 5)
];

// Невидимые узлы браков (для правильных горизонтальных линий)
const marriages = [
    { id: 'm_anatoly_yulia', parents: ['anatoly', 'yulia'], posX: 0, posY: 1.5 },
    { id: 'm_alexander_lyubov', parents: ['alexander_b', 'lyubov'], posX: -250, posY: 2.5 },
    { id: 'm_sergey_svetlana', parents: ['sergey_m', 'svetlana'], posX: 150, posY: 2.5 },
    { id: 'm_mikhail_klavdia', parents: ['mikhail_m', 'klavdia_m'], posX: 50, posY: 3.5 },
    { id: 'm_alexander_klavdia', parents: ['alexander_m', 'klavdia_b'], posX: -350, posY: 3.5 },
    { id: 'm_nikolay_antonina', parents: ['nikolay_b', 'antonina'], posX: 250, posY: 3.5 },
    { id: 'm_anatoly_anfisa', parents: ['anatoly_t', 'anfisa'], posX: -150, posY: 3.5 },
    { id: 'm_ivan_olga', parents: ['ivan_b', 'olga'], posX: 200, posY: 4.5 },
    { id: 'm_ivan_pelageya', parents: ['ivan_h', 'pelageya'], posX: 50, posY: 4.5 },
    { id: 'm_makar_maria', parents: ['makar_b', 'maria_b'], posX: -400, posY: 4.5 },
    { id: 'm_nikolay_marta', parents: ['nikolay_m', 'marta_m'], posX: 0, posY: 4.5 },
    { id: 'm_petr_maria', parents: ['petr_f', 'maria_f'], posX: 400, posY: 4.5 },
];

const relationships = [];
// Связи между супругами
marriages.forEach(m => {
    relationships.push({ data: { source: m.parents[0], target: m.id, type: 'marriage-link' } });
    relationships.push({ data: { source: m.parents[1], target: m.id, type: 'marriage-link' } });
});

// Связи от браков к детям
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
    { child: 'petr_f', parent: 'm_petr_maria' } // Условная связь
];

childLinks.forEach(link => {
    relationships.push({ data: { source: link.parent, target: link.child, type: 'child-link' } });
});

const elements = [];
people.forEach(p => { elements.push({ data: p.data }); });
marriages.forEach(m => { elements.push({ data: { id: m.id, label: '', posX: m.posX, posY: m.posY }, classes: 'invisible-marriage' }); });
relationships.forEach(r => { elements.push({ data: r.data, classes: r.data.type }); });

// ============================================================
// 3. НАСТРОЙКА ГРАФА (Жесткая сетка)
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
                'border-color': '#ffb300',
                'background-color': '#fff8e1'
            }
        },
        {
            selector: '.invisible-marriage',
            style: {
                'width': 1, 'height': 1, 'background-opacity': 0, 'border-width': 0, 'label': ''
            }
        },
        {
            selector: 'edge.marriage-link',
            style: { 'width': 0, 'line-opacity': 0, 'curve-style': 'straight' }
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
        }
    ],
    // Отключаем авто-раскладку, используем наши координаты
    layout: { 
        name: 'preset',
        positions: function(node) {
            return {
                x: node.data('posX') * 100, // Умножаем на 100 для наглядности
                y: node.data('posY') * 150
            };
        }
    }
});

// Клик по узлу
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

// Экономика (без изменений)
const econData = [
    { title: "Судостроительный завод «Янтарь»", text: "Сергей Михновец (сборщик), Михаил Михновец (крановщик), Клавдия Михновец (маляр), Евгений Михновец." },
    { title: "Завод ЖБИ-1", text: "Антонина Белова (плановик) и Николай Белов (водитель)." },
    { title: "Сельское хозяйство", text: "Любовь Булыгина, Клавдия Булыгина (зверосовхоз)." },
    { title: "Финансы", text: "Юлия Булыгина (Энерготрансбанк), Светлана Михновец (ПАП)." }
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