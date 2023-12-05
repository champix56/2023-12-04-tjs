/* eslint-disable */
import MemeForm from './MemeForm';
import {emptyMeme} from 'orsys-tjs-meme'
export default {
  title: "MemeForm",
};

export const Default = () => <MemeForm meme={emptyMeme}/>;

Default.story = {
  name: 'default',
};
