import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Text from '../components/Text';
import ImageLogo from '../components/ImageLogo';

import {login} from '../actions/authAction';

export function LoginScreen(props) {
  const {loginFunc, navigation} = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onClick = (googleAuth = false) => {
    loginFunc({username, password, googleAuth});
  };

  return (
    <View style={styles.container}>
      <View style={styles.topLogo}>
        <Image source={require('../assets/images/Logo(2).png')} />
        <Text style={styles.topLogoTitle} text="Tongkrongan Programmer" />
      </View>

      <View style={styles.formLogin}>
        <Text style={styles.greatingBig} text="Selamat datang," />
        <Text
          style={styles.greatingSmall}
          weight="Regular"
          text="Silahkan Masuk untuk melanjutkan"
        />

        <View style={styles.inputContainer}>
          <Text text="Username" style={styles.inputLabel} weight="Light" />
          <TextInput
            style={styles.textInput}
            placeholder="Masukkan username"
            defaultValue={username}
            onChange={value => setUsername(value.nativeEvent.text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text text="Password" style={styles.inputLabel} weight="Light" />
          <TextInput
            style={styles.textInput}
            placeholder="Masukkan password"
            defaultValue={password}
            onChange={value => setPassword(value.nativeEvent.text)}
          />
        </View>
        <TouchableOpacity
          style={styles.inputSubmit}
          activeOpacity={0.8}
          onPress={() => {
            onClick();
          }}>
          <Text text="Masuk" color="white" />
        </TouchableOpacity>
        <Text text="Atau" size={12} style={styles.atau} />
        <TouchableOpacity
          style={[styles.inputSubmit, styles.inputSubmitGoogle]}
          activeOpacity={0.8}
          onPress={() => {
            onClick(true);
          }}>
          <ImageLogo
            file={require('../assets/images/google-original.png')}
            size={24}
            margin={10}
          />
          <Text text="Masuk dengan Google" />
        </TouchableOpacity>

        <Text text="Belum punya akun?" size={12} />

        <TouchableOpacity
          style={[styles.inputSubmit, styles.inputSubmitGoogle]}
          activeOpacity={0.8}
          onPress={() => {
            navigation.push('Register');
          }}>
          <Text text="Buat akun" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const mapDispatchToProps = dispatch => ({
  loginFunc: data => dispatch(login(data)),
});

export default connect(
  null,
  mapDispatchToProps,
)(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topLogo: {
    marginVertical: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topLogoTitle: {
    fontFamily: 'Rubik-Medium',
    fontSize: 24,
    marginTop: 10,
  },
  formLogin: {
    flex: 2,
    color: '#424242',
    paddingHorizontal: 30,
  },
  greatingBig: {
    fontSize: 36,
  },
  greatingSmall: {
    fontSize: 18,
    marginTop: 1,
    marginBottom: 25,
  },
  inputContainer: {
    marginBottom: 15,
  },
  textInput: {
    height: 38,
    borderBottomColor: '#424242',
    borderBottomWidth: 2,
  },
  inputLabel: {
    fontSize: 11,
  },
  inputSubmit: {
    backgroundColor: '#0095F6',
    height: 40,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  atau: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 15,
  },
  inputSubmitGoogle: {
    marginTop: 10,
    backgroundColor: 'white',
    borderColor: '#424242',
    borderWidth: 1,
    flexDirection: 'row',
    marginBottom: 25,
  },
});
