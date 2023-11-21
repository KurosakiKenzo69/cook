//import * as SQLite from 'react-native-sqlite-storage';
//
//const db = SQLite.openDatabase(
//  {
//    name: 'cook',
//    location: 'default'
//  },
//  () => { },
//  error => {console.log(error)}
//);
//
//const createTables = () => {
//  db.transaction((tx) => {
//    // Créer la table User
//    tx.executeSql(
//      "CREATE TABLE IF NOT EXISTS User" +
//      "(" +
//      "id INTEGER PRIMARY KEY AUTOINCREMENT," +
//      "name TEXT NOT NULL," +
//      "tel TEXT," +
//      "mail TEXT NOT NULL," +
//      "login TEXT NOT NULL," +
//      "password TEXT NOT NULL" +
//      ");"
//      );
//
//    // Créer la table Cocktails
//    tx.executeSql(
//      "CREATE TABLE IF NOT EXISTS Cocktails" +
//      "(" +
//      "id INTEGER PRIMARY KEY AUTOINCREMENT," +
//      "name TEXT NOT NULL," +
//      "details TEXT," +
//      "photo TEXT," +
//      "duree INTEGER," +
//      "difficulte TEXT" +
//      ");"
//      );
//
//    // Créer la table Favoris
//    tx.executeSql(
//      "CREATE TABLE IF NOT EXISTS Favoris" +
//      "(" +
//      "id INTEGER PRIMARY KEY AUTOINCREMENT," +
//      "user_id INTEGER," +
//      "cocktail_id INTEGER," +
//      "name TEXT NOT NULL," +
//      "details TEXT," +
//      "duree INTEGER," +
//      "difficulte TEXT," +
//      "FOREIGN KEY (user_id) REFERENCES User(id)," +
//      "FOREIGN KEY (cocktail_id) REFERENCES Cocktails(id)" +
//      ");"
//      );
//
//    // Créer la table Recettes
//    tx.executeSql(
//      "CREATE TABLE IF NOT EXISTS Recettes" +
//      "(" +
//      "id INTEGER PRIMARY KEY AUTOINCREMENT," +
//      "user_id INTEGER," +
//      "name TEXT NOT NULL," +
//      "details TEXT," +
//      "photo TEXT," +
//      "duree INTEGER," +
//      "difficulte TEXT," +
//      "FOREIGN KEY (user_id) REFERENCES User(id)" +
//      ");"
//      );
//  });
//};
//
///*const registerUser = (userData) => {
//  const { name, tel, mail, login, password } = userData;
//  return new Promise((resolve, reject) => {
//    db.transaction(tx => {
//      tx.executeSql(
//        'INSERT INTO User (name, tel, mail, login, password) VALUES (?, ?, ?, ?, ?)',
//        [name, tel, mail, login, password],
//        (_, { insertId }) => {
//          resolve(insertId);
//          },
//        (_, error) => {
//          reject(error);
//        }
//        );
//    });
//  });
//};*/
//
//
//
//export { db, createTables, /*registerUser*/ };
