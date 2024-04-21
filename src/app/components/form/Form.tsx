import { Field, Form as HouseForm } from 'houseform';
import React from 'react';
import { ZodString } from 'zod';
import { ErrorContainer, ErrorIcon, StyledForm } from './Form.styled';
import Button from '../button/Button';
import { useTheme } from '@/app/providers/styled-components-provider';

type FormField = {
  name: string;
  placeholder: string;
  validation: ZodString;
};

type FormProps<T> = {
  formValues: FormField[];
  onSubmit: (body: T) => void | Promise<void>;
};

function Form<T>({ formValues, onSubmit }: FormProps<T>) {
  const { currentThemeVariant } = useTheme();

  return (
    <HouseForm
      onSubmit={(values) => {
        void onSubmit(values as T);
      }}
    >
      {({ isValid, errors, errorsMap, submit }) => (
        <StyledForm
          currentTheme={currentThemeVariant}
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={async (event) => {
            event.preventDefault();
            await submit();
          }}
        >
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
                      <div key={key}>
                        <span>
                          {formValues.find(
                            (formValue) => key === formValue.name
                          )?.placeholder ?? key}
                        </span>
                        <ErrorIcon>&#8594;</ErrorIcon>
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
    </HouseForm>
  );
}

export default Form;
