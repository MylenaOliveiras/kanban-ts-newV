export class Storage<TData extends { id: number }> {
  private data: TData[] = [];

  constructor(private url: string, initialValue: TData[]) {
    const saved = sessionStorage.getItem(url);
    this.data = saved ? (JSON.parse(saved) as TData[]) : initialValue;
  }

  get(id: number) {
    return this.data.find((x) => x.id === id);
  }

  add(item: TData) {
    const newItem = {
      ...item,
      id: Math.max(0, ...this.data.map((o) => o.id)) + 1,
    };
    this.data.push(newItem);
    this.save();

    return newItem;
  }

  update(id: number, item: Partial<TData>) {
    const found = this.get(id);
    if (found) {
      Object.assign(found, item);
      this.save();
    }
    return found;
  }
  delete(id: number) {
    const found = this.get(id);
    if (found) {
      const index = this.data.indexOf(found);
      if (index > -1) {
        this.data.splice(index, 1);
        this.save();
      }
    }
  }

  getValue() {
    return this.data;
  }

  private save() {
    sessionStorage.setItem(this.url, JSON.stringify(this.data));
  }
}
