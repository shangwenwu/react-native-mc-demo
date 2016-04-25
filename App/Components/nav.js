

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

class NavModule extends Component {


    componentWillMount() {
        this.data = this.props.navData.data.FetchData[0];
        const {ajaxData,ajaxSucceed,ajaxFailed} = this.props.navData;

          // if(!this.data.navInfo.nav){
          //      ajaxData({url:'nav',method:'get',body:'city_id=1&icon_type=2',succeed:ajaxSucceed,failed:ajaxFailed})
          // }

       

    }

    _onPressButton() {
        // const {ajaxData,ajaxSucceed,ajaxFailed} = this.props.navData;
        // var tabbarManager = require('react-native').NativeModules.MCEncryptionManager;
        // tabbarManager.encryptionParameters({"phone":"15810071768","password":"1",'registration_id':'12121212','device_id':'sds2323dsd23'},(dic) => {
        //       console.warn(JSON.stringify(dic));
        //       var str = '';
        //       for(var k in dic){
        //           str += k+'="'+dic[k]+'"&'
        //       }
        //       // 'phone'='15810071768','password'='1','registration_id'='12121212','device_id'='sds2323dsd23'
        //       var body = str.substr(0,str.length-1);
        //       if(!this.data.loginInfo.login){
        //            console.log('login login login login ');
        //            ajaxData({url:'login',body:body,succeed:ajaxSucceed,failed:ajaxFailed})
        //       }

        // });
        alert('abc');
        
    }

    render() {
           console.log('nav nav nav nav nav nav ');
          if(this.data.navInfo){
              const imgs = this.data.navInfo.data.map((row, ii) => {
                    if(ii < 4){
                    return (<TouchableOpacity key={ii} onPress={this._onPressButton.bind(this)}>
                              <View  style={styles.nav}>
                                    <Image style={styles.img} source={{uri:row.pic_url}} />
                                    <Text style={styles.text} >{row.name}</Text>
                              </View>
                            </TouchableOpacity>);
                  }
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
          flexDirection:'row',
          justifyContent: 'center',
          alignItems: 'center',
      },
      nav:{
          flex:1,
          marginLeft:15,
          marginRight:15,
          marginTop:5,
          marginBottom:10,
          alignItems: 'center',
      },
      img:{
         width:width/4-30,
         height:width/4-30,
         marginBottom:10,
      },
      text:{
          fontSize:15,
          color:'#444444',
      }
});

module.exports = NavModule;