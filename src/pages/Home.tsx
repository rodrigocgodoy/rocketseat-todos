import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    console.log("🚀 ~ file: Home.tsx ~ line 12 ~ handleAddTask ~ newTaskTitle", newTaskTitle)
    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    }
    setTasks((prevState) => [...prevState, newTask]);
  }

  function handleToggleTaskDone(id: number) {
    setTasks((prevState) => prevState?.filter((item) => {
      console.log("🚀 ~ file: Home.tsx ~ line 31 ~ setTasks ~ item", item)
      if (item.id === id) {
        item.done = !item.done;
        return item;
      }
      return item;
    }));
  }

  function handleRemoveTask(id: number) {
    setTasks((prevState) => prevState?.filter((item) => item.id !== id));
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})