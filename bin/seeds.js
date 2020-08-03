const mongoose = require("mongoose");
const User = require("../models/UserModel");
const Dog = require("../models/DogModel");

const dbtitle = "ohmydog";
mongoose.connect(`mongodb://localhost:27017/${dbtitle}`, {
  useCreateIndex:true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});
User.collection.drop();
Dog.collection.drop();

const users = [
  {
    username: "aricel",
    mail: "aricel@gmail.com",
    password: "123456",
    telephone: "603624611",
    cp: "08005",
    dog: {
      namedog: "Lucky",
      image: undefined,
      breed: "Affenpinscher",
      sex: "female",
      description: "I am the best friend you were looking for",
      age: 5,
      weight: "3",
    },
    review: [],
  },
  {
    username: "caropan",
    mail: "caropan@gmail.com",
    password: "123456",
    telephone: "603624612",
    cp: "08013",
    dog: {
      namedog: "Freda",
      image: undefined,
      breed: "Cao de Fila de Sao Miguel",
      sex: "female",
      description: "I am a lazy dog, I like to sleep a lot",
      age: 4,
      weight: "35",
    },
    review: [],
  },
  {
    username: "diepr",
    mail: "diepr@gmail.com",
    password: "123456",
    telephone: "603624620",
    cp: "08010",
    dog: {
      namedog: "Furi",
      image: undefined,
      breed: "Affenpinscher",
      sex: "male",
      description: "I am the strongest dog of all, I want to be your boyfriend",
      age: 5,
      weight: "59",
    },
    review: [],
  },
  {
    username: "marfer",
    mail: "marfer@gmail.com",
    password: "123456",
    telephone: "603624640",
    cp: "08019",
    dog: {
      namedog: "Topo",
      image: undefined,
      breed: "Ovejero alemán",
      sex: "male",
      description:
        "There are many similar to me, but I am unique, you will not regret",
      age: 6,
      weight: "40",
    },
    review: [],
  },
  {
    username: "rafchi",
    mail: "rafchi@gmail.com",
    password: "123456",
    telephone: "603624699",
    cp: "08039",
    dog: {
      namedog: "Mac",
      image: undefined,
      breed: "Terrier galés",
      sex: "male",
      description: "I am small but very effective",
      age: 4,
      weight: "9",
    },
    review: [],
  },
  {
    username: "louri",
    mail: "louri@gmail.com",
    password: "123456",
    telephone: "603624833",
    cp: "08031",
    dog: {
      namedog: "Lili",
      image: undefined,
      breed: "Beagle",
      sex: "female",
      description: "The best mom you can find for your children",
      age: 8,
      weight: "33",
    },
    review: [],
  },
  {
    username: "fabri",
    mail: "fabri@gmail.com",
    password: "123456",
    telephone: "602344620",
    cp: "08028",
    dog: {
      namedog: "Ringo",
      image: undefined,
      breed: "Bull terrier",
      sex: "male",
      description:
        "A little adult but I never get tired, we are going to have a lot of fun together",
      age: 7,
      weight: "35",
    },
    review: [],
  },
  {
    username: "ezefer",
    mail: "ezefer@gmail.com",
    password: "123456",
    telephone: "603423120",
    cp: "08030",
    dog: {
      namedog: "Pako",
      image: undefined,
      breed: "Braco de Ariege",
      sex: "male",
      description: "Soy el mas romantico, si buscas amor, ya lo encontraste",
      age: 8,
      weight: "60",
    },
    review: [],
  },
  {
    username: "milicort",
    mail: "milicort@gmail.com",
    password: "123456",
    telephone: "603856620",
    cp: "08005",
    dog: {
      namedog: "Evita",
      image: undefined,
      breed: "Bulldog francés",
      sex: "female",
      description:
        "I am fun, I like to go for a walk and sleep on Sunday afternoons",
      age: 3,
      weight: "8",
    },
    review: [],
  },
  {
    username: "ferfe",
    mail: "ferfe@gmail.com",
    password: "123456",
    telephone: "605323220",
    cp: "08024",
    dog: {
      namedog: "Rifu",
      image: undefined,
      breed: "Chihuahua",
      sex: "female",
      description:
        "Small, but the best girlfriend you can find, do we know each other?",
      age: 7,
      weight: "3",
    },
    review: [],
  },
  {
    username: "cris",
    mail: "cris@gmail.com",
    password: "123456",
    telephone: "603524320",
    cp: "08021",
    dog: {
      namedog: "Pancho",
      image: undefined,
      breed: "Cane Corso",
      sex: "male",
      description: "I like to eat, sleep, and watch series with my parents",
      age: 7,
      weight: "45",
    },
    review: [],
  },
  {
    username: "rosa",
    mail: "rosa@gmail.com",
    password: "123456",
    telephone: "645345220",
    cp: "08024",
    dog: {
      namedog: "Freda",
      image: undefined,
      breed: "Cesky Terrier",
      sex: "female",
      description:
        "Looking for a boyfriend, I want a serious relationship, if we agree, talk to me",
      age: 7,
      weight: "6",
    },
    review: [],
  },
  {
    username: "juanc",
    mail: "juanc@gmail.com",
    password: "123456",
    telephone: "605555220",
    cp: "08019",
    dog: {
      namedog: "Carli",
      image: undefined,
      breed: "Dálmata",
      sex: "female",
      description:
        "Don't participate in the Disney movie, but we can create together our movie together",
      age: 5,
      weight: "6",
    },
    review: [],
  },
  {
    username: "gust",
    mail: "gust@gmail.com",
    password: "123456",
    telephone: "605323220",
    cp: "08006",
    dog: {
      namedog: "Yanka",
      image: undefined,
      breed: "Greyhound",
      sex: "female",
      description:
        "I'm not very good at descriptions, shall we walk and then see what happens?",
      age: 7,
      weight: "30",
    },
    review: [],
  },
  {
    username: "agust",
    mail: "agust@gmail.com",
    password: "123456",
    telephone: "606663220",
    cp: "08002",
    dog: {
      namedog: "Panka",
      image: undefined,
      breed: "Landseer",
      sex: "female",
      description: "I'm very tall",
      age: 5,
      weight: "59",
    },
    review: [],
  },
  {
    username: "sofi",
    mail: "sofi@gmail.com",
    password: "123456",
    telephone: "604443220",
    cp: "08024",
    dog: {
      namedog: "Greca",
      image: undefined,
      breed: "Scottish terrier",
      sex: "male",
      description:
        "I am very active, I go for a walk every day, on weekends I do not rest",
      age: 4,
      weight: "10",
    },
    review: [],
  },
];

/*et dogs = [];
data.forEach(users => {
  dogs = dogs.concat(user.dog);
});

Dog.create(dogs)
  .then(dogs => {
    console.log(`${dogs.length} dogs created.`);

    const dogsIds = dogs.map(dog => dog.id);

    let nth = 0;

    const users = data.map(user => {
      user.dog.forEach((dog, i) => {
        user.dog[i] = dogsIds[++nth];
      });
      return user;
    });
 
    User.create(users)
      .then(users => {
        console.log(`${users.length} users created.`);
 
        mongoose.connection.close();
      })
      .catch(err => console.error(err));
  })
  .catch(err => console.error(err));*/


const createDog = users.map((user) => {
  const newDog = new Dog(user.dog);
  return newDog
    .save()
    .then((dog) => {
      return dog.name;
    })
    .catch((error) => {
      throw new Error(`Impossible to add the dog. ${error}`);
    });
});

let findDog = Promise.all(createDog)
  .then((dog) => {
    return users.map((user) => {
      return Dog.findOne({
        namedog: user.dog.namedog,
        breed: user.dog.breed,
        sex: user.dog.sex,
        description: user.dog.description,
        age: user.dog.age,
        weight: user.dog.weight,
      }).then((dog) => {
        if (!dog) {
          throw new Error(`unknown dog ${user.dog.namedog} 
${user.dog.sex}`);
        }
        return Object.assign({}, user, { dog: dog._id });
      });
    });
  })
  .catch((error) => {
    throw new Error(error);
  });

const saveUsers = findDog
  .then((findDog) => {
    return Promise.all(findDog).then((users) => {
      return users.map((user) => {
        const newUser = new User(user);
        return newUser.save();
      });
    });
  })
  .then((savedUser) => {
    Promise.all(savedUser)
      .then((users) =>
        users.forEach((user) => console.log(`created ${user.username}`))
      )
      .then(() => mongoose.connection.close())
      .catch((err) => console.log("Error while saving the user: ", err));
  });
