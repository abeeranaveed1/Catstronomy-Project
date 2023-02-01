import React from 'react';
import renderer from 'react-test-renderer';
import UploadImage from './UploadImage';
describe('<UploadImage />', () => {
    const tree = renderer.create(<UploadImage />).toJSON();
    it('Upload Image Component renders correctly', () => {
        expect(tree).toMatchSnapshot();
    });
});