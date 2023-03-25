import { getProductDetails, getProducts, postAddToCart } from './ShopApi';

describe('ShopApi case tests', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(),
    })
  );
  global.Request = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(),
    })
  );

  it('getProducts works', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => {
      return Promise.resolve({ json: jest.fn() });
    });
    jest.spyOn(global, 'Request').mockImplementation(() => {
      return Promise.resolve();
    });
    const params = { setResponse: jest.fn() };
    await getProducts(params);
    expect(params.setResponse).toHaveBeenCalled();
  });

  it('getProducts fails', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => {
      return Promise.reject({ json: jest.fn() });
    });
    jest.spyOn(global, 'Request').mockImplementation(() => {
      return Promise.reject();
    });
    const params = { setResponse: jest.fn() };
    await getProducts(params);
    expect(params.setResponse).toHaveBeenCalledTimes(0);
  });

  it('getProductDetails works', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => {
      return Promise.resolve({ json: jest.fn() });
    });
    jest.spyOn(global, 'Request').mockImplementation(() => {
      return Promise.resolve();
    });
    const params = { id: 'test-id', setResponse: jest.fn() };
    await getProductDetails(params);
    expect(params.setResponse).toHaveBeenCalled();
  });

  it('getProductDetails fails', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => {
      return Promise.reject({ json: jest.fn() });
    });
    jest.spyOn(global, 'Request').mockImplementation(() => {
      return Promise.reject();
    });
    const params = { id: 'test-id', setResponse: jest.fn() };
    await getProductDetails(params);
    expect(params.setResponse).toHaveBeenCalledTimes(0);
  });

  it('postAddToCart works', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => {
      return Promise.resolve({ json: jest.fn() });
    });
    jest.spyOn(global, 'Request').mockImplementation(() => {
      return Promise.resolve();
    });
    const params = {
      body: {
        id: 'test-id',
        colorCode: 1001,
        storageCode: 2000,
      },
      setResponse: jest.fn(),
    };
    await postAddToCart(params);
    expect(params.setResponse).toHaveBeenCalled();
  });

  it('postAddToCart fails', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => {
      return Promise.reject({ json: jest.fn() });
    });
    jest.spyOn(global, 'Request').mockImplementation(() => {
      return Promise.reject();
    });
    const params = {
      body: {
        id: 'test-id',
        colorCode: 1001,
        storageCode: 2000,
      },
      setResponse: jest.fn(),
    };
    await postAddToCart(params);
    expect(params.setResponse).toHaveBeenCalledTimes(0);
  });
});
