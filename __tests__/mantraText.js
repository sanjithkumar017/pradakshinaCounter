/**
 * Created by sanjithkumar017 on 11/10/17.
 */

import 'react-native';
import React from 'react';

import App from '../App/App';

import renderer from 'react-test-renderer';


test('renders correctly', ()=> {
    const tree = renderer.create(<App /> ).toJSON();
    expect(tree).toMatchSnapshot();

});
