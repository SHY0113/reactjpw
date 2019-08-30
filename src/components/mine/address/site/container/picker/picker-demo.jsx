import React from 'react';
import { Picker, Popup} from '../../components';
import { PickerAddress } from '../../components-ext';
import './index.scss';

export default class PickerDemo extends React.Component {
  
  constructor() {
    super();

    this.defaultAddress = ['北京市','北京市','东城区'];
    this.state = {
      userPickerVisible: false,
      addressPickerVisible: false,
      defaultValue: {name: 'Lincal', value: 5},
      address: this.defaultAddress,
    };

    // this.userData =  {
    //   list: [
    //     {name: '杜保坤', value: 0},
    //     {name: '况宏瑞', value: 1},
    //     {name: '盘维', value: 2},
    //     {name: '杨泉', value: 3},
    //     {name: '福娃', value: 4},
    //     {name: 'Lincal', value: 5},
    //     {name: '记忆残骸', value: 6},
    //     {name: 'Raoh', value: 7},
    //     {name: '铁甲飞龙', value: 8},
    //     {name: '吴泽兵', value: 9},
    //     {name: '邱福龙', value: 10},
    //     {name: '小泥巴', value: 11},
    //   ],
    //   defaultValue: this.state.defaultValue,
    //   displayValue (item) {
    //     return item.name;
    //   }
    // };

  }

  // user选择
  // showUserPicker (e) {
  //   e.nativeEvent.stopImmediatePropagation();
  //   this.setState({userPickerVisible: true});
  // }

  // handleChangeUser (data) {
  //   data = data || {}
  //   this.userData.defaultValue = data;
  //   this.setState({defaultValue: data});
  // }

  // closeUserPicker () {
  //   this.setState({userPickerVisible: false});
  // }

  // cancelUserPicker () {
  //   this.userData.defaultValue = {};
  //   this.setState({
  //     userPickerVisible: false,
  //     defaultValue: {}
  //   });
  // }

  // 地址选择
  showAddressPicker (e) {
    e.nativeEvent.stopImmediatePropagation();
    this.setState({addressPickerVisible: true});
  }

  handleChangeAddress (address) {
    this.setState({address: address});
  }

  closeAddressPicker (address) {
    this.setState({
      address: address,
      addressPickerVisible: false,
    });
  }

  cancelAddressPicker () {
    this.setState({
      address: this.defaultAddress,
      addressPickerVisible: false,
    });
  }

  render() {
    return (
      <div className = "picker-demo">
        {/* <div className="item">
          { this.state.defaultValue.name }
        </div> */}
        {/* <div className="single-picker">
          <Popup
            onCancel={this.cancelUserPicker.bind(this)}
            onConfirm={this.closeUserPicker.bind(this)}
            visible={this.state.userPickerVisible}>
            <Picker
              onChange={this.handleChangeUser.bind(this)}
              data={this.userData}
            />
          </Popup>
        </div> */}

        <PickerAddress
          defaultValue={this.state.address}
          onCancel={this.cancelAddressPicker.bind(this)}
          onConfirm={this.closeAddressPicker.bind(this)}
          visible={this.state.addressPickerVisible}
          onChange={this.handleChangeAddress.bind(this)}>
        </PickerAddress>

        {/* <div className="button-wrap">
          <button
            type="button"
            onClick={this.showUserPicker.bind(this)}
            className="btn button-primary">
              单向选择
          </button>
        </div> */}

        <div className="item">
          { this.state.address }
        </div>

        <div className="button-wrap">
          <button
            type="button"
            onClick={this.showAddressPicker.bind(this)}
            className="btn button-primary">
              选择地址
          </button>
        </div>

      </div>
    )
  }
}