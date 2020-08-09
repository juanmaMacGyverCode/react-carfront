import React from 'react';
import AddCar from './components/AddCar';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DialogContent from '@material-ui/core/DialogContent';

Enzyme.configure({ adapter: new Adapter() });

describe('<AddCar />', () => {
    it('renders five <TextInput /> components', () => {
        const wrapper = shallow(<AddCar />);
        console.log(wrapper.contains(<DialogContent></DialogContent>));
        console.log(wrapper.find({ name: "brand" }).length);
        expect(wrapper.find({ name: "brand" })).toHaveLength(1);
        expect(wrapper.find({ name: "model" })).toHaveLength(1);
        expect(wrapper.find({ name: "color" })).toHaveLength(1);
        expect(wrapper.find({ name: "year" })).toHaveLength(1);
        expect(wrapper.find({ name: "price" })).toHaveLength(1);
    });
});