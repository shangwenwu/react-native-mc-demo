

import React, {
  Component,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  PixelRatio,
  Image
} from 'react-native';

let {width,height} = Dimensions.get('window');


class ProductModule extends Component {

    
    componentWillMount() {
        console.log(this.props.productData.data)
        // const {ajaxData,ajaxSucceed,ajaxFailed} = this.props.productData;

        // if(!this.props.productData.data.FetchData[0].productInfo.product){
        //      ajaxData({url:'product',method:'get',succeed:ajaxSucceed,failed:ajaxFailed})
        // }

        
    }

    _onPressButton(){
        alert('abc');
    }

    render() {
      if(this.props.productData.data.FetchData[0].productInfo.ret){
          const items = this.props.productData.data.FetchData[0].productInfo.data.ci_items.map((row, ii) => {
                let middle = {};
                if(ii == 1 || (ii-1)%3 == 0 ){
                    middle = styles.middle;
                }
                return (<TouchableOpacity  key={ii}  onPress={this._onPressButton}>
                            <View style={[styles.item,middle]}>
                                  <Image style={styles.img} source={{uri:row.pic}} />
                                  <View  style={{paddingTop:5,height:42,overflow:'hidden'}}>
                                      <Text style={styles.name}>{ii}{row.name}({row.sell_brand})</Text>
                                  </View>
                                      <Text style={styles.price}>{row.price}元</Text>
                            </View>
                        </TouchableOpacity>);
          });
          return (
                <View style={styles.container}>
                    <View style={styles.description}>
                        <Image style={{width:150,height:30,marginTop:-3,marginRight:10}} source={require('../Images/img2.jpg')} />
                        <Text style={{color:'#454545',fontSize:16}}>春鲜节特惠</Text>
                    </View>
                    <View style={styles.productContent}>
                          {items}
                    </View>
                </View>
          );

      }else{
          return <View><Text>暂无产品数据！</Text></View>
      }
    }
    
}

const styles = StyleSheet.create({
      productContent:{
          borderTopWidth:2/PixelRatio.get(),
          borderColor:'#eaf3ee',
          borderStyle:'solid',
          flexDirection:'row',
          flexWrap:'wrap'
      },
      item:{
          backgroundColor:'white',
          width:width/3,
          height:width/1.9,
          padding:10,
          borderBottomWidth:2/PixelRatio.get(),
          borderColor:'#eaf3ee',
          borderStyle:'solid',
      },
      img:{
          height:width/3-20,
          width:width/3-20
      },
      name:{
          color:'#454545',
          fontSize:16
      },
      price:{
          color:'#f04500',
          fontSize:20,
          paddingTop:10
      },
      middle:{
          borderLeftWidth:2/PixelRatio.get(),
          borderRightWidth:2/PixelRatio.get(),
          borderColor:'#eaf3ee',
          borderStyle:'solid',
      },
      description:{
          flexDirection:'row',
          alignItems: 'center',
          height:50,
          paddingLeft:10,
      }
});

module.exports = ProductModule;