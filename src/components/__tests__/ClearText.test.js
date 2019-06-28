import ClearText from '../ClearText';

const testProps = {
  clearText: () => {}
};

describe('Clear Text component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ClearText {...testProps} />);
  });

  it('Should render without errors', () => {
    const button = findByTestAttr(wrapper, 'clearTextButton');
    expect(button.length).toBe(1);
  });

  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const propsError = checkProps(ClearText, testProps);
      expect(propsError).toBeUndefined();
    });
  });
});
