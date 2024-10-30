// Create a generic cache class.
class DataCache {
  private cache = new Map();

  // Set an item in the cache
  setItem(id: number, item: unknown): void {
    this.cache.set(id, item);
  }

  // Get an item from the cache
  getItem(id: number) {
    return this.cache.get(id);
  }

  // Remove an item from the cache
  removeItem(id: number) {
    this.cache.delete(id);
  }

  // Clear all items in the cache
  clearAll() {
    this.cache.clear();
  }
}

type User = {
  name: string;
  email: string;
};

type Order = {
  no: number;
  date: Date;
};

const userCache = new DataCache();
const ordersCache = new DataCache();
