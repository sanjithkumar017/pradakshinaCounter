/**
 * Created by sanjithkumar017 on 9/10/17.
 */

import React, {Component} from 'react';
import {
    TouchableOpacity,
    Text
} from 'react-native';

import styles from '../styles/styles.js';

const mantraLanguages = ["Tvamasmin kārya niryōgē pramāṇaṁ harisattama hanumān yatnamāstāya dhuḥkha kṣaya karōbhava",];

export default class MantraText extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.nextlang}>
                <Text style={styles.mantram}>{mantraLanguages[this.props.lang]}</Text>
            </TouchableOpacity>
        );
    }
}

