import React, {useState} from 'react';
import {View,Text, StyleSheet, Modal} from 'react-native'
import {Card, TextInput, Button} from 'react-native-paper'

export const theme={
    colors:{
        primary:'#1707a8',
        accent:'#1707a8',
    }
}
export const AddUser = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [add, setAdd] = useState('')
    const [modalVisible, setModalVisible] = useState(false);

    
    return (
        <Card style={styles.form} >
            <View style={styles.add} >
                <Text style={{color:'#fff', fontSize:25}} >Create a User</Text>
            </View>
            <View style={{paddingHorizontal:20, marginBottom:20}} >
                <TextInput
                    label="Name"
                    mode='outlined'
                    value={name}
                    dense={true}
                    onChangeText={(text)=>setName(text)}
                />
                <TextInput
                    label="Email"
                    mode='outlined'
                    value={email}
                    dense={true}
                    onChangeText={(text)=>setEmail(text)}
                />
                <TextInput
                    label="Phone"
                    mode='outlined'
                    keyboardType='number-pad'
                    placeholder='o80'
                    value={phone}
                    dense={true}
                    onChangeText={(text)=>setPhone(text)}
                />
                <TextInput
                    label="Address"
                    mode='outlined'
                    value={add}
                    dense={true}
                    onChangeText={(text)=>setAdd(text)}
                />
            </View>
            <View style={{alignItems:'center'}} >
                <Button 
                    style={styles.btn}
                    theme={theme}
                    compact={true}
                    icon="camera" 
                    mode="contained" 
                    onPress={() => setModalVisible(true)}>
                </Button>
            </View>
                <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                >
                    <View style={styles.modalView} >
                        <Button 
                            style={styles.btn}
                            theme={theme}
                            compact={true}
                            icon="camera" 
                            mode="contained" 
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            close mdal
                        </Button>
                        <Button 
                            style={styles.btn}
                            theme={theme}
                            compact={true}
                            icon="camera" 
                            mode="contained" 
                            onPress={() => console.log('Pressed')}>
                        </Button>
                    </View>
                </Modal>
        </Card>
    );
};

const styles = StyleSheet.create({
    form:{
        flex:1,
    },
    add:{
        alignItems:'center',
        paddingVertical:20,
        backgroundColor:'#1707a8',
        marginBottom:30,
    },
    btn:{
        width:100,
        height:40
    },
    modalView: {
        marginTop:470,
        backgroundColor: "#d7d7d9",
        borderRadius: 10,
        height:200,
        padding: 35,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-around',
      },
})

export default AddUser;