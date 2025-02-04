const htmlElement = document.documentElement;
const Menu = document.getElementById('Menu');
const Dropdown = document.getElementById('DropdownList');
const Title = document.getElementById('Title');
const Language = document.getElementById('Language');
const Choice = document.getElementById('JerseysChoice');
const JerseyTitle = document.getElementById('JerseyTitle');
const TextBubble = document.getElementById('TextBubble');
const Container = document.getElementById('Container');
const Container2 = document.getElementById('Container2');
const Cross = document.getElementById('CrossSymbol');
const Title_NameElement = document.getElementById('Title_Name');
const Title_ClubElement = document.getElementById('Title_Club');
const LanguageButton = document.getElementById('LanguageButton');
const BubbleVideo = document.getElementById('BackgroundBubbleVideo');
const Option = document.getElementById('OptionNum1');
const FormColor = document.getElementById('Color.Form2');
const Form = document.getElementById("Form1");
const Form2 = document.getElementById("Form2");
const Logo = document.getElementById("Logo");
const LogoPhone = document.getElementById("LogoPhone");
const JerseyLogo = document.getElementById("JerseyLogo");
const Button = document.getElementById("LanguageButton");
// Récupérer la valeur sélectionnée
var selectedValue = this.value;
//Menu options. Numbers corresponds to the realease order
const One = document.getElementById('Choice001');
const Two = document.getElementById('Choice002');
const Three = document.getElementById('Choice003');
const Four = document.getElementById('Choice004');
const Five = document.getElementById('Choice005');
const Six = document.getElementById('Choice006');
const Website = document.getElementById('Website');
const Socials = document.getElementById('Socials');
var BackgroundVideo = [
    document.getElementById("Official2023Background"),
    document.getElementById("Champions2023Background"),
    document.getElementById("Official2024Background"),
    document.getElementById("FirstAnniversaryBackground"),
    document.getElementById("Champions2024Background"),
    document.getElementById("Official2025Background"),
    document.getElementById("LAGM82025Background")

];
var Descriptions = [
  document.getElementById("Description"),
  document.getElementById("DescriptionPhone"),
]
var MenuBars = [
  document.getElementById("MenuBars1"),
  document.getElementById("MenuBars2"),
  document.getElementById("MenuBars3")
]
var JerseysV1 = [ 
    { Official2023JerseyFront: document.getElementById("Official2023JerseyFront") },
    { Official2023JerseyBack: document.getElementById("Official2023JerseyBack") },
    { Champions2023JerseyFront: document.getElementById("Champions2023JerseyFront") },
    { Champions2023JerseyBack: document.getElementById("Champions2023JerseyBack") },
    { Official2024JerseyFront: document.getElementById("Official2024JerseyFront") },
    { Official2024JerseyBack: document.getElementById("Official2024JerseyBack") },
    { FirstAnniversaryJerseyFront: document.getElementById("FirstAnniversaryJerseyFront") },
    { FirstAnniversaryJerseyBack: document.getElementById("FirstAnniversaryJerseyBack") },
];
var JerseysV2 = [
  { Champions2024JerseyFront: document.getElementById("Champions2024JerseyFront") },
  { Champions2024JerseyBack: document.getElementById("Champions2024JerseyBack") },
];
var JerseysV3 = [
  { Official2025JerseyFront: document.getElementById("Official2025JerseyFront") },
  { Official2025JerseyBack: document.getElementById("Official2025JerseyBack") },
  { LAGM82025JerseyFront: document.getElementById("LAGM82025JerseyFront") },
  { LAGM82025JerseyBack: document.getElementById("LAGM82025JerseyBack") },
]