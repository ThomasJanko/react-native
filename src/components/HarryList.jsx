import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, SafeAreaView, ScrollView, FlatList, Image} from 'react-native';
import harry_potterService from '../services/harry_potter.service';
import CharacterCard from './CharacterCard';
const HarryList = () => {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try{
            response = await harry_potterService.getCharacters()
            setCharacters(response.data)
        }
        catch(err) {
            console.log(err)
        }
    }

    return (
        <View style={styles.container}>
           <Text style={styles.title}>Characters</Text>
           <SafeAreaView style={styles.card}>
                <ScrollView style={styles.list}>
                {characters?.map((character) =>
                    <CharacterCard key={character.id} character={character} />
                )}
                </ScrollView>
           </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        fontStyle: 'bold',
        // alignSelf: 'center'
        // justifyContent: 'center',
        },

    title: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 600,
        fontSize: 20
    },

    card: {
        marginHorizontal: 10,
        marginTop: 20,
    },

    list: {
        marginLeft: 0,
        height: 800, 
    //    overflow: 'scroll',
    },
    
     
})

export default HarryList;
