import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/header';

export default function Main () {
    return (
    <>
        <Header /><View style={styles.container}>
            <Text>This is main page</Text>
            <StatusBar style="auto" />

        </View></>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
});