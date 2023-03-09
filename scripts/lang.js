/*////////////////// LANGUAGE CHANGE /////////////////// */

'use strict';

let result;
const data = [];
const savedData = JSON.parse(localStorage.getItem('client'));

function upDate() {
    const select = document.querySelector('.select-lang');
    result = select.options[select.selectedIndex].value;

    data.push(result);

    localStorage.setItem('client', JSON.stringify(data));

    changer(result);
}

function onLoadChanger() {
    const select = document.querySelector('.select-lang');
    select.value = savedData[savedData.length - 1];

    changer(savedData[savedData.length - 1]);
}

function changer(result) {
    /* shared */
    const visitedPlacesLink1 = document.querySelector('.toplink-1');
    const visitedPlacesLink2 = document.querySelector('.toplink-2');

    /* index */
    const indexGreetingsHeader = document.querySelector('.index-greetings--header');
    const indexGreetingsContent1 = document.querySelector('.index-greetings--content1');
    const allPlaceLinkContent = document.querySelector('.all-place--link_content');
    const topPlaceLinkContent = document.querySelector('.top-place--link_content');
    const topPlacesHeader = document.querySelector('.top-places--header');

    /* about */
    const aboutContent1 = document.querySelector('.about-greetings--content1');
    const aboutContent2 = document.querySelector('.about-greetings--content2');
    const aboutContent3 = document.querySelector('.about-greetings--content3');
    const developerSiteLink = document.querySelector('.developer-site--link');
    const socialMediaLink = document.querySelector('.social-media--link');

    /* main_countries */
    const explore = document.querySelectorAll('.explore');
    const cambodiaDesc = document.querySelector('.cambodia-description');
    const egyptDesc = document.querySelector('.egypt-description');
    const indiaDesc = document.querySelector('.india-description');
    const indonesiaDesc = document.querySelector('.indonesia-description');
    const israelDesc = document.querySelector('.israel-description');
    const thailandDesc = document.querySelector('.thailand-description');
    const tunisiaDesc = document.querySelector('.tunisia-description');
    const turkyeDesc = document.querySelector('.turkye-description');
    const ukraineDesc = document.querySelector('.ukraine-description');
    const vietnamDesc = document.querySelector('.vietnam-description');

    /* cambodia_places */
    const CambDescHeader1 = document.querySelector('.cambodia-description--header1');
    const CambDescText1 = document.querySelector('.cambodia-description--text1');
    const CambDescHeader2 = document.querySelector('.cambodia-description--header2');
    const CambDescText2 = document.querySelector('.cambodia-description--text2');
    const CambDescHeader3 = document.querySelector('.cambodia-description--header3');
    const CambDescText3 = document.querySelector('.cambodia-description--text3');

    /* egypt */
    const egyptDescHeader = document.querySelector('.egypt-description--header');
    const egyptDescText = document.querySelector('.egypt-description--text');

    /* india */
    const indiaDescHeader1 = document.querySelector('.india-desc--header1');
    const indiaDescHeader2 = document.querySelector('.india-desc--header2');
    const indiaDescHeader3 = document.querySelector('.india-desc--header3');
    const indiaDescHeader4 = document.querySelector('.india-desc--header4');
    const indiaDescText1 = document.querySelector('.india-desc--text1');
    const indiaDescText2 = document.querySelector('.india-desc--text2');
    const indiaDescText3 = document.querySelector('.india-desc--text3');
    const indiaDescText4 = document.querySelector('.india-desc--text4');

    /* israel */
    const israelDescHeader1 = document.querySelector('.israel-desc--header1');
    const israelDescHeader2 = document.querySelector('.israel-desc--header2');
    const israelDescHeader3 = document.querySelector('.israel-desc--header3');
    const israelDescHeader4 = document.querySelector('.israel-desc--header4');
    const israelDescHeader5 = document.querySelector('.israel-desc--header5');
    const israelDescText1 = document.querySelector('.israel-desc--text1');
    const israelDescText2 = document.querySelector('.israel-desc--text2');
    const israelDescText3 = document.querySelector('.israel-desc--text3');
    const israelDescText4 = document.querySelector('.israel-desc--text4');
    const israelDescText5 = document.querySelector('.israel-desc--text5');

    /* thailand */
    const thaiDescHeader1 = document.querySelector('.thai-desc--header1');
    const thaiDescHeader2 = document.querySelector('.thai-desc--header2');
    const thaiDescHeader3 = document.querySelector('.thai-desc--header3');
    const thaiDescHeader4 = document.querySelector('.thai-desc--header4');
    const thaiDescHeader5 = document.querySelector('.thai-desc--header5');
    const thaiDescText1 = document.querySelector('.thai-desc--text1');
    const thaiDescText2 = document.querySelector('.thai-desc--text2');
    const thaiDescText3 = document.querySelector('.thai-desc--text3');
    const thaiDescText4 = document.querySelector('.thai-desc--text4');
    const thaiDescText5 = document.querySelector('.thai-desc--text5');

    /* tunisia */
    const tunisiaDescHeader1 = document.querySelector('.tunisia-desc--header1');
    const tunisiaDescText1 = document.querySelector('.tunisia-desc--text1');

    /* vietnam */
    const vietnamDescHeader1 = document.querySelector('.vietnam-desc--header1');
    const vietnamDescText1 = document.querySelector('.vietnam-desc--text1');

    /* turkye */
    const turkyeDescHeader1 = document.querySelector('.turkie-desc--header1');
    const turkyeDescHeader2 = document.querySelector('.turkie-desc--header2');
    const turkyeDescHeader3 = document.querySelector('.turkie-desc--header3');
    const turkyeDescHeader4 = document.querySelector('.turkie-desc--header4');
    const turkyeDescHeader5 = document.querySelector('.turkie-desc--header5');
    const turkyeDescText1 = document.querySelector('.turkie-desc--text1');
    const turkyeDescText2 = document.querySelector('.turkie-desc--text2');
    const turkyeDescText3 = document.querySelector('.turkie-desc--text3');
    const turkyeDescText4 = document.querySelector('.turkie-desc--text4');
    const turkyeDescText5 = document.querySelector('.turkie-desc--text5');

    /* indonesia */
    const baliDescHeader1 = document.querySelector('.bali-desc--header1');
    const baliDescHeader2 = document.querySelector('.bali-desc--header2');
    const baliDescText1 = document.querySelector('.bali-desc--text1');
    const baliDescText2 = document.querySelector('.bali-desc--text2');

    /* /////////////////////////// UKRAINE /////////////////////////////////// */

    if (result === 'Ukraine') {
        visitedPlacesLink1.textContent = 'Де я був';
        visitedPlacesLink2.textContent = 'Про мене';

        /* main page */
        if (indexGreetingsHeader) {
            /* check if indexGreetingsHeader class exist on the page, than changing text, other case no. bsc without this checking we`l get an error. and we should do this on every page */
            indexGreetingsHeader.textContent = 'Привіт!';
            indexGreetingsContent1.textContent =
                'Мене звати Микола, і це мій особистий сайт, де я викладаю фотографії, відео та іншу інформацію про місця, які я відвідав у різних країнах світу.';
            allPlaceLinkContent.innerHTML = 'Дивитися всі місця';
            topPlaceLinkContent.textContent = 'Дивіться на мої топові місця';
            topPlacesHeader.textContent = 'Топові місця';
        }

        /* about page */
        if (aboutContent1) {
            aboutContent1.textContent =
                "Я почав мандрувати у віці 18 років, тому що це було пов'язано з моєю роботою. Близько 15 років тому якість мого обладнання, а також мої навички в зйомці були невисокі, але зараз все змінилося, через багато років я знову почав подорожувати і переключився від фотографії до відеозйомки та монтажу.";
            aboutContent2.textContent =
                'Також я став веб-розробником, і це один із перших веб-сайтів, створених власноруч. Більше про мене як про веб-розробника та всі мої роботи ви можете побачити';
            aboutContent3.textContent = 'Щоб підписатися на мої соціальні мережі та зв’язатися зі мною, прокрутіть сторінку вниз';
            developerSiteLink.textContent = 'за цим посиланням';
            socialMediaLink.textContent = 'або скористайтеся цим посиланням.';
        }

        /* places page */
        if (cambodiaDesc && explore) {
            explore.forEach(a => (a.innerHTML = `Дивитися &#x2192`));
            cambodiaDesc.textContent =
                'Цікава та водночас загадкова з історичної точки зору країна. Бідна, гостинна, дуже корумпована. Тривалість подорожей: 3 дні.';
            egyptDesc.textContent =
                'Загадкова історія Єгипту... Досі немає достовірної відповіді, хто і як побудував усі ті численні будови давнини. Але яке красиве Червоне море! Тривалість подорожей: 5 місяців.';
            indiaDesc.textContent =
                'Неосяжна країна. Славитися своєю кухнею, давньою історією, природою, архітектурними та історичними спорудами. Тривалість подорожей: 10 місяців.';
            indonesiaDesc.textContent =
                "Країна тисяч островів. Незвичайна флора та фауна, вулкани, історичні пам'ятки, гостинність. Тривалість подорожей: 1 місяць.";
            israelDesc.textContent =
                'Невелика, але дуже розвинена, самобутня країна. Славитися курортами мертвого моря є головним релігійним центром християн, одним з провідних технологічних центрів у світі. Тривалість подорожей: 6 місяців.';
            thailandDesc.textContent =
                "Люблю цю сонячну контрастну країну. Море, їжа, люди, природа, історичні пам'ятки. Тривалість подорожей: 1 місяц.";
            tunisiaDesc.textContent =
                "Найбільш світська, розвинена та північна мусульманська країна в Африці. Славитися своїми СПА-курортами, історичними пам'ятками та пустелею Сахара. Тривалість подорожей: 10 місяців.";
            turkyeDesc.textContent =
                "Гостинна мусульманська страна, яка славиться своїми морськими курортами, кухнею, культурою та багатьма всесвітньовідомими історичними пам'ятками. Тривалість подорожей: 18 місяців.";
            ukraineDesc.textContent =
                'Хочу висловити свою підтримку Україні, я бажаю, щоб війна закінчилася якнайшвидше і винні в ній були покарані.';
            vietnamDesc.textContent =
                'Мальовнича, самобутня країна, що швидко розвивається. Має всі переваги прибережних азіатських країн. Безліч красивих місць по всій країні. Тривалість подорожей: 1 місяць.';
        }

        /* cambodia_places */

        if (CambDescHeader1) {
            CambDescHeader1.textContent = 'Ангкор Ват. 2022';
            CambDescHeader2.textContent = 'Храми Ангкор. 2022 рік';
            CambDescHeader3.textContent = 'Храми Ангкор. Фото';
            CambDescText1.textContent =
                'Це грандіозна релігійна споруда, якщо бути точною, найбільша у світі, зроблена з каменю. Є головним храмом у храмовому комплексі із сотнею інших храмів, розкинутих на території кілька тисяч квадратних кілометрів. Безліч дослідників давнини сумніваються в офіційній версії його походження і призначення і не просто, як і у випадку з пірамідами Гізи в Єгипті, залишається більше питань, ніж відповідей.';
            CambDescText2.textContent =
                'Крім Ангкор Ват, комплекс налічує безліч інших, колись чудових, величних храмів, таких як Байон, Бентай, Та Кео, Пном Бакхенг, Та Пром, Бантей Кдей, Пре Руп, Пресс Краван та інші.';
            CambDescText3.textContent = '';
        }

        /* egypt */

        if (egyptDescHeader) {
            egyptDescHeader.textContent = 'Єгипет';
            egyptDescText.textContent =
                'Не стабільна економіка, не стабільна політична ситуація, не роблять цю країну гостинною. Незважаючи на це багато людей обирають цю країну не тільки для готельного відпочинку, але і для більш тривалого проживання. Тому що це дуже не дорога країна для проживання, ідеальний дайвінг та просто феноменальні історичні місця. Про піраміди, вкрай раджу знайти на ютубі документальний фільм "Одкровення Пірамід" Патріс Пуйара, який зібрав десятки мільйонів переглядів, перекладений багатьма мовами і, заборонений до показу в більшості країн на ютубі.';
        }

        /* india */
        if (indiaDescHeader1) {
            indiaDescHeader1.textContent = 'ГОА - Основне';
            indiaDescHeader2.textContent = 'ГОА - Пляжі';
            indiaDescHeader3.textContent = 'Хампі';
            indiaDescHeader4.textContent = 'Гокарна';
            indiaDescText1.textContent =
                'ГОА - найменший із 29 штатів в Індії. Як кажуть, ГОА – це вікно до Ідії для європейців та вікно до Європи для індусів. У ГОА сформувалася певна культура з 1960-х років, що стало залучати туристів з усього світу. Примітно, що Стів Джобс, засновник техногіганта Apple, відвідував ГОА для того, щоб отримати досвід зміни свідомості за допомогою психоделічних речовин, які хоч і ніколи не були дозволені в ГОА, але їхнє вживання було і залишається поширеним явищем.';
            indiaDescText2.textContent =
                'Штат ГОА умовно та географічно ділиться на дві частини: північну та південну. Південь складається з 4- та 5-зіркових готелів, з хорошим сервісом і дуже довгим і широким піщаним пляжем. Підходить для сімей та спокійного відпочинку. Північ – це десяток різних пляжів зі своєю мікроінфраструктурою та своєю атмосферою. Та сама культура хіпі у 60-х прийшла саме у північну частину ГОА.';
            indiaDescText3.textContent =
                "Хампі - культове місце, що має величезне значення не тільки для любителів стародавньої архітектури, але і для прихильників індуїстського віровчення. Архітектурно-історичний комплекс налічує понад 1600 об'єктів, що мають різний ступінь збереження, які наразі входять до списку всесвітньої спадщини ЮНЕСКО. Один з найвідоміших і найвідвідуваніших туристичних об'єктів, що знаходяться в межах цієї величезної країни.";
            indiaDescText4.textContent =
                'Гокарна - невелике село в штаті Карнатака поряд з Гоа. Це важливе місце паломництва індуїстів, тут багато храмів індуїстів, а якщо вірити легенді, саме в цьому місці народився Шива з вуха корови. Поблизу Гокарни в місті Мурудешварі, штат Карнатака знаходиться найбільша його статуя, висотою 37,5 м. Там же знаходиться Гопурам - це традиційна назва архітектурної споруди, яка є надбрамною вежею в огорожі. Він виготовлений з граніту і вважається найвищим в Азії, йдучи вгору на 75 метрів.';
        }

        /* israel */
        if (israelDescHeader1) {
            israelDescHeader1.textContent = 'Тель-Авів';
            israelDescHeader2.textContent = 'Єрусалим';
            israelDescHeader3.textContent = 'Масада Національний Парк';
            israelDescHeader4.textContent = 'Ашдод';
            israelDescHeader5.textContent = 'Ашкелон + Заповідник Ейн Геді';
            israelDescText1.textContent =
                "Тель-Авів, молода та сучасна метрополія зі змішаним населенням, виникла лише у 1909 р. Клуби, бари, процвітаюча спільнота людей мистецтва, веселе життя та пляжі залучають художників, музикантів та молодих спеціалістів у світський Тель-Авів. Архітектура в стилі баухаус надала місту статусу об'єкта ЮНЕСКО та прізвисько 'Біле місто'.";
            israelDescText2.textContent =
                "Релігійні паломники віками приїжджали до Єрусалиму, проте Вам не потрібно бути настільки релігійним, щоб оцінити культурну та історичну важливість цього міста. Плануйте відвідати всі основні визначні пам'ятки, проте залиште час на прогулянку вулицями міста, щоб спробувати відчути денне життя цього стародавнього та святого місця.";
            israelDescText3.textContent =
                "У дні Великого повстання останні повсталі юдеї проти Риму закріпилися в Масаді і перетворили свою відчайдушну боротьбу на символ боротьби за свободу. Завдяки захоплюючим історичним подіям, що відбувалися на горі, та археологічним знахідкам, які були виявлені там, ЮНЕСКО оголосила національний парк Масада об'єктом Світової спадщини.";
            israelDescText4.textContent =
                "Ашдод входить до п'ятірки найбільш населених міст Ізраїлю. Тут велична давнина століть переплітається з яскравою сучасністю. На туристів чекають прекрасні пляжі з розвиненою інфраструктурою та комфортабельні готелі, а також старовинні фортеці та красиві парки.";
            israelDescText5.textContent =
                'Місту Ашкелону – 5000 років. Це одне з найдавніших міст світу. З давніх-давен він як магніт притягував до себе різні народи і людей з різних верств населення. Сьогодні це одне з найпривабливіших для життя міст Ізраїлю з позитивною міграцією, що неухильно зростає. Ейн-Геді - територія, що охороняється законом. Це було місто, де відбулися бої проти ворогів. Тут незвичайна краса створена природою. Журнал National Geographic назвав цю місцевість чарівною. Стоїть оазис серед неживої пустелі.';
        }

        /* thailand */
        if (thaiDescHeader1) {
            thaiDescHeader1.textContent = 'Бангкок';
            thaiDescHeader2.textContent = 'Підводний світ. Бангкок';
            thaiDescHeader3.textContent = 'Тематичний парк Нонг Нуч';
            thaiDescHeader4.textContent = 'Кхао Кхео відкритий зоопарк';
            thaiDescHeader5.textContent = 'Паттайя';

            thaiDescText1.textContent =
                'Бангкок - столиця Таїланду, одне з найжвавіших міст Землію. Скільки б міст ви не завітали, ви ніколи не знайдете такого, як Бангкок. У численні храми, наприклад, Ват Пхо, цілий день тягнуться віруючі. Вечорами на вулицях смажать їжу. І, звичайно, тут незрівнянне нічне життя - від Патпонга до шикарних барів на дахах хмарочосів. Але це ще не все. Нічні ринки, величезні торгові центри та знаменитий базар вихідного дня Чатучак – все це робить Бангкок ідеальним місцем для шанувальників шопінгу.';
            thaiDescText2.textContent =
                'Чудове місце у столиці Тайланду, одне з найкращих місць у світі, де можна переглянути підводний світ морів та океанів.';
            thaiDescText3.textContent =
                'Парк Нонг Нуч – найбільший ботанічний сад Південно-Східної Азії. Тут міститься найбільша приватна колекція рослин у світі. А також можна побачити статуї динозаврів, зроблених на весь зріст з разючою деталізацією.';
            thaiDescText4.textContent =
                'Національний заповідник з другим за величиною зоопарком у світі. Багато тварин можна погодувати прямо з рук, погладити і сфотографуватися. Незабутнє шоу тварин без участі людей.';
            thaiDescText5.textContent =
                'Паттайя - велике місто Таїланду, популярне у туристів. Пляжний відпочинок у Паттайї - мала частина того, на що можуть розраховувати мандрівники, які обрали цей напрямок. Тут багато історичних місць — будівель, скульптур та музеїв, — а також багато торгових центрів та інших розважальних закладів. Кожен знайде дозвілля до смаку. Цим і зумовлено, що серед туристів можна зустріти як молодь, так і респектабельних пенсіонерів чи сімейні пари.';
        }

        /* tunisia */
        if (tunisiaDescHeader1) {
            tunisiaDescHeader1.textContent = 'Туніс';
            tunisiaDescText1.textContent =
                "З одного боку, Туніс - це типова країна Магріба, з арабо-мавританської культурою та нальотом історичного французького колоніального впливу. З іншого, унікальність Тунісу надає шикарну спадщину давньої історії, на чолі з найвідомішим Карфагеном, а також різноманітні природні ресурси. Ландшафт змінюється від протяжних білих піщаних пляжів на узбережжі Середземного моря та передгір'їв Східного Атласу на півночі до пісків Сахари у південній частині. Все це робить країну вкрай привабливою для любителів моря та сонця, які хочуть поєднати розслаблений відпочинок з активною та пізнавальною поїздкою.";
        }

        /* vietnam */
        if (vietnamDescHeader1) {
            vietnamDescHeader1.textContent = 'Нячанг';
            vietnamDescText1.textContent =
                "Нячанг - пляжна столиця В'єтнаму, і цього визначення достатньо, щоб двома словами зрозуміти саму суть життя курорту. Це дійсно галасливе, веселе, повне енергії містечко, яке невипадково щороку приваблює десятки тисяч туристів.";
        }

        /* turkye */
        if (turkyeDescHeader1) {
            turkyeDescHeader1.textContent = 'Бодрум. 2008-2009';
            turkyeDescHeader2.textContent = 'Різні місця. 2008 - 2010';
            turkyeDescHeader3.textContent = 'Ефес + Памуккале';
            turkyeDescHeader4.textContent = 'Стамбул';
            turkyeDescHeader5.textContent = 'Троя';

            turkyeDescText1.textContent =
                "Бодрум — відомий у давнину як «Галікарнас», це місто, в якому проживала незліченна кількість цивілізацій, що пов'язували минуле та майбутнє протягом 5000 років. Сьогодні це елітний Турецький курорт на узбережжі егейського моря, звідки рукою подати до найближчих грецьких островів.";
            turkyeDescText2.textContent =
                'Тут зібрані фотографії з різних місць, на які не набралося достатньої кількості, щоб виділити їх в окремі блоки.';
            turkyeDescText3.textContent =
                "Ефес – одна з найвідоміших пам'яток Туреччини, об'єкт Всесвітньої спадщини ЮНЕСКО. Це разючий культурний ландшафт, який включає спадщину древніх греків і римлян, візантійців та сельджуків. Тут був побудований храм Артеміди, який був визнаний одним із семи чудес світу. Неподалік Ефесу знаходиться Дім Богородиці. У цьому стародавньому будинку за переказами провела свої останні роки Діва Марія, яка рятувалася від гонінь після смерті Христа. Памуккале – місцевість у Туреччині з геотермальними джерелами, аналогів яким немає ніде у світі. Унікальний курорт і чудова природна пам'ятка знаходиться на південному заході країни, за 20 кілометрів від міста Денізлі. Комплекс з 17 мінеральних джерел, відомий ще з античних часів, внесений до списку Всесвітньої спадщини ЮНЕСКО і є окраїною стародавнього вулканічного плоскогір'я, що височіє над рівниною на 100 метрів.";
            turkyeDescText4.textContent =
                'Загадковий і величний, галасливий і казково гарний Стамбул — це міст між Європою та Азією, між традиційним Сходом та сучасним Заходом. За всю свою багату історію він встиг змінити кілька імен та побувати столицею чотирьох імперій: Римської та Візантійської, Османської та Латинської.';
            turkyeDescText5.textContent =
                'Залишки древнього міста, відомі під турецькою назвою Трува, знаходяться за 20 кілометрів на південь від Чанаккале, в якому, до речі, встановлено той самий троянський кінь, який був знятий у фільмі за участю Бреда Пітта в подарунок від режисерів фільму. Залишки міста являють собою досить жалюгідне видовище, але якщо ви знизите рівень своїх очікувань і покликаєте на допомогу уяву, воно все ж таки може справити на вас належне враження.';
        }

        /* indonesia */
        if (baliDescHeader1) {
            baliDescHeader1.textContent = 'Балі - Загальне';
            baliDescText1.textContent =
                'Чудове місце для будь-якого виду проведення часу. Дивовижна природа. Доброзичливі люди. Самобутня культура. І багато іншого.';
            baliDescHeader2.textContent = 'Водоспад Канто Лампо. Мавпячий ліс. Пляж Кута. Храм Сарасваті.';
            baliDescText2.textContent =
                'Ліс мавп - це священне місце, яке охороняється урядом, на основі якого проводиться дослідження поведінки мавп усередині своїх груп і з людьми. Водоспад - чудовий :). Кута - один із найбільш відвідуваних пляжів, розташований у популярному однойменному районі Балі. Сарасваті – головний, традиційний індуїстський храм у районі Убуд.';
        }
    }

    /* /////////////////////////// ENGLISH /////////////////////////////////// */

    if (result === 'English') {
        visitedPlacesLink1.textContent = 'Visited Places';
        visitedPlacesLink2.textContent = 'About me';

        /* main page */

        if (indexGreetingsHeader) {
            /* check if indexGreetingsHeader class exist on the page, than changing text, other case no. bsc without this checking we`l get an error. and we should do this on every page */

            indexGreetingsHeader.textContent = 'Hey there!';
            indexGreetingsContent1.textContent =
                'My name is Nikolay and this is my personal website, where I sharing photos, videos and other information about places I visited in different countries around the world.';
            allPlaceLinkContent.textContent = 'Look all places';
            topPlaceLinkContent.textContent = 'Look on my top places';
            topPlacesHeader.textContent = 'TOP PLACES';
        }

        /* about page */
        if (aboutContent1) {
            aboutContent1.textContent =
                'I started traveling at the age of 18 as it was related to my job. About 15 years ago the quality of my equipment as well as my shooting skills were not high, but now everything has changed, after many years I started traveling again and switched from photography to video shooting and editing.';
            aboutContent2.textContent =
                'Also I become a web developer, and this is one of the first websites made myself. More about me as a web developer and all my works, you`ll find if you will tap on';
            aboutContent3.textContent = 'To folow my social networks and contact with me scroll down the page';
            developerSiteLink.textContent = 'this link.';
            socialMediaLink.textContent = 'or use this link.';
        }
        /* places page */
        if (cambodiaDesc && explore) {
            explore.forEach(a => (a.innerHTML = `Explore &#x2192`));
            cambodiaDesc.textContent =
                'An interesting and at the same time mysterious country from a historical point of view. Poor, hospitable, very corrupt. Travel duration: 3 days.';
            egyptDesc.textContent =
                'The mysterious history of Egypt... Until now, there is no reliable answer who and how built all those numerous buildings of antiquity. But what a beautiful Red Sea! Travel duration: 5 months.';
            indiaDesc.textContent =
                'Immeasurable country. Be famous for its cuisine, ancient history, nature, architectural and historical buildings. Travel duration: 10 months.';
            indonesiaDesc.textContent =
                'Country of a thousand islands. Unusual flora and fauna, volcanoes, historical monuments, hospitality. Travel duration: 1 month.';
            israelDesc.textContent =
                'Not a big, but very developed, original country. Famous for its Dead Sea resorts, it is the main religious center of Christians, one of the leading technological centers in the world. Travel duration: 6 months.';
            thailandDesc.textContent = 'I love this sunny contrast country. Sea, food, people, nature, historical sights. Travel duration: 1 month.';
            tunisiaDesc.textContent =
                'The most secular, developed and northern Muslim country in Africa. Famous for its spa resorts, historical sites and the Sahara desert. Travel duration: 10 months.';
            turkyeDesc.textContent =
                'Hospitable Muslim country, which is famous for its seaside resorts, cuisine, culture and many world-famous historical sights. Travel duration: 18 months.';
            ukraineDesc.textContent =
                'I want to express my support for Ukraine, I wish the war to end as soon as possible and those responsible for it be punished.';
            vietnamDesc.textContent =
                'A picturesque, original rapidly developing country. Has all the advantages of coastal Asian countries. Lots of beautiful places all over the country. Travel duration: 1 month.';
        }

        /* cambodia_places */

        if (CambDescHeader1) {
            CambDescHeader1.textContent = 'Angkor Wat. 2022';
            CambDescHeader2.textContent = 'Angkor Temples. 2022';
            CambDescHeader3.textContent = 'Angkor Temples. Photos';
            CambDescText1.textContent =
                'This is a grandiose religious building, to be precise, the largest in the world, made of stone. It is the main temple in the temple complex with hundreds of other temples spread over an area of several thousand square kilometers. Many researchers of antiquity doubt the official version of its origin and purpose, and not without reason, as in the case of the pyramids of Giza in Egypt, there are more questions than answers.';
            CambDescText2.textContent =
                'In addition to Angkor Wat, the complex has many other once magnificent, majestic temples, such as: Bayon, Bentai, Ta Keo, Phnom Bakheng, Ta Prohm, Banteay Kdei, Pre Rup, Presat Kravan and others.';
            CambDescText3.textContent = '';
        }

        /* egypt */

        if (egyptDescHeader) {
            egyptDescHeader.textContent = 'Egypt';
            egyptDescText.textContent =
                'Not a stable economy, not a stable political situation, do not make this country hospitable. Despite this, many people choose this country not only for a hotel holiday, but also for a longer stay. Because it is a very inexpensive country to live in, perfect diving and simply phenomenal historical sites. About the pyramids, I strongly advise you to find on YouTube the documentary "Revelations of the Pyramids" by Patrice Pouillard, which has collected tens of millions of views, translated into many languages and, in addition, banned from showing in most countries on YouTube.';
        }

        /* india */

        if (indiaDescHeader1) {
            indiaDescHeader1.textContent = 'GOA - Main';
            indiaDescHeader2.textContent = 'GOA - Beaches';
            indiaDescHeader3.textContent = 'Hampi';
            indiaDescHeader4.textContent = 'Gokarna';
            indiaDescText1.textContent =
                'GOA is the smallest of the 29 states in India. As they say, GOA is a window to India for Europeans and a window to Europe for Hindus. A certain culture has been formed in GOA since the 1960s, which began to attract tourists from all over the world. Notably, Steve Jobs, the founder of the tech giant Apple, visited GOA to experience mind-altering psychedelic drugs, which, while never legal in GOA, were and remain widespread.';
            indiaDescText2.textContent =
                'The state of GOA is conditionally and geographically divided into two parts: northern and southern. The south consists of 4- and 5-star hotels, with good service and a very long and wide sandy beach. Suitable for families and relaxing holidays. The North is a dozen different beaches with their own micro-infrastructure and their own atmosphere. That same hippie culture came to the northern part of GOA in the 60s.';
            indiaDescText3.textContent =
                'Hampi is a cult place of great importance not only for lovers of ancient architecture, but also for adherents of the Hindu faith. The architectural and historical complex has more than 1,600 objects with varying degrees of preservation, which are now included in the UNESCO World Heritage List. One of the most famous and most visited tourist sites located within this vast country.';
            indiaDescText4.textContent =
                "Gokarna is a small village in the state of Karnataka near Goa. This is an important place of pilgrimage for Hindus, there are many Hindu temples, and according to legend, it was in this place that Shiva was born from a cow's ear. Near Gokarna in the city of Murudeshwar, Karnataka, there is the largest statue of him, 37.5 m high. Gopuram is also located there - this is the traditional name of an architectural structure, which is a gate tower in a fence. It is made of granite and is considered the highest in Asia, going up to 75 meters.";
        }

        /* israel */
        if (israelDescHeader1) {
            israelDescHeader1.textContent = 'Tel Aviv';
            israelDescHeader2.textContent = 'Jerusalem';
            israelDescHeader3.textContent = 'Masada National Park ';
            israelDescHeader4.textContent = 'Ashdod';
            israelDescHeader5.textContent = 'Ashkelon + Ein Gedi Nature Reserve ';
            israelDescText1.textContent =
                'Tel Aviv, a young and modern metropolis with a mixed population, came into being only in 1909. Clubs, bars, a thriving arts community, fun life and beaches attract artists, musicians and young professionals to social Tel Aviv. The Bauhaus architecture has given the city UNESCO site status and the nickname "White City".';
            israelDescText2.textContent =
                "Religious pilgrims have been coming to Jerusalem for centuries, but you don't have to be so religious to appreciate the city's cultural and historical importance. Plan to visit all the major sights, but take the time to walk around the streets of the city to try and get a feel for the day life of this ancient and holy place.";
            israelDescText3.textContent =
                'In the days of the Great Revolt, the last Jews who rebelled against Rome entrenched themselves in Masada and turned their desperate struggle into a symbol of the struggle for freedom. Thanks to the spectacular historical events that have taken place on the mountain and the archaeological finds that have been discovered there, UNESCO has declared Masada National Park a World Heritage Site.';
            israelDescText4.textContent =
                'Ashdod is one of the five most populated cities in Israel. Here, the majestic antiquity of centuries is intertwined with bright modernity. Tourists are waiting for beautiful beaches with developed infrastructure and comfortable hotels, as well as ancient fortresses and beautiful parks.';
            israelDescText5.textContent =
                'The city of Ashkelon is 5,000 years old. This is one of the oldest cities in the world. Since ancient times, it has attracted various peoples and people from different strata of the population like a magnet. Today it is one of the most livable cities in Israel with a steadily growing positive migration. Ein Gedi is a legally protected area. It was a city where battles against enemies took place. Here is an extraordinary beauty created by nature. National Geographic magazine called this area bewitching. There is an oasis in the middle of a lifeless desert.';
        }

        /* thailand */
        if (thaiDescHeader1) {
            thaiDescHeader1.textContent = 'Bangkok';
            thaiDescHeader2.textContent = 'Underwater world. Bangkok';
            thaiDescHeader3.textContent = 'Nong Nooch Themed Park';
            thaiDescHeader4.textContent = 'Khao Kheo Open Zoo';
            thaiDescHeader5.textContent = 'Pattaya';

            thaiDescText1.textContent =
                'Bangkok is the capital of Thailand and one of the busiest cities in the world. No matter how many cities you visit, you will never find another like Bangkok. Believers flock to numerous temples, such as Wat Pho, all day long. In the evenings, food is fried on the streets. And, of course, the nightlife here is incomparable, from Patpong to chic rooftop bars. But that is not all. Night markets, huge malls and the famous Chatuchak Weekend Bazaar make Bangkok the perfect destination for shoppers.';
            thaiDescText2.textContent =
                'A magnificent place in the capital of Thailand, one of the best places in the world where you can see the underwater world of the seas and oceans.';
            thaiDescText3.textContent =
                'Nong Nooch Park is the largest botanical garden in Southeast Asia. It contains the largest private collection of plants in the world. And you can also see dinosaur statues made in full growth with amazing detail.';
            thaiDescText4.textContent =
                'National Wildlife Refuge with the second largest zoo in the world. Many animals can be fed directly from the hands, stroked and photographed. An unforgettable animal show without the participation of people.';
            thaiDescText5.textContent =
                'Pattaya is a major city in Thailand, popular with tourists. A beach holiday in Pattaya is a small part of what travelers who choose this destination can expect. There are many historical sites - buildings, sculptures and museums - as well as full of shopping centers and other entertainment venues. Everyone will find leisure to taste. This is due to the fact that among tourists you can meet both young people and respectable pensioners or married couples.';
        }

        /* tunisia */
        if (tunisiaDescHeader1) {
            tunisiaDescHeader1.textContent = 'Tunisia';
            tunisiaDescText1.textContent =
                'On the one hand, Tunisia is a typical country of the Maghreb, with an Arab-Moorish culture and a touch of historical French colonial influence. On the other hand, the uniqueness of Tunisia is given by the chic heritage of ancient history, led by the famous Carthage, as well as a variety of natural resources. The landscape varies from long white sandy beaches on the Mediterranean coast and the foothills of the Eastern Atlas in the north to the sands of the Sahara in the south. All this makes the country extremely attractive for sea and sun lovers who want to combine a relaxed holiday with an active and educational trip.';
        }

        /* vietnam */
        if (vietnamDescHeader1) {
            vietnamDescHeader1.textContent = 'Nha Trang';
            vietnamDescText1.textContent =
                'Nha Trang is the beach capital of Vietnam, and this definition is enough to understand the very essence of resort life in a nutshell. This is a really noisy, cheerful, full of energy town that attracts tens of thousands of tourists every year.';
        }

        /* turkye */
        if (turkyeDescHeader1) {
            turkyeDescHeader1.textContent = 'Bodrum. 2008-2009';
            turkyeDescHeader2.textContent = 'Different places. 2008 - 2010';
            turkyeDescHeader3.textContent = 'Ephesus + Pamukkale';
            turkyeDescHeader4.textContent = 'Istanbul';
            turkyeDescHeader5.textContent = 'Troy';

            turkyeDescText1.textContent =
                'Bodrum - known in ancient times as "Halikarnassus", is a city that has been home to countless civilizations that have linked the past and the future for 5,000 years. Today, it is an elite Turkish resort on the Aegean coast, from where it is within easy reach to the nearest Greek islands.';
            turkyeDescText2.textContent =
                'Here are collected photos from many different places, which did not accumulate enough to separate them into separate blocks.';
            turkyeDescText3.textContent =
                "Ephesus is one of Turkey's most famous landmarks, a UNESCO World Heritage Site. It is a striking cultural landscape that includes the legacy of the ancient Greeks and Romans, the Byzantines and the Seljuks. The temple of Artemis was built here, which was recognized as one of the seven wonders of the world. Not far from Ephesus is the House of the Virgin. According to legend, the Virgin Mary spent her last years in this ancient house, who was fleeing persecution after the death of Christ. Pamukkale is an area in Turkey with geothermal springs, which have no analogues anywhere in the world. The unique resort and stunning natural landmark is located in the southwest of the country, 20 kilometers from the city of Denizli. The complex of 17 mineral springs, known since ancient times, is included in the UNESCO World Heritage List and is the outskirts of an ancient volcanic plateau, towering 100 meters above the plain.";
            turkyeDescText4.textContent =
                'Mysterious and majestic, noisy and fabulously beautiful, Istanbul is a bridge between Europe and Asia, between the traditional East and the modern West. Throughout its rich history, he managed to change several names and visit the capital of four empires: Roman and Byzantine, Ottoman and Latin.';
            turkyeDescText5.textContent =
                'The remains of the ancient city, known by the Turkish name of Truva, are located 20 kilometers south of Canakkale, in which, by the way, the same Trojan horse was installed, which was filmed in the film with Brad Pitt as a gift from the film directors. The remains of the city are a rather pathetic sight, but if you lower your expectations and call on your imagination, it can still make the right impression on you.';
        }
        /* indonesia */
        if (baliDescHeader1) {
            baliDescHeader1.textContent = 'Bali - Main';
            baliDescText1.textContent =
                'A wonderful place for any kind of pastime. Amazing nature. Benevolent people. Indigenous culture. And many more.';
            baliDescHeader2.textContent = 'Kanto Lampo waterfall. Monkey Forest. Kuta beach. Saraswati Temple.';
            baliDescText2.textContent =
                'The monkey forest is a sacred place protected by the government, on the basis of which research is carried out on the behavior of monkeys within their groups and also with people. The waterfall is great :). Kuta is one of the most visited beaches, located in the popular area of the same name in Bali. Saraswati is the main, traditional Hindu temple in the Ubud area.';
        }
    }

    /* /////////////////////////// RUSSIAN /////////////////////////////////// */

    if (result === 'Russian') {
        /* main page */

        visitedPlacesLink1.textContent = 'Где я был';
        visitedPlacesLink2.textContent = 'Обо мне';

        if (indexGreetingsHeader) {
            /* check if indexGreetingsHeader class exist on the page, than changing text, other case no. bsc without this checking we`l get an error. and we should do this on every page */
            indexGreetingsHeader.textContent = 'Привет!';
            indexGreetingsContent1.textContent =
                'Меня зовут Николай и это мой личный сайт, где я делюсь фотографиями, видео и другой информацией о местах, которые я посетил в разных странах мира.';
            allPlaceLinkContent.textContent = 'Смотреть все места';
            topPlaceLinkContent.textContent = 'Посмотреть на мои лучшие места';
            topPlacesHeader.textContent = 'Лучшие места';
        }

        /* about page */
        if (aboutContent1) {
            aboutContent1.textContent =
                'Я начал путешествовать в возрасте 18 лет, так как это было связано с моей работой. Около 15 лет назад качество моего оборудования, а также моих навыков в сьемке были невысоки, но сейчас все изменилось, спустя много лет я снова начал путешествовать и переключился от фотографии к видеосъемке и монтажу.';
            aboutContent2.textContent =
                'Также я стал веб-разработчиком, и это один из первых сайтов, сделанных мной. Подробнее обо мне как о веб-разработчике и обо всех моих работах вы узнаете, нажав на';
            aboutContent3.textContent = 'Чтобы перейти к моим социальными сетям и связаться со мной, прокрутите страницу вниз';
            developerSiteLink.textContent = 'эту ссылку';
            socialMediaLink.textContent = 'или воспользуйтесь этой ссылкой.';
        }
        /* places page */
        if (cambodiaDesc && explore) {
            explore.forEach(a => (a.innerHTML = `Смотреть &#x2192`));
            cambodiaDesc.textContent =
                'Интересная и одновременно загадочная с исторической точки зрения страна. Бедная, гостеприимная, очень корумпированная.  Продолжительность путешествий: 3дня.';
            egyptDesc.textContent =
                'Загадочная история Египта... До сих пор нету достоверного ответа, кто и как построил все те многочисленные строения древности. Но какое же красивое Красное море! Продолжительность путешествий: 5 месяцев.';
            indiaDesc.textContent =
                'Необъятная страна. Славиться своей кухней, древней историей, природой, архитектурными и историческими сооружениями. Длительность путешествий: 10 месяцев.';
            indonesiaDesc.textContent =
                'Страна тысяч островов. Необыкновенная флора и фауна, вулканы, исторические памятники, гостеприимность. Продолжительность путешествий: 1 месяц.';
            israelDesc.textContent =
                'Не большая, но очень развитая, самобытная страна.  Славиться курортами мертвого моря, является главным религиозным центром христиан, одним из ведущих технологических центров в мире.  Продолжительность путешествий: 6 месяцев.';
            thailandDesc.textContent =
                'Люблю эту солнечную контрастную страну. Море, еда, люди, природа, исторические достопримечательности. Продолжительность путешествий: 1 месяц.';
            tunisiaDesc.textContent =
                'Самая светская, развитая и северная  мусульманская страна в Африке. Славиться своими СПА-курортами, историческими достопримечательностями и пустыней Сахара. Продолжительность путешествий: 10 месяцев.';
            turkyeDesc.textContent =
                'Гостеприимная мусульманская стра, которая славиться своими морскими курортами, кухней, культурой и множеством всемирноизвестными историческими достопримечательностями. Продолжительность путешествий: 18 месяцев.';
            ukraineDesc.textContent =
                'Хочу выразить свою поддержку Украине, я желаю, чтобы война закончилась как можно скорее и справедливость востаржествовала. ';
            vietnamDesc.textContent =
                'Живописная, самобытная быстроразвивающаяся страна. Имеет все преимущества прибрежных азиатских стран. Множество красивейших мест по всей стране. Продолжительность путешествий: 1 месяц.';
        }

        /* cambodia_places */

        if (CambDescHeader1) {
            CambDescHeader1.textContent = 'Ангкор Ват. 2022';
            CambDescHeader2.textContent = 'Храмы Ангкора. 2022';
            CambDescHeader3.textContent = 'Храмы Ангкора. Фото';
            CambDescText1.textContent =
                'Это грандиозное религиозное сооружение, если быть точным, самое большое в мире, сделанное из камня. Является главным храмом в храмовом комплексе с сотней других храмов, раскинутых на территории несколько тысяч квадратных километров. Множество исследователей древности сомневаются в официальной версии его происхождения и предназначения и не спроста, как и в случае с пирамидами Гизы в Египте, остается больше вопросов, чем ответов.';
            CambDescText2.textContent =
                'Помимо Ангкор Ват, комплекс насчитывает множество других, некогда великолепных, величественных храмов, таких как: Байон, Бентай, Та Кео, Пном Бакхенг, Та Пром, Бантей Кдей, Пре Руп, Пресат Краван и другие.';
            CambDescText3.textContent = '';
        }

        /* egypt */

        if (egyptDescHeader) {
            egyptDescHeader.textContent = 'Египет';
            egyptDescText.textContent =
                'Не стабильная экономика, не стабильная политическая ситуация, не делают эту страну гостеприимной. Не смотря на это многие люди выбирают эту страну не только для отельного отдыха, но и для боле длительного проживания. Потому что это очень не дорогая страна для проживания, идеальный дайвинг и просто феноминальные исторические места. Про пирамиды, крайне советую найти на ютубе документальный фильм " Откровения Пирамид " Патрис Пуйара,  собравший десятки миллионов просмотров, переведенный на многие языки и ко всему прочему, запрещенный к показу в большинстве стран на ютубе.';
        }

        /* india */
        if (indiaDescHeader1) {
            indiaDescHeader1.textContent = 'ГОА - Основное';
            indiaDescHeader2.textContent = 'ГОА - Пляжи';
            indiaDescHeader3.textContent = 'Хампи';
            indiaDescHeader4.textContent = 'Гокарна';
            indiaDescText1.textContent =
                'ГОА - самый маленький из 29 штатов в Индии. Как говорят, ГОА -  это окно в Идию для европейцев и окно в Европу для индусов. В ГОА сформировалась определенноая культура с 1960-х годов, что и стало привлекать туристов со всего мира. Примечательно, что Стив Джобс, основатель техногиганта Apple, посещал ГОА для того, чтобы получить опыт изменения сознания с помощью психоделических веществ, которые хоть и никогда не были разрешены в ГОА, но их употребление было и остается широко распространенным явлением.';
            indiaDescText2.textContent =
                'Штат ГОА условно и географически делится на две части: северную и южную. Юг состоит из 4- и 5-звездочных отелей, с хорошим сервисом и очень длинным и широким песчаным пляжем. Подходит для семей и спокойного отдыха. Север — это десяток разных пляжей со своей микроинфраструктурой и своей атмосферой. Та самая культура хиппи в 60-х пришла в северную часть ГОА.';
            indiaDescText3.textContent =
                'Хампи – культовое место, имеющее огромное значение не только для любителей древней архитектуры, но и для приверженцев индуистского вероучения.  Архитектурно-исторический комплекс насчитывает более 1600 объектов, имеющих разную степень сохранности, которые теперь входят в список всемирного наследия ЮНЕСКО. Один из самых известных и самых посещаемых туристических объектов, находящихся в пределах этой огромной страны.';
            indiaDescText4.textContent =
                'Гокарна — небольшая деревенька в штате Карнатака рядом с Гоа. Это важное место паломничества индуистов, здесь много индуистских храмов, а если верить легенде, именно в этом месте родился Шива из уха коровы. Поблизости Гокарны в городе Мурудешваре, штат Карнатака находится самая большая его статуя, высотой 37,5 м. Там же находится Гопурам - это традиционное название архитектурного сооружения, которое представляет собой надвратную башню в ограде. Он сделан из гранита и считается самым высоким в Азии, уходя ввысь на 75 метров.';
        }

        /* israel */
        if (israelDescHeader1) {
            israelDescHeader1.textContent = 'Тель-Авив';
            israelDescHeader2.textContent = 'Иерусалим';
            israelDescHeader3.textContent = 'Масада Национальный Парк';
            israelDescHeader4.textContent = 'Ашдод';
            israelDescHeader5.textContent = 'Ашкелон + Заповедник Эйн Геди';
            israelDescText1.textContent =
                'Тель-Авив, молодая и современная метрополия со смешанным населением, возникла только в 1909 г. Клубы, бары, процветающее сообщество людей искусства, веселая жизнь и пляжи привлекают художников, музыкантов и молодых специалистов в светский Тель-Авив. Архитектура в стиле баухаус дала городу статус объекта ЮНЕСКО и прозвище "Белый город".';
            israelDescText2.textContent =
                'Религиозные паломники веками приезжали в Иерусалим, однако Вам не нужно быть настолько религиозным, чтобы оценить культурную и историческую важность этого города. Планируйте посетить все основные достопримечательности, однако оставьте время на прогулку по улицам города, чтобы попытаться прочувствовать дневную жизнь этого древнего и святого места.';
            israelDescText3.textContent =
                'В дни Великого восстания последние восставшие Иудеи против Рима закрепились в Масаде и превратили свою отчаянную борьбу в символ борьбы за свободу. Благодаря захватывающим историческим событиям, происходившим на горе, и археологическим находкам, которые были обнаружены там, ЮНЕСКО объявила национальный парк Масада объектом Всемирного наследия.';
            israelDescText4.textContent =
                'Ашдод входит в пятерку самых населенных городов Израиля. Здесь величественная древность веков переплетается с яркой современностью. Туристов ждут прекрасные пляжи с развитой инфраструктурой и комфортабельные отели, а также старинные крепости и красивейшие парки.';
            israelDescText5.textContent =
                'Городу Ашкелону – 5 000 лет. Это один из древнейших городов мира. С глубокой древности он как магнит притягивал к себе различные народы и людей из разных слоев населения. Сегодня это один из самых привлекательных для жизни городов Израиля с неуклонно растущей положительной миграцией. Эйн-Геди –охраняемая законом территория. Это был город, где состоялись сражения против врагов. Здесь необыкновенная красота, созданная природой. Журнал National Geographic назвал эту местность завораживающей. Стоит оазис посреди безжизненной пустыни. ';
        }

        /* thailand */
        if (thaiDescHeader1) {
            thaiDescHeader1.textContent = 'Бангкок';
            thaiDescHeader2.textContent = 'Подводный мир. Бангкок';
            thaiDescHeader3.textContent = 'Тематический парк Нонг Нуч';
            thaiDescHeader4.textContent = 'Кхао Кхео открытый зоопарк';
            thaiDescHeader5.textContent = 'Паттая';

            thaiDescText1.textContent =
                'Бангкок — столица Таиланда, один из самых оживленных городов Земли. Сколько бы городов вы ни посетили, вы никогда не найдете такого, как Бангкок. В многочисленные храмы, например в Ват Пхо, целый день тянутся верующие. Вечерами на улицах жарят еду. И, конечно, здесь несравненная ночная жизнь — от Патпонга до шикарных баров на крышах небоскребов. Но это еще не все. Ночные рынки, огромные торговые центры и знаменитый базар выходного дня Чатучак — все это делает Бангкок идеальным местом для любителей шопинга.';
            thaiDescText2.textContent =
                'Великолепное место в столице Тайланда, одно из лучших мест в мире, где можно посмотреть подводный мир морей и океанов.';
            thaiDescText3.textContent =
                'Парк Нонг Нуч – крупнейший ботанический сад Юго-Восточной Азии. Здесь содержится самая большая частная коллекция растений в мире. А так же можно увидеть статуи динозавров, сделанных во весь рост с поразительной детализацией.';
            thaiDescText4.textContent =
                'Национальный заповедник со вторым по величине зоопарком в мире. Многих животных можно покормить прямо из рук, погладить и сфотографироваться. Незабываемое шоу животных без участия людей.';
            thaiDescText5.textContent =
                'Паттайя — крупный город Таиланда, пользующийся популярностью у туристов. Пляжный отдых в Паттайе — малая часть того, на что могут рассчитывать путешественники, выбравшие это направление. Здесь много исторических мест — зданий, скульптур и музеев, — а также полно торговых центров и других развлекательных заведений. Каждый отыщет досуг по вкусу. Этим и обусловлено, что среди туристов можно встретить как молодежь, так и респектабельных пенсионеров или семейные пары.';
        }

        /* tunisia */
        if (tunisiaDescHeader1) {
            tunisiaDescHeader1.textContent = 'Тунис';
            tunisiaDescText1.textContent =
                'С одной стороны, Тунис — это типичная страна Магриба, с арабо-мавританской культурой и налетом исторического французского колониального влияния. С другой, уникальность Тунису придает шикарное наследие древней истории, во главе с известнейшим Карфагеном, а также разнообразные природные ресурсы. Ландшафт меняется от протяженных белоснежных песчаных пляжей на побережье Средиземного моря и предгорий Восточного Атласа на севере до песков Сахары в южной части. Все это делает страну крайне привлекательной для любителей моря и солнца, которые хотят совместить расслабленный отдых с активной и познавательной поездкой.';
        }

        /* vietnam */
        if (vietnamDescHeader1) {
            vietnamDescHeader1.textContent = 'Нячанг';
            vietnamDescText1.textContent =
                'Нячанг — пляжная столица Вьетнама, и этого определения достаточно, чтобы в двух словах понять самую суть жизни курорта. Это действительно шумный, веселый, полный энергии городок, который неслучайно каждый год привлекает десятки тысяч туристов.';
        }

        /* turkye */
        if (turkyeDescHeader1) {
            turkyeDescHeader1.textContent = 'Бодрум. 2008-2009';
            turkyeDescHeader2.textContent = 'Разные места. 2008 - 2010';
            turkyeDescHeader3.textContent = 'Эфес + Памуккале';
            turkyeDescHeader4.textContent = 'Стамбул';
            turkyeDescHeader5.textContent = 'Троя';

            turkyeDescText1.textContent =
                'Бодрум —  известный в древние времена как «Галикарнас», это город, в котором проживало бесчисленное количество цивилизаций, связывавших прошлое и будущее на протяжении 5000 лет. Сегодня, это элитный Турецкий курорт на побережье эгейского моря, откуда рукой подать до ближайших греческих островов.';
            turkyeDescText2.textContent =
                'Тут собраны фотографии с множества разных мест, на которые не набралось достаточного количества, чтобы выделить их в отдельные блоки.';
            turkyeDescText3.textContent =
                'Эфес - одна из самых известных достопримечательностей Турции, объект Всемирного наследия ЮНЕСКО. Это поразительный культурный ландшафт, который включает наследие древних греков и римлян, византийцев и сельджуков. Здесь был построен храм Артемиды, который был признан одним из семи чудес света. Недалеко от Эфеса находится Дом Богородицы. В этом древнем доме по преданию провела свои последние годы Дева Мария, которая спасалась от гонений после смерти Христа. Памуккале — местность в Турции с геотермальными источниками, аналогов которым нет нигде в мире. Уникальный курорт и потрясающая природная достопримечательность находится на юго-западе страны, в 20 километрах от города Денизли. Комплекс из 17 минеральных источников, известный ещё с античных времён, внесён в список Всемирного наследия ЮНЕСКО и представляет собой окраину древнего вулканического плоскогорья, возвышающегося над равниной на 100 метров.';
            turkyeDescText4.textContent =
                'Загадочный и величественный, шумный и сказочно красивый, Стамбул — это мост между Европой и Азией, между традиционным Востоком и современным Западом. За всю свою богатую историю он успел сменить несколько имен и побывать столицей четырех империй: Римской и Византийской, Османской и Латинской.';
            turkyeDescText5.textContent =
                'Остатки древнего города, известные под турецким названием Трува, находятся в 20 километрах к югу от Чанаккале, в котором, кстати, установлен тот самый троянский конь, который был снять в фильме с участием Бреда Питта в подарок от режисеров фильма. Остатки города представляют собой довольно жалкое зрелище, но если вы снизите уровень своих ожиданий и призовёте на помощь воображение, то оно всё же может произвести на вас должное впечатление. ';
        }
        /* indonesia */
        if (baliDescHeader1) {
            baliDescHeader1.textContent = 'Бали - Общее';
            baliDescText1.textContent =
                'Замечательное место для любого вида временипровождения. Удивительная природа. Доброжелательные люди. Самобытная культура. И много другого.';
            baliDescHeader2.textContent = 'Водопад Канто Лампо. Лес обезьян. Пляж Кута. Храм Сарасвати.';
            baliDescText2.textContent =
                'Лес обезьян - это священное место, охраняемое правительством, на базе которого проводится исследование поведения обезъян внутри своих групп и так же с людьми. Водопад - великолепен :). Кута - один из самых посещаемых пляжей, расположен в популярном одноименном районе Бали. Сарасвати - главный, традиционный индуистский храм в районе Убуд.';
        }
    }
    /* /////////////////////////// FRANCE /////////////////////////////////// */

    if (result === 'france') {
        /* main page */
        visitedPlacesLink1.textContent = 'Où ai-je été';
        visitedPlacesLink2.textContent = 'Sur moi';

        if (indexGreetingsHeader) {
            /* check if indexGreetingsHeader class exist on the page, than changing text, other case no. bsc without this checking we`l get an error.and we should do this on every page */
            indexGreetingsHeader.textContent = 'Salut!';
            indexGreetingsContent1.textContent =
                "Je m'appelle Nikolay et c'est mon site Web personnel, où je partage des photos, des vidéos et d'autres informations sur les endroits que j'ai visités dans différents pays du monde";
            allPlaceLinkContent.textContent = 'Regardez tous les endroits';
            topPlaceLinkContent.textContent = 'Regardez sur mes meilleurs endroits';
            topPlacesHeader.textContent = 'Meilleurs endroits';
        }

        /* about page */
        if (aboutContent1) {
            aboutContent1.textContent =
                "J'ai commencé à voyager à l'âge de 18 ans car c'était lié à mon travail. Il y a environ 15 ans, la qualité de mon équipement ainsi que mes compétences en matière de prise de vue n'étaient pas élevées, mais maintenant tout a changé, plusieurs années plus tard, j'ai recommencé à voyager et je suis passé de la photographie à la prise de vue et au montage vidéo.";
            aboutContent2.textContent =
                "De plus, je suis devenu développeur Web, et c'est l'un des premiers sites Web que j'ai créés. En savoir plus sur moi en tant que développeur Web et sur tous mes travaux, vous trouverez si vous appuyez sur";
            aboutContent3.textContent = 'Pour suivre mes réseaux sociaux et me contacter faites défiler la page';
            developerSiteLink.textContent = 'ce lien.';
            socialMediaLink.textContent = 'ou utilisez ce lien.';
        }
        /* places page */
        if (cambodiaDesc && explore) {
            explore.forEach(a => (a.innerHTML = `Explorer &#x2192`));
            cambodiaDesc.textContent =
                "Un pays intéressant et en même temps mystérieux d'un point de vue historique. Pauvre, hospitalier, très corrompu. Durée du voyage : 3 jours.";
            egyptDesc.textContent =
                "L'histoire mystérieuse de l'Egypte... Jusqu'à présent, il n'y a pas de réponse fiable qui et comment a construit tous ces nombreux bâtiments de l'antiquité. Mais quelle belle Mer Rouge! Durée du voyage : 5 mois.";
            indiaDesc.textContent =
                'Pays incommensurable. Soyez célèbre pour sa cuisine, son histoire ancienne, sa nature, ses bâtiments architecturaux et historiques. Durée du voyage : 10 mois.';
            indonesiaDesc.textContent =
                'Pays des mille îles. Faune et flore insolites, volcans, monuments historiques, hospitalité. Durée du voyage : 1 mois.';
            israelDesc.textContent =
                "Pas un grand pays d'origine, mais très développé. Célèbre pour ses stations balnéaires de la mer Morte, c'est le principal centre religieux des chrétiens, l'un des principaux centres technologiques au monde. Durée du voyage : 6 mois.";
            thailandDesc.textContent =
                "J'aime ce pays de contraste ensoleillé. Mer, nourriture, gens, nature, sites historiques. Durée du voyage : 1 mois.";
            tunisiaDesc.textContent =
                "Le pays musulman le plus laïc, le plus développé et le plus septentrional d'Afrique. Célèbre pour ses stations thermales, ses sites historiques et le désert du Sahara. Durée du voyage : 10 mois.";
            turkyeDesc.textContent =
                'Pays musulman hospitalier, célèbre pour ses stations balnéaires, sa cuisine, sa culture et ses nombreux sites historiques de renommée mondiale. Durée du voyage : 18 mois.';
            ukraineDesc.textContent =
                "Je veux exprimer mon soutien à l'Ukraine, je souhaite que la guerre se termine le plus tôt possible et que ses responsables soient punis.";
            vietnamDesc.textContent =
                'Un pays pittoresque, original et en plein développement. A tous les avantages des pays asiatiques côtiers. Beaucoup de beaux endroits dans tout le pays. Durée du voyage : 1 mois.';
        }

        /* cambodia_places */

        if (CambDescHeader1) {
            CambDescHeader1.textContent = 'Angkor Vat. 2022';
            CambDescHeader2.textContent = "Temples d'Angkor. 2022";
            CambDescHeader3.textContent = "Temples d'Angkor. Photos";
            CambDescText1.textContent =
                "Il s'agit d'un édifice religieux grandiose, pour être précis, le plus grand du monde, en pierre. C'est le temple principal du complexe de temples avec des centaines d'autres temples répartis sur une superficie de plusieurs milliers de kilomètres carrés. De nombreux chercheurs de l'Antiquité doutent de la version officielle de son origine et de son but, et non sans raison, comme dans le cas des pyramides de Gizeh en Égypte, il y a plus de questions que de réponses.";
            CambDescText2.textContent =
                "En plus d'Angkor Wat, le complexe possède de nombreux autres temples autrefois magnifiques et majestueux, tels que : Bayon, Bentai, Ta Keo, Phnom Bakheng, Ta Prohm, Banteay Kdei, Pre Rup, Presat Kravan et autres.";
            CambDescText3.textContent = '';
        }

        /* egypt */

        if (egyptDescHeader) {
            egyptDescHeader.textContent = 'Egypte';
            egyptDescText.textContent =
                "Pas une économie stable, pas une situation politique stable, ne rendent pas ce pays hospitalier. Malgré cela, de nombreuses personnes choisissent ce pays non seulement pour des vacances à l'hôtel, mais aussi pour un séjour plus long. Parce que c'est un pays très bon marché où vivre, des plongées parfaites et des sites historiques tout simplement phénoménaux. A propos des pyramides, je vous conseille vivement de retrouver sur YouTube le documentaire 'Révélations des Pyramides' de Patrice Pouillard, qui a récolté des dizaines de millions de vues, traduit dans de nombreuses langues et, en plus, interdit de diffusion dans la plupart des pays sur Youtube.";
        }

        /* india */
        if (indiaDescHeader1) {
            indiaDescHeader1.textContent = 'GOA - Basique';
            indiaDescHeader2.textContent = 'GOA - Plages';
            indiaDescHeader3.textContent = 'Hampi';
            indiaDescHeader4.textContent = 'Gokarna';
            indiaDescText1.textContent =
                "GOA est le plus petit des 29 États de l'Inde. Comme on dit, GOA est une fenêtre sur l'Inde pour les Européens et une fenêtre sur l'Europe pour les Hindous. Une certaine culture s'est formée à GOA depuis les années 1960, qui a commencé à attirer des touristes du monde entier. Notamment, Steve Jobs, le fondateur du géant de la technologie Apple, s'est rendu à GOA pour faire l'expérience de drogues psychédéliques psychotropes, qui, bien qu'elles n'aient jamais été légales à GOA, étaient et restent répandues.";
            indiaDescText2.textContent =
                "L'état de GOA est conditionnellement et géographiquement divisé en deux parties : nord et sud. Le sud se compose d'hôtels 4 et 5 étoiles, avec un bon service et une très longue et large plage de sable. Convient aux familles et aux vacances reposantes. Le nord c'est une dizaine de plages différentes avec leur propre micro-infrastructure et leur propre ambiance. Cette même culture hippie est arrivée dans la partie nord de GOA dans les années 60.";
            indiaDescText3.textContent =
                "Hampi est un lieu de culte d'une grande importance non seulement pour les amateurs d'architecture ancienne, mais aussi pour les adeptes de la foi hindoue. Le complexe architectural et historique compte plus de 1 600 objets plus ou moins préservés, qui sont désormais inscrits sur la liste du patrimoine mondial de l'UNESCO. L'un des sites touristiques les plus célèbres et les plus visités de ce vaste pays.";
            indiaDescText4.textContent =
                "Gokarna est un petit village de l'état du Karnataka près de Goa. C'est un lieu de pèlerinage important pour les hindous, il y a de nombreux temples hindous, et selon la légende, c'est à cet endroit que Shiva est né de l'oreille d'une vache. Près de Gokarna dans la ville de Murudeshwar, Karnataka, se trouve la plus grande statue de lui, haute de 37,5 m. Gopuram s'y trouve également - c'est le nom traditionnel d'une structure architecturale, qui est une tour de porte dans une clôture. Il est fait de granit et est considéré comme le plus haut d'Asie, allant jusqu'à 75 mètres.";
        }

        /* israel */
        if (israelDescHeader1) {
            israelDescHeader1.textContent = 'Tel Aviv';
            israelDescHeader2.textContent = 'Jérusalem';
            israelDescHeader3.textContent = 'Parc national de Massada';
            israelDescHeader4.textContent = 'Ashdod';
            israelDescHeader5.textContent = "Réserve naturelle Ein Gedi +  d'Ashkelon";
            israelDescText1.textContent =
                "Tel Aviv, une métropole jeune et moderne avec une population mixte, n'a vu le jour qu'en 1909. Clubs, bars, communauté artistique florissante, vie amusante et plages attirent artistes, musiciens et jeunes professionnels dans la Tel Aviv sociale. L'architecture Bauhaus a donné à la ville le statut de site UNESCO et le surnom de 'Ville Blanche'.";
            israelDescText2.textContent =
                "Les pèlerins religieux viennent à Jérusalem depuis des siècles, mais il n'est pas nécessaire d'être si religieux pour apprécier l'importance culturelle et historique de la ville. Prévoyez de visiter tous les principaux sites touristiques, mais prenez le temps de vous promener dans les rues de la ville pour essayer de vous faire une idée de la vie quotidienne de cet ancien lieu saint.";
            israelDescText3.textContent =
                "A l'époque de la Grande Révolte, les derniers Juifs qui se sont rebellés contre Rome se sont retranchés à Massada et ont fait de leur lutte désespérée un symbole de la lutte pour la liberté. Grâce aux événements historiques spectaculaires qui se sont déroulés sur la montagne et aux découvertes archéologiques qui y ont été découvertes, l'UNESCO a déclaré le parc national de Massada site du patrimoine mondial.";
            israelDescText4.textContent =
                "Ashdod est l'une des cinq villes les plus peuplées d'Israël. Ici, l'antiquité majestueuse des siècles se mêle à une modernité éclatante. Les touristes attendent de belles plages avec des infrastructures développées et des hôtels confortables, ainsi que d'anciennes forteresses et de beaux parcs.";
            israelDescText5.textContent =
                "La ville d'Ashkelon a 5 000 ans. C'est l'une des plus anciennes villes du monde. Depuis l'Antiquité, il a attiré divers peuples et personnes de différentes couches de la population comme un aimant. Aujourd'hui, c'est l'une des villes les plus vivables d'Israël avec une migration positive en constante augmentation. Ein Gedi est une zone légalement protégée. C'était une ville où se déroulaient des batailles contre des ennemis. Voici une beauté extraordinaire créée par la nature. Le magazine National Geographic a qualifié cette région d'envoûtante. Il y a une oasis au milieu d'un désert sans vie.";
        }

        /* thailand */
        if (thaiDescHeader1) {
            thaiDescHeader1.textContent = 'Bangkok';
            thaiDescHeader2.textContent = 'Monde sous-marin. Bangkok';
            thaiDescHeader3.textContent = 'Parc à thème Nong Nooch';
            thaiDescHeader4.textContent = 'Khao Kheo Open Zoo';
            thaiDescHeader5.textContent = 'Pattaya';

            thaiDescText1.textContent =
                "Bangkok est la capitale de la Thaïlande et l'une des villes les plus fréquentées au monde.Peu importe le nombre de villes que vous visitez, vous n'en trouverez jamais une autre comme Bangkok. Les croyants affluent vers de nombreux temples, comme le Wat Pho, toute la journée. Le soir, la nourriture est frite dans les rues. Et, bien sûr, la vie nocturne ici est incomparable, de Patpong aux bars chics sur les toits. Mais ce n'est pas tout. Les marchés nocturnes, les immenses centres commerciaux et le célèbre bazar du week-end de Chatuchak font de Bangkok la destination idéale pour les acheteurs.";
            thaiDescText2.textContent =
                "Un endroit magnifique dans la capitale de la Thaïlande, l'un des meilleurs endroits au monde où vous pourrez voir le monde sous-marin des mers et des océans.";
            thaiDescText3.textContent =
                "Le parc Nong Nooch est le plus grand jardin botanique d'Asie du Sud-Est. Il contient la plus grande collection privée de plantes au monde. Et vous pouvez également voir des statues de dinosaures en pleine croissance avec des détails incroyables.";
            thaiDescText4.textContent =
                'National Wildlife Refuge avec le deuxième plus grand zoo du monde. De nombreux animaux peuvent être nourris directement des mains, caressés et photographiés. Un spectacle animalier inoubliable sans la participation de personnes.';
            thaiDescText5.textContent =
                "Pattaya est une grande ville de Thaïlande, populaire auprès des touristes. Des vacances à la plage à Pattaya ne sont qu'une petite partie de ce à quoi les voyageurs qui choisissent cette destination peuvent s'attendre. Il existe de nombreux sites historiques - bâtiments, sculptures et musées - ainsi que de nombreux centres commerciaux et autres lieux de divertissement. Chacun trouvera le loisir de goûter. Cela est dû au fait que parmi les touristes, vous pouvez rencontrer à la fois des jeunes et des retraités respectables ou des couples mariés.";
        }

        /* tunisia */
        if (tunisiaDescHeader1) {
            tunisiaDescHeader1.textContent = 'Tunisie';
            tunisiaDescText1.textContent =
                "D'une part, la Tunisie est un pays typique du Maghreb, avec une culture arabo-mauresque et une touche d'influence coloniale française historique. D'autre part, le caractère unique de la Tunisie est donné par le patrimoine chic de l'histoire ancienne, mené par la célèbre Carthage, ainsi que par une variété de ressources naturelles. Le paysage varie des longues plages de sable blanc sur la côte méditerranéenne et les contreforts de l'Atlas oriental au nord aux sables du Sahara au sud. Tout cela rend le pays extrêmement attrayant pour les amoureux de la mer et du soleil qui souhaitent combiner des vacances détendues avec un voyage actif et éducatif.";
        }

        /* vietnam */
        if (vietnamDescHeader1) {
            vietnamDescHeader1.textContent = 'Nha Trang';
            vietnamDescText1.textContent =
                "Nha Trang est la capitale de la plage du Vietnam, et cette définition est suffisante pour comprendre l'essence même de la vie de villégiature en un mot. C'est une ville très bruyante, gaie et pleine d'énergie qui attire chaque année des dizaines de milliers de touristes.";
        }

        /* turkye */
        if (turkyeDescHeader1) {
            turkyeDescHeader1.textContent = 'Bodrum. 2008-2009';
            turkyeDescHeader2.textContent = 'Différents lieux. 2008 - 2010';
            turkyeDescHeader3.textContent = 'Ephèse + Pamukkale';
            turkyeDescHeader4.textContent = 'Istanbul';
            turkyeDescHeader5.textContent = 'Troy';

            turkyeDescText1.textContent =
                "Bodrum - connue dans l'Antiquité sous le nom de 'Halikarnassus', est une ville qui a abrité d'innombrables civilisations qui ont lié le passé et l'avenir pendant 5 000 ans. Aujourd'hui, c'est une station balnéaire turque d'élite sur la côte égéenne, d'où il est facile d'accéder aux îles grecques les plus proches.";
            turkyeDescText2.textContent =
                'Voici des photos collectées de nombreux endroits différents, qui ne se sont pas accumulées suffisamment pour les séparer en blocs séparés.';
            turkyeDescText3.textContent =
                "Ephèse est l'un des monuments les plus célèbres de Turquie, un site du patrimoine mondial de l'UNESCO. C'est un paysage culturel saisissant qui comprend l'héritage des anciens Grecs et Romains, des Byzantins et des Seldjoukides. Le temple d'Artémis a été construit ici, qui a été reconnu comme l'une des sept merveilles du monde. Non loin d'Ephèse se trouve la Maison de la Vierge. Selon la légende, la Vierge Marie a passé ses dernières années dans cette ancienne maison, qui fuyait la persécution après la mort du Christ. Pamukkale est une région de Turquie avec des sources géothermiques, qui n'ont d'analogues nulle part dans le monde. La station balnéaire unique et le magnifique site naturel sont situés dans le sud-ouest du pays, à 20 kilomètres de la ville de Denizli. Le complexe de 17 sources minérales, connu depuis l'Antiquité, est inscrit sur la liste du patrimoine mondial de l'UNESCO et se trouve à la périphérie d'un ancien plateau volcanique, s'élevant à 100 mètres au-dessus de la plaine.";
            turkyeDescText4.textContent =
                "Mystérieuse et majestueuse, bruyante et fabuleusement belle, Istanbul est un pont entre l'Europe et l'Asie, entre l'Orient traditionnel et l'Occident moderne. Tout au long de sa riche histoire, il réussit à changer plusieurs noms et à visiter la capitale de quatre empires : romain et byzantin, ottoman et latin.";
            turkyeDescText5.textContent =
                "Les vestiges de l'ancienne ville, connue sous le nom turc de Truva, sont situés à 20 kilomètres au sud de Canakkale, dans lesquels, soit dit en passant, le même cheval de Troie a été installé, qui a été filmé dans le film avec Brad Pitt en cadeau de la part des réalisateurs. Les vestiges de la ville sont un spectacle plutôt pathétique, mais si vous réduisez vos attentes et faites appel à votre imagination, cela peut toujours vous faire bonne impression.";
        }
        /* indonesia */
        if (baliDescHeader1) {
            baliDescHeader1.textContent = 'Bali - Général';
            baliDescText1.textContent =
                'Un endroit merveilleux pour tout type de passe-temps. Nature étonnante. Des gens bienveillants. Culture autochtone. Et beaucoup plus.';
            baliDescHeader2.textContent = 'Cascade de Kanto Lampo. Forêt des singes. Plage de Kuta. Temple de Sarasvati.';
            baliDescText2.textContent =
                "La forêt des singes est un lieu sacré protégé par le gouvernement, sur la base duquel des recherches sont menées sur le comportement des singes au sein de leurs groupes et aussi avec les gens. La cascade est incroyable :). Kuta est l'une des plages les plus visitées, située dans le quartier populaire du même nom à Bali. Saraswati est le principal temple hindou traditionnel de la région d'Ubud.";
        }
    }
}
