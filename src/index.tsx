import { Button as MuiButton } from '@mui/material';
import { get } from 'lodash-es';
const Button = () => {
  console.log(get({ hi: 'hello' }, 'hi', 'nope'));
  return <MuiButton>hello</MuiButton>;
};

export { Button };
