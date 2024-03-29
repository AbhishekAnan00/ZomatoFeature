const Fooddata = [
  {
      id: 1,
      rname: "Burger King",
      imgdata: "https://b.zmtcdn.com/data/pictures/chains/0/20522030/a6c8129329bf976270361b45058f110b_o2_featured_v2.jpg?output-format=webp",
      address: "Burger, Lodipur, Patna",
      somedata: " 1175 + order placed from here recently",
      price: "₹350 for one",
      rating: "3.8",
      arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
      time:"23min"
  },
  {
      id: 2,
      rname: "Heaven Meal",
      imgdata: "https://b.zmtcdn.com/data/pictures/4/20679104/32e176485ebfce0e274ba7aecc960797_o2_featured_v2.jpg?output-format=webp",
      address: "North Indian,kanberbagh ,patna",
      somedata: " 2525 + order placed from here recently",
      price: "₹25 for one",
      rating: "3.9",
      arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
      time:"20min"
  },
  {
      id: 3,
      rname: "La Milano Pizzeria",
      imgdata: "https://b.zmtcdn.com/data/pictures/chains/7/18705437/ec37a79363ae4ea88c3be9ccd7989873_o2_featured_v2.jpg",
      address: "ice-cream,Kidwaipuri, Patna",
      delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
      somedata: " 650 + order placed from here recently",
      price: "₹70 for one",
      rating: "4.2",
      arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
      time:"32min"
  },
  {
      id: 4,
      rname: "Momoman",
      imgdata: "https://b.zmtcdn.com/data/pictures/2/20067832/2d75ab895d0fc5a0842033c91ade3381_o2_featured_v2.jpg?output-format=webp",
      address: "Street Food,Mithapur, Patna",
      delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
      somedata: " 300 + order placed from here recently",
      price: "₹70 for one",
      rating: "3.8",
      arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
      time:"43min"
  },
  {
      id: 5,
      rname: "Jassi De Parathe",
      imgdata: "https://b.zmtcdn.com/data/pictures/chains/5/110225/3978e28854b7496dbef9496546734811_o2_featured_v2.jpg",
      address: "North Indian",
      delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
      somedata: "1050 + order placed from here recently",
      price: "₹210 for one",
      rating: "4.0",
      arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
      time:"40min"
  },
  {
      id: 6,
      rname: "Anjoy Latenight Meals",
      imgdata: "https://b.zmtcdn.com/data/pictures/5/113895/3c06f6fbb8f667a2537dfdb6f060dc8b_o2_featured_v2.jpg",
      address: "Wraps FastFood, Chines,patna",
      delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
      somedata: " 1100 + order placed from here recently",
      price: "₹100 for one",
      rating: "3.8",
      arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
      time:"30min"
  },
  {
      id: 7,
      rname: "Hocco Eatery",
      imgdata: "https://b.zmtcdn.com/data/pictures/chains/5/110155/811c01a5430d50d3260f77917da99e12_o2_featured_v2.jpg",
      address: "North Indian, Fast Food",
      delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
      somedata: "500 + order placed from here recently",
      price: "₹300 for one",
      rating: "3.8",
      arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
      time:"33min"
  },
  {
      id: 8,
      rname: "Chai Wai",
      imgdata: "https://b.zmtcdn.com/data/pictures/3/18514413/0a17b72e9fec52a3ca736f4c2ea3646f_o2_featured_v2.jpg",
      address: "Tea, Coffee, Shake, Beverages",
      delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
      somedata: "500 + order placed from here recently",
      price: "₹100 for one",
      rating: "3.2",
      arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
      time:"28min"
  },
  {
      id: 9,
      rname: "HL Frankie",
      imgdata: "https://b.zmtcdn.com/data/pictures/7/19639627/94c0a4cf15c02d3982d154e2c5dd8cbb_o2_featured_v2.jpg",
      address: "Burger, Sandwich, Fast Food",
      delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
      somedata: "2525 + order placed from here recently",
      price: "₹100 for one",
      rating: "3.8",
      arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
      time:"37min"
  },
];

export default Fooddata;