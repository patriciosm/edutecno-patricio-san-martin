import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import storeConfig from './mocks/store-config'

const localVue = createLocalVue()
localVue.use(Vuex)
const store = new Vuex.Store(storeConfig)

describe("Test de Vuex", () => {
  const opinion = {id: 1, game: 'Portal 2', usuario: 'Simon', opinion: 'Excelente juego'}
  const new_opinion = {id: 1, game: 'Portal 2', usuario: 'Pablo', opinion: 'Regular'}

  it('Acción para agregar opinión', () => {

    const jsdomAlert = window.alert;
    window.alert = () => {};

    expect(store.state.opinions).toHaveLength(0);
    store.dispatch('add_opinion', [opinion.game, opinion.usuario, opinion.opinion]);
    expect(store.state.opinions).toEqual([opinion]);

    window.alert= jsdomAlert;
  });

  it('Acción para modificar una opinión', () => {
    store.dispatch('update_opinion', [new_opinion.id, new_opinion.usuario, new_opinion.opinion]);
    expect(store.state.opinions).toEqual([new_opinion]);
  });

  it('Acción para eliminar una opinión', () => {
    store.dispatch('delete_opinion', opinion.id);
    expect(store.state.opinions).toHaveLength(0);
  });
})
