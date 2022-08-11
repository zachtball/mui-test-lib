import { Button as MuiButton } from '@mui/material';
import { get } from 'lodash-es';
import { css } from '@emotion/react';
const Button = () => {
  console.log(get({ hi: 'hello' }, 'hi', 'nope'));
  return (
    <MuiButton
      css={css`
        background-color: red;
      `}
    >
      hello
    </MuiButton>
  );
};

export { Button };
