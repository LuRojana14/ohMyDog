const mongoose = require("mongoose");
const User = require("../models/UserModel");
const Dog = require("../models/DogModel");

const users = [
  {
    username: "aricel",
    mail: "aricel@gmail.com",
    password: "123456",
    telephone: "603624611",
    cp: "08005",
    dog: {
      namedog: "Lucky",
      image: "https://www.guiaparaperros.com/wp-content/uploads/2019/03/Teckel-o-Dachshund-portada.jpg",
      breed: "Dachshund",
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
      image: "https://www.planetacan.com/assets/img/razas/2013/07/24/1731/fila-de-san-miguel-b5.jpg",
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
      image: "https://www.feelcats.com/blog/wp-content/uploads/2019/08/pequines.jpg",
      breed: "Pekines",
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
      image: "https://i.pinimg.com/736x/3a/7a/86/3a7a86f61e8ab9324f92fde20e7692c2.jpg",
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
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Sophie_the_Welsh_Terrier_2.jpg/450px-Sophie_the_Welsh_Terrier_2.jpg",
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
      image: "https://www.hola.com/imagenes/estar-bien/20200124158928/razas-de-perro-beagle/0-773-994/razas-de-perro-beagle-m.jpg",
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
      image: "https://t2.ea.ltmcdn.com/es/razas/6/3/0/img_36_bull-terrier-ingles_0_600.jpg",
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
      image: "https://toppercan.es/wp-content/uploads/Weimaraner__1514405056.jpg",
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
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.petdarling.com%2Farticulos%2Fbulldog-frances-blue%2F&psig=AOvVaw0PK3ifKvYY7kV--fnJPP51&ust=1596576372144000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDmqdD8_-oCFQAAAAAdAAAAABAD",
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
      image: "https://www.hola.com/imagenes/estar-bien/20200320162955/chihuahua-razas-perro-caracteristicas-cuidado-gt/0-797-393/corto-z.jpg",
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
      image: "https://www.canecorsobarcelona.com/wp-content/uploads/2020/03/Comprar-cachorros-cane-corso-en-Valencia.-Nos-dedicamos-a-la-venta-de-perros-Cane-Corso-en-el-comunidad-Valenciana3.jpg",
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
      image: "https://cdn.akc.org/content/article-body-image/cesky_terrier_body_image_2.jpg",
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
      image: "https://imagenwhatsapp.com/wp-content/uploads/2017/08/977be00fce96349ce98c33900a004f85-funny-dogs-funny-animals.jpg",
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
      image: "https://d1wn0q81ehzw6k.cloudfront.net/additional/thul/media/71a48b88641d8ad3?w=890&h=590&crop=1",
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
      image: "https://lh3.googleusercontent.com/proxy/PL7OiEKuH6ESE7QaBKIHKPQWocDX3Wia0-4XgD-e3oZ7pSTk6wSGDPlcr-rJfQG_m0VGH0K1XYAoounL7orh4VOzIbPGN-FYJObK-wXk",
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
      image: "https://www.dogster.com/wp-content/uploads/2019/11/GettyImages-1182498853-768x512.jpg",
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

const dbtitle = "ohmydog";
mongoose
  .connect(`mongodb://localhost:27017/${dbtitle}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    // const pr1 = User.collection.drop();
    // const pr2 = Dog.collection.drop();

    // return Promise.all([pr1, pr2]);

    return mongoose.connection.db.dropDatabase();
  })

  .then(() => {
    // es un array de promesas de crear perros (.save)

    const createDog = users.map((user) => {
      const newDog = new Dog(user.dog);
      return newDog.save(); //map nos devuelve un array nuevo de promesas  con los perros creados
    });

    let updateUsersPrArr = Promise.all(createDog) //esperando q todas las promesas terminen hasta q se creen todos los perros
      .then((dogs) => {
        return users.map((user) => {
          return Dog.findOne({
            namedog: user.dog.namedog,
            breed: user.dog.breed,
            sex: user.dog.sex,
            description: user.dog.description,
            age: user.dog.age,
            weight: user.dog.weight,
          }).then((dog) => {
  //           if (!dog) {
  //             throw new Error(`unknown dog ${user.dog.namedog} 
  // ${user.dog.sex}`);
  //           }
            const updatedUser = Object.assign({}, user, { dog: dog._id });
            return updatedUser;
          });
        });
      }) // cuando se cumple toda esta promesa, me devuelve el id de un nuevo usr
      .catch((error) => {
        throw new Error(error);
      });

    //aca en este paso lo grabo en la base de datos
    const saveUsersPrArr = updateUsersPrArr // findDog is an array with updated User objects
      .then(userPromises => Promise.all(userPromises))
      .then((usersObj) => {
        return usersObj.map((user) => {
          console.log(user);
          //  este map devuelve las promesas de crear usuarios guardados en la base de datos
          const newUser = new User(user);
          return newUser.save();
        });
      });

    console.log("aqui", saveUsersPrArr);

    saveUsersPrArr
      .then(createdUserPromises => Promise.all(createdUserPromises))
      .then((users) =>
        users.forEach((user) => console.log(`created ${user.username}`))
      )
      .then(() => mongoose.connection.close())
      .catch((err) => console.log("Error while saving the user: ", err));
    // });
  });
