import React from 'react';
import {shallow} from 'enzyme';
import {Menu, MenuProps} from './Menu';
import {EditMovieForm} from '../Form/EditMovieForm';

jest.mock('../../assets/cancel.svg', () => ({
    CloseIcon: () => <></>,
}));

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
}));

jest.mock('../../redux/action', () => ({
    deleteMovies: jest.fn(),
}));

jest.mock('../Modal', () => ({
    Modal: () => <></>,
}));

jest.mock('../Modal/ModalPortal', () => ({
    ModalPortal: () => <></>,
}));

jest.mock('../Form/EditMovieForm',()=>({
    EditMovieForm: () => <></>,
}));

const setupComponent = (render: Function) => {
    const computedProps: MenuProps = {
        closeMenu: jest.fn(),
        className: '',
        id: 1,
    };

    const wrapper = render(<Menu {...computedProps} />);

    return {
        wrapper,
        props: computedProps,
    };
};

describe('Menu', () => {
    describe('busic render', () => {
        it('should render', () => {
            const {wrapper} = setupComponent(shallow);

            expect(wrapper.exists()).toBeTruthy();
        });
    });

    describe('render components', () => {
        it('should render <EditMovieForm />', () => {
            const {wrapper} = setupComponent(shallow);
            wrapper.find(EditMovieForm);

            expect(wrapper.exists()).toBeTruthy();
        });
    });

    describe('behaviour', () => {
        const setState = jest.fn();
        const useStateMock: any = (initState: any) => [initState, setState];
        jest.spyOn(React, 'useState').mockImplementation(useStateMock);

        afterEach(() => {
            jest.clearAllMocks();
        });

        it('should change the state by clicking on edit button and open a modal', () => {
            const {wrapper} = setupComponent(shallow);
            const button = wrapper.find(`[data-test="edit-button"]`);
            const modal = wrapper.find(`[data-test="edit-modal"]`);

            expect(button).toHaveLength(1);
            expect(modal.prop('open')).toEqual(false);
            button.simulate('click');
            expect(setState).toHaveBeenCalledWith(true);
        });

        it('should change the state when close edit form', () => {
            const {wrapper} = setupComponent(shallow);
            const form = wrapper.find(`[data-test="edit"]`);

            form.simulate('close');
            expect(setState).toHaveBeenCalledWith(false);
        });

        it('should close edit modal', () => {
            const {wrapper, props} = setupComponent(shallow);
            const modal = wrapper.find(`[data-test="edit-modal"]`);

            modal.simulate('close');
            expect(props.closeMenu).toHaveBeenCalled();
        });

        it('should change the state by clicking on delete button and open a modal', () => {
            const {wrapper} = setupComponent(shallow);
            const button = wrapper.find(`[data-test="delete-button"]`);
            const modal = wrapper.find(`[data-test="delete-modal"]`);

            expect(button).toHaveLength(1);
            expect(modal.prop('open')).toEqual(false);
            button.simulate('click');
            expect(setState).toHaveBeenCalledWith(true);
        });

        it('should close delete modal', () => {
            const {wrapper, props} = setupComponent(shallow);
            const modal = wrapper.find(`[data-test="delete-modal"]`);

            modal.simulate('close');
            expect(props.closeMenu).toHaveBeenCalled();
        });
    });
});