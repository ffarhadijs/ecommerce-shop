import team1 from "../assets/team-1.jpg";
import team2 from "../assets/team-2.jpg";
import team3 from "../assets/team-3.jpg";
import team4 from "../assets/team-4.jpg";
import team5 from "../assets/team-5.jpg";
import team6 from "../assets/team-6.jpg";
import avatar from "../assets/team-4.jpg";
import avatar2 from "../assets/team-3.jpg";


export const rateData = [
  { string: "one", number: "1", id: 1 },
  { string: "two", number: "2", id: 2 },
  { string: "three", number: "3", id: 3 },
  { string: "four", number: "4", id: 4 },
  { string: "five", number: "5", id: 5 },
];

export const categoryData = [
  { value: "", name: "All", id: 1 },
  { value: "men's clothing", name: "Men's Clothing", id: 2 },
  { value: "jewelery", name: "Jewelery", id: 3 },
  { value: "electronics", name: "Electronics", id: 4 },
  { value: "women's clothing", name: "Women's clothing", id: 5 },
];

export const blogsCategory = [
  { name: "All Tags", id: 0 },
  { name: "Furniture", id: 1 },
  { name: "Fashion", id: 2 },
  { name: "Wood", id: 3 },
  { name: "Personal", id: 4 },
  { name: "Curtains", id: 5 },
];

export const blogsYear = [
  { year: "All", id: 10 },
  { year: "2022", id: 1 },
  { year: "2021", id: 2 },
  { year: "2020", id: 3 },
  { year: "2019", id: 4 },
];

export const menuList = [
  { name: "HOME", id: "1", to: "/" },
  { name: "SHOP", id: "2", to: "/shop" },
  { name: "BLOG", id: "3", to: "/blog" },
  { name: "ABOUT", id: "4", to: "/about" },
  { name: "CONTACT", id: "5", to: "/contact" },
];

export const quotes = [
  {
    name: "John Smith",
    comment:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maioresnon, iure exercitationem corporis ea error laudantium minimaaccusamus eius repellendus, labore earum? Fugit, adipisci possimusreiciendis soluta excepturi ut exercitationem sapiente maximealiquid distinctio corrupti, doloremque rem vero nobis non?",
    position: "Co-Funder",
    id: "1",
  },
  {
    name: "Jack Smith",
    comment:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maioresnon, iure exercitationem corporis ea error laudantium minimaaccusamus eius repellendus, labore earum? Fugit, adipisci possimusreiciendis soluta excepturi ut exercitationem sapiente maximealiquid distinctio corrupti, doloremque rem vero nobis non?",
    position: "Accountant",
    id: "2",
  },
  {
    name: "Richard Smith",
    comment:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maioresnon, iure exercitationem corporis ea error laudantium minimaaccusamus eius repellendus, labore earum? Fugit, adipisci possimusreiciendis soluta excepturi ut exercitationem sapiente maximealiquid distinctio corrupti, doloremque rem vero nobis non?",
    position: "Engineer",
    id: "3",
  },
];

export const teamData = [
  { name: "Mark Adnan", position: "CEO & FOUNDER", img: team1, id:0},
  { name: "Jennifer Rod", position: "DESIGNER", img: team2, id:1},
  { name: "Natasha Singh", position: "DEVELOPER", img: team3, id:2},
  { name: "Jahn Mark", position: "Product Designer", img: team4, id:3},
  { name: "Jennifer Rod", position: "Quality Head", img: team5, id:4},
  { name: "Natasha Singh", position: "DEVELOPER", img: team6, id:5},
];

export const footerLinkItems=[
  {item:"Home", id:0},
  {item:"Shop", id:1},
  {item:"Blog", id:2},
  {item:"About",id:3},
  {item:"Contact",id:4},
]

export const footerAccountItems=[
  {item:"Products", id:0},
  {item:"Find a Store", id:1},
  {item:"Features", id:2},
  {item:"Privacy Policy",id:3},
  {item:"Press Kit",id:4},
]

export const comments = [
  {
    name: "William Saron",
    date: "April 27, 2022 - 10:00 am",
    email: "William@gmail.com",
    img: avatar,
    id:0
  },
  {
    name: "Sara Smith",
    date: "April 14, 2022 - 22:00 pm",
    email: "Sara@gmail.com",
    img: avatar2,
    id:1
  },
];
