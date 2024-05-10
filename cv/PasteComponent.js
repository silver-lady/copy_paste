
import React,{ useState } from 'react';
import { View, Text, Button,TextInput } from 'react-native';

const PasteComponent = ({ navigation }) => {
    const [inputText, setInputText] = useState('');
  const handlePaste = () => {
    // Implement your paste functionality here
    console.log('Paste functionality triggered!');

  };
  const onPrintType=(a)=>{
    console.log(a);
    setInputText(a);
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Paste Component</Text>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginVertical: 10, paddingHorizontal: 10 }}
        placeholder="Enter text to copy"
        onChangeText={text => onPrintType(text)}
        value={inputText}
        />
        
      <Button title="Paste" onPress={handlePaste} />
    </View>
  );
};

export default PasteComponent;
