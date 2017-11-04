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
        justifyContent: 'space-around'
    },
    mantra: {
        flex: 2,
    },
    deekshaEnd: {
        flex: 0.2,
    },
    counterFactory: {
        flex: 4,
        alignItems: "center"
    },

    mantram: {
        fontFamily: "mono",
        fontWeight: "300",
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
        zIndex: 1,

        shadowOffset: {width: 500, height: 500},
        shadowColor: 'red',
        shadowOpacity: 1,
        elevation: 24

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
    },
    putCenter: {
        alignItems: "center",
        justifyContent: "center", flex: 1,
    },
    parentCircle: {
        position: 'absolute', width: 75 * 2,
        height: 75 * 2,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    topLeftQuad: {
        width: 75,
        height: 75,
        borderRadius: 75,
        transform: [{rotate: "90deg"}],
    },
    bottomLeftQuad: {
        width: 75,
        height: 75,
        borderRadius: 75,
        transform: [{rotate: "0deg"}],
    },
    topRightQuad: {
        width: 75,
        height: 75,
        borderRadius: 75,
        transform: [{rotate: "180deg"}],
    },
    bottomRightQuad: {
        width: 75,
        height: 75,
        borderRadius: 75,
        transform: [{rotate: "270deg"}],
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    makeBold: {
        fontWeight: 'bold',
        textDecorationLine: "underline",
    },
    marginTen: {
        margin: 10
    }

});

export default styles;