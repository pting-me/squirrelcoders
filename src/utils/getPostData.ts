import readingTime from 'reading-time';
import getSlug from './getSlug';

type Post = {
  title: string;
  file: string;
  rawContent: () => string;
};

export default function getPostData(post: Post) {
  // matches filename (after last slash '/')
  // drops extension (after '.' if it exists)
  return {
    slug: getSlug(post.file),
    readingTime: readingTime(post.rawContent()).text,
  };
}
