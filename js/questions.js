class Questions {
	constructor(text, options, answer, points, category) {
		this.text = text;
		this.options = options;
		this.answer = answer;
		this.points = points;
		this.category = category;
	}
}
const geography = [
	new Questions('Koji je glavni grad Srbije?', ['Nis', 'Zagreb', 'Sarajevo', 'Beograd'], 'Beograd', 5, 'Geography'),
	new Questions('Kako se zove prva afrička crnačka država?', ['Libija', 'Liberija', 'Liban', 'Finska'], 'Liberija', 8, 'Geography'),
	new Questions('Koji je najveci nacionalni park u Srbiji?', ['Fruška gora', 'Kopaonik', 'Đerdap', 'Tara'], 'Đerdap', 3, 'Geography'),
	new Questions('Sredozemno more je, najvećim delom, oivičeno?', ['Kopnom', 'Okeanima', 'Drugim morima', 'Ostrvima'], 'Kopnom', 5, 'Geography'),
	new Questions('Koje godine je bila Kosovska bitka?', ['1191.g.', '1389.g.', '1878.g.', '1597.g.'], '1389.g.', 7, 'Geography'),
	new Questions('Po ekonomskom značaju u stočarstvu prvo mesto zauzimaju?', ['Goveda', 'Svinje', 'Ovce', 'Koze'], 'Goveda', 6, 'Geography'),
	new Questions('Koliko je dugačka kanalska mreža hidrosistema Dunav-Tisa-Dunav?', ['3500 km', '929 km', '580 km', ' 2560 km'], '929 km', 10, 'Geography'),
	new Questions('Koji je glavni grad Hrvatske?', ['Nis', 'Zagreb', 'Sarajevo', 'Sofia'], 'Zagreb', 8, 'Geography'),
	new Questions('Najbrojnija etnička zajednica u Vojvodini je srpska sa oko?', ['92% stanovništva', '87% stanovništva', '75% stanovništva', '63% stanovništva'], '63% stanovništva', 5, 'Geography'),
  new Questions('Koji je glavni grad Bugarske?', ['Nis', 'Zagreb', 'Sofia', 'Sarajevo'], 'Sofia', 4, 'Geography')
];
const physics = [
  new Questions('Zakon inercije je još poznat i kao?', ['Šarlov zakon', 'Džulov zakon', 'II Njutnov zakon', 'I Njutnov zakon'], 'I Njutnov zakon', 5, 'Physics'),
  new Questions('Koliki je domet tela ispaljenog brzinom 10 m/s pod uglom π/4 u odnosu na horizontalu (g=10 m/s2)?', ['50 m', '30 m', '20 m', '10 m'], '10 m', 11, 'Physics'),
  new Questions('Ako se impuls tela konstantne mase poveća dva puta njegova kinetička energija se?', ['ne menja', 'smanji četiri puta', 'poveća dva puta', 'poveća četiri puta'], 'poveća četiri puta', 8, 'Physics'),
  new Questions('Pri izotermnom termodinamičkom procesu važi?', ['δQ = 0', 'δQ = 2', 'δA = 0', 'δU = 0'], 'δU = 0', 7, 'Physics'),
  new Questions('Ukupan kapacitet sistema sačinjenog od dva paralelno vezana kondenzatora, kapaciteta 10 µF, koji su serijski vezani sa kondenzatorom kapaciteta 15 µF je?', ['35 µF', '8,25 µF', '6 µF', '8,57 µF'], '8,57 µF', 9, 'Physics'),
  new Questions('Dva litra vode temperature 300 K pomeša se sa litar vode temperature 330 K. Temperatura smeše je?', ['315 k', '320 k', '325 k', '310 K'], '310 K', 4, 'Physics'),
  new Questions('Koja od navedenih fizičkih veličina je vektorska?', ['Nijedno', 'Pređeni put', 'Pritisak', 'Sila'], 'Sila', 5, 'Physics'),
  new Questions('Kapacitivna otpornost (impendansa) kondenzatora na nekoj frekvenciji je 36 Ω. Kada se frekvencija utrostruči, impendansa kondenzatora postaje?', ['92,6 Ω', '108 Ω', '12 Ω', '20,8 Ω'], '12 Ω', 8, 'Physics'),
  new Questions('Jedinica u SI sistemu za jačinu svetlosti je?', ['kelvin (K)', 'lumen (lm)', 'luks (lux)', 'kandela (Cd)'], 'kandela (Cd)', 8, 'Physics'),
  new Questions('Koliku kinetičku energiju ima elektron koji se kreće u homogenom električnom polju potencijalne razlike 1 [V]?', ['6,62⋅10-23 [J]', '1 [J]', '1,6⋅10-19 [C]', '1,6⋅10-19 [J]'], '1,6⋅10-19 [J]', 6, 'Physics'),
  new Questions('Molarna zapremina idealnog gasa na pritisku p i temperaturi T proporcionalna je?', ['n ( T/p)', 'p/T', 'In ( p/T)', 'T/p'], 'T/p', 5, 'Physics'),
  new Questions('Zapremina jednog mola idealnog gasa na temperaturi od 0 o C i pritisku od 101,3 kPa je (R=8,3 J/(mol K)?', ['22.4 m 3', '2240 cm 3', '224 dm 3', '22.4 dm 3'], '22.4 dm 3', 7, 'Physics')
];
const biology = [
  new Questions('Srednje uho je prisutno?', ['Kod svih hordata', 'Samo kod sisara', 'Kod svih', 'Kod kopnenih'], 'Kod kopnenih', 7, 'Biology'),
  new Questions('Pojava jednog hromozoma viška ili manjka naziva se?', ['Poliploidija', 'Rekombinacija', 'Kariotip', 'Aneuploidija'], 'Aneuploidija', 10, 'Biology'),
  new Questions('Gipkost kostima daje supstanca?', ['Aktin', 'Miozin', 'Insulin', 'Osein'], 'Osein', 5, 'Biology'),
  new Questions('Proces, kojim se aktivnošću ćelijske membrane izbacuju supstance iz ćelije u vanćelijsku sredinu je?', ['Fagocitoza', 'Pinocitoza', 'Egzocitoza', 'Endocitoza'], 'Egzocitoza', 8, 'Biology'),
  new Questions('Hromozomska garnitura spermatozoida čoveka može biti?', ['44A + XY', '53A + XY', '22A + XY', '22A + Y'], '22A + Y', 6, 'Biology'),
  new Questions('Krajem profaze mitoze u oblasti primarnog suženja hromozoma uočava se prisustvo?', ['Centriola', 'Jedarca', 'Euhromatina', 'Kinetohora'], 'Kinetohora', 5, 'Biology'),
  new Questions('Amnion ima ulogu u?', ['Ishrani embriona', 'Nijedno', 'Zaštiti embriona', 'Disanju embriona'], 'Zaštiti embriona', 9, 'Biology'),
  new Questions('U fotosintezi se sunčeva energija pretvara u?', ['Toplotnu energiju', 'Nijedno', 'Mehaničku energiju', 'Hemijsku energiju'], 'Hemijsku energiju', 5, 'Biology'),

];
const mathematics = [
  new Questions('U 83 litara alkoholnog pića se nalazi 67 litara vode. Koliko u ovom alkoholnom piću ima procenata alkohola?', ['24.34%', '19.26%', '21.71%', '19.28%'], '19.28%', 7, 'mathematics'),
  new Questions('Date su funkcije f1(x) = x; f2(x) = x2/x; f3(x) =√x2; f4(x) = (√x)2. Tačan je iskaz?', ['f1 = f2 = f3', 'f1≠f3≠f4', 'f1=f2≠f3', 'f1≠f2≠f3'], 'f1≠f2≠f3', 5, 'mathematics'),
  new Questions('Vrednost izraza sin86°+sin76°-sin26°-sin16°/cos86°+cos76°+cos26°+cos16° iznosi?', ['√3', '√3 /2', '2/√3', '1/√3'], '1/√3', 6, 'mathematics'),
  new Questions('Od 350kg brašna dobija se 450kg hleba. Koliko procenata iznosi težina hleba prema težini brašna??', ['422%;', '155%;', '210%;', '128,57%;'], '128,57%;', 8, 'mathematics'),
  new Questions('Trinaesti član aritmetičkog niza -2, -6, -10,…. je?', ['50;', '100;', '-26;', '-50'], '-50', 9, 'mathematics'),
  new Questions('Osnovica jednakokrakog trougla uznosi √2 cm. Težišne duži koje su povučene na krake seku se pod pravim uglom. Površina tog trougla (u cm2) iznosi?', ['2.5', '2', '3.5;', '1.5'], '1.5', 3, 'mathematics'),
  new Questions('Ako je f(x) = x2 + x + 1; tada je f(x + 2) - 2f(x + 1) + f(x) za svako x jednako?', ['0', 'X', '3', '2'], '2', 8, 'mathematics'),
  new Questions('Jednačina 92 √x-1-4·32 √x-1+3=0?', ['Nema rešenja', 'Ima 3 rešenja', 'Ima 1 rešenja', 'Ima 2 rešenja'], 'Ima 2 rešenja', 4, 'mathematics'),
  new Questions('Ako je x2+x+1=0, tada je izraz x2009+x-2009jedna?', ['x+1', 'x-1', '1', '-1'], '-1', 5, 'mathematics'),
  new Questions('Odredi najmanji zajednički sadržalac za polinome 2x − 6; x2 − 9; x2 − 6x + 9?', ['(x + 3)2', '(x + 3)(x − 3)', '2(x + 3)(x − 3)', '2(x + 3)(x − 3)2'], '2(x + 3)(x − 3)2', 5, 'mathematics'),
  new Questions('Rastavi na činioce 11ax2 − 66axy + 99ay2?', ['11a+3y2', '23a(x−3y)2', '11a(x+3y)2', '11a(x−3y)2'], '11a(x−3y)2', 5, 'mathematics'),
];
const informatics = [
  new Questions('Prodaja potrošača drugom potrošaču preko poslovnog posrednika je?', ['C2C', 'B2B2C', 'B2B', 'C2B2C'], 'C2B2C', 6, 'Informatics'),
  new Questions('Koja se od navedenih oznaka odnosi na hard disk?', ['SD', 'CD', 'FDD', 'HDD'], 'HDD', 8, 'Informatics'),
  new Questions('Koja vrsta štampača koristi mastilo?', ['Nijedan', 'Matričn', 'Laserski', 'Ink-jet'], 'Ink-jet', 9, 'Informatics'),
  new Questions('Obeležiti periferijski uređaj računara?', ['Matična ploča', 'Procesor', 'Hladnjak', 'Monitor'], 'Monitor', 5, 'Informatics'),
  new Questions('Za prijem maila koristi se protokol?', ['FTP', 'NNTP', 'SMTP', 'POP3'], 'POP3', 4, 'Informatics'),
  new Questions('Sadržaj registra ne može biti?', ['Nijedno', 'Podatak', 'Naredba', 'Algoritam'], 'Algoritam', 6, 'Informatics'),
  new Questions('Algoritam je?', ['Skup programa', 'Programski jezik', 'Naredba', 'Opis toka programa'], 'Opis toka programa', 5, 'Informatics'),
  new Questions('Skraćenica koja je nastala od engleskih reči, a koja se odnosi na uređaj za neprekidno napajanje računara glasi?', ['USB', 'UHF', 'UBB', 'UPS'], 'UPS', 7, 'Informatics'),
  new Questions('Vrlo brza memorija koja se nalazi u samom procesoru ili uz njega naziva se?', ['Nijedno', 'Bafer', 'EPROM', 'keš (cache)'], 'keš (cache)', 8, 'Informatics'),
  new Questions('Deo teksta otkucan između dva pritiska na taster Enter (Return) naziva se?', ['rečenica', 'zaglavlje', 'poglavlje', 'pasus (paragraf)'], 'pasus (paragraf)', 5, 'Informatics'),
  new Questions('Među navedenim tipovima memorija u računarskom sistemu izdvojiti onaj koji ima najveću brzinu pristupa i najmanji kapacitet?', ['Ne znam', 'RAM', 'Hard disk', 'Registri'], 'Registri', 7, 'Informatics'),
  new Questions('Broj 33 u binarnom zapisu je?', ['1110001', '110001', '100011', '100001'], '100001', 9, 'Informatics'),
  new Questions('Pretača Internet-a je?', ['NORDMENDE', 'INSA', 'ABAKUS', 'ARPANET'], 'ARPANET', 5, 'Informatics')
];
const programming = [
  new Questions('U Visual C++ programskom jeziku poruka kojom hvatate događaj pomeranje miša je?', ['WM_MOVEMOUSE', 'WM_MOUSEOVER', 'WM_MOUSEMOVE', 'WM_MOUSECHANGE'], 'WM_MOUSEMOVE', 9, 'Programming'),
  new Questions('U Visual C++-u otvaranje open dijalog prozora vrši se preko klase?', ['FileDialog(TRUE)', 'FileDialog(FALSE)', 'CFileOpenDialog(FALSE)', 'CFileDialog(TRUE)'], 'CFileDialog(TRUE)', 15, 'Programming'),
  new Questions('JVM je?', ['Java Visual Machine', 'Java Virtual Method', 'Java Visual Method', 'Java Virtual Machine'], 'Java Virtual Machine', 10, 'Programming'),
  new Questions('U javi modifikatori public, private i protected koriste se pri', ['Ne znam', 'Overloadingu', 'Enkapsulaciji', 'Nasleđivanju'], 'Enkapsulaciji', 9, 'Programming'),
  new Questions('Source kod je?', ['Ne znam', 'Prevedeni kod programa', 'Izvršni kod programa', 'Izvorni kod programa'], 'Izvorni kod programa', 7, 'Programming'),
  new Questions('U Visual C++ programskom jeziku otvaranje save dijalog prozora vrši se preko klase?', ['FileDialog(FALSE)', 'FileDialog(TRUE', 'FileSaveDialog(TRUE)', 'CFileDialog(FALSE)'], 'CFileDialog(FALSE)', 9, 'Programming'),
  new Questions('U programskom jeziku C++ operator koji se koristi da se pointeru dodeli vrednost je?', ['%', '#', '@', '&'], '&', 6, 'Programming'),
  new Questions('Pokretanje aplikacije u Visual C++ vrši se preko?', ['Alt + F7', 'Alt + F5', 'Ctrl + F7', 'Ctrl + F5'], 'Ctrl + F5', 8, 'Programming'),
  new Questions('Formatiranje izlaza nad objektom cout vrši se manipulatorima?', ['%d %x %O', 'printf()', 'scanf()', 'hex, dec i oct'], 'hex, dec i oct', 7, 'Programming'),
  new Questions('Postupak kojim se prevedeni program pretvara u izvršni oblik je?', ['Ne znam', 'Listing', 'Loging', 'Linking'], 'Linking', 5, 'Programming')
];