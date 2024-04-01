import { Field, Form } from 'houseform';
import React, { FC } from 'react';
import { ZodString } from 'zod';
import { StyledForm } from './Form.styled';
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
      {({ isValid }) => (
        <StyledForm currentTheme={currentThemeVariant}>
          {formValues.map((field) => (
            <fieldset>
              <Field
                key={field.name}
                name={field.name}
                onChangeValidate={field.validation}
              >
                {({ value, setValue, onBlur, errors }) => (
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
                    {errors.map((error) => (
                      <p key={error}>{error}</p>
                    ))}
                  </div>
                )}
              </Field>
            </fieldset>
          ))}

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
