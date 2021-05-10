import React from 'react';
import Modal from './Modal';
import {shallow} from 'enzyme';

jest.mock('../../assets/cancel.svg', () => ({
    CloseIcon: () => <></>,
}));

jest.mock('../Modal/ModalPortal', () => ({
    ModalPortal: () => <></>,
}));

describe('Modal', () => {
    it('should render', () => {
        const wrapper = shallow(<Modal open={true} onClose={jest.fn()} />);
        expect(wrapper.exists()).toBeTruthy();
    });

    it('should return undefined when open prop false', () => {
        const open = false;
        const wrapper = shallow(<Modal open={open} onClose={jest.fn()} />);

        expect(wrapper.prop('open')).toBeUndefined();
    });
});