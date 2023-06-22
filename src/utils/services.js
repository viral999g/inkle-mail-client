const names = [
  "Emma Johnson",
  "Liam Smith",
  "Olivia Davis",
  "Noah Wilson",
  "Ava Martinez",
  "Isabella Taylor",
  "Sophia Anderson",
  "Mia Thomas",
  "Charlotte Robinson",
  "Amelia Hernandez",
  "Harper Moore",
  "Evelyn Lee",
  "Abigail Walker",
  "Emily Hall",
  "Elizabeth Lewis",
  "Mila Young",
  "Ella Hill",
  "Avery Scott",
  "Sofia Green",
  "Camila Adams",
];

export const getRandomName = () => {
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
};
