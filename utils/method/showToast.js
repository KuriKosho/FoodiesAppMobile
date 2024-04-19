import { ToastAndroid } from 'react-native';

function showToast(message) {
  ToastAndroid.show(message, ToastAndroid.SHORT);
}

export default showToast;