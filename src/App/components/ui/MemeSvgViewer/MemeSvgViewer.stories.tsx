/* eslint-disable */
import MemeSvgViewer from './MemeSvgViewer';
import {emptyMeme} from 'orsys-tjs-meme'
export default {
  title: "MemeSvgViewer",
};

export const Default = () => <MemeSvgViewer meme={emptyMeme} />;

Default.story = {
  name: 'default',
};
