//Information used for the application

export const categories = {
  deportes: "Deportes",
  historia: "Historia",
  geografia: "Geografia",
};

export const questions = [
  {
    id: 1,
    question: "¿En qué equipo juega Lionel Messi?",
    answers: [
      { answer: "Barcelona", isCorrect: false },
      { answer: "Real Madrid", isCorrect: false },
      { answer: "Getafe", isCorrect: false },
      { answer: "Inter Miami", isCorrect: true },
    ],

    category: categories.deportes,
  },
  {
    id: 2,
    question: "¿Qué selección ganó el mundial de 2018?",
    answers: [
      { answer: "Argentina", isCorrect: false },
      { answer: "España", isCorrect: false },
      { answer: "Brasil", isCorrect: false },
      { answer: "Francia", isCorrect: true },
    ],
    category: categories.deportes,
  },
  {
    id: 3,
    question: "¿Quie ganó la Premier League en la temporada 2022-2023?",
    answers: [
      { answer: "Manchester United", isCorrect: false },
      { answer: "Liverpool", isCorrect: false },
      { answer: "Chelsea", isCorrect: false },
      { answer: "Manchester City", isCorrect: true },
    ],
    category: categories.deportes,
  },
  {
    id: 4,
    question: "¿En qué equipo juega Cristiano Ronaldo?",
    answers: [
      { answer: "Manchester City", isCorrect: false },
      { answer: "Real Madrid", isCorrect: false },
      { answer: "Inter", isCorrect: false },
      { answer: "Al-Nassr", isCorrect: true },
    ],
    category: categories.deportes,
  },
  {
    id: 5,
    question: "¿Cuántos goles tiene en su carrera Cristiano Ronaldo?",
    answers: [
      { answer: "700", isCorrect: false },
      { answer: "869", isCorrect: false },
      { answer: "985", isCorrect: false },
      { answer: "854", isCorrect: true },
    ],
    category: categories.deportes,
  },
  {
    id: 6,
    question: "¿Cuándo comienza la primera guerra mundial?",
    answers: [
      { answer: "1600", isCorrect: false },
      { answer: "1925", isCorrect: false },
      { answer: "1555", isCorrect: false },
      { answer: "1914", isCorrect: true },
    ],
    category: categories.historia,
  },
  {
    id: 7,
    question: "¿Quién es el primer presidente de los Estados Unidos?",
    answers: [
      { answer: "Obama", isCorrect: false },
      { answer: "Hilton", isCorrect: false },
      { answer: "JF Kennedy", isCorrect: false },
      { answer: "Washington", isCorrect: true },
    ],
    category: categories.historia,
  },
  {
    id: 8,
    question: "¿De qué país se originó la civilización azteca?",
    answers: [
      { answer: "Guatemala", isCorrect: false },
      { answer: "España", isCorrect: false },
      { answer: "Colombia", isCorrect: false },
      { answer: "México", isCorrect: true },
    ],
    category: categories.historia,
  },
  {
    id: 9,
    question: "¿Dónde se encuentra Babilonia?",
    answers: [
      { answer: "España", isCorrect: false },
      { answer: "Francia", isCorrect: false },
      { answer: "Nigeria", isCorrect: false },
      { answer: "Irak", isCorrect: true },
    ],
    category: categories.historia,
  },
  {
    id: 10,
    question: "¿En qué país está ubicado Machu Pichu?",
    answers: [
      { answer: "Inglaterra", isCorrect: false },
      { answer: "Colombia", isCorrect: false },
      { answer: "Brasil", isCorrect: false },
      { answer: "Perú", isCorrect: true },
    ],
    category: categories.historia,
  },
  {
    id: 11,
    question: "¿Qué país tiene más habitantes?",
    answers: [
      { answer: "España", isCorrect: false },
      { answer: "Alemania", isCorrect: false },
      { answer: "Brasil", isCorrect: false },
      { answer: "China", isCorrect: true },
    ],
    category: categories.geografia,
  },
  {
    id: 12,
    question: "¿Qué país es el más grande del mundo?",
    answers: [
      { answer: "Brasil", isCorrect: false },
      { answer: "China", isCorrect: false },
      { answer: "Nigeria", isCorrect: false },
      { answer: "Rusia", isCorrect: true },
    ],
    category: categories.geografia,
  },
  {
    id: 13,
    question: "¿Cuál es el río más largo del mundo?",
    answers: [
      { answer: "Amazonas", isCorrect: false },
      { answer: "Humuya", isCorrect: false },
      { answer: "Molga", isCorrect: false },
      { answer: "Nilo", isCorrect: true },
    ],
    category: categories.geografia,
  },
  {
    id: 14,
    question: "¿Cuántos mares existen en la Tierra?",
    answers: [
      { answer: "70", isCorrect: false },
      { answer: "100", isCorrect: false },
      { answer: "80", isCorrect: false },
      { answer: "60", isCorrect: true },
    ],
    category: categories.geografia,
  },
  {
    id: 15,
    question: "¿Qué río pasa por más países?",
    answers: [
      { answer: "Nilo", isCorrect: false },
      { answer: "Amazonas", isCorrect: false },
      { answer: "Misisipi", isCorrect: false },
      { answer: "Danubio", isCorrect: true },
    ],
    category: categories.geografia,
  },
];
