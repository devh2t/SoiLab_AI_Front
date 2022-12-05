import React from 'react';
import { View, Image } from 'react-native';
import { Text, Button, Avatar } from 'react-native-paper';
import images from '../../config/images';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { useStore } from 'app/store';

const Login: React.FC = () => {
  const setIsLoggedIn = useStore(state => state.setIsLoggedIn);

  const onLogin = () => {
    setIsLoggedIn(true);
  };
  const onForgot = () => NavigationService.navigate('ForgotPassword');
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={images.icons.logo}
          resizeMode="contain"
        />
        <Text style={styles.login}>Bienvenue chez SoiLab AI</Text>
        <Button icon="login" mode="outlined" onPress={onLogin}>
          Se connecter
        </Button>
        <Button
          mode="text"
          style={styles.forgot}
          labelStyle={styles.labelStyle}
          onPress={onForgot}>
          Forgot Password
        </Button>
      </View>
    </View>
  );
};

export default Login;
