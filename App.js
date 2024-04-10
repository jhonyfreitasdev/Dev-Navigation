import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Contacts from "./src/pages/Contacts";
import Information from "./src/pages/Information";

export default function App (){
  const Stack = createStackNavigator(); 

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Contacts" component={Contacts}/>
        <Stack.Screen name="Information" component={Information}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};