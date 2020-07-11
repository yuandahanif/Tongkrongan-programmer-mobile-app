import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Text from '../components/Text';
import ImageLogo from '../components/ImageLogo';
import {connect} from 'react-redux';
import {register, loginWithGoogle} from '../actions/authAction';

function RegisterScreen(props) {
  const {registerFunc, navigation, loginGoogle} = props;
  const [username, setUsername] = useState('');
  const [usernameNull, setUsernameNull] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordNull, setPasswordNull] = useState(false);
  const [email, setEmail] = useState('');
  const [emailNull, setEmailNull] = useState(false);
  const [password2, setPassword2] = useState('');
  const [samePassword, setsamePassword] = useState(true);

  const onClick = (googleAuth = false) => {
    if (googleAuth) {
      loginGoogle();
    } else if (username !== '' && samePassword && password !== '') {
      registerFunc({
        username,
        email,
        password,
        googleAuth,
      });
      navigation.push('Login');
    } else {
      setUsernameNull(username === '');
      setEmailNull(email === '');
      setPasswordNull(password === '');
      setsamePassword(password2 !== '');
    }
  };

  useEffect(() => {
    setsamePassword(password === password2);
  }, [password2]);

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
          text="Silahkan Mendaftar"
        />

        <View style={styles.inputContainer}>
          <Text text="Username" style={styles.inputLabel} weight="Light" />
          <TextInput
            style={styles.textInput}
            placeholder="Masukkan username"
            value={username}
            onChange={value => setUsername(value.nativeEvent.text)}
          />
          <Text
            size={11}
            weight="Medium"
            style={[
              {display: usernameNull ? 'flex' : 'none'},
              styles.failedText,
            ]}>
            * Username harus di isi
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Text text="Email" style={styles.inputLabel} weight="Light" />
          <TextInput
            style={styles.textInput}
            placeholder="Masukkan Email"
            value={email}
            onChange={value => setEmail(value.nativeEvent.text)}
          />
          <Text
            size={11}
            weight="Medium"
            style={[{display: emailNull ? 'flex' : 'none'}, styles.failedText]}>
            * Email harus di isi
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Text text="Password" style={styles.inputLabel} weight="Light" />
          <TextInput
            style={styles.textInput}
            placeholder="Masukkan password"
            value={password}
            onChange={value => setPassword(value.nativeEvent.text)}
          />
          <Text
            size={11}
            weight="Medium"
            style={[
              {display: passwordNull ? 'flex' : 'none'},
              styles.failedText,
            ]}>
            * Password harus di isi
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Text
            text="Masukan ulang password"
            style={styles.inputLabel}
            weight="Light"
          />
          <TextInput
            style={[styles.textInput, samePassword ? {} : {color: 'red'}]}
            placeholder="Masukkan ulang password"
            value={password2}
            onChange={value => setPassword2(value.nativeEvent.text)}
          />
          <Text
            size={11}
            weight="Medium"
            style={[
              {display: samePassword ? 'none' : 'flex'},
              styles.failedText,
            ]}>
            *Password tidak sama!
          </Text>
        </View>
        <TouchableOpacity
          style={styles.inputSubmit}
          activeOpacity={0.8}
          onPress={() => {
            onClick();
          }}>
          <Text text="Daftar" color="white" />
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

        <Text text="Sudah punya akun?" size={12} />

        <TouchableOpacity
          style={[styles.inputSubmit, styles.inputSubmitGoogle]}
          activeOpacity={0.8}
          onPress={() => {
            navigation.push('Login');
          }}>
          <Text text="Masuk" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const mapStateToProps = state => ({
  username: state.authReducer.username,
  password: state.password,
  email: state.email,
});
const mapDispatchToProps = dispatch => ({
  registerFunc: data => dispatch(register(data)),
  loginGoogle: () => dispatch(loginWithGoogle()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topLogo: {
    marginVertical: 10,
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
    flex: 3.5,
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
  failedText: {
    color: 'red',
    marginTop: 5,
  },
});
