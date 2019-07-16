import PlayAgain from '../PlayAgain';

const testProps = {
  resetImage: () => {}
};

describe('PlayAgain component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PlayAgain {...testProps} />);
  });

  it('Should render button without errors', () => {
    const button = findByTestAttr(wrapper, 'playAgainButton');
    expect(button.length).toBe(1);
  });

  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const PropsError = checkProps(PlayAgain, testProps);
      expect(PropsError).toBeUndefined();
    });
  });
});
