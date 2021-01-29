import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Dimensions, TextInput, TouchableHighlight, ScrollView, Image } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    state = {
        impDates: [
            {
                min: "45 min",
                time: "7:30 AM",
                desc: "ENGLISH",
                teacher: 'ENK',
            },
            {
                min: "75 min",
                time: "7:30 AM",
                desc: "SPANISH",
                teacher: 'BRAGADO',
            },
            {
                min: "60 min",
                time: "8:30 AM",
                desc: "GYM",
                teacher: 'HOGREFE',
            },
            {
                min: "30 min",
                time: "8:30 AM",
                desc: "MATH",
                teacher: 'HAYS',
            },
            {
                min: "90 min",
                time: "8:30 AM",
                desc: "CS",
                teacher: 'DENNA',
            },
            {
                min: "75 min",
                time: "9:30 AM",
                desc: "CALC",
                teacher: 'GRATTONI',
            },
            {
                min: "75 min",
                time: "9:30 AM",
                desc: "Literature",
                teacher: 'FUDALA',
            },
            {
                min: "60 min",
                time: "9:30 AM",
                desc: "GYM",
                teacher: 'KESKE',
            },
            ],
        newSchedule: [
            ],
        showClassPage: 'block',
        showSchedulePage: 'none',
    }
    addDate = (newClass) => {
       // We will fill this in together
       const newMin = newClass.newMin;
       const newTime = newClass.time;
       const newDesc = newClass.desc;
       const newTeacher = newClass.teacher;
       //creates new object
       const obj = {min: newClass.newMin,
       time: newClass.time,
       desc: newClass.desc,
       teacher: newClass.teacher};
        this.setState({
            // gets entire array
            newSchedule: [...this.state.newSchedule, obj],
        });
    };
    showClass = () => {
        this.setState({
            showClassPage: 'block',
            showSchedulePage: 'none',    
        })
    };
    showSchedule = () => {
        this.setState({
            showClassPage: 'none',
            showSchedulePage: 'block',    
        })
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.yellowContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.vikesText}>
                            Go Vikes!
                        </Text>
                        <Text style={styles.titleText}>
                            November 18, 2020
                        </Text>
                    </View>
                </View>
                <View style={styles.greenContainer}>
                    <View style={{display: this.state.showClassPage}}>\
                        <ScrollView>
                            <View style={styles.bodyContainer}> 
                                {this.state.impDates.map((myClass) => (
                                    (     
                                    <View style={styles.rowDataContainer}>
                                        <View style={styles.dateContainer}>
                                                <Text style={styles.dateText}>
                                                {myClass.min}
                                            </Text>
                                                <Text style={styles.dateText}>
                                                {myClass.time}
                                            </Text>
                                        </View>
                                        <View style={styles.dateContainer}>
                                            <Text style={styles.dateText}>
                                                {myClass.desc}
                                            </Text>
                                            <Text style={styles.dateText}>
                                                {myClass.teacher}
                                            </Text>
                                        </View>
                                        <View style={styles.navButton}>
                                            <TouchableHighlight
                                                onPress={() => this.addDate(myClass)}
                                            >
                                                <Text style={styles.buttonText}>
                                                    Add Class
                                                </Text>
                                            </TouchableHighlight>
                                        </View>
                                    </View>
                                    )
                                ))}
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{display: this.state.showSchedulePage}}>
                        <ScrollView>
                            <View style={styles.bodyContainer}>    
                                {this.state.newSchedule.map((myClass) => (
                                        (     
                                        <View style={styles.rowDataContainer}>
                                            <View style={styles.dateContainer}>
                                                <Text style={styles.dateText}>
                                                    {myClass.min}
                                                </Text>
                                                <Text style={styles.dateText}>
                                                    {myClass.time}
                                                </Text>
                                            </View>
                                            <View style={styles.dateContainer}>
                                                <Text style={styles.dateText}>
                                                    {myClass.desc}
                                                </Text>
                                                <Text style={styles.dateText}>
                                                    {myClass.teacher}
                                                </Text>
                                            </View>
                                        </View>
                                    )
                                ))}
                            </View>
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.yellowContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: 'https://codehs.com/uploads/2dbafec0d465e182b1fd9b492ac84e71' }}
                            style={{ height: 50, width: 50 }}
                        />
                    </View>
                    <View style={styles.navBar}>
                        
                    <TouchableHighlight
                        onPress={this.showClass}
                    >
                        <View style={styles.navButton}>
                            <Text style={styles.buttonText}>
                                Class Options
                            </Text>
                        </View>
                    </TouchableHighlight>
                   
                    <TouchableHighlight
                        onPress={this.showSchedule}
                    >
                        <View style={styles.navButton}>
                            <Text style={styles.buttonText}>
                                Schedule
                            </Text>
                        </View>
                    </TouchableHighlight>
                    
                </View>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
    },
    greenContainer: {
        flex: 1.95,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
    },
    yellowContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'Yellow',
    },
    titleContainer: {
        height: deviceHeight/5,
        width: deviceWidth,
        backgroundColor: 'yellow',
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 24,
    },
    bodyContainer: {
        height: deviceHeight/1.95,
        width: deviceWidth,
        backgroundColor: 'green',
        
    },
    rowDataContainer: {
        flexDirection: 'row',
        width: deviceWidth,
        height: deviceHeight/6,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 2,
        padding: 10,
        
    },
    imageContainer: {
        flexDirection: 'row',
        width: deviceWidth,
        height: deviceHeight/8,
        borderBottomColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dateContainer: {
        flex: 1,
    },
    dateText: {
        color: 'lightgrey',
        fontSize: deviceHeight/32.5,
    },
    descContainer: {
        flex: 3,
    },
    descText: {
        color: 'lightgrey',
    },
    vikesText:{
        fontSize: 30,
        fontWeight: 'bold',
        padding: 10,
    },
    enterDateContainer: {
        height: deviceHeight/ 8,
        width: deviceWidth,
        flexDirection: 'row',
    },
    enterDateTextInput: {
        width: deviceWidth/2, 
        height: deviceHeight/ 8, 
        padding: 8,
        backgroundColor: 'lightgrey',
        borderColor: 'green',
        borderWidth: 2,
        borderBottomColor: 'green',
        borderBottomWidth: 10,
        color: 'green',
    },
    addDateContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow',
        width: deviceWidth/2,
        height: deviceHeight/10, 
        borderRadius: 10,
    },
    addDateText: {
        fontSize: 20,
        textAlign: 'center',
    },
    navBar :{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow',
        width: deviceWidth,
        height: deviceHeight/8,
        borderWidth: 1,    
    },
    navButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        height: deviceHeight/10, 
        width: deviceWidth/3,
        marginLeft: 20,
    },
    buttonText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: '15',
        textAlign: 'center',
    },
});