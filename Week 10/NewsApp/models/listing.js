class Listing {
    constructor(
      id,
      type,
      price,
      bedrooms,
      bathrooms,
      squareFeet,
      yearBuilt,
      address,
      city,
      state,
      zipCode,
      imageUrl,
      description,
      agencyUrl,
    ) {
      this.id = id;
      this.type = type;
      this.price = price;
      this.bedrooms = bedrooms;
      this.bathrooms = bathrooms;
      this.squareFeet = squareFeet;
      this.yearBuilt = yearBuilt;
      this.address = address;
      this.city = city;
      this.state = state;
      this.zipCode = zipCode;
      this.imageUrl = imageUrl;
      this.description = description;
      this.agencyUrl = agencyUrl;
    }
  
    toString() {
      return `${this.type} at ${this.address}, ${this.city}, ${this.state} ${this.zipCode} - Price: $${this.price} - Bedrooms: ${this.bedrooms} - Bathrooms: ${this.bathrooms} - Square Feet: ${this.squareFeet} - Year Built: ${this.yearBuilt} - Description: ${this.description} - Image URL: ${this.imageUrl}`;
    }
  }
  
  export default Listing;
  