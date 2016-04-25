
import Swiper from 'react-native-swiper2';

import React, {
  Component,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
let {width,height} = Dimensions.get('window');

class SwiperModule extends Component {

  

    componentWillMount() {
    	this.data = this.props.swiperData.data.FetchData[0];
    	const {ajaxData,ajaxSucceed,ajaxFailed} = this.props.swiperData;

        if(!this.data.swiperInfo.swiper){
             ajaxData({url:'swiper',method:'get',body:'city_id=1&icon_type=2',succeed:ajaxSucceed,failed:ajaxFailed})
        }

    }

    _onPressButton(){
    	alert('abc');
    }

  	render() {
  		console.log('swiper page')
  			if(this.data.swiperInfo){
  				const imgs = this.data.swiperInfo.data.map((row, ii) => {
			          return (
			          	<TouchableOpacity  key={ii}  onPress={this._onPressButton}>
			          		<Image style={styles.img} source={{uri:row.pic_url}} />
			          	</TouchableOpacity>
			          )
			    });
			    return (
				    	<Swiper paginationStyle={{
				    			alignItems: 'flex-start',
				    			backgroundColor:'white', 
				    			paddingTop:3, 
				    			top:width*0.51, 
				    			height:width*2.5,
				    			left:-width*2,
				    			width:width*5,
				    			borderTopRightRadius:width*5/2,
				    			borderTopLeftRadius:width*5/2,
				    			}} 
				    				height={width*0.56}
				    				autoplay={true}>
	                      	{imgs}
	                  	</Swiper>
		          )
		    }
  	}
  	
}

const styles = StyleSheet.create({
		    img: {
		  		width:width,
		  		height:width*0.56,
		  		resizeMode:'stretch'
		    }
});

module.exports = SwiperModule;