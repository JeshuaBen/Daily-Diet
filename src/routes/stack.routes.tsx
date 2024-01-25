import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@screens/Home";
import Statistics from "@screens/Statistics";

const { Navigator, Screen } = createNativeStackNavigator();

const StackRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="home"
    >
      <Screen name="home" component={Home} />

      <Screen name="statistics" component={Statistics} />
    </Navigator>
  );
};

export default StackRoutes;
