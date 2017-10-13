/**
 * Created by sanjithkumar017 on 9/10/17.
 */

import {StyleSheet} from 'react-native'
import attribs from './constants'

//Lets use constants for color and stuff

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: attribs.colorwhite

    },
    parent: {
        flex: 1,
        alignItems: "center",
        margin: 5,
        justifyContent: 'space-between'

    },
    mantra: {
        flex: 2,
    },
    deekshaCounter: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "stretch",
        justifyContent: "space-around"
    },
    counterFactory: {
        flex: 2,
        alignItems: "center"
    },

    mantram: {
        fontFamily: "mono",
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
        color: "black",


    },

    buttonWrapperCounter: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        backgroundColor: attribs.colorBlue,
        borderRadius: 100,

    },
    buttonWrapperReset: {
        backgroundColor: attribs.colorRed,
        marginTop: 19,
        padding: 19,
        borderRadius: 30,
        alignItems: "center"
    },
    buttonCounter: {
        color: attribs.colorwhite,
        fontSize: 30
    },
    buttonReset: {
        color: attribs.colorwhite,
    },

    circles: {
        flex: 1,
        margin: 19,
        borderRadius: 50,
        width: 50,
        height: 50,
        backgroundColor: attribs.colorRed
    },
    circleText: {
        color: attribs.colorwhite,
        textAlign: 'center',
        marginTop: 15,
    }
});

export default styles;