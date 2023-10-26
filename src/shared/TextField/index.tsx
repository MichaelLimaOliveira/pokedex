import React from 'react';
import { Controller } from 'react-hook-form';

import { theme } from '../themes/styles';
import {
  Container,
  ErrorMessageText,
  InputContainer,
  NormalIcon,
  NormalText,
  TextInputField,
} from './styles';

export function TextField({
  control,
  label,
  iconName,
  name,
  rules = {},
  editable = true,
  ...rest
}: any) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <Container>
          {label && <NormalText>{label}</NormalText>}
          <InputContainer>
            {iconName && <NormalIcon size={22} name={iconName} />}
            <TextInputField
              isEditable={editable ? true : false}
              value={value}
              editable={editable}
              autoCorrect={false}
              onBlur={onBlur}
              onChangeText={onChange}
              placeholderTextColor={theme.colors.inputText}
              style={{ color: theme.colors.inputText }}
              {...rest}
              underlineColor="transparent"
              underlineStyle="none"
            />
          </InputContainer>
          {error && (
            <ErrorMessageText>{error.message || 'Error'}</ErrorMessageText>
          )}
        </Container>
      )}
    />
  );
}
