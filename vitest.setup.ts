import "@testing-library/jest-dom/vitest";

// This jsdom build exposes no localStorage (and Node ≥22 shadows the global
// with its own experimental webstorage), so provide a small in-memory
// implementation for component tests.
class MemoryStorage implements Storage {
  private store = new Map<string, string>();

  get length() {
    return this.store.size;
  }

  clear() {
    this.store.clear();
  }

  getItem(key: string) {
    return this.store.has(key) ? this.store.get(key)! : null;
  }

  key(index: number) {
    return Array.from(this.store.keys())[index] ?? null;
  }

  removeItem(key: string) {
    this.store.delete(key);
  }

  setItem(key: string, value: string) {
    this.store.set(key, String(value));
  }
}

const storage = new MemoryStorage();
Object.defineProperty(window, "localStorage", { value: storage, configurable: true });
Object.defineProperty(globalThis, "localStorage", {
  value: storage,
  configurable: true,
  writable: true,
});
