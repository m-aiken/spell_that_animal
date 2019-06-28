import LetterButton from '../LetterButton';

const testProps = {
  value: 'a',
  updateText: () => {}
};

describe('Letter Button component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LetterButton {...testProps} />);
  });

  it('Should render without errors', () => {
    const button = findByTestAttr(wrapper, 'letterButton');
    expect(button.length).toBe(1);
  });

  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const propsError = checkProps(LetterButton, testProps);
      expect(propsError).toBeUndefined();
    });
  });
});
