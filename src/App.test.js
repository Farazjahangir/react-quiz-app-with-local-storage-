import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Component/Header/Header';
import Logout from './Component/Logout/Logout';
import Login from './Screens/Login/Login';
import Protect from './Screens/Protect/Protect';
import Quizdetails from './Screens/Quizdetails/Quizdetails';
import Quizpage from './Screens/Quizpage/Quizpage';
import Quizzes from './Screens/Quizzes/Quizzes';
import Signup from './Screens/Signup/Signup';

Enzyme.configure({ adapter: new Adapter() });


describe('Header', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('has a valid snapshot', () => {
        const component = renderer.create(
            <Header />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});



describe('Logout', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Logout />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('has a valid snapshot', () => {
        const component = renderer.create(
            <Logout />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('Login', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Login />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('has a valid snapshot', () => {
        const component = renderer.create(
            <Login />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});




describe('Protect', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Protect />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('has a valid snapshot', () => {
        const component = renderer.create(
            <Protect />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});




describe('Quizdetails', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Quizdetails />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('has a valid snapshot', () => {
        const component = renderer.create(
            <Quizdetails />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});




describe('Quizpage', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Quizpage />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('has a valid snapshot', () => {
        const component = renderer.create(
            <Quizpage />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});



describe('Quizzes', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Quizzes />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('has a valid snapshot', () => {
        const component = renderer.create(
            <Quizzes />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});




describe('Signup', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Signup />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('has a valid snapshot', () => {
        const component = renderer.create(
            <Signup />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});