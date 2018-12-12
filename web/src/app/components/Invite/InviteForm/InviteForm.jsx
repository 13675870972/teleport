/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { Auth2faTypeEnum } from 'app/services/enums';
import { Card, Input, Label, Button } from '../../../../shared/components';
import { Formik } from 'formik';
import Invite2faData from './TwoFaInfo';

const U2F_ERROR_CODES_URL = 'https://developers.yubico.com/U2F/Libraries/Client_error_codes.html';

const needs2fa = auth2faType => !!auth2faType && auth2faType !== Auth2faTypeEnum.DISABLED;

export class InviteForm extends React.Component {

  static propTypes = {
    auth2faType: PropTypes.string,
    authType: PropTypes.string,
    onSubmitWithU2f: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    attempt: PropTypes.object.isRequired
  }

  initialValues = {
    password: '',
    passwordConfirmed: '',
    token: ''
  }

  onValidate = values => {
    const { password, passwordConfirmed } = values;
    const errors = {};

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Enter at least 6 characters';
    }

    if (!passwordConfirmed) {
      errors.passwordConfirmed = 'Please confirm your password'
    }else if (passwordConfirmed !== password) {
      errors.passwordConfirmed = 'Password does not match'
    }

    if (this.isOTP() && !values.token) {
      errors.token = 'Token is required';
    }

    return errors;
  }

  onSubmit = values => {
    const { user, password, token } = values;
    if (this.props.auth2faType === Auth2faTypeEnum.UTF) {
      this.props.onSubmitWithU2f(user, password);
    } else {
      this.props.onSubmit(user, password, token);
    }
  }

  renderNameAndPassFields({ values, errors, touched, handleChange }) {
    const passError = touched.password && errors.password;
    const passConfirmedError = touched.passwordConfirmed && errors.passwordConfirmed;
    const tokenError = errors.token && touched.token;
    const { user } = this.props.invite;


    return (
      <React.Fragment>
        <UserName>{user}</UserName>

        <Label hasError={passError}>
          {passError || "Password"}
        </Label>
        <Input
          hasError={passError}
          value={values.password}
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Password"
        />
        <Label hasError={passConfirmedError}>
          {passConfirmedError || "Confirm Password"}
        </Label>
        <Input
          hasError={passConfirmedError}
          value={values.passwordConfirmed}
          onChange={handleChange}
          type="password"
          name="passwordConfirmed"
          placeholder="Password"
        />
        {this.isOTP() && (
          <React.Fragment>
            <Label mt={3} mb={1} hasError={tokenError}>
              {(tokenError && errors.token) || "Two factor token"}
            </Label>
            <Input id="token" fontSize={0}
              hasError={tokenError}
              autoComplete="off"
              value={values.token}
              onChange={handleChange}
              placeholder="Two factor token (Google Authenticator)"
            />
          </React.Fragment>
        ) }
      </React.Fragment>
    )
  }

  isOTP() {
    let { auth2faType } = this.props;
    return needs2fa(auth2faType) && auth2faType === Auth2faTypeEnum.OTP;
  }

  render2faFields() {
    let { auth2faType } = this.props;
    if (needs2fa(auth2faType) && auth2faType === Auth2faTypeEnum.OTP) {
      return (
      <div className="form-group">
        <input
          autoComplete="off"
          value={this.state.token}
          onChange={e => this.onChangeState('token', e.target.value)}
          className="form-control required"
          name="token"
          placeholder="Two factor token (Google Authenticator)"/>
      </div>
      )
    }

    return null;
  }

  renderSubmitBtn(onClick) {
    const { isProcessing } = this.props.attempt;
    const $helpBlock = isProcessing && this.props.auth2faType === Auth2faTypeEnum.UTF ? (
        "Insert your U2F key and press the button on the key"
    ) : null;

    const isDisabled = isProcessing;

    return (
      <>
        <Button
          block
          disabled={isDisabled}
          size="large"
          type="submit"
          onClick={onClick}
          mt={4}>
          Create My Teleport Account
      </Button>
      {$helpBlock}
      </>
    )
  }

  render() {
    const { auth2faType, invite, attempt } = this.props;
    const { isFailed, message } = attempt;
    const $error = isFailed ? <ErrorMessage message={message} /> : null;
    const has2FA = needs2fa(auth2faType);

    return (
      <Formik
        validate={this.onValidate}
        onSubmit={this.onSubmit}
        initialValues={this.initialValues}
      >
        {
          props => (
            <Card bg="secondary" mt="4" mb="4" mr="auto" ml="auto" width="456px" p="5">
              {this.renderNameAndPassFields(props)}
              {this.renderSubmitBtn(props.handleSubmit)}
              {$error}
              {has2FA &&
                <Invite2faData
                  auth2faType={auth2faType}
                  qr={invite.qr}
                />
              }
            </Card>
          )
        }
        </Formik>
    )
  }
}

export const ErrorMessage = ({ message }) => {
  message = message || '';
  if(message.indexOf('U2F') !== -1 ) {
    return (
      <label className="grv-invite-login-error">
        {message}
        <br />
        <small className="grv-invite-login-error-u2f-codes">
          <span>click <a target="_blank" href={U2F_ERROR_CODES_URL}>here</a> to learn more about U2F error codes
            </span>
        </small>
      </label>
    )
  }

  return (
    <label className="error">{message} </label>
  )
}


const UserName = styled.div`
  font-size: 20px;
  font-weight: bold;
  line-height: 40px;
  margin: 0 0 16px 0;
`

export default InviteForm;