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
    "Barcelona",
    "Overlooking the Mediterranean Sea, and famous for Gaudí and other Art Nouveau architecture, Barcelona is one of Europe's trendiest cities. It's a hub of new trends in the world of culture, fashion and cuisine. It combines the creativity of its artists and designers with respect and care for local traditions.",
    230,
    4.9,
    "https://toposmagazine.com/wp-content/uploads/2022/05/dimitry-anikin-ECkAbFv_Nnc-unsplash-aspect-ratio-16-9.jpg",
    988
  ),
  new Destination(
    "c6",
    "s6",
    "Cabo da Roca",
    "IDK",
    1772,
    4.1,
    "https://charlieontravel.com/wp-content/uploads/2020/11/Praia-da-Ursa-Portugal-beach-Charlie-on-Travel-e1606684971557.jpg",
    447
  ),
  new Destination(
    "c7",
    "s7",
    "Amsterdam",
    "With over 800 years of history to discover, Amsterdam is rich in fascinating attractions and sights. From old castles to beautiful museums and from charming secret courtyards to picturesque, cobbled streets, the capital city is a feast for the eyes.",
    1275,
    4.9,
    "https://content.r9cdn.net/rimg/dimg/92/c5/5687cba1-city-1334-16e17add360.jpg?width=1366&height=768&xhint=1139&yhint=1124&crop=true",
    782
  ),
  new Destination(
    "c8",
    "s8",
    "Pyramids of Giza",
    "The Giza pyramid complex in Egypt is home to the Great Pyramid, the Pyramid of Khafre, and the Pyramid of Menkaure, along with their associated pyramid complexes and the Great Sphinx.",
    "2560 bce",
    4.6,
    "https://smarthistory.org/wp-content/uploads/2020/11/Pyramids_of_the_Giza_Necropolis.jpg",
    655
  ),
  new Destination(
    "c9",
    "s9",
    "Sydney",
    "Sydney is the largest and most populous city in Australia and the state capital of New South Wales. Sydney is located on Australia's south-east coast of the Tasman Sea. Inhabitants of Sydney are called Sydneysiders, comprising a cosmopolitan and international population of people from numerous places around the world.",
    1788,
    4.65,
    "https://i.natgeofe.com/n/bd48279e-be5a-4f28-9551-5cb917c6766e/GettyImages-103455489cropped_2x1.jpg",
    "1,157"
  ),
  new Destination(
    "c10",
    "s10",
    "Chongqing",
    "Chongqing, a bustling city known for its dramatic mountainous landscape and vibrant nightlife, offers a unique blend of modern urbanity and rich cultural heritage. Visitors can explore its famed hot pot cuisine, ancient temples, and the stunning views of the Yangtze River winding through the city.",
    1189,
    4.8,
    "https://cdn.britannica.com/32/100332-050-464D0828/Mixture-buildings-China-Chongqing.jpg",
    "2,765"
  ),
  new Destination(
    "c11",
    "s1",
    "Zagreb City",
    "Zagreb, Croatia’s northwestern capital, is distinguished by its 18th- and 19th-century Austro-Hungarian architecture. At its center, Upper Town is the site of the Gothic, twin-spired Zagreb Cathedral and 13th-century St. Mark’s Church, with a colorfully tiled roof. Nearby is pedestrian-friendly Tkalčićeva Street, lined with outdoor cafes. Lower Town has the main square, Ban Jelačić, plus shops, museums and parks.",
    1094,
    4.2,
    "https://www.visit-croatia.co.uk/wp-content/uploads/2020/06/history_of_zagreb.jpg",
    "1,156"
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
    "2,929"
  ),
  new Destination(
    "c14",
    "s4",
    "Vancouver",
    "Vancouver, a bustling west coast seaport in British Columbia, is among Canada’s densest, most ethnically diverse cities. A popular filming location, it’s surrounded by mountains, and also has thriving art, theatre and music scenes. Vancouver Art Gallery is known for its works by regional artists, while the Museum of Anthropology houses preeminent First Nations collections",
    1886,
    4.1,
    "https://content.r9cdn.net/rimg/dimg/75/66/ee80acca-city-6668-16682a32985.jpg?width=1366&height=768&xhint=2877&yhint=2104&crop=true",
    502
  ),
  new Destination(
    "c15",
    "s5",
    "Madrid",
    "Dive headlong into the grandeur and intimate charm of Madrid. Feel the vibe in Puerta del Sol, the pulsing heart of modern Madrid and of Spain itself. The lavish Royal Palace rivals Versailles, the Prado has Europe's top collection of paintings, and nearby hangs Picasso's chilling masterpiece, Guernica.",
    900,
    5.0,
    "https://blog.goway.com/globetrotting/wp-content/uploads/2018/05/Panoramic-view-of-Madrid-Spain-_1037923567.jpg",
    976
  ),
  new Destination(
    "c16",
    "s6",
    "Porto",
    "Porto is an attractive European minimetropolis on Portugal's northwestern coast where visitors can get their fill of culture and the outdoors. Travelers can visit the city's wealth of museums, admire its varied architecture, relax in its verdant parks and, of course, hit the beach.",
    1126,
    4.7,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Historical_part_of_Porto%2C_Portugal.jpg/1200px-Historical_part_of_Porto%2C_Portugal.jpg",
    589
  ),
  new Destination(
    "c17",
    "s7",
    "Rotterdam",
    "Often overshadowed by Amsterdam, Rotterdam is a funky little port town that prides itself on its unique architecture, cool art, amazing food, and massive harbor. The city is one of the most multicultural in the country and hosts an array of festivals and concerts throughout the year.",
    1270,
    5.0,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR771sECDFZ0meZY-rWqGXFKMlPGJWpRBLiQIKHEZYY-Bx3rUBEiZ4sDEg85Ak9YQL-KSo&usqp=CAU",
    690
  ),
  new Destination(
    "c18",
    "s8",
    "Cairo",
    "Cairo's an ancient city that also happens to be a modern metropolis—it's one of the biggest cities in the Middle East and has the traffic and noise issues to prove it. But as long as you're not looking for solitude, Cairo—the City of the Thousand Minarets—is a splendid place to explore Egyptian history and culture.",
    "969 CE",
    2.9,
    "https://d3rr2gvhjw0wwy.cloudfront.net/uploads/mandators/49581/file-manager/cairo.jpg",
    888
  ),
  new Destination(
    "c19",
    "s9",
    "Melborne",
    "Melbourne is Australia's mecca for all things trendy and tasty. The city offers up exquisite dining, exhilarating sport and abundant opportunities to experience art. A perfect blend of rich cultural history and new age trends is waiting for you in Melbourne.",
    1835,
    4.5,
    "https://www.telegraph.co.uk/content/dam/travel/2023/05/15/TELEMMGLPICT000335701757_trans_NvBQzQNjv4BqpVlberWd9EgFPZtcLiMQf0Rf_Wk3V23H2268P_XkPxc.jpeg",
    "1,101"
  ),
  new Destination(
    "c20",
    "s10",
    "Beijing",
    "As China's political and cultural hub, Beijing offers a glimpse into the nation's expansive history and its rapid modernization. You'll find preserved palaces rubbing elbows with new subway stations and tranquil lamaseries sharing space with world-class stadiums.",
    1124,
    4.0,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTshvs_pcBL9kY0Zo7Sy2XHQMIwdivpYCus4hHWOAstiQ&s",
    "1,981"
  ),
];
