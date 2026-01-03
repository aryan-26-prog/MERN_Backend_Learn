const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");

const favoritePath = path.join(rootDir, "data", "Favorite.json");

if (!fs.existsSync(favoritePath)) {
  fs.writeFileSync(favoritePath, "[]");
}

module.exports = class Favorite {

  static getAll(callback) {
  fs.readFile(favoritePath, (err, data) => {
    if (err || !data || data.length === 0) {
      callback([]);
    } else {
      try {
        const stringData = data.toString();   
        const favorites = JSON.parse(stringData); 
        callback(favorites);
      } catch (e) {
        console.log("JSON corrupted, resetting file");
        callback([]);
      }
    }
  });
}


  static add(home) {
    this.getAll(favorites => {
      const exists = favorites.find(h => h.id === home.id);
      if (exists) return;

      favorites.push(home);

      fs.writeFile(
        favoritePath,
        JSON.stringify(favorites, null, 2),
        err => {
          if (err) console.log(err);
        }
      );
    });
  }
};
