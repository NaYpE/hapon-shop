import React from 'react';
import { mount, shallow } from 'enzyme'; //shallow para algo particular, sin toda la estructura del DOM
import ProviderMock from '../../__mocks__/ProviderMock.js';
import Header from '../../components/Header.jsx';

describe('<Header />', () => {
  test('Render del componente Header', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.length).toEqual(1);
  });
  test('Render del Titulo', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.find('.navbar-email').text()).toEqual('Usuario');
  });
});
