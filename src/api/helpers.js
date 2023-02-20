const testUser = {
  id: 104,
  username: "test",
  password: "test",
  email: "test@test.com",
};

const testPlantData = [{
  id: 4,
  userId: 104,
  name: "Avocado Tree",
  description: "From an avocado fruit seed",
  age: new Date().toISOString(),
  image: {src:"https://gyazo.com/00f7fc583b02304c58eb797c344eda2f.jpg", description: "this is my seed"}
}, 
{
  id: 2,
  userId: 104,
  name: "Strawberry Plant",
  description: "From seeds",
  age: new Date('01/21/2023').toISOString(),
  image: {src:"https://gyazo.com/6d8bb075368b9db9fd5e2f925e3c60cb.jpg", description: "Strawberry fruits"}
}, 
]

const testPostsData = [
  {
    plantId: 4,
    postId: 1,
    title: "New Seedling",
    content:
      "This is my new avocado seedling, I started this seedling with the toothpick in seed method where the seed floats on water to germinate",
    images: [{src:"https://gyazo.com/00f7fc583b02304c58eb797c344eda2f.jpg", description: "this is my seed"}],
  },
  {
    plantId: 4,
    postId: 2,
    title: "It's been a while",
    content:
      "I haven't updated this plant but it's been over a year so I'll share my progress pics",
    images: [
      {
        src: "https://gyazo.com/4851bfa778091b7216f406d1e429d6fb.jpg",
        description: "This is my three month avocado seedling",
      },
      {
        src: "https://gyazo.com/0be8ff64ba990404d79bcef88b1d8b44.jpg",
        description: "This is my one year avocado tree",
      },
    ],
  },
  { plantId: 2,
  postId: 1,
  title: "Baby Strawberry",
  content:
    "These are my new strawberry seeds that are starting to make their first sprouts",
  images: [{src:"https://gyazo.com/a4e21186454b2e89f425f3cd8337bd8c.jpg", description: "Strawberry sprouts"}],
},
{ plantId: 2,
  postId: 2,
  title: "Harvest Time",
  content:
    "My strawberry plants are fruiting! It was about 6 weeks between seed and fruit!",
  images: [{src:"https://gyazo.com/6d8bb075368b9db9fd5e2f925e3c60cb.jpg", description: "Strawberry fruits"}],
},
];


export { testUser, testPlantData, testPostsData };
