
import React from 'react';
import { View, Text, Button } from 'react-native';

const CopyComponent = ({ navigation }) => {
  const handleCopy = () => {
   
    console.log('Copy functionality triggered!');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Copy Component</Text>
      <Button title="Copy" onPress={handleCopy} />
    </View>
  );
};

export default CopyComponent;
