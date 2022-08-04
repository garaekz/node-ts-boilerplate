
export class ItemsService {
  constructor() {}

  async all() {
    return [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
    ];
  }

  async get(id: String) {
    return { id, name: 'Item ' + id };
  }

  async create(item: any) {
    return item;
  }

  async update(id: String, item: any) {
    return item;
  }

  async delete(id: String) {
    return id;
  }
}