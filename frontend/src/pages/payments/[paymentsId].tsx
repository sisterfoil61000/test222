import { mdiChartTimelineVariant, mdiUpload } from '@mdi/js';
import Head from 'next/head';
import React, { ReactElement, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';

import CardBox from '../../components/CardBox';
import LayoutAuthenticated from '../../layouts/Authenticated';
import SectionMain from '../../components/SectionMain';
import SectionTitleLineWithButton from '../../components/SectionTitleLineWithButton';
import { getPageTitle } from '../../config';

import { Field, Form, Formik } from 'formik';
import FormField from '../../components/FormField';
import BaseDivider from '../../components/BaseDivider';
import BaseButtons from '../../components/BaseButtons';
import BaseButton from '../../components/BaseButton';
import FormCheckRadio from '../../components/FormCheckRadio';
import FormCheckRadioGroup from '../../components/FormCheckRadioGroup';
import FormFilePicker from '../../components/FormFilePicker';
import FormImagePicker from '../../components/FormImagePicker';
import { SelectField } from '../../components/SelectField';
import { SelectFieldMany } from '../../components/SelectFieldMany';
import { SwitchField } from '../../components/SwitchField';
import { RichTextField } from '../../components/RichTextField';

import { update, fetch } from '../../stores/payments/paymentsSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

const EditPayments = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    amount: '',

    order: null,

    status: '',
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { payments } = useAppSelector((state) => state.payments);

  const { paymentsId } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: paymentsId }));
  }, [paymentsId]);

  useEffect(() => {
    if (typeof payments === 'object') {
      setInitialValues(payments);
    }
  }, [payments]);

  useEffect(() => {
    if (typeof payments === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach((el) => (newInitialVal[el] = payments[el]));

      setInitialValues(newInitialVal);
    }
  }, [payments]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: paymentsId, data }));
    await router.push('/payments/payments-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit payments')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit payments'}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={(values) => handleSubmit(values)}
          >
            <Form>
              <FormField label='Amount'>
                <Field type='number' name='amount' placeholder='Amount' />
              </FormField>

              <FormField label='Order' labelFor='order'>
                <Field
                  name='order'
                  id='order'
                  component={SelectField}
                  options={initialValues.order}
                  itemRef={'orders'}
                  showField={'status'}
                ></Field>
              </FormField>

              <FormField label='Status' labelFor='status'>
                <Field name='status' id='status' component='select'>
                  <option value='Processed'>Processed</option>

                  <option value='Pending'>Pending</option>

                  <option value='Refunded'>Refunded</option>
                </Field>
              </FormField>

              <BaseDivider />
              <BaseButtons>
                <BaseButton type='submit' color='info' label='Submit' />
                <BaseButton type='reset' color='info' outline label='Reset' />
                <BaseButton
                  type='reset'
                  color='danger'
                  outline
                  label='Cancel'
                  onClick={() => router.push('/payments/payments-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

EditPayments.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'UPDATE_PAYMENTS'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default EditPayments;
