import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Home Component', () => {
  test('Default value of rating filter', () => {
    expect(ratingFilter).toEqual(3)
  })
})