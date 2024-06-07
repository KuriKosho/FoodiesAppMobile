import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { colors, SIZES } from '../../constants/theme';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import WidthSpace from '../../components/Reusable/WidthSpacer';
import HeightSpace from '../../components/Reusable/HeightSpacer';
import { ReusableBtn } from '../../components';

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Mật khẩu cần dài ít nhất 8 ký tự")
    .required('Required'),
  email: Yup.string()
    .email("Cung cấp một địa chỉ email hợp lệ")
    .required('Required')
});

const Signin = () => {
  const [loader, setLoader] = useState('');
  const [responseData, setResponseData] = useState('');
  const [obsecureText, setObsecureText] = useState(false);

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(value) => {
          console.log(value);
        }}
      >
        {({
          handleChange,
          touched,
          handleSubmit,
          values,
          errors,
          isValid,
          setFieldTouched
        }) => (
          <View>
            <View style={styles.wrapper}>
              <Text style={styles.label}>Email</Text>
              <View>
                <View style={styles.inputWrapper(touched.email ? colors.lightBlue : colors.lightGrey)}>
                  <MaterialCommunityIcons
                    name="email-outline"
                    size={20}
                    color={colors.gray}
                  />
                  <WidthSpace width={10} />
                  <TextInput
                    placeholder='Nhập email'
                    onFocus={() => { setFieldTouched('email') }}
                    onBlur={() => { setFieldTouched('email', "") }}
                    value={values.email}
                    onChangeText={handleChange('email')}
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={{ flex: 1 }}
                  />
                </View>
                {touched.email && errors.email && (
                  <Text style={styles.errorMessage}>{errors.email}</Text>
                )}
              </View>
            </View>

            <View style={styles.wrapper}>
              <Text style={styles.label}>Mật khẩu</Text>
              <View>
                <View style={styles.inputWrapper(touched.password ? colors.lightBlue : colors.lightGrey)}>
                  <MaterialCommunityIcons
                    name="lock-outline"
                    size={20}
                    color={colors.gray}
                  />
                  <WidthSpace width={10} />
                  <TextInput
                    secureTextEntry={obsecureText}
placeholder='Nhập mật khẩu'
                    onFocus={() => { setFieldTouched('password') }}
                    onBlur={() => { setFieldTouched('password', "") }}
                    value={values.password}
                    onChangeText={handleChange('password')}
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={{ flex: 1 }}
                  />
                  <TouchableOpacity onPress={() => {
                    setObsecureText(!obsecureText)
                  }}>
                    <MaterialCommunityIcons
                      name={obsecureText ? "eye-outline" : "eye-off-outline"}
                      size={18}
                    />
                  </TouchableOpacity>
                </View>
                {touched.password && errors.password && (
                  <Text style={styles.errorMessage}>{errors.password}</Text>
                )}
              </View>
            </View>

            <HeightSpace height={20} />

            <ReusableBtn
              onPress={handleSubmit}
              btnText={"Đăng nhập"}
              width={SIZES.width - 40}
              backgroundColor={colors.green}
              borderColor={colors.green}
              borderWidth={0}
              textColor={colors.white}
            />
          </View>
        )}
      </Formik>
    </View>
  )
}

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.lightWhite
  },
  inputWrapper: (borderColor) => ({
    borderColor: borderColor,
    backgroundColor: colors.lightWhite,
    borderWidth: 1,
    height: 50,
    borderRadius: 12,
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center" // Fix typo
  }),
  wrapper: {
    marginBottom: 20
  },
  label: {
    fontFamily: 'normal',
    fontSize: SIZES.small,
    marginBottom: 5,
    marginEnd: 5,
    textAlign: 'right',
  },
  errorMessage: {
    color: colors.red,
    fontSize: SIZES.small,
    fontFamily: 'normal',
    marginTop: 5,
    marginLeft: 5,
  }
});
