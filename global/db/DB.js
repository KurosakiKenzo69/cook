import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('cook.db');

const setupDatabase = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      // Table des utilisateurs
      tx.executeSql(`
        CREATE TABLE IF NOT EXISTS User (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          tel TEXT,
          mail TEXT NOT NULL,
          login TEXT NOT NULL,
          password TEXT NOT NULL
        );
      `);

      // Table des cocktails
      tx.executeSql(`
        CREATE TABLE IF NOT EXISTS Cocktails (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          details TEXT,
          photo TEXT,
          duree INTEGER,
          difficulte TEXT
        );
      `);

      // Table des favoris
      tx.executeSql(`
        CREATE TABLE IF NOT EXISTS Favoris (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          user_id INTEGER,
          cocktail_id INTEGER,
          name TEXT NOT NULL,
          details TEXT,
          duree INTEGER,
          difficulte TEXT,
          FOREIGN KEY (user_id) REFERENCES User(id),
          FOREIGN KEY (cocktail_id) REFERENCES Cocktails(id)
        );
      `);

      // Table des recettes
      tx.executeSql(`
        CREATE TABLE IF NOT EXISTS Recettes (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          user_id INTEGER,
          name TEXT NOT NULL,
          details TEXT,
          photo TEXT,
          duree INTEGER,
          difficulte TEXT,
          FOREIGN KEY (user_id) REFERENCES User(id)
        );
      `);
    }, (_, error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};

const connexion = (login, password) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM User WHERE login = ? AND password = ?',
        [login, password],
        (_, { rows }) => {
          if (rows.length > 0) {
            resolve(rows.item(0));
          } else {
            reject('Utilisateur inconnu');
          }
        },
        (_, error) => reject(error)
      );
    });
  });
};

export { db, setupDatabase, connexion };
