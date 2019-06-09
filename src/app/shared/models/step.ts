export class Step {

  /**
   * The content of the step
   */
  public content: string = '1';

  /**
   * The value of which the step is offset by
   */
  public offset: number = 0;

  /**
   * The state of the step
   */
  public state: boolean = false;

  /**
   * Creates a new step instance
   * 
   * @param content The content of the step
   * @param state The state of the step
   * @param offset The value of which the step is offset by
   */
  constructor(content: string = '1', offset: number = 0, state: boolean = false) {
    this.content = content;
    this.offset = offset
    this.state = state;
  }
}
