import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import DotEnv from 'dotenv';

Enzyme.configure({
    adapter: new Adapter()
})

DotEnv.config({ path: '.env.test' });