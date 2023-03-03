import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

const TodoPage = () => {
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);

    const handleAddTask = () => {
        console.log('add')
        if (task.trim()) {
          setTaskList([...taskList, { id: Date.now(), task }]);
          setTask('');
        }
      };
    
      const handleDeleteTask = (taskId) => {
        const newTaskList = taskList.filter((task) => task.id !== taskId);
        setTaskList(newTaskList);
      };

      const renderItem = ({ item }) => (
        <View style={styles.taskItem}>
            <TouchableOpacity >
            <View style={styles.taskContainer}>
                <Text style={styles.task}>{item.task}</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteTask(item.id)}>
            <Text style={styles.deleteTask}>X</Text>
            </TouchableOpacity>
        </View>
      );

    return (
        <View style={styles.container}>
      <Text style={styles.title}>TodoList</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add task"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={taskList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      },
      title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
        alignSelf: 'center',
        color: 'black'
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
      },
      input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingHorizontal: 10,
        backgroundColor: 'black'
      },
      addButton: {
        backgroundColor: '#007aff',
        borderRadius: 4,
        paddingHorizontal: 10,
        paddingVertical: 8,
      },
      deleteButton: {
        backgroundColor: 'red',
        width: 18,
        // alignSelf: 'center',
        alignItems: 'center',
        height: 20,
        borderRadius: 4,
        paddingHorizontal: 1,
        paddingVertical: 1,
      },
      deleteTask: {
        
      },
      addButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
      },
      taskContainer: {
        backgroundColor: 'black',
        color: 'white',
        maxWidth: 300,
        padding: 10,
        borderRadius: 4,
        marginBottom: 10,
      },
      task: {
        fontSize: 16,
      },
      taskItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginBottom: 6,
      }
})

export default TodoPage;
