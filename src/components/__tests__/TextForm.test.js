import TextForm from '../TextForm';

const testProps = {
  success: true,
  text: 'test text',
  resetImage: () => {},
  submit: () => {}
};

describe('TextForm component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TextForm {...testProps} />);
  });

  it('Should render container without errors', () => {
    const container = findByTestAttr(wrapper, 'textBoxContainer');
    expect(container.length).toBe(1);
  });

  it('Should render message box without errors', () => {
    const messageBox = findByTestAttr(wrapper, 'messageBox');
    expect(messageBox.length).toBe(1);
  });

  it('Should render text input without errors', () => {
    const textInput = findByTestAttr(wrapper, 'textInput');
    expect(textInput.length).toBe(1);
  });

  it('Should render button container without errors', () => {
    const formButtons = findByTestAttr(wrapper, 'goPlayContainer');
    expect(formButtons.length).toBe(1);
  });

  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const propsError = checkProps(TextForm, testProps);
      expect(propsError).toBeUndefined();
    });
  });
});
