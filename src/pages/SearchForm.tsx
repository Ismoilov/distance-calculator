import { useState, useEffect } from 'react';
import { Row, Col, Form, Select, Button } from 'antd';

import Card from '../components/Card';
import cities from '../cities';

const { Option } = Select;
const refactoredCities = cities.map(city => {
  return {
    label: city[0],
    lat: city[1],
    long: city[2],
  }
});

const SearchForm = () => {
  const [originCity, setOriginCity] = useState([]);
  const [interCities, setInterCities] = useState([]);
  const [destinationCity, setDestinationCity] = useState([]);
  const [originCityLoader, setOriginCityLoader] = useState(false);
  const [interCitiesLoader, setInterCitiesLoader] = useState(false);
  const [destinationCityLoader, setDestinationCityLoader] = useState(false);

  useEffect(() => {
    if (originCity.length !== 0) {
      setOriginCityLoader(true);
      const getData = setTimeout(() => {
        setOriginCityLoader(false);
      }, 1000);
      return () => clearTimeout(getData);
    }
  }, [originCity])

  useEffect(() => {
    if (interCities.length !== 0) {
      setInterCitiesLoader(true);
      const getData = setTimeout(() => {
        setInterCitiesLoader(false);
      }, 1000);
      return () => clearTimeout(getData);
    }
  }, [interCities])

  useEffect(() => {
    if (destinationCity.length !== 0) {
      setDestinationCityLoader(true);
      const getData = setTimeout(() => {
        setDestinationCityLoader(false);
      }, 1000);
      return () => clearTimeout(getData);
    }
  }, [destinationCity])

  const selectOriginCityHandler = (lat: string, data: any) => {
    setOriginCity(data)
  };

  const onFinish = (values: any) => {
    console.log(originCity, interCities);
  };

  return (
    <Card>
      <Form
        layout='vertical'
        name="basic"
        onFinish={onFinish}
      >
        <Row>
          <Col md={24}>
            <Form.Item
              label="Origin city"
              name="originCity"
              rules={[{ required: true, message: 'Please select your origin city!' }]}
            >
              <Select
                showSearch
                loading={originCityLoader}
                placeholder="Origin city"
                optionFilterProp="children"
                onSelect={selectOriginCityHandler}
                getPopupContainer={trigger => trigger.parentNode}
                filterOption={(input, option) => {
                  return (option?.children?.toString() ?? '').toLowerCase().includes(input.toLowerCase())
                }}
              >
                {refactoredCities.map(city => <Option key={city.lat} value={city.lat} long={city.long}>{city.label}</Option>)}
              </Select>
            </Form.Item>
            <Form.Item
              label="Intermediate cities"
              name="interCities"
              rules={[{ required: true, message: 'Please select your Intermediate cities!' }]}
            >
              <Select
                loading={interCitiesLoader}
                showSearch
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                placeholder="Please select"
                getPopupContainer={trigger => trigger.parentNode}
                onChange={(_, data: any) => {
                  setInterCities(data)
                }}
                filterOption={(input, option) => {
                  return (option?.children?.toString() ?? '').toLowerCase().includes(input.toLowerCase())
                }}
              >
                {refactoredCities.map(city => <Option key={city.lat} value={city.lat} long={city.long}>{city.label}</Option>)}
              </Select>
            </Form.Item>
            <Form.Item
              label="Destination city"
              name="destinationCity"
              rules={[{ required: true, message: 'Please select your destination city!' }]}
            >
              <Select
                showSearch
                loading={destinationCityLoader}
                placeholder="Destination city"
                optionFilterProp="children"
                onSelect={(_, data: any) => setDestinationCity(data)}
                getPopupContainer={trigger => trigger.parentNode}
                filterOption={(input, option) => {
                  return (option?.children?.toString() ?? '').toLowerCase().includes(input.toLowerCase())
                }}
              >
                {refactoredCities.map(city => <Option key={city.lat} value={city.lat} long={city.long}>{city.label}</Option>)}
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit'>Submit</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default SearchForm;
