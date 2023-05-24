export class ApiRepository<T extends { name: string | number }> {
  constructor(public url: string) {}

  async getAll(): Promise<T[]> {
    const response = await fetch(this.url);
    if (!response.ok) {
      const message = `Error: ${response.status}. ${response.statusText}`;
      throw new Error(message);
    }

    return response.json() as Promise<T[]>;
  }

  async get(id: T["name"]): Promise<T> {
    const response = await fetch(this.url + (id as string));
    return response.json() as Promise<T>;
  }

  async update(id: T["name"], item: Partial<T>): Promise<T> {
    const response = await fetch(this.url + (id as string), {
      method: "PATCH",
      body: JSON.stringify(item),
      headers: { "Content-Type": "application/json" },
    });
    return response.json() as Promise<T>;
  }
}
