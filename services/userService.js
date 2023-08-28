const User = require('../models/user');
const gdprUtils = require('../utils/gdprUtils');

class UserService {
  async getUser(userId) {
    try {
      const user = await User.findById(userId);
      return user;
    } catch (error) {
      throw new Error('Failed to get user');
    }
  }

  async updateUser(userId, userData) {
    try {
      const user = await User.findByIdAndUpdate(userId, userData, { new: true });
      return user;
    } catch (error) {
      throw new Error('Failed to update user');
    }
  }

  async deleteUser(userId) {
    try {
      await User.findByIdAndDelete(userId);
    } catch (error) {
      throw new Error('Failed to delete user');
    }
  }

  async anonymizeUserData(userId) {
    try {
      const user = await User.findById(userId);
      const anonymizedData = gdprUtils.anonymizeData(user);
      await User.findByIdAndUpdate(userId, anonymizedData);
    } catch (error) {
      throw new Error('Failed to anonymize user data');
    }
  }
}

module.exports = UserService;