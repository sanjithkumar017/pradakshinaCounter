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
        zIndex: 10

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
        position: 'absolute', width: 65 * 2,
        height: 65 * 2,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    topLeftQuad: {
        width: 65,
        height: 65,
        borderRadius: 65,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 0,
        transform: [{rotate: "90deg"}],
    },
    bottomLeftQuad: {
        width: 65,
        height: 65,
        borderRadius: 65,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 0,
        transform: [{rotate: "0deg"}],
    },
    topRightQuad: {
        width: 65,
        height: 65,
        borderRadius: 65,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 0,
        transform: [{rotate: "180deg"}],
    },
    bottomRightQuad: {
        width: 65,
        height: 65,
        borderRadius: 65,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 0,
        transform: [{rotate: "270deg"}],
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    makeBold:{
        fontWeight: 'bold',
        textDecorationLine: "underline",
    }

});

export default styles;