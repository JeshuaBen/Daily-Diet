import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Feedback from "@screens/Feedback";
import MealDetails from "@screens/MealDetails";
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

      <Screen name="feedback" component={Feedback} />

      <Screen name="mealDetails" component={MealDetails} />
    </Navigator>
  );
};

export default StackRoutes;
