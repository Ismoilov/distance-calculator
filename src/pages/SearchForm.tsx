import { Row, Col, Form, Select } from 'antd';

import Card from '../components/Card';
import cities from '../cities';

const SearchForm = () => {
  const refactoredCities = cities.map(city => {
    return {
      value: city[0],
      label: city[0],
    }
  });
  
  console.log(refactoredCities);
  
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <Card>
      <Form
        layout='vertical'
        name="basic"
        // labelCol={{ span: 8 }}
        // wrapperCol={{ span: 16 }}
        onFinish={onFinish}
      >
        <Row>
          <Col md={24}>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Select
                showSearch
                placeholder="Select a person"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label.toString() ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={refactoredCities}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default SearchForm;
