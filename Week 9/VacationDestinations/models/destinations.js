class Destination {
  constructor(id, stateId, name, description, foundedYear, rating, imageUrl, price) {
    this.id = id;
    this.stateId = stateId;
    this.name = name;
    this.description = description;
    this.foundedYear = foundedYear;
    this.rating = rating;
    this.imageUrl = imageUrl;
    this.price = price;
  }

  toString() {
    return `${this.name} was founded in ${this.foundedYear} - Description: ${this.description}, Rating: ${this.rating}`;
  }
}

export default Destination;
