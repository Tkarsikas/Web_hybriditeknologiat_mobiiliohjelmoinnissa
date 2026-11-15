import { Appbar } from 'react-native-paper';
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export default function AppBar({ navigation, back }: NativeStackHeaderProps) {
    //done like this to match exactly assignment instructions example pics
    return (
        <Appbar.Header>
            {back ? (
                <Appbar.BackAction
                    onPress={() => navigation.goBack()} />
            ) : null }

                <Appbar.Content title="MD Nav Demo" />
            {!back ? (
                <Appbar.Action
                    icon="arrow-right"
                    onPress={() => navigation.navigate('SecondScreen')} />
                ) :  null }
        </Appbar.Header >
    )
}
