import axios from "axios";

const url = "/todoitems/";

class ItemService {
  static getItems() {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((res) => {
          const data = res.data;
          resolve(
            data.map((item) => ({
              ...item
            }))
          );
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  static createItem(title) {
    return axios.post(url, {
      title
    });
  }
  static deleteItem(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default ItemService;
