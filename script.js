document.addEventListener('DOMContentLoaded', () => {
    loadMapData();
});

function loadMapData() {
    const data = [
        {
            "id": 0,
            "name": "Азербайджанский джигит с бубном",
            "description": "На верхнем участке Азербайджанской ССР была сделана круглая площадка, окруженная бортиком с мозаичными изображениями фантастических животных и рельефами из жизни народа. Также была скульптура джигита с бубном. К сожалению, от всего этого не осталось и следа.",
            "status": "lost",
            "x": 22,
            "y": 22,
            "images": [
                "assets/images/0.jpg",
              "assets/images/0.2.jpg",
            ],
            "video": ""
        },
        {
            "id": 1,
            "name": "Белорусский зубр",
            "description": "На площадке Белорусской ССР в верхнем партере, был установлен «Зубр», ставший на долгие годы визитной карточкой парка. На могучего зверя с удовольствием забирались и фотографировались жители и гости города. Но в 2002 году «Зубр» был разломан и похищен из парка.",
            "status": "lost",
            "x": 21.5,
            "y": 24,
            "images": [
                "assets/images/2.jpg",
                "assets/images/2.2.jpg",
                "assets/images/2.3.jpg",
            ], 
            "video": ""
        },
        {
            "id": 2,
            "name": "Камни с петроглифами",
            "description": "На верхнем участке Азербайджанской ССР была сделана круглая площадка, окруженная бортиком с мозаичными изображениями фантастических животных и рельефами из жизни народа.",
            "status": "active",
            "x": 23,
            "y": 26,
            "images": [
                "assets/images/3.jpg",
                "assets/images/3.2.jpg",
                "assets/images/3.3.jpg",
                "assets/images/3.4.jpg",
                "assets/images/3.5.jpg",
                "assets/images/3.6.jpg",
                "assets/images/3.7.jpg",
                "assets/images/3.8.jpg",
                "assets/images/3.9.jpg",
                "assets/images/3.10.jpg",

            ], 
            "video": "assets/images/3.mp4"
        },
        {
            "id": 3,
            "name": "Молдавская девушка с кувшином",
            "description": "Бетонная фигура девушки в национальном костюме с кувшином у «ручья» украшала территорию в верхнем партере. Ручей изображали голубые цветы, посаженные между тремя волнообразно уложенными рядами бетонных бордюров.",
            "status": "active",
            "x": 22.5,
            "y": 28,
            "images": [
                "assets/images/4.jpg",
                "assets/images/4.2.jpg",
                "assets/images/4.3.jpg",
            ],
            "video": "assets/images/6.mp4"
        },
        {
            "id": 4,
            "name": "Казахский барс и олень",
            "description": "На верхнем партере парка была установлена скульптура 'Барс, терзающий оленя'. На сегодняшний день территории Казахстана сохранены в наиболее лучшем виде в отличие от всех остальных.",
            "status": "active",
            "x": 24,
            "y": 30,
            "images": [
                "assets/images/5.jpg",
                "assets/images/5.2.jpg",
            ],
            "video": "assets/images/5.mp4"
        },
        {
            "id": 5,
            "name": "Армянская каменная роза",
            "description": "В верхнем партере была установлена каменная роза, которая, хоть и с повреждениями, но мы можем увидеть и сегодня.",
            "status": "active",
            "x": 23.5,
            "y": 32,
            "images": [
                "assets/images/6.2.jpg",
                "assets/images/6.jpg",
            ],
            "video": "assets/images/4.mp4"
        },
        {
            "id": 5.1,
            "name": "Эстонские ласточки",
            "description": "В верхнем партере участок Эстонии украшала скульптура «Ласточек», которая не сохранилась на сегодняшний день.",
            "status": "lost",
            "x": 24,
            "y": 34,
            "images": [
                "assets/images/1.jpg",
                 "assets/images/1.2.jpg",
            ],
            "video": ""
        },
        {
            "id": 6,
            "name": "Латвийские железные фигуры",
            "description": "В саду Латвии были установлены бронзовые фигурки танцоров в национальных костюмах, которые были похищены из парка.",
            "status": "lost",
            "x": 33,
            "y": 56,
            "images": [
                "assets/images/7.jpg",
            ],
            "video": ""
        },
        {
            "id": 7,
            "name": "Эстонские бегущие лани",
            "description": "Бронзовая скульптура «Бегущих ланей», которая располагалась в нижней части парка, середине 1990-х была сорвана с постамента охотниками за металлом, но их кто-то спугнул. «Оставлять скульптуру в парке работники горзеленхоза не решились, и лани на некоторое время поселились на территории предприятия». В 1997 г. статую установили в сквере возле Дома художника. Но осенью 2001 г. она вновь стала жертвой похитителей.",
            "status": "lost",
            "x": 32,
            "y": 60,
            "images": [
                "assets/images/8.jpg",
            ],
            "video": ""
        },
        {
            "id": 8,
            "name": "Литовские столбы",
            "description": "«Неожиданно, щемящее таинственно выглядят высокие фигурные столбы из дуба с барельефами на темы литовских легенд. Поставили их в октябре 1974 г.». Ныне большинство столбов на территории Литовской ССР порушены и сожжены.",
            "status": "active",
            "x": 38,
            "y": 67,
            "images": [
                "assets/images/9.jpg",
                "assets/images/9.0.jpg",
                "assets/images/9.1.jpg",
                "assets/images/9.2.jpg",
                "assets/images/9.3.jpg",
                "assets/images/9.4.jpg",
                "assets/images/9.5.jpg",
            
            ],
            "video": "assets/images/9.mp4"
        },
        {
            "id": 9,
            "name": "Азербайджанские рельефы",
            "description": "Ниже по склону расположена бетонная стена. Там располагаются рельефы профилей людей в разном возрасте, фраза из национального эпоса, городские виды, сцены, посвященные Великой Отечественной войне и добыче нефти.",
            "status": "active",
            "x": 39,
            "y": 80,
            "images": [
                "assets/images/11.jpg",
                "assets/images/11.2.jpg",
            ],
            "video": ""
        },
        {
            "id": 10,
            "name": "Мать-Грузия",
            "description": "На участке Грузинской ССР была установлена большая бетонная «двусторонняя композиция тбилисского скульптора Джемала Джапаридзе. На ней изображено одухотворенное лицо женщины - символ матери-Грузии. Ее голову украшает диск солнца. Как серьги спадают вниз две виноградные кисти. 10 миниатюр рассказывают о жизни грузинского народа. На оборотной стороне горельефа изображены шестнадцать фигур, символизирующих исконные занятия грузинского народа: выращивание чая, виноградарство, животноводство».",
            "status": "active",
            "x": 38,
            "y": 83,
            "images": [
                "assets/images/10.2.jpg",
                "assets/images/10.1.jpg",
                "assets/images/10.jpg",
                "assets/images/10.3.jpg",
            ],
            "video": ""
        },
        {
            "id": 11,
            "name": "Украинские беседки",
            "description": "Украинцы собирались поставить на своей площадке скульптуру кобзаря, но, в конце концов, установили летящую «женщину» на высоком постаменте. Сделанная из тонкого листового металла с каркасом из труб внутри, «дама» оказалась весьма «разболтанной». Из-за ветров сначала у нее отлетели руки, а затем пала и сама «летящая». Также на территории Украины были установлены беседки, от которых на сегодняшний день ничего не осталось.",
            "status": "lost",
            "x": 50,
            "y": 49,
            "images": [
                "assets/images/12.jpg",
                "assets/images/12.2.jpg",
                "assets/images/12.3.jpg",
            ],
            "video": ""
        },
        {
            "id": 12,
            "name": "Узбекская беседка",
            "description": "Авторы проекта построили из светлого кирпича целый лабиринт внутренних двориков, так характерных для архитектуры старинных восточных городов. Небольшие, как бы вливающиеся один в другой, увитые диким виноградом, затененные кронами деревьев, они выходят на просторную площадку. Настоящим украшением сада являлась видовая беседка. Ее высота 9,5 метра, а высота ее колонн - 6 метров. На украшение беседки пошли бронза и медь, гранит и узбекский мрамор.",
            "status": "active",
            "x": 56,
            "y": 58,
            "images": [
                "assets/images/13.jpg",
                "assets/images/13.2.jpg",
                "assets/images/13.3.jpg",
                "assets/images/13.5.jpg",
                "assets/images/13.4.jpg",
                "assets/images/13.6.jpg",
            ],
            "video": ""
        },
        {
            "id": 13,
            "name": "Казахская девушка с цветком",
            "description": "К зиме 1974 г. завершились работы по обустройству сада в нижней части парка. У входа в сад Казахстана установили бетонную скульптуру девушки с цветком в руке. Дорожки уложили крупным красным гранитом.",
            "status": "active",
            "x": 58,
            "y": 54,
            "images": [
                "assets/images/14.jpg",
                "assets/images/14.2.jpg",
                "assets/images/14.3.jpg",
            ],
            "video": ""
        },
        {
            "id": 14,
            "name": "Казахская юрта",
            "description": "К зиме 1974 г. завершились работы по обустройству сада в нижней части парка.  Центром сада стала «Юрта» из белых железобетонных «лепестков», украшенная изнутри медным орнаментом.",
            "status": "active",
            "x": 62,
            "y": 58,
            "images": [
                "assets/images/15.2.jpg",
                "assets/images/15.jpg",
            ],
            "video": ""
        },
        {
            "id": 15,
            "name": "Молдавские бетонные кружева",
            "description": "Молдавский участок в нижней части парка осенью 1974 г. выглядел следующим образом: «Сплетение бетонных кружев вокруг смотровой площадки имитирует виноградную гроздь. В «кружевах-ягодах», заполненных плодородной землей, были высажены семь тысяч тюльпанов». Ныне территория заросла и очертания частично раскрошившихся «бетонных кружев» угадываются лишь с верхней площадки.",
            "status": "active",
            "x": 51.5,
            "y": 62,
            "images": [
                "assets/images/16.jpg",
            ],
            "video": ""
        },
        {
            "id": 16,
            "name": "Киргизские беседки",
            "description": "Было сооружено несколько железобетоннных каркасов беседок, увитых вьющимися растениями. Дорожки и верхняя площадка были богато обрамлены ковром из лиан (летом - зелёным, осенью - ярко-красным) и глыбами красного гранита.",
            "status": "active",
            "x": 56,
            "y": 63,
            "images": [
                "assets/images/17.2.jpg",
                "assets/images/17.3.jpg",
                "assets/images/17.4.jpg",
                "assets/images/17.5.jpg",
                "assets/images/17.6.jpg",
                "assets/images/17.7.jpg",
            ],
            "video": "assets/images/17.mp4"
        },
        {
            "id": 17,
            "name": "Киргизский бассейн",
            "description": "Киргизская ССР выстроила на своей территории в нижней части парка двухуровневый бассейн с мостком, искусственным водопадом с подсветкой. Дорожки и верхняя площадка были богато обрамлены ковром из лиан (летом - зелёным, осенью - ярко-красным) и глыбами красного гранита.",
            "status": "active",
            "x": 57,
            "y": 67,
            "images": [
                "assets/images/18.jpg",
                "assets/images/18.2.jpg",
                "assets/images/18.3.jpg",
            ],
            "video": ""
        },
        {
            "id": 18,
            "name": "Туркменский камень",
            "description": "Туркменская ССР - песок пустынь из Центральных, Заунгузских и Юго-Восточных Каракумов, большей черный камень и разноцветные тюльпаны. Туркменский участок был оформлен как площадка для отдыха с использованием мрамора и цветного бетона.",
            "status": "active",
            "x": 54,
            "y": 67,
            "images": [
                "assets/images/19.jpg",
                "assets/images/19.2.jpg",
            ],
            "video": ""
        },
        {
            "id": 19,
            "name": "Таджикская плита",
            "description": "На территории Таджикской ССР была установлена плита, изображающая фрагменты из национального праздника - Тоя. На сегодняшний день мы можем наблюдать лишь останки от основания, на котором стояла эта плита.",
            "status": "lost",
            "x": 54.5,
            "y": 70,
            "images": [
                 "assets/images/20.jpg",
            ],
            "video": ""
        },
        {
            "id": 20,
            "name": "Армянский крест и столб",
            "description": "Армянские мастера украсили свой участок в нижней части парка красно-коричневым каменным 4-гранным столбом с красивой разнообразной резьбой: национальными орнаментами, видами архитектурных памятников и символическими сценами из жизни народа.На этом участке в октябре 2006 года появился новый объекты - резной каменный крест.",
            "status": "active",
            "x": 48,
            "y": 77,
            "images": [
                "assets/images/21.jpg",
                "assets/images/21.1.jpg",
                "assets/images/21.2.jpg",
                "assets/images/21.3.jpg",
                "assets/images/21.4.jpg",
                "assets/images/21.5.jpg",
                "assets/images/21.6.jpg",
                "assets/images/21.7.jpg",
            ],
            "video": ""
        },
        {
            "id": 21,
            "name": "Белорусская беседка",
            "description": "Нижний участок Белоруссии был оформлен весьма скромно - в виде беседки-ограды из больших деревянных брусьев. К середине 2000-х гг. большинство из них были разобраны.",
            "status": "lost",
            "x": 40,
            "y": 57,
            "images": [
                "assets/images/22.jpg",
                "assets/images/22.2.jpg",
            ],
            "video": ""
        },
{
            "id": 22,
            "name": "Российские берёзы и ели",
            "description": "«Здесь березы и ели встали ровными рядами, а под ними - ландыши, ромашки и другие полевые цветы, а в центре - тюльпаны и флоксы. Все это подчеркивается строгим русским орнаментом из белой мраморной крошки, которой обрамлен цветник». Таким образом, оформление верхнего партера Российской СФСР ограничилось растительным решением. Также поступили и с участком в нижней части парка.",
            "status": "active",
            "x": 37,
            "y": 40,
            "images": [
                "assets/images/23.jpg",
                "assets/images/23.2.jpg",
            ],
            "video": "assets/images/23.mp4"
        }

    ];

    const mapContainer = document.getElementById('parkMap');

    data.forEach(item => {
        const marker = document.createElement('div');
        marker.classList.add('marker');
        marker.classList.add(item.status);

        marker.style.left = item.x + '%';
        marker.style.top = item.y + '%';

        marker.title = item.name;
        marker.addEventListener('click', () => showDetails(item));

        mapContainer.appendChild(marker);
    });
}

function showDetails(item) {
    const detailsBox = document.getElementById('objectDetails');
    const imgContainer = document.getElementById('objImageContainer');

    document.getElementById('objTitle').innerText = item.name;
    document.getElementById('objDesc').innerText = item.description || "Нет описания.";

    // Статус
    const statusBadge = document.getElementById('objStatus');
    if (item.status === 'active') {
        statusBadge.innerText = "СОХРАНИЛОСЬ";
        statusBadge.className = "status-badge bg-active";
    } else {
        statusBadge.innerText = "УТРАЧЕНО";
        statusBadge.className = "status-badge bg-lost";
    }

    imgContainer.innerHTML = ''; 
    imgContainer.style.display = 'none';

    let photos = [];
    if (item.images && Array.isArray(item.images) && item.images.length > 0) {
        photos = item.images;
    } else if (item.image && item.image.trim() !== "") {
        photos = [item.image];
    }

    if (photos.length > 0) {
        imgContainer.style.display = 'block';
        
        const galleryWrapper = document.createElement('div');
        galleryWrapper.className = 'gallery-wrapper';
        
        const mainImg = document.createElement('img');
        mainImg.src = photos[0];
        mainImg.className = 'gallery-img';
        galleryWrapper.appendChild(mainImg);

        if (photos.length > 1) {
            let currentIndex = 0;
            const counter = document.createElement('div');
            counter.className = 'gallery-counter';
            counter.innerText = `1 / ${photos.length}`;
            galleryWrapper.appendChild(counter);

            const prevBtn = document.createElement('button');
            prevBtn.className = 'gallery-btn prev';
            prevBtn.innerHTML = '&#10094;';
            prevBtn.onclick = () => {
                currentIndex = (currentIndex - 1 + photos.length) % photos.length;
                mainImg.src = photos[currentIndex];
                counter.innerText = `${currentIndex + 1} / ${photos.length}`;
            };
            galleryWrapper.appendChild(prevBtn);

            const nextBtn = document.createElement('button');
            nextBtn.className = 'gallery-btn next';
            nextBtn.innerHTML = '&#10095;';
            nextBtn.onclick = () => {
                currentIndex = (currentIndex + 1) % photos.length;
                mainImg.src = photos[currentIndex];
                counter.innerText = `${currentIndex + 1} / ${photos.length}`;
            };
            galleryWrapper.appendChild(nextBtn);
        }

        imgContainer.appendChild(galleryWrapper);
    }

    const videoContainer = document.getElementById('objVideoContainer');
    videoContainer.innerHTML = ''; 

    if (item.video && item.video.trim() !== "") {
        if (item.video.includes('youtube.com') || item.video.includes('youtu.be')) {
            videoContainer.innerHTML = `<p style="text-align:center; margin-top:10px;">
                <a href="${item.video}" target="_blank" style="color:#5c4b37; font-weight:bold; text-decoration:none; border:1px solid #5c4b37; padding:5px 10px; display:inline-block;">
                    ▶ Смотреть видео на YouTube
                </a></p>`;
        } else {
            videoContainer.innerHTML = `
                <div style="margin-top:10px; text-align:center;">
                    <video controls width="100%" style="border-radius:4px; border:2px solid #8b7355; background:#000; max-height:300px;">
                        <source src="${item.video}" type="video/mp4">
                        Ваш браузер не поддерживает видео.
                    </video>
                </div>
            `;
        }
    }

    detailsBox.classList.remove('hidden');
}

function closeDetails() {
    document.getElementById('objectDetails').classList.add('hidden');
}

function closeWelcome() {
    const welcome = document.getElementById('welcomeScreen');
    const video = document.getElementById('introVideo');
    
    if (video) {
        video.pause();
    }
    
    welcome.classList.add('hidden');
}

function showWelcome() {
    const welcome = document.getElementById('welcomeScreen');
    const video = document.getElementById('introVideo');
    
    welcome.classList.remove('hidden');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (video) {
        video.currentTime = 0; 
    }
}
