



import React, {
  Component,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';

let {width,height} = Dimensions.get('window');

class FocusModule extends Component {

    constructor(props){ 
        super(props);
        this.state = {
            focusInfo:{}
        }
    }

    componentWillMount() {
          const {ajaxData,ajaxSucceed,ajaxFailed} = this.props.focusData;
          if(!this.props.focusData.data.FetchData[0].focusInfo.focus){
               ajaxData({url:'focus',method:'get',body:'city_id=1&icon_type=1',succeed:ajaxSucceed,failed:ajaxFailed})
          }
    }

    _onPressButton(){
        alert('abc');
    }

    render() {
      if(this.props.focusData.data.FetchData[0].focusInfo){
          const imgs = this.props.focusData.data.FetchData[0].focusInfo.data.map((row, ii) => {
                return (<TouchableOpacity key={ii}  onPress={this._onPressButton}>
                            <Image style={styles.img} source={{uri:row.pic_url}} />
                        </TouchableOpacity>);
          });
          return (
                  <View style={styles.navContent}>
                      {imgs}
                  </View>
          );
      }
    }
    
}

const styles = StyleSheet.create({
      navContent:{
          backgroundColor:'#eaf3ee',
          paddingTop:10
      },
      img:{
         width:width,
         height:width*0.28,
         marginBottom:10,
         resizeMode:Image.resizeMode.stretch
      }
});

module.exports = FocusModule;
