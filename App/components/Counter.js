/**
 * Created by sanjithkumar017 on 16/9/17.
 */
import React, {Component} from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableHighlight,
    Alert
} from 'react-native';



const mantraLanguages = ["Tvamasmin kārya niryōgē pramāṇaṁ harisattama hanumān yatnamāstāya dhuḥkha kṣaya karōbhava" ,]
export default class Counter extends Component {

    render() {
        return (

            <View style={styles.container}>
                <View style={styles.parent}>

                    <View style={styles.mantra}>
                        <TouchableOpacity onPress={this.props.nextlang}>
                            <Text style={styles.mantram}>{mantraLanguages[this.props.lang]}</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.counterFactory}>


                        <TouchableHighlight underlayColor={'#D62828'} style={styles.buttonWrapperCounter}
                                            onPress={()=> {
                                                this.props.increment()
                                                if (this.props.count == 40) {

                                                    Alert.alert(
                                                        'You have successfully finished 41 rounds',
                                                        'Please rate us on Google Play',
                                                        [
                                                            {
                                                                text: 'Ok', onPress: () => {
                                                                this.props.reset()

                                                            }
                                                            },
                                                            {
                                                                text: 'Cancel',
                                                                onPress: () => console.log('Cancel Pressed')
                                                            },
                                                        ],
                                                        {cancelable: false}
                                                    )

                                                }
                                            }}>
                            <Text
                                style={styles.buttonCounter}>
                                {this.props.count}
                            </Text>

                        </TouchableHighlight>


                        <TouchableOpacity style={styles.buttonWrapperReset} onPress={()=> {
                            if (this.props.count == 0) {

                            } else {
                                Alert.alert(
                                    'Are you sure?',
                                    'You will lose the count',
                                    [
                                        {
                                            text: 'Ok', onPress: () => {
                                            this.props.reset()

                                        }
                                        },
                                        {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
                                    ],
                                    {cancelable: false}
                                )
                            }
                        }}>
                            <Text
                                style={styles.buttonReset}>
                                RESET
                            </Text>
                        </TouchableOpacity>


                        <Text>
                            You have {this.props.countleft} rounds left
                        </Text>


                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white"

    },
    parent: {
        flex: 1,
        alignItems: "center",
        margin: 5,

    },
    mantra: {
        flex: 3,
    },
    mantram: {
        fontFamily: "mono",
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
        color: "black",


    },
    counterFactory: {
        flex: 2,
        alignItems: "center"
    },
    buttonWrapperCounter: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        backgroundColor: '#003049',
        borderRadius: 100,

    },
    buttonWrapperReset: {
        backgroundColor: '#D62828',
        marginTop: 20,
        padding: 20,
        borderRadius: 30,
        alignItems: "center"
    },
    buttonCounter: {
        color: '#FFFFFF',
        fontSize: 30
    },
    buttonReset: {
        color: '#FFFFFF',
    },
});
