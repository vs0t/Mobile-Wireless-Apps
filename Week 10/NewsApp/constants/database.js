// import { mysql } from 'mysql';

// const con = mysql.createConnection({
//     host: 'istwebclass.org',
//     user: 'eaaronsw_IST',
//     password: 'P@s$w0rd0312',
//     database: 'eaaronsw_IST236_Final',
//   });
  
//   export const saveListingsToDatabase = (listing) => {
//     return new Promise((resolve, reject) => {
//       con.connect((err) => {
//         if (err) {
//           console.error('Error connecting to the database:', err);
//           reject(err);
//           return;
//         }
  
//         const { price, bedrooms, address, yearBuilt, description } = listing;
//         const query = `INSERT INTO listings (title, date, author, agency, description) VALUES ('${price}', '${bedrooms}', '${address}', '${yearBuilt}', '${description}')`;
  
//         con.query(query, (err, results) => {
//           if (err) {
//             console.error('Error saving listing to the database:', err);
//             reject(err);
//           } else {
//             console.log('Listing saved to the database successfully!');
//             resolve(results);
//           }
  
//           con.end();
//         });
//       });
//     });
//   };