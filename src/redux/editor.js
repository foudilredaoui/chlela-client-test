const INIT_STATE = {
};

export const POST_IMG_REQUEST = 'POST_IMG_REQUEST';
export const POST_IMG_SUCCESS = 'POST_IMG_SUCCESS';
export const POST_IMG_FAILED = 'POST_IMG_FAILED';

export const postIMGRequest = (image) => ({
  type: POST_IMG_REQUEST,
  payload: {
    image
  }
});

export const postIMGSuccess = () => ({
  type: POST_IMG_SUCCESS
});

export const postIMGFailed = () => ({
  type: POST_IMG_FAILED
});

export const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
