import TextForm from '../TextForm';

const testProps = {
  success: true,
  text: 'Test text',
  clearText: () => {},
  resetImage: () => {},
  submit: () => {}
};

describe('TextForm component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TextForm {...testProps} />);
  });

  describe('Message box', () => {
    it('Should render without errors', () => {
      const messageBox = findByTestAttr(wrapper, 'messageBox');
      expect(messageBox.length).toBe(1);
    });
  });

  describe('Text input and clear button container', () => {
    it('Should render without errors', () => {
      const inputAndClear = findByTestAttr(wrapper, 'inputAndClearContainer');
      expect(inputAndClear.length).toBe(1);
    });
  });

  describe('Text input', () => {
    it('Should render without errors', () => {
      const textInput = findByTestAttr(wrapper, 'textInput');
      expect(textInput.length).toBe(1);
    });
  });

  describe('Form buttons container (Go! and Play Again!)', () => {
    it('Should render without errors', () => {
      const formButtons = findByTestAttr(wrapper, 'goPlayContainer');
      expect(formButtons.length).toBe(1);
    });
  });

  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const propsError = checkProps(TextForm, testProps);
      expect(propsError).toBeUndefined();
    });
  });
});
