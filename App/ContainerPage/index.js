
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as CounterActions from '../Action';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  Dimensions,
  PixelRatio
} from 'react-native';


let {width,height} = Dimensions.get('window');

let Search = require('../Components/search'),
    Swiper = require('../Components/swiper'),
    FocusImg = require('../Components/focus'),
    Product = require('../Components/product'),
    Nav = require('../Components/nav');


class Index extends Component {

  // constructor(props){ 
  //     super(props);
  //     this.homeState = {
  //         opacity:0,
  //         isRefreshing: false,
  //         loaded: 0,
  //         rowData: Array.from(new Array(1)).map(
  //           (val, i) => ({text: 'Initial row' + i, clicks: 0})),
  //     }
  // }

  componentWillMount(){
      this.homeState  = this.props.data.HomeState[0];
      this.updateTodo = this.props.updateTodo;
      
      this.data = this.props.data.FetchData[0];
       const {ajaxData,ajaxSucceed,ajaxFailed} = this.props;
       if(!this.data.loginInfo.login){
             ajaxData({url:'login',method:'GET',body:'phone=15810071768&password=1',succeed:ajaxSucceed,failed:ajaxFailed})
        }


  }

  componentDidMount(){
  }
  

  _onRefresh() {
      // this.setState({isRefreshing: true});
      this.updateTodo({isRefreshing:true});
      setTimeout(() => {
          const rowData = Array.from(new Array(1))
              .map((val, i) => ({
                text: 'Loaded row' + (+this.homeState.loaded + i),
                clicks: 0,
              }))
              .concat(this.homeState.rowData);

          this.updateTodo({
            loaded: this.homeState.loaded + 1,
            isRefreshing: false,
            rowData: rowData,
          });
      }, 2000);
  }


  _onClick(row) {
      row.clicks++;
      this.setState({
          rowData: this.homeState.rowData,
      });
  }

  _changeSearchBg(nativeObj){
      var scrollVal = nativeObj.nativeEvent.contentOffset.y,
          val = (scrollVal/250).toFixed(1);
      if(val<=0){
          this.updateTodo({opacity:0});
      }else if(val>=0.9){
          this.updateTodo({opacity:0.9});
      }else{
          this.updateTodo({opacity:val});
      }
  }

  _onPressButton(){
      this.updateTodo({a:345});
  }

  render() {
      if(this.data.loginInfo.login){
            console.log('已登录');
            return (
                <View style={styles.container}>
                    <ScrollView contentContainerStyle={styles.contentContainer}
                        scrollEventThrottle={200}
                        onScroll={this._changeSearchBg.bind(this)}
                        refreshControl={
                          <RefreshControl
                            refreshing={this.homeState.isRefreshing}
                            onRefresh={this._onRefresh.bind(this)}
                            tintColor="#ff0000"
                            title="Loading..."
                            colors={['#ff0000', '#00ff00', '#0000ff']}
                            progressBackgroundColor="#ffff00"
                          />
                        }
                    >
                        <Swiper swiperData={this.props} />
                        <Nav navData={this.props} />
                        <FocusImg focusData={this.props}  />
                        <Product productData={this.props} />
                    </ScrollView>
                    {!this.homeState.isRefreshing && <Search  opacity={this.homeState.opacity}/>} 
                </View>
            );
          }else{
            console.log('没登录');
              return(
                  <View  style={styles.container1}><Text style={{color:'yellow',fontSize:30}}>正在登录中.....</Text></View>
                );
          }
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    container1:{
          flex:1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:'red'
    },
    contentContainer: {
    }
});

const mapStateToProps = state => ({data:state});
const mapDispatchToProps = dispatch => bindActionCreators(CounterActions,dispatch)


module.exports =  connect(mapStateToProps,mapDispatchToProps)(Index);
