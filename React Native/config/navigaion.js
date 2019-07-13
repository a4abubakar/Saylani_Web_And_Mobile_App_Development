import { createDrawerNavigator, createMaterialTopTabNavigator, createSwitchNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import * as Routes from '../screens/index'

const HomeNavigator = createStackNavigator({
    Home: {
        screen: Routes.Home
    }
});

const QuizNavigator = createStackNavigator({
    Quiz: {
        screen: Routes.Quiz
    }
});

const MainNavigator = createSwitchNavigator({
    Home: {
        screen: HomeNavigator
    },
    Quiz: {
        screen: QuizNavigator
    }
})
export default createAppContainer(MainNavigator);