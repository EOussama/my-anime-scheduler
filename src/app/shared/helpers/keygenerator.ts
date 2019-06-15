export class KeyGenerator {

  /**
   * The length of the generated keys
   */
  public static readonly max: number = 16;

  /**
   * Generates a random key
   */
  public static generate(): string {
    const chars: string = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let key: string = '';

    for (let i = 0; i < this.max; i++) {
      const index: number = Math.floor(Math.random() * chars.length);
      key += chars[index];
    }

    return key;
  }
}
