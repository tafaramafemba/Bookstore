const CHECK_STATUS = 'CHECK_STATUS';

export const lookAtStatus = () => {
  return {
      type: CHECK_STATUS
  }
}

export default function (state = [], action) {
  switch (action.type) {
    case CHECK_STATUS: { return 'Under construction ' };
    default: return state;
  }
}