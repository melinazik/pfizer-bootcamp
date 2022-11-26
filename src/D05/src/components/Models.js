import { useState } from "react";
// import Slider from 'react-input-slider';
import {
  Card,
  Typography,
  Form,
  Input,
  Select,
  Radio,
  Switch,
  Button,
  Divider,
} from "antd";
import { makeModelsPost } from "../api/api";

const { Title } = Typography;
const { Option } = Select;

const formValuesInitialState = {
  
};

const Models = () => {
  const [formValues, setFormValues] = useState(formValuesInitialState);
  const [models, setModels] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value); // Uncomment to view name/value pair
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSelectChange1 = (value) => {
    setFormValues({ ...formValues, room_type: value });
  };

  const handleSelectChange2 = (value) => {
    setFormValues({ ...formValues, bathroom_text: value });
  };

  const handleMultipleSelectChange = (value) => {
    setFormValues({ ...formValues, amenities: value });
  };

  const handleSelectChange3 = (value) => {
    setFormValues({ ...formValues, neighbourhood_cleansed: value });
  };
  const handleSwitchChange1 = (value) => {
    setFormValues({ ...formValues, host_is_superhost: value });
  };
 
  const resetForm = () => {
    setFormValues(formValuesInitialState);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    makeModelsPost(formValues).then((responseData) => {
      console.log(formValues);
      setModels(responseData);
  });
  };

  return (
    <Card>
      <Title>Complete the Form</Title>
      <form>
        <Form.Item label="No. of accommodates" >
         
          <Input
          
            id='accommodates'
            placeholder="Type a number"
            name="accommodates"
            value={formValues.accommodates}
            onChange={handleInputChange}
          />
          
        </Form.Item>

        <Form.Item label="No. of Bedrooms" >
          
          <Input
            id='bedrooms'
            placeholder="Type a number"
            name="bedrooms"
            value={formValues.bedrooms}
            onChange={handleInputChange}
          />
        </Form.Item>

        <Form.Item label="No. of Beds" >
          
          <Input
            id='beds'
            placeholder="Type a number"
            name="beds"
            value={formValues.beds}
            onChange={handleInputChange}
          />
        </Form.Item>

        <Form.Item label="No. of Reviews" >
          
          <Input
            id='number_of_reviews'
            placeholder="Type a number"
            name="number_of_reviews"
            value={formValues.number_of_reviews}
            onChange={handleInputChange}
          />
        </Form.Item>

        <Form.Item label="Minimum Nights" >
          
          <Input
            id='minimum_nights'
            placeholder="Type a number"
            name="minimum_nights"
            value={formValues.minimum_nights}
            onChange={handleInputChange}
          />
        </Form.Item>

        <Form.Item label="Type of Airbnb">
          <Select
            name="room_type"
            defaultValue=""
            value={formValues.room_type}
            onChange={handleSelectChange1}
          >
            <Option value="">Choose an option</Option>
            <Option value="Home or apt">Home or Apartment</Option>
            <Option value="Hotel room">Hotel Room</Option>
            <Option value="Private room">Private Room</Option>
            <Option value="Shared room">Shared Room</Option>
          </Select>
        </Form.Item>
        
        <Form.Item label="No. of Bathrooms">
          <Input
            id='bathrooms_number'
            placeholder="Type a number"
            name="bathrooms_number"
            value={formValues.bathrooms_number}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Bathroom Type">
          <Select
            name="bathroom_text"
            defaultValue=""
            value={formValues.bathroom_text}
            onChange={handleSelectChange2}
          >
            <Option value="">Choose an option</Option>
            <Option value="Private Bath">Private Bathroom</Option>
            <Option value="Shared Bath">Shared Bathroom</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Amenities">
          <Select
            name="amenities"
            mode="multiple"
            allowClear
            value={formValues.amenities}
            onChange={handleMultipleSelectChange}
          >
            <Option value="">Choose one or more options</Option>
            <Option value="select-1">Essentials</Option>
            <Option value="select-2">Wifi</Option>
            <Option value="select-3">Air conditioning</Option>
            <Option value="select-4">Long term stays allowed</Option>
            <Option value="select-5">Hangers</Option>
            <Option value="select-6">Hair dryer</Option>
            <Option value="select-7">Iron</Option>
            <Option value="select-8">Shampoo</Option>
            <Option value="select-9">Kitchen</Option>
            <Option value="select-10">Heating</Option>
            <Option value="select-11">Hot water</Option>
            <Option value="select-12">Dishes and silverware</Option>
            <Option value="select-13">TV</Option>
            <Option value="select-14">Cooking basics</Option>
            <Option value="select-15">Refrigerator</Option>
            <Option value="select-16">Coffee maker</Option>
            <Option value="select-17">Dedicated workspace</Option>
            <Option value="select-18">Bed linens</Option>
            <Option value="select-19">Washer</Option>
            <Option value="select-20">Elevator</Option>
            
          </Select>
        </Form.Item>


        <Form.Item label="Neighbourhood">
          <Select
            name="neighbourhood_cleansed"
            value={formValues.neighbourhood_cleansed}
            onChange={handleSelectChange3}
          >
            <Option value="ΕΜΠΟΡΙΚΟ ΤΡΙΓΩΝΟ-ΠΛΑΚΑ">ΕΜΠΟΡΙΚΟ ΤΡΙΓΩΝΟ-ΠΛΑΚΑ</Option>                 
            <Option value="ΚΟΥΚΑΚΙ-ΜΑΚΡΥΓΙΑΝΝΗ">ΚΟΥΚΑΚΙ-ΜΑΚΡΥΓΙΑΝΝΗ</Option>                  
            <Option value="ΝΕΟΣ ΚΟΣΜΟΣ">ΝΕΟΣ ΚΟΣΜΟΣ</Option>                          
            <Option value="ΜΟΥΣΕΙΟ-ΕΞΑΡΧΕΙΑ-ΝΕΑΠΟΛΗ ">ΜΟΥΣΕΙΟ-ΕΞΑΡΧΕΙΑ-ΝΕΑΠΟΛΗ </Option>            
            <Option value="ΑΓΙΟΣ ΚΩΝΣΤΑΝΤΙΝΟΣ-ΠΛΑΤΕΙΑ ΒΑΘΗΣ ">ΑΓΙΟΣ ΚΩΝΣΤΑΝΤΙΝΟΣ-ΠΛΑΤΕΙΑ ΒΑΘΗΣ</Option>
            <Option value="ΠΑΓΚΡΑΤΙ">ΠΑΓΚΡΑΤΙ</Option>                            
            <Option value="ΠΛΑΤΕΙΑ ΑΤΤΙΚΗΣ">ΠΛΑΤΕΙΑ ΑΤΤΙΚΗΣ</Option>                  
            <Option value="ΚΟΛΩΝΑΚΙ">ΚΟΛΩΝΑΚΙ</Option>                            
            <Option value="ΑΜΠΕΛΟΚΗΠΟΙ">ΑΜΠΕΛΟΚΗΠΟΙ</Option>                         
            <Option value="ΑΚΡΟΠΟΛΗ">ΑΚΡΟΠΟΛΗ</Option>                            
            <Option value="ΘΗΣΕΙΟ">ΘΗΣΕΙΟ</Option>                             
            <Option value="ΚΕΡΑΜΕΙΚΟΣ">ΚΕΡΑΜΕΙΚΟΣ</Option>                          
            <Option value="ΣΤΑΔΙΟ">ΣΤΑΔΙΟ</Option>                              
            <Option value="ΠΕΤΡΑΛΩΝΑ">ΠΕΤΡΑΛΩΝΑ</Option>                           
            <Option value="ΚΥΨΕΛΗ">ΚΥΨΕΛΗ</Option>                              
            <Option value="ΙΛΙΣΙΑ">ΙΛΙΣΙΑ</Option>                              
            <Option value="ΓΟΥΔΙ">ΓΟΥΔΙ</Option>                               
            <Option value="ΖΑΠΠΕΙΟ">ΖΑΠΠΕΙΟ</Option>                            
            <Option value="ΛΥΚΑΒΗΤΤΟΣ">ΛΥΚΑΒΗΤΤΟΣ</Option>                          
            <Option value="ΠΛΑΤΕΙΑ ΑΜΕΡΙΚΗΣ">ΠΛΑΤΕΙΑ ΑΜΕΡΙΚΗΣ</Option>                    
            <Option value="ΠΑΤΗΣΙΑ">ΠΑΤΗΣΙΑ</Option>                            
            <Option value="ΝΙΡΒΑΝΑ">ΝΙΡΒΑΝΑ</Option>                             
            <Option value="ΓΚΥΖΗ">ΓΚΥΖΗ</Option>                               
            <Option value="ΚΟΛΩΝΟΣ">ΚΟΛΩΝΟΣ</Option>                             
            <Option value="ΠΕΔΙΟ ΑΡΕΩΣ">ΠΕΔΙΟ ΑΡΕΩΣ</Option>                         
            <Option value="ΣΤΑΘΜΟΣ ΛΑΡΙΣΗΣ">ΣΤΑΘΜΟΣ ΛΑΡΙΣΗΣ</Option>                     
            <Option value="ΓΚΑΖΙ">ΓΚΑΖΙ</Option>                               
            <Option value="ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ">ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ</Option>                      
            <Option value="ΑΝΩ ΚΥΨΕΛΗ">ΑΝΩ ΚΥΨΕΛΗ</Option>                          
            <Option value="ΒΟΤΑΝΙΚΟΣ">ΒΟΤΑΝΙΚΟΣ</Option>                           
            <Option value="ΑΚΑΔΗΜΙΑ ΠΛΑΤΩΝΟΣ">ΑΚΑΔΗΜΙΑ ΠΛΑΤΩΝΟΣ</Option>                   
            <Option value="ΑΝΩ ΠΑΤΗΣΙΑ">ΑΝΩ ΠΑΤΗΣΙΑ</Option>                         
            <Option value="ΓΟΥΒΑ">ΓΟΥΒΑ</Option>                               
            <Option value="ΝΕΑ ΚΥΨΕΛΗ">ΝΕΑ ΚΥΨΕΛΗ</Option>                          
            <Option value="ΕΛΛΗΝΟΡΩΣΩΝ">ΕΛΛΗΝΟΡΩΣΩΝ</Option>                         
            <Option value="1Ο ΝΕΚΡΟΤΑΦΕΙΟ">1Ο ΝΕΚΡΟΤΑΦΕΙΟ</Option>                      
            <Option value="ΣΕΠΟΛΙΑ">ΣΕΠΟΛΙΑ</Option>                             
            <Option value="ΠΟΛΥΓΩΝΟ">ΠΟΛΥΓΩΝΟ</Option>                            
            <Option value="ΑΓΙΟΣ ΕΛΕΥΘΕΡΙΟΣ">ΑΓΙΟΣ ΕΛΕΥΘΕΡΙΟΣ</Option>                    
            <Option value="ΚΟΛΟΚΥΝΘΟΥ">ΚΟΛΟΚΥΝΘΟΥ</Option>                          
            <Option value="ΠΡΟΜΠΟΝΑ">ΠΡΟΜΠΟΝΑ</Option>                            
            <Option value="ΡΙΖΟΥΠΟΛΗ">ΡΙΖΟΥΠΟΛΗ</Option>                           
            <Option value="ΡΗΓΙΛΛΗΣ">ΡΗΓΙΛΛΗΣ</Option>                            
            <Option value="ΠΕΝΤΑΓΩΝΟ">ΠΕΝΤΑΓΩΝΟ</Option>                         
  
          </Select>
        </Form.Item>
        
        <Form.Item label="Superhost">
          <Switch
            id='host_is_superhost'
            name="host_is_superhost"
            checked={formValues.host_is_superhost}
            onChange={handleSwitchChange1}
          />
        </Form.Item>
        
        <Form.Item>
          <Button type="secondary" onClick={resetForm}>
            Reset
          </Button>
          &nbsp;
          <Button type="primary" onClick={handleFormSubmit}>
            Submit
          </Button>
        </Form.Item>
      </form>

      <Divider />

      {models && (
        <div>
          <Title level={3}>Price</Title>
          The price prediction for one night in dollars ($) for the above listing according to our machine learning model is:<br/><br/>
          <pre align="center"><font size="6">{JSON.stringify(models)}$</font></pre>
        </div>
      )}
    </Card>

  );

};

export default Models;
