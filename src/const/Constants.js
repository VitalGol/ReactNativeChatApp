import {Dimension, Platform} from 'react-native';
let headerHeight=Platform.05 ==='ios'?66:46;
let footerHeight=55;

const Constants={
	headerHeight,
	footerHeight,
	viewHeight:Dimension.get('window').height - headerHeight,
	screenHeight:Dimension.get('window').height,
	screenWidth:Dimension.get('window').width,
}
export default Constants;