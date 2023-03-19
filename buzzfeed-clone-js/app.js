const questionDisplay = document.querySelector("#questions");
const answerDisplay = document.querySelector("#answer");

const questions = [
  {
    id: 0,
    text: "Pick a vacation destination:",
    answers: [
      {
        text: "Montreal",
        image:
          "https://images.unsplash.com/photo-1519178251-5390a0fb6a3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        alt: "Photo of the Montreal City Skyline by dawn",
        credit: "Samuel Charron",
      },
      {
        text: "Pretoria",
        image:
          "https://images.unsplash.com/photo-1599641084223-1f4005486783?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        alt: "Photo of Pretoria",
        credit: "Kyle-Philip Coulson",
      },
      {
        text: "Ciudad de México",
        image:
          "https://images.unsplash.com/photo-1604340923514-0a2b69fcc51f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80",
        alt: "Photo of the Palacio de Bellas Artes in Mexico City",
        credit: "Francisco",
      },

      {
        text: "Reykjavik",
        image:
          "https://images.unsplash.com/photo-1465353471565-b77e538f34c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        alt: "Photo of the Reykjavik",
        credit: "Evelyn Paris",
      },

      {
        text: "Singapore",
        image:
          "https://images.unsplash.com/photo-1496939376851-89342e90adcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Photo of the city skyline of Singapore",
        credit: "Mike Enerio",
      },

      {
        text: "Barcelona",
        image:
          "https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Photo of the streets in Barcelona",
        credit: "Logan Armstrong",
      },
    ],
  },
  {
    id: 1,
    text: "Pick a food:",
    answers: [
      {
        text: "Pizza",
        image:
          "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Photo of a Pizza",
        credit: "Ivan Torres",
      },
      {
        text: "Potato salad",
        image:
          "https://images.unsplash.com/photo-1597130869926-224e85944619?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Photo of a Potato Salad",
        credit: "Abhishek Hajare",
      },
      {
        text: "Tamales",
        image:
          "https://images.unsplash.com/photo-1629741884398-68d755d34404?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        alt: "Photo of Tamales",
        credit: "Stefan Lehner",
      },

      {
        text: "Pho",
        image:
          "https://images.unsplash.com/photo-1631709497146-a239ef373cf1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Photo of a Pho Soup",
        credit: "Kirill Tonkikh",
      },

      {
        text: "Brezel",
        image:
          "https://images.unsplash.com/photo-1632116766245-ac9ff0e59ceb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
        alt: "Photo of Brezels",
        credit: "Mark Zanzig",
      },

      {
        text: "Sandwich",
        image:
          "https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
        alt: "Photo of a sandwich",
        credit: "Mae Mu",
      },
    ],
  },
  {
    id: 2,
    text: "Pick a bird:",
    answers: [
      {
        text: "Sparrow",
        image:
          "https://images.unsplash.com/photo-1507477338202-487281e6c27e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Photo of a sparrow",
        credit: "Mathew Schwartz",
      },
      {
        text: "Kea",
        image:
          "https://images.unsplash.com/photo-1578111504125-66bbd22bc4ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Photo of a kea",
        credit: "Brooke Marshall",
      },
      {
        text: "Macaw",
        image:
          "https://images.unsplash.com/photo-1604826010917-65cf53d6249b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Photo of a Blue-and-yellow",
        credit: "Ilona Frey",
      },

      {
        text: "Goose",
        image:
          "https://images.unsplash.com/photo-1506869730304-be7d5430e841?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        alt: "Photo of flying geese",
        credit: "Vincent van Zalinge",
      },

      {
        text: "Eagle",
        image:
          "https://images.unsplash.com/photo-1481883814866-f6e972dd8916?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1088&q=80",
        alt: "Photo of an eagle",
        credit: "Sue Tucker",
      },

      {
        text: "Ostrich",
        image:
          "https://images.unsplash.com/photo-1589307817967-c612f7daa06b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1194&q=80",
        alt: "Photo of an ostrich",
        credit: "Logan Armstrong",
      },
    ],
  },
];

const answers = [
  {
    combination: ["Barcelona", "Tamales", "Ostrich"],
    text: "Red",
    image:
      "https://images.unsplash.com/photo-1511763403446-19a1e1bfee58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80",
    alt: "Red",
    credit: "https://unsplash.com/de/@davidclode",
  },
  {
    combination: ["Montreal", "Pizza", "Macaw"],
    text: "Blue",
    image:
      "https://images.unsplash.com/photo-1653308192471-7fbe586ea1d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    alt: "Blue",
    credit: "https://unsplash.com/de/@possessedphotography",
  },
  {
    combination: ["Singapore", "Sandwich", "Macaw"],
    text: "Green",
    image:
      "https://images.unsplash.com/photo-1555465910-31f7f20a184d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1590&q=80",
    alt: "Green",
    credit: "https://unsplash.com/de/@wizard_s",
  },
  {
    combination: ["Singapore", "Pizza", "Macaw"],
    text: "Blue",
    image:
      "https://images.unsplash.com/photo-1653308192471-7fbe586ea1d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    alt: "Blue",
    credit: "https://unsplash.com/de/@possessedphotography",
  },
  {
    combination: ["Singapore", "Sandwich", "Kea"],
    text: "Green",
    image:
      "https://images.unsplash.com/photo-1555465910-31f7f20a184d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1590&q=80",
    alt: "Green",
    credit: "https://unsplash.com/de/@wizard_s",
  },
  {
    combination: ["Singapore", "Sandwich", "Macaw"],
    text: "Red",
    image:
      "https://images.unsplash.com/photo-1511763403446-19a1e1bfee58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80",
    alt: "Red",
    credit: "https://unsplash.com/de/@davidclode",
  },
  {
    combination: ["Singapore", "Potato salad", "Sparrow"],
    text: "Red",
    image:
      "https://images.unsplash.com/photo-1511763403446-19a1e1bfee58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80",
    alt: "Red",
    credit: "https://unsplash.com/de/@davidclode",
  },
  {
    combination: ["Singapore", "Potato salad", "Kea"],
    text: "Green",
    image:
      "https://images.unsplash.com/photo-1555465910-31f7f20a184d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1590&q=80",
    alt: "Green",
    credit: "https://unsplash.com/de/@wizard_s",
  },
  {
    combination: ["Singapore", "Tamales", "Ostrich"],
    text: "Green",
    image:
      "https://images.unsplash.com/photo-1555465910-31f7f20a184d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1590&q=80",
    alt: "Green",
    credit: "https://unsplash.com/de/@wizard_s",
  },
  {
    combination: ["Singapore", "Tamales", "Sparrow"],
    text: "Blue",
    image:
      "https://images.unsplash.com/photo-1653308192471-7fbe586ea1d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    alt: "Blue",
    credit: "https://unsplash.com/de/@possessedphotography",
  },
  {
    combination: ["Singapore", "Pho", "Kea"],
    text: "Red",
    image:
      "https://images.unsplash.com/photo-1511763403446-19a1e1bfee58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80",
    alt: "Red",
    credit: "https://unsplash.com/de/@davidclode",
  },
  {
    combination: ["Pretoria", "Brezel", "Eagle"],
    text: "Purple",
    image:
      "https://images.unsplash.com/photo-1558350283-8269d86681f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    alt: "Purple",
    credit: "https://unsplash.com/de/@virussinside",
  },
  {
    combination: ["Pretoria", "Brezel", "Kea"],
    text: "Green",
    image:
      "https://images.unsplash.com/photo-1555465910-31f7f20a184d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1590&q=80",
    alt: "Green",
    credit: "https://unsplash.com/de/@wizard_s",
  },
  {
    combination: ["Pretoria", "Pizza", "Sparrow"],
    text: "Purple",
    image:
      "https://images.unsplash.com/photo-1558350283-8269d86681f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    alt: "Purple",
    credit: "https://unsplash.com/de/@virussinside",
  },
  {
    combination: ["Pretoria", "Pizza", "Goose"],
    text: "Red",
    image:
      "https://images.unsplash.com/photo-1511763403446-19a1e1bfee58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80",
    alt: "Red",
    credit: "https://unsplash.com/de/@davidclode",
  },
  {
    combination: ["Pretoria", "Pho", "Goose"],
    text: "Green",
    image:
      "https://images.unsplash.com/photo-1555465910-31f7f20a184d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1590&q=80",
    alt: "Green",
    credit: "https://unsplash.com/de/@wizard_s",
  },
  {
    combination: ["Pretoria", "Tamales", "Goose"],
    text: "Purple",
    image:
      "https://images.unsplash.com/photo-1558350283-8269d86681f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    alt: "Purple",
    credit: "https://unsplash.com/de/@virussinside",
  },
  {
    combination: ["Pretoria", "Tamales", "Macaw"],
    text: "Blue",
    image:
      "https://images.unsplash.com/photo-1653308192471-7fbe586ea1d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    alt: "Blue",
    credit: "https://unsplash.com/de/@possessedphotography",
  },
  {
    combination: ["Pretoria", "Pho", "Ostrich"],
    text: "Red",
    image:
      "https://images.unsplash.com/photo-1511763403446-19a1e1bfee58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80",
    alt: "Red",
    credit: "https://unsplash.com/de/@davidclode",
  },
  {
    combination: ["Barcelona", "Brezel", "Eagle"],
    text: "Green",
    image:
      "https://images.unsplash.com/photo-1555465910-31f7f20a184d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1590&q=80",
    alt: "Green",
    credit: "https://unsplash.com/de/@wizard_s",
  },
  {
    combination: ["Barcelona", "Sandwich", "Sparrow"],
    text: "Purple",
    image:
      "https://images.unsplash.com/photo-1558350283-8269d86681f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    alt: "Purple",
    credit: "https://unsplash.com/de/@virussinside",
  },
  {
    combination: ["Barcelona", "Pho", "Goose"],
    text: "Blue",
    image:
      "https://images.unsplash.com/photo-1653308192471-7fbe586ea1d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    alt: "Blue",
    credit: "https://unsplash.com/de/@possessedphotography",
  },
  {
    combination: ["Barcelona", "Pizza", "Macaw"],
    text: "Blue",
    image:
      "https://images.unsplash.com/photo-1653308192471-7fbe586ea1d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    alt: "Blue",
    credit: "https://unsplash.com/de/@possessedphotography",
  },
  {
    combination: ["Barcelona", "Pizza", "Ostrich"],
    text: "Red",
    image:
      "https://images.unsplash.com/photo-1511763403446-19a1e1bfee58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80",
    alt: "Red",
    credit: "https://unsplash.com/de/@davidclode",
  },
  {
    combination: ["Montreal", "Brezel", "Eagle"],
    text: "Green",
    image:
      "https://images.unsplash.com/photo-1555465910-31f7f20a184d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1590&q=80",
    alt: "Green",
    credit: "https://unsplash.com/de/@wizard_s",
  },
  {
    combination: ["Montreal", "Pho", "Eagle"],
    text: "Purple",
    image:
      "https://images.unsplash.com/photo-1558350283-8269d86681f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    alt: "Purple",
    credit: "https://unsplash.com/de/@virussinside",
  },
  {
    combination: ["Montreal", "Potato salad", "Kea"],
    text: "Green",
    image:
      "https://images.unsplash.com/photo-1555465910-31f7f20a184d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1590&q=80",
    alt: "Green",
    credit: "https://unsplash.com/de/@wizard_s",
  },
  {
    combination: ["Montreal", "Pizza", "Sparrow"],
    text: "Red",
    image:
      "https://images.unsplash.com/photo-1511763403446-19a1e1bfee58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80",
    alt: "Red",
    credit: "https://unsplash.com/de/@davidclode",
  },
  {
    combination: ["Montreal", "Sandwich", "Ostrich"],
    text: "Blue",
    image:
      "https://images.unsplash.com/photo-1653308192471-7fbe586ea1d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    alt: "Blue",
    credit: "https://unsplash.com/de/@possessedphotography",
  },
  {
    combination: ["Reykjavik", "Potato salad", "Eagle"],
    text: "Purple",
    image:
      "https://images.unsplash.com/photo-1558350283-8269d86681f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    alt: "Purple",
    credit: "https://unsplash.com/de/@virussinside",
  },
  {
    combination: ["Reykjavik", "Sandwich", "Kea"],
    text: "Green",
    image:
      "https://images.unsplash.com/photo-1555465910-31f7f20a184d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1590&q=80",
    alt: "Green",
    credit: "https://unsplash.com/de/@wizard_s",
  },
  {
    combination: ["Reykjavik", "Potato salad", "Goose"],
    text: "Red",
    image:
      "https://images.unsplash.com/photo-1511763403446-19a1e1bfee58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80",
    alt: "Red",
    credit: "https://unsplash.com/de/@davidclode",
  },
  {
    combination: ["Reykjavik", "Tamales", "Sparrow"],
    text: "Purple",
    image:
      "https://images.unsplash.com/photo-1558350283-8269d86681f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    alt: "Purple",
    credit: "https://unsplash.com/de/@virussinside",
  },
  {
    combination: ["Reykjavik", "Pho", "Goose"],
    text: "Red",
    image:
      "https://images.unsplash.com/photo-1511763403446-19a1e1bfee58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80",
    alt: "Red",
    credit: "https://unsplash.com/de/@davidclode",
  },
  {
    combination: ["Ciudad de México", "Pho", "Macaw"],
    text: "Purple",
    image:
      "https://images.unsplash.com/photo-1558350283-8269d86681f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    alt: "Purple",
    credit: "https://unsplash.com/de/@virussinside",
  },
  {
    combination: ["Ciudad de México", "Sandwich", "Sparrow"],
    text: "Blue",
    image:
      "https://images.unsplash.com/photo-1653308192471-7fbe586ea1d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    alt: "Blue",
    credit: "https://unsplash.com/de/@possessedphotography",
  },
  {
    combination: ["Ciudad de México", "Tamales", "Macaw"],
    text: "Purple",
    image:
      "https://images.unsplash.com/photo-1558350283-8269d86681f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    alt: "Purple",
    credit: "https://unsplash.com/de/@virussinside",
  },
  {
    combination: ["Ciudad de México", "Brezel", "Ostrich"],
    text: "Red",
    image:
      "https://images.unsplash.com/photo-1511763403446-19a1e1bfee58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80",
    alt: "Red",
    credit: "https://unsplash.com/de/@davidclode",
  },
];
// need to have a default answer to compensate for lack of combination data

const unansweredQuestions = [];
const chosenAnswers = [];

const populateQuestions = () => {
  questions.forEach((question) => {
    const titleBlock = document.createElement("div");
    titleBlock.id = question.id;
    titleBlock.classList.add("title-block");

    const titleHeading = document.createElement("h2");
    titleHeading.textContent = question.text;

    titleBlock.append(titleHeading);
    questionDisplay.append(titleBlock);

    const answersBlock = document.createElement("div");
    answersBlock.id = question.id + "-questions";
    answersBlock.classList.add("answer-options");

    unansweredQuestions.push(question.id);

    question.answers.forEach((answer) => {
      const answerBlock = document.createElement("button");
      answerBlock.classList.add("answer-block");
      answerBlock.addEventListener(
        "click",
        () => {
          handleClick(question.id, answer.text);
        }
        // { once: true }
      );
      const answerImage = document.createElement("img");
      answerImage.setAttribute("src", answer.image);
      answerImage.setAttribute("alt", answer.alt);

      const answerTitle = document.createElement("h3");
      answerTitle.textContent = answer.text;

      const answerInfo = document.createElement("p");
      const imageLink = document.createElement("a");
      imageLink.setAttribute("href", answer.image);
      imageLink.textContent = answer.credit;
      imageLink.setAttribute("target", "_blank");

      const sourceLink = document.createElement("a");
      sourceLink.textContent = "Unsplash";
      sourceLink.setAttribute("href", "https://unsplash.com/");
      sourceLink.setAttribute("target", "_blank");

      answerInfo.append(imageLink, " to ", sourceLink);

      answerBlock.append(answerImage, answerTitle, answerInfo);

      answersBlock.append(answerBlock);
    });

    questionDisplay.append(answersBlock);
  });
};

populateQuestions();

const handleClick = (questionId, chosenAnswer) => {
  const currentQuestionBlock = document.getElementById(
    questionId + "-questions"
  );
  // console.log(questionId, chosenAnswer);
  if (unansweredQuestions.includes(questionId)) {
    chosenAnswers.push(chosenAnswer);
    const itemToRemove = unansweredQuestions.indexOf(questionId);
    if (itemToRemove > -1) {
      unansweredQuestions.splice(itemToRemove, 1);
    }
  }
  disableQuestionBlocks(questionId, chosenAnswer, currentQuestionBlock);

  const lowestQuestionId = Math.min(...unansweredQuestions);
  location.href = "#" + lowestQuestionId;
  if (!unansweredQuestions.length) {
    // scroll to answer div
    location.href = "#answer";
    document.querySelector("#answer").scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "end",
    });
    showAnswer();
  }
};

const showAnswer = () => {
  let result;
  answers.forEach((answer) => {
    if (
      chosenAnswers.includes(answer.combination[0]) +
      chosenAnswers.includes(answer.combination[1]) +
      chosenAnswers.includes(answer.combination[2])
    ) {
      result = answer;
      return;
    } else if (!result) {
      // first answer object as default;
      result = answers[0];
      // return;
    }
  });

  const answerBlock = document.createElement("div");
  answerBlock.classList.add("result-block");
  const answerTitle = document.createElement("h3");
  answerTitle.textContent = result.text;

  const answerImage = document.createElement("img");
  answerImage.setAttribute("src", result.image);
  answerImage.setAttribute("alt", result.alt);

  answerBlock.append(answerTitle, answerImage);

  answerDisplay.appendChild(answerBlock);

  const allAnswerBlocks = document.querySelectorAll(".answer-block");
  Array.from(allAnswerBlocks).forEach((answerBlock) =>
    answerBlock.cloneNode(true)
  );
};

const disableQuestionBlocks = (
  questionId,
  chosenAnswer,
  currentQuestionBlock
) => {
  Array.from(currentQuestionBlock.children).forEach((block) => {
    if (block.children.item(1).innerText != chosenAnswer) {
      block.style.opacity = "50%";
      console.log(block);
    } else {
      block.style.opacity = "100%";
      block.style.color = "black";
      block.style.backgroundColor = "rgba(10, 186, 186, 0.20)";
    }
    block.disabled = true;
  });
};
