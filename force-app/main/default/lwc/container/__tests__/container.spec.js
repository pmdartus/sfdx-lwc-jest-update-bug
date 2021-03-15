import { createElement } from 'lwc';
import Container from 'c/container';

test('should render fine', () => {
    const elm = createElement('c-container', { is: Container });
    document.body.appendChild(elm);

    const btns = elm.shadowRoot.querySelectorAll('button');
    expect(btns.length).toBe(1);
});