import AnimalImage from '../AnimalImage';

const testProps = {
  image: 'Test String'
};

describe('Animal Image component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AnimalImage {...testProps} />);
  });

  it('Should render div without errors', () => {
    const imageDiv = findByTestAttr(wrapper, 'animalImageComponent');
    expect(imageDiv.length).toBe(1);
  });

  it('Should render image without errors', () => {
    const image = findByTestAttr(wrapper, 'animalImage');
    expect(image.length).toBe(1);
  });

  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const propsError = checkProps(AnimalImage, testProps);
      expect(propsError).toBeUndefined();
    });
  });
});
