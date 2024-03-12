import State from "../models/states";
import Destination from "../models/destinations";

export const STATES = [
  new State("s1", "Croatia", "#f44336"), // Red
  new State("s2", "Haiti", "#2196f3"), // Blue
  new State("s3", "Mexico", "#4caf50"), // Green
  new State("s4", "Canada", "#ff9800"), // Orange
  new State("s5", "Spain", "#9c27b0"), // Purple
  new State("s6", "Portugal", "#ffeb3b"), // Yellow
  new State("s7", "Netherlands", "#03a9f4"), // Light Blue
  new State("s8", "Egypt", "#8bc34a"), // Light Green
  new State("s9", "Australia", "#ff5722"), // Deep Orange
  new State("s10", "China", "#673ab7"), // Deep Purple
];

export const DESTINATIONS = [
  new Destination(
    "c1",
    "s1",
    "Plitvice Lakes National Park",
    "The park is comprised of 16 interconnected lakes, the 2.35km-long (1.5 miles) Kozjak being the largest, plus dozens of smaller ones – some just reed-fringed ponds. Travertine expanses covered with mossy plants divide the bodies of water, whose startling colors are a product of the underlying bedrock. Wooden boardwalks allow you to easily traverse this extraordinary watery world.",
    1949,
    4.5,
    "https://lp-cms-production.imgix.net/2021-04/shutterstockRF_613898594.jpg?auto=format&q=75&w=1024",
    349
  ),
  new Destination(
    "c2",
    "s2",
    "Milot",
    "Milot is a commune in the Nord department of Haiti, 12 miles south of Cap-Haïtien. It is the site of Sans-Souci Palace, one of Haiti's most revered landmarks. The Citadelle Laferrière, Haiti's best-known landmark, is five miles by road to the south.",
    1786,
    2.9,
    "https://www.worldatlas.com/r/w728-h425-c728x425/upload/f7/92/a2/sans-souci-palace-national-history-park-haiti.jpg",
    174
  ),
  new Destination(
    "c3",
    "s3",
    "Mexico City",
    "This sprawling, complex, always changing megalopolis is a study in contrasts. From its epic street food to its chef-driven, pilgrimage-worthy restaurants, Mexico City is arguably the most exciting food city in the world. Its art scene—folk and cutting-edge contemporary—is equally dynamic.",
    1325,
    4.2,
    "https://media.cntraveler.com/photos/640b605c63c7e54952eb4d22/4:3/w_1600%2Ch_1200%2Cc_limit/Mexico%2520City_GettyImages-638920569.jpg",
    892
  ),
  new Destination(
    "c4",
    "s4",
    "Banff National Park",
    "Banff National Park is famous for its vibrant lakes, majestic mountains and easy access to outdoor adventures of all kinds. The park spans 6,641 square kilometres (2,564 square miles) of striking mountainous terrain in the vast wilderness of the Canadian Rockies.",
    1885,
    4.7,
    "https://cdn.britannica.com/71/94371-050-293AE931/Mountains-region-Ten-Peaks-Moraine-Lake-Alberta.jpg",
    215
  ),
  new Destination(
    "c5",
    "s5",
    "Hidden Oaks Campground",
    25,
    1988,
    3.8,
    "https://lh3.googleusercontent.com/p/AF1QipMKwVkZ66ndyrSL8HNshOPfuFIh6PC8-2OhUJaa=s1360-w1360-h1020"
  ),
  new Destination(
    "c6",
    "s6",
    "Little Black Creek Campground",
    35,
    1995,
    4.1,
    "https://lh3.googleusercontent.com/p/AF1QipMLVH4hUp3VXYReamqUsz1Ljonh76eIal4I4yZZ=s1360-w1360-h1020"
  ),
  new Destination(
    "c7",
    "s7",
    "Camp Hatteras RV Resort & Campground",
    45,
    1975,
    4.3,
    "https://lh3.googleusercontent.com/p/AF1QipPl_SZNGGy5UrPSTdFEklkVUMi8YF5d3WtBKgsu=s1360-w1360-h1020"
  ),
  new Destination(
    "c8",
    "s8",
    "Table Rock State Park",
    55,
    2003,
    4.6,
    "https://lh3.googleusercontent.com/p/AF1QipNiyUDf100wuxMTsu3OEvAbJ188WBsoVp3FBrs=s1360-w1360-h1020"
  ),
  new Destination(
    "c9",
    "s9",
    "Fall Creek Falls State Park",
    20,
    1982,
    3.9,
    "https://lh3.googleusercontent.com/p/AF1QipOCc6Y1AUqBnXfuL3LVNNso5wCKCjsSQatGwKeq=s1360-w1360-h1020"
  ),
  new Destination(
    "c10",
    "s10",
    "Hungry Mother State Park",
    65,
    1998,
    4.8,
    "https://lh3.googleusercontent.com/p/AF1QipOOqLSYYgNwxkCHrEgC6AD76Oppmkup2dUtYC_L=s1360-w1360-h1020"
  ),
  new Destination(
    "c11",
    "s1",
    "Lake Guntersville State Park Campground",
    40,
    1979,
    4.2,
    "https://lh3.googleusercontent.com/p/AF1QipPaKHoIPvRZtgQFXX-v0JS3elhZOQAEcR4EtB3L=s1360-w1360-h1020"
  ),
  new Destination(
    "c12",
    "s2",
    "Cap-Haïtien",
    "Cap-Haïtien, also known as “Le Cap,” is a captivating city on Haiti’s northern coast. With its historic significance, stunning bay, and world-class beaches, it’s an ideal vacation destination for travelers seeking both culture and natural beauty.",
    1799,
    3.9,
    "https://th.bing.com/th/id/R.31131820bb44bb2709290debd70873af?rik=CsxdjMbwgwY7jQ&pid=ImgRaw&r=0",
    172
  ),
  new Destination(
    "c13",
    "s3",
    "Cancún",
    "Cancun is a paradise for nature lovers and adventure seekers since there are plenty of things to do. Dive or snorkel in the region's mystic cenotes located nearby (limestone sinkholes), or enjoy the day by the beach, jet skiing or parasailing.",
    1970,
    4.9,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD5UToJeAQMex6OGnX_sT3rHwriWsG-CREXsd8hz-a2A&s",
    2929
  ),
  new Destination(
    "c14",
    "s4",
    "Red River Gorge Campground",
    30,
    1981,
    4.0,
    "https://lh3.googleusercontent.com/p/AF1QipN5RttKwNWNLak8YyI-YK3iJkljMbr6dFAQF3Bk=s1360-w1360-h1020"
  ),
  new Destination(
    "c15",
    "s5",
    "Indian Creek Campground",
    45,
    1996,
    4.5,
    "https://lh3.googleusercontent.com/p/AF1QipNy_bOjBzIttqJX-T_sTC6_ezMe4hmE1K1myOwG=s1360-w1360-h1020"
  ),
  new Destination(
    "c16",
    "s6",
    "Piney Grove Campground",
    55,
    2005,
    4.7,
    "https://lh3.googleusercontent.com/p/AF1QipOk70Jg5ROVIeFFkWUcLEI1aWtuQWlz3-sna6dQ=s1360-w1360-h1020"
  ),
  new Destination(
    "c17",
    "s7",
    "Frisco Woods Campgrounds Inc",
    25,
    1989,
    3.8,
    "https://lh3.googleusercontent.com/p/AF1QipPBKwR-aaXqBBJV7jZhu68yyAgi2a2K-teX3K4K=s1360-w1360-h1020"
  ),
  new Destination(
    "c18",
    "s8",
    "Huntington Beach State Park",
    60,
    1999,
    4.9,
    "https://lh3.googleusercontent.com/p/AF1QipNPOTpDCJCUExeJKRS3AJIivH9awUxSQOExnuja=s1360-w1360-h1020"
  ),
  new Destination(
    "c19",
    "s9",
    "David Crockett State Park",
    30,
    1977,
    3.5,
    "https://lh3.googleusercontent.com/p/AF1QipN1UpPQNu6nZ7wgTW9WSfWmoGyKSLffNCJ8PhDg=s1360-w1360-h1020"
  ),
  new Destination(
    "c20",
    "s10",
    "Fairy Stone State Park",
    40,
    1990,
    4.4,
    "https://lh3.googleusercontent.com/p/AF1QipMMC9ncqLd5gz6rK6uLVv-AM52frv20rwOi-5eM=s1360-w1360-h1020"
  ),
];
