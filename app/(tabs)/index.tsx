import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';

const data = [
  {label: 'Macro Zona A', value:'A'},
  {label: 'Macro Zona B', value:'B'},
  {label: 'Macro Zona C', value:'C'},
  {label: 'Macro Zona D', value:'D'},
  {label: 'Mensajeria', value:'M'}
]

const contratistas = [
  {label: 'PAMI 5446', value:'5446'},
  {label: 'PAMI 5447', value:'5447'},
  {label: 'PAMI 5448', value:'5448'},
  {label: 'PAMI 5449', value:'5449'},
]
export default function HomeScreen() {
  const [value, setValue] = useState<any | null>(null);
  
  return (
    <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={200}
          labelField="label"
          valueField="value"
          placeholder="Seleccione Macro Zona"
          searchPlaceholder="Search..."
          value={value}
          onChange={item => {setValue(item.value); console.log(item.value)}}
          renderLeftIcon={() => (
            <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
          )}
        />
  );
      
}

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    marginTop: 20,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  
});

