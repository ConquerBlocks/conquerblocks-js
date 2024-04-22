class Box {
  #col;
  #row;
  #color;
  #free;
  #open;

  constructor(row, col, color) {
    this.#col = col;
    this.#row = row;
    this.#color = color;
    this.#free = true;
    this.#open = false;
  }

  get col() {
    return this.#col;
  }

  get row() {
    return this.#row;
  }
}

export default Box;
