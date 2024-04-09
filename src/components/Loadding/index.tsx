import { PureComponent, ReactNode } from "react";
import loadingManager from "./loading-manager";
import { Spin } from "antd";

export const showLoading = () => {
  const ref = loadingManager.getDefault();
  if (!!ref) {
    ref.showLoading();
  }
};

export const hideLoading = () => {
  const ref = loadingManager.getDefault();
  if (!!ref) {
    ref.hideLoading();
  }
};

export default class LoadingModal extends PureComponent<
  {},
  { visible: boolean }
> {
  state = { visible: false };
  //   loadingTimeout: any = null;
  hideLoading = () => {
    // if(this.loadingTimeout) clearTimeout(this.loadingTimeout)
    this.setState({
      visible: false,
    });
  };

  showLoading = () => {
    this.setState({
      visible: true,
    });
  };
  render(): ReactNode {
    return (
      <Spin spinning={this.state.visible} fullscreen tip="Loadding..."></Spin>
    );
  }
}
