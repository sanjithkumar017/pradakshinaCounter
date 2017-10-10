/**
 * Created by sanjithkumar017 on 9/10/17.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
} from 'react-native';

import styles from '../styles/styles.js';
export default class DateCircle extends Component {
    render() {
        return (
            <View style={styles.circles}>
                <Text style={styles.circleText}>21</Text>
            </View>
        );
    }
}

