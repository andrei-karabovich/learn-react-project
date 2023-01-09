import {create , } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';


describe('ProfileStatus component', () => {

    it('span should be displayed', async () => {
        const statusComponentRenderer = create(<ProfileStatus editMode="false" status="test"/>);
        const statusComponentRoot = statusComponentRenderer.root; 
        const span = await statusComponentRoot.findByType('span');
        expect(span).not.toBeNull();
    });

    it('initial status should be equals props status', async () => {
        const statusComponentRenderer = create(<ProfileStatus editMode="false" status="test"/>);
        const statusComponentRoot = statusComponentRenderer.root; 
        const span = await statusComponentRoot.findByType('span');
        expect(span.children[0] === 'test').toBeTruthy;
    });


    it('edit mode shuld be activated on doubleclick', async () => {
        const statusComponentRenderer = create(<ProfileStatus editMode="false" status="test"/>);
        const statusComponentRoot = statusComponentRenderer.root; 
        const span = await statusComponentRoot.findByType('span');
        span.parent.props.onDoubleClick();
        const input = await statusComponentRoot.findByType('input');
        expect(input !== null).toBeTruthy;
    });
});