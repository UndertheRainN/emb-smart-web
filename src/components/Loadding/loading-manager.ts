class LoadingManager {
  defaultLoading: any = null;
  register(_ref: any) {
    if (!this.defaultLoading) {
      this.defaultLoading = _ref;
    }
  }
  unRegister(_ref: any) {
    if (this.defaultLoading?.id === _ref?.id) {
      this.defaultLoading = null;
    }
  }
  getDefault() {
    return this.defaultLoading;
  }
}
export default new LoadingManager();
