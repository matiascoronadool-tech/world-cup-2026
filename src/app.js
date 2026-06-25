const FACTS_EN = [
  "Uruguay won the first World Cup in 1930 on home soil.",
  "The 1930 final was played with two different ball models \u2014 one per half.",
  "No European team won outside Europe until Brazil in 1958.",
  "The fastest goal in World Cup history is 11 seconds by Hakan \u015E\u00FCk\u00FCr (2002).",
  "Pel\u00E9 is the only player to win three World Cups (1958, 1962, 1970).",
  "Italy's 1934 and 1938 titles make them the first back-to-back champions.",
  "The 1954 final is called the 'Miracle of Bern' \u2014 West Germany beat Hungary.",
  "Just Fontaine scored 13 goals in the 1958 World Cup, a single-tournament record.",
  "The 1970 World Cup was the first broadcast in color globally.",
  "Brazil's 1970 team is widely considered the greatest ever.",
  "The 1974 tournament introduced the current trophy, the FIFA World Cup.",
  "Germany's Gerd M\u00FCller scored the winning goal in the 1974 final.",
  "The 1978 final had Argentina beat the Netherlands 3\u20131 after extra time.",
  "Italy's Paolo Rossi was top scorer in 1982 after a match-fixing ban.",
  "Diego Maradona's 'Hand of God' goal came in the 1986 quarter-final.",
  "Maradona also scored the 'Goal of the Century' in the same match.",
  "The 1990 World Cup had the fewest goals per game in history (2.21).",
  "Cameroon reached the quarter-finals in 1990, the first African team to do so.",
  "The 1994 final was the first decided on penalties \u2014 Brazil beat Italy.",
  "The 1994 World Cup had the highest total attendance (3.59 million).",
  "France won their first World Cup on home soil in 1998.",
  "Ronaldo suffered a mysterious seizure hours before the 1998 final.",
  "The 2002 tournament was the first held in Asia (Japan & South Korea).",
  "South Korea reached the semi-finals in 2002, the best ever by an Asian team.",
  "Brazil's Ronaldo scored twice in the 2002 final to win a fifth title.",
  "The 2006 final featured Zidane's infamous headbutt on Materazzi.",
  "Spain won their first World Cup in 2010 with Iniesta's extra-time goal.",
  "The vuvuzela became the defining sound of the 2010 World Cup.",
  "Germany's 7\u20131 demolition of Brazil in 2014 shocked the football world.",
  "Mario G\u00F6tze's extra-time goal won the 2014 final for Germany.",
  "The 2018 tournament introduced VAR for the first time.",
  "France won the 2018 final 4\u20132 in a thrilling match against Croatia.",
  "The 2022 World Cup in Qatar was the first held in winter.",
  "Lionel Messi finally won the World Cup in 2022, scoring in the final.",
  "Kylian Mbapp\u00E9 scored a hat-trick in the 2022 final but still lost.",
  "The 2022 final is widely considered the greatest World Cup final ever.",
  "Only eight nations have ever won the World Cup.",
  "Brazil leads with five titles, followed by Germany and Italy with four each.",
  "Australia and New Zealand co-hosted the first 32-team Women's World Cup in 2023.",
  "The 2026 tournament is the first with 48 teams.",
  "The Jules Rimet trophy was stolen in 1966 and found by a dog named Pickles.",
  "The original trophy was awarded permanently to Brazil after their third win in 1970.",
  "The current trophy is 36.8 cm tall and weighs 6.175 kg.",
  "Winners receive a gold-plated replica, not the original trophy.",
  "The oldest World Cup goalscorer is Roger Milla at 42 years old (1994).",
  "The youngest goalscorer is Pel\u00E9 at 17 years 239 days (1958).",
  "The oldest player to appear is Essam El-Hadary at 45 years (2018).",
  "The most World Cup appearances is 26 by Lionel Messi (through 2022).",
  "Lothar Matth\u00E4us played in five World Cups (1982\u20131998).",
  "Antonio Carbajal and Gianluigi Buffon also played in five World Cups.",
  "Miroslav Klose holds the all-time scoring record with 16 goals.",
  "Ronaldo (Brazil) is second with 15 World Cup goals.",
  "Gerd M\u00FCller is third with 14 goals in just two tournaments.",
  "The first World Cup had no qualification \u2014 teams were invited.",
  "India withdrew from the 1950 World Cup because they weren't allowed to play barefoot.",
  "Scotland qualified in 1974 and 1978 but went out unbeaten both times.",
  "Haiti's 1974 goal against Italy was their first and only World Cup goal (until 2026).",
  "Zaire's 1974 goalkeeper jumped out of the way of a free kick, fearing voodoo.",
  "The 1938 World Cup saw Austria withdraw after the Anschluss with Germany.",
  "Sweden hosted the 1958 final but lost to Brazil on home soil.",
  "The 1966 World Cup final is the only one with a hat-trick (Hurst).",
  "Geoff Hurst's controversial 'Wembley goal' crossed the line \u2014 just barely.",
  "England's 1966 win remains their only major men's international trophy.",
  "The 1970 semi-final between Italy and West Germany is called the 'Game of the Century'.",
  "That 1970 semi ended 4\u20133 after extra time, with five goals in extra period.",
  "Brazil's 1970 team included Pel\u00E9, Rivelino, Jairzinho, and Tost\u00E3o.",
  "Jairzinho scored in every match of the 1970 tournament.",
  "The 1982 tournament expanded to 24 teams for the first time.",
  "Italy's 1982 win saw Paolo Rossi come back from a two-year ban.",
  "Northern Ireland beat hosts Spain in 1982 thanks to a Gerry Armstrong goal.",
  "The 1986 tournament featured a record 132 goals.",
  "Canada made their World Cup debut in 1986 and failed to score a single goal.",
  "Iraq qualified for the first time in 1986.",
  "The 1990 semi-final between Argentina and Italy went to penalties.",
  "England's 1990 semi-final loss to West Germany featured Gascoigne's tears.",
  "The 1994 tournament had the first indoor stadium (Silverdome, Pontiac).",
  "Diana Ross infamously missed a penalty at the 1994 opening ceremony.",
  "Colombia's Andr\u00E9s Escobar was murdered after scoring an own goal in 1994.",
  "The 1998 tournament expanded to 32 teams.",
  "Iran beat the USA 2\u20131 in a politically charged 1998 group match.",
  "Croatia finished third in their debut World Cup in 1998.",
  "Senegal beat defending champions France in the 2002 opening match.",
  "China made their only World Cup appearance in 2002, losing all three matches.",
  "Zidane's 2006 final headbutt became one of the most memed moments in sports.",
  "The 2010 World Cup had the first final between two non-European teams playing in Europe.",
  "The 2014 ball (Brazuca) was the most tested ball in FIFA history.",
  "Costa Rica topped a group with Uruguay, Italy, and England in 2014.",
  "The 2018 final had the first goal scored from a VAR-assisted penalty.",
  "Russia's 2018 quarter-final run was their best ever post-Soviet.",
  "The 2018 World Cup had the most own goals (12) in a single tournament.",
  "The 2022 group stage had the most stoppage time added due to FIFA's directives.",
  "Saudi Arabia beat eventual champions Argentina 2\u20131 in the 2022 group stage.",
  "Morocco became the first African semi-finalist in 2022.",
  "Japan topped a group including Germany and Spain in 2022.",
  "The 2022 tournament cost an estimated $220 billion, the most expensive ever.",
  "2026 is the first World Cup hosted by three nations simultaneously.",
  "MetLife Stadium will host the 2026 final with a capacity of 82,500.",
  "The 2026 opening match is at Estadio Azteca, a three-time World Cup venue.",
  "The 2026 format features 12 groups of 4, then a Round of 32.",
  "104 matches will be played in 2026, up from 64 in previous tournaments.",
  "Toronto will host its first World Cup matches in 2026 at BMO Field.",
  "Vancouver's BC Place returns to host World Cup matches for the first time since 1986.",
];

const FACTS_ES = [
  "Uruguay gan\u00F3 la primera Copa Mundial en 1930 como local.",
  "La final de 1930 se jug\u00F3 con dos modelos de bal\u00F3n diferentes \u2014 uno por tiempo.",
  "Ning\u00FAn equipo europeo gan\u00F3 fuera de Europa hasta Brasil en 1958.",
  "El gol m\u00E1s r\u00E1pido en la historia de los Mundiales es de Hakan \u015E\u00FCk\u00FCr a los 11 segundos (2002).",
  "Pel\u00E9 es el \u00FAnico jugador en ganar tres Copas del Mundo (1958, 1962, 1970).",
  "Los t\u00EDtulos de Italia en 1934 y 1938 los convierten en los primeros campeones consecutivos.",
  "La final de 1954 se llama el 'Milagro de Berna' \u2014 Alemania Federal venci\u00F3 a Hungr\u00EDa.",
  "Just Fontaine marc\u00F3 13 goles en el Mundial de 1958, un r\u00E9cord en un solo torneo.",
  "El Mundial de 1970 fue el primero transmitido en color a nivel mundial.",
  "El equipo de Brasil de 1970 es ampliamente considerado el mejor de la historia.",
  "El torneo de 1974 introdujo el trofeo actual, la Copa Mundial de la FIFA.",
  "Gerd M\u00FCller de Alemania marc\u00F3 el gol del triunfo en la final de 1974.",
  "La final de 1978 termin\u00F3 Argentina 3\u20131 Pa\u00EDses Bajos tras tiempo extra.",
  "Paolo Rossi de Italia fue m\u00E1ximo goleador en 1982 tras una sanci\u00F3n por ama\u00F1o.",
  "El 'Mano de Dios' de Diego Maradona ocurri\u00F3 en los cuartos de final de 1986.",
  "Maradona tambi\u00E9n marc\u00F3 el 'Gol del Siglo' en el mismo partido.",
  "El Mundial de 1990 tuvo el promedio de goles m\u00E1s bajo de la historia (2.21).",
  "Camer\u00FAn lleg\u00F3 a cuartos de final en 1990, el primer equipo africano en lograrlo.",
  "La final de 1994 fue la primera decidida en penales \u2014 Brasil venci\u00F3 a Italia.",
  "El Mundial de 1994 tuvo la mayor asistencia total (3.59 millones).",
  "Francia gan\u00F3 su primera Copa Mundial como local en 1998.",
  "Ronaldo sufri\u00F3 una misteriosa convulsi\u00F3n horas antes de la final de 1998.",
  "El torneo de 2002 fue el primero celebrado en Asia (Jap\u00F3n y Corea del Sur).",
  "Corea del Sur lleg\u00F3 a semifinales en 2002, lo mejor logrado por un equipo asi\u00E1tico.",
  "Ronaldo de Brasil marc\u00F3 dos goles en la final de 2002 para ganar el quinto t\u00EDtulo.",
  "La final de 2006 tuvo el famoso cabezazo de Zidane a Materazzi.",
  "Espa\u00F1a gan\u00F3 su primer Mundial en 2010 con el gol de Iniesta en el tiempo extra.",
  "La vuvuzela se convirti\u00F3 en el sonido caracter\u00EDstico del Mundial de 2010.",
  "El 7\u20131 de Alemania a Brasil en 2014 shocke\u00F3 al mundo del f\u00FAtbol.",
  "El gol de Mario G\u00F6tze en el tiempo extra le dio el triunfo a Alemania en 2014.",
  "El torneo de 2018 introdujo el VAR por primera vez.",
  "Francia gan\u00F3 la final de 2018 por 4\u20132 en un emocionante partido contra Croacia.",
  "El Mundial de 2022 en Catar fue el primero celebrado en invierno.",
  "Lionel Messi finalmente gan\u00F3 el Mundial en 2022, marcando en la final.",
  "Kylian Mbapp\u00E9 anot\u00F3 un hat-trick en la final de 2022 pero a\u00FAn as\u00ED perdi\u00F3.",
  "La final de 2022 es ampliamente considerada la mejor final de la historia.",
  "Solo ocho naciones han ganado la Copa Mundial.",
  "Brasil lidera con cinco t\u00EDtulos, seguido de Alemania e Italia con cuatro cada uno.",
  "Australia y Nueva Zelanda coorganizaron el primer Mundial femenino de 32 equipos en 2023.",
  "El torneo de 2026 es el primero con 48 equipos.",
  "El trofeo Jules Rimet fue robado en 1966 y encontrado por un perro llamado Pickles.",
  "El trofeo original fue otorgado permanentemente a Brasil tras su tercer t\u00EDtulo en 1970.",
  "El trofeo actual mide 36.8 cm de alto y pesa 6.175 kg.",
  "Los ganadores reciben una r\u00E9plica dorada, no el trofeo original.",
  "El goleador m\u00E1s longevo es Roger Milla con 42 a\u00F1os (1994).",
  "El goleador m\u00E1s joven es Pel\u00E9 con 17 a\u00F1os y 239 d\u00EDas (1958).",
  "El jugador de mayor edad en participar es Essam El-Hadary con 45 a\u00F1os (2018).",
  "La mayor cantidad de apariciones en Mundiales es 26 de Lionel Messi (hasta 2022).",
  "Lothar Matth\u00E4us jug\u00F3 en cinco Copas del Mundo (1982\u20131998).",
  "Antonio Carbajal y Gianluigi Buffon tambi\u00E9n jugaron en cinco Mundiales.",
  "Miroslav Klose posee el r\u00E9cord de goles con 16.",
  "Ronaldo (Brasil) es segundo con 15 goles en Mundiales.",
  "Gerd M\u00FCller es tercero con 14 goles en solo dos torneos.",
  "El primer Mundial no tuvo clasificaci\u00F3n \u2014 los equipos fueron invitados.",
  "India se retir\u00F3 del Mundial de 1950 porque no le permitieron jugar descalza.",
  "Escocia clasific\u00F3 en 1974 y 1978 pero qued\u00F3 eliminada invicta ambas veces.",
  "El gol de Hait\u00ED en 1974 contra Italia fue su primer y \u00FAnico gol mundialista (hasta 2026).",
  "El portero de Zaire en 1974 salt\u00F3 fuera del camino de un tiro libre por temor a vud\u00FA.",
  "El Mundial de 1938 vio a Austria retirarse tras el Anschluss con Alemania.",
  "Suecia fue sede de la final de 1958 pero perdi\u00F3 contra Brasil como local.",
  "La final de 1966 es la \u00FAnica con un hat-trick (Hurst).",
  "El pol\u00E9mico 'gol Wembley' de Geoff Hurst cruz\u00F3 la l\u00EDnea \u2014 apenas.",
  "El triunfo de Inglaterra en 1966 sigue siendo su \u00FAnico t\u00EDtulo internacional masculino importante.",
  "La semifinal de 1970 entre Italia y Alemania Federal se llama el 'Partido del Siglo'.",
  "Esa semifinal de 1970 termin\u00F3 4\u20133 tras tiempo extra, con cinco goles en el alargue.",
  "El equipo de Brasil de 1970 inclu\u00EDa a Pel\u00E9, Rivelino, Jairzinho y Tost\u00E3o.",
  "Jairzinho marc\u00F3 en todos los partidos del torneo de 1970.",
  "El torneo de 1982 se expandi\u00F3 a 24 equipos por primera vez.",
  "El triunfo de Italia en 1982 vio a Paolo Rossi regresar tras una sanci\u00F3n de dos a\u00F1os.",
  "Irlanda del Norte venci\u00F3 a la anfitriona Espa\u00F1a en 1982 gracias a un gol de Gerry Armstrong.",
  "El torneo de 1986 tuvo un r\u00E9cord de 132 goles.",
  "Canad\u00E1 debut\u00F3 en un Mundial en 1986 y no logr\u00F3 marcar un solo gol.",
  "Irak clasific\u00F3 por primera vez en 1986.",
  "La semifinal de 1990 entre Argentina e Italia se fue a penales.",
  "La derrota de Inglaterra en semifinales de 1990 ante Alemania Federal mostr\u00F3 las l\u00E1grimas de Gascoigne.",
  "El torneo de 1994 tuvo el primer estadio techado (Silverdome, Pontiac).",
  "Diana Ross fall\u00F3 un penal en la ceremonia inaugural de 1994.",
  "Andr\u00E9s Escobar de Colombia fue asesinado tras marcar un autogol en 1994.",
  "El torneo de 1998 se expandi\u00F3 a 32 equipos.",
  "Ir\u00E1n venci\u00F3 a EE. UU. 2\u20131 en un partido pol\u00EDticamente cargado en 1998.",
  "Croacia termin\u00F3 tercera en su debut mundialista en 1998.",
  "Senegal venci\u00F3 a la campeona defensora Francia en el partido inaugural de 2002.",
  "China hizo su \u00FAnica aparici\u00F3n mundialista en 2002, perdiendo los tres partidos.",
  "El cabezazo de Zidane en la final de 2006 se convirti\u00F3 en uno de los momentos m\u00E1s memeados del deporte.",
  "El Mundial de 2010 tuvo la primera final entre dos equipos no europeos jugando en Europa.",
  "El bal\u00F3n de 2014 (Brazuca) fue el bal\u00F3n m\u00E1s probado en la historia de la FIFA.",
  "Costa Rica encabez\u00F3 un grupo con Uruguay, Italia e Inglaterra en 2014.",
  "La final de 2018 tuvo el primer gol asistido por VAR en una final.",
  "La campa\u00F1a de Rusia en cuartos de final de 2018 fue su mejor desde la era sovi\u00E9tica.",
  "El Mundial de 2018 tuvo la mayor cantidad de autogoles (12) en un solo torneo.",
  "La fase de grupos de 2022 tuvo la mayor cantidad de tiempo a\u00F1adido debido a directivas de la FIFA.",
  "Arabia Saudita venci\u00F3 a la eventual campeona Argentina 2\u20131 en la fase de grupos de 2022.",
  "Marruecos se convirti\u00F3 en el primer semifinalista africano en 2022.",
  "Jap\u00F3n encabez\u00F3 un grupo que inclu\u00EDa a Alemania y Espa\u00F1a en 2022.",
  "El torneo de 2022 cost\u00F3 unos 220 mil millones de d\u00F3lares, el m\u00E1s caro de la historia.",
  "2026 es el primer Mundial organizado por tres naciones simult\u00E1neamente.",
  "El estadio MetLife ser\u00E1 sede de la final de 2026 con capacidad para 82,500 personas.",
  "El partido inaugural de 2026 es en el Estadio Azteca, sede mundialista por tercera vez.",
  "El formato de 2026 cuenta con 12 grupos de 4, seguido de una ronda de 32.",
  "Se jugar\u00E1n 104 partidos en 2026, frente a los 64 de torneos anteriores.",
  "Toronto ser\u00E1 sede de sus primeros partidos mundialistas en 2026 en el BMO Field.",
  "El BC Place de Vancouver vuelve a albergar partidos mundialistas por primera vez desde 1986.",
];

const i18n = {
  en: {
    header: 'FIFA World Cup 2026',
    tabToday: 'Played Today',
    tabUpcoming: 'Coming Matches',
    tabPast: 'Past Played',
    todayHeading: "Today's Matches",
    upcomingHeading: 'Upcoming Matches',
    pastHeading: 'Past Results',
    footerTimes: 'Times shown in',
    noMatches: 'No matches',
    noPast: 'No past matches',
    failedLoad: 'Failed to load match data',
    retry: 'Retry',
    serverHint: 'Open this page via a local server:',
    vs: 'vs',
    live: 'Live',
    today: 'Today',
    yesterday: 'Yesterday',
    group: 'Group',
    maxFavs: 'Max 2 favorites — remove one first',
    startingSoon: 'Starting soon!',
    matchStarted: 'Match started!',
    fullTime: 'Full Time',
    followMatch: 'Follow match',
    unfollow: 'Unfollow',
    startsIn: 'Starts in:',
    stage: { r32: 'Round of 32', r16: 'Round of 16', qf: 'Quarter-finals', sf: 'Semi-finals', third: 'Third Place', final: 'Final' },
    months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    days: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    shortMonths: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  },
  es: {
    header: 'Copa Mundial FIFA 2026',
    tabToday: 'Jugados Hoy',
    tabUpcoming: 'Pr\u00F3ximos Partidos',
    tabPast: 'Anteriores',
    todayHeading: 'Partidos de Hoy',
    upcomingHeading: 'Pr\u00F3ximos Partidos',
    pastHeading: 'Resultados Anteriores',
    footerTimes: 'Horarios en',
    noMatches: 'Sin partidos',
    noPast: 'Sin partidos anteriores',
    failedLoad: 'Error al cargar los partidos',
    retry: 'Reintentar',
    serverHint: 'Abre esta página con un servidor local:',
    vs: 'vs',
    live: 'En Vivo',
    today: 'Hoy',
    yesterday: 'Ayer',
    group: 'Grupo',
    maxFavs: 'Máx 2 favoritos — quita uno primero',
    startingSoon: '¡Ya casi comienza!',
    matchStarted: '¡Comenzó el partido!',
    fullTime: 'Tiempo Completo',
    followMatch: 'Seguir partido',
    unfollow: 'Dejar de seguir',
    startsIn: 'Comienza en:',
    stage: { r32: 'Dieciseisavos', r16: 'Octavos', qf: 'Cuartos', sf: 'Semifinales', third: 'Tercer Puesto', final: 'Final' },
    months: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
    days: ['Domingo','Lunes','Martes','Mi\u00E9rcoles','Jueves','Viernes','S\u00E1bado'],
    shortMonths: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
  }
};

let currentLang = localStorage.getItem('wc26-lang') || 'en';
let currentFacts = currentLang === 'es' ? FACTS_ES : FACTS_EN;
let factIdx = 0;

const FAV_KEY = 'wc26-favs';
const MAX_FAVS = 2;
let favorites = JSON.parse(localStorage.getItem(FAV_KEY) || '[]');
let favMatchData = {};
let prevFavState = {};
let pollInterval = null;
let countdownInterval = null;
let flashTimeoutId = null;
let toastTimeout = null;

function t(key) {
  const keys = key.split('.');
  let val = i18n[currentLang];
  for (const k of keys) {
    if (val && typeof val === 'object' && k in val) val = val[k];
    else return key;
  }
  return val;
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

shuffle(FACTS_EN);
shuffle(FACTS_ES);

let tickerInterval;
let tickerEl;

function showFact() {
  if (!tickerEl) return;
  tickerEl.style.opacity = '0';
  setTimeout(() => {
    tickerEl.textContent = currentFacts[factIdx];
    factIdx = (factIdx + 1) % currentFacts.length;
    tickerEl.style.opacity = '1';
  }, 600);
}

function initTicker() {
  try {
    tickerEl = document.getElementById('ticker-text');
    tickerEl.textContent = currentFacts[0];
    factIdx = 1;
    if (tickerInterval) clearInterval(tickerInterval);
    tickerInterval = setInterval(showFact, 10500);
  } catch (_) {}
}

const API_BASE = 'https://worldcup26.ir';

function parseDateET(str) {
  const [date, time] = str.split(' ');
  const [m, d, y] = date.split('/');
  const [h, min] = time.split(':');
  return new Date(Date.UTC(+y, +m - 1, +d, +h, +min) + 4 * 3600000);
}

function localTZ() {
  const fmt = new Intl.DateTimeFormat([], { timeZoneName: 'short' });
  return fmt.formatToParts(new Date()).find(p => p.type === 'timeZoneName').value;
}

function fmtDate(d) {
  const months = t('months');
  const days = t('days');
  return `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}`;
}

function fmtShortDate(d) {
  const months = t('shortMonths');
  return `${months[d.getMonth()]} ${d.getDate()}`;
}

function fmtTime(d) {
  return d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', timeZoneName: 'short' });
}

function stageLabel(type) {
  const labels = t('stage');
  return labels[type] || type;
}

const TEAM_NAMES_ES = {
  Albania: 'Albania', Algeria: 'Argelia', Angola: 'Angola',
  Argentina: 'Argentina', Armenia: 'Armenia', Australia: 'Australia',
  Austria: 'Austria', Azerbaijan: 'Azerbaiyán',
  Bahrain: 'Baréin', Belgium: 'Bélgica', Benin: 'Benín',
  Bolivia: 'Bolivia', 'Bosnia and Herzegovina': 'Bosnia y Herzegovina',
  Brazil: 'Brasil', Bulgaria: 'Bulgaria', 'Burkina Faso': 'Burkina Faso',
  Cameroon: 'Camerún', Canada: 'Canadá', 'Cape Verde': 'Cabo Verde',
  'Central African Republic': 'República Centroafricana', Chad: 'Chad',
  Chile: 'Chile', China: 'China', Colombia: 'Colombia',
  Congo: 'Congo', 'Costa Rica': 'Costa Rica',
  'Côte d\'Ivoire': 'Costa de Marfil', Croatia: 'Croacia',
  Cuba: 'Cuba', Cyprus: 'Chipre',
  'Czech Republic': 'República Checa', Denmark: 'Dinamarca',
  Ecuador: 'Ecuador', Egypt: 'Egipto', 'El Salvador': 'El Salvador',
  England: 'Inglaterra', 'Equatorial Guinea': 'Guinea Ecuatorial',
  Estonia: 'Estonia', Ethiopia: 'Etiopía',
  Finland: 'Finlandia', France: 'Francia',
  Gabon: 'Gabón', Gambia: 'Gambia', Georgia: 'Georgia',
  Germany: 'Alemania', Ghana: 'Ghana', Greece: 'Grecia',
  Guatemala: 'Guatemala', Guinea: 'Guinea',
  Haiti: 'Haití', Honduras: 'Honduras', Hungary: 'Hungría',
  Iceland: 'Islandia', India: 'India', Indonesia: 'Indonesia',
  Iran: 'Irán', Iraq: 'Irak', Ireland: 'Irlanda',
  Israel: 'Israel', Italy: 'Italia',
  Jamaica: 'Jamaica', Japan: 'Japón', Jordan: 'Jordania',
  Kazakhstan: 'Kazajistán', Kenya: 'Kenia', Kosovo: 'Kosovo',
  Kuwait: 'Kuwait', Kyrgyzstan: 'Kirguistán',
  Latvia: 'Letonia', Lebanon: 'Líbano', Liberia: 'Liberia',
  Libya: 'Libia', Liechtenstein: 'Liechtenstein',
  Lithuania: 'Lituania', Luxembourg: 'Luxemburgo',
  Madagascar: 'Madagascar', Malawi: 'Malaui',
  Malaysia: 'Malasia', Mali: 'Malí', Malta: 'Malta',
  Mauritania: 'Mauritania', Mauritius: 'Mauricio',
  Mexico: 'México', Moldova: 'Moldavia', Mongolia: 'Mongolia',
  Montenegro: 'Montenegro', Morocco: 'Marruecos',
  Mozambique: 'Mozambique',
  Namibia: 'Namibia', Netherlands: 'Países Bajos',
  'New Zealand': 'Nueva Zelanda', Nicaragua: 'Nicaragua',
  Niger: 'Níger', Nigeria: 'Nigeria',
  'North Korea': 'Corea del Norte', 'North Macedonia': 'Macedonia del Norte',
  Norway: 'Noruega',
  Oman: 'Omán',
  Pakistan: 'Pakistán', Palestine: 'Palestina', Panama: 'Panamá',
  Paraguay: 'Paraguay', Peru: 'Perú', Philippines: 'Filipinas',
  Poland: 'Polonia', Portugal: 'Portugal',
  Qatar: 'Catar',
  Romania: 'Rumania', Russia: 'Rusia', Rwanda: 'Ruanda',
  'Saudi Arabia': 'Arabia Saudita', Scotland: 'Escocia',
  Senegal: 'Senegal', Serbia: 'Serbia',
  'Sierra Leone': 'Sierra Leona', Singapore: 'Singapur',
  Slovakia: 'Eslovaquia', Slovenia: 'Eslovenia',
  Somalia: 'Somalia', 'South Africa': 'Sudáfrica',
  'South Korea': 'Corea del Sur', Spain: 'España',
  Sudan: 'Sudán', Sweden: 'Suecia', Switzerland: 'Suiza',
  Syria: 'Siria',
  Tahiti: 'Tahití', Tajikistan: 'Tayikistán', Tanzania: 'Tanzania',
  Thailand: 'Tailandia', Togo: 'Togo',
  'Trinidad and Tobago': 'Trinidad y Tobago', Tunisia: 'Túnez',
  Turkey: 'Turquía', Turkmenistan: 'Turkmenistán',
  Uganda: 'Uganda', Ukraine: 'Ucrania',
  'United Arab Emirates': 'Emiratos Árabes Unidos',
  'United States': 'Estados Unidos', Uruguay: 'Uruguay',
  Uzbekistan: 'Uzbekistán',
  Venezuela: 'Venezuela', Vietnam: 'Vietnam',
  Wales: 'Gales',
  Zambia: 'Zambia', Zimbabwe: 'Zimbabue',
};

function teamName(name) {
  if (currentLang === 'es' && TEAM_NAMES_ES[name]) return TEAM_NAMES_ES[name];
  return name;
}

function teamFlag(team, teamsMap) {
  const tm = teamsMap[team];
  return tm ? `<img class="flag" src="${tm.flag}" alt="${tm.iso2}" loading="lazy">` : '';
}

function getMatchId(m) {
  return `${m.local_date}|${m.home_team_name_en}|${m.away_team_name_en}`;
}

function getMatchState(m) {
  if (!m) return null;
  return {
    home_score: m.home_score,
    away_score: m.away_score,
    time_elapsed: m.time_elapsed,
    finished: m.finished
  };
}

function buildMatchHTML(m, teamsMap, showDate) {
  const matchId = getMatchId(m);
  const isFav = favorites.some(f => f.id === matchId);
  const homeTbd = m.home_team_id === '0';
  const awayTbd = m.away_team_id === '0';
  const isFinished = m.finished === 'TRUE';
  const isLive = m.time_elapsed && m.time_elapsed !== 'notstarted' && !isFinished;
  const dt = parseDateET(m.local_date);

  let homeDisplay, awayDisplay;
  if (homeTbd) {
    homeDisplay = `<span class="knockout-label">${m.home_team_label || 'TBD'}</span>`;
  } else {
    homeDisplay = `${teamFlag(m.home_team_name_en, teamsMap)} ${teamName(m.home_team_name_en)}`;
  }
  if (awayTbd) {
    awayDisplay = `<span class="knockout-label">${m.away_team_label || 'TBD'}</span>`;
  } else {
    awayDisplay = `${teamFlag(m.away_team_name_en, teamsMap)} ${teamName(m.away_team_name_en)}`;
  }

  let scoreHTML;
  if (isFinished) {
    scoreHTML = `<span class="score">${m.home_score}</span><span class="vs">\u2013</span><span class="score">${m.away_score}</span>`;
  } else if (isLive) {
    scoreHTML = `<span class="score">${m.home_score}</span><span class="vs">\u2013</span><span class="score">${m.away_score}</span><span class="live-badge">${t('live')}</span>`;
  } else {
    scoreHTML = `<span class="vs">${t('vs')}</span>`;
  }

  const datePrefix = showDate ? `${fmtShortDate(dt)} \u2014 ` : '';
  const info = m.type === 'group' ? `${m.group ? t('group') + ' ' + m.group : ''}` : stageLabel(m.type);

  const star = `<span class="star-btn${isFav ? ' active' : ''}" data-match-id="${matchId}" title="${t('followMatch')}">${isFav ? '★' : '☆'}</span>`;
  return `<li>${star}${datePrefix}${homeDisplay} ${scoreHTML} ${awayDisplay} <span class="match-info">${info}${m.group ? ', ' : ''}${fmtTime(dt)}</span></li>`;
}

function bindAccordions() {
  document.querySelectorAll('.group-header').forEach(header => {
    header.addEventListener('click', () => {
      const body = document.getElementById(header.dataset.target);
      const isOpen = header.classList.toggle('open');
      body.classList.toggle('open');
      header.setAttribute('aria-expanded', isOpen);
    });
  });
}

function renderMatches(containerId, matches, teamsMap, groupBy, showDate) {
  const container = document.getElementById(containerId);

  if (!matches.length) {
    container.innerHTML = `<div class="empty-msg">${t('noMatches')}</div>`;
    return;
  }

  const groups = {};
  matches.forEach(m => {
    const key = groupBy(m);
    if (!groups[key]) groups[key] = [];
    groups[key].push(m);
  });

  const keys = Object.keys(groups).sort((a, b) => {
    if (groupBy === groupByDate) return parseDateET(groups[a][0].local_date) - parseDateET(groups[b][0].local_date);
    return a.localeCompare(b);
  });

  let html = '';
  keys.forEach((key, i) => {
    const id = containerId + '-grp-' + i;
    const isOpen = i === 0;
    html += `<div class="group-toggle">
      <div class="group-header${isOpen ? ' open' : ''}" data-target="${id}" role="button" tabindex="0" aria-expanded="${isOpen}">
        <span class="arrow" aria-hidden="true">\u25B6</span> ${key}
      </div>
      <div class="group-body${isOpen ? ' open' : ''}" id="${id}">
        <ul class="match-list">`;
    groups[key].forEach(m => {
      html += buildMatchHTML(m, teamsMap, showDate);
    });
    html += `</ul></div></div>`;
  });

  container.innerHTML = html;
}

function groupByGroup(m) { return m.type === 'group' ? t('group') + ' ' + m.group : stageLabel(m.type); }
function groupByDate(m) {
  const dt = parseDateET(m.local_date);
  return fmtDate(dt);
}

function renderPastMatches(containerId, matches, teamsMap) {
  const container = document.getElementById(containerId);
  if (!matches.length) {
    container.innerHTML = `<div class="empty-msg">${t('noPast')}</div>`;
    return;
  }

  const todayStr = new Date().toLocaleDateString('en-US', { timeZone: 'America/New_York', month: '2-digit', day: '2-digit', year: 'numeric' });
  const yesterdayET = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }));
  yesterdayET.setDate(yesterdayET.getDate() - 1);
  const yesterdayStr = `${String(yesterdayET.getMonth()+1).padStart(2,'0')}/${String(yesterdayET.getDate()).padStart(2,'0')}/${yesterdayET.getFullYear()}`;

  const byDate = {};
  matches.forEach(m => {
    const ds = m.local_date.split(' ')[0];
    if (!byDate[ds]) byDate[ds] = { groups: {} };
    const gk = m.type === 'group' ? t('group') + ' ' + m.group : stageLabel(m.type);
    if (!byDate[ds].groups[gk]) byDate[ds].groups[gk] = [];
    byDate[ds].groups[gk].push(m);
  });

  const dateStrs = Object.keys(byDate).sort((a, b) => b.localeCompare(a));

  let html = '';
  dateStrs.forEach((ds, di) => {
    const [m, d, y] = ds.split('/');
    const dt = new Date(+y, +m - 1, +d);
    let label = fmtDate(dt);
    if (ds === todayStr) label = t('today');
    else if (ds === yesterdayStr) label = t('yesterday');

    const dateId = containerId + '-d-' + di;
    const dateOpen = di === 0;
    html += `<div class="group-toggle">
      <div class="group-header${dateOpen ? ' open' : ''}" data-target="${dateId}" role="button" tabindex="0" aria-expanded="${dateOpen}">
        <span class="arrow" aria-hidden="true">\u25B6</span> ${label}
      </div>
      <div class="group-body${dateOpen ? ' open' : ''}" id="${dateId}">`;

    const groupKeys = Object.keys(byDate[ds].groups).sort();
    groupKeys.forEach((gk, gi) => {
      const groupId = dateId + '-g-' + gi;
      html += `<div class="group-toggle nested">
        <div class="group-header" data-target="${groupId}" role="button" tabindex="0" aria-expanded="false">
          <span class="arrow" aria-hidden="true">\u25B6</span> ${gk}
        </div>
        <div class="group-body" id="${groupId}">
          <ul class="match-list">`;
      byDate[ds].groups[gk].forEach(m => {
        html += buildMatchHTML(m, teamsMap, false);
      });
      html += `</ul></div></div>`;
    });

    html += `</div></div>`;
  });

  container.innerHTML = html;
}

let cachedData = null;

function renderAll() {
  if (!cachedData) return;

  document.getElementById('header-title').textContent = t('header');
  document.getElementById('tab-label-today').textContent = t('tabToday');
  document.getElementById('tab-label-upcoming').textContent = t('tabUpcoming');
  document.getElementById('tab-label-past').textContent = t('tabPast');
  document.getElementById('footer-times').textContent = t('footerTimes');
  document.getElementById('today-heading').textContent = fmtDate(new Date(new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }))) + ' \u2014 ' + t('todayHeading');
  document.getElementById('upcoming-heading').textContent = t('upcomingHeading');
  document.getElementById('past-heading').textContent = t('pastHeading');

  renderMatches('today-content', cachedData.todayMatches, cachedData.teamsMap, groupByGroup, false);
  renderMatches('upcoming-content', cachedData.upcomingMatches, cachedData.teamsMap, groupByDate, false);
  renderPastMatches('past-content', cachedData.pastMatches, cachedData.teamsMap);
  bindAccordions();
  renderFavBar();
}

async function loadData() {
  try {
    const opts = { mode: 'cors' };
    const [teamsRes, gamesRes] = await Promise.all([
      fetch(API_BASE + '/get/teams', opts),
      fetch(API_BASE + '/get/games', opts)
    ]);

    if (!teamsRes.ok) throw new Error('Teams API returned ' + teamsRes.status);
    if (!gamesRes.ok) throw new Error('Games API returned ' + gamesRes.status);

    const teamsData = await teamsRes.json();
    const gamesData = await gamesRes.json();

    let teamsList, gamesList;
    if (Array.isArray(teamsData)) teamsList = teamsData;
    else if (teamsData.teams) teamsList = teamsData.teams;
    else teamsList = [];

    if (Array.isArray(gamesData)) gamesList = gamesData;
    else if (gamesData.games) gamesList = gamesData.games;
    else gamesList = [];

    const teamsMap = {};
    teamsList.forEach(t => { teamsMap[t.name_en] = t; });

    const todayStr = new Date().toLocaleDateString('en-US', { timeZone: 'America/New_York', month: '2-digit', day: '2-digit', year: 'numeric' });

    const todayMatches = [];
    const upcomingMatches = [];
    const pastMatches = [];

    gamesList.forEach(m => {
      const dateStr = m.local_date.split(' ')[0];
      if (dateStr === todayStr) {
        todayMatches.push(m);
      } else if (m.finished === 'TRUE') {
        pastMatches.push(m);
      } else {
        upcomingMatches.push(m);
      }
    });

    const allGamesMap = {};
    gamesList.forEach(m => { allGamesMap[getMatchId(m)] = m; });

    cachedData = { teamsMap, todayMatches, upcomingMatches, pastMatches, allGamesMap };
    renderAll();

    favorites.forEach(fav => {
      if (allGamesMap[fav.id]) {
        favMatchData[fav.id] = allGamesMap[fav.id];
        prevFavState[fav.id] = getMatchState(allGamesMap[fav.id]);
      }
    });
    renderFavBar();
    updatePolling();

  } catch (err) {
    const isFile = location.protocol === 'file:';
    const hint = isFile
      ? `<p style="font-size:0.8rem;color:var(--text-dim)">${t('serverHint')}<br><code style="background:rgba(255,255,255,0.05);padding:2px 8px;border-radius:4px">npx serve .</code></p>`
      : '';
    const msg = `<div class="error-msg"><p>${t('failedLoad')}</p>${hint}<button onclick="window.loadData()">${t('retry')}</button></div>`;
    document.getElementById('today-content').innerHTML = msg;
    document.getElementById('upcoming-content').innerHTML = msg;
    document.getElementById('past-content').innerHTML = msg;
  }
}
window.loadData = loadData;

/* ----- FAVORITES & LIVE BAR ----- */
function saveFavorites() {
  localStorage.setItem(FAV_KEY, JSON.stringify(favorites));
}

function updateStarUI() {
  document.querySelectorAll('.star-btn').forEach(el => {
    const id = el.dataset.matchId;
    const isFav = favorites.some(f => f.id === id);
    el.classList.toggle('active', isFav);
    el.textContent = isFav ? '★' : '☆';
    el.title = isFav ? t('unfollow') : t('followMatch');
  });
}

function showFavToast(msg) {
  const el = document.getElementById('fav-toast');
  el.textContent = msg;
  el.classList.add('show');
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => el.classList.remove('show'), 2500);
}

function toggleFavorite(matchId) {
  const idx = favorites.findIndex(f => f.id === matchId);
  if (idx !== -1) {
    favorites.splice(idx, 1);
    delete favMatchData[matchId];
    delete prevFavState[matchId];
  } else {
    if (favorites.length >= MAX_FAVS) {
      showFavToast(t('maxFavs'));
      return;
    }
    favorites.push({ id: matchId });
    if (cachedData && cachedData.allGamesMap && cachedData.allGamesMap[matchId]) {
      favMatchData[matchId] = cachedData.allGamesMap[matchId];
      prevFavState[matchId] = getMatchState(cachedData.allGamesMap[matchId]);
    }
  }
  saveFavorites();
  updateStarUI();
  renderFavBar();
  updatePolling();
}

function buildFavMatchHTML(m) {
  if (!m) return '';
  const isFinished = m.finished === 'TRUE';
  const isLive = m.time_elapsed && m.time_elapsed !== 'notstarted' && !isFinished;
  const teamsMap = (cachedData && cachedData.teamsMap) ? cachedData.teamsMap : {};
  const matchId = getMatchId(m);

  let homeName, awayName;
  if (m.home_team_id === '0') {
    homeName = m.home_team_label || 'TBD';
  } else {
    homeName = teamName(m.home_team_name_en);
  }
  if (m.away_team_id === '0') {
    awayName = m.away_team_label || 'TBD';
  } else {
    awayName = teamName(m.away_team_name_en);
  }

  const homeFlag = m.home_team_id !== '0' ? teamFlag(m.home_team_name_en, teamsMap) : '';
  const awayFlag = m.away_team_id !== '0' ? teamFlag(m.away_team_name_en, teamsMap) : '';

  let scoreHTML, timeHTML, timeClass;
  if (isFinished) {
    scoreHTML = `<span class="score">${m.home_score != null ? m.home_score : 0}</span><span class="vs">–</span><span class="score">${m.away_score != null ? m.away_score : 0}</span>`;
    timeHTML = `<span class="time finished">${t('fullTime')}</span>`;
    timeClass = 'finished';
  } else if (isLive) {
    scoreHTML = `<span class="score">${m.home_score != null ? m.home_score : 0}</span><span class="vs">–</span><span class="score">${m.away_score != null ? m.away_score : 0}</span>`;
    timeHTML = `<span class="time live">${m.time_elapsed}'</span>`;
    timeClass = 'live';
  } else {
    scoreHTML = `<span class="vs">${t('vs')}</span>`;
    timeHTML = `<span class="time countdown" data-match-id="${matchId}"><span class="countdown-label">${t('startsIn')}</span> <span class="countdown-value">--:--:--</span></span>`;
    timeClass = 'countdown';
  }

  const topRow = `${homeFlag}<span class="team">${homeName}</span>${scoreHTML}<span class="team">${awayName}</span>${awayFlag}`;
  if (isFinished || isLive) {
    return `<div class="fav-match">${topRow}${timeHTML}</div>`;
  }
  return `<div class="fav-match fav-upcoming">${topRow}<div class="fav-time-row">${timeHTML}</div></div>`;
}

function renderFavBar() {
  const bar = document.getElementById('fav-bar');
  if (favorites.length === 0) {
    bar.classList.remove('active', 'one', 'two');
    bar.innerHTML = '';
    return;
  }
  bar.classList.add('active');
  bar.classList.remove('one', 'two');
  bar.classList.remove('flash', 'goal-flash');

  if (favorites.length === 1) {
    bar.classList.add('one');
    const m = favMatchData[favorites[0].id];
    bar.innerHTML = buildFavMatchHTML(m);
  } else {
    bar.classList.add('two');
    const m1 = favMatchData[favorites[0].id];
    const m2 = favMatchData[favorites[1].id];
    bar.innerHTML = buildFavMatchHTML(m1) + buildFavMatchHTML(m2);
  }
}

function updatePolling() {
  if (favorites.length > 0) {
    if (!pollInterval) {
      pollInterval = setInterval(pollGames, 30000);
    }
    if (!countdownInterval) {
      countdownInterval = setInterval(updateCountdowns, 1000);
    }
  } else {
    if (pollInterval) {
      clearInterval(pollInterval);
      pollInterval = null;
    }
    if (countdownInterval) {
      clearInterval(countdownInterval);
      countdownInterval = null;
    }
  }
}

function updateCountdowns() {
  const bar = document.getElementById('fav-bar');
  if (!bar.classList.contains('active')) return;
  bar.querySelectorAll('.time.countdown').forEach(el => {
    const matchId = el.dataset.matchId;
    if (!matchId) return;
    const m = favMatchData[matchId];
    if (!m) return;
    const dt = parseDateET(m.local_date);
    const now = new Date();
    const diff = dt - now;
    if (diff > 0) {
      const h = Math.floor(diff / 3600000);
      const min = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      const val = el.querySelector('.countdown-value');
      if (val) val.textContent = `${String(h).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    } else {
      el.innerHTML = t('startingSoon');
      el.classList.remove('countdown');
      el.classList.add('soon');
    }
  });
}

function flashFavBar() {
  const bar = document.getElementById('fav-bar');
  bar.classList.add('flash', 'goal-flash');
  setTimeout(() => {
    bar.classList.remove('flash', 'goal-flash');
  }, 3000);
}

function showFlash(msg) {
  const banner = document.getElementById('flash-banner');
  if (flashTimeoutId) {
    clearTimeout(flashTimeoutId);
    flashTimeoutId = null;
    banner.textContent = '';
  }
  banner.textContent = msg;
  banner.classList.add('active');
  flashTimeoutId = setTimeout(() => {
    banner.classList.remove('active');
    banner.textContent = '';
    flashTimeoutId = null;
  }, 15000);
}

function checkForEvents() {
  const events = [];
  favorites.forEach(fav => {
    const id = fav.id;
    const prev = prevFavState[id];
    const curr = getMatchState(favMatchData[id]);
    if (!prev || !curr) return;
    const homeName = favMatchData[id] ? teamName(favMatchData[id].home_team_name_en) : '';
    const awayName = favMatchData[id] ? teamName(favMatchData[id].away_team_name_en) : '';

    if (prev.home_score !== curr.home_score || prev.away_score !== curr.away_score) {
      const hs = curr.home_score != null ? curr.home_score : 0;
      const as = curr.away_score != null ? curr.away_score : 0;
      events.push(`⚽ ${homeName} ${hs}–${as} ${awayName}`);
    }
    if ((prev.time_elapsed === 'notstarted' || !prev.time_elapsed) && curr.time_elapsed && curr.time_elapsed !== 'notstarted') {
      events.push(`▶ ${t('matchStarted')}`);
    }
    if (prev.finished !== 'TRUE' && curr.finished === 'TRUE') {
      events.push(`🏁 ${t('fullTime')}`);
    }
    prevFavState[id] = curr;
  });

  if (events.length > 0) {
    showFlash(events.join(' · '));
    flashFavBar();
  }
}

async function pollGames() {
  try {
    const res = await fetch(API_BASE + '/get/games', { mode: 'cors' });
    if (!res.ok) return;
    const data = await res.json();
    const gamesList = Array.isArray(data) ? data : (data.games || []);
    const gamesMap = {};
    gamesList.forEach(m => {
      const id = getMatchId(m);
      gamesMap[id] = m;
    });
    let changed = false;
    favorites.forEach(fav => {
      const id = fav.id;
      if (gamesMap[id]) {
        favMatchData[id] = gamesMap[id];
        changed = true;
      }
    });
    if (changed) {
      checkForEvents();
      renderFavBar();
    }
  } catch (_) {}
}

function setLang(lang) {
  currentLang = lang;
  currentFacts = lang === 'es' ? FACTS_ES : FACTS_EN;
  localStorage.setItem('wc26-lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  factIdx = 0;
  if (tickerEl) {
    tickerEl.style.opacity = '0';
    setTimeout(() => {
      tickerEl.textContent = currentFacts[0];
      factIdx = 1;
      tickerEl.style.opacity = '1';
    }, 300);
  }

  if (cachedData) renderAll();
}

document.addEventListener('DOMContentLoaded', () => {
  try {
    document.getElementById('tz-display').textContent = localTZ();
  } catch (_) {}

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  document.querySelectorAll('aside li').forEach(li => {
    li.addEventListener('click', () => {
      document.querySelectorAll('aside li').forEach(l => {
        l.classList.remove('active');
        l.setAttribute('aria-selected', 'false');
      });
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      li.classList.add('active');
      li.setAttribute('aria-selected', 'true');
      const tab = document.getElementById('tab-' + li.dataset.tab);
      if (tab) tab.classList.add('active');
    });
    li.setAttribute('role', 'tab');
    li.setAttribute('aria-selected', li.classList.contains('active') ? 'true' : 'false');
  });

  initTicker();

  document.addEventListener('click', e => {
    const star = e.target.closest('.star-btn');
    if (star) {
      e.stopPropagation();
      toggleFavorite(star.dataset.matchId);
    }
  });

  window.addEventListener('beforeunload', () => {
    if (pollInterval) clearInterval(pollInterval);
    if (countdownInterval) clearInterval(countdownInterval);
  });

  loadData();
});
