class User {
  constructor(name, email, consent) {
    this.name = name;
    this.email = email;
    this.consent = consent;
  }

  save() {
    // Save user data to the database
  }

  update() {
    // Update user data in the database
  }

  delete() {
    // Delete user data from the database
  }
}

module.exports = User;