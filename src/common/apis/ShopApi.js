export const getProducts = async ({ setResponse }) => {
  try {
    const request = new Request('https://itx-frontend-test.onrender.com/api/product');
    const response = await fetch(request);
    const json = await response.json();
    setResponse(json);
  } catch (error) {
    console.error(error);
  }
};

export const getProductDetails = async ({ id, setResponse }) => {
  try {
    const request = new Request(`https://itx-frontend-test.onrender.com/api/product/${id}`);
    const response = await fetch(request);
    const json = await response.json();
    setResponse(json);
  } catch (error) {
    console.error(error);
  }
};
