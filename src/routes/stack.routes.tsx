import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@screens/Home";

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
    </Navigator>
  );
};

export default StackRoutes;
