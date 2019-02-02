import { Tile } from 'react-native-elements';
import {View,Text} from 'react-native'

export default class Cards extends Component{
    render(){
        return(
        <Tile
            imageSrc={require('../../assets/images.jpeg')}
            title="Bitcoin App Redesign"
            icon={{ name: 'play-circle', type: 'font-awesome' }} 
            contentContainerStyle={{ height: 70 }}
        >
        <View
                style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}
            >
            <Text>Hi,Guys
                    Working on Bitcoin Redesign Screen. 
                    I hope you guys will like this designing idea.
                    Don’t forget to check the attachment
                    And don't forget to press "L" button.
                    Hope you like it.
                    Thank you.
            </Text>
        </View>
    </Tile>
    )
}
}