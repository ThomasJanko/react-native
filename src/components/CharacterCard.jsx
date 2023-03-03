import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'

const CharacterCard = ({character}) => {

  return (
    <View style={styles.character}>
        <Image source={{uri: character.image? character.image : 'https://i-mom.unimedias.fr/2020/09/16/harry-potter-pourquoi-la-saga-harry-potter-a-un-tel-succes.jpg?auto=format,compress&cs=tinysrgb'}} style={styles.image} />
        <View style={styles.details}>
            <Text style={styles.name}>{character.name}</Text>
            <Text style={styles.house}>{character.house}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    character: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 2,
        marginBottom: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        overflow: 'hidden',
        elevation: 3,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      image: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
        borderRadius: 12
      },
      details: {
        flex: 1,
        padding: 16,
      },
      name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: 'darkred'
      },
      house: {
        fontSize: 16,
        color: '#666',
      },
})

export default CharacterCard