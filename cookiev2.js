//default data obj
const defaultData = {
    cookies: 0,
    clickPower: 1,
    interval: 100,
    cpsShow: 0,
    displayValue: 0 
}

const defaultCursor = {
    count: 0,
    baseCps: 0.1,
    price: 15,
    basePrice: 15,
    priceIncrease: 1.15,
    visible: true,
    tag: "b1"
}

const defaultGrandma = {
    count: 0,
    baseCps: 1,
    basePrice: 100,
    price: 100,
    priceIncrease: 1.15,
    visible: false,
    tag: "b2",
    imagePath: "img/grandma.png"
}

const defaultFarm = {
    count: 0,
    baseCps: 8,
    basePrice: 1100,
    price: 1100,
    priceIncrease: 1.15,
    visible: false,
    tag: "b3",
    imagePath: "img/farm.png"
}

const defaultMine = {
    count: 0,
    baseCps: 47,
    basePrice: 12000,
    price: 12000,
    priceIncrease: 1.15,
    visible: false,
    tag: "b4",
    imagePath: "img/mine.png"
}

const defaultFactory = {
    count: 0,
    baseCps: 260,
    basePrice: 130000,
    price: 130000,
    priceIncrease: 1.15,
    visible: false,
    tag: "b5",
    imagePath: "img/factory.png"
}

const defaultBank = {
    count: 0,
    baseCps: 1400,
    price: 1400000,
    basePrice: 1400000,
    priceIncrease: 1.15,
    visible: false,
    tag: "b6",
    imagePath:"img/bank.png"
}

const defaultTemple = {
    count: 0,
    baseCps: 7800,
    price: 20000000,
    basePrice: 20000000,
    priceIncrease: 1.15,
    visible: false,
    tag: "b7",
    imagePath: "img/temple.png"
}

const defaultWizard = {
    count: 0,
    baseCps: 44000,
    price: 330000000,
    basePrice: 330000000,
    priceIncrease: 1.15,
    visible: false,
    tag: "b8",
    imagePath: "img/wizardtower.png"
}

const defaultShipment = {
    count: 0,
    baseCps: 260000,
    price: 5100000000,
    basePrice: 5100000000,
    priceIncrease: 1.15,
    visible: false,
    tag: "b9",
    imagePath: "img/shipment.png"
}

const defaultAlchemy = {
    count: 0,
    baseCps: 1600000,
    price: 75000000000,
    basePrice: 75000000000,
    priceIncrease: 1.15,
    visible: false,
    tag: "b10",
    imagePath: "img/alchemylab.png"
}

const defaultPortal = {
    count: 0,
    baseCps: 10000000,
    price: 1000000000000,
    basePrice: 1000000000000,
    priceIncrease: 1.15,
    visible: false,
    tag: "b11",
    imagePath: "img/portal.png"
}

const defaultTimeMachine = {
    count: 0,
    baseCps: 65000000,
    price: 14000000000000,
    basePrice: 14000000000000,
    priceIncrease: 1.15,
    visible: false,
    tag: "b12",
    imagePath: "img/timemachine.png"
}

const defaultAntimatter = {
    count: 0,
    baseCps: 430000000,
    price: 170000000000000,
    basePrice: 170000000000000,
    priceIncrease: 1.15,
    visible: false,
    tag: "b13",
    imagePath: "img/antimattercondenser.png"
}

const defaultPrism = {
    count: 0,
    baseCps: 2900000000,
    price: 2100000000000000,
    basePrice: 2100000000000000,
    priceIncrease: 1.15,
    visible: false,
    tag: "b14",
    imagePath: 'img/prism.png'
}

const defaultChancemaker = {
    count: 0,
    baseCps: 21000000000,
    price: 26000000000000000,
    basePrice: 26000000000000000,
    priceIncrease: 1.15,
    visible: false,
    tag: "b15",
    imagePath: 'img/chanceMaker.png',
}

const defaultFractal = {
    count: 0,
    baseCps: 150000000000,
    price: 310000000000000000,
    basePrice: 310000000000000000,
    priceIncrease: 1.15,
    visible: false,
    tag: "b16",
    imagePath:'img/fractalEngine.png'
}

const defaultJavascript = {
    count: 0,
    baseCps: 1100000000000,
    price: 71000000000000000000,
    basePrice: 71000000000000000000,
    priceIncrease: 1.15,
    visible: false,
    tag: "b17",
    imagePath:"img/p.png"
}

const defaultIdleverse = {
    count: 0,
    baseCps: 8300000000000,
    price: 12000000000000000000000,
    basePrice: 12000000000000000000000,
    priceIncrease: 1.15,
    visible: false,
    tag: "b18",
    imagePath:"img/q.png"
}

const defaultCortex = {
    count: 0,
    baseCps: 64000000000000,
    price: 1900000000000000000000000,
    basePrice: 1900000000000000000000000,
    priceIncrease: 1.15,
    visible: false,
    tag: "b19",
    imagePath:"img/r.png"
}

const defaultYou = {
    count: 0,
    baseCps: 510000000000000,
    price: 540000000000000000000000000,
    basePrice: 540000000000000000000000000,
    priceIncrease: 1.15,
    visible: true,
    tag: "b20",
    imagePath:"img/you.png"
}

//kopie default dat pro upravu
let gameData = { ...defaultData}
let cursor = { ...defaultCursor}
let grandma = { ...defaultGrandma}
let farm = { ...defaultFarm}
let mine = { ...defaultMine}
let factory = { ...defaultFactory}
let bank = { ...defaultBank}
let temple = { ...defaultTemple}
let wizard = { ...defaultWizard}
let shipment = { ...defaultShipment}
let alchemy = { ...defaultAlchemy}
let portal = { ...defaultPortal}
let timeMachine = { ...defaultTimeMachine}
let antimatter = { ...defaultAntimatter}
let prism = { ...defaultPrism}
let chanceMaker = { ...defaultChancemaker}
let fractal = { ...defaultFractal}
let javascript = { ...defaultJavascript}
let idleverse = { ...defaultIdleverse}
let cortex = { ...defaultCortex}
let you = { ...defaultYou}

//building arr pro loopovani
const buildings = [
    cursor,
    grandma,
    farm,
    mine,
    factory,
    bank,
    temple,
    wizard,
    shipment,
    alchemy,
    portal,
    timeMachine,
    antimatter,
    prism,
    chanceMaker,
    fractal,
    javascript,
    idleverse,
    cortex,
    you
];


//game timer pri otevreni okna + load small upg okenek
window.onload = function() {
    setInterval(gameTick, gameData.interval);

        const container = document.getElementById('storeSection');
        const numElements = 60;
        const backgroundWidth = 48
        const backgroundHeight = -48;

        if (container !== null) {
            //arr pro ceny
            const prices = [100, 1000, 11000, 120000, 1300000, 14000000, 200000000, 3300000000, 51000000000, 750000000000, 10000000000000, 140000000000000, 1700000000000000, 
            21000000000000000, 260000000000000000, 3100000000000000000, 710000000000000000000, 120000000000000000000000, 19000000000000000000000000, 5400000000000000000000000000,
            500, 5000, 55000, 600000, 6500000, 70000000, 1000000000, 16500000000, 255000000000, 3750000000000, 50000000000000, 700000000000000, 85000000000000000,
            1050000000000000000, 1300000000000000000, 15500000000000000000, 3550000000000000000000, 600000000000000000000000, 95000000000000000000000000,
            270000000000000000000000000000, 10000, 50000, 550000, 6000000, 65000000, 700000000, 10000000000, 165000000000, 2550000000000, 37500000000000,
            500000000000000, 7000000000000000, 8500000000000000000, 105000000000000000000, 13000000000000000000, 155000000000000000000, 35500000000000000000000,
            6000000000000000000000000, 95000000000000000000000000, 27000000000000000000000000000000];

            //generace small upg
            for (let i = 0; i < numElements; i++) {
                const element = document.createElement('div');
                const uniqueId = `upgrade${i + 1}`;
                element.classList.add('crate');
                element.classList.add('hidden')
                element.id = uniqueId;

                const background = document.createElement('div');
                background.classList.add('iconBG');

                let posX, posY;

                if (i < 20) {
                    posX = -(i * backgroundWidth);
                    posY = 0; 
                } else if (i < 40) {
                    posX = -((i - 20) * backgroundWidth);
                    posY = backgroundHeight;
                } else {
                    posX = -((i - 40) * backgroundWidth);
                    posY = 2 * backgroundHeight;
                }

                background.style.backgroundPosition = `${posX}px ${posY}px`;

                const price = prices[i] || 0;
                element.setAttribute('data-price', price);

                element.appendChild(background);

                container.appendChild(element);                
            }
        }

        setSizeLeftCanvas();
        resizeCanvases();
        
    };

//formatovani score pro hezci cisla
function formatScore(number) {
    if(number >= 1000) {
    const suffixes = ['', 'Thousand', 'Milion', 'Bilion', 'Trilion', 'Quadrillion', 'Quintilion', 'Sextilion', 'Septilion', 'Octillion', 'Nonillion', 'Decillion', 'Undecillion', 'Duodecillion'];
    const suffixIndex = Math.floor(Math.log10(number) / 3); //3 na konci urcuje desetinou carku
    const formattedScore = (number / Math.pow(1000, suffixIndex)).toFixed(3) + suffixes[suffixIndex];
    return formattedScore;
    }else{
        return number;
    }
  }

 //game tick zde se provadi vetsina vypoctu s kazdym tickem timeru
function gameTick(){
    let cps = 0;
    cps +=  cursor.count * cursor.baseCps;
    cps += grandma.count * grandma.baseCps;
    cps += farm.count * farm.baseCps;
    cps += mine.count * mine.baseCps;
    cps += factory.count * factory.baseCps;
    cps += bank.count * bank.baseCps;
    cps += temple.count * temple.baseCps
    cps += wizard.count * wizard.baseCps
    cps += shipment.count * shipment.baseCps
    cps += alchemy.count * alchemy.baseCps
    cps += portal.count * portal.baseCps
    cps += timeMachine.count * timeMachine.baseCps
    cps += antimatter.count * antimatter.baseCps
    cps += prism.count * prism.baseCps
    cps += chanceMaker.count * chanceMaker.baseCps
    cps += fractal.count * fractal.baseCps
    cps += javascript.count * javascript.baseCps
    cps += idleverse.count * idleverse.baseCps
    cps += cortex.count * cortex.baseCps
    cps += you.count * you.baseCps
    gameData.cookies += cps / (1000 / gameData.interval);
    gameData.displayValue = Math.floor(gameData.cookies);
    gameData.cpsShow = cps.toFixed(1);
    
    updateData();
}

/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
BUILDING UPGRADES
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

function cursorUpgrade() {
    cursor.count++;
    gameData.cookies -= cursor.price
    cursor.price = Math.ceil(cursor.basePrice * Math.pow(cursor.priceIncrease, cursor.count));
    updateData();
}
building0.addEventListener("click", cursorUpgrade);

function grandmaUpgrade(){
    grandma.count++;
    gameData.cookies -= grandma.price;
    grandma.price = Math.ceil(grandma.basePrice * Math.pow(grandma.priceIncrease, grandma.count));
    updateData();
    updateMidCanvas();
}
building1.addEventListener("click", grandmaUpgrade);

function farmUpgrade(){
    farm.count++;
    gameData.cookies -= farm.price;
    farm.price = Math.ceil(farm.basePrice * Math.pow(farm.priceIncrease, farm.count));
    updateData();
    updateMidCanvas();
}
building2.addEventListener("click", farmUpgrade);

function mineUpgrade(){
    mine.count++;
    gameData.cookies -= mine.price;
    mine.price = Math.ceil(mine.basePrice * Math.pow(mine.priceIncrease, mine.count));
    updateData();
    updateMidCanvas();
}
building3.addEventListener("click", mineUpgrade);

function factoryUpgrade() {
    factory.count++;
    gameData.cookies -= factory.price
    factory.price = Math.ceil(factory.basePrice * Math.pow(factory.priceIncrease, factory.count));
    updateData();
    updateMidCanvas();
}
building4.addEventListener('click', factoryUpgrade);

function bankUpgrade() {
    bank.count++;
    gameData.cookies -= bank.price
    bank.price = Math.ceil(bank.basePrice * Math.pow(bank.priceIncrease, bank.count));
    updateData();
    updateMidCanvas();
}
building5.addEventListener('click', bankUpgrade);

function templeUpgrade() {
    temple.count++;
    gameData.cookies -= temple.price
    temple.price = Math.ceil(temple.basePrice * Math.pow(temple.priceIncrease, temple.count));
    updateData();
    updateMidCanvas();
}
building6.addEventListener('click', templeUpgrade);

function wizardUpgrade() {
    wizard.count++;
    gameData.cookies -= wizard.price
    wizard.price = Math.ceil(wizard.basePrice * Math.pow(wizard.priceIncrease, wizard.count));
    updateData();
    updateMidCanvas();
}
building7.addEventListener('click', wizardUpgrade);

function shipmentUpgrade() {
    shipment.count++;
    gameData.cookies -= shipment.price
    shipment.price = Math.ceil(shipment.basePrice * Math.pow(shipment.priceIncrease, shipment.count));
    updateData();
    updateMidCanvas();
}
building8.addEventListener('click', shipmentUpgrade);

function alchemyUpgrade() {
    alchemy.count++;
    gameData.cookies -= alchemy.price
    alchemy.price = Math.ceil(alchemy.basePrice * Math.pow(alchemy.priceIncrease, alchemy.count));
    updateData();
    updateMidCanvas();
}
building9.addEventListener('click', alchemyUpgrade);

function portalUpgrade() {
    portal.count++;
    gameData.cookies -= portal.price
    portal.price = Math.ceil(portal.basePrice * Math.pow(portal.priceIncrease, portal.count));
    updateData();
    updateMidCanvas();
}
building10.addEventListener('click', portalUpgrade);

function timeMachineUpgrade() {
    timeMachine.count++;
    gameData.cookies -= timeMachine.price
    timeMachine.price = Math.ceil(timeMachine.basePrice * Math.pow(timeMachine.priceIncrease, timeMachine.count));
    updateData();
    updateMidCanvas();
}
building11.addEventListener('click', timeMachineUpgrade);

function antimatterUpgrade() {
    antimatter.count++;
    gameData.cookies -= antimatter.price
    antimatter.price = Math.ceil(antimatter.basePrice * Math.pow(antimatter.priceIncrease, antimatter.count));
    updateData();
    updateMidCanvas();
}
building12.addEventListener('click', antimatterUpgrade);

function prismUpgrade() {
    prism.count++;
    gameData.cookies -= prism.price
    prism.price = Math.ceil(prism.basePrice * Math.pow(prism.priceIncrease, prism.count));
    updateData();
    updateMidCanvas();
}
building13.addEventListener('click', prismUpgrade);

function chanceMakerUpgrade() {
    chanceMaker.count++;
    gameData.cookies -= chanceMaker.price
    chanceMaker.price = Math.ceil(chanceMaker.basePrice * Math.pow(chanceMaker.priceIncrease, chanceMaker.count));
    updateData();
    updateMidCanvas();
}
building14.addEventListener('click', chanceMakerUpgrade);

function fractalUpgrade() {
    fractal.count++;
    gameData.cookies -= fractal.price
    fractal.price = Math.ceil(fractal.basePrice * Math.pow(fractal.priceIncrease, fractal.count));
    updateData();
    updateMidCanvas();
}
building15.addEventListener('click', fractalUpgrade);

function javascriptUpgrade() {
    javascript.count++;
    gameData.cookies -= javascript.price
    javascript.price = Math.ceil(javascript.basePrice * Math.pow(javascript.priceIncrease, javascript.count));
    updateData();
    updateMidCanvas();
}
building16.addEventListener('click', javascriptUpgrade);

function idleverseUpgrade() {
    idleverse.count++;
    gameData.cookies -= idleverse.price
    idleverse.price = Math.ceil(idleverse.basePrice * Math.pow(idleverse.priceIncrease, idleverse.count));
    updateData();
    updateMidCanvas();
}
building17.addEventListener('click', idleverseUpgrade);

function cortexUpgrade() {
    cortex.count++;
    gameData.cookies -= cortex.price
    cortex.price = Math.ceil(cortex.basePrice * Math.pow(cortex.priceIncrease, cortex.count));
    updateData();
    updateMidCanvas();
}
building18.addEventListener('click', cortexUpgrade);

function youUpgrade() {
    you.count++;
    gameData.cookies -= you.price
    you.price = Math.ceil(you.basePrice * Math.pow(you.priceIncrease, you.count));
    updateData();
    updateMidCanvas();
}
building19.addEventListener('click', youUpgrade);

//hromadný update dat
function updateData() {
    score.innerHTML = formatScore(gameData.displayValue);
    overTime.innerHTML = "cookies per sec: " + formatScore(gameData.cpsShow);
    building0Price.innerHTML = formatScore(cursor.price);
    building0Owned.innerHTML = cursor.count;
    building1Price.innerHTML = formatScore(grandma.price);
    building1Owned.innerHTML = grandma.count;
    building2Price.innerHTML = formatScore(farm.price);
    building2Owned.innerHTML = farm.count;
    building3Price.innerHTML = formatScore(mine.price);
    building3Owned.innerHTML = mine.count;
    building4Price.innerHTML = formatScore(factory.price);
    building4Owned.innerHTML = factory.count;
    building5Price.innerHTML = formatScore(bank.price);
    building5Owned.innerHTML = bank.count;
    building6Price.innerHTML = formatScore(temple.price);
    building6Owned.innerHTML = temple.count;
    building7Price.innerHTML = formatScore(wizard.price);
    building7Owned.innerHTML = wizard.count;
    building8Price.innerHTML = formatScore(shipment.price);
    building8Owned.innerHTML = shipment.count;
    building9Price.innerHTML = formatScore(alchemy.price);
    building9Owned.innerHTML = alchemy.count;
    building10Price.innerHTML = formatScore(portal.price);
    building10Owned.innerHTML = portal.count;
    building11Price.innerHTML = formatScore(timeMachine.price);
    building11Owned.innerHTML = timeMachine.count;
    building12Price.innerHTML = formatScore(antimatter.price);
    building12Owned.innerHTML = antimatter.count;
    building13Price.innerHTML = formatScore(prism.price);
    building13Owned.innerHTML = prism.count;
    building14Price.innerHTML = formatScore(chanceMaker.price);
    building14Owned.innerHTML = chanceMaker.count;
    building15Price.innerHTML = formatScore(fractal.price);
    building15Owned.innerHTML = fractal.count;
    building16Price.innerHTML = formatScore(javascript.price);
    building16Owned.innerHTML = javascript.count;
    building17Price.innerHTML = formatScore(idleverse.price);
    building17Owned.innerHTML = idleverse.count;
    building18Price.innerHTML = formatScore(cortex.price);
    building18Owned.innerHTML = cortex.count;
    building19Price.innerHTML = formatScore(you.price);
    building19Owned.innerHTML = you.count;

    //cursor 
    if (gameData.cookies >= cursor.price) {
        building0.classList.remove("disabled");
        cursorImg.style.backgroundPosition = '0px 0px';
        building0Name.innerHTML = "Cursor";
        building0Price.style.color = '#39FF14';
    }else {
        building0.classList.add("disabled");
        building0Price.style.color = 'red';
    }

    //grandma
    if (cursor.visible === true) {
        building1.classList.remove("hidden");
    }
    if (gameData.cookies >= grandma.price) {
        building1.classList.remove("disabled");
        grannyImg.style.backgroundPosition = '0px -64px';
        building1Name.innerHTML = "Grandma";
        building1Price.style.color = '#39FF14';
    }else {
        building1.classList.add("disabled");
        building1Price.style.color = 'red';
    }

    //farm
    if (gameData.cookies >= cursor.price) {
        building2.classList.remove("hidden")
    }
    if (gameData.cookies >= farm.price) {
        building2.classList.remove("disabled");
        farmImg.style.backgroundPosition = "0px -193px";
        building2Name.innerHTML = "Farm";
        building2Price.style.color = '#39FF14';
    }else {
        building2.classList.add("disabled");
        building2Price.style.color = 'red';
    }

    //mine
    if (gameData.cookies >= grandma.price) {
        building3.classList.remove("hidden");
    }
    if (gameData.cookies >= mine.price) {
        building3.classList.remove("disabled");
        mineImg.style.backgroundPosition = "0px -256px";
        building3Name.innerHTML = "Mine"
        building3Price.style.color = '#39FF14';
    } else {
        building3.classList.add("disabled");
        building3Price.style.color = 'red';
    }

    //factory
    if (gameData.cookies >= farm.price) {
        building4.classList.remove("hidden");
    }
    if (gameData.cookies >= factory.price) {
        building4.classList.remove("disabled");
        factoryImg.style.backgroundPosition = "0px -320px";
        building4Name.innerHTML = "Factory";
        building4Price.style.color = '#39FF14';
    } else {
        building4.classList.add("disabled");
        building4Price.style.color = 'red';
    }

    //bank
    if (gameData.cookies >= mine.price) {
        building5.classList.remove("hidden");
    }
    if (gameData.cookies >= bank.price) {
        building5.classList.remove("disabled");
        bankImg.style.backgroundPosition = "0px -384px";
        building5Name.innerHTML = "Bank";
        building5Price.style.color = '#39FF14';
    } else {
        building5.classList.add("disabled");
        building5Price.style.color = 'red';
    }

    //temple
    if (gameData.cookies >= factory.price) {
        building6.classList.remove("hidden");
    }
    if (gameData.cookies >= temple.price) {
        building6.classList.remove("disabled");
        templeImg.style.backgroundPosition = "0px -448px";
        building6Name.innerHTML = "Temple"
        building6Price.style.color = '#39FF14';
    } else {
        building6.classList.add("disabled");
        building6Price.style.color = 'red';
    }

    //wizard
    if (gameData.cookies >= bank.price) {
        building7.classList.remove("hidden");
    }
    if (gameData.cookies >= wizard.price) {
        building7.classList.remove("disabled");
        wizardImg.style.backgroundPosition = "0px -512px";
        building7Name.innerHTML = "Wizard Tower";
        building7Price.style.color = '#39FF14';
    } else {
        building7.classList.add("disabled");
        building7Price.style.color = 'red';
    }

    //shipment
    if (gameData.cookies >= temple.price) {
        building8.classList.remove("hidden")
    }
    if (gameData.cookies >= shipment.price) {
        building8.classList.remove("disabled");
        shipmentImg.style.backgroundPosition = "0px -577px";
        building8Name.innerHTML = "Shipment";
        building8Price.style.color = '#39FF14';
    } else {
        building8.classList.add("disabled");
        building8Price.style.color = 'red';
    }

    //alchemy
    if (gameData.cookies >= wizard.price) {
        building9.classList.remove("hidden")
    }
    if (gameData.cookies >= alchemy.price) {
        building9.classList.remove("disabled");
        alchemyImg.style.backgroundPosition = "0px -641px";
        building9Name.innerHTML = "Alchemy Lab";
        building9Price.style.color = '#39FF14';
    } else {
        building9.classList.add("disabled");
        building9Price.style.color = 'red';
    }

    //portal
    if (gameData.cookies >= shipment.price) {
        building10.classList.remove("hidden")
    }
    if (gameData.cookies >= portal.price) {
        building10.classList.remove("disabled");
        portalImg.style.backgroundPosition = "0px -704px";
        building10Name.innerHTML = "Portal";
        building10Price.style.color = '#39FF14';
    } else {
        building10.classList.add("disabled");
        building10Price.style.color = 'red';
    }

    //time machine
    if (gameData.cookies >= alchemy.price) {
        building11.classList.remove("hidden")
    }
    if (gameData.cookies >= timeMachine.price) {
        building11.classList.remove("disabled");
        timeImg.style.backgroundPosition = "0px -768px";
        building11Name.innerHTML = "Time Machine";
        building11Price.style.color = '#39FF14';
    } else {
        building11.classList.add("disabled");
        building11Price.style.color = 'red';
    }

    //antimatter
    if (gameData.cookies >= portal.price) {
        building12.classList.remove("hidden")
    }
    if (gameData.cookies >= antimatter.price) {
        building12.classList.remove("disabled");
        antimatterImg.style.backgroundPosition = "0px -832px";
        building12Name.innerHTML = "Antimatter Condenser";
        building12Price.style.color = '#39FF14';
    } else {
        building12.classList.add("disabled");
        building12Price.style.color = 'red';
    }

    //prism
    if (gameData.cookies >= timeMachine.price) {
        building13.classList.remove("hidden")
    }
    if (gameData.cookies >= prism.price) {
        building13.classList.remove("disabled");
        prismImg.style.backgroundPosition = "0px -896px";
        building13Name.innerHTML = "Prism";
        building13Price.style.color = '#39FF14';
    } else {
        building13.classList.add("disabled");
        building13Price.style.color = 'red';
    }

    //chancemaker
    if (gameData.cookies >= antimatter.price) {
        building14.classList.remove("hidden")
    }
    if (gameData.cookies >= chanceMaker.price) {
        building14.classList.remove("disabled");
        chanceMakerImg.style.backgroundPosition = "0px -960px";
        building14Name.innerHTML = "ChanceMaker";
        building14Price.style.color = '#39FF14';
    } else {
        building14.classList.add("disabled");
        building14Price.style.color = 'red';
    }

    //fractal
    if (gameData.cookies >= prism.price) {
        building15.classList.remove("hidden")
    }
    if (gameData.cookies >= fractal.price) {
        building15.classList.remove("disabled");
        fractalImg.style.backgroundPosition = "0px -1024px";
        building15Name.innerHTML = "Fractal";
        building15Price.style.color = '#39FF14';
    } else {
        building15.classList.add("disabled");
        building15Price.style.color = 'red';
    }

    //javascript
    if (gameData.cookies >= chanceMaker.price) {
        building16.classList.remove("hidden")
    }
    if (gameData.cookies >= javascript.price) {
        building16.classList.remove("disabled");
        javascriptImg.style.backgroundPosition = "0px -1088px";
        building16Name.innerHTML = "JavaScript console";
        building16Price.style.color = '#39FF14';
    } else {
        building16.classList.add("disabled");
        building16Price.style.color = 'red';
    }

    //idleverse
    if (gameData.cookies >= fractal.price) {
        building17.classList.remove("hidden")
    }
    if (gameData.cookies >= idleverse.price) {
        building17.classList.remove("disabled");
        idleverseImg.style.backgroundPosition = "0px -1152px";
        building17Name.innerHTML = "Idleverse";
        building17Price.style.color = '#39FF14';
    } else {
        building17.classList.add("disabled");
        building17Price.style.color = 'red';
    }

    //cortex
    if (gameData.cookies >= javascript.price) {
        building18.classList.remove("hidden")
    }
    if (gameData.cookies >= cortex.price) {
        building18.classList.remove("disabled");
        cortexImg.style.backgroundPosition = "0px -1216px";
        building18Name.innerHTML = "Cortex";
        building18Price.style.color = '#39FF14';
    } else {
        building18.classList.add("disabled");
        building18Price.style.color = 'red';
    }

    //you
    if (gameData.cookies >= idleverse.price) {
        building19.classList.remove("hidden")
    }
    if (gameData.cookies >= you.price) {
        building19.classList.remove("disabled");
        youImg.style.backgroundPosition = "0px -1280px";
        building19Name.innerHTML = "You";
        building19Price.style.color = '#39FF14';
    } else {
        building19.classList.add("disabled");
        building19Price.style.color = 'red';
    }

    //cookie rain modifikace
    if (gameData.cpsShow >= 10 && userProgress != 1) {
        userProgress++;
        numBallsToShow = 50;
        balls.length = 0;
        createBalls(numBallsToShow);
    }
    if (gameData.cpsShow >= 150 && userProgressTwo != 1) {
        userProgressTwo++;
        numBallsToShow = 150;
        createBalls(numBallsToShow);
    }
    if (gameData.cpsShow >= 1000 && userProgressThree != 1) {
        userProgressThree++;
        numBallsToShow = 200;
        createBalls(numBallsToShow);
    }

    /* loop pro male upg tlacitka */
    for (let i = 0; i < buildings.length; i++) {
        const building = buildings[i];
        let buttonIndex = i + 1;
        


        // conditions pro ukazani tlacitek
        if (building.count >= 2) {
            let button = document.getElementById(`upgrade${buttonIndex}`);
            const upgradePrice = parseFloat(button.getAttribute('data-price'));

            button.classList.remove("hidden");
                if (gameData.cookies >= upgradePrice) {
                    button.classList.remove("noMuny");
                } else {
                    button.classList.add("noMuny");
                }
        }

        if (building.count >= 5) {
            buttonIndex = i + 21;
            let button = document.getElementById(`upgrade${buttonIndex}`);
            const upgradePrice = parseFloat(button.getAttribute('data-price'));
            button.classList.remove("hidden");
                if (gameData.cookies >= upgradePrice) {
                    button.classList.remove("noMuny");
                } else {
                    button.classList.add("noMuny");
                }
        }

        if (building.count >= 10) {
            buttonIndex = i + 41;
            let button = document.getElementById(`upgrade${buttonIndex}`)
            const upgradePrice = parseFloat(button.getAttribute('data-price'));
            button.classList.remove("hidden");
                if (gameData.cookies >= upgradePrice) {
                    button.classList.remove("noMuny");
                } else {
                    button.classList.add("noMuny");
                }
        }
    }
    /* loop pro zobrazeni canvas rows */
    for (let i = 1; i < 20; i++) {
        const building = buildings[i];
        const canvasElement = document.getElementById(`row${i}`);
        const canvasBeam = document.getElementById(`beam${i}`)

        if (building.count === 1) {
            canvasElement.classList.remove("hidden");
            canvasBeam.classList.remove("hidden");
        }
    }

}

    //progress pro cookie rain track
    let userProgress = 0;
    let userProgressTwo = 0;
    let userProgressThree = 0;

//default click na susenku
function clickOnCookie() {
    gameData.cookies += gameData.clickPower;
    updateData();
}
bigCookie.addEventListener("click", clickOnCookie);

//cheat pro testování
function cheat() {
    gameData.cookies += 540000000000000000000000000;
    updateData();
}
cheatbtn.addEventListener("click", cheat);

/* canvasMid */

//mid canvas arr
const canvases = [];
//loop na pushovani IDs do canv arr
for (let i = 1; i <= 19; i++) {
  const canvas = document.getElementById(`mid${i}`);
  canvases.push(canvas);
}

// resize podle parent elementu
function resizeCanvases() {
  //lokalizace parent elementu
  const row = document.querySelector(".center-bot");

  //ulozeni prom podle parent elementu
  const width = row.clientWidth;
  

  // nastaveni velikosti canvasu podle parentu
  canvases.forEach((canvas) => {
    canvas.width = width;
  });
}
window.addEventListener("resize", resizeCanvases);

// Preload img
let imagesToLoad = [];
for (let i = 0; i < 20; i++) {
    let img = new Image();
    img.src = buildings[i].imagePath;
    imagesToLoad.push(img);
}

// tracker load
let imagesLoaded = 0;

// load listener
imagesToLoad.forEach(img => {
    img.onload = function() {
        imagesLoaded++;
        if (imagesLoaded === imagesToLoad.length) {
            updateMidCanvas();
        }
    };
});



function updateMidCanvas() {
    //loop 1 grandma only
    for (let i = 1; i < 2; i++) {
        let canvas = document.getElementById(`mid${i}`);
        let ctx = canvas.getContext("2d");
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        let startX = 5; 
        let startY = 30;
        let imageWidth = 55; 
        let imageHeight = 55; 
        let spacingX = 25; 
        let spacingY = 15;

        for (let j = 0; j < buildings[i].count; j++) {
            let offsetX = startX + j * spacingX; // X position calc
            let offsetY = startY + (j % 2 === 0 ? 0 : spacingY); // Y coord 
            ctx.drawImage(imagesToLoad[i], offsetX, offsetY, imageWidth, imageHeight);
        }
    }
    // loop 2 farm + mine
    for (let i = 2; i < 4; i++) {
        let canvas = document.getElementById(`mid${i}`);
        let ctx = canvas.getContext("2d");
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        let startX = 5; 
        let startY = 35;
        let imageWidth = 55; 
        let imageHeight = 55; 
        let spacingX = 60; 
        let spacingY = 15;

        for (let j = 0; j < buildings[i].count; j++) {
            let offsetX = startX + j * spacingX; 
            let offsetY = startY + (j % 2 === 0 ? 0 : spacingY); 
            ctx.drawImage(imagesToLoad[i], offsetX, offsetY, imageWidth, imageHeight);
        }
    }
    // loop 3 factory only
    for (let i = 4; i < 5; i++) {
        let canvas = document.getElementById(`mid${i}`);
        let ctx = canvas.getContext("2d");
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        let startX = 5; 
        let startY = 25;
        let imageWidth = 55; 
        let imageHeight = 55; 
        let spacingX = 60; 
        

        for (let j = 0; j < buildings[i].count; j++) {
            let offsetX = startX + j * spacingX; 
            let offsetY = startY;
            ctx.drawImage(imagesToLoad[i], offsetX, offsetY, imageWidth, imageHeight);
        }
    }
    //bank only loop
    for (let i = 5; i < 6; i++) {
        let canvas = document.getElementById(`mid${i}`);
        let ctx = canvas.getContext("2d");
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        let startX = 5; 
        let startY = 60;
        let imageWidth = 55; 
        let imageHeight = 55; 
        let spacingX = 60;

        for (let j = 0; j < buildings[i].count; j++) {
            let offsetX = startX + j * spacingX; 
            let offsetY = startY;
            ctx.drawImage(imagesToLoad[i], offsetX, offsetY, imageWidth, imageHeight);
        }
    }
    // temple + wiz loop + ship + alch + port + time
    for (let i = 6; i < 12; i++) {
        let canvas = document.getElementById(`mid${i}`);
        let ctx = canvas.getContext("2d");
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        let startX = 5; 
        let startY = 35;
        let imageWidth = 55; 
        let imageHeight = 55; 
        let spacingX = 45; 
        let spacingY = 15;

        for (let j = 0; j < buildings[i].count; j++) {
            let offsetX = startX + j * spacingX; 
            let offsetY = startY + (j % 2 === 0 ? 0 : spacingY); 
            ctx.drawImage(imagesToLoad[i], offsetX, offsetY, imageWidth, imageHeight);
        }
    }
    //antimatter solo
    for (let i = 12; i < 13; i++) {
        let canvas = document.getElementById(`mid${i}`);
        let ctx = canvas.getContext("2d");
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        let startX = 2; 
        let startY = 25;
        let imageWidth = 60; 
        let imageHeight = 60; 
        let spacingX = 65; 
        let spacingY = 25;

        for (let j = 0; j < buildings[i].count; j++) {
            let offsetX = startX + j * spacingX; 
            let offsetY = startY + (j % 2 === 0 ? 0 : spacingY); 
            ctx.drawImage(imagesToLoad[i], offsetX, offsetY, imageWidth, imageHeight);
        }
    }
    //prism solo loop
    for (let i = 13; i < 14; i++) {
        let canvas = document.getElementById(`mid${i}`);
        let ctx = canvas.getContext("2d");
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        let startX = 2; 
        let startY = 35;
        let imageWidth = 55; 
        let imageHeight = 55; 
        let spacingX = 65; 

        for (let j = 0; j < buildings[i].count; j++) {
            let offsetX = startX + j * spacingX; 
            let offsetY = startY;
            ctx.drawImage(imagesToLoad[i], offsetX, offsetY, imageWidth, imageHeight);
        }
    }
    //chance + fract
    for (let i = 14; i < 16; i++) {
        let canvas = document.getElementById(`mid${i}`);
        let ctx = canvas.getContext("2d");
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        let startX = 2; 
        let startY = 35;
        let imageWidth = 55; 
        let imageHeight = 55; 
        let spacingX = 30; 
        let spacingY = 25;

        for (let j = 0; j < buildings[i].count; j++) {
            let offsetX = startX + j * spacingX; 
            let offsetY = startY + (j % 2 === 0 ? 0 : spacingY); 
            ctx.drawImage(imagesToLoad[i], offsetX, offsetY, imageWidth, imageHeight);
        }
    }
    //javascript b loop
    for (let i = 16; i < 17; i++) {
        let canvas = document.getElementById(`mid${i}`);
        let ctx = canvas.getContext("2d");
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        let startX = 5; 
        let startY = 8;
        let imageWidth = 20; 
        let imageHeight = 100; 
        let spacingX = 20; 
        let spacingY = 20;

        for (let j = 0; j < buildings[i].count; j++) {
            let offsetX = startX + j * spacingX; 
            let offsetY = startY + (j % 2 === 0 ? 0 : spacingY); 
            ctx.drawImage(imagesToLoad[i], offsetX, offsetY, imageWidth, imageHeight);
        }
    }
    //idleverse + cortex
    for (let i = 17; i < 19; i++) {
        let canvas = document.getElementById(`mid${i}`);
        let ctx = canvas.getContext("2d");
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        let startX = 5; 
        let startY = 12;
        let imageWidth = 60; 
        let imageHeight = 60; 
        let spacingX = 35; 
        let spacingY = 50;

        for (let j = 0; j < buildings[i].count; j++) {
            let offsetX = startX + j * spacingX; 
            let offsetY = startY + (j % 2 === 0 ? 0 : spacingY); 
            ctx.drawImage(imagesToLoad[i], offsetX, offsetY, imageWidth, imageHeight);
        }
    }
    //you loop
    for (let i = 19; i < 20; i++) {
        let canvas = document.getElementById(`mid${i}`);
        let ctx = canvas.getContext("2d");
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        let startX = 5; 
        let startY = 24;
        let imageWidth = 55; 
        let imageHeight = 55; 
        let spacingX = 32; 
        let spacingY = 15;

        for (let j = 0; j < buildings[i].count; j++) {
            let offsetX = startX + j * spacingX; 
            let offsetY = startY + (j % 2 === 0 ? 0 : spacingY); 
            ctx.drawImage(imagesToLoad[i], offsetX, offsetY, imageWidth, imageHeight);
        }
    }
}
window.addEventListener("resize", updateMidCanvas)
 
/* canvasLeft */

const canvasLeft = document.getElementById('cookieRain');
const ctx = canvasLeft.getContext('2d');

//resize pro levý canvas
function setSizeLeftCanvas() {
    let leftSection = document.querySelector(".left-section");
    canvasLeft.height = leftSection.clientHeight;
    canvasLeft.width = leftSection.clientWidth;
  }
window.addEventListener("resize", setSizeLeftCanvas);

//nahrani cookie
const cookieImage = new Image();
cookieImage.src = 'img/cookie.png';

const balls = []; // array do ktereho se pridaji cookies
let numBallsToShow = 0; // start pocet pro vykresleni

const cookieRadius = 30; // velikost
const cookieSpeedY = 1; // speed padani

// vytvoreni susenek
class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = cookieRadius;
  }

  // update pro pozici
  update() {
    this.y += cookieSpeedY;

    // X pozice je vyresena Y je bad
    if (this.y - this.radius > canvasLeft.height) {
        this.y = -this.radius;
        this.x = Math.random() * (canvasLeft.width - 2 * cookieRadius) + cookieRadius;
        this.y = Math.random() * (-canvasLeft.height); // Randomize Y position at the top
      }
    }

  // funkce pro vykreslení
  draw() {
    const xCenter = this.x - this.radius; // Center the image horizontally
    const yCenter = this.y - this.radius; // Center the image vertically
    ctx.drawImage(cookieImage, xCenter, yCenter, this.radius * 2, this.radius * 2);
  }
}

// funkce co vytvori susenku a nacpe ji do arr
function createBalls(numBalls) {
  for (let i = 0; i < numBalls; i++) {
    const x = Math.random() * (canvasLeft.width - 2 * cookieRadius) + cookieRadius; // Random x pozice
    const y = Math.random() * canvasLeft.height; // Random y pozice

    const ball = new Ball(x, y);
    balls.push(ball);
  }
}

// loop animace
function animate() {
  for (const ball of balls) {
    ball.update();
  }

  // clean canvasLeft
  ctx.clearRect(0, 0, canvasLeft.width, canvasLeft.height);

  // vykresli vsechny koule 
  for (const ball of balls) {
    ball.draw();
  }

  requestAnimationFrame(animate);
}

// zacne animaci s loadem
cookieImage.onload = function () {
  createBalls(numBallsToShow); 
  animate();
};


//funkce pro mala tlacitka upg
function btnClick(building, button, i) {
    const element = document.getElementById(`upgrade${i + 1}`);
    const upgradePrice = parseFloat(element.getAttribute('data-price'));

        if (gameData.cookies >= upgradePrice) {
            if (button.id === 'upgrade1') {
                building.baseCps *= 2;
                gameData.clickPower *= 2;
                button.classList.add("removed");
                gameData.cookies -= upgradePrice;
            } else if (button.id === 'upgrade21') {
                building.baseCps *= 2;
                gameData.clickPower *= 2;
                button.classList.add("removed");
                gameData.cookies -= upgradePrice;
            } else if (button.id === 'upgrade41') {
                building.baseCps *= 2;
                gameData.clickPower *= 2;
                button.classList.add("removed");
                gameData.cookies -= upgradePrice;
            } else {
                building.baseCps *= 2;
                button.classList.add("removed");
                gameData.cookies -= upgradePrice;
        }
    }
}

// Small upg icons event listeners
setTimeout(() => {
    const numButtons = 60; // Total number of buttons
    const numBuildings = buildings.length;
    
    for (let i = 0; i < numButtons; i++) {
        const buildingIndex = i % numBuildings;
        const building = buildings[buildingIndex];
        
        const buttonIndex = i + 1;
        const button = document.getElementById(`upgrade${buttonIndex}`);
        
        button.addEventListener('click', () => {
            btnClick(building, button, i);
        });
    }
}, 100);

tippy('#upgrade1', {   content: "Reinforced Finger" + gameData.cookies,  followCursor: true, allowHTML: true,});
/* to do list 
dodelat tippy tooltips
*/