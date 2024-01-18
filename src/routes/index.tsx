import { View } from "react-native";
import { useTheme } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./stack.routes";

const Routes: React.FC = () => {
  const { COLORS } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.GRAY100 }}>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </View>
  );
};

export default Routes;
