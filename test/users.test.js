/* eslint-disable no-undef */
const jest = require('jest');

const userService = require('../src/services/mongodb-service/user');
const User = require('../src/models/user');

describe('UserService', () => {
  describe('getAllUsers', () => {
    it('debería devolver todos los usuarios', async () => {
      const mockUsers = [{ name: 'Juan' }, { name: 'Pedro' }];
      User.find = jest.fn().mockResolvedValue(mockUsers);

      const result = await userService.getAllUsers();

      expect(User.find).toHaveBeenCalledTimes(1);
      expect(User.find).toHaveBeenCalledWith({});
      expect(result).toEqual(mockUsers);
    });

    it('debería devolver los usuarios filtrados', async () => {
      const mockUsers = [{ name: 'Juan' }];
      const mockFilters = { name: 'Juan' };
      User.find = jest.fn().mockResolvedValue(mockUsers);

      const result = await userService.getAllUsers(mockFilters);

      expect(User.find).toHaveBeenCalledTimes(1);
      expect(User.find).toHaveBeenCalledWith(mockFilters);
      expect(result).toEqual(mockUsers);
    });
  });
});
