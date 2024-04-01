import { Field, Form } from 'houseform';
import React, { FC } from 'react';
import { ZodString } from 'zod';
import { ErrorContainer, StyledForm } from './Form.styled';
import Button from '../button/Button';
import { useTheme } from '@/app/providers/styled-components-provider';

type FormField = {
  name: string;
  placeholder: string;
  validation: ZodString;
};

type FormProps = {
  formValues: FormField[];
};

const HouseForm: FC<FormProps> = ({ formValues }) => {
  const { currentThemeVariant } = useTheme();

  return (
    <Form>
      {({ isValid, errors, errorsMap }) => (
        <StyledForm currentTheme={currentThemeVariant}>
          {formValues.map((field) => (
            <fieldset key={field.name}>
              <Field name={field.name} onChangeValidate={field.validation}>
                {({ value, setValue, onBlur }) => (
                  <div>
                    <input
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                      value={value}
                      onBlur={onBlur}
                      onChange={(e) => {
                        setValue(e.target.value);
                      }}
                      placeholder={field.placeholder}
                    />
                  </div>
                )}
              </Field>
            </fieldset>
          ))}

          {errors.length > 0 && (
            <>
              <div style={{ height: '2rem' }}></div>
              <ErrorContainer>
                {Object.entries(errorsMap).map(
                  ([key, value]) =>
                    value.length > 0 && (
                      <div>
                        <span>
                          {formValues.find(
                            (formValue) => key === formValue.name
                          )?.placeholder ?? key}
                        </span>
                        <span>&#8594;</span>
                        <span>{value}</span>
                      </div>
                    )
                )}
              </ErrorContainer>
            </>
          )}

          <div style={{ height: '2rem' }}></div>

          <Button shape='rectangle' size='L' disabled={!isValid} type='submit'>
            Submit
          </Button>
        </StyledForm>
      )}
    </Form>
  );
};

export default HouseForm;
