import React from 'react'
import {Text , StyleSheet, View, Image, FlatList} from 'react-native'
import {Card, Title, FAB} from 'react-native-paper'
import {theme} from './AddUser'

export const Home =({navigation})=>{
    const users = [
        {name:'Yusef', title:'Software developer', id:1},
        {name:'John', title:'developer advocate', id:2},
        {name:'Yusef', title:'frontend developer', id:3},
        {name:'John', title:'backend advocate', id:4},
        {name:'Yusef', title:'blockchain developer', id:5},
        {name:'John', title:'javascript advocate', id:6},
        {name:'Boo', title:'dart advocate', id:7},
    ]

    const renderList =(user)=>{
       return (
           <Card
                style={styles.card}
            >
                <View style={styles.flex} >
                    <Image 
                        source={{uri:'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}} 
                        style={{width:70, height:70, marginRight:30, borderRadius:70/2}} 
                    />
                    <View>
                        <Title style={{fontWeight:'bold', fontSize:25}} >{user.name} </Title>
                        <Text style={{fontSize:20}} >{user.title} </Text>
                    </View>
                </View>
           </Card>
       
       )
    }

    return(
        <View style={{flex:1}} >
            <FlatList
                 keyExtractor={(item)=>`${item.id}` }
                 data={users}
                 renderItem ={({item})=>{
                    return renderList(item)
                 }}
            
            />
            <FAB
                style={styles.fab}
                small={false}
                icon="plus"
                color='#fff'
                theme={theme}
                onPress={() => navigation.push('Create user')}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    card: {
      flex: 1,
      flexDirection:'row',
      marginVertical:10,
      padding:20
    },
    flex:{
        flexDirection:"row",
        alignItems:'center'
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 20,
    },
  });