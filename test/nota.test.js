// eslint-disable-next-line import/no-unresolved
import test from 'ava';
import sinon from 'sinon';

const { crearNota, editarNota, eliminarNota } = require('../src/services/notas');

test.beforeEach(t => {
  // eslint-disable-next-line no-param-reassign
  t.context.crearNota = sinon.spy(crearNota);
});

test.beforeEach(t => {
  // eslint-disable-next-line no-param-reassign
  t.context.editarNota = sinon.spy(editarNota);
});

test.beforeEach(t => {
  // eslint-disable-next-line no-param-reassign
  t.context.eliminarNota = sinon.spy(eliminarNota);
});

test('crearNota: debe crearnos una nota', t => {
  const name = 'prueba';
  const data = 'esto es una prueba';
  t.context.crearNota(name, data);
  t.true(t.context.crearNota.calledWith(name, data));
});

test('editarNota: debe editarnos la nota', t => {
  const name = 'prueba';
  const data = 'esto es una prueba-editando';
  t.context.editarNota(name, data);
  t.true(t.context.editarNota.calledWith(name, data));
});

test('eliminarNota: debe eliminarnos la nota', t => {
  const name = 'prueba';
  t.context.eliminarNota(name);
  t.true(t.context.eliminarNota.calledWith(name));
});
