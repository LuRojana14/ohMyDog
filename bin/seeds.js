const mongoose = require("mongoose");
const User = require("../models/UserModel");
const Dog = require("../models/DogModel");

const users = [
  {
    username: "agust",
    mail: "agust@gmail.com",
    password: "123456",
    telephone: "606663220",
    cp: "08002",
    dog: {
    namedog: "JUAN DE GARAY",
    image: "https://www.micachorro.net/wp-content/uploads/2018/01/san-bernardo-1.jpg",
    breed: "San Bernardo",
    sex: "female",
    description: "I'm very tall",
    age: 5,
    weight: "59",
  },
  review: [],
  },
  {
    username: "Lourdes",
    mail: "lurr@gmail.com",
    password: "123456",
    telephone: "603624612",
    cp: "08013",
    dog: {
      namedog: "DARDA",
      image: "https://okdiario.com/img/2020/01/19/lo-que-debes-saber-sobre-el-braco-aleman.jpg",
      breed: "Braco Aleman",
      sex: "female",
      description:"Soy una perra malcriada, me gusta estar todo el dia con mi mamá aunque la  extraño mucho porque se fue a España y nunca mas volvio",
      age: 7,
      weight: "22",
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
      namedog: "NAPOLEON",
      image: "https://www.lavanguardia.com/r/GODO/LV/p5/WebSite/2018/08/31/Recortada/img_asanchezm_20180831-072403_imagenes_lv_terceros_istock-181888232-kBmF-U451545355319yiB-992x558@LaVanguardia-Web.jpg",
      breed: "Basset",
      sex: "male",
      description: "I am the strongest dog of all, I want to be your boyfriend",
      age: 5,
      weight: "59",
    },
    review: [],
  },
  {
    username: "Vicky",
    mail: "vic@gmail.com",
    password: "123456",
    telephone: "605323220",
    cp: "08024",
    dog: {
      namedog: "FURI",
      image: "https://demascotas.info/wp-content/uploads/2018/01/chihuahua-981188_1920.jpg",
      breed: "Chihuahua",
      sex: "male",
      description:"Small, but the best boyfriend you can find, do we know each other?",
      age: 7,
      weight: "3",
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
      namedog: "FAINÁ",
      image:"https://www.barkyn.com/blog/img/uploads/2018/12/meio-dalmata-1.jpg",
      breed: "Dalmata",
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
      namedog: "LILI",
      image: "https://envato-shoebox-0.imgix.net/5c94/b7f2-764b-4d13-8e9b-cf671bc65641/DSC_6003+faa.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=48c11236e8098e9d165e7c03b7922ad8",
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
      image: "https://lh3.googleusercontent.com/proxy/BbSifzPyCCPfiC5t8vx4XCC9JphvlrQuJQPscNcG58kxjMp_eJSxWMYhFAQb8dhE_l7Opl_Mjn-OOIZDJF5N65bbkvOtpAUdiHMJVyTmZ5oo_IcqNsDv_03LSYUE9hKIzFBT2Rr7RXff9cCa4RXjtZcPZFwPBjaCQ0KjAhZwDqDsTQCsMh8IqEwrZV7w1A",
      breed: "Bull terrier",
      sex: "male",
      description:"A little adult but I never get tired, we are going to have a lot of fun together",
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
      namedog: "HUGO",
      image: "https://lh3.googleusercontent.com/proxy/N_uzuKLaO1NRUvyaMGIWMJPUfIFVcwcYng8e7mR9r627bqrfS_9QJIs_hPFUGqhlxmcmJTVOFvFWxXvklCFSAPaPBtShD_2HeFjH382DTQVtUTasCJPK9kcmAboXHLs9EwZEfQ",
      breed: "Braco Aleman",
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
      namedog: "PAQUITA",
      image: "https://t1.ea.ltmcdn.com/es/images/8/9/2/img_nombres_para_perros_graciosos_23298_paso_0_600.jpg",
      breed: "Bulldog frances",
      sex: "female",
      description: "I am a lazy dog, I like to sleep a lot",
      age: 4,
      weight: "35",
    },
    review: [],
  },
  {
    username: "Walter",
    mail: "vic@gmail.com",
    password: "123456",
    telephone: "605323220",
    cp: "08024",
    dog: {
      namedog: "CORCHO",
      image: "https://demascotas.info/wp-content/uploads/2018/09/pet_animal_puppy_beagle_mammals_dog_cute_look-1205494.jpg",
      breed: "Beagle",
      sex: "male",
      description: "Small, but the best boyfriend you can find, do we know each other?",
      age: 7,
      weight: "3",
    },
    review: [],
  },
  {
    username: "Juana",
    mail: "juani@gmail.com",
    password: "123456",
    telephone: "603524320",
    cp: "08021",
    dog: {
      namedog: "PANCHO",
      image: "https://www.hogarmania.com/archivos/201705/mascotas-perros-razas-caniche-1280x720x80xX.jpg",
      breed: "Caniche",
      sex: "male",
      description: "I like to eat, sleep, and watch series with my parents",
      age: 7,
      weight: "45",
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
      namedog: "TOPITA",
      image: "https://i.pinimg.com/originals/c5/a4/62/c5a4621ede872d39f64353ece02c60e8.jpg",
      breed: "Ovejero alemán",
      sex: "male",
      description:"There are many similar to me, but I am unique, you will not regret",
      age: 6,
      weight: "40",
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
      namedog: "ARLEQUIN",
      image: "https://www.losanimales.org/wp-content/uploads/2018/03/Doberman.jpg",
      breed: "Doberman",
      sex: "female",
      description:"Don't participate in the Disney movie, but we can create together our movie together",
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
      namedog: "YANKA",
      image: "https://www.micachorro.net/wp-content/uploads/2019/03/Basset-Hound1.jpg",
      breed: "Sabueso",
      sex: "female",
      description:"I'm not very good at descriptions, shall we walk and then see what happens?",
      age: 7,
      weight: "30",
    },
    review: [],
  },
  {
    username: "Marcos",
    mail: "marcos@gmail.com",
    password: "123456",
    telephone: "603624611",
    cp: "08005",
    dog: {
      namedog: "CHORIPAN",
      image: "https://t2.ea.ltmcdn.com/es/images/1/4/0/nombres_para_perros_salchichas_machos_24041_1_600.jpg",
      breed: "Affenpinscher",
      sex: "female",
      description: "I am the best friend you were looking for",
      age: 5,
      weight: "3",
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
      namedog: "GRECA",
      image: "https://www.elmundodelperro.net/fotos/91/3249_18m_01.jpg",
      breed: "Scottish terrier",
      sex: "male",
      description:"I am very active, I go for a walk every day, on weekends I do not rest",
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
 