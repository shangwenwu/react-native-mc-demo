

import React, {
  Component,
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';

let {width,height} = Dimensions.get('window');

class SearchModule extends Component {

    _onPressButton(){

        alert('abc');

    }
    render() {
          return (
              <TouchableOpacity style={[styles.searchBox,{backgroundColor:'rgba(70, 190, 130, '+this.props.opacity+')'}]} onPress={this._onPressButton}>
                  <View style={styles.search}>
                      <Image style={styles.searchIcon} source={require('../Images/search.jpg')} />
                      <Text style={styles.searchText}>搜索菜品名称</Text>
                  </View>
              </TouchableOpacity>
          );
    }
    
}

const styles = StyleSheet.create({
      searchBox:{
          position:'absolute', 
          top:0,
          width:width,
          height:70,
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop:10,
      },
      search:{
          backgroundColor:'rgba(255, 255, 255, 0.9)',
          width:width*0.7,
          height:30,
          borderRadius:15,
          flexDirection:'row',
          justifyContent: 'center',
          alignItems: 'center',
      },
      searchIcon:{
          backgroundColor:'purple',
          width:13,
          height:13,
          marginRight:5,
      },
      searchText:{
          color:'#919090'
      },
});

module.exports = SearchModule;