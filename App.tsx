import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Item = ({
  title,
  value,
  onPress,
}: {
  title: string;
  value: string;
  onPress: () => void;
}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Button title="Akselerasi" onPress={onPress} />
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const App = () => {
  const [message, setMessage] = useState('');
  const [message2, setMessage2] = useState('Normal');
  const [message3, setMessage3] = useState('Penuh');

  const onPress = (
    isset: React.Dispatch<React.SetStateAction<string>>,
    val: string,
  ) => {
    isset(val);
  };

  const onReset = () => {
    setMessage('');
    setMessage2('');
    setMessage3('');
  };

  return (
    <View style={styles.container}>
      <Item
        title="Kendaraan"
        onPress={() => onPress(setMessage, 'Swoosh')}
        value={message}
      />
      <View style={styles.sepeda}>
        <Item
          title="Sepeda"
          onPress={() => onPress(setMessage2, 'Perlu perbaikan')}
          value={message2}
        />
      </View>
      <Item
        title="Mobil"
        onPress={() => onPress(setMessage3, 'Kosong')}
        value={message3}
      />
      <View style={styles.reset}>
        <Button color={'red'} title="Reset" onPress={onReset} />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  sepeda: {
    marginVertical: 32,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  value: {
    fontSize: 16,
  },
  reset: {
    bottom: 20,
    position: 'absolute',
    alignSelf: 'center',
  },
});
