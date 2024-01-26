import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Meals from "@screens/Meals";
import NewMeal from "@screens/NewMeal";
import Statistics from "@screens/Statistics";

const { Navigator, Screen } = createNativeStackNavigator();

const StackRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="meals"
    >
      <Screen name="meals" component={Meals} />

      <Screen name="statistics" component={Statistics} />

      <Screen name="newMeal" component={NewMeal} />
    </Navigator>
  );
};

export default StackRoutes;
