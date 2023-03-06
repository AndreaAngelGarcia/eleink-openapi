/* eslint-disable no-undef */
const jest = require('jest');

const userService = require('../src/services/mongodb-service/user');
const User = require('../src/models/user');

// TEST GETALLUSERS
describe('UserService', () => {
  describe('getAllUsers', () => {
    it('debería devolver todos los usuarios', async () => {
      const mockUsers = [{ name: 'Andrea' }, { name: 'Manolillo' }];
      User.find = jest.fn().mockResolvedValue(mockUsers);

      const result = await userService.getAllUsers();

      expect(User.find).toHaveBeenCalledTimes(1);
      expect(User.find).toHaveBeenCalledWith({});
      expect(result).toEqual(mockUsers);
    });

    it('debería devolver los usuarios filtrados', async () => {
      const mockUsers = [{ name: 'Andrea' }];
      const mockFilters = { name: 'Gabri' };
      User.find = jest.fn().mockResolvedValue(mockUsers);

      const result = await userService.getAllUsers(mockFilters);

      expect(User.find).toHaveBeenCalledTimes(1);
      expect(User.find).toHaveBeenCalledWith(mockFilters);
      expect(result).toEqual(mockUsers);
    });
  });
});

// TEST CREATEUSER
describe('createUser', () => {
  it('debería crear un usuario correctamente', async () => {
    const body = {
      name: 'Juan',
      email: 'juan@example.com',
      password: 'secretpassword',
    };

    const createdUser = await createUser(body);

    expect(createdUser).toBeDefined();
    expect(createdUser.name).toEqual('Juan');
    expect(createdUser.email).toEqual('juan@example.com');
    expect(createdUser.password).not.toEqual('secretpassword');
  });

  it('debería lanzar un error si se proporciona una entrada inválida', async () => {
    const body = {
      email: 'juan@example.com',
      password: 'secretpassword',
    };
    await expect(createUser(body)).rejects.toThrow(); // se espera que se lance una excepción
  });
});

// TEST UPDATEUSER
describe('updateUser', () => {
  it('debería actualizar un usuario correctamente', async () => {
    const existingUser = new User({
      name: 'Juan',
      email: 'juan@example.com',
      password: 'secretpassword',
    });
    await existingUser.save();

    const updateData = {
      name: 'Pedro',
      password: 'newpassword',
    };

    const updatedUser = await updateUser({ email: existingUser.email, ...updateData });

    expect(updatedUser).toBeDefined();
    expect(updatedUser.name).toEqual('Pedro');
    expect(updatedUser.email).toEqual('juan@example.com');
  });

  it('debería lanzar un error si se proporciona un correo electrónico no existente', async () => {
    const updateData = {
      name: 'Pedro',
      password: 'newpassword',
    };

    await expect(updateUser({ email: 'noexiste@example.com', ...updateData })).rejects.toThrow();
  });
});

// TEST BORRAR USUARIO
describe('deleteUser', () => {
  it('debería eliminar un usuario existente correctamente', async () => {
    const existingUser = new User({
      name: 'Juan',
      email: 'juan@example.com',
      password: 'secretpassword',
    });
    await existingUser.save();

    const deletedUser = await deleteUser(existingUser.email);

    expect(deletedUser).toBeDefined();
    expect(deletedUser.deletedCount).toEqual(1);
  });

  it('debería lanzar un error si se proporciona un correo electrónico no existente', async () => {
    const nonExistingEmail = 'noexiste@example.com';

    await expect(deleteUser(nonExistingEmail)).rejects.toThrow();
  });
});
