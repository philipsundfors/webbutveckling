const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
  {
    question: "Hur många GB är en TB?",
    answers: {
      a: "1000 GB",
      b: "1024 GB",
      c: "2000 GB",
      d: "3000 GB"
    },
    correctAnswer: "d"
  },
  {
    question: "Vilken av dessa är en inenhet?",
    answers: {
      a: "Skärm",
      b: "Hårddisk",
      c: "Skrivare",
      d: "Tangentbord"
    },
    correctAnswer: "d"
  },
  {
    question: "Vilken av dessa är en inenhet?",
    answers: {
      a: "Skärm",
      b: "Hårddisk",
      c: "Skrivare",
      d: "Tangentbord"
    },
    correctAnswer: "d"
  },
  {
    question: "Vilken förkortning står för <i>local area network</i>?",
    answers: {
      a: "WLAN",
      b: "WAN",
      c: "LAN",
      d: "VAN"
    },
    correctAnswer: "c"
  },
  {
    question: "Vilka färger har en kompositvideo/audio-kabel?",
    answers: {
      a: "Gul, vit, röd",
      b: "Vit, röd, blå",
      c: "Gul, vit, grön",
      d: "Grön, blå, röd"
    },
    correctAnswer: "a"
  },
  {
    question: "Vilken av dessa enheter har inte en hdmi-kontakt?",
    answers: {
      a: "PS4",
      b: "Blu-ray spelare",
      c: "Laptop",
      d: "Tjock-TV"
    },
    correctAnswer: "d"
  },
  {
    question: "Vilken av dessa kabeltyper skickar en digital signal?",
    answers: {
      a: "VGA",
      b: "Displayport",
      c: "Scart",
      d: "S-video"
    },
    correctAnswer: "b"
  },
  {
    question: "Vilken maxupplösning har en vga-kabel?",
    answers: {
      a: "1920x1080",
      b: "1280x800",
      c: "1920x800",
      d: "1280x720"
    },
    correctAnswer: "b"
  },
  {
    question: "Vad är ett moderkort?",
    answers: {
      a: "Ett spel",
      b: "Ett vykort",
      c: "En datordel",
      d: "Ett spelkort"
    },
    correctAnswer: "c"
  },
  {
    question: "Vilket av dessa program är inte ett exempel på ett antivirusprogram?",
    answers: {
      a: "Norton Security",
      b: "McAfee LiveSafe",
      c: "F-secure",
      d: "Microsoft Office"
    },
    correctAnswer: "d"
  },
  {
    question: "Vad gör man oftast med en webbkamera?",
    answers: {
      a: "Ta bilder med den",
      b: "Använda den till videomöten",
      c: "Spela in en film",
      d: "Läsa med den"
    },
    correctAnswer: "b"
  },
  {
    question: "Vilken av dessa anslutningar finna oftast på en 'tjock'-datorskärm?",
    answers: {
      a: "VGA",
      b: "HDMI",
      c: "SCART",
      d: "DVI"
    },
    correctAnswer: "b"
  },
  {
    question: "Vilket bildformat har en ny, vanlig datorskärm oftast?",
    answers: {
      a: "4:3",
      b: "16:10",
      c: "16:9",
      d: "21:9"
    },
    correctAnswer: "c"
  },
  {
    question: "Vad är en laptop?",
    answers: {
      a: "En stationär dator",
      b: "En bärbar dator",
      c: "En surfplatta",
      d: "En server"
    },
    correctAnswer: "b"
  },
  {
    question: "Vilken typ av hårddisk finns oftast i en nyare dator?",
    answers: {
      a: "Hårddisk",
      b: "Diskett",
      c: "SSD",
      d: "Trumminne"
    },
    correctAnswer: "c"
  },
  {
    question: "SSD-diskar är okänsliga för stötar och vibrationer än vanliga hårddiskar. Varför?",
    answers: {
      a: "SSD-disken saknar rörliga delar jämfört med vanliga hårddisken.",
      b: "SSD-disken drar mindre ström än den vanliga hårddisken.",
      c: "SSD-disken håller längre än en hårddisk.",
      d: "SSD-disken har mindre kapacitet än vanliga hårddisken."
    },
    correctAnswer: "a"
  },
  {
    question: "Hur ser ett RAM-minne ut?",
    answers: {
      a: "Som en vanlig hårddisk",
      b: "Som en SATA SSD-disk",
      c: "Fastlött på moderkortet",
      d: "Som en m.2 SSD-disk"
    },
    correctAnswer: "d"
  },
  {
    question: "Vad är en PS/2-kontakt?",
    answers: {
      a: "En kontakt där man ansluter en äldre skrivare/scanner",
      b: "En kontakt där man ansluter äldre möss och tangentbord",
      c: "En kontakt där man ansluter äldre skärmar",
      d: "En kontakt där man ansluter äldre hörlurar/högtalare"
    },
    correctAnswer: "b"
  },
  {
    question: "Vad använder man en SCART-kontakt till?",
    answers: {
      a: "För att koppla in en högtalare",
      b: "För att koppla in en mus eller ett tangentbord",
      c: "För att koppla in en hårddisk eller en SSD-disk",
      d: "För att koppla in en dvd-spelare eller en digitalbox till en gammal tjock-tv"
    },
    correctAnswer: "d"
  },
  {
    question: "Vilken typ av RAM används idag?",
    answers: {
      a: "DDR2",
      b: "DDR3",
      c: "DDR4",
      d: "DDR5"
    },
    correctAnswer: "c"
  },
  {
    question: "Vad är S-video?",
    answers: {
      a: "En datakabel",
      b: "En videokabel",
      c: "En strömkabel",
      d: "En ljudkabel"
    },
    correctAnswer: "b"
  },
  {
    question: "Vilken av dessa intel-processorer är svagast?",
    answers: {
      a: "Core i3",
      b: "Core i9",
      c: "Celeron",
      d: "Pentium Silver"
    },
    correctAnswer: "c"
  },
  {
    question: "Vad gör en hårddisk om den är trasig (tex. om man har tappat den och läsarmen har hamnat konstigt eller om skivorna är repade)?",
    answers: {
      a: "Den börjar ticka/klicka",
      b: "Den börjar snurra jättesnabbt",
      c: "Den startar inte",
      d: "Den gör ingenting"
    },
    correctAnswer: "a"
  },
  {
    question: "Vilken tangentbordslayout är vanligast?",
    answers: {
      a: "QWERTY",
      b: "QWERTZ",
      c: "AZERTY",
      d: "DVORAK"
    },
    correctAnswer: "a"
  },
  {
    question: "I vilken världsdel används Scart för att koppla in äldre prylar till TV'n som nu använder HDMI?",
    answers: {
      a: "Afrika",
      b: "Asien",
      c: "Nordamerika",
      d: "Europa"
    },
    correctAnswer: "d"
  },
  {
    question: "3,5 mm kontakten består av olika poler. Hur många poler har en kontakt som skickar stereoljud+mikrofon?",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4"
    },
    correctAnswer: "d"
  },
  {
    question: "Vad är en processor?",
    answers: {
      a: "Datorns hjärta",
      b: "Datorns hjärna",
      c: "Datorns lever",
      d: "Datorns ben"
    },
    correctAnswer: "b"
  },
  {
    question: "Vilken kabel skickar inte ljud?",
    answers: {
      a: "DVI",
      b: "Displayport",
      c: "Scart",
      d: "HDMI"
    },
    correctAnswer: "a"
  },
  {
    question: "Vad var grafikkortets funktion från början?",
    answers: {
      a: "Strömförsörja datorns komponenter",
      b: "Omvandla digitalt till analog bild och hörbart ljud",
      c: "Som en avlastning till processorn för krävande program och spel",
      d: "Kunna kontrollera primärminne och sekundärminne"
    },
    correctAnswer: "b"
  },
  {
    question: "Vilken anslutningstyp använder grafikkort idag?",
    answers: {
      a: "PCI",
      b: "AGP",
      c: "PCI-Express",
      d: "ISA"
    },
    correctAnswer: "c"
  },
  {
    question: "Vilken av dessa kontakter finns inte på grafikkort som skärmutgång?",
    answers: {
      a: "HDMI",
      b: "VGA",
      c: "DisplayPort",
      d: "S-video"
    },
    correctAnswer: "d"
  },
  {
    question: "Vilken kontakt använder man för att ansluta externa CD/DVD-läsare?",
    answers: {
      a: "PS/2",
      b: "USB",
      c: "3,5mm",
      d: "SATA"
    },
    correctAnswer: "b"
  },
  {
    question: "Hur fungerar en mikrofon",
    answers: {
      a: "Spelar upp ljud",
      b: "Fångar upp ljud",
      c: "Spelar in ljud",
      d: "Filtrerar ljud"
    },
    correctAnswer: "b"
  },
  {
    question: "Vad heter skärmen som visas om Windows kraschar (förkortat BSOD)?",
    answers: {
      a: "Blue Screen of Doom",
      b: "Black Screen of Death",
      c: "Blue Screen of Death",
      d: "Black Screen of Doom"
    },
    correctAnswer: "c"
  },
  {
    question: "Vad kallas en TV som kan visa strömmat innehåll (Youtube, Netflix, SVT Play, etc.) direkt på tvn utan behov av tex. Chromecast, eller en spelkonsol som har inbyggda streamingtjänster?",
    answers: {
      a: "Snäll TV",
      b: "Bra TV",
      c: "Snygg TV",
      d: "Smart TV"
    },
    correctAnswer: "d"
  },
  {
    question: "Vilken typ av DVI-kontakt skickar både digitala signaler och analoga signaler?",
    answers: {
      a: "DVI-I",
      b: "DVI-D",
      c: "DVI-A",
      d: "Alla typer skickar både digitala och analoga signaler"
    },
    correctAnswer: "a"
  },
  {
    question: "Vad är en Chromebook",
    answers: {
      a: "En typ av bärbar dator med ett speciellt operativsystem som kallas Chrome OS",
      b: "En surfplatta",
      c: "En stationär dator med ett speciellt operativsystem som kallas Chrome OS",
      d: "En vanlig bärbar dator"
    },
    correctAnswer: "a"
  },
  {
    question: "Vilket företag sköter operativsystemet som kallas Chrome OS?",
    answers: {
      a: "Apple",
      b: "Microsoft",
      c: "Amazon",
      d: "Google"
    },
    correctAnswer: "d"
  },
  {
    question: "Ungefär hur mycket kostar en (intern) vanlig hårddisk som rymmer 1 TB data?",
    answers: {
      a: "250 kr",
      b: "500 kr",
      c: "750 kr",
      d: "1000 kr"
    },
    correctAnswer: "b"
  },
  {
    question: "Vilak saker har en bärbar dator inbyggt?",
    answers: {
      a: "Skärm, tangentbord, pekplatta",
      b: "Skärm, mus, tangentbord, högtalare",
      c: "Skärm, tangentbord, pekplatta, högtalare",
      d: "Tangentbord, mus, högtalare"
    },
    correctAnswer: "c"
  },
  {
    question: "Vilken anslutningstyp har trådlösa hörlurar som saknar Bluetooth?",
    answers: {
      a: "USB",
      b: "3,5mm",
      c: "5GHz",
      d: "2,4GHz"
    },
    correctAnswer: "d"
  },
  {
    question: "Vilken skärmupplösning kan även kallas 4K?",
    answers: {
      a: "3840x2160",
      b: "1920x1080",
      c: "1280x720",
      d: "7680x4320"
    },
    correctAnswer: "a"
  },
  {
    question: "Vilken är den vanligaste typen av datorchassi?",
    answers: {
      a: "Mini ATX",
      b: "ATX",
      c: "Mini Tower",
      d: "Tower"
    },
    correctAnswer: "b"
  },
  {
    question: "Vilken kabel använder man för att ansluta interna hårddiskar?",
    answers: {
      a: "AUX",
      b: "USB",
      c: "SATA",
      d: "HDMI"
    },
    correctAnswer: "c"
  },
  {
    question: "Vilken av dessa upplösningar använder det gamla bildformatet 4:3?",
    answers: {
      a: "1024x768",
      b: "1366x768",
      c: "1280x720",
      d: "1920x1080"
    },
    correctAnswer: "a"
  },
  {
    question: "Vad gör ett nätaggregat?",
    answers: {
      a: "Lagrar data",
      b: "Spelar upp ljud",
      c: "Spelar in ljud",
      d: "Strömförsörjer datorn"
    },
    correctAnswer: "d"
  },
  {
    question: "Varför är enkärninga processorer långsammare?",
    answers: {
      a: "De har lägre hastighet än andra processorer",
      b: "De fungerade bara ibland",
      c: "De kunde bara räkna ut en process åt gången",
      d: "De är billigare"
    },
    correctAnswer: "c"
  },
  {
    question: "Vad är inte ett exempel på portabelt minne?",
    answers: {
      a: "SD-kort",
      b: "Intern hårddisk",
      c: "Diskett",
      d: "USB-minne"
    },
    correctAnswer: "b"
  },
  {
    question: "Vilken av dessa enheter har inte en CD/DVD-läsare inbyggd?",
    answers: {
      a: "Bärbar dator",
      b: "Stationär dator",
      c: "Blu-ray spelare",
      d: "Mobiltelefon"
    },
    correctAnswer: "c"
  },
  {
    question: "Vad består en SSD av?",
    answers: {
      a: "Flera flashminnen",
      b: "Roterande skivor",
      c: "En skiva inbyggd i enheten",
      d: "SD-kort inbyggt i enheten"
    },
    correctAnswer: "a"
  },
  {
    question: "Vilken enhet har ingen högtalare inbyggd?",
    answers: {
      a: "Mobiltelefon",
      b: "Laptop",
      c: "CRT-skärm",
      d: "TV"
    },
    correctAnswer: "c"
  },
  {
    question: "Hur använder man tex. en blu-ray spelare med bara HDMI till en tjock-TV utan HDMI?",
    answers: {
      a: "Koppla in en dator och koppla den till Tjock TVn",
      b: "Köpa en HDMI till SCART omvandlare",
      c: "Köpa en SCART till HDMI omvandlare",
      d: "Den går inte att använda på tjock-TVn"
    },
    correctAnswer: "b"
  },
  {
    question: "Vilken av dessa kablar skickar INTE ljud?",
    answers: {
      a: "HDMI",
      b: "3,5mm",
      c: "Toslink",
      d: "USB"
    },
    correctAnswer: "d"
  },
  {
    question: "Vilken typ av ljudutgång finns det på en ny apple Macbook?",
    answers: {
      a: "HDMI",
      b: "USB-C",
      c: "AUX",
      d: "Ingen"
    },
    correctAnswer: "d"
  },
  {
    question: "Sant/falskt: En extern skärm och ett externt tangentbord fungerar på en laptop?",
    answers: {
      a: "SANT",
      b: "FALSKT"
    },
    correctAnswer: "a"
  },
  {
    question: "Vad för delar består en skrivbordsdator av?",
    answers: {
      a: "Datorlåda, datorskärm, tangentbord, fjärrkontroll",
      b: "Datorlåda, tangentbord, mus, TV",
      c: "Datorskärm, mus, tangentbord, server",
      d: "Datorskärm, tangentbord, mus, datorlåda"
    },
    correctAnswer: "d"
  },
  {
    question: "Vilket företag är inte en internetleverantör?",
    answers: {
      a: "Bahnof",
      b: "Telenor",
      c: "Telia",
      d: "Com Hem"
    },
    correctAnswer: "b"
  },
  {
    question: "Vad är en Wi-Fi router?",
    answers: {
      a: "En trådlös internetenhet där man kopplar enheter trådlöst till den",
      b: "En trådlös internetmottagare",
      c: "En typ av laptop",
      d: "En stationär dator"
    },
    correctAnswer: "a"
  },
  {
    question: "Vad är 4G?",
    answers: {
      a: "Wi-Fi standard",
      b: "En typ av mobiltelefon",
      c: "Mobilnätverk",
      d: "En router"
    },
    correctAnswer: "c"
  },
  {
    question: "Vad heter tangenten som ersätter CTRL på ett Apple-tangentbord?",
    answers: {
      a: "Apple",
      b: "Cmd",
      c: "Ctrl",
      d: "Option"
    },
    correctAnswer: "b"
  },
  {
    question: "Vad gör Caps Lock-tangenten?",
    answers: {
      a: "Gör så datorn skriver bara stora bokstäver",
      b: "Gör så dators tangentbord bara skriver små bokstäver",
      c: "Gör så datorn skriver olika tecken",
      d: "Gör så datorn kraschar"
    },
    correctAnswer: "a"
  },
  {
    question: "Vad gör Windowstangenten?",
    answers: {
      a: "Öppnar Kontrollpanelen",
      b: "Öppnar Aktivitetshanteraren",
      c: "Öppnar Startmenyn",
      d: "Öppnar Utforskaren"
    },
    correctAnswer: "c"
  },
  {
    question: "Vad gör tangenten med en måne (om det finns en sådan)?",
    answers: {
      a: "Stänger av datorn",
      b: "Väcker datorn",
      c: "Gör ingenting",
      d: "Försätter datorn i viloläge"
    },
    correctAnswer: "d"
  },
  {
    question: "Vilket företag tillverkar INTE datorer?",
    answers: {
      a: "HP",
      b: "Huawei",
      c: "Acer",
      d: "Asus"
    },
    correctAnswer: "b"
  },
  {
    question: "Vilket år lanserades IBM PC?",
    answers: {
      a: "1980",
      b: "1981",
      c: "1982",
      d: "1983"
    },
    correctAnswer: "b"
  },
  {
    question: "Vad för lagringstyp har billigare bärbara datorer?",
    answers: {
      a: "SSD",
      b: "HDD",
      c: "Diskett",
      d: "eMMC"
    },
    correctAnswer: "d"
  },
  {
    question: "Vilken av följande lagringstyper är långsammast?",
    answers: {
      a: "SSD",
      b: "HDD",
      c: "Diskett",
      d: "Minneskort"
    },
    correctAnswer: "c"
  },
  {
    question: "Hur många knappar har en vanlig datormus oftast?",
    answers: {
      a: "2",
      b: "3",
      c: "5",
      d: "7"
    },
    correctAnswer: "b"
  },
  {
    question: "Vad heter nätverkskontakten?",
    answers: {
      a: "RJ45",
      b: "RJ50",
      c: "RJ55",
      d: "RJ60"
    },
    correctAnswer: "a"
  },
  {
    question: "Vilket av dessa företag tillverkar inte gamingdatorer?",
    answers: {
      a: "Alienware",
      b: "HP",
      c: "Samsung",
      d: "Asus"
    },
    correctAnswer: "c"
  },
  {
    question: "Vilket av följande är inte en spänningsnivå som ett nätaggregat levererar eller tar emot?",
    answers: {
      a: "5V",
      b: "12V",
      c: "24V",
      d: "230V"
    },
    correctAnswer: "c"
  },
  {
    question: "Vilken förkortning betecknar en processor?",
    answers: {
      a: "GPU",
      b: "CPU",
      c: "RAM",
      d: "PSU"
    },
    correctAnswer: "b"
  },
  {
    question: "Vilken fysisk storlek har en hårddisk som används i stationära datorer??",
    answers: {
      a: "1,5",
      b: "2,5",
      c: "3,5",
      d: "4,5"
    },
    correctAnswer: "c"
  },
  {
    question: "Hur många enheter kan man ansluta till en IDE flatkabel?",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4"
    },
    correctAnswer: "2"
  },
  {
    question: "Vilket gränssnitt är vanligast för hårddiskar i vanliga datorer idag?",
    answers: {
      a: "SATA",
      b: "IDE",
      c: "SCSI",
      d: "eSATA"
    },
    correctAnswer: "a"
  },
  {
    question: "Vad av följande påverkar inte minnets prestanda?",
    answers: {
      a: "Svarstiden",
      b: "Klockfrekvensen",
      c: "Mängden av minnet",
      d: "Storleken"
    },
    correctAnswer: "d"
  },
  {
    question: "Vilket av följande räknas som mjukvara?",
    answers: {
      a: "PSU",
      b: "EEPROM",
      c: "HDD",
      d: "OS"
    },
    correctAnswer: "d"
  },
  {
    question: "Hur förkortas datamängden 1 megabyte?",
    answers: {
      a: "1 Mb",
      b: "1 MByte",
      c: "1 mb",
      d: "1 MB"
    },
    correctAnswer: "d"
  },
  {
    question: "Vilket av följande är snabbast sekundärminne?",
    answers: {
      a: "SSD",
      b: "HDD",
      c: "Minneskort",
      d: "RAM"
    },
    correctAnswer: "a"
  },
  {
    question: "Vilket operativsystem finns i surfplattor och mobiltelefoner oftast?",
    answers: {
      a: "Windows",
      b: "Linux",
      c: "macOS",
      d: "Android"
    },
    correctAnswer: "d"
  },
  {
    question: "Vad finns inte i en dator?",
    answers: {
      a: "Mus",
      b: "RAM",
      c: "GPU",
      d: "CPU"
    },
    correctAnswer: "a"
  }

];

function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        // variable to store the list of possible answers
        const answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label class="quiz-answers">
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
}

function showResults(){
  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

// Hjälpsida
 window.open("quizhjalp.html");
/*
window.open(
  url, "window name",
  "height=200,width=200,modal=yes,alwaysRaised=yes"); */